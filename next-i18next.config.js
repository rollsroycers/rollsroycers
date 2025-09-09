const path = require('path')

const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru', 'fr', 'zh', 'hi'],
    localeDetection: false,
  },
  defaultNS: 'common',
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
}

module.exports = config
