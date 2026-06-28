# ⚖️ قوانين المحتوى العابرة — Rolls-Royce Dubai Content Laws

> **المرجع الوحيد** للقوانين التي تنطبق على **كل** محتوى الموقع: مقالات المدونة، صفحات الأسطول (fleet)، صفحات الخدمات (services)، صفحة الأسعار (pricing)، والصفحات الثابتة.
> أي ملف تنفيذي (`rollsroycers-blog.md`, `rollsroycers_content_blueprint.md`, ...) يجب أن **يُحيل** لهذا الملف بدل تكرار القاعدة.
>
> 🏢 **النشاط:** Naqra FZE — خدمة تأجير سيارات Rolls-Royce فاخرة في دبي. ليست متجر منتجات: لا توجد "صفحة منتج" — بدلها صفحة سيارة (fleet) / خدمة (service) / مقال (blog).
> 🌐 **اللغات:** ثلاث لغات — `en` (الافتراضية، بدون بادئة) · `ar` (RTL، فصحى راقية) · `ru`. ليست ثنائية اللغة.

---

## 🗂️ الفهرس السريع

| # | القانون | الموقع الكنوني | إلزامية |
|---|---------|------------------|---------|
| 1 | ⚖️ i18n Quarantine Law (عزل اللغة — **معكوس**: EN بدون بادئة) | **هنا §1** | 🔴 لا يُكسر |
| 2 | 🌐 Trilingual Parity (التكافؤ الثلاثي EN === AR === RU) | **هنا §2** | 🔴 لا يُكسر |
| 3 | 🎭 Voice & Tone (الأسلوب والنبرة) | [`voice.md`](voice.md) **✅ معتمد** | 🔴 شخصية «رجل العالم» — التزم به |
| 4 | 🔬 Authority Signals (Specificity over vagueness — أرقام صادقة فقط) | [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) §1, §5 | 🟠 قوي |
| 5 | ⛔ Anti-AI Clichés (مكافحة كليشيهات الـ AI — لائقة بعلامة فخامة) | [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) §1 | 🟠 قوي |

---

## §1 — ⚖️ i18n Quarantine Law (قانون عزل اللغة) — **معكوس عن المعتاد**

### المبدأ

الخلط اللغوي بين رابط داخلي ومحتوى مستضيف = **جلطة دماغية لعناكب جوجل وتدمير لنظام Hreflang**.

> 💡 **القاعدة:** محتوى عربي ➜ رابط للنسخة العربية فقط · محتوى إنجليزي ➜ رابط للنسخة الإنجليزية فقط · محتوى روسي ➜ رابط للنسخة الروسية فقط.

### 🔄 الانقلاب الحرج (اقرأه بعناية)

> على `rollsroycers.com` — **الإنجليزية (EN) هي الـ default بدون أي بادئة لغة.** هذا **عكس** الأنظمة التي تكون فيها العربية هي الافتراضية.
>
> - **EN** = جذر الموقع، **بدون بادئة**: `/fleet/ghost`, `/services/wedding`, `/blog/<slug>`, `/pricing`.
> - **AR** = بادئة `/ar/`: `/ar/fleet/ghost`, `/ar/services/wedding`, `/ar/blog/<slug>`.
> - **RU** = بادئة `/ru/`: `/ru/fleet/ghost`, `/ru/services/wedding`, `/ru/blog/<slug>`.
>
> أي شخص اعتاد على نظام "العربية default" سيخطئ هنا بطبيعته — **في هذا الموقع الـ EN هي العارية من البادئة، وكل ما عداها مُبادأ.**

### صيغة بادئة الرابط الإلزامية

