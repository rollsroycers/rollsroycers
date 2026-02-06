import type { NextApiRequest, NextApiResponse } from 'next'

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'rollsroycers2026indexnow'
const HOST = 'rollsroycers.com'

const ALL_URLS = [
  '/',
  '/fleet',
  '/fleet/phantom',
  '/fleet/ghost',
  '/fleet/cullinan',
  '/fleet/dawn',
  '/fleet/wraith',
  '/services',
  '/services/wedding',
  '/services/corporate',
  '/services/airport-transfer',
  '/services/chauffeur',
  '/services/events',
  '/services/photoshoot',
  '/services/tours',
  '/locations',
  '/locations/downtown-dubai',
  '/locations/dubai-marina',
  '/locations/palm-jumeirah',
  '/locations/business-bay',
  '/locations/jbr',
  '/locations/difc',
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
  '/faq',
  '/privacy',
]

const LOCALES = ['', '/ar', '/fr', '/ru', '/zh', '/hi']

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
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

  // Specific URLs from request body (optional)
  if (req.body?.urls && Array.isArray(req.body.urls)) {
    urlsToSubmit.push(...req.body.urls)
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
