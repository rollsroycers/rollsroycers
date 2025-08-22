#!/usr/bin/env node

/**
 * Advanced SEO & AI Search Engine Optimization Script
 * Enhances website for maximum visibility in traditional and AI-powered search engines
 * Focuses on Rolls Royce rental keywords in Dubai across all languages
 */

const fs = require('fs').promises;
const path = require('path');

// Comprehensive keyword strategy for Dubai market
const keywordStrategy = {
  primary: {
    en: [
      'rent rolls royce dubai',
      'rolls royce rental dubai',
      'luxury car rental dubai',
      'rolls royce with driver dubai',
      'rolls royce chauffeur service dubai'
    ],
    ar: [
      'تأجير رولز رويس دبي',
      'استئجار رولز رويس في دبي',
      'تأجير سيارات فاخرة دبي',
      'رولز رويس مع سائق دبي',
      'خدمة سائق رولز رويس دبي'
    ],
    fr: [
      'location rolls royce dubai',
      'louer rolls royce dubai',
      'location voiture luxe dubai',
      'rolls royce avec chauffeur dubai',
      'service chauffeur rolls royce dubai'
    ],
    ru: [
      'аренда rolls royce дубай',
      'прокат rolls royce дубай',
      'аренда люкс авто дубай',
      'rolls royce с водителем дубай',
      'услуги водителя rolls royce дубай'
    ],
    zh: [
      '迪拜租劳斯莱斯',
      '迪拜劳斯莱斯租赁',
      '迪拜豪华汽车租赁',
      '迪拜带司机劳斯莱斯',
      '迪拜劳斯莱斯司机服务'
    ],
    hi: [
      'दुबई में रोल्स रॉयस किराए पर लें',
      'दुबई रोल्स रॉयस रेंटल',
      'दुबई लक्जरी कार रेंटल',
      'ड्राइवर के साथ रोल्स रॉयस दुबई',
      'रोल्स रॉयस चालक सेवा दुबई'
    ]
  },
  models: [
    'phantom', 'ghost', 'cullinan', 'dawn', 'wraith', 'spectre'
  ],
  services: [
    'wedding', 'airport-transfer', 'corporate', 'chauffeur', 'events', 'photoshoot', 'tours'
  ],
  locations: [
    'downtown-dubai', 'dubai-marina', 'palm-jumeirah', 'business-bay', 'difc', 'jbr'
  ]
};

// AI Search Engine Optimization Content
const aiOptimizationContent = {
  faq: {
    en: [
      {
        q: "How much does it cost to rent a Rolls-Royce in Dubai?",
        a: "Renting a Rolls-Royce in Dubai starts from AED 3,800 per day for the Ghost model. Phantom costs AED 5,800/day, Cullinan SUV AED 6,500/day, Dawn convertible AED 5,500/day, and Wraith AED 5,000/day. All prices include professional chauffeur, insurance, and 24/7 support."
      },
      {
        q: "Can tourists rent a Rolls-Royce in Dubai?",
        a: "Yes, tourists can rent a Rolls-Royce in Dubai. Requirements include: valid passport, international driving license (if self-driving), minimum age 25 years, and credit card for security deposit. We offer chauffeur services for tourists without international licenses."
      },
      {
        q: "What's included in Rolls-Royce rental in Dubai?",
        a: "Our Rolls-Royce rental includes: professional multilingual chauffeur, comprehensive insurance, 24/7 roadside assistance, complimentary water and WiFi, airport pickup/drop-off, flexible booking with free cancellation up to 48 hours, and VIP customer service."
      },
      {
        q: "Where can I rent a Rolls-Royce in Dubai?",
        a: "You can rent a Rolls-Royce from our showroom in Downtown Dubai with free delivery to all major locations including Dubai Marina, Palm Jumeirah, Business Bay, DIFC, JBR, and both DXB and DWC airports. Same-day booking available with 15-minute delivery."
      },
      {
        q: "What are the best Rolls-Royce models to rent in Dubai?",
        a: "For weddings: Phantom Extended Wheelbase (most luxurious). For business: Ghost Series II (perfect balance). For families: Cullinan SUV (7-seater). For beach drives: Dawn convertible. For sports luxury: Wraith coupe. All 2025 models available."
      }
    ],
    ar: [
      {
        q: "كم تكلفة استئجار رولز رويس في دبي؟",
        a: "يبدأ تأجير رولز رويس في دبي من 3,800 درهم يومياً لموديل جوست. فانتوم بسعر 5,800 درهم/يوم، كولينان SUV بسعر 6,500 درهم/يوم، داون المكشوفة 5,500 درهم/يوم، وريث 5,000 درهم/يوم. جميع الأسعار تشمل سائق محترف، تأمين، ودعم 24/7."
      },
      {
        q: "هل يمكن للسياح استئجار رولز رويس في دبي؟",
        a: "نعم، يمكن للسياح استئجار رولز رويس في دبي. المتطلبات: جواز سفر ساري، رخصة قيادة دولية (للقيادة الذاتية)، الحد الأدنى للعمر 25 سنة، وبطاقة ائتمان للوديعة. نوفر خدمات السائق للسياح بدون رخصة دولية."
      }
    ]
  }
};

