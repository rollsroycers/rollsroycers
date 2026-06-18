# 🔬 rollsroycers.com — Exhaustive Technical SEO + AEO Audit
**Date:** 2026-06-19 · **Stack:** Next.js 15 Pages Router · React 19 · next-i18next · OpenNext → Cloudflare Workers
**Method:** Code-level crawl simulation + Screaming-Frog-style reporting + AI-search evaluation. 5 recon agents + 18 dimension auditors + adversarial verification of every Critical finding (32 agents). All findings cite `file:line` against the codebase (the source of truth for the live site).

> **Verification note (honesty first):** Of 9 agent-flagged "Critical" findings, adversarial verification **confirmed 2**, **down-graded 6** to High/Medium (the realistic outcome is rich-result loss / crawl waste, not a sitewide penalty), and **refuted 1** ("missing viewport" — Next.js 15 auto-injects `width=device-width`, confirmed in built HTML for all 420 pages). The report reflects the **corrected** severities.

---

## 1. EXECUTIVE SUMMARY

### Site Health Score: **46 / 100** — "Strong content, sabotaged by the technical/indexation layer"
The marketing surface is genuinely good (unique, fully-translated content across 6 languages; real topical clusters; sound canonical engine; SSG everywhere). It is being held off page 1 by **self-inflicted crawl, indexation, schema, and media defects** — almost all of which are config/copy fixes, not rewrites. This is a site that should rank far better than it does.

### Screaming Frog Crawl Summary (simulated)
| Metric | Value |
|---|---|
| Internal page routes (SSG) | 50 components → **48 indexable** + 2 noindex (`/search`, `/offline`) |
| Blog detail routes | 21 EN slugs × 6 locales = **126 built** |
| Total indexable URLs (incl. locales) | **~408** |
| Non-indexable | `/search`, `/offline` (noindex), `/api/*` (disallowed) |
| Broken (hard 404 from internal links) | **2** blog slugs + **6** head-referenced icon/font assets |
| Redirected | 13 effective `next.config` rules + `www`/`http` in middleware |
| **Sitemaps** | **8 conflicting** (1 good + 6 legacy-broken + 1 index) + 1 dead API route |
| Duplicate-meta URLs | **6** pages emit another page's title/desc/schema (shared `pageKey`) |

### 🔴 Top 5 Critical — fix within 24 hours
1. **Analytics is dead site-wide.** GTM container hardcoded to `GTM-XXXXXXX` (`_document.tsx:92,110`); env var `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` never read. `reportWebVitals` → `window.gtag` never loads. **You have zero field data to measure any fix.**
2. **All image optimization is off** (`next.config.js:50 unoptimized:true`) — 98 `<Image>` ship raw bytes, no WebP/AVIF/srcset; a 1.9 MB PNG is used as a gallery thumbnail. *(Confirmed Critical.)*
3. **15 of 21 blog posts (90 localized pages) are in NO sitemap** — built, indexable, JS-free, but undiscoverable. *(Confirmed Critical.)*
4. **Dual conflicting sitemap system** — 6 legacy sitemaps submit **216 non-canonical `/en/`-prefixed + redirected URLs** that contradict the page's own canonical, all referenced in `robots.txt`.
5. **Favicon + Apple-touch-icon 404 on every page** — `_document.tsx:68-73` references 4 icon files that don't exist in `public/`.

