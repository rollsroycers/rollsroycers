const path = require('path')

module.exports = {
  defaultNS: 'common',
  i18n: {
    defaultLocale: 'en',
    // Remove 'en' from locales array to prevent /en prefix
    // English will be served at root URL without prefix
    locales: ['en', 'ar', 'ru', 'fr', 'zh', 'hi'],
    // Force default locale to not have prefix
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  // Add this to prevent /en prefix for default locale
  react: {
    useSuspense: false,
  },
}