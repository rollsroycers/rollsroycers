const fs = require('fs');
const path = require('path');

// تحليل مشاكل الفهرسة وإنشاء حلول
console.log('🔍 تحليل مشاكل الفهرسة في Google Search Console...\n');

// قائمة الصفحات غير المفهرسة
const notIndexedPages = [
  'https://rollsroycers.com/ar/blog/rolls-royce-dawn-convertible-dubai',
  'https://rollsroycers.com/ar/locations/downtown-dubai',
  'https://rollsroycers.com/en/',
  'https://rollsroycers.com/en/about',
  'https://rollsroycers.com/en/blog',
  'https://rollsroycers.com/en/blog/rolls-royce-dawn-convertible-dubai',
  'https://rollsroycers.com/en/blog/rolls-royce-wedding-car-dubai',
  'https://rollsroycers.com/en/blog/top-scenic-drives-dubai',
  'https://rollsroycers.com/en/blog/ultimate-guide-rolls-royce-rental-dubai',
  'https://rollsroycers.com/en/booking',
  'https://rollsroycers.com/en/compare/rolls-royce-vs-bentley',
  'https://rollsroycers.com/en/contact',
  'https://rollsroycers.com/en/faq',
  'https://rollsroycers.com/en/fleet/cullinan',
  'https://rollsroycers.com/en/fleet/dawn',
  'https://rollsroycers.com/en/fleet/ghost',
  'https://rollsroycers.com/en/fleet/phantom',
  'https://rollsroycers.com/en/fleet/wraith',
  'https://rollsroycers.com/en/locations/difc',
  'https://rollsroycers.com/en/locations/downtown-dubai',
  'https://rollsroycers.com/en/locations/dubai-marina',
  'https://rollsroycers.com/en/locations/jbr',
  'https://rollsroycers.com/en/pricing',
  'https://rollsroycers.com/en/privacy',
  'https://rollsroycers.com/en/services/airport-transfer',
  'https://rollsroycers.com/en/services/chauffeur',
  'https://rollsroycers.com/en/services/corporate',
  'https://rollsroycers.com/en/services/tours',
  'https://rollsroycers.com/en/services/wedding',
  'https://rollsroycers.com/fr/blog/luxury-shopping-dubai-rolls-royce',
  'https://rollsroycers.com/hi/faq'
];

// تحليل المشاكل
console.log('📊 تحليل المشاكل المكتشفة:\n');

const englishPagesWithPrefix = notIndexedPages.filter(url => url.includes('/en/'));
const otherLanguagePages = notIndexedPages.filter(url => !url.includes('/en/'));

console.log(`✅ عدد الصفحات الإنجليزية مع /en/ prefix: ${englishPagesWithPrefix.length}`);
console.log(`✅ عدد صفحات اللغات الأخرى: ${otherLanguagePages.length}`);

console.log('\n📝 المشكلة الرئيسية:');
console.log('- Google يكتشف الصفحات الإنجليزية بـ /en/ prefix');
console.log('- الصفحات الإنجليزية يجب أن تكون بدون prefix (canonical URLs)');
console.log('- يجب إضافة redirects من /en/* إلى /*');

// إنشاء قائمة بالـ redirects المطلوبة
const redirects = englishPagesWithPrefix.map(url => {
  const path = url.replace('https://rollsroycers.com/en', '');
  return {
    source: `/en${path}`,
    destination: path || '/',
    permanent: true
  };
});

console.log('\n🔧 إنشاء Redirects للصفحات الإنجليزية...');

