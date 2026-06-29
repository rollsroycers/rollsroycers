# 📚 سيستم المحتوى — Rolls-Royce Dubai (rollsroycers.com)

> **الفهرس الأم (README) لسيستم تدوين/محتوى rollsroycers.com** — خدمة تأجير سيارات Rolls-Royce الفاخرة في دبي (**Naqra FZE**).
> هذا الملف هو **نقطة الدخول الوحيدة** لكل من يفتح المستودع لأول مرة: يشرح ما هو السيستم، من أين نُقل، كيف كُيِّف، ما هي ملفاته الخمسة الحيّة، وما البنود المؤجّلة قبل أن تبدأ الكتابة.
> **لا تحفظ أي قاعدة هنا** — هذا الملف يُحيل فقط. القواعد الحقيقية في الملفات المُشار إليها أدناه.

---

## 1. ما هو هذا السيستم ومن أين نُقل

هذا السيستم **منسوخ معماريًّا من سيستم محتوى CairoVolt** (سيستم تدوين/سوشيال لمتجر إلكترونيات في مصر) ثم **أُعيد بناؤه من الجذور** ليخدم نشاطًا مختلفًا تمامًا: تأجير سيارات Rolls-Royce فاخرة في دبي. ما نُقل هو **الفلسفة والمعمارية والقواعد والـ workflow والقوالب وروح كل ملف** — وليس أي محتوى حرفي من CairoVolt.

**أُسقط بالكامل** كل ما يخص CairoVolt: الإلكترونيات، Anker/Soundcore، السوق المصري، Firebase، العامية المصرية، ومفهوم "صفحة المنتج".

### 🔄 الفروق الجوهرية بين RR و CairoVolt (احفظها قبل أي شيء)

| البُعد | CairoVolt (الأصل) | Rolls-Royce Dubai (هذا السيستم) |
|--------|--------------------|----------------------------------|
| **النشاط** | متجر إلكترونيات (منتجات) | خدمة تأجير فاخرة — **لا "صفحة منتج"**؛ بدلها صفحة **سيارة (fleet)** / **خدمة (service)** / **مقال (blog)** |
| **🔴 قانون عزل اللغة (i18n)** | EN مُبادَأة (`/en/...`)، العربية بلا بادئة | **معكوس تمامًا** — **EN هي الافتراضية بلا بادئة** (`/fleet/ghost`)، AR بـ `/ar/`، RU بـ `/ru/` |
| **عدد اللغات** | ثنائي (EN/AR) → "Bilingual Parity" | **ثلاثي** — `en` (افتراضية، بلا بادئة) · `ar` (RTL، فصحى راقية) · `ru` → **Trilingual Parity (EN === AR === RU)** |
| **الستاك** | (مختلف) + Firebase | **Next.js 15 Pages Router** · OpenNext → **Cloudflare Workers** · next-i18next (namespaces مقسّمة + fallbackNS) · `images.unoptimized:true` |
| **البناء/النشر** | (مختلف) | البناء `npm run build` · النشر `npm run deploy` (opennextjs-cloudflare build + deploy + warm-cache) — **النشر لا يُفرّغ كاش الـ edge** |
| **مخزن المقالات** | (مختلف) | **inline** في `src/pages/blog/[slug].tsx` (`blogArticles: Record<string, BlogArticle>`) + ترجمات `ar`/`ru` في `src/data/blogTranslations.json` + السجل في `src/data/blogSlugs.json` |
| **السياق المحلي** | مصر | **دبي/الإمارات** (برج خليفة، نخلة جميرا، شارع الشيخ زايد، DIFC، Dubai Marina، RTA، DXB/DWC، موسم الأعراس، Dubai Shopping Festival) |
| **E-E-A-T** | إلكترونيات | تأجير فاخر: مواصفات أسطول دقيقة، احترافية السائق الخاص، شفافية الأسعار، امتثال RTA — **ممنوع منعًا باتًا اختلاق** مراجعات/تقييمات/أرقام رخص/أسماء/إحصاءات |

> 🔴 **أخطر فرق على الإطلاق:** انقلاب قانون عزل اللغة. في EN يجب أن يكون عدد الروابط الداخلية التي تبدأ بـ `/en/` أو `/ar/` أو `/ru/` = **صفر**. في AR كل رابط داخلي يبدأ بـ `/ar/`. في RU كل رابط يبدأ بـ `/ru/`. أي شخص اعتاد نظام "العربية default" سيخطئ هنا بطبيعته. التفاصيل الكاملة في [`content-laws.md`](content-laws.md) §1.

