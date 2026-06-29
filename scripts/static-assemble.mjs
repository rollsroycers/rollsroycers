#!/usr/bin/env node
/**
 * static-assemble.mjs
 *
 * Static-First assemble step for rollsroycers.com.
 *
 * Reads the prerendered Next.js (Pages router, SSG) build output and produces a
 * flat static-asset tree under `.assets-dist/` that Cloudflare Workers Static
 * Assets can serve directly with `html_handling: "drop-trailing-slash"`.
 *
 * Source of truth for the layout/decisions is the approved implementation spec.
 * Key facts (verified against this build):
 *   - Locale homepages live at `.next/server/pages/{en,ar,ru}.html`.
 *   - Sub-pages live under `.next/server/pages/{en,ar,ru}/<rest>.html`.
 *   - Default locale `en` is served at ROOT (no prefix); `ar`->`/ar`, `ru`->`/ru`.
 *   - Client-nav pageProps live in paired `.json` files next to each `.html`.
 *
 * This script is deterministic and idempotent: it always `rm -rf`s the output
 * dir first, then rebuilds it from scratch. No external dependencies.
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const SRC = path.join(ROOT, '.next', 'server', 'pages')
const STATIC = path.join(ROOT, '.next', 'static')
const PUBLIC = path.join(ROOT, 'public')
const OUT = path.join(ROOT, '.assets-dist')

const LOCALES = [
  { l: 'en', urlPrefix: '', dataPrefix: '' },
  { l: 'ar', urlPrefix: 'ar', dataPrefix: 'ar' },
  { l: 'ru', urlPrefix: 'ru', dataPrefix: 'ru' },
]

// --- file emitted verbatim from the spec (documentation / Pages portability) ---

const REDIRECTS = `# Processed by Cloudflare Workers Static Assets at the edge (RELATIVE URLs only;
# absolute/host URLs are rejected with code 100324). These run BEFORE the worker
# for every path, so redirects apply whether or not the worker is invoked.
# www->non-www is intentionally omitted (absolute URL not allowed, and
# www.rollsroycers.com has no DNS record). Add a zone Redirect Rule if www is added.

# misspellings -> home
/rent-rolls-royes-dubai / 301
/rolls-royes-rental-dubai / 301
/role-royce-dubai / 301

# rental shortcuts -> fleet
/phantom-rental /fleet/phantom 301
/ghost-rental /fleet/ghost 301
/cullinan-rental /fleet/cullinan 301

# UAE alias -> Arabic
/ae /ar 301
/ae/* /ar/:splat 301

# removed locales -> English
/fr / 301
/fr/* /:splat 301
/zh / 301
/zh/* /:splat 301
/hi / 301
/hi/* /:splat 301

# legacy /en -> root (rewrites in next.config become 301s in static serving)
/en / 301
/en/* /:splat 301

# misc
/cookies /cookie-policy 302
/week /pricing 301
/month /pricing 301
`

const HEADERS = `# Source of truth for security headers is src/static-worker.js (Workers Static
# Assets does NOT process _headers; Pages does). Cache-Control below is honored
# by the asset pipeline in a Pages context; in Workers context the worker sets it.

/*
  X-DNS-Prefetch-Control: on
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(self)
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.google-analytics.com https://statcounter.com https://*.statcounter.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.statcounter.com https://api.indexnow.org https://cloudflareinsights.com; frame-src 'self' https://www.youtube.com https://www.google.com; media-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
  X-Content-Type-Options: nosniff

/_next/data/*
  Cache-Control: public, max-age=31536000, immutable
  X-Content-Type-Options: nosniff

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
  X-Content-Type-Options: nosniff

/images/*
  Cache-Control: public, max-age=31536000, immutable
  Accept-CH: DPR, Viewport-Width, Width
  X-Content-Type-Options: nosniff
`

// --- helpers ---

async function readBuildId() {
  const buildIdPath = path.join(ROOT, '.next', 'BUILD_ID')
  const id = (await fs.readFile(buildIdPath, 'utf8')).trim()
  if (!id) throw new Error('Empty .next/BUILD_ID')
  return id
}

async function* walk(dir) {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch (err) {
    if (err.code === 'ENOENT') return
    throw err
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else if (entry.isFile()) {
      yield full
    }
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function copyFile(src, dest) {
  await ensureDir(path.dirname(dest))
  await fs.copyFile(src, dest)
}

async function exists(p) {
  try {
    await fs.access(p)
    return true
  } catch {
    return false
  }
}

async function countFiles(dir, predicate) {
  let n = 0
  for await (const f of walk(dir)) {
    if (predicate(f)) n++
  }
  return n
}

// --- main ---

async function main() {
  const BUILD_ID = await readBuildId()
  console.log(`[assemble] BUILD_ID = ${BUILD_ID}`)

  if (!(await exists(SRC))) {
    throw new Error(`Missing build output: ${SRC} (run "next build" first)`)
  }

  // 1. Clean output (idempotent).
  await fs.rm(OUT, { recursive: true, force: true })
  await ensureDir(OUT)

  let htmlCopied = 0
  let dataCopied = 0

  // 2. HTML pages per locale.
  for (const { l, urlPrefix } of LOCALES) {
    // 2a. Locale root file: <l>.html -> <prefix>/index.html  (en -> index.html)
    const rootHtml = path.join(SRC, `${l}.html`)
    if (!(await exists(rootHtml))) {
      throw new Error(`Missing locale root HTML: ${rootHtml}`)
    }
    const rootDest = path.join(OUT, urlPrefix, 'index.html')
    await copyFile(rootHtml, rootDest)
    htmlCopied++

    // 2b. Sub-pages: <l>/<rest>.html -> <prefix>/<rest>.html (literal prefix swap)
    const localeDir = path.join(SRC, l)
    for await (const file of walk(localeDir)) {
      if (!file.endsWith('.html')) continue
      const rel = path.relative(localeDir, file) // e.g. fleet/phantom.html
      const dest = path.join(OUT, urlPrefix, rel)
      await copyFile(file, dest)
      htmlCopied++
    }
  }

  // 3. Root fallback 404 / 500 come from the en copies (global, unprefixed).
  for (const name of ['404.html', '500.html']) {
    const dest = path.join(OUT, name)
    if (!(await exists(dest))) {
      const enCopy = path.join(SRC, 'en', name)
      if (await exists(enCopy)) {
        await copyFile(enCopy, dest)
        htmlCopied++
      }
    }
  }

  // 4. _next/data (client-side navigation pageProps).
  const dataRoot = path.join(OUT, '_next', 'data', BUILD_ID)
  for (const { l, dataPrefix } of LOCALES) {
    // 4a. Locale root json -> <dataPrefix>/index.json  (en -> index.json)
    const rootJson = path.join(SRC, `${l}.json`)
    if (await exists(rootJson)) {
      const dest = path.join(dataRoot, dataPrefix, 'index.json')
      await copyFile(rootJson, dest)
      dataCopied++
    }
    // 4b. Sub-page json -> <dataPrefix>/<rest>.json, excluding *.nft.json
    const localeDir = path.join(SRC, l)
    for await (const file of walk(localeDir)) {
      if (!file.endsWith('.json')) continue
      if (file.endsWith('.nft.json')) continue
      const rel = path.relative(localeDir, file) // e.g. fleet/phantom.json
      const dest = path.join(dataRoot, dataPrefix, rel)
      await copyFile(file, dest)
      dataCopied++
    }
  }

  // 5. _next/static -> .assets-dist/_next/static (verbatim).
  if (!(await exists(STATIC))) {
    throw new Error(`Missing ${STATIC}`)
  }
  await fs.cp(STATIC, path.join(OUT, '_next', 'static'), { recursive: true })

  // 6. public/* -> .assets-dist/ (recursive). Skip _redirects/_headers so we do
  //    not clobber the canonical files emitted in step 7.
  await fs.cp(PUBLIC, OUT, {
    recursive: true,
    filter: (src) => {
      const base = path.basename(src)
      return base !== '_redirects' && base !== '_headers'
    },
  })

  // 7. Emit canonical _redirects and _headers (documentation / Pages portability).
  await fs.writeFile(path.join(OUT, '_redirects'), REDIRECTS, 'utf8')
  await fs.writeFile(path.join(OUT, '_headers'), HEADERS, 'utf8')

  // 8. VERIFY — fail hard on any mismatch.
  const errors = []

  const srcHtmlCount = await countFiles(SRC, (f) => f.endsWith('.html'))
  const outHtmlCount = await countFiles(OUT, (f) => f.endsWith('.html'))
  // Expected: every source .html ships. The 3 locale roots become index.html.
  // Root 404.html/500.html are duplicated from en, so OUT can exceed SRC by up
  // to 2. Assert OUT >= SRC and the delta is only the 0..2 root fallbacks.
  if (outHtmlCount < srcHtmlCount) {
    errors.push(`HTML count regressed: out=${outHtmlCount} < src=${srcHtmlCount}`)
  }
  if (outHtmlCount - srcHtmlCount > 2) {
    errors.push(`HTML count too high: out=${outHtmlCount} src=${srcHtmlCount} (delta>2)`)
  }

  const mustExist = [
    'index.html',
    'ar/index.html',
    'ru/index.html',
    'fleet/phantom.html',
    'ar/fleet/phantom.html',
    'ru/fleet/phantom.html',
    '404.html',
    path.join('_next', 'static'),
  ]
  for (const rel of mustExist) {
    if (!(await exists(path.join(OUT, rel)))) {
      errors.push(`Missing required output: ${rel}`)
    }
  }

  // Blog posts must exist and be CONSISTENT across locales — no hardcoded count,
  // so the blog scales to any number of posts (1000+) without touching this gate.
  const blogCounts = {}
  for (const prefix of ['', 'ar', 'ru']) {
    const blogDir = path.join(OUT, prefix, 'blog')
    blogCounts[prefix || 'en'] = await countFiles(blogDir, (f) => f.endsWith('.html'))
  }
  const enN = blogCounts.en
  if (enN < 1) errors.push(`No blog post HTML found (en=${enN}) — getStaticPaths/blogFileStore may be broken`)
  if (!(blogCounts.en === blogCounts.ar && blogCounts.ar === blogCounts.ru)) {
    errors.push(`Blog HTML count mismatch across locales: ${JSON.stringify(blogCounts)} (each post must build for en/ar/ru)`)
  }

  const staticEmpty = (await countFiles(path.join(OUT, '_next', 'static'), () => true)) === 0
  if (staticEmpty) errors.push('_next/static is empty')

  // Case-sensitive image-reference check. Cloudflare serves assets case-sensitively
  // but macOS is case-insensitive, so a wrong-case ref (e.g. /images/rolls-royce-phantom.jpg
  // when the file is Rolls-royce-phantom.jpg) passes locally then 404s in production.
  {
    const htmlFiles = []
    const walk = async (dir) => {
      for (const e of await fs.readdir(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name)
        if (e.isDirectory()) await walk(p)
        else if (e.name.endsWith('.html')) htmlFiles.push(p)
      }
    }
    await walk(OUT)
    const refs = new Set()
    const re = /\/images\/[^"'?)\s\\]+\.(?:jpg|jpeg|png|webp|avif|gif|svg)/gi
    for (const hf of htmlFiles) {
      const html = await fs.readFile(hf, 'utf8')
      let m
      while ((m = re.exec(html))) refs.add(m[0])
    }
    const dirCache = new Map()
    const listDir = async (d) => {
      if (!dirCache.has(d)) { try { dirCache.set(d, await fs.readdir(d)) } catch { dirCache.set(d, []) } }
      return dirCache.get(d)
    }
    let mism = 0
    for (const ref of refs) {
      const abs = path.join(OUT, ref)
      const entries = await listDir(path.dirname(abs))
      const base = path.basename(abs)
      if (!entries.includes(base)) {
        const variant = entries.find((e) => e.toLowerCase() === base.toLowerCase())
        errors.push(variant
          ? `Image CASE mismatch (will 404 on Cloudflare): HTML references "${ref}" but the file is ".../${variant}"`
          : `Image referenced in HTML but MISSING from output: ${ref}`)
        mism++
      }
    }
    if (!mism) console.log(`  image refs checked  : ${refs.size} unique (all exact-case OK)`)
  }

  if (errors.length) {
    console.error('[assemble] VERIFICATION FAILED:')
    for (const e of errors) console.error('  - ' + e)
    process.exit(1)
  }

  // Summary.
  console.log('[assemble] OK')
  console.log(`  html files copied : ${htmlCopied}`)
  console.log(`  out html on disk  : ${outHtmlCount} (src=${srcHtmlCount})`)
  console.log(`  data json copied  : ${dataCopied}`)
  console.log(`  output dir        : ${path.relative(ROOT, OUT)}/`)
}

main().catch((err) => {
  console.error('[assemble] ERROR:', err)
  process.exit(1)
})
