# 🗺️ خطة محتوى المدونة — Roadmap & Status

> **هذا الملف يحوي المحتوى الحي:** قائمة الموضوعات المخططة + المنشور + العناقيد الموضوعية.
> **القواعد الثابتة** (Workflow, Schema, Templates, ...) في [`rollsroycers-blog.md`](rollsroycers-blog.md).
> **القوانين العابرة** (i18n, Trilingual Parity, Authority, Anti-AI, ...) في [`content-laws.md`](content-laws.md).

النشاط: **Naqra FZE — تأجير سيارات رولز رويس فاخرة في دبي** (خدمة، ليست متجر منتجات). الأسطول: Phantom · Ghost · Cullinan · Dawn · Wraith · Spectre (+ نسخ Black Badge). الخدمات: wedding · airport-transfer · chauffeur · corporate · events · photoshoot · tours · hourly. الأسعار من AED 3,800/يوم (Ghost) وحتى Cullinan 6,500 و Spectre 7,500. CTA واتساب: **+971558164922**.

اللغات (حرج): **3 لغات** — `en` (الافتراضية، **بدون بادئة**) · `ar` (RTL، فصحى راقية) · `ru`. ليست ثنائية اللغة؛ لذلك أي «Bilingual Parity» في الأصل يتحول هنا إلى **Trilingual Parity (EN === AR === RU)**.

---

## 🤖 Auto-Workflow التشغيلي

> **القاعدة الذهبية:** أي رسالة تُرسل مسار **هذا الملف** أو مسار [`rollsroycers-blog.md`](rollsroycers-blog.md) — بغض النظر عن نصها — = **أمر ضمني وكامل ببدء كتابة الموضوع التالي تلقائياً**. لا تنتظر تأكيداً. لا تسأل. ابدأ التنفيذ مباشرةً.

**بروتوكول التنفيذ:**

1. أعلن سطر واحد: `"بدء كتابة #N — [العنوان]"`
2. **اقرأ [`voice.md`](voice.md) أولاً** ✅ **(معتمد — إلزامي)** — شخصية «رجل العالم»: تهكّم بريطاني راقٍ · فصحى راقية بلمسة خليجية. التزم به حرفيًا.
3. **اقرأ [`content-laws.md`](content-laws.md)** للقوانين العابرة (i18n Quarantine المعكوس + **Trilingual Parity (EN === AR === RU)** + Authority + Anti-AI)
4. **اقرأ [`rollsroycers-blog.md`](rollsroycers-blog.md)** للـ Workflow الكامل + Schema (BlogPosting) + Templates
5. اعثر على أول موضوع غير منجز (راجع قسم «خطة المواضيع — TBD» للمنهجية، وقائمة «منشور بالفعل» لتفادي التكرار)
6. نفّذ كامل الـ Workflow بدون توقف عبر اللغات الثلاث
7. **تأكد أن المحتوى ≥ 1,500 كلمة لكل لغة** — **هدف 1,500–2,500 كلمة/مقال لكل لغة من اللغات الثلاث (en/ar/ru)**. القاعدة غير القابلة للكسر.
8. **بوابة التدقيق** (لا يوجد حالياً سكربت per-article في RR — راجع التفصيل أدناه):
   - شغّل `node scripts/i18n-verify.mjs` — البوابة الآلية الحقيقية (يفحص: 0 مفاتيح i18next خام في الـ HTML المبني + لا `FAQPage` schema مكرر). تفشل = توقّف وأصلح، لا تكمل.
   - **فحوص يدوية صريحة** (لا غنى عنها):
     - عدّ الكلمات (1,500–2,500/مقال × 3 لغات).
     - **Trilingual Parity**: نفس الأقسام والعمق والـ FAQ والصور في en/ar/ru (عدد ثابت من أسئلة الـ FAQ في اللغات الثلاث).
     - **لا تسريب بادئة لغة في الروابط** (راجع §قانون عزل اللغة): في `en` لا رابط يبدأ بـ `/en/` أو `/ar/` أو `/ru/`؛ في `ar` كل رابط داخلي يبدأ `/ar/`؛ في `ru` كل رابط يبدأ `/ru/`.
     - وجود `quickAnswer` box + `coverImage` + `relatedArticles` (3–5) + **3–5 روابط داخلية في المتن** (حد أقصى 5: موضوعات + خدمات/أسطول).
   - 🔧 **مقترح (دون تنفيذه الآن):** إنشاء `scripts/blog-verify.mjs` يؤتمت هذه الفحوص اليدوية per-article (word count + trilingual parity + language-prefix leak + FAQ count ثابت + quickAnswer + coverImage + relatedArticles=3). يُبنى لاحقاً.
9. **البناء:** `npm run build` للتحقق من خلو البناء من الأخطاء.
10. **النشر:** `npm run deploy` (يشغّل `opennextjs-cloudflare build` + `deploy` + `warm-cache`).
    > ⚠️ النشر **لا يُفرّغ كاش الـ edge**: الصفحات SSG خلف كاش CDN على Cloudflare؛ مرحلة `warm-cache` بعد النشر تمتص أول render بارد. لا تتوقع تحديثاً فورياً للصفحات المخزّنة حتى تمر warm-cache.
11. **الفهرسة:** الـ sitemap يُولَّد تلقائياً (`scripts/generate-sitemap.mjs`، 67 رابط × 3 لغات شاملة en/ar/ru). بعد النشر الفعلي (عند حلول موعد النشر): قدّم الـ URL في **Google Search Console** + **IndexNow**. (المقالات المجدولة مستقبلاً لا تُفهرس حتى يحين موعد نشرها الفعلي).
12. **حدّث هذا الملف:** سجّل المقال الجديد في «منشور بالفعل» وفي عنقوده الموضوعي (Edit tool، أسطر قليلة فقط).
13. قدّم تقرير 5 أسطر.

**خطوات إنشاء مقال جديد في مدونة RR الفعلية (إلزامية بالترتيب):**

1. أضف كائن المقال في `blogArticles` Record **داخل** `src/pages/blog/[slug].tsx` (الحقول: `author` باسم شخصية حقيقية مثل Ahmed Salem / Sarah Mitchell، `category` ∈ {Guides, Luxury, Events, Tips} — أو الفئات الموجودة فعلاً: Travel, Weddings, Business, Heritage, Lifestyle — أقسام المحتوى، FAQ، `relatedArticles[]`، حقول schema/BlogPosting).
2. أضف ترجمات `ar` + `ru` in `src/data/blogTranslations.json`.
3. أضف الـ slug في `src/data/blogSlugs.json`.
4. اضبط `relatedArticles` (3–5) + **3–5 روابط داخلية في المتن** (موضوعات + خدمات/أسطول، حد أقصى 5) + `coverImage`.
5. `npm run build`.
6. بوابة التدقيق (الخطوة 8 أعلاه).
7. `npm run deploy`.
8. الفهرسة عند حلول موعد النشر الفعلي (GSC + IndexNow).

