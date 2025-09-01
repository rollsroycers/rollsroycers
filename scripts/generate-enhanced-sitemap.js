const fs = require('fs');
const path = require('path');

function generateEnhancedSitemap() {
  const baseUrl = 'https://rollsroycers.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Main sitemap index
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-en.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-ar.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-zh.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-fr.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-ru.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-hi.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-images.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  // Enhanced English sitemap (without /en/ prefix)
  const englishPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/booking', priority: '0.95', changefreq: 'daily' },
    { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/fleet', priority: '0.85', changefreq: 'weekly' },
    { url: '/fleet/phantom', priority: '0.85', changefreq: 'weekly' },
    { url: '/fleet/ghost', priority: '0.85', changefreq: 'weekly' },
    { url: '/fleet/cullinan', priority: '0.85', changefreq: 'weekly' },
    { url: '/fleet/dawn', priority: '0.8', changefreq: 'weekly' },
    { url: '/fleet/wraith', priority: '0.8', changefreq: 'weekly' },
    { url: '/services', priority: '0.85', changefreq: 'weekly' },
    { url: '/services/wedding', priority: '0.85', changefreq: 'weekly' },
    { url: '/services/corporate', priority: '0.85', changefreq: 'weekly' },
    { url: '/services/airport-transfer', priority: '0.85', changefreq: 'weekly' },
    { url: '/services/chauffeur', priority: '0.8', changefreq: 'weekly' },
    { url: '/services/tours', priority: '0.75', changefreq: 'weekly' },
    { url: '/locations', priority: '0.8', changefreq: 'weekly' },
    { url: '/locations/downtown-dubai', priority: '0.8', changefreq: 'weekly' },
    { url: '/locations/dubai-marina', priority: '0.8', changefreq: 'weekly' },
    { url: '/locations/palm-jumeirah', priority: '0.75', changefreq: 'weekly' },
    { url: '/locations/business-bay', priority: '0.75', changefreq: 'weekly' },
    { url: '/locations/jbr', priority: '0.75', changefreq: 'weekly' },
    { url: '/locations/difc', priority: '0.75', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/gallery', priority: '0.7', changefreq: 'weekly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'daily' },
    { url: '/blog/ultimate-guide-rolls-royce-rental-dubai', priority: '0.65', changefreq: 'monthly' },
    { url: '/blog/top-scenic-drives-dubai', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/rolls-royce-wedding-car-dubai', priority: '0.65', changefreq: 'monthly' },
    { url: '/blog/business-travel-rolls-royce', priority: '0.6', changefreq: 'monthly' },
    { url: '/blog/luxury-shopping-dubai-rolls-royce', priority: '0.65', changefreq: 'monthly' },
    { url: '/blog/rolls-royce-dawn-convertible-dubai', priority: '0.65', changefreq: 'monthly' },
    { url: '/compare/rolls-royce-vs-bentley', priority: '0.65', changefreq: 'monthly' },
    { url: '/compare/rolls-royce-vs-mercedes', priority: '0.65', changefreq: 'monthly' },
    { url: '/compare/rolls-royce-vs-ferrari', priority: '0.65', changefreq: 'monthly' },
    { url: '/compare/phantom-vs-maybach', priority: '0.65', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' }
  ];
  
  const englishSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${englishPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${page.url}"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar${page.url === '/' ? '' : page.url}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${baseUrl}/zh${page.url === '/' ? '' : page.url}"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr${page.url === '/' ? '' : page.url}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${baseUrl}/ru${page.url === '/' ? '' : page.url}"/>
    <xhtml:link rel="alternate" hreflang="hi" href="${baseUrl}/hi${page.url === '/' ? '' : page.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.url}"/>
  </url>`).join('\n')}
</urlset>`;
  
  // Save files
  fs.writeFileSync('public/sitemap.xml', sitemapIndex);
  fs.writeFileSync('public/sitemap-en.xml', englishSitemap);
  
  console.log('✅ Enhanced sitemaps generated successfully');
}

generateEnhancedSitemap();