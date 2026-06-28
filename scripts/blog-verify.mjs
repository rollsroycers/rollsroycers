#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/blog-verify.mjs
//
// Per-article quality gate for the file-based blog (src/data/blog/<slug>.json).
// Enforces the rules in content-laws.md + rollsroycers-blog.md so 700 articles
// can be produced safely without manual review of every one.
//
// HARD checks (FAIL → exit 1):
//   • valid JSON with en + ar + ru, each a full BlogArticle (required fields).
//   • Trilingual Parity — identical content block-type sequence across locales.
//   • Image paths bound to slug: image === /images/blog/<slug>-cover.jpg AND one
//     content image with src === /images/blog/<slug>-inline.webp.
//   • i18n reversed link law for IN-CONTENT <a href> (raw HTML):
//       en → internal links MUST NOT start with /ar/ or /ru/
//       ar → every internal link MUST start with /ar/
//       ru → every internal link MUST start with /ru/
//     cta.buttonLink (rendered via next/link, auto-localized) MUST stay unprefixed.
//   • Internal-link cap — at most 5 in-content internal links per locale (MAX 5),
//     pointing to related topics + important service/fleet pages.
//
// SOFT checks (WARN only):
//   • fewer than 3 in-content internal links per locale.   • word count < 1500.
//   • relatedArticles count outside 3–5.   • related slug not in the registry.
//
// Usage:  node scripts/blog-verify.mjs            (all files)
//         node scripts/blog-verify.mjs <slug>     (one file)
// ─────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIR = path.join(ROOT, 'src/data/blog')
const LOCALES = ['en', 'ar', 'ru']
const REQUIRED = ['title', 'description', 'author', 'date', 'readTime', 'category', 'image', 'content', 'relatedArticles']

// Known slugs for related-existence (file-based + registered + inline registry).
function knownSlugs() {
  const set = new Set()
  try { fs.readdirSync(DIR).filter((f) => f.endsWith('.json')).forEach((f) => set.add(f.replace(/\.json$/, ''))) } catch {}
  try { JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/blogSlugs.json'), 'utf8')).forEach((s) => set.add(s)) } catch {}
  return set
}
const KNOWN = knownSlugs()

const hrefs = (blocks) => {
  const out = []
  for (const b of blocks || []) {
    const texts = [b.text, ...(Array.isArray(b.items) ? b.items : [])].filter((t) => typeof t === 'string')
    for (const t of texts) for (const m of t.matchAll(/href=['"]([^'"]+)['"]/g)) out.push(m[1])
  }
  return out
}
const isInternal = (h) => h.startsWith('/') && !h.startsWith('//')
const words = (blocks) => (blocks || []).map((b) => [b.text, ...(b.items || [])].filter((x) => typeof x === 'string').join(' ')).join(' ').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length

function verify(slug, data) {
  const fails = [], warns = []
  for (const loc of LOCALES) {
    const a = data[loc]
    if (!a) { fails.push(`missing locale "${loc}"`); continue }
    for (const f of REQUIRED) if (a[f] === undefined || a[f] === null) fails.push(`${loc}: missing field "${f}"`)
    if (!Array.isArray(a.content)) fails.push(`${loc}: content is not an array`)
  }
  if (fails.length) return { fails, warns }

  // Trilingual parity — block-type sequence
  const seq = (loc) => data[loc].content.map((b) => b.type).join(',')
  if (!(seq('en') === seq('ar') && seq('ar') === seq('ru')))
    fails.push(`Trilingual Parity broken — block sequence differs (en=${data.en.content.length}, ar=${data.ar.content.length}, ru=${data.ru.content.length} blocks)`)

  // Image binding
  for (const loc of LOCALES) {
    const a = data[loc]
    if (a.image !== `/images/blog/${slug}-cover.jpg`) fails.push(`${loc}: image must be /images/blog/${slug}-cover.jpg (got "${a.image}")`)
    const hasInline = a.content.some((b) => b.type === 'image' && b.src === `/images/blog/${slug}-inline.webp`)
    if (!hasInline) fails.push(`${loc}: missing inline image /images/blog/${slug}-inline.webp`)
  }

  // i18n reversed link law (in-content hrefs)
  for (const loc of LOCALES) {
    for (const h of hrefs(data[loc].content)) {
      if (!isInternal(h)) continue
      if (loc === 'en' && (h.startsWith('/ar/') || h.startsWith('/ru/'))) fails.push(`en: in-content link must be UNprefixed (got "${h}")`)
      if (loc === 'ar' && !h.startsWith('/ar/')) fails.push(`ar: in-content link must start with /ar/ (got "${h}")`)
      if (loc === 'ru' && !h.startsWith('/ru/')) fails.push(`ru: in-content link must start with /ru/ (got "${h}")`)
    }
    // cta.buttonLink must stay unprefixed (next/link localizes)
    for (const b of data[loc].content) {
      if (b.type === 'cta' && typeof b.buttonLink === 'string' && (b.buttonLink.startsWith('/ar/') || b.buttonLink.startsWith('/ru/')))
        fails.push(`${loc}: cta.buttonLink must stay unprefixed for next/link (got "${b.buttonLink}")`)
    }
  }

  // Internal-link policy: 3–5 in-content internal links per locale, MAX 5,
  // pointing to related topics + important service/fleet pages (content-laws §1).
  for (const loc of LOCALES) {
    const internal = [...new Set(hrefs(data[loc].content).filter(isInternal))]
    if (internal.length > 5) fails.push(`${loc}: ${internal.length} in-content internal links — MAX is 5`)
    else if (internal.length < 3) warns.push(`${loc}: ${internal.length} in-content internal links (aim 3–5: related topics + service/fleet pages)`)
  }

  // Soft
  for (const loc of LOCALES) { const wc = words(data[loc].content); if (wc < 1500) warns.push(`${loc}: ${wc} words (< 1500 target)`) }
  const rel = data.en.relatedArticles || []
  if (rel.length < 3 || rel.length > 5) warns.push(`relatedArticles = ${rel.length} (aim 3–5)`)
  for (const r of rel) if (!KNOWN.has(r)) warns.push(`related "${r}" not found in registry`)

  return { fails, warns }
}

const onlySlug = process.argv[2]
let files = []
try { files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json')) } catch { console.log('No src/data/blog/ directory yet.'); process.exit(0) }
if (onlySlug) files = files.filter((f) => f === `${onlySlug}.json`)
if (!files.length) { console.log('No matching article files.'); process.exit(0) }

let failed = 0, warned = 0
for (const f of files.sort()) {
  const slug = f.replace(/\.json$/, '')
  let data
  try { data = JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8')) } catch (e) { console.log(`✖ FAIL ${slug}: invalid JSON — ${e.message}`); failed++; continue }
  const { fails, warns } = verify(slug, data)
  if (fails.length) { failed++; console.log(`✖ FAIL ${slug}`); fails.forEach((m) => console.log(`    • ${m}`)) }
  else if (warns.length) { warned++; console.log(`⚠ WARN ${slug}`); warns.forEach((m) => console.log(`    • ${m}`)) }
  else console.log(`✓ PASS ${slug}`)
}
console.log('─'.repeat(60))
console.log(`${files.length} article(s): ${files.length - failed - warned} pass, ${warned} warn, ${failed} fail`)
process.exit(failed ? 1 : 0)