// Update SEO translations for all languages
async function updateSEOTranslations() {
  const languages = ['en', 'ar', 'fr', 'ru', 'zh', 'hi'];
  
  for (const lang of languages) {
    const seoPath = path.join(process.cwd(), 'public', 'locales', lang, 'seo.json');
    
    try {
      const content = await fs.readFile(seoPath, 'utf8');
      const seoData = JSON.parse(content);
      
      // Add AI optimization keywords for each page
      if (seoData.pages) {
        // Enhance home page
        if (seoData.pages.home) {
          seoData.pages.home.aiKeywords = getAIKeywords(lang, 'home');
        }
        
        // Enhance fleet pages
        if (seoData.pages.fleet) {
          Object.keys(seoData.pages.fleet).forEach(model => {
            seoData.pages.fleet[model].aiKeywords = getAIKeywords(lang, 'fleet', model);
          });
        }
        
        // Enhance service pages
        if (seoData.pages.services) {
          Object.keys(seoData.pages.services).forEach(service => {
            seoData.pages.services[service].aiKeywords = getAIKeywords(lang, 'services', service);
          });
        }
        
        // Enhance location pages
        if (seoData.pages.locations) {
          Object.keys(seoData.pages.locations).forEach(location => {
            seoData.pages.locations[location].aiKeywords = getAIKeywords(lang, 'locations', location);
          });
        }
      }
      
      await fs.writeFile(seoPath, JSON.stringify(seoData, null, 2), 'utf8');
      console.log(`✅ Updated SEO translations for ${lang}`);
    } catch (error) {
      console.error(`❌ Error updating SEO for ${lang}:`, error);
    }
  }
}

// Get AI-optimized keywords for specific page and language
function getAIKeywords(lang, section, subsection = '') {
  const keywords = [];
  
  // Add primary keywords
  if (keywordStrategy.primary[lang]) {
    keywords.push(...keywordStrategy.primary[lang]);
  }
  
  // Add section-specific keywords
  if (section === 'fleet' && subsection) {
    keywords.push(
      `rolls royce ${subsection} dubai`,
      `${subsection} rental dubai`,
      `rent ${subsection} dubai`
    );
  } else if (section === 'services' && subsection) {
    keywords.push(
      `rolls royce ${subsection} dubai`,
      `luxury ${subsection} dubai`,
      `vip ${subsection} dubai`
    );
  } else if (section === 'locations' && subsection) {
    keywords.push(
      `rolls royce ${subsection}`,
      `luxury car rental ${subsection}`,
      `chauffeur service ${subsection}`
    );
  }
  
  return keywords;
}

// Create AI-optimized content pages
async function createAIOptimizedContent() {
  // Create AI FAQ Component
  const aiFAQComponent = `import React from 'react';
import { useTranslation } from 'next-i18next';

const AIFAQ = () => {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language || 'en';
  
  const faqs = ${JSON.stringify(aiOptimizationContent.faq, null, 2)};
  
  const currentFAQs = faqs[currentLang] || faqs['en'];
  
  return (
    <div className="ai-faq-section bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gold-500 mb-12 text-center">
          {currentLang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {currentFAQs.map((faq, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                {faq.q}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Schema markup for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": currentFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default AIFAQ;`;

  await fs.writeFile(
    path.join(process.cwd(), 'src', 'components', 'AIFAQ.tsx'),
    aiFAQComponent,
    'utf8'
  );
  console.log('✅ Created AI FAQ Component');
}