### 🟠 Top 5 Quick Wins — highest ROI, least effort
1. **Delete `public/_redirects`, `public/.htaccess`, and the 6 legacy `sitemap-{en,ar,zh,fr,ru,hi}.xml`** — removes 3 redirect-system conflict and 216 duplicate URLs in one commit (they're inert/duplicate on Workers anyway).
2. **Fix 6 wrong `pageKey`s** (deira, jumeirah, birthday, hourly-rental, both Black Badges) — stops 6 money-pages from canonical/title-cloning another page.
3. **Remove the 2 dead blog cards** (`blog/index.tsx:180,191`) — kills 2 hard 404s instantly.
4. **Wire GTM id from env + register the service worker** (`_app.tsx`) — turns on analytics + the already-written PWA.
5. **Generate favicons from `logo-512.png`** → 0 more 404s + a SERP favicon.

### Estimated Ranking Impact
- **Today:** competitive head terms ("rent rolls royce dubai") likely **page 2–4**; long-tail/blog largely uncrawled or unindexed; **near-zero AI citation** (contradictory facts + thin semantic HTML).
- **After Phase 0–2 (≈3 weeks):** realistic move to **page 1 / top-5** for primary + location/fleet terms, full blog indexation, and AI-citation eligibility — *because the content to rank already exists; only the technical gating is removed.*

---

## 2. SCREAMING-FROG-STYLE DATA TABLES

### T1 — Response-Code Distribution (simulated crawl)
| Bucket | Count | Notes |
|---|---|---|
| 200 (SSG pages) | 48 | All `getStaticProps`; `index,follow` via `SEO.tsx:421` |
| 200 (blog/[slug]) | 126 | `fallback:false`; all built slugs resolve |
| 200 noindex (correct) | 2 | `/search` (`search.tsx:100`), `/offline` |
| 200 but redirect-intended (mechanism dead) | 2 | `/testimonials`, `/terms` |
| 301 effective (`next.config`) | 13 rules | www, 3 misspellings, `*-rental`→fleet, `/ae`, `/terms`, `/week`, `/month` |
| 301 effective (middleware) | 2 | www→nonwww, http→https (**2-hop chain** on http+www) |
| 302 | 1 | `/cookies`→`/cookie-policy` (intentional) |
| 301 in DEAD files | 6 (`_redirects`) + 4 (`.htaccess`) | **NOT honored on Workers** |
| 404 hard (internal links) | 2 | `/blog/art-of-arriving-special-events-dubai`, `/blog/dubai-night-experience-rolls-royce` |
| 404 assets | 6 | favicon×3, apple-touch×1, font preloads×2 |

### T2 — Redirect Map (hop-by-hop, by mechanism)
| Source | next.config | middleware | _redirects (DEAD) | .htaccess (DEAD) | Effective result |
|---|---|---|---|---|---|
| `http://www.../x` | host www→https 301 | www→nonwww (keeps http) **then** http→https | — | — | **2-HOP 301 chain** |
| `/testimonials` | (none) | — | →/faq | →/faq#testimonials | **no redirect → live 200** |
| `/terms` | →/privacy#terms | — | →/privacy | →/privacy#terms | 301→/privacy#terms (targets disagree) |
| `/ae`, `/ae/*` | →/ar | — | →/ar | — | 301→/ar |
| `/phantom-rental` | →/fleet/phantom | — | dup | — | 301 (target exists) |

### T3 — Orphan / Near-Orphan Pages
| Page | Crawlable inlinks | In sitemap? | noindex? | Verdict |
|---|---|---|---|---|
| `/search` | 0 | No | Yes | TRUE ORPHAN (by design, dead-end) |
| `/compare` (index) | 1 (from noindex `/search`) | No | No | NEAR-ORPHAN + sitemap-excluded |
| `/cookie-policy` | 1 (from `/privacy`) | No | No | NEAR-ORPHAN |
| `/compare/rolls-royce-vs-ferrari` | 2 | No | No | Contextual-only, sitemap-excluded |
| `/compare/rolls-royce-vs-mercedes` | 2 | No | No | Contextual-only, sitemap-excluded |
| `/compare/phantom-vs-maybach` | 2 | No | No | Contextual-only, sitemap-excluded |

### T4 — Duplicate-Meta / Cannibalization Matrix
| Shared signal | Competing URLs | Root cause | Fix |
|---|---|---|---|
| "Rent…Downtown Dubai\|Burj Khalifa" | `/locations/deira` vs `/locations/downtown-dubai` | `deira.tsx:88 pageKey=locations.downtown-dubai` | give deira own key |
| "Rent…Palm Jumeirah\|Atlantis" | `/locations/jumeirah` vs `/locations/palm-jumeirah` | `jumeirah.tsx:88` | own key |
| "Book Rolls-Royce Dubai Online" | `/services/birthday`, `/services/hourly-rental`, `/booking` | both `pageKey=other.booking` | services.birthday / services.hourly |
| "…Cullinan…AED 6,500/Day" | `/fleet/cullinan-black-badge` vs `/fleet/cullinan` | `pageKey=fleet.cullinan` | new key |
| "…Ghost…Black Badge AED 3,800/Day" | `/fleet/ghost-black-badge` vs `/fleet/ghost` | `pageKey=fleet.ghost` | new key |
| services/locations hub title+desc | `pages.X.main` == `pages.other.X.main` (byte-identical) | redundant `pages.other.*` tree | delete `pages.other.{services,locations,compare}.*` |
| `/en/booking` vs `/booking` (×36) | sitemap-en.xml vs canonical | `/en` rewrite + legacy sitemap | delete sitemap-en.xml; 301 /en→/ |

> **Body-copy check:** Jaccard of `t()` keys between every sibling pair (deira/downtown, jumeirah/palm, birthday/hourly, both Black Badges) = **0.00** → **no body duplication.** All duplication is in the meta/schema/URL layer = surgical fixes.

### T5 — Title / Meta-Description Issues (programmatic scan of `en/seo.json`, 63 keys)
| Metric | Result | Verdict |
|---|---|---|
| Titles > 60 chars | **62 / 63 (98%)** | FAIL (every SERP title truncated) |
| Descriptions > 160 chars | **61 / 63 (97%)** | FAIL |
| Longest title | `blog.dubai-luxury-car-guide-2026` = 98 | FAIL |
| Longest description | `pages.fleet.phantom` = **295** | FAIL |
| Missing / empty / title==desc | 0 / 0 / 0 | PASS |
| Duplicate title clusters | 3 (from `pages.other.*` mirror) | FAIL |

### T6 — Image Issues (verified on disk)
| File / element | Issue |
|---|---|
| `next.config.js:50 unoptimized:true` | **all 98 `<Image>` raw bytes**, no WebP/AVIF/srcset |
| `Rolls-Royce-red-background_.png` (1.9 MB, 1152×2048) | PNG photo used as gallery thumb (`gallery.tsx:318`) |
| 6 raw `<img>` (AvailabilityCalendar:155, TestimonialSubmission:108, VideoGallery:137, WeatherRecommendations:199, VirtualTour:92, OptimizedImage:403) | no width/height (CLS), no lazy |
| `Rolls-royce-official.jpg` (OG/Twitter, 736×736) | wrong ratio for `summary_large_image` (want 1200×630) |
| Hero `Rolls-Royce-front.jpg` (540×810) | too low-res for 100vw hero (upscaled) |
| 95 JPG / 3 PNG sources | un-converted; ~60–70% savings available |
| 5 MP4 (up to 4.7 MB) | autoplay, no `preload="none"`/`poster` |

### T7 — Broken Links / Assets
| Reference | Location | Status |
|---|---|---|
| `/blog/art-of-arriving-special-events-dubai` | `blog/index.tsx:180` | hard 404 (not in getStaticPaths) |
| `/blog/dubai-night-experience-rolls-royce` | `blog/index.tsx:191` | hard 404 |
| `/favicon.ico`, `/favicon-32x32.png`, `/favicon-16x16.png` | `_document.tsx:71-73` | 404 (missing) |
| `/icon-192x192.png` (apple-touch) | `_document.tsx:68` | 404 (missing) |
| `/fonts/noto-sans-sc.woff2` (zh preload) | `SEO.tsx:449` | 404 (no `public/fonts/`) |
| `/fonts/noto-sans-devanagari.woff2` (hi preload) | `SEO.tsx:457` | 404 |

### T8 — Crawl-Depth Distribution (from homepage, via nav/footer mega-menu)
| Depth | Pages | Notes |
|---|---|---|
| 0 | 1 | `/` |
| 1 | ~40 | hubs + all fleet/services/locations leaves + booking/pricing/about/contact/faq/blog (mega-nav + footer) |
| 2 | ~9 | blog posts (via /blog), 3 compare detail (via bentley body) |
| 3+ orphan-ish | 5 | `/compare` index, 3 compare detail, `/cookie-policy`, `/search` (see T3) |

Average depth is excellent (<2 for money pages). The only depth problem is the **compare cluster + utility pages** stranded behind weak internal links.

### T9 — Internal Link Score (template coverage)
| Page group | Site-wide inlinks | Notes |
|---|---|---|
| `/` (home) | ~50 | strongest node |
| `/booking` | ~50+ | nav CTA + footer + page CTAs |
| `/fleet`,`/services`,`/locations` hubs | ~50 + breadcrumb | healthy |
| 8 fleet models | 2 each | Black Badges miss `/fleet` grid (still only 2) |
| 9 services | 2 each | birthday/hourly miss `/services` grid |
| 8 locations | 2 each | deira/jumeirah miss `/locations` grid |
| `/privacy`,`/terms` | ~50 each | **legal pages over-weighted vs commercial** |
| `/compare` index | **1** | near-orphan |

### T10 — Directive Conflicts
| Page | Conflict |
|---|---|
| `/search` | **two** `<meta robots>`: `noindex,follow` (`search.tsx:100`) vs `index,follow` (`SEO.tsx:421`) — render-order decides |
| `/terms` | self-canonical to `/terms` **and** `next.config` 301 → `/privacy#terms` |
| `/testimonials` | built+self-canonical, in sitemap, **and** `_redirects` says 301 → `/faq` |
| Service schema | `termsOfService` → `/terms` (a redirect) on all 9 service pages |
| 6 pages | `pageKey` mismatch → canonical/title belong to a different URL |

### T11 — Sitemap vs Crawl Diff
| Sitemap | Served? | URLs | Blog | hreflang | URL form | Verdict |
|---|---|---|---|---|---|---|
| `sitemap-pages.xml` | YES | 43 | 6/21 | YES (+x-default) | clean (no /en) | **KEEP** — but incomplete |
| `sitemap-{en…hi}.xml` (×6) | YES | 36 ea (216) | 6/21 | **NO** | `/en/` non-canonical | **DELETE** |
| `api/sitemap.ts` | NO (dead) | ~80 | 6/21 (different 6!) | yes | clean | wire or delete |
| **Missing from all sitemaps** | — | — | **15 blog posts**, 3 compare, `/compare`, `/cookie-policy`, 3 hubs | — | — | add |
| **Redirected URLs IN sitemap** | — | `/terms`, `/testimonials` (×7 each) | — | — | — | remove |

### T12 — URL Parameter Inventory
| Parameter / pattern | Type | Handling | Recommendation |
|---|---|---|---|
| `/en`, `/en/*` | locale prefix | **rewrite** (200, not 301) → duplicate at 2 URLs | convert to 301 + delete sitemap-en |
| `?q=` (search) | content (client) | stripped from canonical (`SEO.tsx:68`); `/search` noindex | OK |
| `utm_*` | tracking | stripped from canonical | OK (no param sitemap entries) |
| `#terms`, `#testimonials` | fragment | redirect targets — **anchor IDs don't exist** on `/privacy`,`/faq` | add IDs or drop redirect |
| Trailing slash | — | `trailingSlash:false`, consistent | OK (but sitemap home uses `/`) |

---

## 3. DETAILED FINDINGS BY DIMENSION

### D1 — Crawl Simulation, Response Codes & Redirects — **4.5/10**
- 🟠 **3 conflicting redirect systems** (`next.config` vs dead `_redirects` vs dead `.htaccess`) disagree on `/terms`,`/testimonials`. On Workers only `next.config` fires → `/testimonials` never redirects (stays live+indexable while declared redirected). *Verifier: consolidation/hygiene → consolidate into `next.config`, delete the other two.*
- 🟠 **`/blog` links 2 non-existent slugs → hard 404** (`blog/index.tsx:180,191`; `fallback:false`).
- 🟠 **Dual robots/sitemap source**: `public/*` served, `api/{robots,sitemap}.ts` are dead code with **different** content → maintenance trap.
- 🟡 **2-hop www+http redirect chain** in `middleware.ts:11-15` (host swapped but protocol preserved). Merge protocol+host in one 301; delete the duplicate www rule in `next.config.js:182-191`.
- 🟢 `404.tsx` auto-redirects to `/` after 10s (client JS) — remove (soft-404 signal to JS crawlers).

### D2 — Link Graph & Internal PageRank — **6.5/10** *(best dimension)*
- 🟠 **Compare cluster crawl-starved**: nav/footer link only `rolls-royce-vs-bentley`; `/compare` index has 1 inlink (from noindex `/search`); 4 of 5 compare URLs absent from sitemap.
- 🟠 **`/search` fully orphaned**; **`/cookie-policy` near-orphan** (1 inlink, not in footer).
- 🟡 **Hub grids under-list children** (fleet 6/8, services 7/9, locations 6/8) → Black Badges/birthday/hourly/deira/jumeirah get only the 2 template inlinks, miss the topical-hub boost.
- 🟢 **Strong**: descriptive entity anchors (no "click here" on entity links); all 27 external links carry `rel="noopener noreferrer"`; no nofollow sculpting.

### D3 — URL Structure & Parameters — **5.5/10**
- 🟠 `/en` rewrite → every page reachable at 2 URLs with no 301. Add `redirects()` `/en→/`, `/en/:path*→/:path*` (permanent) and remove the rewrites.
- 🟠 Static sitemaps list 36 non-canonical `/en/` URLs.
- 🟠 Redirect targets use `#terms`/`#testimonials` anchors that **don't exist** on `/privacy`/`/faq`.
- 🟢 Slugs clean (longest 69 chars, depth 2), `trailingSlash:false` consistent.

### D4 — On-Page Elements — **4.5/10**
- 🟠 **62/63 titles >60 chars; 61/63 descriptions >160** (phantom desc = 295). Rewrite all 6 `seo.json` to ≤60 / 150-160; add a CI jest guard.
- 🟠 **5 `pageKey` collisions** → duplicate `<title>`/`<meta>`/Product schema across distinct self-canonical URLs.
- 🟡 Literal i18n keys leak into `<meta keywords>` on `/search` + 23 blog posts (`pages.search.keywords`, `pages.blog.{slug}.keywords` don't exist; next-i18next returns the key path). Add `returnEmptyString:false`/`parseMissingKeyHandler` or guard in `SEO.tsx:60`.
- 🟡 Home `<title>` differs by locale (EN/AR booking-style vs FR/HI/RU/ZH fleet-style) — fragments the homepage keyword target.
- 🟢 **Canonical engine is correct** (self-ref, /en-stripped, locale-prefixed; verified against 8 paths). 47/48 pages have exactly one H1.

### D5 — Image, Resource & Media — **3.5/10**
- 🔴 **`images.unoptimized:true`** (`next.config.js:50`) — *confirmed Critical.* Fix via Cloudflare custom loader:
```js
// next.config.js
images: { loader: 'custom', loaderFile: './src/lib/cfImageLoader.ts' } // remove unoptimized:true
```
```ts
// src/lib/cfImageLoader.ts
export default function cfLoader({src,width,quality}:{src:string;width:number;quality?:number}){
  return `/cdn-cgi/image/width=${width},quality=${quality||75},format=auto${src}`
}
```
- 🟠 1.9 MB PNG gallery thumb; 6 raw `<img>` (CLS); 4 favicon 404; OG image 736×736 (want 1200×630); hero 540×810 (low-res).
- 🟡 zh/hi font preloads 404 (`SEO.tsx:449-465`, no `public/fonts/`) — delete and load via `next/font/google`.

### D6 — Code Architecture & Rendering — **5.5/10**
- 🟠 **3 API routes dead** (shadowed by static files).
- 🟠 **`/api/indexnow` is an unauthenticated relay** — default key `rollsroycers2026indexnow` is public (`/rollsroycers2026indexnow.txt`), `req.body.urls` unvalidated, no rate limit → anyone can submit spam under your domain key.
- 🟠 **No error boundaries / no custom error page** — any client throw white-screens the page (76 framer-motion files, 7 `ssr:false` widgets, Swiper).
- 🟡 Schema `priceValidUntil`/`validFrom` baked at build via `new Date()` → go stale (SSG, no revalidate). Hardcode `2027-12-31` or add `revalidate`.
- 🟡 Homepage mounts 7 `ssr:false` widgets with no reserved height → CLS.

### D7 — Structured Data & Knowledge Graph — **3.5/10**
- 🟠 **3 conflicting Product/Vehicle nodes per fleet page** with different `reviewCount` (inline 1247/187/312/287, `SEO.tsx` 25, EntitySchema none). *Verifier: High — Google drops the star rating.* Emit ONE Product per URL from a single per-model count.
- 🟠 **Self-serving `aggregateRating` with no `Review` objects** on AutoRental/LocalBusiness/Service/Product (25 vs 1200 vs 287). *Verifier: Medium — rich result omitted, not a manual action.* Remove from Org/LocalBusiness/Service; keep only on Product/Vehicle backed by real reviews.
- 🟠 **Broken `@id` graph**: `AutoRental` and `Organization` both claim `/#organization` (collision); `Service.provider`/`Place.parentOrganization` → dangling `/#autorental`.
- 🟠 **Duplicate `BreadcrumbList`** (global + hub components) and **2–3 `FAQPage` per page** (inline + GEOOptimizer + Service/Location).
- 🟠 **Invalid types** `ServiceArea`, `LuxuryCarRental` (not in schema.org) → use `AutoRental`/`CarRental`.
- 🟡 `termsOfService`→redirected `/terms`; FAQ phone `+971 50 123 4567` contradicts canonical NAP; 2 dead schema components (`FAQSchema`, `DubaiLocalSEO`); Black Badge pages lack Vehicle schema.
- **Schema depth score: 4/10.** To reach 10: one Product per URL with real `Review[]`, single global `BreadcrumbList`, valid types, resolved `@id` graph, `Person` authors with `sameAs`, locale-aware URLs.

### D8 — Core Web Vitals — **4.5/10**
- 🟠 zh/hi font preloads 404 (high-priority wasted request, no CJK/Devanagari font at all → system fallback).
- 🟠 `unoptimized:true` → LCP risk on interior pages (hero itself is fine: 37 KB, `priority`+`fetchPriority`).
- 🟠 **Global monkey-patch of `Element.prototype.addEventListener`** (`mobileOptimizations.ts:160-179`) on every page — per-listener INP tax + breaks any future `preventDefault` (forces passive). Delete it.
- 🟡 **Mobile hero CLS**: `min-h-mobile` uses `--vh` set only in a post-hydration `useEffect` → section resizes on first paint. Use `100svh`/`100dvh` instead.
- 🟡 framer-motion in 76 files / 254 `whileInView` → TBT/INP. Use `LazyMotion`+`m`, migrate simple reveals to CSS.
- 🟡 GTM placeholder → `reportWebVitals` can't ship CWV; **you can't measure field LCP/INP/CLS.**

### D9 — Crawl Efficiency & Indexation — **3.0/10** *(weakest dimension)*
- 🔴 **15/21 blog posts (90 pages) in NO sitemap** — *confirmed Critical.*
- 🟠 **216 non-canonical URLs** in 6 legacy sitemaps (`sitemap-en.xml` = 36 `/en/` self-non-canonical). *Verifier: High.* Delete the 6 files + their `robots.txt`/`sitemap.xml` references.
- 🟡 **Redirected `/terms`,`/testimonials` listed in sitemaps** (GSC "Page with redirect").
- 🟠 **2 robots.txt sources disagree**; **`api/sitemap.ts` dead** and lists a *different* 6 blog posts.
- 🟡 All `lastmod` identical (`2026-02-06`) → Google ignores the signal.
- 🟢 **Structural fix:** replace all hand-maintained sitemaps with a `postbuild` generator that enumerates routes + the blog slug array (`blog/[slug].tsx:4258`) — resolves missing-blog, missing-compare, stale-snapshot in one move.

### D10 — Security — **5.5/10**
- 🟠 **CSP weak**: `script-src 'unsafe-inline' 'unsafe-eval'`, `img-src http:` (mixed content), no `frame-ancestors`, `dangerouslyAllowSVG:true`. Drop `unsafe-eval`, nonce scripts, remove `http:`, add `frame-ancestors 'self'` + `upgrade-insecure-requests`, set `dangerouslyAllowSVG:false`.
- 🟠 **`/api/indexnow` unauthenticated + unthrottled** (see D6). Use a server-only secret, validate same-origin URLs, rate-limit, rotate the leaked key.
- 🟡 **`.dev.vars` is git-tracked** and not in `.gitignore` → future secret leak risk. `git rm --cached .dev.vars`, gitignore it + `.wrangler`, use `wrangler secret put`.
- 🟢 Good header baseline (HSTS preload, X-Frame-Options, nosniff, Referrer-Policy); `poweredByHeader:false`; source maps off; Next 15.5.12 past CVE-2025-29927 (pin it — caret floats).

### D11 — AI Search (AEO/GEO) — **5.5/10**
- 🟠 **AI-crawler allowlist stale**: uses deprecated `Claude-Web`, **missing `ClaudeBot`, `OAI-SearchBot`, `Applebot-Extended`, `Meta-ExternalAgent`** (full corrected block in the action plan).
- 🟠 **Fleet size + claims contradict across files** (llms.txt=5 cars, llms-full=6, about=5, routes=8; "10,000 clients/1,200 reviews/#1 since 2010" unverifiable) → AI engines discount self-contradicting sources.
- 🟠 **Zero semantic HTML for citation**: entire `src/` has **0 `<article>`, 0 `<time datetime>`, 0 `<figure>**, 0 `<header>`. Blog body is `<div class="prose">`, date is a plain `<span>`.
- 🟡 Weak EEAT (identical boilerplate author bios, no author pages, bare `Person` schema); `dateModified==datePublished` (no freshness); llms.txt static, not surfaced, drifts from site.
- 🟢 Good foundation: llms.txt + llms-full.txt exist; GEOOptimizer on 37 pages; AI bots broadly allowed.

### D12 — Mobile Experience — **6.0/10** *(adjusted up: viewport Critical refuted)*
- ✅ **REFUTED:** "no viewport meta" — Next.js 15 auto-injects `width=device-width` (confirmed in `.next/server/pages/*.html`, 420/420). *Minor polish only:* it lacks `initial-scale=1`/`viewport-fit=cover` — add via a `<Head>` in `_app.tsx`.
- 🟠 **Bottom-fixed overlays collide on mobile** — CookieConsent (full-width, z-50) + WhatsApp FAB (z-50) + SocialProofNotifications stack/cover the primary CTA = intrusive-interstitial pattern.
- 🟠 **Hover-only nav dropdowns + WhatsApp label** break on touch. Add `onClick` toggles.
- 🟡 Inconsistent touch targets in mobile drawer (`px-3 py-2`, ~32px, no 44px min); fixed overlays not RTL-aware (right-anchored for Arabic).
- 🟢 Real `mobileOptimizations.ts`, 44px utilities where applied, accordion content fully in SSG HTML (no parity loss).

### D13 — Duplicate Content & Cannibalization — **4.5/10**
- 🟠 216 non-canonical `/en/` sitemap URLs; redirected URLs sitemapped; redundant `pages.other.*` key tree (byte-identical hub meta); **6 distinct URLs emit another page's title/meta/schema via shared `pageKey`**.
- 🟡 `/en` rewrite (not 301) leaves duplicate live at 200; correct `api/sitemap` is dark while broken statics are live.
- 🟢 Light head-term overlap (home vs `/locations/dubai-marina` vs `/fleet` all lead "Rent Rolls-Royce Dubai") — reserve the bare term for home. **No body duplication (Jaccard 0.00).**

### D14 — Hreflang & International — **5.5/10**
- 🟠 Legacy sitemaps emit `/en/` non-canonical URLs with **zero hreflang**, contradicting `sitemap-pages.xml`.
- 🟠 **deira/jumeirah emit another page's canonical+hreflang cluster** (wrong `pageKey`) → 2 URLs both claim canonical for a third, across 6 locales.
- 🟠 hreflang clusters point at redirected `/terms`,`/testimonials`.
- 🟡 Home canonical (no slash) vs sitemap home (`/` slash) mismatch; bare `ar` vs `ar-AE` for a Gulf business; **non-EN locales missing 69–172 keys** vs EN (hi worst) → mixed-language meta on the weakest-value locales; **validate hi/fr ROI vs GSC** before keeping.
- 🟢 Per-page HTML hreflang is **correct** (full reciprocal set + x-default, default locale unprefixed). `<html lang>`/`dir=rtl` correct.

### D15 — Pagination & Infinite Scroll — **5.5/10**
- 🟢 **No pagination needed** — blog (23 cards), gallery (36 img + 5 vid), hubs all render full sets in SSG HTML; filters are client-only and don't touch the URL. Googlebot reaches every item without JS.
- 🟠 2 blog cards → hard 404; only 6/21 blog posts in sitemap.
- 🟡 **Dead "Load More Articles" button** (no `onClick`, `blog/index.tsx:487`); InstagramFeed is hardcoded placeholder data (verify `instagram-1..6.jpg` exist, link to profile).

### D16 — Accessibility (A11Y) — **5.5/10**
- 🟠 **Only 3 `aria-label` across 123 `<button>`** — icon-only WhatsApp FAB (~50 pages), VoiceSearch mic, gallery close, language trigger have no accessible name (4.1.2).
- 🟠 **`prefers-reduced-motion` not respected by framer-motion** (254 JS animations; CSS-only override doesn't stop JS transforms). Wrap app in `<MotionConfig reducedMotion="user">`.
- 🟠 **Gallery modals**: no `role="dialog"`, no Escape, no focus trap (2.1.1/2.4.3).
- 🟡 Contrast fails: white-on-gold (2.34:1), white icon on green-500 (2.28:1); `booking.tsx` + search inputs not programmatically labelled; 42 `focus:outline-none` with weak/no visible replacement.
- 🟢 Skip-link, `<main>` landmark, per-locale `lang`/`dir`, contact form labels, gold-on-black text (8.45:1) all correct.

### D17 — Content Quality & Topical Authority — **6.0/10**
- 🟠 6 content-rich pages reuse another page's `pageKey` → unique content can't rank for its own terms.
- 🟠 2 blog slugs hard-404; **stale freshness sitewide** (blog `dateModified` frozen Jan 2025, titles say "2026", footer hardcodes "© 2025" — `Footer.tsx:346`). Fix copyright to `{new Date().getFullYear()}`, add real `lastUpdated`.
- 🟡 Pillar hubs omit existing children; blog index card dates span 2024–2026 inconsistently and conflict with schema dates; self-serving inconsistent `reviewCount`s.
- 🟢 Genuinely substantial, unique, translation-backed copy (phantom = 50 headings; palm-jumeirah = 96 `t()` calls); real cluster architecture.

### D18 — Competitive Edge & Advanced Signals — **4.5/10**
- 🟠 **Service worker written (9.7 KB `sw.js`) but NEVER registered** → PWA/offline/caching all dead. Register in `_app.tsx`.
- 🟠 **Favicon/apple-touch 404** on every page.
- 🟠 **Fabricated social-proof popups** (random fake "someone booked X 2 min ago", real Arabic name "أحمد") site-wide via Layout — dark pattern, undermines E-E-A-T, UAE/EU consumer-law risk. Remove or back with real data.
- 🟡 NAP non-credible (street = "Downtown Dubai", postal "00000", no trade license/TRN); **3 different phone numbers**; dead font preconnects while real third-parties get only dns-prefetch; AvailabilityCalendar is a fake-availability stub.
- 🟡 GTM env var unused (placeholder); theme-color mismatch (`#1a1a1a` vs manifest `#d4af37`).
- 🟢 WhatsApp CTA consistent (canonical number everywhere); PriceCalculator/TripPlanner real; fonts self-hosted.

---

## 4. PRIORITIZED ACTION PLAN

### Phase 0 — Emergency (today)
1. **GTM**: read `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` in `_document.tsx:92,110`; guard render when empty. Turns analytics + CWV measurement back on.
2. **Delete dead/conflicting files**: `public/.htaccess`, `public/_redirects`, `public/sitemap-{en,ar,zh,fr,ru,hi}.xml`; remove their lines from `robots.txt` + `sitemap.xml`. Migrate `/ae→/ar` (already in `next.config`).
3. **Blog 404s**: remove the 2 dead cards (`blog/index.tsx:180,191`) or author them; add a `getStaticPaths` guard that throws if an index slug isn't built.
4. **Favicons**: generate `favicon.ico` + 16/32px + apple-touch from `logo-512.png` → `public/`.
5. **`/api/indexnow`**: remove default-key fallback, validate same-origin URLs, rate-limit, rotate key (security).

### Phase 1 — Critical (week 1)
6. **Sitemap generator** (`postbuild`): enumerate all routes + 21 blog slugs + compare + hubs + `/cookie-policy`, with hreflang+x-default, real per-URL `lastmod`. Add all 15 missing blog posts.
7. **Fix 6 `pageKey`s** + add dedicated `seo.json` keys (deira, jumeirah, services.birthday, services.hourly, fleet.cullinan-black-badge, fleet.ghost-black-badge) in all 6 locales.
8. **Images**: Cloudflare custom loader (remove `unoptimized:true`); convert the 1.9 MB PNG + avatars; add `priority`+`sizes` to interior heroes; convert 6 raw `<img>`→`next/image`.
9. **Schema cleanup**: one Product per fleet URL; remove self-serving `aggregateRating` from Org/LocalBusiness/Service; fix `@id` graph; single global `BreadcrumbList`; one `FAQPage`/page; valid types.
10. **Title/meta rewrite** to ≤60/150-160 across 6 `seo.json` + CI length guard.

### Phase 2 — High Impact (weeks 2-3)
11. Register service worker; fix favicon/theme-color; remove fabricated social proof; reconcile NAP + phone numbers + add trade license/TRN.
12. Semantic HTML for AEO: `<article>`/`<time datetime>`/`<figure>` in blog; per-author bios + `Person.sameAs`; real `dateModified`; surface llms.txt via `<link>` + build-time generation; update AI-crawler list.
13. Internal linking: add compare cluster + cookie-policy to footer; complete hub grids; reciprocal compare-hub links.
14. CWV: delete the `addEventListener` monkey-patch; `100svh` hero; `LazyMotion`; remove dead font preconnects, add real preconnects.
15. A11y: aria-labels on icon buttons; `<MotionConfig reducedMotion="user">`; dialog role+Escape+focus-trap on modals; fix contrast; label form fields.

### Phase 3 — Advanced (weeks 4-6)
16. CSP hardening (drop `unsafe-eval`, nonces, `frame-ancestors`, `dangerouslyAllowSVG:false`); pin Next; `.dev.vars` hygiene.
17. Error boundaries + custom error reporting; convert `/en` rewrite→301; locale-aware schema/breadcrumb URLs.
18. Validate hi/fr locale ROI vs GSC; backfill missing locale keys (start with `ar`, only 69 missing); decide `ar-AE`.
19. Re-encode hero/videos to landscape AVIF/WebP + posters; real availability or reframe the calendar.

### Phase 4 — Ongoing
- Weekly Screaming Frog crawl (watch: response codes, orphans, duplicate titles, directive conflicts). Monthly GSC Index Coverage + CWV review. Per-deploy: IndexNow push + sitemap regeneration.

---

## 5. MONITORING DASHBOARD
| Dimension | Metric | Tool | Alert threshold |
|---|---|---|---|
| Indexation | Indexed vs submitted | GSC Coverage | <90% submitted indexed |
| Crawl | 404s / redirect-in-sitemap | Screaming Frog (weekly) | any new 4xx from internal link |
| CWV (field) | LCP/INP/CLS p75 | CrUX + GSC (once GTM live) | LCP>2.5s, INP>200ms, CLS>0.1 |
| Titles/meta | % over length | SF / CI jest guard | any page >60/160 |
| Duplicates | duplicate title clusters | SF | >0 |
| Schema | rich-result errors | GSC Enhancements + Rich Results Test | any error |
| Hreflang | return-tag errors | GSC International Targeting / SF | >0 |
| AI visibility | citations / brand mentions | Ahrefs Brand Radar + manual ChatGPT/Perplexity checks | downward trend |
| Rankings | position for head + location terms | Ahrefs/Semrush Rank Tracker | drop >3 positions |

**Recommended SF config:** JS-rendering ON, crawl `https://rollsroycers.com`, respect-noindex, extract hreflang + structured data; compare crawl-list vs `sitemap-pages.xml`. **Note:** `robots.txt` currently **blocks AhrefsBot/SemrushBot/DataForSeoBot** — unblock them to crawl your own property with those tools.
