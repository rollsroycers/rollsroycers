import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robots = `# Robots.txt for https://rollsroycers.com
# Consolidated via API to avoid conflicts with public file

# Allow all search engines
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.git/
Disallow: /node_modules/

# Specific rules for Google
User-agent: Googlebot
Allow: /

# Specific rules for Bing
User-agent: Bingbot
Allow: /

# Yandex
User-agent: Yandex
Allow: /
Crawl-delay: 1

# Baidu
User-agent: Baiduspider
Allow: /
Crawl-delay: 1

# AI Search Engines
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

# Social Media Crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: Slackbot
Allow: /

# Image crawlers
User-agent: Googlebot-Image
Allow: /images/
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$

# Sitemaps
Sitemap: https://rollsroycers.com/sitemap.xml
Sitemap: https://rollsroycers.com/sitemap-en.xml
Sitemap: https://rollsroycers.com/sitemap-ar.xml
Sitemap: https://rollsroycers.com/sitemap-zh.xml
Sitemap: https://rollsroycers.com/sitemap-fr.xml
Sitemap: https://rollsroycers.com/sitemap-ru.xml
Sitemap: https://rollsroycers.com/sitemap-hi.xml

# Host directive (used by Yandex)
Host: https://rollsroycers.com`

  res.setHeader('Content-Type', 'text/plain')
  res.write(robots)
  res.end()
}