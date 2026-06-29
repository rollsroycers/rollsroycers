# 🖼️ rollsroycers-image-prompts.md — نظام صور المدونة + برومبتات التوليد

> **المرجع الرسمي لصور مقالات rollsroycers.com.** يحسم ثلاثة أشياء: **الفلسفة البصرية** (كيف تبدو كل صورة)، **نظام التسمية** (كيف يربط نظام التدوين كل صورة بمقالها)، و**فورمولات البرومبت** (كيف تكتب البرومبت المناسب لكل مقال).
> النبرة البصرية تتبع [`voice.md`](voice.md) حرفيًا: **فخامة هادئة لا تتباهى** — كأن السيارة صُوّرت لمجلة *Robb Report* لا لإعلان تأجير. القواعد التقنية في [`content-laws.md`](content-laws.md)، وحقول المقال في [`rollsroycers-blog.md`](rollsroycers-blog.md).
> **القاعدة:** لكل مقال **صورتان** — (1) **Cover/Featured** (حقل `image` في `BlogArticle`، يظهر كـ hero + og:image + JSON-LD) و(2) **Inline** (كتلة `{type:'image'}` داخل `content`).

---

## 🧬 1. الفلسفة البصرية (Visual DNA)

الصورة امتدادٌ لصوت «رجل العالم»: **ثراء صامت، أناقة لا تتكلّف، سينمائية محرّرة (editorial-cinematic)**. السيارة **شخصية** في مشهد، لا منتج على خلفية بيضاء.

| المبدأ | افعل | لا تفعل |
|--------|------|---------|
| **الفخامة الهادئة** | إضاءة طبيعية ثرية، ظلال عميقة، انعكاسات على الطلاء | نيون، فلاش صارخ، ألوان فاقعة |
| **سينمائي محرّر** | عمق ميدان ضحل، تكوين 35/50/85mm، تدرّج لوني راقٍ (Robb Report / Vogue) | لقطة كتالوج مسطّحة، خلفية بيضاء، HDR مبالغ |
| **دبي حقيقية وراقية** | Golden hour / Blue hour، برج خليفة/نخلة/الشيخ زايد/DIFC/مارينا بذوق | كليشيه سياحي، خلفية مزدحمة، لافتات مقروءة |
| **السيارة بطلة المشهد** | السيارة المحدّدة في المقال بدقّة موديلها | موديل خاطئ، خلط طُرز |
| **اللوحة اللونية** | محايدات دافئة + أسود عميق + لمسة شامبانيا/ذهبي | تشبّع زائد، ألوان متضاربة |
| **بلا نص داخل الصورة** | الصورة تتكلّم بصريًا فقط | أي كلمات/شعارات «FOR RENT»/أرقام |

**رموز الأسلوب الثابتة (ضعها في *كل* برومبت لضمان الاتساق):**
`cinematic editorial photography, photorealistic, shallow depth of field, refined warm-neutral color grade with deep blacks and champagne-gold accents, soft natural light, anamorphic feel, 8k, ultra-detailed, no text, no watermark`

---

## 🔢 2. نظام التسمية (Naming Convention) — قلب الربط

> هذا أهم جزء: التسمية **حتمية ومبنية على الـ slug**، فيفهم نظام التدوين أي صورة تخصّ أي مقال دون تخمين.

لكل مقال slug (مثل `how-much-rent-rolls-royce-dubai`). الصورتان تُشتقّان منه:

| الصورة | المسار (في `/public`) | المرجع في الكود | الصيغة | الأبعاد |
|--------|------------------------|------------------|--------|---------|
| **Cover / Featured** | `public/images/blog/<slug>-cover.jpg` | `image: '/images/blog/<slug>-cover.jpg'` | **JPG** | **1200×630** (1.91:1) |
| **Inline** | `public/images/blog/<slug>-inline.webp` | كتلة `{type:'image', src:'/images/blog/<slug>-inline.webp', alt:'…'}` | **WebP** | **1600×900** (16:9) |

