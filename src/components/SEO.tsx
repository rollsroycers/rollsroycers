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
  
  // Get SEO content
  const title = titleProp || getTranslation('title')
  const description = descriptionProp || getTranslation('description')
  const keywords = getTranslation('keywords')
  
  // Generate canonical URL
  const baseUrl = 'https://rollsroycers.com'
  const canonicalUrl = `${baseUrl}${router.asPath}`
  
  // Generate alternate language URLs
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi']
  const alternateUrls = languages.map(lang => ({
    lang,
    url: `${baseUrl}/${lang}${router.pathname}`
  }))
  
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
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en${router.pathname}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />
      <meta property="og:locale" content={localeMap[currentLang]} />
      {alternateUrls.map(({ lang, url }) => (
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
      
      {/* Rich Snippets / Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${baseUrl}/#organization`,
            "name": "Rolls-Royce Dubai",
            "description": description,
            "url": baseUrl,
            "image": [
              `${baseUrl}/images/logo.jpg`,
              `${baseUrl}/images/Rolls-royce-official.jpg`,
              `${baseUrl}/images/Rolls-royce-dubai.jpg`
            ],
            "telephone": "+971558164922",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sheikh Zayed Road",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.2048,
              "longitude": 55.2708
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "priceRange": "$$$$",
            "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
            "currenciesAccepted": "AED",
            "areaServed": {
              "@type": "City",
              "name": "Dubai"
            },
            "serviceType": "Luxury Car Rental",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "1247",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
    </Head>
  )
}