| موقع الرابط | البادئة | مثال صحيح |
|------------|---------|-----------|
| **محتوى EN** (`en` في `blogArticles` بـ `[slug].tsx` **أو `src/data/blog/<slug>.json`**) | **بدون** بادئة لغة — ابدأ بـ `/` مباشرة | `<a href="/fleet/ghost">Rolls-Royce Ghost</a>` |
| **محتوى AR** (`ar` في `blogTranslations.json` **أو `src/data/blog/<slug>.json`**) | **يجب** أن تبدأ بـ `/ar/` | `<a href="/ar/fleet/ghost">رولز رويس جوست</a>` |
| **محتوى RU** (`ru` في `blogTranslations.json` **أو `src/data/blog/<slug>.json`**) | **يجب** أن تبدأ بـ `/ru/` | `<a href="/ru/fleet/ghost">Rolls-Royce Ghost</a>` |
| روابط خارجية (`https://`, `mailto:`, `tel:`, `#`, WhatsApp `wa.me`) | لا تُلمس | `<a href="https://wa.me/971558164922" target="_blank" rel="noopener">...</a>` |

### كل أنواع الروابط الداخلية المُغطّاة

| النوع | EN (بدون بادئة) | AR (`/ar/`) | RU (`/ru/`) |
|------|------------------|-------------|-------------|
| سيارة أسطول | `/fleet/ghost` | `/ar/fleet/ghost` | `/ru/fleet/ghost` |
| صفحة خدمة | `/services/wedding` | `/ar/services/wedding` | `/ru/services/wedding` |
| الأسعار | `/pricing` | `/ar/pricing` | `/ru/pricing` |
| مقال | `/blog/<slug>` | `/ar/blog/<slug>` | `/ru/blog/<slug>` |
| الصفحة الرئيسية | `/` | `/ar` | `/ru` |
| أي مسار آخر (`/about`, `/contact`, `/booking`, `/gallery`, `/locations/...`) | بدون بادئة | بـ `/ar/` | بـ `/ru/` |

> ⚠️ **استثناء واحد — كتلة `cta`:** الحقل `buttonLink` يُعرَض عبر `next/link` الذي **يبادئ اللغة تلقائيًا**، لذا اتركه **بدون بادئة في كل اللغات** (`"/booking"` في en/ar/ru). البادئة اليدوية تخصّ **روابط `<a href>` داخل نص الكتل فقط** (HTML خام عبر `dangerouslySetInnerHTML`).
> 🔗 **سقف الروابط الداخلية:** كل مقال يحمل **3–5 روابط داخلية في المتن لكل لغة (الحد الأقصى 5)** تمزج **موضوعات ذات صلة + صفحات خدمات/أسطول مهمة** (`/fleet/<model>` · `/services/<x>` · `/pricing` · `/booking`) — لا إفراط. (الحقل `relatedArticles[]` = 3–5 كروت.)
> 🤖 **مفروضة آليًا:** `node scripts/blog-verify.mjs` يفشل (exit 1) على أي خرق: قانون البادئة، أو روابط متن > 5، أو كسر Trilingual Parity، أو مسار صورة لا يطابق الـ slug. شغّله قبل الـ build.

> **مفردات الأسطول للروابط:** `phantom`, `ghost`, `cullinan`, `dawn`, `wraith`, `spectre` (+ نسخ Black Badge حيث وُجدت).
> **مفردات الخدمات للروابط:** `wedding`, `airport-transfer`, `chauffeur`, `corporate`, `events`, `photoshoot`, `tours`, `hourly`.

### أمثلة قاطعة

