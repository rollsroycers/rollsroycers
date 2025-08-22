import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Script from 'next/script'

interface EnhancedSEOProps {
  pageKey: string
  title?: string
  description?: string
  dynamicParams?: {
    [key: string]: string
  }
  additionalSchema?: any[]
  image?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    tags?: string[]
  }
}

export default function EnhancedSEO({ 
  pageKey, 
  title: titleProp, 
  description: descriptionProp, 
  dynamicParams,
  additionalSchema = [],
  image,
  article
}: EnhancedSEOProps) {
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
      fullKey = `pages.fleet.${pageKey.split('.')[1]}.${key}`
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
  
  // Get SEO content with AI optimization
  const title = titleProp || getTranslation('title')
  const description = descriptionProp || getTranslation('description')
  const keywords = getTranslation('keywords')
  const aiKeywords = t(`pages.${pageKey}.aiKeywords`, { defaultValue: '' })
  
  // Generate canonical & alternate URLs
  const baseUrl = 'https://rollsroycers.com'
  const locale = (router.locale as string) || 'en'
  const defaultLocale = (router.defaultLocale as string) || 'en'

  const cleanPath = (router.asPath || '/').split('#')[0].split('?')[0]

  const canonicalPath = (() => {
    if (locale && locale !== defaultLocale) {
      const pathWithoutLeadingLocale = cleanPath.replace(new RegExp(`^/${locale}(?=/|$)`), '')
      return `/${locale}${pathWithoutLeadingLocale === '/' ? '' : pathWithoutLeadingLocale}` || '/'
    }
    return cleanPath.replace(/^\/en(?=\/|$)/, '') || '/'
  })()

  const canonicalUrl = `${baseUrl}${canonicalPath}`

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
  
  // Generate comprehensive Schema.org structured data
  const generateSchema = () => {
    const schemas: any[] = []
    
    // 1. Organization Schema (Main Entity)
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "Rolls-Royce Dubai",
      "alternateName": ["رولز رويس دبي", "劳斯莱斯迪拜", "Роллс-Ройс Дубай"],
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo-512.png`,
        "width": 512,
        "height": 512
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971558164922",
          "contactType": "customer service",
          "areaServed": "AE",
          "availableLanguage": ["en", "ar", "zh", "fr", "ru", "hi"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+971558164922",
          "contactType": "reservations",
          "areaServed": "AE",
          "availableLanguage": ["en", "ar"]
        }
      ],
      "sameAs": [
        "https://facebook.com/rollsroycedubai",
        "https://instagram.com/rollsroycedubai",
        "https://twitter.com/rollsroycedubai",
        "https://linkedin.com/company/rollsroycedubai",
        "https://youtube.com/rollsroycedubai",
        "https://wa.me/971558164922"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sheikh Mohammed bin Rashid Blvd",
        "addressLocality": "Downtown Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      }
    }
    schemas.push(organizationSchema)
    
    // 2. Car Rental Business Schema
    const carRentalSchema = {
      "@context": "https://schema.org",
      "@type": "CarRental",
      "@id": `${baseUrl}/#carrentalbusiness`,
      "name": "Rolls-Royce Dubai - Premium Luxury Car Rental",
      "description": "Dubai's #1 Rolls-Royce rental service. Fleet includes Phantom, Ghost, Cullinan, Dawn, Wraith. Professional chauffeurs, 24/7 service, best prices guaranteed.",
      "url": baseUrl,
      "image": [
        `${baseUrl}/images/Rolls-royce-phantom.jpg`,
        `${baseUrl}/images/Black_Rolls_Royce_Ghost.jpg`,
        `${baseUrl}/images/2024_Rolls-Royce_Cullinan.jpg`
      ],
      "telephone": "+971558164922",
      "email": "info@rollsroycers.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sheikh Mohammed bin Rashid Blvd",
        "addressLocality": "Downtown Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "priceRange": "AED 3,800 - AED 10,000 per day",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
      "currenciesAccepted": "AED, USD, EUR, GBP, CNY, RUB",
      "availableLanguage": ["English", "Arabic", "Chinese", "French", "Russian", "Hindi"],
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai",
          "@id": "https://www.wikidata.org/wiki/Q612"
        },
        {
          "@type": "City",
          "name": "Abu Dhabi"
        },
        {
          "@type": "City",
          "name": "Sharjah"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1247",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
    schemas.push(carRentalSchema)
    
    // 3. Vehicle Offers Schema
    const vehicleOffers = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${baseUrl}/#vehicleoffers`,
      "name": "Rolls-Royce Fleet Dubai",
      "description": "Premium Rolls-Royce vehicles available for rent in Dubai",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "Car",
          "name": "Rolls-Royce Phantom Extended Wheelbase",
          "brand": {
            "@type": "Brand",
            "name": "Rolls-Royce"
          },
          "model": "Phantom EWB",
          "vehicleModelDate": "2025",
          "vehicleConfiguration": "Luxury Sedan",
          "numberOfDoors": "4",
          "vehicleSeatingCapacity": "5",
          "fuelType": "Petrol",
          "offers": {
            "@type": "Offer",
            "price": "5800",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/fleet/phantom`,
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          }
        },
        {
          "@type": "Car",
          "name": "Rolls-Royce Ghost Series II",
          "brand": {
            "@type": "Brand",
            "name": "Rolls-Royce"
          },
          "model": "Ghost",
          "vehicleModelDate": "2025",
          "vehicleConfiguration": "Luxury Sedan",
          "numberOfDoors": "4",
          "vehicleSeatingCapacity": "5",
          "fuelType": "Petrol",
          "offers": {
            "@type": "Offer",
            "price": "3800",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/fleet/ghost`,
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          }
        },
        {
          "@type": "Car",
          "name": "Rolls-Royce Cullinan",
          "brand": {
            "@type": "Brand",
            "name": "Rolls-Royce"
          },
          "model": "Cullinan",
          "vehicleModelDate": "2025",
          "vehicleConfiguration": "Luxury SUV",
          "numberOfDoors": "4",
          "vehicleSeatingCapacity": "7",
          "fuelType": "Petrol",
          "offers": {
            "@type": "Offer",
            "price": "6500",
            "priceCurrency": "AED",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/fleet/cullinan`,
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
          }
        }
      ]
    }
    schemas.push(vehicleOffers)
    
    // 4. Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Rolls-Royce Dubai",
      "description": "Premium Rolls-Royce rental service in Dubai",
      "publisher": {
        "@id": `${baseUrl}/#organization`
      },
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/search?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        },
        {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${baseUrl}/booking`,
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "object": {
            "@type": "Car",
            "name": "Rolls-Royce"
          }
        }
      ],
      "inLanguage": ["en", "ar", "zh", "fr", "ru", "hi"]
    }
    schemas.push(websiteSchema)
    
    // 5. BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": getBreadcrumbItems()
    }
    schemas.push(breadcrumbSchema)
    
    // 6. Page-specific schemas
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
          "@id": `${baseUrl}/#carrentalbusiness`
        },
        "description": description,
        "inLanguage": currentLang,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `${baseUrl}/images/Rolls-royce-phantom.jpg`
        }
      })
    } else if (pageKey.startsWith('fleet.')) {
      const carModel = pageKey.split('.')[1]
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${canonicalUrl}#product`,
        "name": title,
        "description": description,
        "image": [`${baseUrl}/images/${carModel}.jpg`],
        "brand": {
          "@type": "Brand",
          "name": "Rolls-Royce"
        },
        "offers": {
          "@type": "Offer",
          "url": canonicalUrl,
          "priceCurrency": "AED",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "seller": {
            "@id": `${baseUrl}/#carrentalbusiness`
          }
        }
      })
    } else if (pageKey === 'faq') {
      // FAQ schema handled separately
    } else if (article) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        "headline": title,
        "description": description,
        "image": image || `${baseUrl}/images/blog-hero.jpg`,
        "datePublished": article.publishedTime,
        "dateModified": article.modifiedTime || article.publishedTime,
        "author": {
          "@type": "Person",
          "name": article.author || "Rolls-Royce Dubai Team"
        },
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "keywords": article.tags?.join(', ') || keywords,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      })
    }
    
    // Add any additional schemas passed as props
    schemas.push(...additionalSchema)
    
    return schemas
  }
  
  // Helper function to generate breadcrumb items
  const getBreadcrumbItems = () => {
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": currentLang === 'ar' ? "الرئيسية" : "Home",
        "item": baseUrl
      }
    ]
    
    if (pageKey.startsWith('fleet.')) {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": currentLang === 'ar' ? "الأسطول" : "Fleet",
        "item": `${baseUrl}/fleet`
      })
      const model = pageKey.split('.')[1]
      items.push({
        "@type": "ListItem",
        "position": 3,
        "name": model.charAt(0).toUpperCase() + model.slice(1),
        "item": canonicalUrl
      })
    } else if (pageKey.startsWith('services.')) {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": currentLang === 'ar' ? "الخدمات" : "Services",
        "item": `${baseUrl}/services`
      })
      const service = pageKey.split('.')[1]
      items.push({
        "@type": "ListItem",
        "position": 3,
        "name": service.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        "item": canonicalUrl
      })
    } else if (pageKey.startsWith('locations.')) {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": currentLang === 'ar' ? "المواقع" : "Locations",
        "item": `${baseUrl}/locations`
      })
      const location = pageKey.split('.')[1]
      items.push({
        "@type": "ListItem",
        "position": 3,
        "name": location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        "item": canonicalUrl
      })
    } else if (pageKey !== 'home') {
      items.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageKey.charAt(0).toUpperCase() + pageKey.slice(1),
        "item": canonicalUrl
      })
    }
    
    return items
  }
  
  const schemas = generateSchema()
  const ogImage = image || `${baseUrl}/images/og-image.jpg`
  
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={`${keywords}${aiKeywords ? `, ${aiKeywords}` : ''}`} />
        
        {/* Language and Direction */}
        <meta httpEquiv="content-language" content={currentLang} />
        <meta name="language" content={currentLang} />
        
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
        <link rel="alternate" hrefLang="x-default" href={buildLangUrl(defaultLocale)} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={article ? "article" : "website"} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
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
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:site" content="@rollsroycedubai" />
        <meta property="twitter:creator" content="@rollsroycedubai" />
        
        {/* Article specific meta tags */}
        {article && (
          <>
            <meta property="article:published_time" content={article.publishedTime} />
            {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
            {article.author && <meta property="article:author" content={article.author} />}
            {article.tags?.map(tag => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
          </>
        )}
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        
        {/* Business Information */}
        <meta name="business:contact_data:street_address" content="Sheikh Mohammed bin Rashid Blvd, Downtown Dubai" />
        <meta name="business:contact_data:locality" content="Dubai" />
        <meta name="business:contact_data:country_name" content="United Arab Emirates" />
        <meta name="business:contact_data:postal_code" content="00000" />
        <meta name="business:contact_data:phone_number" content="+971558164922" />
        <meta name="business:contact_data:website" content={baseUrl} />
        <meta name="business:contact_data:email" content="info@rollsroycers.com" />
        
        {/* Verification Tags */}
        <meta name="p:domain_verify" content="rollsroycers.com" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Language-specific fonts preload */}
        {currentLang === 'ar' && (
          <link
            rel="preload"
            href="/fonts/noto-sans-arabic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        )}
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
      
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `
        }}
      />
    </>
  )
}