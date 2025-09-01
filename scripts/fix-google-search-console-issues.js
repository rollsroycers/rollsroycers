const fs = require('fs').promises;
const path = require('path');

// قائمة الصفحات غير المفهرسة من Google Search Console
const notIndexedPages = [
  'https://rollsroycers.com/fr/locations/jbr',
  'https://www.rollsroycers.com/fr/locations/jbr',
  'https://rollsroycers.com/hi/terms',
  'https://rollsroycers.com/fr/services/corporate',
  'https://www.rollsroycers.com/fr/services/corporate',
  'https://rollsroycers.com/ru/compare/rolls-royce-vs-bentley',
  'https://rollsroycers.com/fr/terms',
  'https://www.rollsroycers.com/fr/terms',
  'https://www.rollsroycers.com/ru/terms',
  'https://www.rollsroycers.com/hi/fleet/wraith',
  'https://rollsroycers.com/hi/services/wedding',
  'https://www.rollsroycers.com/fr/privacy',
  'https://rollsroycers.com/ar/services/tours',
  'https://www.rollsroycers.com/ar/services/tours',
  'https://www.rollsroycers.com/fr/services/tours',
  'https://www.rollsroycers.com/ar/compare/rolls-royce-vs-bentley',
  'https://rollsroycers.com/fr/compare/rolls-royce-vs-bentley',
  'https://rollsroycers.com/ar/fleet/dawn',
  'https://www.rollsroycers.com/ar/fleet/dawn',
  'https://rollsroycers.com/fr/faq',
  'https://www.rollsroycers.com/fr/faq',
  'https://www.rollsroycers.com/ar',
  'https://rollsroycers.com/fr/locations/downtown-dubai',
  'https://rollsroycers.com/ru/locations/palm-jumeirah',
  'https://www.rollsroycers.com/ru/locations/palm-jumeirah',
  'https://rollsroycers.com/ru/locations/downtown-dubai',
  'https://www.rollsroycers.com/ru/locations/downtown-dubai',
  'https://www.rollsroycers.com/fr/blog',
  'https://www.rollsroycers.com/ru/locations/dubai-marina',
  'https://rollsroycers.com/fr/fleet/dawn',
  'https://rollsroycers.com/hi/locations/dubai-marina',
  'https://rollsroycers.com/hi/fleet/dawn',
  'https://rollsroycers.com/hi/locations/downtown-dubai',
  'https://rollsroycers.com/locations/jbr',
  'https://www.rollsroycers.com/fr/locations/dubai-marina',
  'https://rollsroycers.com/ar/fleet/phantom',
  'https://rollsroycers.com/fr/locations/difc',
  'https://rollsroycers.com/hi/compare/rolls-royce-vs-bentley',
  'https://rollsroycers.com/services/events',
  'https://rollsroycers.com/hi/fleet/ghost',
  'https://www.rollsroycers.com/fr/services/airport-transfer',
  'https://rollsroycers.com/fr/fleet/phantom',
  'https://rollsroycers.com/ru/fleet/wraith',
  'https://www.rollsroycers.com/ar/privacy',
  'https://rollsroycers.com/ru/booking',
  'https://rollsroycers.com/fr/fleet/cullinan',
  'https://www.rollsroycers.com/ru/blog',
  'https://www.rollsroycers.com/ru/locations/difc',
  'https://rollsroycers.com/ar/locations/difc',
  'https://www.rollsroycers.com/ar/locations/difc',
  'https://rollsroycers.com/blog/business-travel-rolls-royce',
  'https://www.rollsroycers.com/ru/privacy',
  'https://rollsroycers.com/hi/testimonials',
  'https://www.rollsroycers.com/ru/services/chauffeur',
  'https://rollsroycers.com/hi/locations/jbr',
  'https://rollsroycers.com/ar/services/events',
  'https://www.rollsroycers.com/ru/services/corporate',
  'https://www.rollsroycers.com/fr/locations/business-bay',
  'https://rollsroycers.com/zh/services/wedding',
  'https://www.rollsroycers.com/hi/services/photoshoot',
  'https://rollsroycers.com/fr/services/events',
  'https://rollsroycers.com/ru/about',
  'https://www.rollsroycers.com/ru/about',
  'https://www.rollsroycers.com/ar/terms',
  'https://www.rollsroycers.com/ar/faq',
  'https://rollsroycers.com/ru/locations/jbr',
  'https://www.rollsroycers.com/ru/locations/jbr',
  'https://rollsroycers.com/blog/rolls-royce-wedding-car-dubai'
];

