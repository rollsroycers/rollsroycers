#!/usr/bin/env node
// Phase C1: split the seoblocks namespace (all 11 AEO blocks, ~36-55KB) into one
// small file per block, so each page loads ONLY its own block (~3KB) instead of all.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
const ROOT = '/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com'
const LOCALES = ['en', 'ar', 'ru']
const sanitize = (b) => 'sb_' + b
const blocks = new Set()
for (const L of LOCALES) {
  const p = join(ROOT, 'public/locales', L, 'seoblocks.json')
  const data = JSON.parse(readFileSync(p, 'utf8')).seoBlocks || {}
  mkdirSync(join(ROOT, 'public/locales', L, 'seoblocks'), { recursive: true })
  for (const [key, val] of Object.entries(data)) {
    blocks.add(key)
    writeFileSync(
      join(ROOT, 'public/locales', L, 'seoblocks', key + '.json'),
      JSON.stringify({ seoBlocks: { [key]: val } }, null, 2) + '\n'
    )
  }
  rmSync(p) // remove the monolith
}
const list = [...blocks].sort()
writeFileSync('/tmp/seoblock-list.json', JSON.stringify(list, null, 2))
console.log('split into per-block files:')
list.forEach((b) => console.log(`  ${sanitize(b).padEnd(34)} <- public/locales/<lng>/seoblocks/${b}.json`))
