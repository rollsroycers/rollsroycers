import Head from 'next/head'
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
      fullKey = `pages.home.${key}`
    } else if (pageKey === 'blog.index') {
      fullKey = `pages.other.blog.${key}`
    } else if (pageKey.startsWith('fleet.')) {
      const fleetPath = pageKey.split('.').slice(1).join('.')
      fullKey = `pages.fleet.${fleetPath}.${key}`
    } else if (pageKey.startsWith('services.')) {
      fullKey = `pages.services.${pageKey.split('.')[1]}.${key}`
    } else if (pageKey.startsWith('locations.')) {
      fullKey = `pages.locations.${pageKey.split('.')[1]}.${key}`
    } else if (pageKey.startsWith('other.')) {
      fullKey = `pages.other.${pageKey.split('.')[1]}.${key}`
    } else if (pageKey.startsWith('compare.')) {
      fullKey = `pages.compare.${pageKey.split('.')[1]}.${key}`
    } else {
      fullKey = `pages.${pageKey}.${key}`
    }
    
    let translation = t(fullKey)
    
    // Replace dynamic parameters if provided
    if (dynamicParams) {
      Object.entries(dynamicParams).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value)
      })
    }
    
    return translation
  }
  
  // Get SEO content
  const title = titleProp || getTranslation('title')
  const description = descriptionProp || getTranslation('description')
  const keywords = getTranslation('keywords')
  
  // Generate canonical & alternate URLs (locale-aware)
  const baseUrl = 'https://rollsroycers.com'
  const locale = (router.locale as string) || 'en'
  const defaultLocale = (router.defaultLocale as string) || 'en'

  // Strip query/hash from asPath for safety
  const cleanPath = (router.asPath || '/').split('#')[0].split('?')[0]

  // Compute canonical path without forcing default locale prefix
  const canonicalPath = (() => {
    if (locale && locale !== defaultLocale) {
      // Ensure the path includes the locale prefix exactly once
      const pathWithoutLeadingLocale = cleanPath.replace(new RegExp(`^/${locale}(?=/|$)`), '')
      return `/${locale}${pathWithoutLeadingLocale === '/' ? '' : pathWithoutLeadingLocale}` || '/'
    }
    // Default locale: ensure we DO NOT prefix with /en
    return cleanPath.replace(/^\/en(?=\/|$)/, '') || '/'
  })()

  const canonicalUrl = `${baseUrl}${canonicalPath}`

  // Alternate language URLs. Default locale has no prefix
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi']
  const buildLangUrl = (lang: string) => {
    const pathWithoutAnyLocale = cleanPath
      .replace(/^\/en(?=\/|$)/, '')
      .replace(/^\/ar(?=\/|$)/, '')
      .replace(/^\/zh(?=\/|$)/, '')
      .replace(/^\/fr(?=\/|$)/, '')
      .replace(/^\/ru(?=\/|$)/, '')
      .replace(/^\/hi(?=\/|$)/, '') || '/'
    const prefix = lang === defaultLocale ? '' : `/${lang}`
    return `${baseUrl}${prefix}${pathWithoutAnyLocale === '/' ? '' : pathWithoutAnyLocale}` || `${baseUrl}/`
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
        "@id": `${baseUrl}/#organization`,
        "name": "Rolls-Royce Dubai",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/logo.png`,
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
        "@id": `${baseUrl}/#localbusiness`,
        "name": "Rolls-Royce Dubai Rental",
        "image": `${baseUrl}/images/showroom.jpg`,
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
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Rolls-Royce Dubai",
        "description": "Premium Rolls-Royce rental service in Dubai",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/search?q={search_term_string}`
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
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "isPartOf": {
          "@id": `${baseUrl}/#website`
        },
        "about": {
          "@id": `${baseUrl}/#localbusiness`
        },
        "description": description,
        "inLanguage": currentLang
      });
    } else if (pageKey.startsWith('fleet.')) {
      const carModel = pageKey.split('.')[1];
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": title,
        "description": description,
        "image": [`${baseUrl}/images/fleet/${carModel}.jpg`],
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
        "@id": `${canonicalUrl}#service`,
        "name": title,
        "description": description,
        "provider": {
          "@id": `${baseUrl}/#localbusiness`
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
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Alternate Language URLs */}
      {alternateUrls.map(({ lang, url }) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
      {/* x-default should point to the default-locale URL (without locale prefix) */}
      <link rel="alternate" hrefLang="x-default" href={buildLangUrl(defaultLocale)} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />
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
      <meta property="twitter:image" content={`${baseUrl}/images/twitter-image.jpg`} />
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
}