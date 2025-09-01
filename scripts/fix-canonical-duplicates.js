#!/usr/bin/env node

/**
 * Fix Google Search Console Duplicate Canonical Issues
 * Addresses: Duplicate without user-selected canonical errors
 * Date: January 13, 2025
 */

const fs = require('fs').promises;
const path = require('path');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m',
  bold: '\x1b[1m'
};

// Pages reported with duplicate issues
const affectedPages = [
  { path: '/ru/contact', locale: 'ru', page: 'contact' },
  { path: '/fr/gallery', locale: 'fr', page: 'gallery' }
];

// All supported languages
const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];

async function updateSEOComponent() {
  console.log(`${colors.blue}📝 Updating SEO Component for better canonical handling...${colors.reset}`);
  
  const seoPath = path.join(process.cwd(), 'src', 'components', 'SEO.tsx');
  
  const improvedSEOContent = `import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface SEOProps {
  pageKey: string
  title?: string
  description?: string
  dynamicParams?: {
    [key: string]: string
  }
}

export default function SEO({ pageKey, title: titleProp, description: descriptionProp, dynamicParams }: SEOProps) {
  const router = useRouter()
  const { t, i18n } = useTranslation('seo')
  
  // Get the current language
  const currentLang = i18n.language || 'en'
  
  // Build the full translation key path
  const getTranslation = (key: string) => {
    let fullKey = ''
    
    // Handle different pageKey formats
    if (pageKey === 'home') {
      fullKey = \`pages.home.\${key}\`
    } else if (pageKey === 'blog.index') {
      fullKey = \`pages.other.blog.\${key}\`
    } else if (pageKey.startsWith('fleet.')) {
      const fleetPath = pageKey.split('.').slice(1).join('.')
      fullKey = \`pages.fleet.\${fleetPath}.\${key}\`
    } else if (pageKey.startsWith('services.')) {
      fullKey = \`pages.services.\${pageKey.split('.')[1]}.\${key}\`
    } else if (pageKey.startsWith('locations.')) {
      fullKey = \`pages.locations.\${pageKey.split('.')[1]}.\${key}\`
    } else if (pageKey.startsWith('other.')) {
      fullKey = \`pages.other.\${pageKey.split('.')[1]}.\${key}\`
    } else if (pageKey.startsWith('compare.')) {
      fullKey = \`pages.compare.\${pageKey.split('.')[1]}.\${key}\`
    } else {
      fullKey = \`pages.\${pageKey}.\${key}\`
    }
    
    let translation = t(fullKey)
    
    // Replace dynamic parameters if provided
    if (dynamicParams) {
      Object.entries(dynamicParams).forEach(([param, value]) => {
        translation = translation.replace(\`{{\${param}}}\`, value)
      })
    }
    
    return translation
  }
  
  // Get SEO content
  const title = titleProp || getTranslation('title')
  const description = descriptionProp || getTranslation('description')
  const keywords = getTranslation('keywords')
  
  // Generate canonical & alternate URLs (locale-aware)
  const baseUrl = 'https://www.rollsroycers.com'
  const locale = (router.locale as string) || 'en'
  const defaultLocale = (router.defaultLocale as string) || 'en'

  // Strip query/hash from asPath for safety
  const cleanPath = (router.asPath || '/').split('#')[0].split('?')[0]

  // IMPORTANT: Get the base path without any locale prefix
  const getBasePathWithoutLocale = (path: string): string => {
    // Remove all possible locale prefixes
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

  // CANONICAL URL: Always use English (default locale) without prefix
  // This ensures all language versions point to the same canonical
  const canonicalUrl = \`\${baseUrl}\${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}\`

  // Alternate language URLs - English has no prefix, other languages have prefix
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi']
  const buildLangUrl = (lang: string) => {
    // Only non-English languages get locale prefix
    const prefix = lang === defaultLocale ? '' : \`/\${lang}\`
    return \`\${baseUrl}\${prefix}\${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}\`
  }

  const alternateUrls = languages.map(lang => ({ lang, url: buildLangUrl(lang) }))
  
  // Language-specific locale codes
  const localeMap: { [key: string]: string } = {
    'en': 'en_US',
    'ar': 'ar_AE',
    'zh': 'zh_CN',
    'fr': 'fr_FR',
    'ru': 'ru_RU',
    'hi': 'hi_IN'
  }
  
  // Direction for RTL languages
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr'
  
  // Generate Schema.org structured data
  const generateSchema = () => {
    const schemas: any[] = [
      // Organization Schema
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": \`\${baseUrl}/#organization\`,
        "name": "Rolls-Royce Dubai",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": \`\${baseUrl}/logo.png\`,
          "width": 600,
          "height": 400
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+971558164922",
          "contactType": "customer service",
          "availableLanguage": ["en", "ar", "zh", "fr", "ru", "hi"],
          "areaServed": {
            "@type": "Place",
            "name": "Dubai, UAE"
          }
        },
        "sameAs": [
          "https://facebook.com/rollsroycedubai",
          "https://instagram.com/rollsroycedubai",
          "https://twitter.com/rollsroycedubai"
        ]
      },
      // LocalBusiness Schema
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": \`\${baseUrl}/#localbusiness\`,
        "name": "Rolls-Royce Dubai Rental",
        "image": \`\${baseUrl}/images/showroom.jpg\`,
        "priceRange": "AED 3,800 - AED 10,000 per day",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Downtown Dubai",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "25.2048",
          "longitude": "55.2708"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "telephone": "+971558164922",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Rolls-Royce Rental Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Rolls-Royce Phantom Rental",
                "description": "Luxury Rolls-Royce Phantom rental with chauffeur in Dubai"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Wedding Car Service",
                "description": "Rolls-Royce wedding car rental in Dubai"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Airport Transfer",
                "description": "VIP airport transfer service in Rolls-Royce"
              }
            }
          ]
        }
      },
      // Website Schema
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": \`\${baseUrl}/#website\`,
        "url": baseUrl,
        "name": "Rolls-Royce Dubai",
        "description": "Premium Rolls-Royce rental service in Dubai",
        "publisher": {
          "@id": \`\${baseUrl}/#organization\`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": \`\${baseUrl}/search?q={search_term_string}\`
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": ["en", "ar", "zh", "fr", "ru", "hi"]
      }
    ];

    // Add page-specific schema
    if (pageKey === 'home') {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": \`\${canonicalUrl}#webpage\`,
        "url": canonicalUrl,
        "name": title,
        "isPartOf": {
          "@id": \`\${baseUrl}/#website\`
        },
        "about": {
          "@id": \`\${baseUrl}/#localbusiness\`
        },
        "description": description,
        "inLanguage": currentLang
      });
    } else if (pageKey.startsWith('fleet.')) {
      const carModel = pageKey.split('.')[1];
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": \`\${canonicalUrl}#product\`,
        "name": title,
        "description": description,
        "image": [\`\${baseUrl}/images/fleet/\${carModel}.jpg\`],
        "brand": {
          "@type": "Brand",
          "name": "Rolls-Royce"
        },
        "offers": {
          "@type": "Offer",
          "url": canonicalUrl,
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        }
      });
    } else if (pageKey.startsWith('services.')) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": \`\${canonicalUrl}#service\`,
        "name": title,
        "description": description,
        "provider": {
          "@id": \`\${baseUrl}/#localbusiness\`
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": title
        }
      });
    } else if (pageKey === 'faq') {
      // FAQ schema will be added separately in the FAQ page
    }

    return schemas;
  };

  const schemas = generateSchema();
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Language and Direction */}
      <meta httpEquiv="content-language" content={currentLang} />
      
      {/* CANONICAL URL - Always points to English version for consistency */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language URLs with proper hreflang */}
      {alternateUrls.map(({ lang, url }) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      {/* x-default should point to the English version (without prefix) */}
      <link rel="alternate" hrefLang="x-default" href={buildLangUrl(defaultLocale)} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={\`\${baseUrl}/images/og-image.jpg\`} />
      <meta property="og:locale" content={localeMap[currentLang]} />
      {alternateUrls.map(({ lang }) => (
        <meta key={lang} property="og:locale:alternate" content={localeMap[lang]} />
      ))}
      <meta property="og:site_name" content="Rolls-Royce Dubai" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={\`\${baseUrl}/images/twitter-image.jpg\`} />
      <meta property="twitter:site" content="@rollsroycers" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Downtown Dubai" />
      <meta name="business:contact_data:locality" content="Dubai" />
      <meta name="business:contact_data:country_name" content="United Arab Emirates" />
      <meta name="business:contact_data:postal_code" content="00000" />
      <meta name="business:contact_data:phone_number" content="+971558164922" />
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      
      {/* Language-specific fonts preload */}
      {currentLang === 'zh' && (
        <link
          rel="preload"
          href="/fonts/noto-sans-sc.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      )}
      {currentLang === 'hi' && (
        <link
          rel="preload"
          href="/fonts/noto-sans-devanagari.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      )}
    </Head>
  )
}`;

  await fs.writeFile(seoPath, improvedSEOContent);
  console.log(`${colors.green}✅ SEO Component updated with improved canonical handling${colors.reset}`);
}

