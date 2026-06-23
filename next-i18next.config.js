const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru'],
    localeDetection: false,
  },
  defaultNS: 'common',
  fallbackNS: ["common","fleetcontent","loccontent","comparecontent","servicespages","page_about","page_blog","page_faq","page_pricing","page_terms","page_privacy","page_booking","page_gallery","page_testimonials","sb_fleet-cullinan","sb_fleet-dawn","sb_fleet-ghost","sb_fleet-phantom","sb_fleet-wraith","sb_home","sb_luxury-car-rental-dubai","sb_pricing","sb_services-airport-transfer","sb_services-hourly","sb_services-wedding"],
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
}

module.exports = config