**Trigger Phrases:** "اكتب مقال رولز رويس جديد" · "اكمل المدونة" · "اكتب المقال التالي" · "ابدأ موضوع من القائمة" · "Write the next blog post" · "اكتب موضوع #N".

> ⚠️ **استثناء وحيد:** إذا الموضوع يحتاج بيانات تشغيلية حقيقية لا تملكها (مواصفة سيارة دقيقة، سعر، موقع تسليم في دبي) → **سؤال واحد مركّز** ثم تابع — و**ممنوع منعاً باتاً اختلاق الرقم**.

---

## ✅ منشور بالفعل — للمرجعية واستخدامه كـ `relatedArticles`

> **لا تُعد كتابتها.** مصدر الحقيقة: `blogArticles` Record **داخل** `src/pages/blog/[slug].tsx` (محتوى EN) + `src/data/blogTranslations.json` (ar + ru) + `src/data/blogSlugs.json`. عند التضارب → **اعتمد الكود وحدّث هذه القائمة**.

`ultimate-guide-rolls-royce-rental-dubai` · `top-scenic-drives-dubai` · `rolls-royce-wedding-car-dubai` · `business-travel-rolls-royce` · `luxury-shopping-dubai-rolls-royce` · `rolls-royce-dawn-convertible-dubai` · `dubai-luxury-car-guide-2025` · `first-time-dubai-luxury-guide` · `dubai-luxury-hotels-guide` · `dubai-motor-show-2024` · `evolution-rolls-royce-history` · `rolls-royce-spectre-electric-dubai` · `rolls-royce-black-badge-dubai` · `rolls-royce-birthday-car-dubai` · `hourly-rolls-royce-rental-dubai` · `rolls-royce-cullinan-vs-bentley-bentayga` · `rolls-royce-photoshoot-dubai-guide` · `dubai-new-year-luxury-car-rental` · `rolls-royce-phantom-vs-ghost-comparison` · `rolls-royce-chauffeur-dubai-guide` · `rolls-royce-airport-transfer-dubai` · `owns-rolls-royce-dubais-most-coveted-car` · `much-rent-ghost-dubai-clear-price` · `rolls-royce-car-definition-automotive-luxury` · `most-luxurious-car-world-available-rent-dubai` · `rolls-royce-so-expensive-dubai-insiders-breakdown` · `makes-bentley-rolls-royce-two-marques-two-owners` · `owns-rolls-royce-company-ownership-history-legacy` · `fast-does-rolls-royce-go-power-luxury` · `most-luxurious-cars-rent-dubai-right-now` · `rolls-royce-so-expensive-bespoke-truth-explained` · `owns-bentley-rolls-royce-ownership-split-explained` · `owns-worlds-costliest-car-rolls-royce-ownership` · `rolls-royce-fast-performance-elegance` · `most-luxurious-car-world-rent-dubai` · `rolls-royce-so-expensive-7-reasons-price` · `owns-bentley-rolls-royce-surprising-split` · `owns-rolls-royce-ownership-renter` · `fast-can-rolls-royce-go-top-speeds-didnt-expect` · `can-rent-luxury-cars-dubai-start-rolls-royce` · `makes-rolls-royce-craftsmanship-phantom` · `rolls-royce-phantom-dubai-luxury-rental` · `rolls-royce-wraith-black-badge-dubais-boldest-renters-choose` · `rolls-royce-so-expensive-youre-really-paying` · `rolls-royce-ghost-phantom-rent-dubai` · `owned-rolls-royce-timeline-royce-bmw` · `rolls-royce-silver-wraith-classic-legacy-dubai-lovers` · `phantom-interior-worth-renting-cabin-dubai` · `pictures-rolls-royce-phantom-see-before-renting-dubai` · `whats-phantom-worth-knowing-before-rent-dubai` · `rolls-royce-ghost-black-badge-price-rent-smarter-dubai` · `rolls-royce-ghost-2012-2017-reliability-compared` · `owns-rolls-royce-separating-cars-jet-engines` · `cullinan-rent-one-dubai` · `5-reasons-rolls-royce-out-comforts-maybach-dubai` · `can-phantom-be-rented-day-dubai-yes-heres` · `rolls-royce-ghost-series-2-price-rent-own-dubai` · `rolls-royce-bentley-maybach-rent-dubai` · `rolls-royce-made-craft-spirit-ecstasy` · `black-rolls-royce-ghost-blue-interior-dubai-bespoke-pick` · `fast-does-rolls-royce-go-top-speeds-across-fleet` · `car-phantom-rent-one-dubai` · `phantom-price-india-dubai-place-rent-one` · `rolls-royce-mercedes-better-rent-dubai` · `owns-rolls-royce-bmw-heritage-cars-rent-dubai` · `rolls-royce-british-roots-dubai-favourite` · `7-seat-cullinan-dubai-families-interior-space-comfort` · `much-does-rolls-royce-cost-day-costs-dubai` · `phantom-price-usa-rent-flagship-dubai-instead` · `choose-phantom-over-ghost-dubai` · `bentley-bentayga-rolls-royce-cullinan-specs-compared` · `rolls-royce-reliable-honest-owner-renter-perspective` · `makes-phantom-more-imposing-than-ghost` · `car-ghost-rent-dubai` · `much-most-expensive-rolls-royce-rent` · `makes-rolls-royce-most-luxurious-car-world` · `phantom-car-price-india-heres-dubai-rental-option` · `rolls-royce-ghost-2012-2017-differences-reliability` · `rolls-royce-built-goodwood-home-luxury` · `phantom-ghost-rolls-royce-fits-occasion` · `phantom-car-rent-one-dubai` · `much-rolls-royce-ghost-dubai-hire-less` · `rolls-royce-black-badge-ghost-price-dubai-rental` · `owned-rolls-royce-before-bmw-ownership-timeline` · `matte-black-white-best-phantom-colours-rent-dubai` · `most-expensive-rolls-royce-can-rent-dubai` · `bentley-rolls-royce-same-company-myth-debunked` · `makes-rolls-royce-hands-hallmark` · `2025-rolls-royce-ghost-black-badge-dubai-rental` · `much-rolls-royce-phantom-rent-dubai-aed-3800` · `rolls-royce-cullinan-series-2-price-2026-dubai-rental` · `ghost-phantom-rolls-royce-rent-dubai` · `wraith-black-badge-worth-renting-dubai-honest-look` · `black-on-black-rolls-royce-wraith-dubais-most-sinister-pick` · `makes-rolls-royce-so-expensive-closer-look` · `owns-rolls-royce-marque-clear-answer-renters` · `spectre-bailey-dog-inspired-design-dubai-first` · `rolls-royce-british-heritage-marque` · `owns-rolls-royce-now-current-state-marque` · `invented-rolls-royce-royce-rolls-partnership` · `founded-rolls-royce-charles-rolls-henry-royce-legend` · `does-rolls-royce-make-cars-bespoke-beyond` · `cullinan-seatbelt-recall-explained-keep-dubai-renters-safe` · `2025-rolls-royce-spectre-black-badge-electric-luxury-dubai` · `much-rolls-royce-renting-dubai-makes-sense` · `much-rolls-royce-cars-model-by-model-prices-2026`