**لماذا هذه الصيغ بالضبط؟**
- **الغلاف JPG لا WebP:** لأنه يُستخدم كـ **og:image + Twitter card + JSON-LD image** — وبعض المنصات/الـ rich-results تفضّل jpg/png. أبعاد 1200×630 هي معيار og:image.
- **الداخلية WebP:** أخفّ، وليست og/schema، فالـ WebP آمن (Cloudflare يقدّم الصور raw لأن `images.unoptimized:true` — لا تحويل تلقائي، فالحجم مسؤوليتك).
- **مجلد `blog/` مستقل:** يفصل صور المقالات الـ700 عن صور الموقع في `/images` الجذر (نظافة + لا تعارض أسماء).

**اشتقاق الـ slug** (إن لم يكن جاهزًا): kebab-case من العنوان الإنجليزي، الكلمة المفتاحية في المقدّمة، ≤ ~60 حرفًا، بلا stop-words زائدة. مثال: «How Much Does It Cost to Rent a Rolls-Royce in Dubai?» → `how-much-rent-rolls-royce-dubai`.

**النص البديل (alt) — متعدّد اللغات + SEO:** يصف المشهد ويحتوي الموديل/الكلمة المفتاحية طبيعيًا. EN داخل كتلة المحتوى في `[slug].tsx`، و ar/ru المقابلان في `blogTranslations.json` (Trilingual Parity). الصورة نفسها واحدة عبر اللغات؛ **الـ alt فقط يُترجَم**.

> ✅ **النتيجة:** بمجرد معرفة الـ slug، يعرف نظام التدوين مساري الصورتين حتميًا. ملف البرومبتات (المُولّد لاحقًا) مفتاحه الـ slug أيضًا → ربط 1:1 كامل (عنوان ↔ slug ↔ غلاف + داخلية ↔ برومبت + برومبت).

---

## 🎯 3. فورمولات البرومبت لكل عنقود (Cover + Inline)

كل عنقود من عناقيد المواضيع الخمسة له **دور بصري مختلف**. لكل عنقود فورمولا للغلاف وأخرى للداخلية، بمتغيرات `{MODEL}` `{LOCATION}` `{OCCASION}` `{TIME}` `{DETAIL}`. اختم كل برومبت برموز الأسلوب الثابتة (§1).

### 🅰️ RENTAL-COMMERCIAL (وصول/تسليم/مناسبة في دبي)
الدور: **اللحظة** — الوصول، التسليم، السائق، المناسبة. القارئ يتخيّل نفسه في المشهد.
- **Cover:** `A {MODEL} in {COLOR} arriving at {LOCATION} in Dubai at {TIME}, low three-quarter front angle, a uniformed chauffeur opening the rear coach door, valet setting in the background softly blurred,` + رموز الأسلوب `, --ar 1200:630`.
- **Inline:** `Interior rear-cabin view of a {MODEL} from the open door, {DETAIL: lambswool rugs / champagne cooler / Starlight Headliner glowing}, a gloved hand on the door frame (no face), Dubai skyline bokeh through the window at {TIME},` + رموز الأسلوب `, --ar 16:9`.

### 🅱️ MODEL-INFO (بطل الموديل + تفاصيله)
الدور: **السيارة المحدّدة كأيقونة** + تفصيلة توقيعية.
- **Cover:** `Hero studio-meets-Dubai shot of a {MODEL} in {COLOR}, full side or three-quarter profile, dramatic single-source light raking across the bodywork, seamless dark backdrop blending into a hint of Dubai night skyline,` + الأسلوب `, --ar 1200:630`.
- **Inline:** `Extreme detail of the {MODEL}'s {DETAIL: Spirit of Ecstasy / Starlight Headliner / coach doors / hand-stitched leather / Black Badge dark chrome}, macro, soft reflected light, shallow focus,` + الأسلوب `, --ar 16:9`.

