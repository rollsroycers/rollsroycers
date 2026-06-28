#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/apply-schedule.mjs
//
// Stamps each article file with its scheduled publishAt (from publish-schedule.json)
// and sets each locale's `date` to the publish day — so article schema/freshness
// matches the real go-live, and the build-time gating (blogFileStore + sitemap)
// can reveal it on schedule.
//
//   node scripts/apply-schedule.mjs --dry-run   # preview (default)
//   node scripts/apply-schedule.mjs --apply      # write publishAt + date into files
// ─────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const APPLY = process.argv.includes('--apply')
const DIR = path.join(ROOT, 'src/data/blog')
const sched = JSON.parse(fs.readFileSync(path.join(ROOT, 'publish-schedule.json'), 'utf8')).schedule

let applied = 0, missing = 0
for (const s of sched) {
  const file = path.join(DIR, `${s.slug}.json`)
  if (!fs.existsSync(file)) { missing++; continue }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  data.publishAt = s.publishAt
  for (const loc of ['en', 'ar', 'ru']) if (data[loc]) data[loc].date = s.publishAt.slice(0, 10)
  if (APPLY) fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
  applied++
}
console.log(`${APPLY ? 'APPLIED' : 'DRY-RUN'}: ${applied} article files stamped, ${missing} not yet created.`)
if (!APPLY) console.log('Run with --apply to write publishAt + date into the files.')