// Create enhanced robots.txt for AI crawlers
async function updateRobotsTxt() {
  const robotsContent = `# Robots.txt for https://rollsroycers.com
# Optimized for maximum SEO visibility and AI search engines

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
Crawl-delay: 0

# Specific rules for Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 0

# Specific rules for Yandex (Russian search engine)
User-agent: Yandex
Allow: /
Crawl-delay: 1

# Specific rules for Baidu (Chinese search engine)
User-agent: Baiduspider
Allow: /
Crawl-delay: 1

# AI Search Engines - FULL ACCESS
User-agent: GPTBot
Allow: /
Crawl-delay: 0

User-agent: ChatGPT-User
Allow: /
Crawl-delay: 0

User-agent: CCBot
Allow: /
Crawl-delay: 0

User-agent: anthropic-ai
Allow: /
Crawl-delay: 0

User-agent: Claude-Web
Allow: /
Crawl-delay: 0

User-agent: PerplexityBot
Allow: /
Crawl-delay: 0

User-agent: YouBot
Allow: /
Crawl-delay: 0

User-agent: BingAI
Allow: /
Crawl-delay: 0

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

User-agent: Discordbot
Allow: /

User-agent: Telegrambot
Allow: /

# Image crawlers
User-agent: Googlebot-Image
Allow: /images/
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$

# Video crawlers
User-agent: Googlebot-Video
Allow: /videos/

# Sitemaps - All languages
Sitemap: https://rollsroycers.com/sitemap.xml
Sitemap: https://rollsroycers.com/sitemap-en.xml
Sitemap: https://rollsroycers.com/sitemap-ar.xml
Sitemap: https://rollsroycers.com/sitemap-zh.xml
Sitemap: https://rollsroycers.com/sitemap-fr.xml
Sitemap: https://rollsroycers.com/sitemap-ru.xml
Sitemap: https://rollsroycers.com/sitemap-hi.xml
Sitemap: https://rollsroycers.com/sitemap-pages.xml

# Host directive (for Yandex)
Host: https://rollsroycers.com

# Crawl-delay for responsible crawling
User-agent: *
Crawl-delay: 1`;

  await fs.writeFile(
    path.join(process.cwd(), 'public', 'robots.txt'),
    robotsContent,
    'utf8'
  );
  console.log('✅ Updated robots.txt for AI search engines');
}

// Create comprehensive sitemap with all pages and languages
async function generateEnhancedSitemap() {
  const baseUrl = 'https://rollsroycers.com';
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];
  const pages = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/booking', priority: 0.9, changefreq: 'daily' },
    { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/about', priority: 0.7, changefreq: 'monthly' },
    { path: '/faq', priority: 0.8, changefreq: 'weekly' },
    { path: '/gallery', priority: 0.6, changefreq: 'weekly' },
    { path: '/blog', priority: 0.7, changefreq: 'daily' }
  ];
  
  const fleetModels = ['phantom', 'ghost', 'cullinan', 'dawn', 'wraith'];
  const services = ['wedding', 'corporate', 'airport-transfer', 'chauffeur', 'events', 'photoshoot', 'tours'];
  const locations = ['downtown-dubai', 'dubai-marina', 'palm-jumeirah', 'business-bay', 'difc', 'jbr'];
  
  // Add fleet pages
  fleetModels.forEach(model => {
    pages.push({ path: `/fleet/${model}`, priority: 0.8, changefreq: 'weekly' });
  });
  
  // Add service pages
  services.forEach(service => {
    pages.push({ path: `/services/${service}`, priority: 0.8, changefreq: 'weekly' });
  });
  
  // Add location pages
  locations.forEach(location => {
    pages.push({ path: `/locations/${location}`, priority: 0.7, changefreq: 'weekly' });
  });
  
  // Generate main sitemap
  let mainSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  languages.forEach(lang => {
    mainSitemap += `
  <sitemap>
    <loc>${baseUrl}/sitemap-${lang}.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`;
  });
  
  mainSitemap += `
  <sitemap>
    <loc>${baseUrl}/sitemap-pages.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  await fs.writeFile(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    mainSitemap,
    'utf8'
  );
  
  // Generate language-specific sitemaps
  for (const lang of languages) {
    let langSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
    
    pages.forEach(page => {
      const url = lang === 'en' ? `${baseUrl}${page.path}` : `${baseUrl}/${lang}${page.path}`;
      langSitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;
      
      // Add alternate language links
      languages.forEach(altLang => {
        const altUrl = altLang === 'en' ? `${baseUrl}${page.path}` : `${baseUrl}/${altLang}${page.path}`;
        langSitemap += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}"/>`;
      });
      
      langSitemap += `
  </url>`;
    });
    
    langSitemap += `
</urlset>`;
    
    await fs.writeFile(
      path.join(process.cwd(), 'public', `sitemap-${lang}.xml`),
      langSitemap,
      'utf8'
    );
  }
  
  console.log('✅ Generated enhanced sitemaps for all languages');
}

// Main execution
async function main() {
  console.log('🚀 Starting SEO & AI Search Engine Optimization...');
  
  try {
    await updateSEOTranslations();
    await createAIOptimizedContent();
    await updateRobotsTxt();
    await generateEnhancedSitemap();
    
    console.log(`
✅ SEO Enhancement Complete!

📊 Optimizations Applied:
- Enhanced keyword strategy for Dubai market
- AI search engine optimization content
- Multi-language SEO support (EN, AR, FR, RU, ZH, HI)
- FAQ schema markup for rich snippets
- Enhanced robots.txt for AI crawlers
- Comprehensive sitemaps for all languages
- Local SEO optimization for Dubai locations

🎯 Next Steps:
1. Deploy changes to production
2. Submit sitemaps to Google Search Console
3. Submit to Bing Webmaster Tools
4. Monitor rankings in search results
5. Track AI search engine visibility
    `);
  } catch (error) {
    console.error('❌ Error during SEO optimization:', error);
    process.exit(1);
  }
}

// Run the script
main();