### 🅲️ PRICE-INFO (قيمة/امتلاك مقابل تأجير — مفاهيمي)
الدور: **بصري تحريري راقٍ** يوحي بالقيمة/الذكاء لا بـ«السعر».
- **Cover:** `An editorial conceptual scene: a {MODEL} parked outside a Dubai five-star hotel entrance at {TIME}, a single key handed over (no faces), the car gleaming, conveying effortless access rather than ownership burden,` + الأسلوب `, --ar 1200:630`.
- **Inline:** `A {MODEL} keyfob resting on a marble concierge desk beside a folded chauffeur cap, warm lamplight, luxury hotel lobby softly blurred behind,` + الأسلوب `, --ar 16:9`.

### 🅳️ BRAND-INFO (تراث/حِرفة/سُلطة)
الدور: **هيبة العلامة** — الحِرفة، الرمز، التاريخ — بإحساس تحريري.
- **Cover:** `A reverent heritage portrait of a {MODEL}, the Spirit of Ecstasy mascot in sharp focus catching golden light, the rest of the car and a tasteful Dubai backdrop in soft bokeh, conveying legacy and craftsmanship,` + الأسلوب `, --ar 1200:630`.
- **Inline:** `Close craftsmanship detail — {DETAIL: hand-polished walnut veneer / pinstriped coachline / 1,340-point Starlight roof / stitched RR monogram}, artisanal, museum-lit,` + الأسلوب `, --ar 16:9`.

### 🅴️ COMPARISON (سيارتان جنبًا إلى جنب)
الدور: **المواجهة البصرية** — رولز رويس مقابل المنافس، أو موديلان.
- **Cover:** `Two luxury cars composed side by side in a Dubai setting at {TIME}: a {MODEL_A} and a {MODEL_B/RIVAL}, balanced symmetrical framing, the Rolls-Royce subtly favoured by light and position,` + الأسلوب `, --ar 1200:630`.
- **Inline:** `A split or paired detail comparison — the {MODEL_A} grille/badge beside the {MODEL_B} grille/badge, equal lighting, editorial,` + الأسلوب `, --ar 16:9`.

> **المتغيرات:** `{MODEL}` = الموديل المذكور في العنوان (Phantom/Ghost/Cullinan/Dawn/Wraith/Spectre + Black Badge). `{LOCATION}` = أنسب موقع دبي للزاوية (Burj Khalifa / Palm Jumeirah / Sheikh Zayed Road / DIFC / Dubai Marina / JBR). `{TIME}` = golden hour / blue hour / night. `{OCCASION}` = wedding / corporate / weekend / airport. `{DETAIL}` = تفصيلة توقيعية حقيقية للموديل. `{COLOR}` = لون يليق (midnight black / arctic white / matte black / two-tone).

---

## 🧪 4. أمثلة مطبّقة (Worked Examples)

كل مثال: العنوان → slug → مسارا الصورتين → برومبت الغلاف → برومبت الداخلية → alt (en/ar/ru).

### مثال 1 — RENTAL-COMMERCIAL
- **Title:** *How Much Does It Cost to Rent a Rolls-Royce in Dubai? 2026 Price Guide*
- **slug:** `how-much-rent-rolls-royce-dubai`
- **Cover →** `public/images/blog/how-much-rent-rolls-royce-dubai-cover.jpg`
  `A Rolls-Royce Ghost in midnight black arriving at a Dubai five-star hotel porte-cochère at golden hour, low three-quarter front angle, a uniformed chauffeur opening the rear coach door, valet softly blurred behind, cinematic editorial photography, photorealistic, shallow depth of field, refined warm-neutral grade with deep blacks and champagne-gold accents, soft natural light, anamorphic feel, 8k, no text, no watermark --ar 1200:630`
- **Inline →** `public/images/blog/how-much-rent-rolls-royce-dubai-inline.webp`
  `Rear-cabin interior of a Rolls-Royce Ghost seen through the open coach door, lambswool floor rugs and a glowing Starlight Headliner, a gloved hand resting on the door frame (no face), Dubai skyline bokeh through the window at golden hour, cinematic editorial photography, photorealistic, shallow depth of field, warm-neutral grade, 8k, no text --ar 16:9`