### 🏢 الحقائق الثابتة للنشاط

- **الكيان:** Naqra FZE — تأجير Rolls-Royce فاخرة في دبي.
- **الأسطول:** Phantom · Ghost · Cullinan · Dawn · Wraith · Spectre (+ نسخ Black Badge).
- **الخدمات:** wedding · airport-transfer · chauffeur · corporate · events · photoshoot · tours · hourly.
- **الأسعار:** AED دائمًا — Ghost من **3,800/يوم** · Cullinan **6,500** · Spectre **7,500**.
- **WhatsApp CTA:** `+971558164922` (كرابط `https://wa.me/971558164922`).
- **اللغات:** `en` (افتراضية، بلا بادئة) · `ar` (RTL، فصحى راقية) · `ru`.

---

## 2. خريطة الملفات — ماذا يفعل كل ملف ومتى تستخدمه

السيستم خمسة ملفات حيّة في جذر المستودع. كلٌّ له دور واحد محدد، ويُحيل للآخرين بدل تكرار القاعدة:

| الملف | الدور | متى تفتحه |
|-------|-------|-----------|
| 📝 [`rollsroycers-blog.md`](rollsroycers-blog.md) | **الدليل التنفيذي الأساسي (master).** الـ Workflow الكامل في 18 خطوة، بروتوكول AUTO-TRIGGER، Schema الفعلي لـ `BlogArticle` + أنواع كتل `renderContent` الخمسة، بوابة التدقيق (§16-A)، البناء/النشر/الفهرسة (§16-B → §18)، الكليشيهات الممنوعة، القوالب الجاهزة، النموذج الصادق للكتّاب. | **عند كتابة أي مقال جديد** — هذا هو الملف الذي تتبعه خطوة بخطوة. إرسال مساره وحده = أمر ضمني ببدء الكتابة. |
| ⚖️ [`content-laws.md`](content-laws.md) | **القوانين العابرة** التي تنطبق على **كل** المحتوى (مقالات + fleet + services + pricing + صفحات ثابتة): §1 قانون عزل اللغة **المعكوس** · §2 Trilingual Parity · §3 Voice (مُحال إلى `voice.md` ✅ معتمد) · §4 Authority Signals · §5 Anti-AI Clichés. | **مرجع القواعد الثابتة.** اقرأه قبل أي محتوى (إلزامي في بروتوكول AUTO-TRIGGER). أي ملف آخر يُحيل إليه بدل تكرار القانون. |
| 🏗️ [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) | **الـ blueprint الهندسي:** القواعد الصفرية، هندسة E-E-A-T للتأجير الفاخر + بنية الثقة الخماسية، قوالب البنية الثلاثة (مقال/خدمة/سيارة)، NLP المحلي لدبي، قواعد AEO لـ AI Overviews، معادلة Quick Answer، TF-IDF، البحث الميداني (الخطوة 0)، القواعد الذهبية الـ15. | **عند الحاجة لعمق هندسي:** كيف تبني E-E-A-T، كيف تكتب Quick Answer، كيف تهيكل العناوين، كيف تبحث المنافسين قبل الكتابة. يُستخدم كمرجع هندسي؛ النبرة الآن في `voice.md` المعتمد (يَجُبّ §7 هنا). |
| 🗺️ [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) | **المحتوى الحي:** قائمة الموضوعات المخططة + المنشورة (~19-21 slug مع جدول مرجعي slug/category/author)، العناقيد الموضوعية الخمسة، منهجية اختيار المواضيع، قانون عزل اللغة المعكوس (نسخة مختصرة). | **لمعرفة "ما المقال التالي".** إرسال مساره وحده = أمر ضمني ببدء الكتابة. **حدّثه** بعد نشر كل مقال (⬜ → ✅) — وهو الملف الوحيد الذي تعدّله بعد النشر. |
> **منطق الإحالة:** القاعدة الواحدة تعيش في ملف واحد. `rollsroycers-blog.md` و `blueprint` كلاهما يُحيل إلى `content-laws.md` للقوانين العابرة، وإلى `rollsroycers-blog-roadmap.md` للموضوع التالي، وإلى `voice.md` للنبرة و`rollsroycers-image-prompts.md` للصور. لا تكرّر قاعدة — أحِل إليها.

