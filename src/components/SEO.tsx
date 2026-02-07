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

  // IMPORTANT: Get the base path without any locale prefix
  const getBasePathWithoutLocale = (path: string): string => {
    // Remove all possible locale prefixes
    const pathWithoutLocale = path
      .replace(/^\/en(?=\/|$)/, '')
      .replace(/^\/ar(?=\/|$)/, '')
      .replace(/^\/zh(?=\/|$)/, '')
      .replace(/^\/fr(?=\/|$)/, '')
      .replace(/^\/ru(?=\/|$)/, '')
      .replace(/^\/hi(?=\/|$)/, '')
    
    return pathWithoutLocale || '/'
  }

  const basePathWithoutLocale = getBasePathWithoutLocale(cleanPath)

  // CANONICAL URL: Self-referencing - each page points to itself
  // This follows Google's best practices for multilingual websites
  const canonicalUrl = (() => {
    if (locale === defaultLocale) {
      // English version has no locale prefix
      return `${baseUrl}${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}`
    } else {
      // Other language versions include locale prefix
      return `${baseUrl}/${locale}${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}`
    }
  })()

  // Alternate language URLs - English has no prefix, other languages have prefix
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi']
  const buildLangUrl = (lang: string) => {
    // Only non-English languages get locale prefix
    const prefix = lang === defaultLocale ? '' : `/${lang}`
    return `${baseUrl}${prefix}${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}`
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
      // SiteNavigationElement Schema
      {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "name": "Main Navigation",
        "url": baseUrl,
        "hasPart": [
          { "@type": "WebPage", "name": "Fleet", "url": `${baseUrl}/fleet` },
          { "@type": "WebPage", "name": "Services", "url": `${baseUrl}/services` },
          { "@type": "WebPage", "name": "Locations", "url": `${baseUrl}/locations` },
          { "@type": "WebPage", "name": "Pricing", "url": `${baseUrl}/pricing` },
          { "@type": "WebPage", "name": "About", "url": `${baseUrl}/about` },
          { "@type": "WebPage", "name": "Contact", "url": `${baseUrl}/contact` },
          { "@type": "WebPage", "name": "Blog", "url": `${baseUrl}/blog` },
          { "@type": "WebPage", "name": "FAQ", "url": `${baseUrl}/faq` }
        ]
      },
      // Organization Schema
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "Rolls-Royce Dubai",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/logo-512.png`,
          "width": 512,
          "height": 512
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
          "https://www.facebook.com/rollsroycersdubai",
          "https://www.instagram.com/rollsroycersdubai",
          "https://twitter.com/rollsroycersdxb",
          "https://www.linkedin.com/company/rollsroycersdubai",
          "https://www.youtube.com/rollsroycersdubai"
        ]
      },
      // LocalBusiness Schema
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": "Rolls-Royce Dubai Rental",
        "image": `${baseUrl}/images/Rolls-royce-official.jpg`,
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
      const carImageMap: Record<string, string[]> = {
        'phantom': [`${baseUrl}/images/Phantom_Extended.jpg`, `${baseUrl}/images/Rolls-Royce_Phantom_Extended_Series_II.jpg`],
        'ghost': [`${baseUrl}/images/Rolls-Royce_Ghost_Black_Badge.jpg`, `${baseUrl}/images/Black_Rolls_Royce_Ghost.jpg`],
        'cullinan': [`${baseUrl}/images/2024_Rolls-Royce_Cullinan.jpg`, `${baseUrl}/images/Rolls-Royce_Cullinan_Majestic_Aurora_.jpg`],
        'dawn': [`${baseUrl}/images/Rolls-Royce_Dawn_Convertible-2.jpg`, `${baseUrl}/images/Rolls-Royce_Dawn.jpg`],
        'wraith': [`${baseUrl}/images/Rolls-Royce-front.jpg`, `${baseUrl}/images/Rolls-Royce-black.jpg`],
        'spectre': [`${baseUrl}/images/2024_Rolls-Royce_Spectre.jpg`],
        'cullinan-black-badge': [`${baseUrl}/images/2024_Rolls-Royce_Cullinan_Black_Badge.jpg`],
        'ghost-black-badge': [`${baseUrl}/images/2025_Rolls-Royce_Ghost_Black_Badge_Idealist.jpg`],
      };
      const carPriceMap: Record<string, number> = {
        'phantom': 5800, 'ghost': 3800, 'cullinan': 6500, 'dawn': 5500,
        'wraith': 5000, 'spectre': 7500, 'cullinan-black-badge': 7000, 'ghost-black-badge': 4500,
      };
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": title,
        "description": description,
        "image": carImageMap[carModel] || [`${baseUrl}/images/Rolls-royce-official.jpg`],
        "brand": {
          "@type": "Brand",
          "name": "Rolls-Royce"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "25",
          "bestRating": "5"
        },
        "offers": {
          "@type": "Offer",
          "url": canonicalUrl,
          "priceCurrency": "AED",
          "price": carPriceMap[carModel] || 3800,
          "availability": "https://schema.org/InStock",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        }
      });
    } else if (pageKey.startsWith('services.')) {
      const serviceTypeMap: Record<string, string> = {
        'services.wedding': 'Wedding Car Rental',
        'services.corporate': 'Corporate Transportation',
        'services.airport': 'Airport Transfer',
        'services.chauffeur': 'Chauffeur Service',
        'services.events': 'Event Transportation',
        'services.photoshoot': 'Photoshoot Car Rental',
        'services.tours': 'City Tour Service',
        'services.birthday': 'Birthday Car Rental',
        'services.hourly': 'Hourly Car Rental',
        'services.main': 'Luxury Car Rental Services'
      };
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": title,
        "description": description,
        "serviceType": serviceTypeMap[pageKey] || "Luxury Car Rental",
        "provider": {
          "@id": `${baseUrl}/#localbusiness`
        },
        "areaServed": {
          "@type": "City",
          "name": "Dubai"
        },
        "serviceOutput": {
          "@type": "Product",
          "name": "Luxury Rolls-Royce Vehicle with Professional Chauffeur"
        },
        "termsOfService": `${baseUrl}/terms`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1200",
          "bestRating": "5"
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
      <meta property="og:type" content={pageKey.startsWith('fleet.') ? 'product' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/images/Rolls-royce-official.jpg`} />
      <meta property="og:locale" content={localeMap[currentLang]} />
      {alternateUrls.map(({ lang }) => (
        <meta key={lang} property="og:locale:alternate" content={localeMap[lang]} />
      ))}
      <meta property="og:site_name" content="Rolls-Royce Dubai" />
      {pageKey.startsWith('fleet.') && (
        <>
          <meta property="product:price:amount" content={String(({
            'phantom': 5800, 'ghost': 3800, 'cullinan': 6500, 'dawn': 5500,
            'wraith': 5000, 'spectre': 7500, 'cullinan-black-badge': 7000, 'ghost-black-badge': 4500,
          } as Record<string, number>)[pageKey.split('.')[1]] || 3800)} />
          <meta property="product:price:currency" content="AED" />
          <meta property="product:availability" content="in stock" />
          <meta property="product:brand" content="Rolls-Royce" />
        </>
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/images/Rolls-royce-official.jpg`} />
      <meta property="twitter:site" content="@rollsroycersdxb" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="mobile-web-app-capable" content="yes" />
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