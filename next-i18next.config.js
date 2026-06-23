const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru'],
    localeDetection: false,
  },
  defaultNS: 'common',
  fallbackNS: ['common','seoblocks','fleetcontent','loccontent','comparecontent','servicespages','page_about','page_blog','page_faq','page_pricing','page_terms','page_privacy','page_booking','page_gallery','page_testimonials'],
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
}

module.exports = config
