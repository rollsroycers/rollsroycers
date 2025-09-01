import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface EnhancedSEOProps {
  pageKey: string
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: 'website' | 'article' | 'product'
  publishDate?: string
  updateDate?: string
  author?: string
  dynamicParams?: {
    [key: string]: string
  }
}

export default function EnhancedSEO({ 
  pageKey, 
  title: titleProp, 
  description: descriptionProp,
  keywords: keywordsProp,
  image,
  type = 'website',
  publishDate,
  updateDate,
  author = 'Rolls Roycers Dubai',
  dynamicParams 
}: EnhancedSEOProps) {
  const router = useRouter()
  const { t, i18n } = useTranslation('seo')
  
  const currentLang = i18n.language || 'en'
  const baseUrl = 'https://rollsroycers.com'
  const locale = router.locale || 'en'
  const defaultLocale = router.defaultLocale || 'en'
  
  // Clean path for canonical URL
  const cleanPath = (router.asPath || '/').split('#')[0].split('?')[0]
  
  // Generate proper canonical URL (no /en/ prefix for English)
  const canonicalPath = (() => {
    // Remove any locale prefix
    const pathWithoutLocale = cleanPath
      .replace(/^\/en(?=\/|$)/, '')
      .replace(/^\/ar(?=\/|$)/, '')
      .replace(/^\/zh(?=\/|$)/, '')
      .replace(/^\/fr(?=\/|$)/, '')
      .replace(/^\/ru(?=\/|$)/, '')
      .replace(/^\/hi(?=\/|$)/, '') || '/'
    
    // Add locale prefix only for non-English languages
    if (locale && locale !== defaultLocale) {
      return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    }
    // English gets no prefix
    return pathWithoutLocale
  })()
  
  const canonicalUrl = `${baseUrl}${canonicalPath}`
  
  // Get translations
  const getTranslation = (key: string) => {
    let fullKey = ''
    
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
    
    // Replace dynamic parameters
    if (dynamicParams) {
      Object.entries(dynamicParams).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value)
      })
    }
    
    return translation
  }
  
  const title = titleProp || getTranslation('title')
  const description = descriptionProp || getTranslation('description')
  const keywords = keywordsProp || getTranslation('keywords')
  
  // Default image if not provided
  const ogImage = image || 'https://rollsroycers.com/images/Rolls-Royce-black.jpg'
  
  // Generate alternate URLs for all languages
  const languages = ['en', 'ar', 'zh', 'fr', 'ru', 'hi']
  const alternateUrls = languages.map(lang => {
    const pathWithoutLocale = cleanPath
      .replace(/^\/en(?=\/|$)/, '')
      .replace(/^\/ar(?=\/|$)/, '')
      .replace(/^\/zh(?=\/|$)/, '')
      .replace(/^\/fr(?=\/|$)/, '')
      .replace(/^\/ru(?=\/|$)/, '')
      .replace(/^\/hi(?=\/|$)/, '') || '/'
    
    if (lang === 'en') {
      return {
        lang,
        url: `${baseUrl}${pathWithoutLocale}`
      }
    }
    return {
      lang,
      url: `${baseUrl}/${lang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    }
  })
  
  // Structured Data for Rich Snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'WebPage',
    "url": canonicalUrl,
    "name": title,
    "description": description,
    "inLanguage": currentLang,
    "publisher": {
      "@type": "Organization",
      "name": "Rolls Roycers Dubai",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logo-512.png`
      }
    },
    ...(publishDate && { "datePublished": publishDate }),
    ...(updateDate && { "dateModified": updateDate }),
    ...(author && type === 'article' && { 
      "author": {
        "@type": "Person",
        "name": author
      }
    }),
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": ogImage
      }
    })
  }
  
  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ]
  }
  
  // Add current page to breadcrumb if not home
  if (cleanPath !== '/' && cleanPath !== '') {
    const pathParts = cleanPath.split('/').filter(Boolean)
    pathParts.forEach((part, index) => {
      breadcrumbData.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
        "item": `${baseUrl}/${pathParts.slice(0, index + 1).join('/')}`
      })
    })
  }
  
  return (
    <Head>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language Alternates */}
      {alternateUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Rolls Roycers Dubai" />
      <meta property="og:locale" content={currentLang === 'ar' ? 'ar_AE' : currentLang === 'en' ? 'en_US' : currentLang} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@rollsroycersdxb" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishDate && (
        <>
          <meta property="article:published_time" content={publishDate} />
          {updateDate && <meta property="article:modified_time" content={updateDate} />}
          <meta property="article:author" content={author} />
        </>
      )}
      
      {/* Robots Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      {/* Additional SEO Tags */}
      <meta name="referrer" content="origin-when-cross-origin" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/logo-512.png" />
    </Head>
  )
}