import type { NextApiRequest, NextApiResponse } from 'next'

// SECURITY: no hardcoded fallback. The key MUST come from the INDEXNOW_KEY env (wrangler secret).
// The old default 'rollsroycers2026indexnow' was public (served at /rollsroycers2026indexnow.txt),
// so anyone could authenticate. Rotate the key file to match the new secret.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY
const HOST = 'rollsroycers.com'

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

const LOCALES = ['', '/ar', '/fr', '/ru', '/zh', '/hi']

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  // Fail closed if the key isn't configured (no public default anymore)
  if (!INDEXNOW_KEY) {
    return res.status(500).json({ error: 'IndexNow key not configured. Set the INDEXNOW_KEY secret.' })
  }

  const authKey = req.headers['x-api-key'] || req.query.key
  if (authKey !== INDEXNOW_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  const urlsToSubmit: string[] = []

  // Build full URL list with all locales
  for (const locale of LOCALES) {
    for (const path of ALL_URLS) {
      urlsToSubmit.push(`https://${HOST}${locale}${path}`)
    }
  }

  // Specific URLs from request body (optional) — validate to same-origin https URLs only,
  // so a caller cannot attach arbitrary/spam URLs to our domain key. Cap the count.
  if (req.body?.urls && Array.isArray(req.body.urls)) {
    const prefix = `https://${HOST}/`
    const safe = (req.body.urls as unknown[])
      .filter((u): u is string => typeof u === 'string')
      .filter((u) => u === `https://${HOST}` || u.startsWith(prefix))
      .slice(0, 1000)
    urlsToSubmit.push(...safe)
  }

  const results: Record<string, any> = {}

  // Submit to Bing/IndexNow
  try {
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urlsToSubmit.slice(0, 10000) // IndexNow limit
      })
    })
    results.indexnow = {
      status: indexNowResponse.status,
      statusText: indexNowResponse.statusText
    }
  } catch (error: any) {
    results.indexnow = { error: error.message }
  }

  return res.status(200).json({
    success: true,
    urlsSubmitted: urlsToSubmit.length,
    results
  })
}