- **alt — EN:** "Rolls-Royce Ghost arriving with chauffeur at a Dubai hotel — rental price guide"
- **alt — AR:** "رولز رويس جوست تصل بسائق خاص إلى فندق في دبي — دليل أسعار التأجير"
- **alt — RU:** "Rolls-Royce Ghost с водителем у отеля в Дубае — гид по ценам аренды"

### مثال 2 — MODEL-INFO
- **Title:** *What Makes the Rolls-Royce Phantom Interior the Most Luxurious in Dubai?*
- **slug:** `rolls-royce-phantom-interior-dubai`
- **Cover →** `…/rolls-royce-phantom-interior-dubai-cover.jpg`
  `Hero shot of a Rolls-Royce Phantom in two-tone silver and black, full side profile, dramatic single-source light raking across the bodywork, seamless dark backdrop dissolving into a hint of Dubai night skyline, cinematic editorial, photorealistic, shallow DOF, warm-neutral grade with champagne-gold accents, 8k, no text --ar 1200:630`
- **Inline →** `…/rolls-royce-phantom-interior-dubai-inline.webp`
  `Extreme macro of the Rolls-Royce Phantom Starlight Headliner, 1,340 fibre-optic stars glowing against dark Alcantara, soft reflected cabin light, shallow focus, cinematic editorial, photorealistic, 8k, no text --ar 16:9`
- **alt — EN/AR/RU:** "Rolls-Royce Phantom interior with Starlight Headliner" / "مقصورة رولز رويس فانتوم بسقف النجوم" / "Салон Rolls-Royce Phantom со звёздным потолком"

### مثال 3 — COMPARISON
- **Title:** *Rolls-Royce Cullinan vs Bentley Bentayga: Which to Rent in Dubai?*
- **slug:** `rolls-royce-cullinan-vs-bentley-bentayga-dubai`
- **Cover:** `Two luxury SUVs side by side on Sheikh Zayed Road at blue hour: a Rolls-Royce Cullinan in arctic white and a Bentley Bentayga in dark grey, balanced symmetrical framing, the Cullinan favoured by light and foreground position, cinematic editorial, photorealistic, shallow DOF, 8k, no text --ar 1200:630`
- **Inline:** `Paired front-grille detail — Rolls-Royce Cullinan Pantheon grille and Spirit of Ecstasy beside a Bentley Bentayga matrix grille, equal museum lighting, editorial, photorealistic, 8k, no text --ar 16:9`

*(أمثلة PRICE-INFO و BRAND-INFO تتبع نفس النمط — تُولَّد ضمن الدفعة الكاملة.)*

---

## 🛡️ 5. الحُرّاس (Guardrails — إلزامية)

1. **بلا لوحات أرقام مقروءة** — اجعلها مموّهة/زاوية مائلة، أو لوحة دبي عامة غير مقروءة. لا ترقيمًا حقيقيًا.
2. **بلا وجوه يمكن التعرّف عليها** — استخدم زاوية خلفية، يد بقفاز، أو بلا أشخاص. (تجنّب قضايا الحقوق الشخصية لعمل حقيقي.)
3. **دقّة الموديل** — صوّر **الموديل المذكور في المقال بالضبط**. لا تُظهر Phantom في مقال عن Cullinan. احترم تفاصيل Black Badge (كروم داكن) و Spectre (كهربائية، بلا عادم).
4. **بلا شعارات مفبركة** — رمز Spirit of Ecstasy ومنظومة RR فقط، بدقّة واحترام (لا تشويه/كاريكاتير).
5. **بلا نص/علامة مائية/أرتيفاكت AI** (أصابع زائدة، شعارات مشوّهة). راجع كل صورة قبل الاعتماد.
6. **دبي راقية لا كليشيه** — معالم بذوق وبُعد بصري، لا بطاقة بريدية سياحية مزدحمة.
7. **الاتساق** — رموز الأسلوب الثابتة (§1) في كل برومبت؛ نفس اللوحة اللونية عبر الـ700 مقال → هوية بصرية موحّدة.
8. **الصدق** — لا تختلق ميزة غير موجودة في الموديل (يتوافق مع منع الاختلاق في [`content-laws.md`](content-laws.md) §4).