**جدول مرجعي مختصر (slug | category | author | عنوان EN):**

| # | slug | category | author | عنوان EN |
|---|------|----------|--------|----------|
| 1 | `ultimate-guide-rolls-royce-rental-dubai` | Guides | Ahmed Salem | The Ultimate Guide to Rolls-Royce Rental in Dubai |
| 2 | `top-scenic-drives-dubai` | Travel | Sarah Mitchell | Top Scenic Drives in Dubai |
| 3 | `rolls-royce-wedding-car-dubai` | Weddings | Fatima Al Rashid | Rolls-Royce Wedding Car in Dubai |
| 4 | `business-travel-rolls-royce` | Business | James Thompson | Business Travel with Rolls-Royce |
| 5 | `luxury-shopping-dubai-rolls-royce` | Tips | Layla Al-Mansouri | Luxury Shopping in Dubai by Rolls-Royce |
| 6 | `rolls-royce-dawn-convertible-dubai` | Luxury | Omar Al-Rashid | Rolls-Royce Dawn Convertible in Dubai |
| 7 | `dubai-luxury-car-guide-2025` | Guides | Editorial Team | Dubai Luxury Car Guide 2025 |
| 8 | `first-time-dubai-luxury-guide` | Guides | Editorial Team | First-Time Dubai Luxury Guide |
| 9 | `dubai-luxury-hotels-guide` | Luxury | Editorial Team | Dubai Luxury Hotels Guide |
| 10 | `dubai-motor-show-2024` | Events | Editorial Team | Dubai Motor Show 2024 |
| 11 | `evolution-rolls-royce-history` | Heritage | Editorial Team | The Evolution of Rolls-Royce History |
| 12 | `rolls-royce-spectre-electric-dubai` | Guides | Ahmed Salem | Rolls-Royce Spectre Electric in Dubai |
| 13 | `rolls-royce-black-badge-dubai` | Guides | Ahmed Salem | Rolls-Royce Black Badge in Dubai |
| 14 | `rolls-royce-birthday-car-dubai` | Tips | Fatima Al Rashid | Rolls-Royce Birthday Car in Dubai |
| 15 | `hourly-rolls-royce-rental-dubai` | Guides | James Thompson | Hourly Rolls-Royce Rental in Dubai |
| 16 | `rolls-royce-cullinan-vs-bentley-bentayga` | Guides | Sarah Mitchell | Rolls-Royce Cullinan vs Bentley Bentayga |
| 17 | `rolls-royce-photoshoot-dubai-guide` | Tips | Layla Al-Mansouri | Rolls-Royce Photoshoot Dubai Guide |
| 18 | `dubai-new-year-luxury-car-rental` | Events | Editorial Team | Dubai New Year Luxury Car Rental |
| 19 | `rolls-royce-phantom-vs-ghost-comparison` | Guides | James Thompson | Rolls-Royce Phantom vs Ghost Comparison |
| 20 | `rolls-royce-chauffeur-dubai-guide` | Guides | Editorial Team | Rolls-Royce Chauffeur Dubai Guide |
| 21 | `rolls-royce-airport-transfer-dubai` | Guides | Editorial Team | Rolls-Royce Airport Transfer in Dubai |
| 22 | `owns-rolls-royce-dubais-most-coveted-car` | Guides | Ahmed Salem | Who Owns Rolls-Royce? The Story Behind Dubai's Most Coveted Car |
| 23 | `much-rent-ghost-dubai-clear-price` | Pricing | Editorial Team | How Much to Rent a Ghost in Dubai? A Clear Price Guide |
| 24 | `rolls-royce-car-definition-automotive-luxury` | Guides | Editorial Team | What Is a Rolls-Royce Car? The Definition of Automotive Luxury |
| 25 | `most-luxurious-car-world-available-rent-dubai` | Luxury | Ahmed Salem | The Most Luxurious Car in the World, Available to Rent in Dubai |
| 26 | `rolls-royce-so-expensive-dubai-insiders-breakdown` | Guides | Ahmed Salem | Why Are Rolls-Royce So Expensive? A Dubai Insider's Breakdown |
| 27 | `makes-bentley-rolls-royce-two-marques-two-owners` | Guides | Fatima Al Rashid | Who Makes Bentley vs Rolls-Royce? Two Marques, Two Owners |
| 28 | `owns-rolls-royce-company-ownership-history-legacy` | Guides | Ahmed Salem | Who Owns the Rolls-Royce Company? Ownership, History and Legacy |
| 29 | `fast-does-rolls-royce-go-power-luxury` | Guides | Ahmed Salem | How Fast Does a Rolls-Royce Go? Power Behind the Luxury |
| 30 | `most-luxurious-cars-rent-dubai-right-now` | Guides | Ahmed Salem | What Are the Most Luxurious Cars to Rent in Dubai Right Now |
| 31 | `rolls-royce-so-expensive-bespoke-truth-explained` | Guides | Ahmed Salem | Why Is Rolls-Royce So Expensive? The Bespoke Truth, Explained |
| 32 | `owns-bentley-rolls-royce-ownership-split-explained` | Guides | Ahmed Salem | Who Owns Bentley and Rolls-Royce? The Ownership Split Explained |
| 33 | `owns-worlds-costliest-car-rolls-royce-ownership` | Guides | Ahmed Salem | Who Owns the World's Costliest Car? Inside Rolls-Royce Ownership |
| 34 | `rolls-royce-fast-performance-elegance` | Guides | Ahmed Salem | How Fast Is a Rolls-Royce? Performance and Elegance |
| 35 | `most-luxurious-car-world-rent-dubai` | Guides | Ahmed Salem | The Most Luxurious Car in the World to Rent in Dubai |
| 36 | `rolls-royce-so-expensive-7-reasons-price` | Guides | Ahmed Salem | Why Rolls-Royce Is So Expensive: 7 Reasons Behind the Price |
| 37 | `owns-bentley-rolls-royce-surprising-split` | Guides | Ahmed Salem | Who Owns Bentley and Rolls-Royce? The Surprising Split |
| 38 | `owns-rolls-royce-ownership-renter` | Guides | Ahmed Salem | Who Owns Rolls-Royce? The Ownership Story Every Renter Should Know |
| 39 | `fast-can-rolls-royce-go-top-speeds-didnt-expect` | Guides | Ahmed Salem | How Fast Can a Rolls-Royce Go? Top Speeds You Didn't Expect |
| 40 | `can-rent-luxury-cars-dubai-start-rolls-royce` | Guides | Editorial Team | Where Can You Rent Luxury Cars in Dubai? Start With Rolls-Royce |
| 41 | `makes-rolls-royce-craftsmanship-phantom` | Luxury | Ahmed Salem | Who Makes Rolls-Royce? The Craftsmanship Behind Every Phantom |
| 42 | `rolls-royce-phantom-dubai-luxury-rental` | Guides | James Thompson | What Is a Rolls-Royce Phantom? A Dubai Luxury Rental Guide |
| 43 | `rolls-royce-wraith-black-badge-dubais-boldest-renters-choose` | Luxury | Fatima Al Rashid | Rolls-Royce Wraith Black Badge: Why Dubai's Boldest Renters Choose It |
| 44 | `rolls-royce-so-expensive-youre-really-paying` | Pricing | Ahmed Salem | Why Is Rolls-Royce So Expensive? What You're Really Paying For |
| 45 | `rolls-royce-ghost-phantom-rent-dubai` | Guides | James Thompson | Rolls-Royce Ghost vs Phantom: Which to Rent in Dubai? |
| 46 | `owned-rolls-royce-timeline-royce-bmw` | Heritage | Editorial Team | Who Owned Rolls-Royce? A Timeline From Royce to BMW |
| 47 | `rolls-royce-silver-wraith-classic-legacy-dubai-lovers` | Heritage | Fatima Al Rashid | The Rolls-Royce Silver Wraith: A Classic Legacy for Dubai Lovers |
| 48 | `phantom-interior-worth-renting-cabin-dubai` | Guides | Ahmed Salem | Is the Phantom Interior Worth It? Renting the Cabin in Dubai |
| 49 | `pictures-rolls-royce-phantom-see-before-renting-dubai` | Guides | Ahmed Salem | Pictures of a Rolls-Royce Phantom: See It Before Renting in Dubai |
| 50 | `whats-phantom-worth-knowing-before-rent-dubai` | Guides | Editorial Team | What's a Phantom Worth Knowing Before You Rent in Dubai? |
| 51 | `rolls-royce-ghost-black-badge-price-rent-smarter-dubai` | Pricing | Editorial Team | Rolls-Royce Ghost Black Badge Price: Rent Smarter in Dubai |
| 52 | `rolls-royce-ghost-2012-2017-reliability-compared` | Guides | Editorial Team | Rolls-Royce Ghost 2012 vs 2017: Reliability Compared |
| 53 | `owns-rolls-royce-separating-cars-jet-engines` | Guides | Ahmed Salem | Who Owns Rolls-Royce? Separating the Cars From the Jet Engines |
| 54 | `cullinan-rent-one-dubai` | Guides | Editorial Team | What Is a Cullinan, and Why Rent One in Dubai? |
| 55 | `5-reasons-rolls-royce-out-comforts-maybach-dubai` | Guides | Editorial Team | 5 Reasons Rolls-Royce Out-Comforts the Maybach in Dubai |
| 56 | `can-phantom-be-rented-day-dubai-yes-heres` | Guides | Editorial Team | Can the Phantom Be Rented for a Day in Dubai? Yes, Here's How |
| 57 | `rolls-royce-ghost-series-2-price-rent-own-dubai` | Pricing | Ahmed Salem | Rolls-Royce Ghost Series 2 Price: Rent vs Own in Dubai |
| 58 | `rolls-royce-bentley-maybach-rent-dubai` | Guides | Editorial Team | Rolls-Royce vs Bentley vs Maybach: Which to Rent in Dubai? |
| 59 | `rolls-royce-made-craft-spirit-ecstasy` | Heritage | Fatima Al Rashid | Where Are Rolls-Royce Made? The Craft Behind the Spirit of Ecstasy |
| 60 | `black-rolls-royce-ghost-blue-interior-dubai-bespoke-pick` | Lifestyle | Fatima Al Rashid | Black Rolls-Royce Ghost with Blue Interior: A Dubai Bespoke Pick |
| 61 | `fast-does-rolls-royce-go-top-speeds-across-fleet` | Guides | Editorial Team | How Fast Does a Rolls-Royce Go? Top Speeds Across the Fleet |
| 62 | `car-phantom-rent-one-dubai` | Guides | Editorial Team | What Car Is a Phantom, and Why Rent One in Dubai? |
| 63 | `phantom-price-india-dubai-place-rent-one` | Pricing | Editorial Team | Phantom Price in India? Why Dubai Is the Place to Rent One |
| 64 | `rolls-royce-mercedes-better-rent-dubai` | Luxury | Sarah Mitchell | Rolls-Royce vs Mercedes: Which Is Better to Rent in Dubai? |
| 65 | `owns-rolls-royce-bmw-heritage-cars-rent-dubai` | Heritage | Ahmed Salem | Who Owns Rolls-Royce? BMW, Heritage and the Cars We Rent in Dubai |
| 66 | `rolls-royce-british-roots-dubai-favourite` | Heritage | Ahmed Salem | Where Is Rolls-Royce From? Tracing the Marque's English Origins |
| 67 | `7-seat-cullinan-dubai-families-interior-space-comfort` | Luxury | Sarah Mitchell | 7-Seater Cullinan Interior: Space and Comfort for Dubai Trips |
| 68 | `much-does-rolls-royce-cost-day-costs-dubai` | Tips | James Thompson | How Much Does a Rolls-Royce Cost? 2026 Price Guide for Dubai |
| 69 | `phantom-price-usa-rent-flagship-dubai-instead` | Pricing | James Thompson | Rolls-Royce Phantom Price USA? Why Renting in Dubai Is the Smarter Choice |
| 70 | `choose-phantom-over-ghost-dubai` | Guides | Sarah Mitchell | Should You Choose a Phantom Over a Ghost in Dubai? |
| 71 | `bentley-bentayga-rolls-royce-cullinan-specs-compared` | Luxury | Sarah Mitchell | Bentley Bentayga vs Rolls-Royce Cullinan: Specs Compared for Dubai Drivers |
| 72 | `phantom-car-price-india-heres-dubai-rental-option` | Pricing | Ahmed Salem | Rolls-Royce Phantom Price in India vs a Dubai Daily Rental |
| 73 | `rolls-royce-built-goodwood-home-luxury` | Luxury | Ahmed Salem | Where Is Rolls-Royce Built? The Workshop Behind Every Phantom |
| 74 | `owned-rolls-royce-before-bmw-ownership-timeline` | Guides | Ahmed Salem | Who Owned Rolls-Royce Before BMW? The Ownership Timeline |
| 75 | `matte-black-white-best-phantom-colours-rent-dubai` | Guides | Ahmed Salem | What Colour Is the Rolls-Royce Phantom? Dubai's Bespoke Palette |
| 76 | `most-expensive-rolls-royce-can-rent-dubai` | Guides | Ahmed Salem | What Is the Most Expensive Rolls-Royce? Price & Dubai Access |
| 77 | `rolls-royce-reliable-honest-owner-renter-perspective` | Guides | Ahmed Salem | Is Rolls-Royce Reliable? An Honest Owner & Renter's Perspective |
| 78 | `makes-phantom-more-imposing-than-ghost` | Guides | James Thompson | What Makes the Phantom More Imposing Than the Ghost? |
| 79 | `car-ghost-rent-dubai` | Luxury | Sarah Mitchell | What Car Is a Ghost, and Why Rent One in Dubai? |
| 80 | `much-most-expensive-rolls-royce-rent` | Pricing | James Thompson | How Much for the Most Expensive Rolls-Royce Ever Built? |
| 81 | `makes-rolls-royce-most-luxurious-car-world` | Guides | Ahmed Salem | What Makes Rolls-Royce the Most Luxurious Car in the World |
| 82 | `rolls-royce-ghost-2012-2017-differences-reliability` | Guides | Ahmed Salem | Ghost 2012 vs 2017: Key Differences and Reliability Compared |
| 83 | `phantom-ghost-rolls-royce-fits-occasion` | Guides | Ahmed Salem | Phantom vs Ghost: Which Rolls-Royce Fits Your Occasion? |
| 84 | `phantom-car-rent-one-dubai` | Luxury | Ahmed Salem | What Is a Phantom Car? Rolls-Royce's Flagship for Dubai |
| 85 | `much-rolls-royce-ghost-dubai-hire-less` | Pricing | Ahmed Salem | How Much for a Rolls-Royce Ghost? Price & Dubai Rental Guide |
| 86 | `rolls-royce-black-badge-ghost-price-dubai-rental` | Pricing | Ahmed Salem | How Much Is the Black Badge Ghost to Rent in Dubai? |
| 87 | `bentley-rolls-royce-same-company-myth-debunked` | Guides | Ahmed Salem | Are Bentley and Rolls-Royce the Same Company? The Real Story |
| 88 | `makes-rolls-royce-hands-hallmark` | Guides | Ahmed Salem | Who Makes the Rolls-Royce? The Hands Behind the Hallmark |
| 89 | `2025-rolls-royce-ghost-black-badge-dubai-rental` | Luxury | Ahmed Salem | What's New in the 2025 Ghost Black Badge for Dubai? |
| 90 | `much-rolls-royce-phantom-rent-dubai-aed-3800` | Pricing | Ahmed Salem | How Much for a Rolls-Royce Phantom? Flagship Price & Dubai Hire |
| 91 | `rolls-royce-cullinan-series-2-price-2026-dubai-rental` | Pricing | Ahmed Salem | How Much Is the Cullinan Series 2? Renting It in Dubai |
| 92 | `ghost-phantom-rolls-royce-rent-dubai` | Guides | Ahmed Salem | What Does the Rolls-Royce Ghost Look Like? A Dubai Visual Guide |
| 93 | `wraith-black-badge-worth-renting-dubai-honest-look` | Luxury | Ahmed Salem | Is the Wraith Black Badge Worth Renting in Dubai? An Honest Look |
| 94 | `black-on-black-rolls-royce-wraith-dubais-most-sinister-pick` | Luxury | Ahmed Salem | Why the Black-on-Black Wraith Commands Attention in Dubai |
| 95 | `makes-rolls-royce-so-expensive-closer-look` | Pricing | Ahmed Salem | What Makes Rolls-Royce So Expensive? A Closer Look |
| 96 | `owns-rolls-royce-marque-clear-answer-renters` | Guides | Ahmed Salem | Who Owns the Rolls-Royce? Cars, Engines and the BMW Connection |
| 97 | `spectre-bailey-dog-inspired-design-dubai-first` | Guides | Ahmed Salem | Behind the Spectre's Bailey Dog Inspiration: Renting It in Dubai |
| 98 | `rolls-royce-british-heritage-marque` | Heritage | Ahmed Salem | Is Rolls-Royce British? Untangling Ownership and Origin |
| 99 | `owns-rolls-royce-now-current-state-marque` | Guides | Ahmed Salem | Who Owns Rolls-Royce Now? BMW and the Modern Era Explained |
| 100 | `founded-rolls-royce-charles-rolls-henry-royce-legend` | Heritage | Ahmed Salem | Who Founded Rolls-Royce? The Partnership That Changed Motoring |
| 101 | `does-rolls-royce-make-cars-bespoke-beyond` | Guides | Ahmed Salem | What Does Rolls-Royce Make Today? The Full Model Lineup |
| 102 | `cullinan-seatbelt-recall-explained-keep-dubai-renters-safe` | Guides | Ahmed Salem | The 102-Cullinan Recall: What Dubai Renters Should Know |
| 103 | `2025-rolls-royce-spectre-black-badge-electric-luxury-dubai` | Luxury | Ahmed Salem | 2025 Spectre Black Badge: Dubai's First Electric Rolls-Royce |
| 104 | `2023-rolls-royce-ghost-black-badge-dubai-rental` | Luxury | Ahmed Salem | Is the 2023 Ghost Black Badge Worth Renting in Dubai? |
| 105 | `2025-rolls-royce-cullinan-black-badge-dubai-rental` | Guides | James Thompson | 2025 Rolls-Royce Cullinan Black Badge: Dubai Rental Guide |
| 106 | `2025-rolls-royce-cullinan-black-badge-dubais-flagship-suv` | Luxury | Ahmed Salem | Is the 2025 Cullinan Black Badge Worth Renting in Dubai? |
| 107 | `bentley-bentayga-rolls-royce-cullinan-rent` | Comparisons | Ahmed Salem | Bentley Bentayga vs. Rolls-Royce Cullinan: Which to Rent in Dubai? |
| 108 | `bentley-bentayga-vs-rolls-royce-cullinan` | Guides | Ahmed Salem | Bentley Bentayga vs. Rolls-Royce Cullinan: Ultimate Luxury SUV Duel |
| 109 | `company-owns-rolls-royce-bmw-connection-explained` | Guides | Ahmed Salem | What Company Owns Rolls-Royce Motor Cars Today |
| 110 | `cullinan-black-badge-interior-dubais-dark-luxury` | Luxury | Ahmed Salem | What Makes the Cullinan Black Badge Interior So Bold in Dubai? |
| 111 | `cullinan-rolls-royces-truck-luxury-hauling-dubai` | Luxury | Ahmed Salem | Is the Cullinan a Rolls-Royce Truck? The SUV Explained in Dubai |
| 112 | `did-rolls-royce-start-making-cars-early-years` | Heritage | Ahmed Salem | When Did Rolls-Royce Start Making Cars? A Brief History |
| 113 | `does-phantom-look-like-dubais-flagship-up-close` | Luxury | Ahmed Salem | What Does the Phantom Look Like Inside and Out in Dubai? |
| 114 | `ghost-car-rent-one-dubai` | Guides | Editorial Team | What Is a Ghost Car, and Why Rent One in Dubai? |
| 115 | `ghost-car-rolls-royces-sedan-explained-dubai` | Guides | Ahmed Salem | What Is the Ghost Car Known For? A Dubai Renter's Primer |
| 116 | `ghost-series-ii-series-rent-dubai` | Luxury | Ahmed Salem | 2025 Rolls-Royce Ghost Series II: What It Brings to Dubai |
| 117 | `images-rolls-royce-phantom-see-dubais-flagship-rental` | Luxury | Ahmed Salem | Pictures of the Rolls-Royce Phantom: Visual Rental Guide |
| 118 | `invented-rolls-royce-royce-rolls-partnership` | Heritage | Ahmed Salem | Who Invented Rolls-Royce? The Visionaries Behind the Marque |
| 119 | `is-rolls-royce-german-ownership-myth` | Guides | Ahmed Salem | Is Rolls-Royce German? Untangling the BMW Ownership Myth |
| 120 | `long-does-take-build-rolls-royce-process` | Guides | Ahmed Salem | How Long Does It Take to Build a Rolls-Royce by Hand? |
| 121 | `made-rolls-royce-ghost-dubais-favourite` | Guides | Ahmed Salem | Who Made the Ghost, and Why It Matters to Dubai Renters |
| 122 | `makes-rolls-royce-cars-goodwood-craft` | Guides | Ahmed Salem | Behind the Badge: Who Really Makes Rolls-Royce Cars |
| 123 | `most-expensive-car-company-rolls-royce` | Pricing | Ahmed Salem | What Is the Most Expensive Car Company in the World Today |
| 124 | `much-rolls-royce-ghost-daily-rental-rates-dubai` | Pricing | Ahmed Salem | How Much Is a Rolls-Royce Ghost? Daily Rental Rates in Dubai |
| 125 | `much-rolls-royce-phantom-own-rent-dubai` | Pricing | Ahmed Salem | How Much Is a Rolls-Royce Phantom? And What It Costs to Rent in Dubai |
| 126 | `much-rolls-royce-renting-dubai-makes-sense` | Pricing | Ahmed Salem | How Much Is a Rolls-Royce? 2026 Pricing & Dubai Hire Explained |
| 127 | `much-rolls-royce-sets-back-aed-3800-day-rent` | Pricing | Ahmed Salem | How Much a Rolls-Royce Really Costs (And How to Drive One Cheaper) |
| 128 | `much-rolls-royce-smarter-way-drive-one-dubai` | Pricing | Ahmed Salem | How Much Is a Rolls-Royce? Renting as the Smart Choice |
| 129 | `much-rr-rent-dubai-buy-outright` | Pricing | Ahmed Salem | How Much Is an RR? Rolls-Royce Prices & Dubai Rental Costs |
| 130 | `owns-rolls-royce-car-company-ownership-heritage-future` | Guides | Ahmed Salem | Who Owns Rolls-Royce Car Company? Ownership, Heritage, Future |
| 131 | `owns-rolls-royce-cars-rolls-royce-engines-difference` | Guides | Ahmed Salem | Who Owns Rolls-Royce Cars? The Goodwood Marque Explained |
| 132 | `owns-rolls-royce-dubai-insiders-brand` | Heritage | James Thompson | Who Owns Rolls-Royce Today? A Dubai Insider's Brand Guide |
| 133 | `owns-rolls-royce-motor-cars-definitive-answer` | Guides | Ahmed Salem | The Ultimate Guide to Who Owns Rolls-Royce Motor Cars |
| 134 | `rolls-royce-before-rent` | Luxury | Ahmed Salem | What Is a Rolls-Royce? The Hallmarks of the World's Finest Car |
| 135 | `rolls-royce-cars-made-goodwood-england` | Heritage | Ahmed Salem | Where Are Rolls-Royce Cars Made? Inside Goodwood, England |
| 136 | `rolls-royce-cullinan-bentley-bentayga-rent-dubai` | Guides | Editorial Team | Rolls-Royce Cullinan vs Bentley Bentayga: Which to Rent in Dubai? |
| 137 | `rolls-royce-cullinan-black-badge-price-2026-dubai` | Guides | Fatima Al Rashid | Rolls-Royce Cullinan Black Badge Price 2026 Dubai |
| 138 | `rolls-royce-cullinan-black-badge-price-dubai-renters` | Pricing | Ahmed Salem | Rolls-Royce Cullinan Black Badge Price: A Dubai Renter's Guide |
| 139 | `rolls-royce-cullinan-matte-black-dubais-boldest-suv-glow` | Guides | Ahmed Salem | The Rolls-Royce Cullinan Matte Black: Dubai's Boldest SUV Glow |
| 140 | `rolls-royce-german-untangling-bmw-ownership-myth` | Heritage | Ahmed Salem | Is Rolls-Royce German or British? The Real Answer |
| 141 | `rolls-royce-ghost-2012-vs-2017-reliability` | Guides | Ahmed Salem | Rolls-Royce Ghost 2012 vs. 2017 Reliability: Honest Comparison |
| 142 | `rolls-royce-ghost-right-dubai-rental` | Guides | Fatima Al Rashid | Is the Rolls-Royce Ghost Right for You? A Dubai Rental Guide |
| 143 | `rolls-royce-ghost-vs-phantom-comparison` | Guides | Ahmed Salem | Rolls-Royce Ghost vs. Phantom: Ultimate Comparison |
| 144 | `rolls-royce-made-home-bespoke-luxury` | Luxury | James Thompson | Where Is Rolls-Royce Made? The Home of Bespoke Luxury |
| 145 | `rolls-royce-marque-defines-automotive-luxury` | Luxury | Ahmed Salem | What Is Rolls-Royce? A Newcomer's Guide to the Ultimate Luxury Car |
| 146 | `rolls-royce-more-comfortable-than-maybach` | Guides | Ahmed Salem | Is Rolls-Royce More Comfortable Than Mercedes-Maybach? A Dubai Comparison |
| 147 | `rolls-royce-more-comfortable-than-maybach-dubai-verdict` | Guides | Ahmed Salem | Are Rolls-Royce More Comfortable Than a Maybach? Dubai Verdict |
| 148 | `rolls-royce-phantom-ghost-renters-comparison-dubai` | Guides | Editorial Team | Rolls-Royce Phantom vs Ghost: A Renter's Comparison in Dubai |
| 149 | `rolls-royce-phantom-price-india-rent-daily-dubai` | Luxury | Ahmed Salem | Phantom Price in India Explained: The Dubai Rental Alternative |
| 150 | `rolls-royce-phantom-price-india-rent-flagship-dubai` | Pricing | Ahmed Salem | Phantom Price in India vs Dubai: Where to Experience It |
| 151 | `rolls-royce-reliability-honest-perspective` | Guides | Ahmed Salem | Is Rolls-Royce Reliable? The Honest Verdict After Years of Renting |
| 152 | `rolls-royce-so-expensive-bespoke-reality` | Pricing | James Thompson | Why Is a Rolls-Royce So Expensive? The Bespoke Reality |
| 153 | `rolls-royce-spectre-black-badge-price-2026-dubai` | Pricing | Ahmed Salem | How Much Is the Spectre Black Badge? Rent the EV in Dubai |
| 154 | `rolls-royce-spectre-black-badge-price-dubai-rental` | Pricing | Ahmed Salem | How Much Is the Spectre Black Badge to Rent in Dubai? |
| 155 | `rolls-royce-spectre-news-december-2025-means-dubai` | Guides | Ahmed Salem | Spectre Update December 2025: The Electric Rolls-Royce in Dubai |
| 156 | `rolls-royce-spectre-review-ev-luxury` | Reviews | Ahmed Salem | Rolls-Royce Spectre Review: The Pinnacle of EV Luxury |
| 157 | `rolls-royce-vs-bentley-vs-maybach-comparison` | Guides | Ahmed Salem | Rolls-Royce vs. Bentley vs. Maybach: Ultimate Dubai Rental Guide |
| 158 | `silver-ghost-theft-recovery-rolls-royce-legend-dubai` | Heritage | Ahmed Salem | Stolen and Recovered: The Silver Ghost Story for Dubai Enthusiasts |
| 159 | `started-rolls-royce-1904-meeting-began-all` | Heritage | Ahmed Salem | Who Started Rolls-Royce? The Founders Behind the Legend |
| 160 | `was-rolls-royce-founded-1904-legend` | Heritage | Ahmed Salem | When Was Rolls-Royce Founded? Origins of an Icon |
| 161 | `where-are-rolls-royce-cars-made` | Guides | Ahmed Salem | Where Are Rolls-Royce Cars Made? Inside Goodwood, England |
| 162 | `white-on-white-rolls-royce-ghost-dubais-cleanest-statement` | Weddings | Ahmed Salem | Why the White-on-White Ghost Is Perfect for Dubai Weddings |
| 163 | `who-makes-rolls-royce-engines` | Guides | Ahmed Salem | Who Makes Rolls-Royce Engines? Cars vs. Jet Division Explained |
| 164 | `much-rolls-royce-cars-model-by-model-prices-2026` | Pricing | Ahmed Salem | How Much Are Rolls-Royce Cars to Buy vs Rent in Dubai? |


