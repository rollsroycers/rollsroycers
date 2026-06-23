#!/usr/bin/env node
// Verify every image reference resolves to a file that exists in public/.
// Scans src/ + public/locales/ for /images/... refs (and built HTML if present).
// Exit 1 if any referenced image is missing (a broken image).
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
const ROOT = '/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com'
function walk(d, o = []) { if (!existsSync(d)) return o; for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p, o); else o.push(p) } return o }
const RE = /\/images\/[A-Za-z0-9 _.,()/-]+\.(?:jpe?g|png|webp|gif|svg|avif|mp4)/g
const scanRoots = [join(ROOT, 'src'), join(ROOT, 'public/locales')]
if (process.argv.includes('--html')) scanRoots.push(join(ROOT, '.next/server/pages'))
const refs = new Map() // path -> sample file
for (const r of scanRoots) for (const f of walk(r)) {
  if (!/\.(tsx?|jsx?|json|html)$/.test(f)) continue
  const txt = readFileSync(f, 'utf8')
  for (const m of txt.matchAll(RE)) if (!refs.has(m[0])) refs.set(m[0], f.replace(ROOT + '/', ''))
}
const missing = []
for (const [ref, where] of refs) {
  const dec = decodeURIComponent(ref)
  if (!existsSync(join(ROOT, 'public', ref)) && !existsSync(join(ROOT, 'public', dec))) missing.push([ref, where])
}
console.log(`image refs scanned: ${refs.size} | missing: ${missing.length}`)
if (missing.length) { missing.slice(0, 30).forEach(([r, w]) => console.log(`  MISSING ${r}   (in ${w})`)); process.exit(1) }
console.log('✅ every referenced image exists')