```html
<!-- ✅ صحيح — داخل en (blogArticles في [slug].tsx) — EN بدون بادئة -->
<p>Explore the <a href="/fleet/ghost" style="color:#1a1a1a;font-weight:600;">Rolls-Royce Ghost</a>
or read our <a href="/blog/rolls-royce-wedding-car-dubai" style="color:#1a1a1a;">Dubai wedding car guide</a>.
Book via <a href="/booking">our booking page</a> or WhatsApp <a href="https://wa.me/971558164922">+971 55 816 4922</a>.</p>

<!-- ✅ صحيح — داخل ar (blogTranslations.json) — كل رابط داخلي يبدأ /ar/ -->
<p>اكتشف <a href="/ar/fleet/ghost" style="color:#1a1a1a;font-weight:600;">رولز رويس جوست</a>
أو اقرأ <a href="/ar/blog/rolls-royce-wedding-car-dubai" style="color:#1a1a1a;">دليل سيارة الزفاف في دبي</a>.</p>

<!-- ✅ صحيح — داخل ru (blogTranslations.json) — كل رابط داخلي يبدأ /ru/ -->
<p>Откройте для себя <a href="/ru/fleet/ghost">Rolls-Royce Ghost</a>
или прочитайте <a href="/ru/blog/rolls-royce-wedding-car-dubai">гид по свадебным авто в Дубае</a>.</p>

<!-- ❌ خطأ قاتل — نسخة EN فيها رابط مُبادأ بـ /ar/ يسرّب القارئ للعربية -->
<p>Explore the <a href="/ar/fleet/ghost">Rolls-Royce Ghost</a>.</p>

<!-- ❌ خطأ قاتل — نسخة AR بدون بادئة /ar/ تُسقط القارئ على النسخة EN الافتراضية -->
<p>اكتشف <a href="/fleet/ghost">رولز رويس جوست</a>.</p>
```

### لماذا قاتل؟

قارئ AR على `/ar/blog/...` يضغط رابطاً بدون `/ar/`، فينتقل **للنسخة الإنجليزية الافتراضية** — وقارئ EN على `/blog/...` يضغط رابطاً فيه `/ar/` فيُقذف لصفحة عربية RTL. كلاهما يكسر:

1. **Hreflang clustering** — جوجل يرى ربطاً متبادلاً غير متناسق بين عناقيد en/ar/ru
2. **User Experience** — قارئ يجد نفسه فجأة في لغة أخرى (وفي AR: اتجاه RTL مفاجئ)
3. **Crawl budget** — العناكب تهدر طاقتها على روابط مشوّشة عبر ثلاثة عناقيد
4. **Authority flow** — قوة عنقود اللغة تتسرّب لعنقود آخر بشكل غير مقصود

### نمط التحقق السريع (قبل أي commit) — لثلاث لغات

```bash
# المحتوى الإنجليزي يعيش inline في blogArticles داخل [slug].tsx،
# والترجمات ar+ru تعيش في src/data/blogTranslations.json.

EN_FILE="src/pages/blog/[slug].tsx"
TR_FILE="src/data/blogTranslations.json"

# 1) أي href في محتوى EN يبدأ ببادئة لغة (/en/ أو /ar/ أو /ru/) — يجب أن يكون 0
#    (EN يجب أن تكون عارية تماماً من بادئات اللغة)
grep -oE 'href="/(en|ar|ru)/' "$EN_FILE" | grep -v 'href="https'
# النتيجة المتوقعة: فارغة

# 2) في كتلة الترجمة العربية: كل href داخلي يجب أن يبدأ /ar/.
#    اصطد أي رابط داخلي AR لا يبدأ /ar/ (تسرّب للـ EN الافتراضية):
#    href="/..." حيث لا يلي السلاش مباشرةً ar/ أو ru/ أو http
grep -oE 'href="/[^"]+"' "$TR_FILE" | grep -vE 'href="/(ar|ru)/' | grep -v 'href="/#'
# راجع النتائج يدوياً: أي رابط AR داخلي بدون /ar/ = انتهاك

# 3) لا يوجد href يبدأ /en/ في أي مكان (لا توجد بادئة en إطلاقاً على هذا الموقع)
grep -oE 'href="/en/' "$EN_FILE" "$TR_FILE"
# النتيجة المتوقعة: فارغة
```

> ⚠️ نظراً لأن EN + (ar/ru) في ملفّين مختلفين، الفحص اليدوي يدقّق كلاً على حدة. **اقتراح:** أنشئ `scripts/blog-verify.mjs` (لاحقاً) ليُفرّق نص EN عن `ar`/`ru` لكل slug ويطبّق القواعد الثلاث آلياً (لا تكتبه الآن).