### بوابة التدقيق وأدوات التحقق (مرجع سريع)

- **`node scripts/i18n-verify.mjs`** — يجب أن يمر بـ exit 0: لا مفاتيح i18next خام في الـ HTML المبني + لا FAQPage مكرّر. (تفاصيل §16-A في `rollsroycers-blog.md`.)
- **فحوص يدوية إلزامية:** عدّ الكلمات لكل لغة (هدف 1,500-2,500) · Trilingual Parity (en/ar/ru نفس الأقسام/العمق/الـ FAQ/الصور) · لا تسريب بادئة لغة (en بلا بادئة، ar=`/ar/`، ru=`/ru/`) · FAQ بعدد ثابت · quickAnswer box · coverImage · relatedArticles.
- **مقترح (لم يُكتب بعد):** سكربت `scripts/blog-verify.mjs` per-article لأتمتة الفحوص اليدوية. غير موجود حاليًا — الفحص يدوي إلى أن يُنشأ.
- **الفهرسة بعد النشر:** sitemap آلي (`scripts/generate-sitemap.mjs`، 67 رابط × 3 لغات) + تقديم الـ URLs في Google Search Console + IndexNow. الـ sitemap يشمل en/ar/ru.

---

## 3. البنود المؤجّلة للنقاش (TBD) — لماذا لم تُكتب بعد

كانت أربعة ملفات مؤجّلة لقرارات بشرية، **وقد حُسمت كلها (يونيو 2026):** `voice.md` ✅ معتمد · `rollsroycers-image-prompts.md` ✅ معتمد · بند **أسماء المواضيع** ✅ مكتمل عبر [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) (700 عنوان، يَجُبّ ملف `topics-2026` المؤجّل) · و`social-video-prompts` أُلغي مع حذف خطة السوشيال. لم يبقَ بند مؤجّل — الجدول أدناه للأرشفة:

| الملف المؤجّل | ماذا سيحوي | لماذا يحتاج نقاشًا قبل الكتابة |
|----------------|-----------|-------------------------------|
| 🎭 [`voice.md`](voice.md) **✅ اعتُمد (يونيو 2026)** | **DNA نبرة الكتابة** (مكتمل). شخصية واحدة موقّعة «رجل العالم / The Host» · فكاهة تهكّم بريطاني راقٍ (Understatement) · العربية فصحى راقية بلمسة خليجية دافئة · 3 لغات. | ~~كان مؤجّلًا~~ — حُسم بقرار المالك. **هو الآن مرجع الصوت المعتمد** ويَجُبّ النبرة المؤقتة في `blueprint §7`. ابدأ به قبل أي مقال. |
| 🗂️ أسماء المواضيع → [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) **✅ مكتمل** | **700 عنوان** مخطّط لـ2026، كل عنوان مربوط بكلمة مفتاحية + حجم بحث + نية + رابط داخلي، موزّع على 5 عناقيد. | حُسم: تولّدت 700 عنوان من 985 كلمة مفتاحية (تنقية ضوضاء + توسعة موطّنة لدبي). يَجُبّ ملف `topics-2026` المؤجّل ويُغني عنه. |
| 🖼️ [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md) **✅ اعتُمد (يونيو 2026)** | **نظام صور المدونة** (مكتمل): فلسفة بصرية (فخامة هادئة تتبع `voice.md`)، **نظام تسمية مبني على الـ slug** (cover `.jpg` 1200×630 = حقل `image`/og · inline `.webp` 1600×900 = كتلة محتوى)، فورمولات برومبت لكل عنقود + أمثلة مطبّقة + حُرّاس. | حُسم. صورتان لكل مقال. برومبتات الـ700 الكاملة تُولَّد عند اكتمال ملف العناوين. |

> ⚠️ **القاعدة:** أي ملف من الأربعة أعلاه **لا تخترع محتواه**. إن طُلب منك العمل في مجاله قبل اعتماده، استخدم البديل المؤقت المذكور (blueprint §7 للنبرة، roadmap للمواضيع) وأشِر صراحةً إلى أنه TBD.

