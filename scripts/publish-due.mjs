#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/publish-due.mjs   —   the scheduled-publishing runner (cron target)
//
// The site is static (SSG, fallback:false): an article goes live only on a
// build+deploy. This script is run frequently by a cron (e.g. every 15 min); on
// each tick it checks publish-schedule.json and, IF one or more articles have
// just become due (publishAt ≤ now, not yet deployed), it rebuilds + deploys —
// so each article appears within the cron interval of its random scheduled time,
// looking organic. When nothing is due it exits immediately (cheap no-op).
//
//   node scripts/publish-due.mjs            # dry-run: report what's due
//   node scripts/publish-due.mjs --run      # build + deploy if due, then IndexNow
//
// Env: DEPLOY_CMD (default "npm run deploy"), INDEXNOW_KEY, SITE (default rollsroycers.com)
// State: .publish-state.json  (high-water mark of the latest publishAt deployed)
// ─────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const RUN = process.argv.includes('--run')
const SITE = process.env.SITE || 'rollsroycers.com'
const DEPLOY_CMD = process.env.DEPLOY_CMD || 'npm run deploy'
const STATE = path.join(ROOT, '.publish-state.json')

const sched = JSON.parse(fs.readFileSync(path.join(ROOT, 'publish-schedule.json'), 'utf8')).schedule
const now = Date.now()
const state = fs.existsSync(STATE) ? JSON.parse(fs.readFileSync(STATE, 'utf8')) : { hwm: '1970-01-01T00:00:00+04:00' }
const hwm = new Date(state.hwm).getTime()

// articles created on disk AND due now AND not already deployed
const exists = (slug) => fs.existsSync(path.join(ROOT, 'src/data/blog', `${slug}.json`))
const due = sched
  .filter((s) => new Date(s.publishAt).getTime() <= now && new Date(s.publishAt).getTime() > hwm && exists(s.slug))
  .sort((a, b) => new Date(a.publishAt) - new Date(b.publishAt))

// expose the due count to the CI workflow so it can skip npm ci/build on no-op ticks
if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `due=${due.length}\n`)

if (!due.length) { console.log(`[publish-due] nothing due (hwm ${state.hwm}).`); process.exit(0) }

console.log(`[publish-due] ${due.length} article(s) due:`)
for (const d of due) console.log(`   ${d.publishAt}  ${d.slug} (${d.role})`)

// URLs that will go live (i18n-correct: en no prefix, ar /ar/, ru /ru/)
const urls = due.flatMap((d) => [
  `https://${SITE}/blog/${d.slug}`,
  `https://${SITE}/ar/blog/${d.slug}`,
  `https://${SITE}/ru/blog/${d.slug}`,
])

if (!RUN) { console.log('[publish-due] dry-run — pass --run to build + deploy.'); process.exit(0) }

// 1) build + deploy (gating in blogFileStore + sitemap auto-includes the now-due)
console.log(`[publish-due] deploying: ${DEPLOY_CMD}`)
execSync(DEPLOY_CMD, { cwd: ROOT, stdio: 'inherit' })

// 2) update high-water mark
const newHwm = due[due.length - 1].publishAt
fs.writeFileSync(STATE, JSON.stringify({ hwm: newHwm, lastRun: new Date().toISOString(), lastCount: due.length }, null, 1))

// 3) IndexNow ping (Bing/Yandex) for the freshly-live URLs
const key = process.env.INDEXNOW_KEY
if (key) {
  try {
    const body = JSON.stringify({ host: SITE, key, keyLocation: `https://${SITE}/${key}.txt`, urlList: urls })
    execSync(`curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json" -d '${body.replace(/'/g, "")}'`, { stdio: 'ignore' })
    console.log(`[publish-due] IndexNow pinged ${urls.length} URLs.`)
  } catch { console.log('[publish-due] IndexNow ping failed (non-fatal).') }
} else {
  console.log('[publish-due] INDEXNOW_KEY not set — skipped IndexNow (also submit sitemap in GSC).')
}
console.log(`[publish-due] done. hwm → ${newHwm}`)
