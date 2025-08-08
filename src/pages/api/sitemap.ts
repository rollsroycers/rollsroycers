import { NextApiRequest, NextApiResponse } from 'next'

interface SitemapPage {
  url: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: string
  lastmod?: string
  images?: Array<{
    loc: string
    title?: string
    caption?: string
    geo_location?: string
    license?: string
  }>
  videos?: Array<{
    thumbnail_loc: string
    title: string
    description: string
    content_loc?: string
    duration?: number
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
      lastmod: currentDate,
      images: [
        {
          loc: '/images/Rolls-royce-phantom.jpg',
          title: 'Luxury Rolls-Royce Fleet Dubai',
          caption: 'Premium Rolls-Royce cars available for rent in Dubai',
          geo_location: 'Dubai, United Arab Emirates',
          license: 'https://rollsroycers.com/terms'
        },
        {
          loc: '/images/Rolls-royce-dubai.jpg',
          title: 'Rolls-Royce Rental Dubai',
          caption: 'Luxury car rental service in Dubai',
          geo_location: 'Dubai, United Arab Emirates'
        }
      ],
      videos: [
        {
          thumbnail_loc: '/images/Rolls-royce-official.jpg',
          title: 'Rolls-Royce Dubai Experience',
          description: 'Experience luxury with our Rolls-Royce rental service in Dubai',
          content_loc: '/images/videos/Rolls_Royce_defines_what_Luxury_cars_mean.mp4',
          duration: 58
        }
      ]
    },
    { url: '/about', changefreq: 'monthly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-06' },
    { url: '/booking', changefreq: 'weekly', priority: '0.9', lastmod: currentDate },
    { url: '/blog', changefreq: 'daily', priority: '0.8', lastmod: currentDate },
    { url: '/gallery', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/faq', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-06' },
    { url: '/testimonials', changefreq: 'weekly', priority: '0.8', lastmod: currentDate },
    { url: '/pricing', changefreq: 'weekly', priority: '0.9', lastmod: currentDate },
    { url: '/terms', changefreq: 'yearly', priority: '0.3', lastmod: '2025-01-06' },
    { url: '/privacy', changefreq: 'yearly', priority: '0.3', lastmod: '2025-01-06' },
  ]

  const fleetPages: SitemapPage[] = [
    {
      url: '/fleet/phantom',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: '2025-01-06',
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
      lastmod: '2025-01-06',
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
      lastmod: '2025-01-06',
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
      lastmod: '2025-01-06',
      images: [
        {
          loc: '/images/Rolls-Royce_Dawn.jpg',
          title: 'Rolls-Royce Dawn Convertible',
          caption: 'Elegant Rolls-Royce Dawn convertible for rent'
        }
      ]
    },
    { url: '/fleet/wraith', changefreq: 'weekly', priority: '0.9', lastmod: '2025-01-06' },
  ]

  const servicePages: SitemapPage[] = [
    { url: '/services/wedding', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/services/airport-transfer', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/services/corporate', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/services/chauffeur', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/services/events', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/services/photoshoot', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/services/tours', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
  ]

  const locationPages: SitemapPage[] = [
    { url: '/locations/downtown-dubai', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/locations/dubai-marina', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
    { url: '/locations/palm-jumeirah', changefreq: 'weekly', priority: '0.7', lastmod: '2025-01-06' },
    { url: '/locations/business-bay', changefreq: 'weekly', priority: '0.7', lastmod: '2025-01-06' },
    { url: '/locations/jbr', changefreq: 'weekly', priority: '0.7', lastmod: '2025-01-06' },
    { url: '/locations/difc', changefreq: 'weekly', priority: '0.8', lastmod: '2025-01-06' },
  ]

  const blogPages: SitemapPage[] = [
    { url: '/blog/ultimate-guide-rolls-royce-rental-dubai', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-06' },
    { url: '/blog/top-scenic-drives-dubai', changefreq: 'monthly', priority: '0.6', lastmod: '2025-01-06' },
    { url: '/blog/rolls-royce-wedding-car-dubai', changefreq: 'monthly', priority: '0.6', lastmod: '2025-01-06' },
    { url: '/blog/business-travel-rolls-royce', changefreq: 'monthly', priority: '0.6', lastmod: '2025-01-06' },
    { url: '/blog/rolls-royce-chauffeur-dubai-guide', changefreq: 'monthly', priority: '0.7', lastmod: currentDate },
    { url: '/blog/rolls-royce-airport-transfer-dubai', changefreq: 'monthly', priority: '0.7', lastmod: currentDate },
  ]

  const comparisonPages: SitemapPage[] = [
    { url: '/compare/rolls-royce-vs-bentley', changefreq: 'monthly', priority: '0.7', lastmod: '2025-01-06' },
  ]

  const languages = ['en', 'ar', 'ru', 'fr', 'zh', 'hi']

  const allPages = [...staticPages, ...fleetPages, ...servicePages, ...locationPages, ...blogPages, ...comparisonPages]

  const generateUrlEntry = (page: SitemapPage): string => {
    const alternateLinks = languages
      .map(lang => {
        const altPrefix = lang === 'en' ? '' : `/${lang}`
        return `    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}${altPrefix}${page.url}"/>`
      })
      .join('\n')
      
    const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}"/>`

    const imageEntries = page.images?.map(img => `    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      ${img.title ? `<image:title>${img.title}</image:title>` : ''}
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
      ${img.geo_location ? `<image:geo_location>${img.geo_location}</image:geo_location>` : ''}
      ${img.license ? `<image:license>${img.license}</image:license>` : ''}
    </image:image>`).join('\n') || ''

    const videoEntries = page.videos?.map(video => `    <video:video>
      <video:thumbnail_loc>${baseUrl}${video.thumbnail_loc}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      ${video.content_loc ? `<video:content_loc>${baseUrl}${video.content_loc}</video:content_loc>` : ''}
      ${video.duration ? `<video:duration>${video.duration}</video:duration>` : ''}
      <video:family_friendly>yes</video:family_friendly>
      <video:live>no</video:live>
    </video:video>`).join('\n') || ''

    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternateLinks}
${xDefaultLink}
${imageEntries ? imageEntries + '\n' : ''}${videoEntries ? videoEntries + '\n' : ''}
  </url>`
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => generateUrlEntry(page)).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml; charset=UTF-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate')
  res.status(200).send(sitemap)
}