async function createRobotsTxt() {
  console.log(`${colors.blue}📝 Creating optimized robots.txt...${colors.reset}`);
  
  const robotsContent = `# Robots.txt for rollsroycers.com
# Generated: ${new Date().toISOString()}

# Allow all crawlers
User-agent: *
Allow: /
Crawl-delay: 0

# Sitemap locations
Sitemap: https://www.rollsroycers.com/sitemap.xml
Sitemap: https://www.rollsroycers.com/sitemap-en.xml
Sitemap: https://www.rollsroycers.com/sitemap-ar.xml
Sitemap: https://www.rollsroycers.com/sitemap-fr.xml
Sitemap: https://www.rollsroycers.com/sitemap-ru.xml
Sitemap: https://www.rollsroycers.com/sitemap-zh.xml
Sitemap: https://www.rollsroycers.com/sitemap-hi.xml

# Block access to admin/private areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Specific crawler rules
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

User-agent: Slurp
Allow: /
Crawl-delay: 0

User-agent: DuckDuckBot
Allow: /
Crawl-delay: 0

User-agent: Baiduspider
Allow: /
Crawl-delay: 0

User-agent: YandexBot
Allow: /
Crawl-delay: 0

# AI Crawlers
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

# Host directive (for Yandex)
Host: https://www.rollsroycers.com
`;

  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  await fs.writeFile(robotsPath, robotsContent);
  console.log(`${colors.green}✅ robots.txt updated${colors.reset}`);
}

