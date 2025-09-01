import Head from 'next/head'
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
      .replace(/^\/en(?=\/|$)/, '')
      .replace(/^\/ar(?=\/|$)/, '')
      .replace(/^\/zh(?=\/|$)/, '')
      .replace(/^\/fr(?=\/|$)/, '')
      .replace(/^\/ru(?=\/|$)/, '')
      .replace(/^\/hi(?=\/|$)/, '')
    
    return pathWithoutLocale || '/'
  }
  
  const basePathWithoutLocale = getBasePathWithoutLocale(cleanPath)
  
  // IMPORTANT: Self-referencing canonical لكل لغة
  // كل صفحة تشير إلى نفسها كـ canonical
  const getCanonicalUrl = () => {
    if (locale === defaultLocale) {
      // النسخة الإنجليزية بدون prefix
      return `${baseUrl}${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}`
    } else {
      // اللغات الأخرى مع prefix
      return `${baseUrl}/${locale}${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}`
    }
  }
  
  const canonicalUrl = getCanonicalUrl()
  
  // بناء alternate URLs للغات المختلفة
  const buildLangUrl = (lang: string) => {
    const prefix = lang === defaultLocale ? '' : `/${lang}`
    return `${baseUrl}${prefix}${basePathWithoutLocale === '/' ? '' : basePathWithoutLocale}`
  }
  
  const alternateUrls = canonicalConfig.locales.map(lang => ({ 
    lang, 
    url: buildLangUrl(lang) 
  }))
  
  // الحصول على الترجمات
  const getTranslation = (key: string) => {
    let fullKey = ''
    
    if (pageKey === 'home') {
      fullKey = `pages.home.${key}`
    } else if (pageKey.startsWith('fleet.')) {
      const fleetPath = pageKey.split('.').slice(1).join('.')
      fullKey = `pages.fleet.${fleetPath}.${key}`
    } else if (pageKey.startsWith('services.')) {
      fullKey = `pages.services.${pageKey.split('.')[1]}.${key}`
    } else if (pageKey.startsWith('locations.')) {
      fullKey = `pages.locations.${pageKey.split('.')[1]}.${key}`
    } else if (pageKey.startsWith('compare.')) {
      fullKey = `pages.compare.${pageKey.split('.')[1]}.${key}`
    } else {
      fullKey = `pages.${pageKey}.${key}`
    }
    
    let translation = t(fullKey)
    
    if (dynamicParams) {
      Object.entries(dynamicParams).forEach(([param, value]) => {
        translation = translation.replace(`{{${param}}}`, value)
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
      <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />
      <meta property="og:site_name" content="Rolls-Royce Dubai" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/images/twitter-image.jpg`} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Geo Tags for Dubai */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
    </Head>
  )
}