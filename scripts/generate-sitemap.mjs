// Build-time sitemap generator for rollsroycers.com
// Emits public/sitemap-pages.xml — the SINGLE sitemap (clean canonical URLs +
// full hreflang/x-default), matching SEO.tsx's canonical scheme exactly:
//   default locale 'en' => no path prefix; other locales => /<locale>/path.
// Run via `npm run sitemap` or automatically as `postbuild`.
import { writeFileSync, readFileSync, existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const BASE = 'https://rollsroycers.com'
const LOCALES = ['en', 'ar', 'ru'] // 'en' = default (no prefix)
const DEFAULT_LOCALE = 'en'

const blogSlugs = JSON.parse(readFileSync(join(ROOT, 'src/data/blogSlugs.json'), 'utf8'))

// route → source file (for lastmod) + priority/changefreq. /search and /offline are
// intentionally excluded (noindex). All listed routes are indexable 200 pages.
const fleet = ['phantom', 'ghost', 'cullinan', 'cullinan-black-badge', 'ghost-black-badge', 'dawn', 'wraith', 'spectre']
const services = ['airport-transfer', 'birthday', 'chauffeur', 'corporate', 'events', 'hourly-rental', 'photoshoot', 'tours', 'wedding']
const locations = ['business-bay', 'deira', 'difc', 'downtown-dubai', 'dubai-marina', 'jbr', 'jumeirah', 'palm-jumeirah']
const compares = ['phantom-vs-maybach', 'rolls-royce-vs-bentley', 'rolls-royce-vs-ferrari', 'rolls-royce-vs-mercedes']

const routes = [
  { path: '/', file: 'src/pages/index.tsx', priority: '1.0', changefreq: 'daily' },
  { path: '/booking', file: 'src/pages/booking.tsx', priority: '0.95', changefreq: 'daily' },
  { path: '/pricing', file: 'src/pages/pricing.tsx', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', file: 'src/pages/contact.tsx', priority: '0.9', changefreq: 'monthly' },
  { path: '/about', file: 'src/pages/about.tsx', priority: '0.7', changefreq: 'monthly' },
  { path: '/fleet', file: 'src/pages/fleet.tsx', priority: '0.9', changefreq: 'weekly' },
  { path: '/services', file: 'src/pages/services.tsx', priority: '0.9', changefreq: 'weekly' },
  { path: '/luxury-car-rental-dubai', file: 'src/pages/luxury-car-rental-dubai.tsx', priority: '0.9', changefreq: 'weekly' },
  { path: '/locations', file: 'src/pages/locations.tsx', priority: '0.9', changefreq: 'weekly' },
  { path: '/compare', file: 'src/pages/compare/index.tsx', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery', file: 'src/pages/gallery.tsx', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', file: 'src/pages/blog/index.tsx', priority: '0.8', changefreq: 'weekly' },
  { path: '/faq', file: 'src/pages/faq.tsx', priority: '0.7', changefreq: 'monthly' },
  { path: '/testimonials', file: 'src/pages/testimonials.tsx', priority: '0.6', changefreq: 'monthly' },
  { path: '/cookie-policy', file: 'src/pages/cookie-policy.tsx', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy', file: 'src/pages/privacy.tsx', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', file: 'src/pages/terms.tsx', priority: '0.3', changefreq: 'yearly' },
  ...fleet.map((s) => ({ path: `/fleet/${s}`, file: `src/pages/fleet/${s}.tsx`, priority: '0.8', changefreq: 'weekly' })),
  ...services.map((s) => ({ path: `/services/${s}`, file: `src/pages/services/${s}.tsx`, priority: '0.8', changefreq: 'weekly' })),
  ...locations.map((s) => ({ path: `/locations/${s}`, file: `src/pages/locations/${s}.tsx`, priority: '0.8', changefreq: 'weekly' })),
  ...compares.map((s) => ({ path: `/compare/${s}`, file: `src/pages/compare/${s}.tsx`, priority: '0.7', changefreq: 'monthly' })),
  ...blogSlugs.map((slug) => ({ path: `/blog/${slug}`, file: 'src/pages/blog/[slug].tsx', priority: '0.7', changefreq: 'monthly' })),
]

const today = new Date().toISOString().slice(0, 10)
const gitDateCache = new Map()
function lastmodFor(file) {
  if (gitDateCache.has(file)) return gitDateCache.get(file)
  let d = today
  try {
    const out = execSync(`git log -1 --format=%cs -- "${file}"`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim()
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) d = out
  } catch {
    /* git unavailable (e.g. shallow CI clone) → build date */
  }
  gitDateCache.set(file, d)
  return d
}

// Match SEO.tsx buildLangUrl: en has no prefix; home path collapses to base.
function urlFor(lang, path) {
  const prefix = lang === DEFAULT_LOCALE ? '' : `/${lang}`
  return `${BASE}${prefix}${path === '/' ? '' : path}`
}

// Image discovery for the sitemap. Each canonical <url> lists the images that page
// renders so Google + AI crawlers find & attribute them (captions/license come from
// the embedded IPTC metadata — see scripts/img-metadata.mjs). Components rendered on
// the homepage have their images attributed to '/'.
const HOME_COMPONENTS = ['Hero', 'Fleet', 'Services', 'About', 'Reviews', 'VideoGallery', 'SpecialOffers']
const IMG_RE = /\/images\/[A-Za-z0-9_./-]+\.(?:jpe?g|png|webp|avif)/g
const xmlEsc = (s) => s.replace(/&/g, '&amp;')
function staticImages(content) { return content.match(IMG_RE) || [] }
function imagesFor(file, path) {
  const set = new Set()
  try { staticImages(readFileSync(join(ROOT, file), 'utf8')).forEach((i) => set.add(i)) } catch {}
  if (path === '/') for (const c of HOME_COMPONENTS) {
    try { staticImages(readFileSync(join(ROOT, `src/components/${c}.tsx`), 'utf8')).forEach((i) => set.add(i)) } catch {}
  }
  return [...set].filter((i) => existsSync(join(ROOT, 'public', i)) && !i.includes('/reviews/')).slice(0, 250)
}

function urlBlock({ path, file, priority, changefreq }) {
  const alts = LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(l, path)}"/>`).join('\n')
  const imgs = imagesFor(file, path)
    .map((i) => `    <image:image><image:loc>${xmlEsc(BASE + encodeURI(i))}</image:loc></image:image>`).join('\n')
  return `  <url>
    <loc>${urlFor(DEFAULT_LOCALE, path)}</loc>
    <lastmod>${lastmodFor(file)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(DEFAULT_LOCALE, path)}"/>${imgs ? '\n' + imgs : ''}
  </url>`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated by scripts/generate-sitemap.mjs — do not edit by hand. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes.map(urlBlock).join('\n')}
</urlset>
`

writeFileSync(join(ROOT, 'public/sitemap-pages.xml'), xml)
console.log(`✓ sitemap-pages.xml written: ${routes.length} URLs (${blogSlugs.length} blog posts, ${LOCALES.length} locales each)`)