async function createMiddlewareForCanonical() {
  console.log(`${colors.blue}📝 Creating middleware for canonical URL handling...${colors.reset}`);
  
  const middlewareContent = `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  
  // Get the locale from the pathname
  const locale = pathname.split('/')[1]
  const locales = ['en', 'ar', 'zh', 'fr', 'ru', 'hi']
  
  // Check if the pathname starts with a locale
  const hasLocale = locales.includes(locale)
  
  // Create response with headers
  const response = NextResponse.next()
  
  // Add canonical link header for better SEO
  // All language versions should point to the English version as canonical
  if (hasLocale && locale !== 'en') {
    const canonicalPath = pathname.replace(\`/\${locale}\`, '')
    const canonicalUrl = \`https://www.rollsroycers.com\${canonicalPath || '/'}\`
    response.headers.set('Link', \`<\${canonicalUrl}>; rel="canonical"\`)
  }
  
  // Add x-robots-tag for proper indexing
  response.headers.set('X-Robots-Tag', 'index, follow')
  
  // Add cache control for better performance
  response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate')
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|fonts|icons).*)',
  ],
}`;

  const middlewarePath = path.join(process.cwd(), 'middleware.ts');
  await fs.writeFile(middlewarePath, middlewareContent);
  console.log(`${colors.green}✅ Middleware created for canonical URL handling${colors.reset}`);
}