### أخطاء شائعة تكسر هذا القانون

| الخطأ | الضرر | الحل |
|------|------|------|
| نسخ كتلة HTML من `en` إلى `ar`/`ru` دون إضافة `/ar/` أو `/ru/` لكل `href` | كل الروابط تسرّب القارئ للـ EN الافتراضية | بعد أي نقل، أضِف بادئة اللغة لكل `<a href>` داخلي فرداً فرداً |
| الاعتقاد بأن EN تحتاج `/en/` (عادة من أنظمة أخرى) | روابط EN مكسورة 404 أو إعادة توجيه | EN **بدون** بادئة — `/fleet/ghost` لا `/en/fleet/ghost` |
| استخدام relative path `href="fleet/ghost"` بدون `/` | الراوتر يُلحقه بالمسار الحالي → 404 | ابدأ كل رابط داخلي بـ `/` |
| نسيان أن `wa.me/971558164922` رابط خارجي | محاولة إضافة بادئة لغة له | روابط `https`/`tel`/`wa.me` لا تُلمس |

---

## §2 — 🌐 Trilingual Parity (التكافؤ الثلاثي EN === AR === RU)

### المبدأ

**الثلاث لغات نسخ موازية بنفس العمق لثلاثة جماهير — لا واحدة منها ترجمة مختصرة للأخرى.**

كل النسخ تستهدف عميلاً يبحث عن استئجار Rolls-Royce في دبي (أحدهم يفكّر بالإنجليزية، الثاني بالعربية، الثالث بالروسية) — السياق الدبيّي موجود في الثلاثة. EN هي المصدر (تُكتب أولاً في `blogArticles`)، و AR/RU توأمان موازيان لها في `blogTranslations.json`، **بنفس عدد الأقسام، ونفس الـ FAQ، ونفس الصور، ونفس العمق التحليلي.**

### جدول التكافؤ الثلاثي

| العنصر | EN (default) | AR (`/ar/`، RTL) | RU (`/ru/`) |
|--------|--------------|-------------------|-------------|
| النبرة | luxury English راقٍ، احترافي (You/Your) | فصحى عربية راقية (لا عامية) | luxury Russian احترافي راقٍ |
| المصطلحات | "fleet / chauffeur / hourly rental" | المصطلح التقني بالإنجليزية حيث يلزم (Black Badge, V12, chauffeur) + عربية فصحى | المصطلح التقني بالإنجليزية حيث يلزم + روسية |
| السياق الدبيّي | اذكر دبي صراحةً | اذكر دبي صراحةً | اذكر دبي صراحةً |
| Examples | معالم/مواسم دبي (Burj Khalifa, DIFC, Dubai Marina, موسم الأعراس) | نفس المعالم/المواسم | نفس المعالم/المواسم |
| الأسعار | بالدرهم (AED) — من AED 3,800/يوم (Ghost) حتى Cullinan 6,500 و Spectre 7,500 | بالدرهم (AED) — **ليس USD/EUR/RUB** | بالدرهم (AED) — **ليس RUB** |
| Callouts (الاتجاه) | `border-left` (LTR) | `border-right` (RTL) | `border-left` (LTR) |
| **بادئة الروابط الداخلية** ⚖️ | **بدون** بادئة | **بـ** `/ar/` | **بـ** `/ru/` (راجع §1) |
| Anchor text لاسم السيارة/الخدمة | بالإنجليزي (`Rolls-Royce Ghost`) | بالعربي (`رولز رويس جوست`) | بالإنجليزي/الروسي (`Rolls-Royce Ghost`) |
| المواصفات/الأرقام | متطابقة (محرك، قوة، مدى، سعر) | متطابقة (لا تبسيط) | متطابقة (لا تبسيط) |
| عمق التحليل | كامل | كامل (نفس عدد الأقسام/التفاصيل) | كامل (نفس عدد الأقسام/التفاصيل) |
| FAQ | عدد ثابت من الأسئلة | نفس العدد، نفس الأسئلة مترجمة | نفس العدد، نفس الأسئلة مترجمة |
| coverImage | موجود | نفس الصورة | نفس الصورة |
| relatedArticles[] | موجود | نفس القائمة (بروابط `/ar/`) | نفس القائمة (بروابط `/ru/`) |
| quickAnswer box | موجود | موجود | موجود |

