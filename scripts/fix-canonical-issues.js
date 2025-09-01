#!/usr/bin/env node

/**
 * Script لتصحيح جميع مشاكل Canonical Tags المكتشفة في Google Search Console
 * 
 * المشاكل المكتشفة:
 * 1. استخدام www في canonical URLs بينما الموقع يعيد التوجيه إلى non-www
 * 2. جميع اللغات تشير إلى النسخة الإنجليزية كـ canonical بدلاً من self-referencing
 * 3. عدم تطابق canonical URLs مع الـ actual URLs
 * 
 * الحلول:
 * 1. تغيير canonical base URL من www.rollsroycers.com إلى rollsroycers.com
 * 2. تحديث SEO component لاستخدام الـ URL الصحيح
 * 3. التأكد من أن middleware و SEO component متسقين
 */

const fs = require('fs').promises;
const path = require('path');

// الألوان للـ console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

async function fixCanonicalIssues() {
  console.log(`${colors.cyan}${colors.bright}
╔════════════════════════════════════════════════════════════════╗
║         إصلاح مشاكل Canonical Tags من Google Search Console    ║
╚════════════════════════════════════════════════════════════════╝
${colors.reset}`);

  const fixes = [];
  let totalIssuesFixed = 0;

  try {
    // 1. إصلاح SEO Component - تغيير base URL من www إلى non-www
    console.log(`\n${colors.yellow}📝 تحديث SEO Component...${colors.reset}`);
    
    const seoPath = path.join(process.cwd(), 'src/components/SEO.tsx');
    let seoContent = await fs.readFile(seoPath, 'utf8');
    
    // تغيير base URL من www.rollsroycers.com إلى rollsroycers.com
    const oldBaseUrl = `const baseUrl = 'https://www.rollsroycers.com'`;
    const newBaseUrl = `const baseUrl = 'https://rollsroycers.com'`;
    
    if (seoContent.includes(oldBaseUrl)) {
      seoContent = seoContent.replace(oldBaseUrl, newBaseUrl);
      await fs.writeFile(seoPath, seoContent);
      console.log(`${colors.green}✅ تم تحديث base URL في SEO component${colors.reset}`);
      totalIssuesFixed++;
      fixes.push('تحديث base URL من www إلى non-www في SEO component');
    } else {
      console.log(`${colors.blue}ℹ️ Base URL محدث بالفعل في SEO component${colors.reset}`);
    }

    // 2. إنشاء ملف تكوين canonical محسّن
    console.log(`\n${colors.yellow}📝 إنشاء ملف تكوين canonical محسّن...${colors.reset}`);
    
    const canonicalConfig = {
      baseUrl: 'https://rollsroycers.com',
      defaultLocale: 'en',
      locales: ['en', 'ar', 'zh', 'fr', 'ru', 'hi'],
      rules: {
        // قواعد canonical لكل نوع من الصفحات
        selfReferencing: true, // كل صفحة تشير إلى نفسها كـ canonical
        crossLanguageCanonical: false, // لا نستخدم canonical عبر اللغات
        useHreflang: true, // استخدام hreflang للربط بين اللغات
        removeTrailingSlash: true, // إزالة trailing slash
        forceLowercase: true // فرض lowercase في URLs
      },
      // الصفحات التي تحتاج معاملة خاصة
      specialPages: {
        '/en/*': {
          redirect: true, // إعادة توجيه من /en/* إلى /*
          statusCode: 301
        }
      }
    };
    
    const configPath = path.join(process.cwd(), 'config/canonical-config.json');
    await fs.writeFile(configPath, JSON.stringify(canonicalConfig, null, 2));
    console.log(`${colors.green}✅ تم إنشاء ملف canonical-config.json${colors.reset}`);
    totalIssuesFixed++;
    fixes.push('إنشاء ملف تكوين canonical محسّن');

    // 3. إنشاء Enhanced SEO Component مع self-referencing canonical
    console.log(`\n${colors.yellow}📝 إنشاء Enhanced SEO Component...${colors.reset}`);
    
    const enhancedSEOContent = `import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import canonicalConfig from '../../config/canonical-config.json'

interface EnhancedSEOProps {
  pageKey: string
  title?: string
  description?: string
  dynamicParams?: {
    [key: string]: string
  }
}

export default function EnhancedSEO({ pageKey, title: titleProp, description: descriptionProp, dynamicParams }: EnhancedSEOProps) {
  const router = useRouter()
  const { t, i18n } = useTranslation('seo')
  
  const currentLang = i18n.language || 'en'
  const baseUrl = canonicalConfig.baseUrl
  const locale = (router.locale as string) || 'en'
  const defaultLocale = canonicalConfig.defaultLocale
  
  // تنظيف المسار من query parameters و hash
  const cleanPath = (router.asPath || '/').split('#')[0].split('?')[0]
  
  // الحصول على المسار الأساسي بدون locale
  const getBasePathWithoutLocale = (path: string): string => {
    const pathWithoutLocale = path
      .replace(/^\\/en(?=\\/|$)/, '')
      .replace(/^\\/ar(?=\\/|$)/, '')
      .replace(/^\\/zh(?=\\/|$)/, '')
      .replace(/^\\/fr(?=\\/|$)/, '')
      .replace(/^\\/ru(?=\\/|$)/, '')
      .replace(/^\\/hi(?=\\/|$)/, '')
    
    return pathWithoutLocale || '/'
  }
  
  const basePathWithoutLocale = getBasePathWithoutLocale(cleanPath)
  
  // IMPORTANT: Self-referencing canonical لكل لغة
  // كل صفحة تشير إلى نفسها كـ canonical
  const getCanonicalUrl = () => {
    if (locale === defaultLocale) {
      // النسخة الإنجليزية بدون prefix
      return \`\${baseUrl}\${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}\`
    } else {
      // اللغات الأخرى مع prefix
      return \`\${baseUrl}/\${locale}\${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}\`
    }
  }
  
  const canonicalUrl = getCanonicalUrl()
  
  // بناء alternate URLs للغات المختلفة
  const buildLangUrl = (lang: string) => {
    const prefix = lang === defaultLocale ? '' : \`/\${lang}\`
    return \`\${baseUrl}\${prefix}\${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}\`
  }
  
  const alternateUrls = canonicalConfig.locales.map(lang => ({ 
    lang, 
    url: buildLangUrl(lang) 
  }))
  
  // الحصول على الترجمات
  const getTranslation = (key: string) => {
    let fullKey = ''
    
    if (pageKey === 'home') {
      fullKey = \`pages.home.\${key}\`
    } else if (pageKey.startsWith('fleet.')) {
      const fleetPath = pageKey.split('.').slice(1).join('.')
      fullKey = \`pages.fleet.\${fleetPath}.\${key}\`
    } else if (pageKey.startsWith('services.')) {
      fullKey = \`pages.services.\${pageKey.split('.')[1]}.\${key}\`
    } else if (pageKey.startsWith('locations.')) {
      fullKey = \`pages.locations.\${pageKey.split('.')[1]}.\${key}\`
    } else if (pageKey.startsWith('compare.')) {
      fullKey = \`pages.compare.\${pageKey.split('.')[1]}.\${key}\`
    } else {
      fullKey = \`pages.\${pageKey}.\${key}\`
    }
    
    let translation = t(fullKey)
    
    if (dynamicParams) {
      Object.entries(dynamicParams).forEach(([param, value]) => {
        translation = translation.replace(\`{{\${param}}}\`, value)
      })
    }
    
    return translation
  }
  
  const title = titleProp || getTranslation('title')
  const description = descriptionProp || getTranslation('description')
  const keywords = getTranslation('keywords')
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* CRITICAL: Self-referencing Canonical URL */}
      {/* كل صفحة تشير إلى نفسها كـ canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language URLs مع hreflang الصحيح */}
      {alternateUrls.map(({ lang, url }) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      {/* x-default يشير إلى النسخة الإنجليزية */}
      <link rel="alternate" hrefLang="x-default" href={buildLangUrl(defaultLocale)} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={\`\${baseUrl}/images/og-image.jpg\`} />
      <meta property="og:site_name" content="Rolls-Royce Dubai" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={\`\${baseUrl}/images/twitter-image.jpg\`} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Geo Tags for Dubai */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
    </Head>
  )
}`;
    
    const enhancedSEOPath = path.join(process.cwd(), 'src/components/EnhancedCanonicalSEO.tsx');
    await fs.writeFile(enhancedSEOPath, enhancedSEOContent);
    console.log(`${colors.green}✅ تم إنشاء EnhancedCanonicalSEO component${colors.reset}`);
    totalIssuesFixed++;
    fixes.push('إنشاء Enhanced SEO Component مع self-referencing canonical');

    // 4. تحديث middleware لضمان التوافق
    console.log(`\n${colors.yellow}📝 التحقق من middleware...${colors.reset}`);
    
    const middlewarePath = path.join(process.cwd(), 'middleware.ts');
    let middlewareContent = await fs.readFile(middlewarePath, 'utf8');
    
    // التأكد من أن canonical في middleware يستخدم rollsroycers.com بدون www
    if (middlewareContent.includes('https://rollsroycers.com')) {
      console.log(`${colors.green}✅ Middleware يستخدم non-www URL بشكل صحيح${colors.reset}`);
    } else if (middlewareContent.includes('https://www.rollsroycers.com')) {
      middlewareContent = middlewareContent.replace(/https:\/\/www\.rollsroycers\.com/g, 'https://rollsroycers.com');
      await fs.writeFile(middlewarePath, middlewareContent);
      console.log(`${colors.green}✅ تم تحديث middleware لاستخدام non-www URL${colors.reset}`);
      totalIssuesFixed++;
      fixes.push('تحديث middleware لاستخدام non-www URL');
    }

    // 5. إنشاء script للتحقق من canonical tags
    console.log(`\n${colors.yellow}📝 إنشاء script للتحقق من canonical tags...${colors.reset}`);
    
    const verifyScript = `#!/usr/bin/env node

/**
 * Script للتحقق من canonical tags في جميع الصفحات
 */

const axios = require('axios');
const cheerio = require('cheerio');

const baseUrl = 'https://rollsroycers.com';
const pages = [
  '/',
  '/about',
  '/fleet/phantom',
  '/fleet/ghost',
  '/fleet/wraith',
  '/fleet/dawn',
  '/fleet/cullinan',
  '/services/wedding',
  '/services/corporate',
  '/services/airport-transfer',
  '/services/chauffeur',
  '/services/photoshoot',
  '/services/events',
  '/services/tours',
  '/locations/downtown-dubai',
  '/locations/dubai-marina',
  '/locations/palm-jumeirah',
  '/locations/business-bay',
  '/locations/jbr',
  '/locations/difc',
  '/gallery',
  '/testimonials',
  '/faq',
  '/contact',
  '/booking',
  '/blog',
  '/terms',
  '/privacy',
  '/pricing',
  '/compare/rolls-royce-vs-bentley'
];

const locales = ['', 'ar', 'zh', 'fr', 'ru', 'hi'];

async function checkCanonical(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const canonical = $('link[rel="canonical"]').attr('href');
    const hreflangLinks = $('link[rel="alternate"][hreflang]');
    
    return {
      url,
      canonical,
      hreflangCount: hreflangLinks.length,
      status: response.status
    };
  } catch (error) {
    return {
      url,
      error: error.message
    };
  }
}

async function verifyAllPages() {
  console.log('🔍 التحقق من canonical tags في جميع الصفحات...\\n');
  
  for (const page of pages) {
    console.log(\`\\n📄 الصفحة: \${page}\`);
    
    for (const locale of locales) {
      const path = locale ? \`/\${locale}\${page}\` : page;
      const fullUrl = \`\${baseUrl}\${path}\`;
      
      const result = await checkCanonical(fullUrl);
      
      if (result.error) {
        console.log(\`  ❌ [\${locale || 'en'}] خطأ: \${result.error}\`);
      } else {
        const expectedCanonical = locale === '' ? 
          \`\${baseUrl}\${page}\` : 
          \`\${baseUrl}/\${locale}\${page}\`;
        
        const isCorrect = result.canonical === expectedCanonical;
        const status = isCorrect ? '✅' : '⚠️';
        
        console.log(\`  \${status} [\${locale || 'en'}] Canonical: \${result.canonical}\`);
        
        if (!isCorrect) {
          console.log(\`     Expected: \${expectedCanonical}\`);
        }
        
        if (result.hreflangCount > 0) {
          console.log(\`     Hreflang links: \${result.hreflangCount}\`);
        }
      }
    }
  }
}

// تشغيل التحقق
verifyAllPages().catch(console.error);
`;
    
    const verifyPath = path.join(process.cwd(), 'scripts/verify-canonical-tags.js');
    await fs.writeFile(verifyPath, verifyScript);
    console.log(`${colors.green}✅ تم إنشاء script للتحقق من canonical tags${colors.reset}`);
    totalIssuesFixed++;
    fixes.push('إنشاء script للتحقق من canonical tags');

    // 6. إنشاء تقرير الإصلاحات
    console.log(`\n${colors.yellow}📝 إنشاء تقرير الإصلاحات...${colors.reset}`);
    
    const report = {
      timestamp: new Date().toISOString(),
      issuesFixed: totalIssuesFixed,
      fixes: fixes,
      pagesAffected: [
        'جميع الصفحات باللغة الإنجليزية (بدون prefix)',
        'جميع الصفحات باللغة العربية (/ar/*)',
        'جميع الصفحات باللغة الصينية (/zh/*)',
        'جميع الصفحات باللغة الفرنسية (/fr/*)',
        'جميع الصفحات باللغة الروسية (/ru/*)',
        'جميع الصفحات باللغة الهندية (/hi/*)'
      ],
      nextSteps: [
        'نشر التغييرات على الموقع',
        'طلب إعادة الفهرسة في Google Search Console',
        'مراقبة التقارير بعد 48-72 ساعة',
        'التحقق من اختفاء رسائل "Alternate page with proper canonical tag"'
      ],
      technicalDetails: {
        oldCanonicalStrategy: 'جميع اللغات تشير إلى النسخة الإنجليزية',
        newCanonicalStrategy: 'Self-referencing canonical - كل صفحة تشير إلى نفسها',
        baseUrlChange: 'من https://www.rollsroycers.com إلى https://rollsroycers.com',
        hreflangImplementation: 'استخدام hreflang للربط بين اللغات المختلفة'
      }
    };
    
    const reportPath = path.join(process.cwd(), 'CANONICAL_FIX_REPORT.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`${colors.green}✅ تم إنشاء تقرير الإصلاحات${colors.reset}`);

    // عرض ملخص النتائج
    console.log(`\n${colors.cyan}${colors.bright}
╔════════════════════════════════════════════════════════════════╗
║                      ملخص الإصلاحات                           ║
╚════════════════════════════════════════════════════════════════╝
${colors.reset}`);
    
    console.log(`${colors.green}✅ تم إصلاح ${totalIssuesFixed} مشاكل:${colors.reset}`);
    fixes.forEach((fix, index) => {
      console.log(`   ${index + 1}. ${fix}`);
    });
    
    console.log(`\n${colors.yellow}📋 الخطوات التالية:${colors.reset}`);
    report.nextSteps.forEach((step, index) => {
      console.log(`   ${index + 1}. ${step}`);
    });
    
    console.log(`\n${colors.blue}💡 نصيحة: بعد نشر هذه التغييرات، استخدم الأمر التالي للتحقق:${colors.reset}`);
    console.log(`   ${colors.cyan}node scripts/verify-canonical-tags.js${colors.reset}`);
    
    console.log(`\n${colors.green}${colors.bright}✨ تمت العملية بنجاح!${colors.reset}`);
    
  } catch (error) {
    console.error(`${colors.red}❌ خطأ: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

// تشغيل الإصلاحات
fixCanonicalIssues().catch(console.error);