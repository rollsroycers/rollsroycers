#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/gen-publish-schedule.mjs
//
// Generates a NATURAL-looking publishing calendar for the 700 articles over ~9
// months, then writes publish-schedule.json (slug → publishAt, Dubai time).
//
// Design goals (why each choice):
//   • Organic cadence, not a bot grid: variable per-day counts (0–5), lighter
//     weekends (Fri/Sat in the UAE), occasional "quiet days", random times of day
//     weighted to plausible publishing hours — never a fixed daily slot.
//   • Topical-authority order: each cluster's PILLAR publishes BEFORE its
//     Supporting spokes (so up-links to the pillar are never to an unpublished
//     page). Clusters are interleaved so no week is a flood of one topic.
//   • Monotonic order→time: articles fill days in publish-order and get sorted,
//     spaced times within the day ⇒ pillar always has an earlier timestamp than
//     its own supporting articles. (Invariant asserted at the end.)
//   • Deterministic: seeded PRNG ⇒ re-running gives the same calendar; change
//     --seed to roll a different natural pattern.
//
// Usage: node scripts/gen-publish-schedule.mjs --start 2026-08-01 --months 9 --seed 7
// ─────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d }
const START = arg('--start', '2026-08-01')            // first possible publish day (set AFTER images are done)
const MONTHS = parseInt(arg('--months', '9'), 10)
const SEED = parseInt(arg('--seed', '7'), 10)
const MAX_PER_DAY = 5
const TZ = '+04:00'                                    // Dubai