> **الفئات (categories) المتاحة للمقالات الجديدة:** `Guides` · `Luxury` · `Events` · `Tips` — بالإضافة إلى الفئات الموجودة فعلاً في الكود: `Travel` · `Weddings` · `Business` · `Heritage` · `Lifestyle`. التزم بإحداها ولا تخترع فئة جديدة دون حاجة.

---

## 📝 خطة المواضيع — TBD (قيد النقاش)

> **قائمة المواضيع الكاملة ✅ جاهزة:** 700 عنوان في [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) (كل عنوان مربوط بكلمة مفتاحية + حجم بحث + نية + رابط داخلي، موزّعة على 5 عناقيد). هذا القسم يشرح **منهجية اختيار الموضوع** ويعطي **أمثلة توضيحية** لكل عنقود — للمرجعية؛ والقائمة التنفيذية الكاملة في ملف العناوين.

**منهجية اختيار الموضوع (3 محاور لكل موضوع مرشّح):**

1. **حجم البحث / الطلب (Demand):** هل هناك طلب فعلي على الكلمة المفتاحية في سوق دبي؟ أعطِ الأولوية للمواضيع ذات الحجم القابل للتحقق (تأجير + موديل، خدمة + موقع، مقارنة + منافس).
2. **العنقود الموضوعي (Cluster):** كل موضوع يجب أن ينتمي لعنقود من العناقيد الخمسة أدناه ويربط داخلياً بـ **3–5 وجهات (حد أقصى 5):** موضوعات من نفس العنقود/المحور + صفحات خدمات/أسطول مهمة — هذا يبني السلطة الموضوعية (topical authority) ويغذّي الـ internal linking دون إفراط.
3. **نية البحث (Search Intent):** صنّف الموضوع — `informational` (دليل/شرح)، `commercial` (مقارنة/أيهما أفضل)، `transactional` (استئجار/سعر/حجز)، `navigational` (علامة/موديل بعينه). وازِن المزيج بحيث تخدم رحلة المستأجر كاملةً.