### مثال موازٍ (نفس الطول والعمق والنبرة الراقية)

```
EN: "Picture arriving at Burj Al Arab as the Arabian Gulf catches the last
    light — the doorman steps forward, and a Rolls-Royce Phantom comes to
    rest beneath the canopy. In Dubai, an entrance like this is a statement."

AR: "تخيّل وصولك إلى فندق برج العرب بينما يلتقط الخليج العربي آخر الضوء —
    يتقدّم البواب، وتستقرّ رولز رويس فانتوم تحت المظلّة. في دبي، دخول كهذا
    يُعدّ بياناً بحدّ ذاته."

RU: "Представьте, как вы подъезжаете к Burj Al Arab, когда Аравийский залив
    ловит последний свет — швейцар делает шаг вперёд, и Rolls-Royce Phantom
    замирает под навесом. В Дубае такое появление — это заявление."
```

### تجنّب في AR و RU

- ❌ تلخيص قسم موجود في EN
- ❌ حذف أمثلة دبي ("هذا للقارئ الإنجليزي فقط")
- ❌ تبسيط المواصفات أو الأرقام أو حذف الجداول
- ❌ ذكر USD/EUR/RUB بدل AED
- ❌ ترك FAQ ناقصة عن نسخة EN
- ❌ حذف `quickAnswer` أو `relatedArticles` في لغة دون أخرى

### قاعدة "اذكر دبي في الثلاث لغات"

```
✅ EN: "Sheikh Zayed Road at dusk is the natural stage for a Black Badge Wraith..."
✅ AR: "شارع الشيخ زايد عند الغروب هو المسرح الطبيعي لسيارة Black Badge Wraith..."
✅ RU: "Шоссе Шейха Зайда на закате — естественная сцена для Black Badge Wraith..."
```

> اطلب ذكر **2–3 عناصر سياق دبي على الأقل في كل مقال** (معالم مثل Burj Khalifa / Palm Jumeirah / Downtown Dubai / DIFC / Dubai Marina / JBR / Business Bay؛ أو مواسم مثل موسم الأعراس / Dubai Shopping Festival / المهرجانات / نهاية الأسبوع؛ أو مناخ الصيف / قواعد RTA / فنادق 5 نجوم / meet & greet في DXB و DWC) — **في اللغات الثلاث.**

كل النسخ موجّهة لعملاء يبحثون عن استئجار في دبي — السياق المحلي ضروري لا اختياري.

---

## §3 — 🎭 Voice & Tone

> **المرجع الكنوني الكامل:** [`voice.md`](voice.md) ✅ **معتمد (يونيو 2026).** هذا الملخّص يُحيل إليه — لا يَحُلّ محلّه.

### النبرة المعتمدة (ملخّص — التفصيل في `voice.md`)

✅ **شخصية واحدة موقّعة: «رجل العالم / The Host»** — راوٍ راقٍ رأى كل شيء، فكاهته **تهكّم بريطاني هادئ (Understatement)**. اقرأ [`voice.md`](voice.md) **قبل أي مقال** والتزم به حرفيًا. الموجّهات الثابتة:

1. **الجمهور:** عميل فخامة يبحث عن استئجار Rolls-Royce في دبي (زفاف، مطار، سائق خاص، شركات، فعاليات، تصوير، جولات، تأجير بالساعة).
2. **النبرة:** فخامة هادئة لا تتباهى، تهكّم بريطاني راقٍ — بلا مبالغة تسويقية، بلا علامات تعجّب، بلا فكاهة عامية. **AR = فصحى راقية بلمسة خليجية دافئة** (صفر عامية مصرية).
3. **📏 الطول المستهدف:** 🔴 **1,500–2,500 كلمة لكل لغة** (نفس العمق في en/ar/ru) — تحقّق بعدّ الكلمات قبل أي commit (راجع بوابة التدقيق أدناه).
4. **المصطلحات التقنية بالإنجليزية دائماً** في الثلاث لغات (Black Badge, V12, bespoke, Spirit of Ecstasy, chauffeur).
5. **الأقسام التفصيلية والقوالب وأمثلة المقدمات والأخطاء القاتلة → في** [`voice.md`](voice.md) (أنماط الفكاهة، ميزان اللغات الثلاث، 4 قوالب مقدمات، بطاقة الهوية الصوتية).

---

## §4 — 🔬 Authority Signals (Specificity over Vagueness)

> **المرجع الكنوني:** [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) §1 (Zero-Tolerance Rules) و §5 (النبرة) و §II (E-E-A-T لتأجير السيارات الفاخرة).

### الملخص الإلزامي

**كل ادعاء بمواصفة محدّدة. ممنوع الصفات المطلقة الغامضة.**

| ❌ غامض | ✅ محدد |
|---------|---------|
| "محرك قوي" | "V12 سعة 6.75 لتر، 563 حصاناً (Phantom)" |
| "سعر معقول" | "من AED 3,800/يوم لـ Ghost" |
| "سيارة سريعة" | "Black Badge Wraith — 632 حصاناً، 0–100 في 4.4 ثانية" |
| "تسليم في كل مكان" | "تسليم في Downtown Dubai و Dubai Marina و DIFC و مطاري DXB/DWC" |
| "سائقون محترفون" | "سائق خاص (chauffeur) مدرّب، ملتزم بقواعد RTA، meet & greet في المطار" |
| "أحدث طراز كهربائي" | "Spectre — أول Rolls-Royce كهربائية بالكامل، من AED 7,500/يوم" |

### مصادر الأرقام المقبولة

1. **المواصفات الرسمية** من Rolls-Royce Motor Cars (محرك، قوة، عزم، مدى)
2. **بيانات تشغيل Naqra FZE الحقيقية** — الأسعار، مواقع التسليم في دبي، قائمة الأسطول، خدمات السائق الخاص
3. **حقائق دبي/الإمارات القابلة للتحقق** — قواعد RTA، مطارات DXB/DWC، المعالم، المواسم
4. **شفافية الأسعار** — أرقام AED حقيقية معلنة فقط

### ⛔ ممنوع منعاً باتاً الاختلاق

> **لا تختلق أبداً:** مراجعات، تقييمات نجوم، شهادات عملاء، أرقام رخص، أسماء مديرين، إحصاءات "عدد العملاء"، جوائز، أو أي رقم لا يمكن التحقق منه. **كل رقم في "Authority Signals" يجب أن يكون حقيقياً وقابلاً للتحقق** — مواصفة سيارة رسمية أو سعر معلن أو حقيقة دبي ثابتة. عند الشك في رقم، احذفه بدل اختلاقه.

> 📚 التفاصيل الكاملة لـ E-E-A-T لتأجير السيارات الفاخرة (مواصفات الأسطول الدقيقة، احترافية السائق الخاص، شفافية الأسعار، مواقع التسليم، الامتثال لـ RTA، خبرة التشغيل في دبي) → blueprint §II + §V.

---

## §5 — ⛔ Anti-AI Clichés (كليشيهات الذكاء الاصطناعي الممنوعة)

> **المرجع الكنوني:** [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) §1 (القواعد الصفرية).

### الجدول السريع — بدائل لائقة بعلامة فخامة

