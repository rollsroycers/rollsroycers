#!/usr/bin/env node
// Post-deploy cache warmer.
//
// WHY: every page is pure SSG, served behind Cloudflare's edge cache
// (s-maxage=3600, stale-while-revalidate=86400). A deploy purges that cache, so the
// FIRST request to each route after a deploy is a cold Worker render. The heaviest
// pages (home, locations, services, fleet) can momentarily exceed the Worker
// CPU/128MB limits on that cold render → a transient Error 1102 / 503 for whoever
// happens to be first. Once a route is cached, stale-while-revalidate keeps it warm
// for ~24h, so the problem only ever exists in the seconds right after a deploy.
//
// This script makes the deploy machine absorb that first cold render for every route
// (with retries), so real visitors hit a warm edge cache instead. It is a safety net,
// not the root fix — the root fix is keeping the cold render cheap (lazy i18n bundling,
// see src/lib/serverSideTranslations.ts). Note Cloudflare's cache is per-PoP, so this
// warms the PoP nearest the deploy machine; other PoPs warm on their first hit.
//
// Usage: node scripts/warm-cache.mjs [--base https://rollsroycers.com] [--retries 4]

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const getArg = (name, def) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? args[i + 1] : def
}
const BASE = (getArg('base', 'https://rollsroycers.com')).replace(/\/$/, '')
const MAX_RETRIES = parseInt(getArg('retries', '4'), 10)
const CONCURRENCY = parseInt(getArg('concurrency', '4'), 10)

// Source of truth = the sitemap we just generated, so warming always matches what we ship.
function loadUrls() {
  const candidates = ['public/sitemap-pages.xml', 'public/sitemap.xml']
  for (const rel of candidates) {
    try {
      const xml = readFileSync(join(ROOT, rel), 'utf8')
      const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim())
      if (locs.length) return [...new Set(locs)]
    } catch (_) { /* try next */ }
  }
  // Fallback: a minimal hot set if no sitemap is present.
  const paths = ['/', '/ar', '/ru', '/fleet', '/services', '/booking', '/pricing']
  return paths.map(p => `${BASE}${p}`)
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function warmOne(url) {
  let lastStatus = 0
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      // cache-busting header is NOT used — we WANT the edge to cache the result.
      const res = await fetch(url, {
        method: 'GET',
        redirect: 'manual',
        headers: { 'User-Agent': 'rrx-cache-warmer/1.0' },
      })
      lastStatus = res.status
      // drain body so the connection (and the render) actually completes
      await res.arrayBuffer().catch(() => {})
      if (res.status >= 200 && res.status < 400) {
        const cache = res.headers.get('cf-cache-status') || res.headers.get('x-nextjs-cache') || ''
        return { url, status: res.status, attempt, cache }
      }
    } catch (e) {
      lastStatus = `ERR:${e.code || e.message}`
    }
    if (attempt < MAX_RETRIES) await sleep(800 * (attempt + 1)) // linear backoff
  }
  return { url, status: lastStatus, attempt: MAX_RETRIES, cache: '', failed: true }
}

async function run() {
  const urls = loadUrls()
  console.log(`Warming ${urls.length} routes on ${BASE} (concurrency=${CONCURRENCY}, retries=${MAX_RETRIES})`)
  const queue = [...urls]
  const results = []
  async function worker() {
    while (queue.length) {
      const url = queue.shift()
      const r = await warmOne(url)
      results.push(r)
      const flag = r.failed ? '❌' : (r.attempt > 0 ? `✓(retry ${r.attempt})` : '✓')
      console.log(`  ${flag} ${r.status} ${r.url}${r.cache ? `  [${r.cache}]` : ''}`)
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, urls.length) }, worker))

  const failed = results.filter(r => r.failed)
  const retried = results.filter(r => !r.failed && r.attempt > 0)
  console.log(`\nDone: ${results.length - failed.length}/${results.length} warm` +
    `${retried.length ? `, ${retried.length} needed retries (cold renders absorbed)` : ''}` +
    `${failed.length ? `, ${failed.length} STILL FAILING` : ''}.`)
  if (failed.length) {
    console.log('Still failing (investigate — likely genuinely over the Worker limit, not just cold):')
    for (const r of failed) console.log(`  ${r.status}  ${r.url}`)
    process.exit(1)
  }
}

run().catch(e => { console.error(e); process.exit(1) })
