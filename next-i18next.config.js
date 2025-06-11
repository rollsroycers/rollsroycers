module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru', 'fr', 'zh', 'hi'],
  },
  localePath: './public/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}