| ✗ ممنوع | ✓ البديل (لائق بالفخامة) |
|---------|---------|
| "في عالم اليوم..." / "In today's world..." | احذفها — ابدأ بالمشهد أو المواصفة |
| "لا شك أن..." / "Undoubtedly..." | اذكر الحقيقة/المواصفة مباشرة |
| "من الجدير بالذكر..." / "It is worth noting..." | ابدأ بالمعلومة |
| "نقدّم لكم..." / "We are pleased to offer..." | "تتوفّر..." أو ابدأ بالتجربة |
| "في الختام..." / "In conclusion..." | احذف كلياً |
| "تجربة لا تُنسى" / "unforgettable experience" | حدّد: "وصول إلى Burj Al Arab في Phantom" |
| "فخامة لا مثيل لها" / "unparalleled luxury" | حدّد: "مقصورة جلد Bespoke + سقف Starlight" |
| "حلول متكاملة" / "comprehensive solutions" | اذكر الخدمة باسمها (wedding / chauffeur / airport-transfer) |
| "الخيار الأمثل للجميع" | "الخيار الأمثل لحفل زفاف في دبي" |
| "أحدث التقنيات" / "cutting-edge technology" | "Spectre الكهربائية بالكامل" |

> 📚 القائمة الموسّعة + شرح كل كليشيه + Burstiness (التباين اللغوي) + Information Gain → blueprint §1–§4.

---

## ✅ Checklist تطبيق القوانين (قبل أي commit) — بوابة التدقيق

| القانون | السؤال | الأداة / المرجع |
|---------|--------|------|
| §1 i18n (معكوس) | EN بلا أي بادئة لغة (0 من `/en/` `/ar/` `/ru/`)؟ AR كلها `/ar/`؟ RU كلها `/ru/`؟ | فحوص grep §1 + `node scripts/i18n-verify.mjs` |
| §1 i18n | `node scripts/i18n-verify.mjs` يمرّ (0 مفاتيح i18next خام في HTML المبني + لا FAQPage مكرّر)؟ | `scripts/i18n-verify.mjs` |
| §2 Trilingual | en === ar === ru: نفس الأقسام، نفس الـ FAQ (عدد ثابت)، نفس الصور، نفس العمق؟ AED لا USD/EUR/RUB؟ | فحص يدوي §2 |
| §2 Trilingual | ذُكرت دبي (2–3 عناصر سياق) في الثلاث لغات؟ | فحص يدوي §2 |
| §3 Voice | عدّ الكلمات 1,500–2,500/لغة؟ صوت «رجل العالم» (تهكّم بريطاني · فصحى راقية بلمسة خليجية) كما في `voice.md`؟ | عدّ كلمات يدوي |
| §4 Authority | كل ادعاء بمواصفة، كل رقم حقيقي قابل للتحقق، **0 اختلاق**؟ | §4 |
| §5 Anti-AI | لا "في عالم اليوم/لا شك/في الختام/فخامة لا مثيل لها/أحدث التقنيات"؟ | §5 |
| Structure | `coverImage` + `relatedArticles` + `quickAnswer` box موجودة في الثلاث؟ | §2 |
| Build | `npm run build` يمرّ بلا أخطاء؟ | — |

> 🔧 **بوابة آلية:** الاسكربت `scripts/blog-verify.mjs` ✅ **موجود ومفعّل** — يفحص: بادئة اللغة (EN عارية / AR=`/ar/` / RU=`/ru/`) + عدّ الكلمات/لغة + parity en/ar/ru + وجود FAQ/quickAnswer/coverImage/relatedArticles + مسارات الصور. **لازم يمرّ قبل أي commit.**
> ```bash
> node scripts/blog-verify.mjs --slug={slug}
> node scripts/i18n-verify.mjs
> ```

---

## 🔄 Workflow إنشاء مقال جديد (مرجع سريع — التفصيل في `rollsroycers-blog.md`)

