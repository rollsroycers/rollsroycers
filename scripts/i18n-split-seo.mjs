#!/usr/bin/env node
// Phase C2: split seo.json (one big {pages:{home,fleet,services,locations,other,compare,...}}
// loaded on every page, 46-58 KB) into one small file per section. Each page loads only
// its section. 'other' absorbs the misc/cookie-policy keys (blog.index uses pages.other.blog).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
const ROOT = '/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com'
const LOCALES = ['en', 'ar', 'ru']
const SECTIONS = ['home', 'fleet', 'services', 'locations', 'compare'] // 'other' is the catch-all
for (const L of LOCALES) {
  const p = join(ROOT, 'public/locales', L, 'seo.json')
  const pages = JSON.parse(readFileSync(p, 'utf8')).pages || {}
  mkdirSync(join(ROOT, 'public/locales', L, 'seo'), { recursive: true })
  const otherPages = {}
  for (const [k, v] of Object.entries(pages)) {
    if (SECTIONS.includes(k)) {
      writeFileSync(join(ROOT, 'public/locales', L, 'seo', k + '.json'),
        JSON.stringify({ pages: { [k]: v } }, null, 2) + '\n')
    } else {
      otherPages[k] = v // other, cookie-policy, anything else
    }
  }
  writeFileSync(join(ROOT, 'public/locales', L, 'seo', 'other.json'),
    JSON.stringify({ pages: otherPages }, null, 2) + '\n')
  rmSync(p)
}
console.log('seo.json split into sections:', [...SECTIONS, 'other'].map((s) => 'seo_' + s).join(', '))
