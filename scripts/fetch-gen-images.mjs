#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/fetch-gen-images.mjs
//
// Takes the rawUrls returned by the image-generation workflow and lands them on
// disk at the planned paths and exact dimensions:
//   cover  → 1200×630 .jpg     inline → 1600×900 .webp
// Then you run scripts/blog-img-metadata.mjs --apply to stamp all the rules
// (multilingual XMP + Dubai GPS + AI disclosure + C2PA).
//
//   node scripts/fetch-gen-images.mjs <results.json>
// where results.json = [{ path, dims, rawUrl }, ...]  (dims like "1200x630")
// ─────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const file = process.argv[2]
if (!file) { console.error('usage: node scripts/fetch-gen-images.mjs <results.json>'); process.exit(1) }
const items = JSON.parse(fs.readFileSync(file, 'utf8'))

let saved = 0, skipped = 0, failed = 0
for (const it of items) {
  if (!it.rawUrl) { skipped++; continue }
  const out = path.join(ROOT, it.path)
  const tmp = path.join('/tmp', 'gen_' + path.basename(it.path) + (it.rawUrl.endsWith('.png') ? '.png' : '.jpg'))
  const dims = it.dims || (it.path.includes('-cover.') ? '1200x630' : '1600x900')
  try {
    execFileSync('curl', ['-sfL', '-o', tmp, it.rawUrl], { stdio: 'ignore' })
    fs.mkdirSync(path.dirname(out), { recursive: true })
    // resize to exact dims, center-crop, quality 86; output format inferred from extension (.jpg/.webp)
    execFileSync('magick', [tmp, '-resize', `${dims}^`, '-gravity', 'center', '-extent', dims, '-strip', '-interlace', 'Plane', '-sampling-factor', '4:2:0', '-quality', '82', out], { stdio: 'ignore' })
    fs.unlinkSync(tmp)
    saved++
  } catch (e) {
    failed++
    console.error(`  ✖ ${it.path}: ${String(e).split('\n')[0].slice(0, 80)}`)
  }
}
console.log(`landed: ${saved} | skipped (no url): ${skipped} | failed: ${failed}`)