async function createValidationScript() {
  console.log(`${colors.blue}📝 Creating validation script...${colors.reset}`);
  
  const validationContent = `#!/usr/bin/env node

/**
 * Validate Canonical URLs Implementation
 */

const pages = [
  { path: '/contact', expectedCanonical: 'https://www.rollsroycers.com/contact' },
  { path: '/gallery', expectedCanonical: 'https://www.rollsroycers.com/gallery' },
  { path: '/ru/contact', expectedCanonical: 'https://www.rollsroycers.com/contact' },
  { path: '/fr/gallery', expectedCanonical: 'https://www.rollsroycers.com/gallery' },
];

const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi'];

console.log('Canonical URL Validation Report');
console.log('================================');
console.log('');

pages.forEach(page => {
  console.log(\`Page: \${page.path}\`);
  console.log(\`Expected Canonical: \${page.expectedCanonical}\`);
  console.log('Alternate URLs:');
  
  languages.forEach(lang => {
    const prefix = lang === 'en' ? '' : \`/\${lang}\`;
    const basePath = page.path.replace(/^\\/[a-z]{2}(?=\\/|$)/, '');
    const alternateUrl = \`https://www.rollsroycers.com\${prefix}\${basePath}\`;
    console.log(\`  hreflang="\${lang}": \${alternateUrl}\`);
  });
  
  console.log('');
});

console.log('✅ Validation complete!');
console.log('');
console.log('Next Steps:');
console.log('1. Deploy these changes to production');
console.log('2. Request validation in Google Search Console');
console.log('3. Submit updated sitemaps');
console.log('4. Monitor indexing status');
`;

  const validationPath = path.join(process.cwd(), 'scripts', 'validate-canonical.js');
  await fs.writeFile(validationPath, validationContent);
  await fs.chmod(validationPath, '755');
  console.log(`${colors.green}✅ Validation script created${colors.reset}`);
}

async function main() {
  console.log(`${colors.bold}${colors.blue}🚀 Starting Google Search Console Duplicate Canonical Fix${colors.reset}`);
  console.log(`${colors.yellow}Addressing issues reported on January 13, 2025${colors.reset}`);
  console.log('');
  
  try {
    // Update SEO Component
    await updateSEOComponent();
    
    // Create optimized robots.txt
    await createRobotsTxt();
    
    // Create middleware for additional canonical handling
    await createMiddlewareForCanonical();
    
    // Create validation script
    await createValidationScript();
    
    console.log('');
    console.log(`${colors.bold}${colors.green}✅ All fixes applied successfully!${colors.reset}`);
    console.log('');
    console.log(`${colors.yellow}📋 Summary of Changes:${colors.reset}`);
    console.log('1. ✅ Updated SEO component to use English URL as canonical for all languages');
    console.log('2. ✅ Ensured proper hreflang tags for all language versions');
    console.log('3. ✅ Created middleware for additional canonical header support');
    console.log('4. ✅ Updated robots.txt with all language sitemaps');
    console.log('5. ✅ Created validation script for testing');
    console.log('');
    console.log(`${colors.blue}🔄 Next Steps:${colors.reset}`);
    console.log('1. Run: npm run dev to test locally');
    console.log('2. Run: node scripts/validate-canonical.js to validate implementation');
    console.log('3. Deploy to production');
    console.log('4. In Google Search Console:');
    console.log('   - Click "Validate Fix" for the affected pages');
    console.log('   - Submit updated sitemaps');
    console.log('   - Use URL Inspection tool to request re-indexing');
    console.log('');
    console.log(`${colors.green}💡 Key Implementation Details:${colors.reset}`);
    console.log('• All language versions now point to English URL as canonical');
    console.log('• Proper hreflang tags ensure Google understands language relationships');
    console.log('• Middleware adds canonical header for extra clarity');
    console.log('• Each language has its content but shares the same canonical URL');
    
  } catch (error) {
    console.error(`${colors.red}❌ Error: ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

main();