> **مساران للتخزين — اختر حسب السياق:**
> - **Inline (قديم، ~21 مقالاً):** في `blogArticles` Record في `src/pages/blog/[slug].tsx` + ترجمات `src/data/blogTranslations.json` + slug في `src/data/blogSlugs.json`
> - **File-based (جديد، لـ 700 مقال):** أنشئ `src/data/blog/{slug}.json` ببنية `{en, ar, ru, publishAt}` (المفضّل للمقالات الجديدة)

1. **استخرج الكلمات المفتاحية** — `npm run kw:blog -- --slug={slug}` (لا يدوياً).
2. **اكتب المقال** باللغات الثلاث (EN+AR+RU، 1,500–2,500 كلمة/لغة) — اختر المسار (inline أو file-based).
3. **اضبط** `relatedArticles` (بروابط بحسب لغة كل نسخة — §1) و `coverImage` و `publishAt` (من `publish-schedule.json`).
4. **تدقق** — `node scripts/blog-verify.mjs --slug={slug}` + `node scripts/i18n-verify.mjs` (يجب أن يمرّا كلاهما).
5. **ابنِ** — `npm run build` (تأكّد من نجاح البناء).
6. **انشر** — `git add -A && git commit -m "blog: add {slug}" && git push origin main`
7. **فهرس** — `npm run index:blog {slug}` (يرسل لـ Google + IndexNow).
8. **حدّث الخارطة** — غيّر ⬜→✅ في `rollsroycers-blog-roadmap.md`.

> 📌 الستاك: Next.js 15 **Pages Router** → OpenNext → **Cloudflare Workers**. `next-i18next` بـ namespaces مقسّمة + `fallbackNS`. `images.unoptimized: true` (لا WebP تلقائي عبر `/_next/image`). البناء `npm run build`، النشر `npm run deploy`.
>
> 📚 يوجد حالياً ~21 مقالاً inline (راجع `src/data/blogSlugs.json`) + مقالات file-based في `src/data/blog/`.

---

## 🔗 الملفات المرتبطة

| الملف | الدور |
|------|------|
| [`voice.md`](voice.md) | **✅ معتمد** المرجع الكنوني لـ Voice & Tone — شخصية «رجل العالم» (تهكّم بريطاني · فصحى راقية بلمسة خليجية) |
| [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) | المرجع الكنوني لـ E-E-A-T (تأجير فاخر) + Burstiness + AEO + Anti-AI |
| [`rollsroycers-dominance-playbook.md`](rollsroycers-dominance-playbook.md) | **✅ معتمد** GEO/AEO/SERP تكتيكات الهيمنة + Pre-Publish Scorecard |
| [`rollsroycers-keyword-strategy.md`](rollsroycers-keyword-strategy.md) | فلتر الاستهداف + بنية Pillar/Supporting + زوايا العناقيد |
| [`rollsroycers-blog.md`](rollsroycers-blog.md) | الدليل التنفيذي لكتابة مقالات المدونة (الخطوات الكاملة) |
| [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) | قائمة المواضيع + المنشور (محتوى حي) |
| [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) | بنك 700 عنوان (عناقيد + كلمات مفتاحية) |
| [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md) | **✅ معتمد** نظام صور المدونة (تسمية + برومبتات) |

---

## 🎯 الخلاصة

5 قوانين عابرة لكل أنواع المحتوى. اثنان منها (i18n Quarantine **المعكوس** + Trilingual Parity) موثّقان كنونياً هنا. ثلاثة (Voice ✅ معتمد، Authority، Anti-AI) محالة لملفات أخرى، وهذا الملف فهرس تنقّل لها.

**النقطة الأخطر:** الـ EN هي الـ default **بدون بادئة لغة** — كل ما عداها (`/ar/`, `/ru/`) مُبادأ. أي خلط = تسريب عبر العناقيد.

**قبل أي كتابة — اقرأ هذا الملف أولاً. قبل أي commit — راجع Checklist بوابة التدقيق أعلاه.**