// استخراج المسارات الفريدة والصفحات واللغات
function extractPageInfo(urls) {
  const pageInfo = new Map();
  
  urls.forEach(url => {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const hasWww = urlObj.hostname.startsWith('www.');
    
    // استخراج اللغة والصفحة
    const pathParts = pathname.split('/').filter(Boolean);
    const langCodes = ['ar', 'fr', 'ru', 'hi', 'zh'];
    
    let lang = 'en';
    let pagePath = pathname;
    
    if (pathParts.length > 0 && langCodes.includes(pathParts[0])) {
      lang = pathParts[0];
      pagePath = '/' + pathParts.slice(1).join('/');
    }
    
    if (!pageInfo.has(pagePath)) {
      pageInfo.set(pagePath, new Set());
    }
    pageInfo.get(pagePath).add(lang);
  });
  
  return pageInfo;
}

// تحديث ملف middleware.ts لإصلاح مشكلة www
async function updateMiddleware() {
  console.log('📝 تحديث middleware.ts لإضافة redirect من www...');
  
  const middlewareContent = `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname
  
  // Redirect www to non-www (canonical)
  if (hostname.startsWith('www.')) {
    const nonWwwUrl = new URL(request.url)
    nonWwwUrl.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(nonWwwUrl, 301)
  }
  
  // Redirect /en/* to /* for English pages (canonical URLs)
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const newPath = pathname.replace(/^\/en/, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url), 301)
  }
  
  // Add canonical header for all pages
  const response = NextResponse.next()
  
  // Set canonical URL without www and without /en
  const canonicalHost = hostname.replace('www.', '')
  const canonicalPath = pathname.replace(/^\/en/, '') || '/'
  const canonicalUrl = \`https://\${canonicalHost}\${canonicalPath}\`
  response.headers.set('Link', \`<\${canonicalUrl}>; rel="canonical"\`)
  
  // Add X-Robots-Tag for better indexing control
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  
  // Add hreflang headers for multi-language support
  const languages = ['en', 'ar', 'fr', 'ru', 'hi', 'zh']
  const hreflangTags = languages.map(lang => {
    const langPath = lang === 'en' ? pathname : \`/\${lang}\${pathname}\`
    return \`<https://rollsroycers.com\${langPath}>; rel="alternate"; hreflang="\${lang}"\`
  }).join(', ')
  
  response.headers.set('Link', \`\${response.headers.get('Link')}, \${hreflangTags}\`)
  
  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}`;

  await fs.writeFile('middleware.ts', middlewareContent);
  console.log('✅ تم تحديث middleware.ts');
}

// تحديث next.config.js لإضافة redirects
async function updateNextConfig() {
  console.log('📝 تحديث next.config.js لإضافة www redirects...');
  
  const configPath = 'next.config.js';
  let config = await fs.readFile(configPath, 'utf-8');
  
  // إضافة async rewrites للتعامل مع www
  const rewritesSection = `
  // Handle www to non-www rewrites
  async rewrites() {
    return {
      beforeFiles: [
        // Redirect www to non-www at the application level
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'www.rollsroycers.com',
            },
          ],
          destination: 'https://rollsroycers.com/:path*',
        },
      ],
    }
  },`;
  
  // البحث عن مكان إضافة rewrites
  if (!config.includes('async rewrites()')) {
    config = config.replace('async redirects()', rewritesSection + '\n\n  async redirects()');
    await fs.writeFile(configPath, config);
    console.log('✅ تم تحديث next.config.js');
  } else {
    console.log('⚠️ rewrites موجود بالفعل في next.config.js');
  }
}

// إنشاء/تحديث ملف vercel.json للتعامل مع redirects على مستوى Vercel
async function createVercelConfig() {
  console.log('📝 إنشاء vercel.json للتعامل مع www redirects...');
  
  const vercelConfig = {
    redirects: [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rollsroycers.com"
          }
        ],
        destination: "https://rollsroycers.com/:path*",
        permanent: true
      }
    ],
    headers: [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options", 
            value: "SAMEORIGIN"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          }
        ]
      }
    ]
  };
  
  await fs.writeFile('vercel.json', JSON.stringify(vercelConfig, null, 2));
  console.log('✅ تم إنشاء vercel.json');
}

