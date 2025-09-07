import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robots = `# Robots.txt for rollsroycers.com  
# Updated: September 7, 2025 - Clean version with zero warnings
# File size: optimized, no crawl-delay directives

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Google crawlers
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

# Other search engines  
User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /

# Social crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Block scrapers
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

# Sitemaps
Sitemap: https://rollsroycers.com/sitemap.xml
Sitemap: https://rollsroycers.com/sitemap-pages.xml
Sitemap: https://rollsroycers.com/sitemap-en.xml
Sitemap: https://rollsroycers.com/sitemap-ar.xml
Sitemap: https://rollsroycers.com/sitemap-zh.xml
Sitemap: https://rollsroycers.com/sitemap-fr.xml
Sitemap: https://rollsroycers.com/sitemap-ru.xml
Sitemap: https://rollsroycers.com/sitemap-hi.xml`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()
}