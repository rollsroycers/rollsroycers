#!/usr/bin/env node
// i18n verification harness.
//   (A) Builds the set of ALL known translation key-paths from public/locales.
//   (B) Scans every prerendered HTML page in .next/server/pages for VISIBLE text
//       that exactly equals a known key-path — i.e. an i18next key that failed to
//       resolve (renders as the raw key when its namespace wasn't loaded).
//   (C) Reports per-page raw-key hits + total HTML payload, and SEO signal counts
//       (FAQPage / hreflang) so a refactor can be proven non-regressive.
// Exit code 1 if any unresolved key is found.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const LOCALES = ['en', 'ar', 'ru']
const LOCALES_DIR = join(ROOT, 'public/locales')
const PAGES_DIR = join(ROOT, '.next/server/pages')

// ---------- (A) collect all known leaf key-paths ----------
function walkJson(obj, prefix, out) {
  for (const k of Object.keys(obj)) {
    const v = obj[k]
    const p = prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object' && !Array.isArray(v)) walkJson(v, p, out)
    else out.add(p)
  }
}
function collectFiles(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) collectFiles(p, out)
    else if (e.endsWith('.json')) out.push(p)
  }
  return out
}
const keyPaths = new Set()
for (const L of LOCALES) {
  const ldir = join(LOCALES_DIR, L)
  if (!existsSync(ldir)) continue
  for (const f of collectFiles(ldir)) {
    try { walkJson(JSON.parse(readFileSync(f, 'utf8')), '', keyPaths) } catch {}
  }
}
// Only consider key-paths that look like real i18next keys (>=2 segments, wordy)
const candidate = new Set(
  [...keyPaths].filter((k) => /^[a-zA-Z][\w]*(\.[a-zA-Z0-9_]+){1,}$/.test(k) && k.split('.').length >= 2)
)

// ---------- (B) scan built HTML ----------
function htmlFiles(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (statSync(p).isDirectory()) htmlFiles(p, out)
    else if (e.endsWith('.html')) out.push(p)
  }
  return out
}
const files = htmlFiles(PAGES_DIR)
let totalRaw = 0
const perPage = []
for (const f of files) {
  const html = readFileSync(f, 'utf8')
  // visible text between tags: >TEXT<
  const seen = new Set()
  const re = />\s*([a-zA-Z][\w]*(?:\.[a-zA-Z0-9_]+){1,})\s*</g
  let m
  while ((m = re.exec(html))) {
    const t = m[1]
    if (candidate.has(t)) seen.add(t)
  }
  const faq = (html.match(/"@type":"FAQPage"/g) || []).length
  const hreflang = (html.match(/rel="alternate"[^>]*hreflang/g) || []).length
  perPage.push({
    page: f.replace(PAGES_DIR + '/', ''),
    bytes: Buffer.byteLength(html),
    raw: [...seen],
    faq, hreflang,
  })
  totalRaw += seen.size
}

// ---------- (C) report ----------
const arg = process.argv[2]
if (arg === '--sizes') {
  perPage.sort((a, b) => b.bytes - a.bytes)
  console.log('TOP 15 pages by HTML bytes:')
  perPage.slice(0, 15).forEach((p) => console.log(`  ${String(p.bytes).padStart(8)}  ${p.page}`))
  const tot = perPage.reduce((s, p) => s + p.bytes, 0)
  console.log(`\nTOTAL HTML bytes across ${perPage.length} pages: ${tot} (${(tot/1048576).toFixed(2)} MB)`)
}
const offenders = perPage.filter((p) => p.raw.length)
console.log(`\n=== i18n raw-key scan: ${files.length} HTML pages, ${candidate.size} known key-paths ===`)
if (offenders.length === 0) {
  console.log('✅ NO unresolved i18next keys in any rendered page.')
} else {
  console.log(`❌ ${offenders.length} page(s) with unresolved keys (total ${totalRaw}):`)
  offenders.slice(0, 40).forEach((p) =>
    console.log(`  ${p.page}: ${p.raw.slice(0, 8).join(', ')}${p.raw.length > 8 ? ` +${p.raw.length - 8}` : ''}`)
  )
}
// SEO signal summary
const faqPages = perPage.filter((p) => p.faq > 1)
if (faqPages.length) {
  console.log(`\n⚠ pages with >1 FAQPage: ${faqPages.map((p) => `${p.page}(${p.faq})`).join(', ')}`)
} else {
  console.log('\n✅ no page has duplicate FAQPage.')
}
process.exit(offenders.length ? 1 : 0)