**أمثلة منهجية توضيحية لكل عنقود (أمثلة لا قائمة نهائية):**

- **عنقود الأسطول (Fleet):** «دليل Phantom للزفاف في دبي» · «Cullinan للعائلات والسفاري الصحراوي» · «Ghost vs Phantom: أيهما تستأجر؟» · «Dawn المكشوفة لجولات الكورنيش» · «Spectre الكهربائية: تجربة القيادة الصامتة في دبي» · «متى تختار نسخة Black Badge؟»
- **عنقود الخدمات (Services):** «سائق خاص رولز رويس لاجتماعات DIFC» · «استقبال مطار DXB برولز رويس (Meet & Greet)» · «باقة زفاف رولز رويس في دبي» · «تأجير بالساعة للتسوق في Dubai Mall» · «رولز رويس للفعاليات والمؤتمرات في دبي» · «جلسة تصوير احترافية برولز رويس».
- **عنقود المواقع (Locations):** «أفضل جولة رولز رويس في Downtown Dubai» · «تصوير على نخلة جميرا (Palm Jumeirah)» · «رولز رويس في Dubai Marina و JBR» · «تسليم رولز رويس في Business Bay» · «جولة الشيخ زايد وبرج خليفة».
- **عنقود المقارنات (Comparisons):** «Cullinan vs Bentley Bentayga» · «Phantom vs Mercedes-Maybach S680» · «Wraith vs Ferrari: تجربتان مختلفتان» · «Ghost vs Bentley Flying Spur» · «داخلياً: Phantom vs Ghost».
- **عنقود أدلة المستأجر والأسعار (Buyer & Pricing):** «متطلبات استئجار رولز رويس في دبي (رخصة/تأمين/وديعة)» · «دليل أسعار التأجير اليومي بالـ AED» · «تأجير بالساعة vs باليوم: أيهما أوفر؟» · «التأمين ومناطق التسليم (delivery zones) في دبي» · «دليل المستأجر لأول مرة في دبي».

