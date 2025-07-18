#!/usr/bin/env node

/**
 * Sitemap Generator for rollsroycers.com
 * Generates comprehensive sitemaps for all languages with priority optimization
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://rollsroycers.com';
const LANGUAGES = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];

// Pages with their SEO priority (1.0 = highest)
const PAGES = [
  // Core pages - Highest priority
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/booking', priority: 0.95, changefreq: 'daily' },
  { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  
  // Fleet pages - High priority for main keywords
  { path: '/fleet/phantom', priority: 0.85, changefreq: 'weekly' },
  { path: '/fleet/ghost', priority: 0.85, changefreq: 'weekly' },
  { path: '/fleet/cullinan', priority: 0.85, changefreq: 'weekly' },
  { path: '/fleet/dawn', priority: 0.8, changefreq: 'weekly' },
  { path: '/fleet/wraith', priority: 0.8, changefreq: 'weekly' },
  
  // Service pages - High priority for conversions
  { path: '/services/wedding', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/corporate', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/airport-transfer', priority: 0.85, changefreq: 'weekly' },
  { path: '/services/chauffeur', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/events', priority: 0.8, changefreq: 'weekly' },
  { path: '/services/photoshoot', priority: 0.75, changefreq: 'weekly' },
  { path: '/services/tours', priority: 0.75, changefreq: 'weekly' },
  
  // Location pages - Important for local SEO
  { path: '/locations/downtown-dubai', priority: 0.8, changefreq: 'weekly' },
  { path: '/locations/dubai-marina', priority: 0.8, changefreq: 'weekly' },
  { path: '/locations/palm-jumeirah', priority: 0.75, changefreq: 'weekly' },
  { path: '/locations/business-bay', priority: 0.75, changefreq: 'weekly' },
  { path: '/locations/jbr', priority: 0.75, changefreq: 'weekly' },
  { path: '/locations/difc', priority: 0.75, changefreq: 'weekly' },
  
  // Content pages
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/gallery', priority: 0.7, changefreq: 'weekly' },
  { path: '/testimonials', priority: 0.7, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog', priority: 0.7, changefreq: 'daily' },
  
  // Blog articles
  { path: '/blog/ultimate-guide-rolls-royce-rental-dubai', priority: 0.65, changefreq: 'monthly' },
  { path: '/blog/top-scenic-drives-dubai', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/rolls-royce-wedding-car-dubai', priority: 0.65, changefreq: 'monthly' },
  { path: '/blog/business-travel-rolls-royce', priority: 0.6, changefreq: 'monthly' },
  { path: '/blog/luxury-shopping-dubai-rolls-royce', priority: 0.65, changefreq: 'monthly' },
  { path: '/blog/rolls-royce-dawn-convertible-dubai', priority: 0.65, changefreq: 'monthly' },
  
  // Comparison pages
  { path: '/compare/rolls-royce-vs-bentley', priority: 0.65, changefreq: 'monthly' },
  
  // Legal pages
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
];

function generateSitemapXML(pages, language = null) {
  const lastmod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  pages.forEach(page => {
    const url = language ? `${BASE_URL}/${language}${page.path}` : `${BASE_URL}${page.path}`;
    
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    
    // Add hreflang tags for all languages
    if (!language) {
      LANGUAGES.forEach(lang => {
        const langUrl = `${BASE_URL}/${lang}${page.path}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${langUrl}"/>\n`;
      });
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${page.path}"/>\n`;
    }
    
    // Add image tags for important pages
    if (page.path.includes('/fleet/')) {
      const carModel = page.path.split('/').pop();
      xml += '    <image:image>\n';
      xml += `      <image:loc>${BASE_URL}/images/fleet/${carModel}.jpg</image:loc>\n`;
      xml += `      <image:caption>Rolls-Royce ${carModel.charAt(0).toUpperCase() + carModel.slice(1)} for rent in Dubai</image:caption>\n`;
      xml += '    </image:image>\n';
    }
    
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

function generateIndexSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Main sitemap
  xml += '  <sitemap>\n';
  xml += `    <loc>${BASE_URL}/sitemap-pages.xml</loc>\n`;
  xml += `    <lastmod>${lastmod}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  // Language-specific sitemaps
  LANGUAGES.forEach(lang => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${BASE_URL}/sitemap-${lang}.xml</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += '  </sitemap>\n';
  });
  
  xml += '</sitemapindex>';
  return xml;
}

// Generate sitemaps
function generateAllSitemaps() {
  const publicDir = path.join(__dirname, '..', 'public');
  
  // Generate index sitemap
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    generateIndexSitemap()
  );
  console.log('Generated: sitemap.xml (index)');
  
  // Generate main pages sitemap
  fs.writeFileSync(
    path.join(publicDir, 'sitemap-pages.xml'),
    generateSitemapXML(PAGES)
  );
  console.log('Generated: sitemap-pages.xml');
  
  // Generate language-specific sitemaps
  LANGUAGES.forEach(lang => {
    fs.writeFileSync(
      path.join(publicDir, `sitemap-${lang}.xml`),
      generateSitemapXML(PAGES, lang)
    );
    console.log(`Generated: sitemap-${lang}.xml`);
  });
  
  console.log('\n✅ All sitemaps generated successfully!');
  console.log(`📍 Submit ${BASE_URL}/sitemap.xml to Google Search Console and Bing Webmaster Tools`);
}

// Run the generator
generateAllSitemaps(); 