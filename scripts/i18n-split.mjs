#!/usr/bin/env node
// One-shot structural transform: decompose the monolithic common.json into small,
// page/section-scoped namespace files (subfolders), slimming the globally-loaded
// `common` to chrome + menu only. Key PATHS are preserved, so with i18next
// fallbackNS no t() reference needs editing — only which namespaces each page loads.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = '/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com'
const LOCALES = ['en', 'ar', 'ru']

// top-level common keys moved wholesale -> { newNamespace, relative file path, wrap-key }
// each new namespace file keeps the ORIGINAL key path (wrap) so references still resolve.
const MOVE = {
  seoBlocks:        { ns: 'seoblocks',     file: 'seoblocks.json' },
  fleetPage:        { ns: 'fleetcontent',  file: 'fleet-content.json' },
  phantomPage:      { ns: 'fleetcontent',  file: 'fleet-content.json' },
  deiraPage:        { ns: 'loccontent',    file: 'locations-content.json' },
  jumeirahPage:     { ns: 'loccontent',    file: 'locations-content.json' },
  compare:          { ns: 'comparecontent',file: 'compare-content.json' },
  compareFleet:     { ns: 'comparecontent',file: 'compare-content.json' },
  servicesPages:    { ns: 'servicespages', file: 'services-pages.json' },
  birthdayPage:     { ns: 'servicespages', file: 'services-pages.json' },
  hourlyPage:       { ns: 'servicespages', file: 'services-pages.json' },
  about:            { ns: 'page_about',    file: 'pages/about.json' },
  blog:             { ns: 'page_blog',     file: 'pages/blog.json' },
  faqPage:          { ns: 'page_faq',      file: 'pages/faq.json' },
  faqSection:       { ns: 'page_faq',      file: 'pages/faq.json' },
  pricingPage:      { ns: 'page_pricing',  file: 'pages/pricing.json' },
  terms:            { ns: 'page_terms',    file: 'pages/terms.json' },
  privacy:          { ns: 'page_privacy',  file: 'pages/privacy.json' },
  booking:          { ns: 'page_booking',  file: 'pages/booking.json' },
  gallery:          { ns: 'page_gallery',  file: 'pages/gallery.json' },
  testimonialsPage: { ns: 'page_testimonials', file: 'pages/testimonials.json' },
  detailedTestimonials: { ns: 'page_testimonials', file: 'pages/testimonials.json' },
}
// fleet/locations are SPLIT: heavy content -> *content ns; slim menu stays in common.
const FLEET_LABELS = ['title','subtitle','aed','perDay','rentNow','from','performance','convertibleTech','luxuryFeatures']
const LOC_LABELS = ['title','subtitle','viewOnMap','cta']

const nsFiles = {} // ns -> { en:{}, ar:{}, ru:{} }
function put(ns, file, locale, obj) {
  nsFiles[ns] = nsFiles[ns] || { __file: file, en: {}, ar: {}, ru: {} }
  Object.assign(nsFiles[ns][locale], obj)
}

const summary = {}
for (const L of LOCALES) {
  const p = join(ROOT, 'public/locales', L, 'common.json')
  const common = JSON.parse(readFileSync(p, 'utf8'))
  const slim = {}

  for (const [key, val] of Object.entries(common)) {
    if (key === 'fleet') {
      // full -> fleetcontent.fleet ; slim menu -> common.fleet
      put('fleetcontent', 'fleet-content.json', L, { fleet: val })
      const sf = {}
      for (const [fk, fv] of Object.entries(val)) {
        if (FLEET_LABELS.includes(fk)) sf[fk] = fv
        else if (fv && typeof fv === 'object' && 'name' in fv) sf[fk] = { name: fv.name }
      }
      slim.fleet = sf
      continue
    }
    if (key === 'locations') {
      put('loccontent', 'locations-content.json', L, { locations: val })
      const sl = {}
      for (const [lk, lv] of Object.entries(val)) {
        if (LOC_LABELS.includes(lk)) sl[lk] = lv
        else if (typeof lv === 'string') sl[lk] = lv
        else if (lv && typeof lv === 'object' && 'nav' in lv) sl[lk] = { nav: lv.nav }
      }
      slim.locations = sl
      continue
    }
    if (MOVE[key]) {
      put(MOVE[key].ns, MOVE[key].file, L, { [key]: val })
      continue
    }
    slim[key] = val // stays in common
  }

  // write slim common
  writeFileSync(p, JSON.stringify(slim, null, 2) + '\n')
  if (L === 'en') summary.slimCommonKeys = Object.keys(slim).length
}

// write the new namespace files
const created = []
for (const [ns, data] of Object.entries(nsFiles)) {
  const file = data.__file
  for (const L of LOCALES) {
    const full = join(ROOT, 'public/locales', L, file)
    mkdirSync(join(full, '..'), { recursive: true })
    writeFileSync(full, JSON.stringify(data[L], null, 2) + '\n')
  }
  created.push({ ns, file })
}

// report (also used to regenerate the bundled map)
console.log('NEW NAMESPACES:')
created.forEach((c) => console.log(`  ${c.ns.padEnd(18)} <- public/locales/<lng>/${c.file}`))
console.log('\nslim common.json top-level keys (en):', summary.slimCommonKeys)
writeFileSync('/tmp/new-namespaces.json', JSON.stringify(created, null, 2))