> **قاعدة الصور (✅ [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md)):** صورتان لكل مقال — **Cover** (حقل `image`) = `/images/blog/<slug>-cover.jpg` (**JPG** 1200×630؛ يُستخدم كـ og:image/JSON-LD فلا WebP له)، و**Inline** (كتلة `{type:'image'}`) = `/images/blog/<slug>-inline.webp` (WebP 1600×900). ملاحظة بنية: `images.unoptimized:true` (لا تحويل تلقائي عبر `/_next/image`) — صدّر الأبعاد جاهزة.
> **قاعدة الترابط:** **3–5 روابط داخلية لكل مقال (حد أقصى 5)** = موضوعات ذات صلة + صفحات خدمات/أسطول مهمة · `relatedArticles[]` = **3–5** (يُفضّل من نفس العنقود/المحور).

---

## 🕸️ العناقيد الموضوعية (Topic Clusters)

> استخدمها لاختيار `relatedArticles` (3–5) ولـ **3–5 روابط داخلية في المتن (حد أقصى 5)** تمزج موضوعات ذات صلة + صفحات خدمات/أسطول. روابط الوجهات داخل النص تتبع §قانون عزل اللغة (en بلا بادئة، ar=/ar/، ru=/ru/).

| العنقود | يربط بـ (وجهات الـ silo) | المقالات المنشورة فعلاً |
|---------|--------------------------|--------------------------|
| **1. الأسطول / Fleet** [Phantom · Ghost · Cullinan · Dawn · Wraith · Spectre · Black Badge] | `/fleet/<model>` (مثل `/fleet/ghost`) | `rolls-royce-dawn-convertible-dubai` · `rolls-royce-spectre-electric-dubai` · `rolls-royce-black-badge-dubai` · `evolution-rolls-royce-history` |
| **2. الخدمات / Services** [wedding · airport-transfer · chauffeur · corporate · events · photoshoot · tours · hourly] | `/services/<service>` (مثل `/services/wedding`) | `rolls-royce-wedding-car-dubai` · `rolls-royce-birthday-car-dubai` · `hourly-rolls-royce-rental-dubai` · `rolls-royce-chauffeur-dubai-guide` · `rolls-royce-airport-transfer-dubai` · `business-travel-rolls-royce` · `rolls-royce-photoshoot-dubai-guide` |
| **3. المواقع / Locations** [Downtown · Marina · Palm Jumeirah · JBR · DIFC · Business Bay] | صفحات المواقع + روابط داخل النص للمعالم | `top-scenic-drives-dubai` · `luxury-shopping-dubai-rolls-royce` · `dubai-luxury-hotels-guide` · `rolls-royce-photoshoot-dubai-guide` |
| **4. المقارنات / Comparisons** [vs Bentley · vs Mercedes-Maybach · vs Ferrari · داخلي Phantom vs Ghost · Cullinan vs غيره] | `/fleet/<model>` للموديل المقارَن + `/compare` إن وُجد | `rolls-royce-cullinan-vs-bentley-bentayga` · `rolls-royce-phantom-vs-ghost-comparison` · `makes-bentley-rolls-royce-two-marques-two-owners` |
| **5. أدلة المستأجر والأسعار / Buyer & Pricing** [requirements · pricing AED · hourly vs daily · insurance · delivery zones] | `/pricing` + `/services/hourly` + صفحات الشروط | `ultimate-guide-rolls-royce-rental-dubai` · `first-time-dubai-luxury-guide` · `dubai-luxury-car-guide-2025` · `dubai-new-year-luxury-car-rental` · `dubai-motor-show-2024` |

