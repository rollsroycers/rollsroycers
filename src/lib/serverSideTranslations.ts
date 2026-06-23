import { serverSideTranslations as _serverSideTranslations } from 'next-i18next/serverSideTranslations'
import path from 'path'

const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
}

// Bundled translations — webpack resolves require() at build time so these
// are embedded in the Cloudflare Worker bundle (no filesystem needed at runtime).
const bundled: Record<string, Record<string, any>> = {
  en: {
    common: require('../../public/locales/en/common.json'),
    seo: require('../../public/locales/en/seo.json'),
    navigation: require('../../public/locales/en/navigation.json'),
    services: require('../../public/locales/en/services.json'),
    fleet: require('../../public/locales/en/fleet.json'),
    locations: require('../../public/locales/en/locations.json'),
    compare: require('../../public/locales/en/compare.json'),
    footer: require('../../public/locales/en/footer.json'),
    pages: require('../../public/locales/en/pages.json'),
  },
  ar: {
    common: require('../../public/locales/ar/common.json'),
    seo: require('../../public/locales/ar/seo.json'),
    navigation: require('../../public/locales/ar/navigation.json'),
    services: require('../../public/locales/ar/services.json'),
    fleet: require('../../public/locales/ar/fleet.json'),
    locations: require('../../public/locales/ar/locations.json'),
    compare: require('../../public/locales/ar/compare.json'),
    footer: require('../../public/locales/ar/footer.json'),
    pages: require('../../public/locales/ar/pages.json'),
  },
  ru: {
    common: require('../../public/locales/ru/common.json'),
    seo: require('../../public/locales/ru/seo.json'),
    navigation: require('../../public/locales/ru/navigation.json'),
    services: require('../../public/locales/ru/services.json'),
    fleet: require('../../public/locales/ru/fleet.json'),
    locations: require('../../public/locales/ru/locations.json'),
    compare: require('../../public/locales/ru/compare.json'),
    footer: require('../../public/locales/ru/footer.json'),
    pages: require('../../public/locales/ru/pages.json'),
  },
}

export const serverSideTranslations = async (
  locale: string,
  namespaces?: string[]
) => {
  const ns = namespaces || ['common']
  const lang = locale || 'en'

  // In development, use filesystem via next-i18next for hot reload support
  if (process.env.NODE_ENV === 'development') {
    try {
      return await _serverSideTranslations(locale, ns, i18nConfig as any)
    } catch (error) {
      console.error('[i18n] Filesystem load failed in dev:', error)
    }
  }

  // In production (and as dev fallback), always use bundled translations.
  // This is required for Cloudflare Workers where fs.readFileSync is unavailable.
  // The require() calls above are resolved by webpack at build time, so the JSON
  // data is embedded directly in the JS bundle — no filesystem access needed.
  const localeResources = bundled[lang] || bundled['en']

  const store: Record<string, Record<string, any>> = {}

  store[lang] = {}
  for (const n of ns) {
    store[lang][n] = localeResources[n] || {}
  }

  // NOTE: we intentionally do NOT serialize the English fallback copy into
  // non-English pages. ar/ru have 100% key parity with en (verified by
  // scripts/i18n-verify.mjs), so the fallback was pure dead weight — it
  // doubled every ar/ru page's inlined i18n payload (~+40%) and was a primary
  // driver of the Cloudflare Worker "1102 exceeded resource limits" errors.

  return {
    _nextI18Next: {
      initialI18nStore: store,
      initialLocale: lang,
      ns,
      userConfig: i18nConfig,
    },
  }
}
