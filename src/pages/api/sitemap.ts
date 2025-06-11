import { NextApiRequest, NextApiResponse } from 'next'

interface SitemapPage {
  url: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
  images?: Array<{
    loc: string
    title?: string
    caption?: string
  }>
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://rollsroycers.com'
  const currentDate = new Date().toISOString().split('T')[0]
  
  const staticPages: SitemapPage[] = [
    {
      url: '/',
      changefreq: 'daily',
      priority: '1.0',
      images: [
        {
          loc: '/images/Rolls-royce-phantom.jpg',
          title: 'Luxury Rolls-Royce Fleet Dubai',
          caption: 'Premium Rolls-Royce cars available for rent in Dubai'
        }
      ]
    },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' },
    { url: '/booking', changefreq: 'weekly', priority: '0.9' },
    { url: '/blog', changefreq: 'daily', priority: '0.8' },
    { url: '/gallery', changefreq: 'weekly', priority: '0.8' },
    { url: '/faq', changefreq: 'monthly', priority: '0.7' },
    { url: '/testimonials', changefreq: 'weekly', priority: '0.8' },
    { url: '/pricing', changefreq: 'weekly', priority: '0.9' },
    { url: '/terms', changefreq: 'yearly', priority: '0.3' },
    { url: '/privacy', changefreq: 'yearly', priority: '0.3' },
  ]
  
  const fleetPages: SitemapPage[] = [
    {
      url: '/fleet/phantom',
      changefreq: 'weekly',
      priority: '0.9',
      images: [
        {
          loc: '/images/Rolls-Royce_Phantom_Extended_Series_II.jpg',
          title: 'Rolls-Royce Phantom Extended',
          caption: 'Luxury Rolls-Royce Phantom for rent in Dubai'
        }
      ]
    },
    {
      url: '/fleet/ghost',
      changefreq: 'weekly',
      priority: '0.9',
      images: [
        {
          loc: '/images/Rolls-Royce_Ghost_Black_Badge.jpg',
          title: 'Rolls-Royce Ghost Black Badge',
          caption: 'Premium Rolls-Royce Ghost available in Dubai'
        }
      ]
    },
    {
      url: '/fleet/cullinan',
      changefreq: 'weekly',
      priority: '0.9',
      images: [
        {
          loc: '/images/2024_Rolls-Royce_Cullinan.jpg',
          title: 'Rolls-Royce Cullinan SUV',
          caption: 'Luxury Rolls-Royce Cullinan SUV rental Dubai'
        }
      ]
    },
    {
      url: '/fleet/dawn',
      changefreq: 'weekly',
      priority: '0.9',
      images: [
        {
          loc: '/images/Rolls-Royce_Dawn.jpg',
          title: 'Rolls-Royce Dawn Convertible',
          caption: 'Elegant Rolls-Royce Dawn convertible for rent'
        }
      ]
    },
    { url: '/fleet/wraith', changefreq: 'weekly', priority: '0.9' },
  ]
  
  const servicePages: SitemapPage[] = [
    { url: '/services/wedding', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/airport-transfer', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/corporate', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/chauffeur', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/events', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/photoshoot', changefreq: 'weekly', priority: '0.8' },
    { url: '/services/tours', changefreq: 'weekly', priority: '0.8' },
  ]
  
  const locationPages: SitemapPage[] = [
    { url: '/locations/downtown-dubai', changefreq: 'weekly', priority: '0.8' },
    { url: '/locations/dubai-marina', changefreq: 'weekly', priority: '0.8' },
    { url: '/locations/palm-jumeirah', changefreq: 'weekly', priority: '0.7' },
    { url: '/locations/business-bay', changefreq: 'weekly', priority: '0.7' },
    { url: '/locations/jbr', changefreq: 'weekly', priority: '0.7' },
    { url: '/locations/difc', changefreq: 'weekly', priority: '0.8' },
  ]
  
  const blogPages: SitemapPage[] = [
    { url: '/blog/ultimate-guide-rolls-royce-rental-dubai', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog/top-scenic-drives-dubai', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/rolls-royce-wedding-car-dubai', changefreq: 'monthly', priority: '0.6' },
    { url: '/blog/business-travel-rolls-royce', changefreq: 'monthly', priority: '0.6' },
  ]
  
  const comparisonPages: SitemapPage[] = [
    { url: '/compare/rolls-royce-vs-bentley', changefreq: 'monthly', priority: '0.7' },
  ]
  
  const languages = ['en', 'ar', 'ru', 'fr', 'zh', 'hi']
  
  const allPages = [...staticPages, ...fleetPages, ...servicePages, ...locationPages, ...blogPages, ...comparisonPages]
  
  // Generate URL entries with proper formatting
  const generateUrlEntry = (page: SitemapPage, lang: string): string => {
    const langPrefix = lang === 'en' ? '' : `/${lang}`
    const alternateLinks = languages
      .filter(l => l !== lang)
      .map(altLang => {
        const altPrefix = altLang === 'en' ? '' : `/${altLang}`
        return `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}${altPrefix}${page.url}"/>`
      })
      .join('\n')
    
    const imageEntries = page.images?.map(img => `    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      ${img.title ? `<image:title>${img.title}</image:title>` : ''}
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`).join('\n') || ''
    
    return `  <url>
    <loc>${baseUrl}${langPrefix}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${langPrefix}${page.url}"/>
${alternateLinks}
${imageEntries ? imageEntries + '\n' : ''}  </url>`
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.flatMap(page =>
  languages.map(lang => generateUrlEntry(page, lang))
).join('\n')}
</urlset>`
  
  res.setHeader('Content-Type', 'text/xml; charset=UTF-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate')
  res.status(200).send(sitemap)
}