> ملاحظة: بعض المقالات قد تخدم أكثر من عنقود (مثل `rolls-royce-photoshoot-dubai-guide` يخدم الخدمات والمواقع معاً)؛ عند اختيار `relatedArticles` رجّح العنقود الأقرب لنية المقال الجديد.

---

## 🌐 قانون عزل اللغة (i18n Quarantine Law) — **معكوس عن CairoVolt**

> ⚠️ **قلب جوهري عن الأصل.** في CairoVolt كانت روابط EN لازم **تبدأ بـ `/en/`**. هنا **العكس تماماً**: في rollsroycers، **`en` هي اللغة الافتراضية بدون بادئة**.

- **محتوى EN:** كل رابط داخلي **بلا بادئة لغة** — `/fleet/ghost` · `/services/wedding` · `/blog/<slug>` · `/pricing`.
- **محتوى AR:** كل رابط داخلي **يبدأ بـ `/ar/`** — `/ar/fleet/ghost` · `/ar/services/wedding` · `/ar/blog/<slug>` · `/ar/pricing`.
- **محتوى RU:** كل رابط داخلي **يبدأ بـ `/ru/`** — `/ru/fleet/ghost` · `/ru/services/wedding` · `/ru/blog/<slug>` · `/ru/pricing`.

**نمط التحقق (فحص يدوي صريح في بوابة التدقيق):**

