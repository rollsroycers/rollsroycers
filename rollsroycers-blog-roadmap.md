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
11. **الفهرسة:** الـ sitemap يُولَّد تلقائياً (`scripts/generate-sitemap.mjs`، 67 رابط × 3 لغات شاملة en/ar/ru). بعد النشر: قدّم الـ URL في **Google Search Console** + **IndexNow**.
12. **حدّث هذا الملف:** سجّل المقال الجديد في «منشور بالفعل» وفي عنقوده الموضوعي (Edit tool، أسطر قليلة فقط).
13. قدّم تقرير 5 أسطر.

**خطوات إنشاء مقال جديد في مدونة RR الفعلية (إلزامية بالترتيب):**

1. أضف كائن المقال في `blogArticles` Record **داخل** `src/pages/blog/[slug].tsx` (الحقول: `author` باسم شخصية حقيقية مثل Ahmed Salem / Sarah Mitchell، `category` ∈ {Guides, Luxury, Events, Tips} — أو الفئات الموجودة فعلاً: Travel, Weddings, Business, Heritage, Lifestyle — أقسام المحتوى، FAQ، `relatedArticles[]`، حقول schema/BlogPosting).
2. أضف ترجمات `ar` + `ru` في `src/data/blogTranslations.json`.
3. أضف الـ slug في `src/data/blogSlugs.json`.
4. اضبط `relatedArticles` (3–5) + **3–5 روابط داخلية في المتن** (موضوعات + خدمات/أسطول، حد أقصى 5) + `coverImage`.
5. `npm run build`.
6. بوابة التدقيق (الخطوة 8 أعلاه).
7. `npm run deploy`.
8. الفهرسة (GSC + IndexNow).

**Trigger Phrases:** "اكتب مقال رولز رويس جديد" · "اكمل المدونة" · "اكتب المقال التالي" · "ابدأ موضوع من القائمة" · "Write the next blog post" · "اكتب موضوع #N".

> ⚠️ **استثناء وحيد:** إذا الموضوع يحتاج بيانات تشغيلية حقيقية لا تملكها (مواصفة سيارة دقيقة، سعر، موقع تسليم في دبي) → **سؤال واحد مركّز** ثم تابع — و**ممنوع منعاً باتاً اختلاق الرقم**.

---

## ✅ منشور بالفعل — للمرجعية واستخدامه كـ `relatedArticles`

> **لا تُعد كتابتها.** مصدر الحقيقة: `blogArticles` Record **داخل** `src/pages/blog/[slug].tsx` (محتوى EN) + `src/data/blogTranslations.json` (ar + ru) + `src/data/blogSlugs.json`. عند التضارب → **اعتمد الكود وحدّث هذه القائمة**.

`ultimate-guide-rolls-royce-rental-dubai` · `top-scenic-drives-dubai` · `rolls-royce-wedding-car-dubai` · `business-travel-rolls-royce` · `luxury-shopping-dubai-rolls-royce` · `rolls-royce-dawn-convertible-dubai` · `dubai-luxury-car-guide-2025` · `first-time-dubai-luxury-guide` · `dubai-luxury-hotels-guide` · `dubai-motor-show-2024` · `evolution-rolls-royce-history` · `rolls-royce-spectre-electric-dubai` · `rolls-royce-black-badge-dubai` · `rolls-royce-birthday-car-dubai` · `hourly-rolls-royce-rental-dubai` · `rolls-royce-cullinan-vs-bentley-bentayga` · `rolls-royce-photoshoot-dubai-guide` · `dubai-new-year-luxury-car-rental` · `rolls-royce-phantom-vs-ghost-comparison` · `rolls-royce-chauffeur-dubai-guide` · `rolls-royce-airport-transfer-dubai` · `owns-rolls-royce-dubais-most-coveted-car` · `much-rent-ghost-dubai-clear-price` · `rolls-royce-car-definition-automotive-luxury` · `most-luxurious-car-world-available-rent-dubai` · `rolls-royce-so-expensive-dubai-insiders-breakdown` · `makes-bentley-rolls-royce-two-marques-two-owners` · `owns-rolls-royce-company-ownership-history-legacy` · `fast-does-rolls-royce-go-power-luxury` · `most-luxurious-cars-rent-dubai-right-now` · `rolls-royce-so-expensive-bespoke-truth-explained` · `owns-bentley-rolls-royce-ownership-split-explained` · `owns-worlds-costliest-car-rolls-royce-ownership` · `rolls-royce-fast-performance-elegance`

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
