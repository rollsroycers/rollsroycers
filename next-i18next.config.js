const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'ru'],
    localeDetection: false,
  },
  defaultNS: 'common',
  fallbackNS: ["common","seo_home","seo_fleet","seo_services","seo_locations","seo_compare","seo_other","sp_corporate","sp_wedding","sp_airportTransfer","sp_chauffeur","sp_events","sp_photoshoot","sp_tours","servicespages","fc_phantom","fc_ghost","fc_cullinan","fc_dawn","fc_wraith","fc_spectre","fc_shared","fleetcards","lc_downtown","lc_dubaiMarina","lc_jbr","lc_businessBay","lc_difc","lc_palmJumeirah","lc_shared","comparefleet","comparemain","weatherrec","page_about","page_blog","page_faq","page_pricing","page_terms","page_privacy","page_booking","page_gallery","page_testimonials","virtualtour","sb_fleet-cullinan","sb_fleet-dawn","sb_fleet-ghost","sb_fleet-phantom","sb_fleet-wraith","sb_home","sb_luxury-car-rental-dubai","sb_pricing","sb_services-airport-transfer","sb_services-hourly","sb_services-wedding"],
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: {
    useSuspense: false,
  },
}

module.exports = config
