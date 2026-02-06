import { serverSideTranslations as _serverSideTranslations } from 'next-i18next/serverSideTranslations'

const i18nConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru', 'fr', 'zh', 'hi'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: './public/locales',
  reloadOnPrerender: false,
  react: { useSuspense: false },
}

export const serverSideTranslations = async (
  locale: string,
  namespaces?: string[]
) => {
  try {
    return await _serverSideTranslations(locale, namespaces, i18nConfig as any)
  } catch {
    // Fallback for Cloudflare Workers where filesystem isn't available at runtime
    return {
      _nextI18Next: {
        initialI18nStore: {},
        initialLocale: locale,
        ns: namespaces || ['common'],
        userConfig: i18nConfig,
      },
    }
  }
}