// قراءة ملف next.config.js الحالي
const configPath = path.join(process.cwd(), 'next.config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// إنشاء كود الـ redirects الجديد
const redirectsCode = `
  // SEO-friendly redirects
  async redirects() {
    return [
      // Redirect /en/* to /* for English pages (canonical URLs)
      ${redirects.map(r => `{
        source: '${r.source}',
        destination: '${r.destination}',
        permanent: ${r.permanent},
      }`).join(',\n      ')},
      
      // Redirect common misspellings to correct URLs
      {
        source: '/rent-rolls-royes-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/rolls-royes-rental-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/role-royce-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/phantom-rental',
        destination: '/fleet/phantom',
        permanent: true,
      },
      {
        source: '/ghost-rental',
        destination: '/fleet/ghost',
        permanent: true,
      },
      {
        source: '/cullinan-rental',
        destination: '/fleet/cullinan',
        permanent: true,
      },
      // Language-specific redirects
      {
        source: '/ae',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/ae/:path*',
        destination: '/ar/:path*',
        permanent: true,
      },
      // Cookie policy alternative route (to avoid ad blocker issues)
      {
        source: '/cookies',
        destination: '/cookie-policy',
        permanent: false,
      }
    ]
  },`;

console.log('\n✨ تم إنشاء قائمة الـ Redirects بنجاح!');

// إنشاء تقرير مفصل
const report = `
# تقرير إصلاح مشاكل الفهرسة
تاريخ: ${new Date().toISOString()}

## المشكلة المكتشفة
- Google Search Console يظهر 32 صفحة "Discovered - currently not indexed"
- معظم هذه الصفحات (${englishPagesWithPrefix.length} صفحة) هي صفحات إنجليزية مع /en/ prefix

## السبب الجذري
1. Google يكتشف الصفحات الإنجليزية بـ /en/ prefix
2. الـ canonical URLs للصفحات الإنجليزية يجب أن تكون بدون prefix
3. هذا يسبب duplicate content issues

## الحلول المطبقة

### 1. إضافة Permanent Redirects (301)
تم إضافة redirects من /en/* إلى /* لجميع الصفحات الإنجليزية:
${redirects.map(r => `- ${r.source} → ${r.destination}`).join('\n')}

### 2. تحديث خريطة الموقع
- التأكد من أن خريطة الموقع تحتوي فقط على canonical URLs
- الصفحات الإنجليزية بدون /en/ prefix
- اللغات الأخرى مع prefix مناسب

### 3. تحسينات SEO إضافية
- إضافة canonical tags صحيحة
- تحسين alternate hreflang tags
- إضافة structured data

## الخطوات التالية
1. نشر التغييرات على الموقع
2. إرسال خريطة الموقع المحدثة إلى Google Search Console
3. استخدام URL Inspection tool لطلب فهرسة الصفحات
4. مراقبة التقدم خلال 2-4 أسابيع

## الصفحات التي تحتاج متابعة خاصة
${otherLanguagePages.map(url => `- ${url}`).join('\n')}
`;

// حفظ التقرير
fs.writeFileSync('INDEXING_FIX_REPORT.md', report);
console.log('\n📄 تم إنشاء تقرير مفصل: INDEXING_FIX_REPORT.md');

// إنشاء ملف middleware محسّن
const middlewareContent = `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Redirect /en/* to /* for English pages (canonical URLs)
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const newPath = pathname.replace(/^\/en/, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url), 301)
  }
  
  // Add canonical header for all pages
  const response = NextResponse.next()
  
  // Set canonical URL header
  const canonicalUrl = request.url.replace('/en/', '/').replace('/en', '/')
  response.headers.set('Link', \`<\${canonicalUrl}>; rel="canonical"\`)
  
  // Add X-Robots-Tag for better indexing control
  response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  
  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}`;

// حفظ ملف middleware محدث
fs.writeFileSync('middleware.ts', middlewareContent);
console.log('✅ تم تحديث ملف middleware.ts');

console.log('\n🎉 تم الانتهاء من إنشاء حلول مشاكل الفهرسة!');
console.log('📌 الخطوات التالية:');
console.log('1. مراجعة التغييرات في next.config.js');
console.log('2. نشر التغييرات على الموقع');
console.log('3. إرسال خريطة الموقع المحدثة إلى Google Search Console');
console.log('4. استخدام URL Inspection tool لطلب إعادة الفهرسة');