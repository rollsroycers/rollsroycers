import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://rollsroycers.com'
  const currentDate = new Date().toISOString()
  
  const staticPages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/fleet', changefreq: 'weekly', priority: '0.9' },
    { url: '/services', changefreq: 'weekly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    { url: '/booking', changefreq: 'weekly', priority: '0.9' },
    { url: '/blog', changefreq: 'daily', priority: '0.8' },
    { url: '/gallery', changefreq: 'weekly', priority: '0.8' },
    { url: '/faq', changefreq: 'monthly', priority: '0.8' },
    { url: '/testimonials', changefreq: 'weekly', priority: '0.9' },
    { url: '/pricing', changefreq: 'weekly', priority: '0.9' },
    { url: '/terms', changefreq: 'yearly', priority: '0.3' },
    { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
  ]
  
  const fleetPages = [
    { url: '/fleet/phantom', changefreq: 'weekly', priority: '0.9' },
    { url: '/fleet/ghost', changefreq: 'weekly', priority: '0.9' },
    { url: '/fleet/cullinan', changefreq: 'weekly', priority: '0.9' },
    { url: '/fleet/dawn', changefreq: 'weekly', priority: '0.9' },
    { url: '/fleet/wraith', changefreq: 'weekly', priority: '0.9' },
  ]
  
  const servicePages = [
    { url: '/services/wedding', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/airport-transfer', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/corporate', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/chauffeur', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/events', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/photoshoot', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/tours', changefreq: 'weekly', priority: '0.8' },
  ]
  
  const locationPages = [
    { url: '/locations/downtown-dubai', changefreq: 'weekly', priority: '0.8' },
    { url: '/locations/dubai-marina', changefreq: 'weekly', priority: '0.8' },
    { url: '/locations/palm-jumeirah', changefreq: 'weekly', priority: '0.7' },
    { url: '/locations/business-bay', changefreq: 'weekly', priority: '0.7' },
    { url: '/locations/jbr', changefreq: 'weekly', priority: '0.7' },
    { url: '/locations/difc', changefreq: 'weekly', priority: '0.8' },
  ]
  
  const blogPages = [
    { url: '/blog/ultimate-guide-rolls-royce-rental-dubai', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog/top-scenic-drives-dubai', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/rolls-royce-wedding-car-dubai', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/business-travel-rolls-royce', changefreq: 'monthly', priority: '0.6' },
  ]
  
  const comparisonPages = [
    { url: '/compare/rolls-royce-vs-bentley', changefreq: 'monthly', priority: '0.7' },
  ]
  
  const languages = ['en', 'ar', 'ru', 'fr', 'zh', 'hi']
  
  const allPages = [...staticPages, ...fleetPages, ...servicePages, ...locationPages, ...blogPages, ...comparisonPages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(page => {
  return languages.map(lang => `  <url>
    <loc>${baseUrl}${lang === 'en' ? '' : '/' + lang}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${languages.filter(l => l !== lang).map(altLang => `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}${altLang === 'en' ? '' : '/' + altLang}${page.url}"/>`).join('')}
  </url>`).join('\n')
}).join('\n')}
</urlset>`
  
  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate')
  res.status(200).send(sitemap)
}