---

## ⚙️ 6. سير العمل (من العنوان إلى صورتين منشورتين)

1. خذ العنوان + عنقوده من [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md).
2. اشتقّ الـ slug (§2).
3. اختر فورمولا الغلاف + الداخلية حسب العنقود (§3)، واملأ المتغيرات `{MODEL/LOCATION/TIME/DETAIL/COLOR}` بما يناسب العنوان.
4. ولّد الصورتين بالأبعاد المحدّدة (Cover 1200×630 JPG · Inline 1600×900 WebP)، مرّرهما على الحُرّاس (§5).
5. احفظهما بالاسم الحتمي: `<slug>-cover.jpg` و `<slug>-inline.webp` في `public/images/blog/`.
6. في [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx): `image: '/images/blog/<slug>-cover.jpg'` + كتلة `{type:'image', src:'/images/blog/<slug>-inline.webp', alt:'…'}` داخل `content`.
7. أضف alt المُترجَم (ar/ru) في [`src/data/blogTranslations.json`](src/data/blogTranslations.json).
8. تابع بوابة التدقيق والنشر في [`rollsroycers-blog.md`](rollsroycers-blog.md).

---

## 🔗 الإحالات

- [`voice.md`](voice.md) — الهوية البصرية تتبع نبرة «رجل العالم» (فخامة هادئة، لا تباهي).
- [`content-laws.md`](content-laws.md) — alt متعدّد اللغات (§2 Trilingual)، منع الاختلاق (§4).
- [`rollsroycers-blog.md`](rollsroycers-blog.md) — أين توضع الصورتان في بنية المقال.
- [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) — مصدر العناوين/العناقيد لتوليد البرومبتات لكل مقال.

---

## ⚙️ خط الإنتاج الجاهز (التوليد + السيو + البصمة)

1. **البرومبتات:** [`rollsroycers-blog-image-prompts-700.md`](rollsroycers-blog-image-prompts-700.md) — 700 مقال × (cover + inline) + alt(en/ar/ru). ✅ مكتمل.
2. **manifest التوليد (آلي):** [`rollsroycers-image-generation-manifest.json`](rollsroycers-image-generation-manifest.json) + `.csv` — 1,400 صورة، كل صف: `slug · type · output_path · aspect · prompt · alt_en/ar/ru · kw`. يُغذّى مباشرةً لمولّد الصور (Gemini «Nano Banana») لتوليد الكل **دفعة واحدة** وحفظها في `public/images/blog/` بالأسماء الحتمية.
3. **السيو + الميتاداتا (بعد التوليد):** `node scripts/blog-img-metadata.mjs --apply` — يطبّق على كل صورة:
   - **سيو متعدد اللغات:** XMP عنوان/وصف بـ lang-alt (en x-default + ar + ru) من نص الـ alt.
   - **GEO:** GPS دبي (25.2048N, 55.2708E) + IPTC مدينة/دولة.
   - **إفصاح AI:** IPTC `DigitalSourceType = trainedAlgorithmicMedia` + `Software = Google Gemini (Nano Banana)`.
   - **C2PA:** بيان Content Credentials (مصدر AI + المؤلّف Naqra FZE) — يُدمج عبر `c2patool` عند توفّر `C2PA_SIGN_CERT`+`C2PA_PRIVATE_KEY`، وإلا يُكتب sidecar `.c2pa.json` للتوقيع وقت النشر.
   - حقوق/Licensor متوافقة مع سكربت الموقع العام `scripts/img-metadata.mjs` (الذي لا يُلمَس).
4. **الربط بالمقال:** التسمية المبنية على الـ slug تربط الصورتين بمقالهما تلقائيًا (cover = حقل `image`، inline = كتلة محتوى).

> 🔧 الأدوات المطلوبة: `exiftool` (للميتاداتا) و`c2patool` (لـ C2PA) — كلاهما مثبّت. شغّل السكربت **بعد** وجود الصور (idempotent، يتخطّى غير الموجود).
