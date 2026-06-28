/**
 * static-worker.js — tiny Cloudflare Worker for the static-first architecture.
 *
 * With `run_worker_first` scoped to /api/* plus the (low-traffic) redirect source
 * paths, ONLY those requests enter this worker. Every normal HTML/JS/CSS/image
 * request is served directly by Cloudflare Static Assets at 0ms worker CPU,
 * keeping the site within the Workers FREE 10ms CPU limit.
 *
 * Responsibilities:
 *   1. /api/indexnow            -> in-worker handler (port of src/pages/api/indexnow.ts)
 *   2. host + path redirects    -> mirror of next.config.js redirects/rewrites
 *   3. everything else          -> env.ASSETS.fetch(request), with security headers wrapped
 *
 * NOTE (U2): security headers (CSP/HSTS) only attach to responses that pass
 * through this worker. Page/asset responses that bypass the worker need
 * Cloudflare Transform Rules at deploy time to be byte-complete. See spec §7/§8.
 */

const HOST = 'rollsroycers.com'

// Exact-match redirects. Order: exact before prefix.
const EXACT = {
  '/rent-rolls-royes-dubai': ['/', 301],
  '/rolls-royes-rental-dubai': ['/', 301],
  '/role-royce-dubai': ['/', 301],
  '/phantom-rental': ['/fleet/phantom', 301],
  '/ghost-rental': ['/fleet/ghost', 301],
  '/cullinan-rental': ['/fleet/cullinan', 301],
  '/ae': ['/ar', 301],
  '/fr': ['/', 301],
  '/zh': ['/', 301],
  '/hi': ['/', 301],
  '/en': ['/', 301],
  '/cookies': ['/cookie-policy', 302],
  '/week': ['/pricing', 301],
  '/month': ['/pricing', 301],
}

// Prefix redirects: [prefix, (rest) => destination].
const PREFIX = [
  ['/ae/', (r) => `/ar/${r}`],
  ['/fr/', (r) => `/${r}`],
  ['/zh/', (r) => `/${r}`],
  ['/hi/', (r) => `/${r}`],
  ['/en/', (r) => `/${r}`],
]

function redirectFor(url) {
  // NOTE: www->non-www is intentionally NOT handled here. www.rollsroycers.com has
  // no DNS record (NXDOMAIN), and run_worker_first is path-based so a Worker cannot
  // reliably intercept by host. If www is ever pointed at the zone, add a zone-level
  // Cloudflare Redirect Rule (www.* -> apex, 301) instead — not worker code.
  const p = url.pathname
  if (EXACT[p]) {
    const [dest, code] = EXACT[p]
    return Response.redirect(new URL(dest + url.search, url.origin).href, code)
  }
  for (const [pre, fn] of PREFIX) {
    if (p.startsWith(pre)) {
      const rest = p.slice(pre.length)
      return Response.redirect(new URL(fn(rest) + url.search, url.origin).href, 301)
    }
  }
  return null
}

const SECURITY_HEADERS = {
  'X-DNS-Prefetch-Control': 'on',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self)',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.google-analytics.com https://statcounter.com https://*.statcounter.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.statcounter.com https://api.indexnow.org https://cloudflareinsights.com; frame-src 'self' https://www.youtube.com https://www.google.com; media-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests;",
}

function withHeaders(res, pathname) {
  const h = new Headers(res.headers)
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) h.set(k, v)
  if (/^\/(_next\/static|fonts|images)\//.test(pathname)) {
    h.set('Cache-Control', 'public, max-age=31536000, immutable')
  }
  return new Response(res.body, {
    status: res.status,
    statusText: res.statusText,
    headers: h,
  })
}

// --- IndexNow handler (port of src/pages/api/indexnow.ts) ---

const ALL_URLS = [
  '/',
  '/fleet',
  '/fleet/phantom',
  '/fleet/ghost',
  '/fleet/cullinan',
  '/fleet/dawn',
  '/fleet/wraith',
  '/fleet/spectre',
  '/fleet/cullinan-black-badge',
  '/fleet/ghost-black-badge',
  '/services',
  '/services/wedding',
  '/services/corporate',
  '/services/airport-transfer',
  '/services/chauffeur',
  '/services/events',
  '/services/photoshoot',
  '/services/tours',
  '/services/birthday',
  '/services/hourly-rental',
  '/locations',
  '/locations/downtown-dubai',
  '/locations/dubai-marina',
  '/locations/palm-jumeirah',
  '/locations/business-bay',
  '/locations/jbr',
  '/locations/difc',
  '/locations/jumeirah',
  '/locations/deira',
  '/compare',
  '/compare/phantom-vs-maybach',
  '/compare/rolls-royce-vs-bentley',
  '/compare/rolls-royce-vs-ferrari',
  '/compare/rolls-royce-vs-mercedes',
  '/blog',
  '/about',
  '/contact',
  '/booking',
  '/pricing',
  '/gallery',
  '/testimonials',
  '/faq',
  '/privacy',
]

// Only the three LIVE locales. fr/zh/hi were removed from the site and 301 to en,
// so submitting them to IndexNow would just queue redirects/404s.
const INDEXNOW_LOCALES = ['', '/ar', '/ru']

async function handleIndexNow(req, env) {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed. Use POST.' }, { status: 405 })
  }

  const INDEXNOW_KEY = env.INDEXNOW_KEY
  if (!INDEXNOW_KEY) {
    return Response.json(
      { error: 'IndexNow key not configured. Set the INDEXNOW_KEY secret.' },
      { status: 500 },
    )
  }

  const url = new URL(req.url)
  const authKey = req.headers.get('x-api-key') || url.searchParams.get('key')
  if (authKey !== INDEXNOW_KEY) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const urlsToSubmit = []
  for (const locale of INDEXNOW_LOCALES) {
    for (const p of ALL_URLS) {
      urlsToSubmit.push(`https://${HOST}${locale}${p}`)
    }
  }

  // Optional body.urls — same-origin https URLs only, capped at 1000.
  let body = null
  try {
    body = await req.json()
  } catch {
    body = null
  }
  if (body && Array.isArray(body.urls)) {
    const prefix = `https://${HOST}/`
    const safe = body.urls
      .filter((u) => typeof u === 'string')
      .filter((u) => u === `https://${HOST}` || u.startsWith(prefix))
      .slice(0, 1000)
    urlsToSubmit.push(...safe)
  }

  const results = {}
  try {
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urlsToSubmit.slice(0, 10000),
      }),
    })
    results.indexnow = {
      status: indexNowResponse.status,
      statusText: indexNowResponse.statusText,
    }
  } catch (error) {
    results.indexnow = { error: error.message }
  }

  return Response.json({
    success: true,
    urlsSubmitted: urlsToSubmit.length,
    results,
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // 1. API
    if (url.pathname === '/api/indexnow') {
      return handleIndexNow(request, env)
    }

    // 2. Redirects (reached only for paths listed in run_worker_first)
    const r = redirectFor(url)
    if (r) return r

    // 3. Static asset, with security-header injection
    const res = await env.ASSETS.fetch(request)
    return withHeaders(res, url.pathname)
  },
}