- في **EN**: عدد الروابط الداخلية التي تبدأ بـ `/en/` أو `/ar/` أو `/ru/` = **صفر**.
- في **AR**: **كل** الروابط الداخلية تبدأ بـ `/ar/`.
- في **RU**: **كل** الروابط الداخلية تبدأ بـ `/ru/`.

أي تسريب بادئة (أو غيابها في ar/ru) = فشل بوابة → أصلح قبل النشر.

---

## 🇦🇪 السياق المحلي — دبي / الإمارات (إلزامي في كل مقال)

> حيثما ورد «السياق المصري» في منطق الأصل، يصبح هنا **سياق دبي/الإمارات**. اطلب ذكر **2–3 عناصر سياق دبي على الأقل في كل مقال** (معلم + موسم + مناخ/RTA/فندق/مطار).

- **معالم:** برج خليفة · نخلة جميرا (Palm Jumeirah) · شارع الشيخ زايد · Downtown Dubai · DIFC · Dubai Marina · JBR · Business Bay.
- **مواسم/فعاليات:** موسم الأعراس · Dubai Shopping Festival · المهرجانات · عطلات نهاية الأسبوع.
- **مناخ وتشغيل:** صيف دبي الحار (تكييف/توقيت الجولات)، قواعد **RTA** والطرق، فنادق 5 نجوم، خدمة Meet & Greet في مطاري **DXB** و **DWC**.

---

## 🏅 E-E-A-T لتأجير السيارات الفاخرة

> بدّل إشارات ثقة الإلكترونيات بإشارات ثقة **حقيقية** لتأجير فاخر في دبي:

- مواصفات الأسطول الدقيقة (محرك، قوة، عزم، مدى) · احترافية السائق الخاص (chauffeur) · شفافية الأسعار بالـ AED · مواقع التسليم في دبي · الامتثال لقواعد **RTA** · خبرة التشغيل الفعلية في دبي.

> 🚫 **ممنوع منعاً باتاً اختلاق** أي مراجعة/تقييم/عنوان/رقم رخصة/اسم مدير/إحصاء. **كل رقم** في «Authority Signals» يجب أن يكون **حقيقياً وقابلاً للتحقق**. عند نقص أي بيان تشغيلي → سؤال واحد مركّز للمالك، ثم تابع.

---

## 🔗 الملفات المرتبطة

| الملف | الدور |
|------|------|
| [`rollsroycers-blog.md`](rollsroycers-blog.md) | القواعد الثابتة (Workflow + Schema/BlogPosting + Templates + Cheat Sheet) |
| [`content-laws.md`](content-laws.md) | القوانين العابرة (i18n Quarantine المعكوس + **Trilingual Parity EN===AR===RU** + Authority + Anti-AI) |
| [`voice.md`](voice.md) | **✅ معتمد** (المرجع الكنوني لـ Voice & Tone — شخصية «رجل العالم») |
| [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) | E-E-A-T + Burstiness + AEO + NLP عربي فصيح |
| [`rollsroycers-keyword-strategy.md`](rollsroycers-keyword-strategy.md) | استراتيجية الكلمات المفتاحية (فلتر ذهبي + 5 عناقيد + Pillar/Supporting) |
| [`rollsroycers-dominance-playbook.md`](rollsroycers-dominance-playbook.md) | السيطرة المتقدمة (GEO/AEO/SERP Features + Pillar Authority) |
| [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) | بنك 700 عنوان (عناقيد + كلمات مفتاحية) |
| [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md) | **✅ معتمد** (نظام تسمية + برومبتات صور الأغلفة والمحتوى) |

> CTA واتساب **+971558164922** يُذكر حيث يلزم في خاتمة المقال ودعوة الحجز.