// seeded PRNG (mulberry32) — deterministic, no Date.now/Math.random reliance
let _s = SEED >>> 0
const rnd = () => { _s |= 0; _s = (_s + 0x6D2B79F5) | 0; let t = Math.imul(_s ^ (_s >>> 15), 1 | _s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296 }
const rint = (a, b) => a + Math.floor(rnd() * (b - a + 1))
const pick = (arr) => arr[Math.floor(rnd() * arr.length)]

// ── source: committed image manifest has slug + role + cluster + n ──
const man = JSON.parse(fs.readFileSync(path.join(ROOT, 'rollsroycers-image-generation-manifest.json'), 'utf8'))
const arts = man.map(m => ({ n: m.n, slug: m.slug, role: m.role || 'Supporting', cluster: m.cluster || 'BRAND-INFO' }))
// pillar of each supporting: from titles-dedup if present, else infer (same cluster, lowest-n pillar)
let pillarOf = {}
try {
  const dd = JSON.parse(fs.readFileSync('/tmp/rr-titles-dedup.json', 'utf8'))
  for (const r of dd) pillarOf[r.slug] = r.pillarSlug
} catch {}

// ── 1) publish ORDER: interleave clusters, pillars first, supporting trail their pillar ──
const clusters = [...new Set(arts.map(a => a.cluster))]
const pillarsByCluster = {}
for (const c of clusters) pillarsByCluster[c] = arts.filter(a => a.cluster === c && a.role === 'Pillar').sort((x, y) => x.n - y.n)
// round-robin pillar order across clusters → interleaved
const interleaved = []
let more = true
while (more) {
  more = false
  for (const c of clusters) { const q = pillarsByCluster[c]; if (q.length) { interleaved.push(q.shift()); more = true } }
}
const pillarRank = {}
interleaved.forEach((p, i) => { pillarRank[p.slug] = i / Math.max(1, interleaved.length) }) // 0..1, pillars span first ~45% via scale below

function score(a) {
  if (a.role === 'Pillar') return pillarRank[a.slug] * 0.45                    // pillars live in the first ~45% of the order
  const pr = pillarRank[pillarOf[a.slug]] ?? rnd() * 0.45
  return pr * 0.45 + 0.05 + rnd() * 0.95                                        // supporting trail their pillar, spread into the back
}
const ordered = arts.map(a => ({ ...a, _score: score(a) })).sort((x, y) => x._score - y._score)

// ── 2) per-day counts over the calendar, natural variance, weekend/quiet weighting ──
const start = new Date(START + 'T00:00:00' + TZ)
const DAYS = Math.round(MONTHS * 30.44)
const dayWeight = []
for (let d = 0; d < DAYS; d++) {
  const date = new Date(start.getTime() + d * 86400000)
  const dow = date.getUTCDay() // 5=Fri,6=Sat
  let w = dow === 5 ? 0.45 : dow === 6 ? 0.55 : 1.0          // UAE weekend lighter
  if (rnd() < 0.08) w = 0                                     // ~8% quiet days (a break)
  w *= 0.55 + rnd() * 1.1                                     // per-day noise
  dayWeight.push(w)
}
const sumW = dayWeight.reduce((s, w) => s + w, 0)
let counts = dayWeight.map(w => Math.max(0, Math.min(MAX_PER_DAY, Math.round(w * 700 / sumW))))
// reconcile to exactly 700
const fix = () => counts.reduce((s, c) => s + c, 0)
let guard = 0
while (fix() !== 700 && guard++ < 20000) {
  const diff = 700 - fix()
  const i = rint(0, DAYS - 1)
  if (diff > 0 && counts[i] < MAX_PER_DAY && dayWeight[i] > 0) counts[i]++
  else if (diff < 0 && counts[i] > 0) counts[i]--
}

// ── 3) fill days in order; ── 4) assign spaced, weighted random times ──
const HOUR_W = [1,1,1,1,1,1,2,3,6,10,11,11,9,7,6,8,8,7,7,6,5,4,2,1] // 0..23 Dubai
const hourBag = []; HOUR_W.forEach((w, h) => { for (let k = 0; k < w; k++) hourBag.push(h) })
const pad = (n) => String(n).padStart(2, '0')
const schedule = []
let idx = 0
for (let d = 0; d < DAYS && idx < ordered.length; d++) {
  const date = new Date(start.getTime() + d * 86400000)
  const ymd = `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
  const k = Math.min(counts[d], ordered.length - idx)
  if (!k) continue
  // draw k times, enforce ≥35-min spacing, avoid round :00
  let times = []
  for (let j = 0; j < k; j++) {
    let mins
    let tries = 0
    do { let h = pick(hourBag); let m = rint(1, 59); mins = h * 60 + m; tries++ }
    while (times.some(t => Math.abs(t - mins) < 35) && tries < 40)
    times.push(mins)
  }
  times.sort((a, b) => a - b)
  for (let j = 0; j < k; j++) {
    const a = ordered[idx++]
    const h = Math.floor(times[j] / 60), m = times[j] % 60, s = rint(3, 57)
    const publishAt = `${ymd}T${pad(h)}:${pad(m)}:${pad(s)}${TZ}`
    schedule.push({ n: a.n, slug: a.slug, role: a.role, cluster: a.cluster, pillar: pillarOf[a.slug] || null, order: idx - 1, publishAt })
  }
}

// ── invariant: every supporting publishes strictly AFTER its pillar ──
const at = {}; schedule.forEach(s => { at[s.slug] = s.publishAt })
let violations = 0
for (const s of schedule) if (s.pillar && at[s.pillar] && at[s.pillar] >= s.publishAt && s.role === 'Supporting') violations++

fs.writeFileSync(path.join(ROOT, 'publish-schedule.json'), JSON.stringify({ start: START, months: MONTHS, seed: SEED, tz: TZ, count: schedule.length, schedule }, null, 1))

// ── stats ──
const perDay = {}; schedule.forEach(s => { const day = s.publishAt.slice(0, 10); perDay[day] = (perDay[day] || 0) + 1 })
const dayCounts = Object.values(perDay)
const hist = [0,0,0,0,0,0]; Object.values(perDay).forEach(c => hist[Math.min(c,5)]++)
const usedDays = Object.keys(perDay).length
const byMonth = {}; schedule.forEach(s => { const mo = s.publishAt.slice(0,7); byMonth[mo] = (byMonth[mo]||0)+1 })
const lastPillarOrder = Math.max(...schedule.filter(s=>s.role==='Pillar').map(s=>s.order))
console.log(`scheduled: ${schedule.length} | start ${START} | ${MONTHS}mo | seed ${SEED}`)
console.log(`active days: ${usedDays}/${DAYS} | per-day min/avg/max: ${Math.min(...dayCounts)}/${(schedule.length/usedDays).toFixed(2)}/${Math.max(...dayCounts)}`)
console.log(`per-day histogram (#days with N posts): 1→${hist[1]} 2→${hist[2]} 3→${hist[3]} 4→${hist[4]} 5→${hist[5]} | quiet days: ${DAYS-usedDays}`)
console.log(`pillar→supporting order invariant violations: ${violations} (must be 0)`)
console.log(`last pillar at order #${lastPillarOrder}/${schedule.length} (pillars finish ~${((lastPillarOrder/schedule.length)*MONTHS).toFixed(1)} months in)`)
console.log('monthly totals:', JSON.stringify(byMonth))
const sampleDay = Object.entries(perDay).find(([d,c])=>c>=3)
if (sampleDay) console.log(`sample busy day ${sampleDay[0]} times:`, schedule.filter(s=>s.publishAt.startsWith(sampleDay[0])).map(s=>s.publishAt.slice(11,16)).join('  '))
