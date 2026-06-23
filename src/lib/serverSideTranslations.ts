import { serverSideTranslations as _serverSideTranslations } from "next-i18next/serverSideTranslations"
import path from "path"

const i18nConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar", "ru"],
    localeDetection: false,
  },
  defaultNS: "common",
  // fallbackNS lets a component bound to useTranslation("common") still resolve keys
  // that now live in page/section-scoped namespaces (split out of the old monolith
  // common.json) WITHOUT editing any component — as long as the page loads that ns.
  fallbackNS: ["common","page_about","fleetcontent","servicespages","comparecontent","loccontent","page_booking","page_blog","page_privacy","page_terms","page_gallery","page_testimonials","page_pricing","page_faq","seoblocks"],
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
  react: {
    useSuspense: false,
  },
}

// Bundled translations — webpack resolves require() at build time so these are
// embedded in the Cloudflare Worker bundle (no filesystem needed at runtime).
// common.json holds only global chrome; page/section content lives in scoped
// namespaces that each page loads on demand (see scripts/i18n-split.mjs).
const bundled: Record<string, Record<string, any>> = {
  en: {
    common: require("../../public/locales/en/common.json"),
    seo: require("../../public/locales/en/seo.json"),
    navigation: require("../../public/locales/en/navigation.json"),
    services: require("../../public/locales/en/services.json"),
    fleet: require("../../public/locales/en/fleet.json"),
    locations: require("../../public/locales/en/locations.json"),
    compare: require("../../public/locales/en/compare.json"),
    footer: require("../../public/locales/en/footer.json"),
    pages: require("../../public/locales/en/pages.json"),
    page_about: require("../../public/locales/en/pages/about.json"),
    fleetcontent: require("../../public/locales/en/fleet-content.json"),
    servicespages: require("../../public/locales/en/services-pages.json"),
    comparecontent: require("../../public/locales/en/compare-content.json"),
    loccontent: require("../../public/locales/en/locations-content.json"),
    page_booking: require("../../public/locales/en/pages/booking.json"),
    page_blog: require("../../public/locales/en/pages/blog.json"),
    page_privacy: require("../../public/locales/en/pages/privacy.json"),
    page_terms: require("../../public/locales/en/pages/terms.json"),
    page_gallery: require("../../public/locales/en/pages/gallery.json"),
    page_testimonials: require("../../public/locales/en/pages/testimonials.json"),
    page_pricing: require("../../public/locales/en/pages/pricing.json"),
    page_faq: require("../../public/locales/en/pages/faq.json"),
    seoblocks: require("../../public/locales/en/seoblocks.json"),
  },
  ar: {
    common: require("../../public/locales/ar/common.json"),
    seo: require("../../public/locales/ar/seo.json"),
    navigation: require("../../public/locales/ar/navigation.json"),
    services: require("../../public/locales/ar/services.json"),
    fleet: require("../../public/locales/ar/fleet.json"),
    locations: require("../../public/locales/ar/locations.json"),
    compare: require("../../public/locales/ar/compare.json"),
    footer: require("../../public/locales/ar/footer.json"),
    pages: require("../../public/locales/ar/pages.json"),
    page_about: require("../../public/locales/ar/pages/about.json"),
    fleetcontent: require("../../public/locales/ar/fleet-content.json"),
    servicespages: require("../../public/locales/ar/services-pages.json"),
    comparecontent: require("../../public/locales/ar/compare-content.json"),
    loccontent: require("../../public/locales/ar/locations-content.json"),
    page_booking: require("../../public/locales/ar/pages/booking.json"),
    page_blog: require("../../public/locales/ar/pages/blog.json"),
    page_privacy: require("../../public/locales/ar/pages/privacy.json"),
    page_terms: require("../../public/locales/ar/pages/terms.json"),
    page_gallery: require("../../public/locales/ar/pages/gallery.json"),
    page_testimonials: require("../../public/locales/ar/pages/testimonials.json"),
    page_pricing: require("../../public/locales/ar/pages/pricing.json"),
    page_faq: require("../../public/locales/ar/pages/faq.json"),
    seoblocks: require("../../public/locales/ar/seoblocks.json"),
  },
  ru: {
    common: require("../../public/locales/ru/common.json"),
    seo: require("../../public/locales/ru/seo.json"),
    navigation: require("../../public/locales/ru/navigation.json"),
    services: require("../../public/locales/ru/services.json"),
    fleet: require("../../public/locales/ru/fleet.json"),
    locations: require("../../public/locales/ru/locations.json"),
    compare: require("../../public/locales/ru/compare.json"),
    footer: require("../../public/locales/ru/footer.json"),
    pages: require("../../public/locales/ru/pages.json"),
    page_about: require("../../public/locales/ru/pages/about.json"),
    fleetcontent: require("../../public/locales/ru/fleet-content.json"),
    servicespages: require("../../public/locales/ru/services-pages.json"),
    comparecontent: require("../../public/locales/ru/compare-content.json"),
    loccontent: require("../../public/locales/ru/locations-content.json"),
    page_booking: require("../../public/locales/ru/pages/booking.json"),
    page_blog: require("../../public/locales/ru/pages/blog.json"),
    page_privacy: require("../../public/locales/ru/pages/privacy.json"),
    page_terms: require("../../public/locales/ru/pages/terms.json"),
    page_gallery: require("../../public/locales/ru/pages/gallery.json"),
    page_testimonials: require("../../public/locales/ru/pages/testimonials.json"),
    page_pricing: require("../../public/locales/ru/pages/pricing.json"),
    page_faq: require("../../public/locales/ru/pages/faq.json"),
    seoblocks: require("../../public/locales/ru/seoblocks.json"),
  },
}

export const serverSideTranslations = async (
  locale: string,
  namespaces?: string[]
) => {
  const ns = namespaces || ["common"]
  const lang = locale || "en"

  // In development, use filesystem via next-i18next for hot reload support
  if (process.env.NODE_ENV === "development") {
    try {
      return await _serverSideTranslations(locale, ns, i18nConfig as any)
    } catch (error) {
      console.error("[i18n] Filesystem load failed in dev:", error)
    }
  }

  // Production: bundled translations only (Cloudflare Workers has no fs).
  const localeResources = bundled[lang] || bundled["en"]
  const store: Record<string, Record<string, any>> = {}
  store[lang] = {}
  for (const n of ns) {
    store[lang][n] = localeResources[n] || {}
  }
  // No English-fallback duplication: ar/ru have 100% key parity (verified by
  // scripts/i18n-verify.mjs), so serializing an en copy was pure dead weight.

  return {
    _nextI18Next: {
      initialI18nStore: store,
      initialLocale: lang,
      ns,
      userConfig: i18nConfig,
    },
  }
}
