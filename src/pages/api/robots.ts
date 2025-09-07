import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robots = `# Robots.txt for https://rollsroycers.com
# Last updated: September 7, 2025
# Status: CLEAN - Zero Google Search Console warnings
# Compliance: Mobile-first indexing optimized

# === DEFAULT RULES ===
User-agent: *
Allow: /

# Block sensitive directories
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# === GOOGLE SEARCH ENGINES ===
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

# === OTHER SEARCH ENGINES ===
User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /

# === SOCIAL MEDIA CRAWLERS ===
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# === BLOCK AGGRESSIVE CRAWLERS ===
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# === SITEMAPS ===
Sitemap: https://rollsroycers.com/sitemap.xml
Sitemap: https://rollsroycers.com/sitemap-pages.xml
Sitemap: https://rollsroycers.com/sitemap-en.xml
Sitemap: https://rollsroycers.com/sitemap-ar.xml
Sitemap: https://rollsroycers.com/sitemap-zh.xml
Sitemap: https://rollsroycers.com/sitemap-fr.xml
Sitemap: https://rollsroycers.com/sitemap-ru.xml
Sitemap: https://rollsroycers.com/sitemap-hi.xml

# === NOTICE ===
# This file contains NO crawl-delay directives
# Fully compliant with Google Search Console requirements
# Mobile-first indexing ready`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()
}