---

## 4. البدء السريع (Quick Start) — كتابة أول مقال

> ⚙️ **الجاهزية:** `voice.md` ✅ معتمد · نظام الصور ✅ معتمد · بنك العناوين ✅ مكتمل (700 عنوان في [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md)) — السيستم جاهز للإنتاج. الخطوات أدناه خلاصة مكثّفة — **المصدر الكامل والمعتمد هو الـ 18 خطوة في [`rollsroycers-blog.md`](rollsroycers-blog.md).**

1. **افتح المرجعين:** اقرأ [`content-laws.md`](content-laws.md) (القوانين العابرة، خاصة §1 عزل اللغة المعكوس) ثم [`rollsroycers-blog.md`](rollsroycers-blog.md) (الـ workflow). إن أصبح [`voice.md`](voice.md) متاحًا اقرأه أولًا.
2. **اختر الموضوع:** من [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) — أول موضوع غير منشور (⬜) أو الموضوع المطلوب صراحةً. أعلن سطرًا: `بدء كتابة: [العنوان] — slug: [slug]`.
3. **اكتب المقال في 3 مواقع** (هذه بنية المستودع الفعلية):
   - **(1)** أضف كائن المقال في `blogArticles: Record<...>` داخل [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx) — محتوى EN كامل (author من أسماء الكتّاب الحقيقيين، category ∈ {Guides, Luxury, Events, Tips}، أقسام، FAQ، حقول schema، relatedArticles[]، coverImage).
   - **(2)** أضف ترجمتي `ar` + `ru` في [`src/data/blogTranslations.json`](src/data/blogTranslations.json) (نفس الأقسام والعمق والـ FAQ — Trilingual Parity).
   - **(3)** أضف الـ slug في [`src/data/blogSlugs.json`](src/data/blogSlugs.json).
4. **اضبط الروابط الداخلية حسب القانون المعكوس:** EN بلا بادئة (`/fleet/ghost`) · AR بـ `/ar/` · RU بـ `/ru/`. اضبط relatedArticles + coverImage.
5. **اذكر سياق دبي** (2-3 عناصر على الأقل في كل لغة) واجعل كل ادعاء برقم حقيقي (محرك 6.75L V12، AED 3,800/يوم…). **لا تختلق** أي رقم/مراجعة/إحصاء.
6. **بوابة التدقيق:** شغّل `node scripts/i18n-verify.mjs` (يجب exit 0) + الفحوص اليدوية (عدّ الكلمات ≥1,500 لكل لغة · Trilingual Parity · لا تسريب بادئة · FAQ ثابت · quickAnswer · coverImage · relatedArticles). **فشل أيٍّ = لا نشر.**
7. **ابنِ:** `npm run build` (يتبعه postbuild → sitemap آلي).
8. **commit/push** على فرع (لو على `main` افرع أولًا) بإذن المالك — وقّع `Co-Authored-By: Claude Opus 4.8`.
9. **انشر:** `npm run deploy` (opennextjs-cloudflare build + deploy + warm-cache) — تذكّر أن النشر **لا يُفرّغ كاش الـ edge**؛ warm-cache يمتص أول render بارد.
10. **فهرس فورًا:** قدّم الـ URLs الثلاثة (en/ar/ru) في Google Search Console + IndexNow.
11. **حدّث الـ roadmap** (⬜ → ✅) وقدّم تقريرًا موجزًا (بناء + نشر + فهرسة).

---

## 🔗 الملفات المرتبطة

| الملف | الوسم |
|-------|-------|
| [`rollsroycers-blog.md`](rollsroycers-blog.md) | الدليل التنفيذي الأساسي |
| [`content-laws.md`](content-laws.md) | القوانين العابرة |
| [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) | الـ blueprint الهندسي |
| [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) | المحتوى الحي / المواضيع |
| [`voice.md`](voice.md) | النبرة — **✅ معتمد: شخصية «رجل العالم» (Signature Persona · تهكّم بريطاني راقٍ · فصحى راقية بلمسة خليجية)** |
| [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) | بنك 700 عنوان 2026 — **✅ مكتمل** |
| [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md) | نظام صور المدونة — **✅ معتمد** |

> 📞 **CTA الموحّد:** WhatsApp `+971558164922` → `https://wa.me/971558164922`.