// تحسين ملف robots.txt
async function updateRobotsTxt() {
  console.log('📝 تحديث robots.txt...');
  
  const robotsContent = `# Robots.txt for https://rollsroycers.com
# Optimized for maximum SEO visibility and AI search engines
# Last updated: ${new Date().toISOString()}

# Canonical domain directive
Host: rollsroycers.com

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

# Sitemaps - All languages (canonical URLs without www)
Sitemap: https://rollsroycers.com/sitemap.xml
Sitemap: https://rollsroycers.com/sitemap-en.xml
Sitemap: https://rollsroycers.com/sitemap-ar.xml
Sitemap: https://rollsroycers.com/sitemap-zh.xml
Sitemap: https://rollsroycers.com/sitemap-fr.xml
Sitemap: https://rollsroycers.com/sitemap-ru.xml
Sitemap: https://rollsroycers.com/sitemap-hi.xml
Sitemap: https://rollsroycers.com/sitemap-pages.xml

# Preferred domain (no www)
Host: https://rollsroycers.com

# Crawl-delay for responsible crawling
User-agent: *
Crawl-delay: 1`;

  await fs.writeFile('public/robots.txt', robotsContent);
  console.log('✅ تم تحديث robots.txt');
}

// إنشاء sitemap محسّن
async function generateEnhancedSitemap() {
  console.log('📝 إنشاء sitemap محسّن...');
  
  const pages = [
    // Main pages
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.9, changefreq: 'weekly' },
    { path: '/fleet', priority: 0.9, changefreq: 'weekly' },
    { path: '/services', priority: 0.9, changefreq: 'weekly' },
    { path: '/locations', priority: 0.8, changefreq: 'weekly' },
    { path: '/booking', priority: 1.0, changefreq: 'daily' },
    { path: '/contact', priority: 0.9, changefreq: 'monthly' },
    { path: '/blog', priority: 0.8, changefreq: 'daily' },
    { path: '/faq', priority: 0.7, changefreq: 'monthly' },
    { path: '/gallery', priority: 0.7, changefreq: 'weekly' },
    { path: '/testimonials', priority: 0.7, changefreq: 'weekly' },
    { path: '/pricing', priority: 0.9, changefreq: 'weekly' },
    { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
    { path: '/terms', priority: 0.5, changefreq: 'yearly' },
    { path: '/cookie-policy', priority: 0.5, changefreq: 'yearly' },
    
    // Fleet pages
    { path: '/fleet/phantom', priority: 0.9, changefreq: 'monthly' },
    { path: '/fleet/ghost', priority: 0.9, changefreq: 'monthly' },
    { path: '/fleet/cullinan', priority: 0.9, changefreq: 'monthly' },
    { path: '/fleet/dawn', priority: 0.9, changefreq: 'monthly' },
    { path: '/fleet/wraith', priority: 0.9, changefreq: 'monthly' },
    
    // Service pages
    { path: '/services/airport-transfer', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/wedding', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/corporate', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/tours', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/events', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/photoshoot', priority: 0.8, changefreq: 'monthly' },
    { path: '/services/chauffeur', priority: 0.8, changefreq: 'monthly' },
    
    // Location pages
    { path: '/locations/downtown-dubai', priority: 0.8, changefreq: 'monthly' },
    { path: '/locations/dubai-marina', priority: 0.8, changefreq: 'monthly' },
    { path: '/locations/business-bay', priority: 0.8, changefreq: 'monthly' },
    { path: '/locations/palm-jumeirah', priority: 0.8, changefreq: 'monthly' },
    { path: '/locations/jbr', priority: 0.8, changefreq: 'monthly' },
    { path: '/locations/difc', priority: 0.8, changefreq: 'monthly' },
    
    // Comparison pages
    { path: '/compare/rolls-royce-vs-bentley', priority: 0.7, changefreq: 'monthly' },
    { path: '/compare/rolls-royce-vs-mercedes', priority: 0.7, changefreq: 'monthly' },
    { path: '/compare/rolls-royce-vs-ferrari', priority: 0.7, changefreq: 'monthly' },
    { path: '/compare/phantom-vs-maybach', priority: 0.7, changefreq: 'monthly' },
    
    // Blog articles
    { path: '/blog/rolls-royce-wedding-car-dubai', priority: 0.7, changefreq: 'monthly' },
    { path: '/blog/business-travel-rolls-royce', priority: 0.7, changefreq: 'monthly' },
  ];
  
  const languages = ['en', 'ar', 'fr', 'ru', 'hi', 'zh'];
  const lastmod = new Date().toISOString();
  
  // إنشاء sitemap لكل لغة
  for (const lang of languages) {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
  const url = lang === 'en' ? page.path : `/${lang}${page.path}`;
  const alternates = languages.map(l => {
    const altUrl = l === 'en' ? page.path : `/${l}${page.path}`;
    return `    <xhtml:link rel="alternate" hreflang="${l}" href="https://rollsroycers.com${altUrl}"/>`;
  }).join('\n');
  
  return `  <url>
    <loc>https://rollsroycers.com${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
  </url>`;
}).join('\n')}
</urlset>`;
    
    const filename = lang === 'en' ? 'sitemap-en.xml' : `sitemap-${lang}.xml`;
    await fs.writeFile(`public/${filename}`, sitemapContent);
    console.log(`✅ تم إنشاء ${filename}`);
  }
  
  // إنشاء sitemap index
  const sitemapIndexContent = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${languages.map(lang => `  <sitemap>
    <loc>https://rollsroycers.com/sitemap-${lang}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n')}
  <sitemap>
    <loc>https://rollsroycers.com/sitemap-pages.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  await fs.writeFile('public/sitemap.xml', sitemapIndexContent);
  console.log('✅ تم إنشاء sitemap.xml الرئيسي');
}

// إنشاء structured data للصفحات المهمة
async function addStructuredData() {
  console.log('📝 إضافة structured data للصفحات...');
  
  // سيتم إضافة هذا في ملفات الصفحات مباشرة
  const structuredDataExamples = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Rolls Roycers - Luxury Car Rental Dubai",
      "url": "https://rollsroycers.com",
      "logo": "https://rollsroycers.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/rollsroycers",
        "https://www.instagram.com/rollsroycers",
        "https://www.twitter.com/rollsroycers"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-50-123-4567",
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": ["en", "ar", "fr", "ru", "hi", "zh"]
      }
    },
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "AutoRental",
      "name": "Rolls Roycers Dubai",
      "image": "https://rollsroycers.com/images/hero.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sheikh Zayed Road",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2048,
        "longitude": 55.2708
      },
      "url": "https://rollsroycers.com",
      "telephone": "+971-50-123-4567",
      "priceRange": "$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  };
  
  console.log('✅ Structured data جاهز للإضافة في الصفحات');
  return structuredDataExamples;
}

// إنشاء تقرير بالإصلاحات
async function createReport() {
  console.log('📝 إنشاء تقرير الإصلاحات...');
  
  const report = `# تقرير إصلاح مشاكل Google Search Console
تاريخ: ${new Date().toISOString()}

## المشاكل التي تم اكتشافها:
1. **ازدواجية الروابط**: ${notIndexedPages.filter(url => url.includes('www.')).length} صفحة بـ www
2. **صفحات غير مفهرسة**: ${notIndexedPages.length} صفحة
3. **لغات متعددة بدون canonical URLs واضحة**

## الإصلاحات المطبقة:

### 1. إصلاح مشكلة www redirects
- ✅ تحديث middleware.ts لإضافة redirect من www إلى non-www
- ✅ إضافة canonical headers لجميع الصفحات
- ✅ إنشاء vercel.json للتعامل مع redirects على مستوى الخادم

### 2. تحسين SEO للصفحات متعددة اللغات
- ✅ إضافة hreflang tags في middleware
- ✅ تحديث sitemap لكل لغة مع alternate links
- ✅ تحسين robots.txt مع Host directive

### 3. تحسينات إضافية
- ✅ إضافة X-Robots-Tag headers
- ✅ تحديث sitemap مع priorities و changefreq
- ✅ إعداد structured data للصفحات المهمة

## الخطوات التالية:
1. نشر التحديثات على الموقع
2. طلب إعادة الفهرسة في Google Search Console
3. مراقبة التحسن في الفهرسة خلال الأسابيع القادمة
4. التحقق من Core Web Vitals

## الصفحات التي تحتاج متابعة:
${notIndexedPages.map(url => `- ${url}`).join('\n')}

## نصائح للمستقبل:
- استخدام canonical URLs دائماً
- تجنب المحتوى المكرر
- التأكد من وجود metadata مناسب لكل صفحة
- مراقبة Google Search Console بانتظام
`;
  
  await fs.writeFile('GOOGLE_SEARCH_CONSOLE_FIX_REPORT.md', report);
  console.log('✅ تم إنشاء التقرير');
}

// الدالة الرئيسية
async function main() {
  console.log('🚀 بدء إصلاح مشاكل Google Search Console...\n');
  
  try {
    // 1. تحليل الصفحات غير المفهرسة
    const pageInfo = extractPageInfo(notIndexedPages);
    console.log(`📊 تم العثور على ${pageInfo.size} صفحة فريدة بـ ${notIndexedPages.length} رابط\n`);
    
    // 2. تطبيق الإصلاحات
    await updateMiddleware();
    await createVercelConfig();
    await updateRobotsTxt();
    await generateEnhancedSitemap();
    await addStructuredData();
    
    // 3. إنشاء التقرير
    await createReport();
    
    console.log('\n✅ تم إكمال جميع الإصلاحات بنجاح!');
    console.log('📋 راجع GOOGLE_SEARCH_CONSOLE_FIX_REPORT.md للتفاصيل');
    
  } catch (error) {
    console.error('❌ حدث خطأ:', error);
  }
}

// تشغيل السكريبت
main();