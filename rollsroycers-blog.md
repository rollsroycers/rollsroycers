# 📝 دليل كتابة تدوينات Rolls-Royce Dubai (rollsroycers.com)

> المرجع التنفيذي (master) لكتابة أي مقال جديد على مدونة **rollsroycers.com** — خدمة تأجير رولز رويس الفاخرة في دبي (Naqra FZE). مبني على البنية الفعلية للمستودع (`src/pages/blog/[slug].tsx` + `blogTranslations.json` + `blogSlugs.json`)، لا على افتراضات.
> **مراجع مرتبطة:** [`content-laws.md`](content-laws.md) (القوانين العابرة — i18n + Trilingual Parity + Voice + Authority + Anti-AI) · [`voice.md`](voice.md) ✅ **(معتمد — شخصية «رجل العالم»)** (DNA الأسلوب) · [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) (قائمة الموضوعات الحية) · [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) (Burstiness/AEO/E-E-A-T) · [`rollsroycers-keyword-strategy.md`](rollsroycers-keyword-strategy.md) (استراتيجية الكلمات المفتاحية + عناقيد) · [`rollsroycers-dominance-playbook.md`](rollsroycers-dominance-playbook.md) (GEO/AEO/SERP السيطرة المتقدمة) · [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) (بنك 700 عنوان) · [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md) ✅ **(معتمد — نظام صور المدونة)** · [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx) (Schema الفعلي + renderContent) · [`src/data/blogTranslations.json`](src/data/blogTranslations.json) (ترجمات ar+ru) · [`src/data/blogSlugs.json`](src/data/blogSlugs.json) (سجل الـ slugs)

---

## 🧭 القلب الأهم — قانون عزل اللغة معكوس عن أي مشروع آخر (اقرأه أولاً)

> 🔴 **أهم فرق في هذا الملف كله.** في مشاريع أخرى تكون EN هي المُبادِئة (`/en/...`) والعربية بلا بادئة. **هنا العكس تمامًا:**
>
> - **EN = اللغة الافتراضية بلا بادئة لغة على الإطلاق.** كل رابط داخلي في محتوى EN يبدأ بـ `/` مباشرة: `/fleet/ghost`، `/services/wedding`، `/blog/<slug>`، `/pricing`، `/booking`.
> - **AR = بادئة `/ar/`.** كل رابط داخلي في محتوى ar يبدأ بـ `/ar/`: `/ar/fleet/ghost`، `/ar/services/wedding`، `/ar/blog/<slug>`.
> - **RU = بادئة `/ru/`.** كل رابط داخلي في محتوى ru يبدأ بـ `/ru/`: `/ru/fleet/ghost`، `/ru/blog/<slug>`.
>
> **نمط التحقق (احفظه):**
> - في EN: عدد الروابط الداخلية التي تبدأ بـ `/en/` أو `/ar/` أو `/ru/` = **صفر**.
> - في AR: **كل** رابط داخلي يبدأ بـ `/ar/`.
> - في RU: **كل** رابط داخلي يبدأ بـ `/ru/`.
> - الروابط الخارجية (`https://`, `tel:`, `mailto:`, `#`) لا تتأثر في أي لغة.

---

## 📌 Cheat Sheet — القواعد التي لا تُكسر

> مرجع سريع لكل أرقام/قواعد المقال. التفاصيل في الأقسام المُشار إليها.

| الحقل / القاعدة | القيمة | المرجع |
|------------------|--------|--------|
| **Word count** (لكل لغة) | 🔴 **≥ 1,500 كلمة — لا يُكسر** (الهدف 1,500-2,500) | §16-A |
| **عدد اللغات** | 🔴 **3** — en (افتراضية بلا بادئة) · ar (RTL، فصحى راقية) · ru | §12 |
| **H2 (`heading` blocks)** | 5-8 أقسام | §6 |
| **FAQ** | 5 بالضبط لكل لغة — **ككتل `heading`+`paragraph` داخل `content`** (لا يوجد حقل `faq`) | §11 |
| **🔗 روابط داخلية** | **3–5 لكل مقال (حد أقصى 5):** موضوعات ذات صلة + صفحات خدمات/أسطول · `relatedArticles[]` = 3–5 | §10 + `content-laws` §1 |
| **readTime** | نص حرّ مثل `'10 min read'` (احسبه: 200 ك/د عربي، 250 إنجليزي) | §Schema |
| **description** (≈ meta) | جملة واحدة 150-160 حرف | §13 |
| **quickAnswer Box** | كتلة `paragraph` بـ HTML مُلوّن (45-80 كلمة) في أول الـ content | §4, §13 |
| **coverImage (`image`)** | إلزامي — مسار `.jpg/.webp` في `/images/...` (الصور غير مُحسّنة آليًا — `images.unoptimized:true`) | §2 |
| **category** | من 4: `Guides`, `Luxury`, `Events`, `Tips` (موجود قديمًا: Travel/Business/Heritage/Lifestyle/Weddings) | §0 |
| **author** | اسم شخصية تحرير حقيقية من المستودع (Ahmed Salem / Sarah Mitchell / Fatima Al Rashid …) — ❌ لا تختلق اسمًا جديدًا | §النموذج الصادق |
| **⚖️ i18n href (EN)** | `<a href="/fleet/ghost">` **بلا** أي بادئة | §قلب اللغة + [`content-laws.md`](content-laws.md) §1 |
| **⚖️ i18n href (AR)** | `<a href="/ar/fleet/ghost">` بـ `/ar/` | §قلب اللغة |
| **⚖️ i18n href (RU)** | `<a href="/ru/fleet/ghost">` بـ `/ru/` | §قلب اللغة |
| **Anchor text language** | يطابق لغة المحتوى (EN→إنجليزي / AR→عربي / RU→روسي)؛ "Rolls-Royce" يبقى كما هو | §10 |
| **سياق دبي** | 2-3 إشارات على الأقل (برج خليفة، نخلة جميرا، شارع الشيخ زايد، RTA…) | §9 |
| **Specificity** | كل ادعاء برقم حقيقي (محرك 6.75L V12، AED 3,800/يوم…) — لا "فخم"/"قوي"/"رائع" | §8 |
| **الأسعار** | AED دائمًا — Ghost من 3,800/يوم · Cullinan 6,500 · Spectre 7,500 | §8, §9 |
| **WhatsApp** | `+971558164922` (في CTA — كرابط `https://wa.me/971558164922`) | §10 |
| **🔍 الفهرسة** | بعد النشر الفعلي: sitemap آلي + GSC + IndexNow (en/ar/ru) (لا تفهرس المجدول) | §18 |

> 🔴 **قبل أي نشر:** (1) شغّل `node scripts/i18n-verify.mjs` — يجب أن يمر بـ exit 0 (0 مفاتيح i18next خام + لا FAQPage مكرّر). (2) نفّذ فحوص §16-A اليدوية — عدّ الكلمات لكل لغة ≥ 1,500، وفحص تسريب بادئة اللغة. **فشل أيٍّ منهما = لا نشر.**

---

## 🚨 AUTO-TRIGGER PROTOCOL (اقرأ أولاً — إلزامي)

> **القاعدة الذهبية:** أي رسالة تُرسل مسار هذا الملف **أو** مسار [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) — **بغض النظر عن نصها** — = **أمر ضمني وكامل ببدء كتابة الموضوع التالي تلقائيًا**. لا تنتظر تأكيدًا. لا تسأل. ابدأ التنفيذ مباشرةً.

| الحالة | السلوك |
|--------|--------|
| إرسال مسار `rollsroycers-blog.md` أو `rollsroycers-blog-roadmap.md` فقط | ✅ ابدأ Auto-Workflow فورًا |
| إرسال أيٍّ منهما + رسالة بدون أمر واضح | ✅ ابدأ Auto-Workflow فورًا |
| إرسال أيٍّ منهما + Trigger Phrase معروف | ✅ ابدأ Auto-Workflow فورًا |
| طلب رقم/عنوان صراحةً ("اكتب موضوع X") | ✅ ابدأ بالموضوع المحدد |
| طلب صريح لمراجعة/تعديل/سؤال | ⛔ نفّذ ما طُلب فقط — لا تكتب مقالًا |

**بروتوكول التنفيذ (بالترتيب):**

1. أعلن سطر واحد: `"بدء كتابة: [العنوان] — slug: [slug]"`
2. **اقرأ [`voice.md`](voice.md) ✅ (معتمد — إلزامي)** والتزم بشخصية «رجل العالم» (تهكّم بريطاني · فصحى راقية بلمسة خليجية)؛ §7 أدناه ملخّص فقط.
3. **اقرأ [`content-laws.md`](content-laws.md)** (إلزامي — i18n Reversal + Trilingual Parity + Authority + Anti-AI)
4. **اقرأ [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md)** واعثر على أول موضوع غير منشور (⬜)
5. **كتابة المحتوى عبر 3 وكلاء (EN, AR, RU):** قم باستدعاء 3 وكلاء فرعيين متزامنين (`invoke_subagent` مع `TypeName: self`) لكتابة اللغات الثلاث بصورة احترافية وبطول ≥ 1,500 كلمة لكل منها، ثم ادمج المحتوى.
6. **التدقيق والمراجعة عبر 3 وكلاء متخصصين (Auditors):** قم باستدعاء 3 وكلاء فرعيين متزامنين لتدقيق المقال (وكيل تدقيق السيو والروابط، وكيل تدقيق اللغة والأسلوب، وكيل تدقيق دقة البيانات والتكافؤ) والتأكد من خلوه تماماً من الأخطاء وامتثاله الصارم لكافة التعليمات والقوانين.
7. **نفّذ بوابة التدقيق الآلية §16-A:** شغّل `node scripts/blog-verify.mjs {slug}` و `node scripts/i18n-verify.mjs` والتأكد من نجاحهما التام.
8. شغّل `npm run deploy` للتحقق والبناء والنشر إلى Cloudflare مباشرةً (يتبعه postbuild → sitemap آلي + deploy + warm-cache).
9. اعمل `commit` مباشرة على فرع `main`.
10. 🔴 **ارفع وانشر:** `git push origin main` مباشرةً لرفع التغييرات إلى GitHub دون انتظار موافقة.
11. 🔍 **جدولة الفهرسة:** قدّم الـ URLs الثلاثة (en/ar/ru) في Google Search Console + IndexNow عند حلول موعد النشر الفعلي فقط (§18). لا ترسل روابط المقالات المجدولة مستقبلاً للمحركات قبل موعدها.
12. **حدّث `rollsroycers-blog-roadmap.md`** (⬜ → ✅).
13. قدّم تقرير 6 أسطر (يشمل نتيجة البناء + النشر + الفهرسة).

**Trigger Phrases إضافية:** "اكتب موضوع جديد/تدوينة جديدة" · "اكمل المدونة" · "اكتب التدوينة التالية" · "ابدأ موضوع من القائمة" · "Write the next blog post" · "المقال التالي" · "اكتب مقال" · "اكتب تدوينه".

> ⚠️ **استثناء وحيد:** إذا الموضوع يحتاج بيانات تشغيلية لا تملكها (سعر/مواصفة دقيقة غير مؤكدة) → سؤال واحد مركّز ثم تابع. **ممنوع اختلاق الأرقام** (انظر §8 + §النموذج الصادق).

---

## 🗺️ Workflow كامل في 18 خطوة

| # | الخطوة | المخرج |
|---|--------|--------|
| 0 | اختيار الزاوية + بحث (Information Gain) | زاوية فريدة + أرقام حقيقية |
| 1 | Slug + Title + Category | 3 قرارات أساسية |
| 2 | Metadata (author/readTime/image/date) | حقول كائن `BlogArticle` |
| 3 | معمارية المقال (Template الأساسي) | ترتيب كتل `content` ثابت |
| 4 | Quick-Answer Box (إلزامي) | كتلة `paragraph` بـ HTML مُلوّن أول المقال |
| 5 | Operational Callout (إن وُجدت خبرة تشغيلية حقيقية) | كتلة بمنهجية معلنة |
| 6 | Body Content (`heading`/`paragraph`/`list`/`image`) — 🔴 **≥ 1,500 كلمة لكل لغة** | 5-8 أقسام |
| 7 | Voice & Tone — شخصية «رجل العالم» (`voice.md` ✅ معتمد) | تهكّم بريطاني · فصحى راقية |
| 8 | Authority Signals (أرقام **حقيقية** فقط) | كل ادعاء برقم قابل للتحقق |
| 9 | سياق دبي/الإمارات (معالم، مواسم، RTA) | 2-3 إشارات |
| 10 | Internal Linking (i18n معكوس) + CTA واتساب | روابط صحيحة لكل لغة |
| 11 | FAQ (5 أسئلة) — ككتل `content` | لا تكرّر body |
| 12 | **Trilingual Parity (EN === AR === RU)** | عمق متساوٍ في الثلاثة |
| 13 | SEO (`title`/`description`/quickAnswer) | حقول SEO |
| 14 | تسجيل المقال في 3 مواقع (انظر أدناه) | المقال يظهر في البناء |
| 15 | Checklist نهائي + تحديث `rollsroycers-blog-roadmap.md` | تحقق شامل |
| **16** | **بوابة التدقيق §16-A ثم `npm run build`** | **build خالٍ من الأخطاء** |
| **17** | **`git commit` (على فرع) + `push` بإذن المالك** | **Commit مرفوع** |
| **18** | 🔍 **`npm run deploy` + فهرسة GSC/IndexNow (عند النشر الفعلي)** | **منشور + مُبلَّغ للمحركات (لا للمجدول)** |

### 🔑 إنشاء مقال جديد — طريقتان (الأولى موصى بها)

> ✅ **الطريقة المعتمدة للـ700 ولكل مقال جديد: ملف واحد per-slug (build-verified).** أنشئ ملفًا واحدًا `src/data/blog/<slug>.json` بالشكل `{ "en": {…}, "ar": {…}, "ru": {…} }`، حيث كل locale = كائن `BlogArticle` كامل ومستقل (`title, description, author, date, readTime, category, image, content[], relatedArticles[]`). يُكتشف **تلقائيًا** في `getStaticPaths` + الـ sitemap عبر [`src/data/blogFileStore.ts`](src/data/blogFileStore.ts) — **بلا تعديل [slug].tsx، بلا blogTranslations.json، بلا blogSlugs.json، وصفر KB في bundle العميل** (يُقرأ وقت البناء فقط). هذا هو المعمار القابل للتوسّع لمئات المقالات. مزية إضافية: الترجمات الثلاث في ملف واحد مكتمل → لا «تسريب إنجليزي صامت» (لأن كل locale مستقل، لا دمج بالكتابة فوق). مقال مرجعي حيّ: [`src/data/blog/much-rent-ghost-dubai-clear-price.json`](src/data/blog/much-rent-ghost-dubai-clear-price.json).

> 🗄️ **الطريقة القديمة (للـ21 مقال القائم فقط — لا تستخدمها لمقال جديد):** 3 مواقع — (1) كائن EN inline في `blogArticles` داخل [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx)، (2) ترجمات ar/ru في [`src/data/blogTranslations.json`](src/data/blogTranslations.json) (نفس بنية الكتل، ليست HTML string)، (3) الـ slug في [`src/data/blogSlugs.json`](src/data/blogSlugs.json). تعمل لكنها **لا تتوسّع** (21 مقال = 3,774 سطرًا في ملف واحد). أبقِها للمقالات القائمة فقط، ولا تنقلها إلا عند الحاجة.

ثم (لأي طريقة): اضبط `relatedArticles` (3 slugs موجودة فعلًا في أي مخزن) + `image` (cover) → `npm run build` → بوابة تدقيق §16-A → `npm run deploy` → فهرسة GSC/IndexNow (عند حلول موعد النشر الفعلي فقط).

> 🧠 **منطق الدمج (احفظه — مصدر خطأ صامت):** في `getStaticProps`:
> ```ts
> const article = baseArticle && translatedArticle ? { ...baseArticle, ...translatedArticle } : baseArticle
> ```
> أي أن ترجمة ar/ru **تَدهس** حقول EN حقلًا بحقل. **لو نسيت `content` في ترجمة ar أو ru، سيُعرض محتوى EN صامتًا** على صفحة ar/ru (يبدو "يعمل" لكنه يكسر Trilingual Parity ويُسرّب الإنجليزية). لذلك: كل ترجمة يجب أن تحمل `content` كاملًا بنفس عمق EN.

> 🔢 **عدد المقالات المنشورة حاليًا:** ~21 slug في `blogSlugs.json` و ~19 منها لها ترجمات كاملة في `blogTranslations.json`. اقرأ الملفين لسرد القائمة الدقيقة عند الحاجة.

---

## 🚀 الخطوة 16-A — بوابة التدقيق (إلزامي قبل Build)

> 🔴 **هذه الخطوة غير قابلة للتخطّي.** لا يوجد حاليًا سكربت per-article في RR. الفحص = (أ) السكربت الرسمي الموجود `i18n-verify.mjs` + (ب) فحوص يدوية صريحة أدناه.

**(أ) السكربت الرسمي الموجود (يجب أن يمر):**

```bash
# يفحص: 0 مفاتيح i18next خام في الـ HTML المبني + لا FAQPage مكرّر + إحصاءات hreflang/payload
node scripts/i18n-verify.mjs
```

> يفشل بـ `exit 1` لو وجد أي نص مرئي يطابق مفتاح i18next لم يُحَل (namespace غير محمّل) أو FAQPage مكرّر. **يتطلب وجود build حديث في `.next/server/pages` — شغّله بعد `npm run build`.**

**(ب) الفحوص اليدوية الإلزامية (لكل لغة):**

1. 🔴 **عدّ الكلمات** — `content` لكل لغة (en في [slug].tsx + ar/ru في blogTranslations.json) ≥ 1,500 كلمة. استخرج نصوص كتل `paragraph`/`heading`/`list` وعُدّها.
2. ⚖️ **تسريب بادئة اللغة** — راجع كل `href` داخل كتل المقال:
   - في **EN content** يجب ألا يبدأ أي رابط داخلي بـ `/en/` أو `/ar/` أو `/ru/` (يبدأ بـ `/` مباشرة). العدد المتوقع = **0**.
   - في **AR content** كل رابط داخلي يبدأ بـ `/ar/`.
   - في **RU content** كل رابط داخلي يبدأ بـ `/ru/`.
3. ❓ **FAQ = 5** ككتل `content` لكل لغة (سؤال `heading` + إجابة `paragraph`).
4. 💡 **quickAnswer Box** موجود كأول كتلة `paragraph` مُلوّنة في الثلاث لغات.
5. 🖼️ **coverImage (`image`)** موجود ومساره صحيح.
6. 🔗 **3–5 روابط داخلية (حد أقصى 5)** = موضوعات + خدمات/أسطول · `relatedArticles` 3–5 slugs موجودة فعلًا.

<details><summary>أمر عدّ كلمات يدوي مقترح (يقرأ blogTranslations.json — ar/ru فقط)</summary>

```bash
# عدّ كلمات النسختين ar + ru لمقال من blogTranslations.json
node -e "
const t = require('./src/data/blogTranslations.json');
const SLUG = process.argv[1];
const e = t[SLUG];
if (!e) { console.log('slug غير موجود'); process.exit(1); }
const wc = (blocks) => (blocks||[]).reduce((n,b)=>{
  const s = b.text || (b.items? b.items.join(' ') : '') || b.caption || '';
  return n + s.replace(/<[^>]*>/g,' ').split(/\s+/).filter(Boolean).length;
},0);
for (const L of ['ar','ru']) {
  const n = e[L] ? wc(e[L].content) : 0;
  console.log(L.toUpperCase()+':', n, n>=1500?'OK':'SHORT by '+(1500-n));
}
" your-article-slug
```
> ملاحظة: نسخة EN تُعَدّ يدويًا من كائن المقال في `[slug].tsx` (نفس منطق `wc` على مصفوفة `content`). **اقتراح:** إنشاء `scripts/blog-verify.mjs` لاحقًا يؤتمت الفحوص (أ)+(ب) معًا per-slug — **لا تكتبه الآن**، فقط أشِر إليه.

</details>

**القاعدة الصارمة:**
- 🚫 أي لغة < 1,500 كلمة → **أضِف أقسامًا — لا تتابع**
- 🚫 تسريب بادئة (EN فيه `/ar/` أو `/ru/` أو `/en/`؛ أو AR/RU بلا البادئة الصحيحة) → **أصلح — لا تتابع**
- ✅ الثلاثة ≥ 1,500 + 0 تسريب + i18n-verify يمر → تابع للـ build

> [!IMPORTANT]
> **سبب نقص الكلمات وطريقة تفاديه:** كتابة 3 لغات × ≥ 1,500 كلمة (≈ 4,500+ كلمة) في مخرَج واحد تتجاوز حدّ مخرجات النموذج فيُقطَع/يُلخَّص.
> **الحل الصارم:** (1) لا تكتب المقال كله دفعة واحدة. (2) اكتب الهيكل + الـ metadata + EN أولًا. (3) ثم ترجمة ar كاملة. (4) ثم ترجمة ru كاملة. (5) ثم نفّذ §16-A لكل لغة قبل البناء.

**أقسام شائعة لإكمال العدد:** "مقارنة بين موديلين/خدمتين" (ككتلة `list` مفصّلة — **لا يوجد block `table`؛ المقارنات تُكتب كقوائم**) · "أخطاء يقع فيها المستأجرون" بأمثلة دبي · "كيف تختار الموديل المناسب للمناسبة" · "الخلاصة العملية" بـ bullet points.

---

## 🚀 الخطوة 16-B — البناء (`npm run build`)

> **إلزامي بعد §16-A.** البناء يكشف أخطاء TypeScript/Next.js و postbuild يولّد الـ sitemap.

```bash
cd "/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com"
npm run build      # = NODE_OPTIONS=--max-old-space-size=4096 next build  (+ postbuild: generate-sitemap.mjs)
```

**معايير النجاح:**
- ✅ `Compiled successfully` بدون أخطاء حمراء
- ✅ صفحة المقال تظهر ضمن الصفحات المُولّدة لكل لغة: `/blog/{slug}` (en) + `/ar/blog/{slug}` + `/ru/blog/{slug}`
- ✅ postbuild شغّل `generate-sitemap.mjs` دون خطأ

**عند فشل البناء:** اقرأ الخطأ (غالبًا: حقل ناقص في الكائن، فاصلة JSON خاطئة في `blogTranslations.json`، أو `block.type` غير مدعوم). أصلح ثم أعِد البناء. ❌ لا تنشر قبل نجاح البناء.

> 🧩 **تذكير Cloudflare (من ذاكرة المشروع):** `images.unoptimized:true` — لا WebP آلي عبر `/_next/image`؛ استخدم الصور الموجودة كما هي. ملفات `_redirects`/`_headers`/`.htaccess` خاملة على OpenNext/Workers. `next` يحقن viewport تلقائيًا. مسارات `api/robots`+`sitemap` القديمة = كود ميّت (الـ sitemap الحيّ من `generate-sitemap.mjs`).

---

## 🌐 الخطوة 17 — الـ commit والـ push

> الفرع الافتراضي والنشط = `main`. قم بعمل commit و push لفرع `main` مباشرةً لضمان النشر الفوري.

```bash
git add src/data/blog/{slug}.json rollsroycers-blog-roadmap.md public/sitemap-pages.xml
git commit -m "$(cat <<'EOF'
feat(blog): add article — {short-title-en}

{1-sentence summary: unique angle / information gain}

Co-Authored-By: Antigravity <antigravity@google.com>
EOF
)"
git push origin main
```

| نوع التغيير | البادئة | مثال |
| ------------ | --------- | ------ |
| مقال جديد | `feat(blog):` | `feat(blog): add Ghost vs Phantom comparison for Dubai weddings` |
| تعديل مقال | `fix(blog):` / `refactor(blog):` | `fix(blog): correct Ghost daily rate to AED 3,800` |

**معايير القبول قبل push:** §16-A مرّت (الثلاث لغات ≥ 1,500 + 0 تسريب + i18n-verify) · `npm run build` نجح · المقال مسجّل في 3 مواقع · `rollsroycers-blog-roadmap.md` محدّث · لا secrets في الـ staged.

> ⚠️ **ممنوع:** `git push --force` على main · `--no-verify` · push بدون build ناجح · push secrets/.env. **ينتهي كل commit message بـ:** `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`.

---

## 🔍 الخطوة 18 — النشر والفهرسة (إلزامي)

> 🔴 غير قابلة للتخطّي. مقال منشور بدون فهرسة = غير موجود لمحركات البحث.

**1) النشر إلى Cloudflare Workers:**

```bash
npm run deploy   # = npm run sitemap && opennextjs-cloudflare build && opennextjs-cloudflare deploy && npm run warm
```

> ⚠️ **النشر لا يُفرّغ كاش الـ edge.** الصفحات SSG خلف كاش CDN؛ خطوة `warm` (`scripts/warm-cache.mjs`) تمتص أول render بارد بعد النشر. لو لم تظهر التغييرات فورًا فهذا متوقّع حتى انتهاء warm/انتهاء صلاحية الكاش.

**2) الـ sitemap (آلي):** يُولَّد عبر `scripts/generate-sitemap.mjs` (postbuild + ضمن deploy)، ويشمل **en/ar/ru** (≈ 67 رابطًا × 3 لغات). لا تحرّره يدويًا.

**3) الفهرسة اليدوية بعد النشر — قدّم الـ URLs الثلاثة:**

```
https://rollsroycers.com/blog/{slug}        ← EN (الافتراضية، بلا بادئة)
https://rollsroycers.com/ar/blog/{slug}     ← AR
https://rollsroycers.com/ru/blog/{slug}     ← RU
```

| الآلية | الإجراء |
|--------|---------|
| **Google Search Console** | URL Inspection → Request Indexing للـ 3 روابط (en/ar/ru) عند النشر الفعلي |
| **IndexNow** | أرسِل الـ 3 روابط لـ IndexNow (Bing/Yandex) عند النشر الفعلي |

> 🔴 **القاعدة الذهبية:** المقالات المجدولة مستقبلاً لا يتم فهرستها أو إرسالها لـ Google Search Console / IndexNow إلا عند حلول موعد النشر الفعلي. مقال بدون نشر + فهرسة = **لم يُنشر**. الخطوة 18 جزء لا يتجزأ من العملية مثل `npm run build` عند موعد الصدور الفعلي.

---

## 🧬 RR Blog DNA — 10 ركائز للهوية

1. **Question/Benefit-First Authority** — العنوان يطرح حاجة القارئ ("Which Rolls-Royce for a Dubai wedding?") + إجابة مرقّمة.
2. **Dubai Market Lens** — معالم دبي، RTA، فنادق 5 نجوم، مواسم الأعراس/DSF/رأس السنة، مناخ الصيف، AED.
3. **Quick-Answer-Before-Analysis** — TL;DR مُلوّن كأول كتلة `paragraph`.
4. **Specificity Over Vagueness** — "6.75L V12، 563 حصان" بدل "محرك قوي" · "AED 3,800/يوم" بدل "بسعر معقول" · "تسليم في DIFC خلال 60 دقيقة" بدل "تسليم سريع".
5. **Operational Experience as Trust Signal** — خبرة تشغيل حقيقية في دبي (مواقع تسليم، احترافية السائق، امتثال RTA) — **بمنهجية صادقة فقط، ممنوع اختلاق اختبارات/أرقام**.
6. **Formula + Flexibility** — هيكل ثابت (Quick-Answer → Body H2 → FAQ) + عمق قراءة 8-12 دقيقة.
7. **Refined Luxury Voice** — شخصية «رجل العالم»: أناقة هادئة + تهكّم بريطاني؛ AR فصحى راقية بلمسة خليجية (لا عامية)، RU رصينة. (المرجع الكامل: [`voice.md`](voice.md) ✅ **معتمد**).
8. **Internal Linking Web** — **3–5 روابط داخلية لكل مقال (حد أقصى 5):** موضوعات ذات صلة + صفحات الأسطول/الخدمات، بقانون i18n المعكوس.
9. **Trilingual Parity** — ar و ru ليستا ملخصًا؛ نسختان موازيتان بنفس العمق والأقسام والـ FAQ.
10. **Rolls-Royce Dubai as Trusted Concierge** — مستشار فخامة، لا بيع صارخ؛ الثقة من المواصفة الدقيقة والشفافية.

---

## 🗂️ الـ Schema الفعلي (`BlogArticle`) — كما هو في [slug].tsx

```typescript
// src/pages/blog/[slug].tsx  (interface حقيقي)
interface BlogArticle {
  title: string          // عنوان المقال
  description: string    // ≈ meta description (150-160 حرف)
  author: string         // شخصية تحرير حقيقية من المستودع
  date: string           // 'YYYY-MM-DD'
  readTime: string       // نص حرّ: '10 min read'
  category: string       // 'Guides' | 'Luxury' | 'Events' | 'Tips' (+ قديمة)
  image: string          // coverImage: '/images/....jpg'
  content: any[]         // مصفوفة كتل (انظر أنواع الكتل أدناه)
  relatedArticles: string[]   // 3–5 slugs
}
```

> ⚠️ **لا يوجد حقول:** `metaTitle` منفصل، `keywords`، `excerpt`، `quickAnswer`، `faq`، `coverImage` (الاسم هو `image`)، `readingTime` رقمي. **الـ FAQ و Quick-Answer يُكتبان ككتل `content`** (انظر §4، §11). الـ SEO الإضافي يُدار عبر مكوّن `SEO`/`Head` من `title`+`description`.

### أنواع الكتل المدعومة في `renderContent` (الوحيدة المسموحة)

> 🔴 **`renderContent` في [slug].tsx يدعم 5 أنواع فقط.** أي `type` آخر = لا يُعرض (محتوى ضائع). **لا يوجد block `table` ولا block `faq`.**

| `type` | الحقول | الاستخدام |
|--------|--------|----------|
| `paragraph` | `text` (HTML — يُعرض عبر `dangerouslySetInnerHTML`) | فقرات + Quick-Answer Box + Callouts (عبر `<div>` داخل `text`) |
| `heading` | `text` (نص خام، يُعرض كـ `<h2>`) | عناوين الأقسام + أسئلة FAQ |
| `list` | `items: string[]` (كل عنصر HTML) + `ordered?: boolean` | قوائم نقطية/مرقّمة + **بديل الجداول** للمقارنات |
| `image` | `src`, `alt`, `caption?` | صور داخلية (غير مُحسّنة آليًا) |
| `cta` | `text`, `buttonText`, `buttonLink` | صندوق دعوة لإجراء (الزر `<Link href={buttonLink}>`) |

> 💡 **Quick-Answer Box و Operational Callout** يُنفّذان ككتلة `paragraph` يحمل `text` فيه `<div>` بأنماط inline (نفس فكرة `dangerouslySetInnerHTML`). **انتبه RTL:** في AR استخدم `border-right`؛ في EN/RU استخدم `border-left`.

| المعيار | القيمة |
|---------|--------|
| H2 (`heading`) | **5-8 أقسام** |
| FAQ (ككتل) | **5 بالضبط لكل لغة** |
| 🔗 روابط المتن | **3–5 (حد أقصى 5):** موضوعات + خدمات/أسطول |
| `relatedArticles` | **3–5** |
| `description` | **150-160 حرف** |
| quickAnswer Box | **45-80 كلمة** |
| `image` | **إلزامي دائمًا** |
| Word count | **≥ 1,500 لكل لغة** |

> 🧱 **ملاحظة Schema (JSON-LD):** بنية الـ structured data الحالية في الصفحة من نوع `Article`. **يُفضَّل توحيدها إلى `BlogPosting`** (أدِقّ لمحتوى مدونة) — بند تحسين، لا يمنع النشر.

---

## 🚀 تفاصيل الـ Workflow

### الخطوة 0 — اختيار الزاوية + البحث

> ⚠️ **لا تكتب حرفًا قبل تنفيذ هذا.**

**اسأل:** ما السؤال الذي لا يجيب عنه منافسو تأجير الفخامة في دبي بدقة؟ · أين يكتفون بكلام عام بلا أرقام (سعر/مواصفة/موقع تسليم)؟ · هل لديّ زاوية فريدة (مقارنة موديلين لمناسبة، دليل خدمة محددة، سياق موسم دبي)؟

**البحث:** ابحث عن نية القارئ (PAA) حول الموديل/الخدمة · حلّل أول 3 نتائج SERP وسجّل الفجوات · استخرج المواصفات الحقيقية من مصادر رولز رويس الرسمية (محرك، قوة، مدى) · تحقّق من الأسعار الحقيقية للأسطول.

**اختيار `category` (الفئات الأساسية الأربع):**

| الفئة | متى | أمثلة |
|-------|-----|-------|
| `Guides` | دليل إجرائي/تعريفي | "The Ultimate Guide to Rolls-Royce Rental in Dubai" |
| `Luxury` | تجربة/أسلوب حياة فاخر | "Luxury Shopping in Dubai with a Rolls-Royce" |
| `Events` | مناسبات (زفاف، رأس السنة، فعاليات) | "Rolls-Royce Wedding Car in Dubai" |
| `Tips` | حل/نصيحة عملية | "Hourly Rolls-Royce Rental: When It Makes Sense" |

> الفئات القديمة الموجودة في المحتوى الحالي: `Travel`, `Business`, `Heritage`, `Lifestyle`, `Weddings`. للمقالات الجديدة الْتزم بالأربع الأساسية ما لم يكن المقال امتدادًا لعنقود قديم.

---

### الخطوة 1 — Slug + Title

**Slug:** `{keyword/question}-{specifier}` · lowercase + `-` · 3-7 كلمات · لا أحرف عربية/روسية · أمثلة من المستودع: `rolls-royce-wedding-car-dubai`, `rolls-royce-phantom-vs-ghost-comparison`, `hourly-rolls-royce-rental-dubai`.

**صيغ Title ناجحة (الثلاث لغات):**

| الصيغة | EN | AR | RU |
|--------|----|----|----|
| دليل + موديل/خدمة + مدينة | "The Ultimate Guide to Rolls-Royce Rental in Dubai" | "الدليل الشامل لتأجير رولز رويس في دبي" | "Полное руководство по аренде Rolls-Royce в Дубае" |
| مقارنة موديلين | "Rolls-Royce Phantom vs Ghost: Which to Rent in Dubai?" | "رولز رويس فانتوم ضد جوست: أيهما تختار في دبي؟" | "Rolls-Royce Phantom против Ghost: что выбрать в Дубае?" |
| مناسبة + سيارة | "Rolls-Royce Wedding Car in Dubai: The Bride's Finest Ride" | "رولز رويس لحفلات الزفاف في دبي: سيارة العروس الأفخم" | "Rolls-Royce на свадьбу в Дубае: лучшее авто для невесты" |

**قواعد:** "Rolls-Royce" يبقى كما هو في الثلاث لغات · السنة للمواضيع المتغيّرة · ❌ كليشيهات: "Best" بلا qualifier، "Everything you need" المبهمة.

---

### الخطوة 2 — Metadata (حقول كائن EN)

```typescript
'your-new-article-slug': {
  title: 'English Title — Benefit or Question',
  description: 'Meta description 150-160 chars: benefit + specifics + Dubai context.',
  author: 'Ahmed Salem',                 // شخصية تحرير حقيقية من المستودع — ❌ لا تختلق
  date: '2026-06-24',
  readTime: '10 min read',               // احسبه: ~200 ك/د عربي، ~250 إنجليزي
  category: 'Guides',                    // Guides | Luxury | Events | Tips
  image: '/images/Rolls-royce-dubai.jpg',// coverImage إلزامي
  content: [ /* كتل — انظر Template 2 */ ],
  relatedArticles: ['slug-a', 'slug-b', 'slug-c'],   // 3–5 من نفس العنقود/المحور
}
```

**قاعدة Author:** استخدم اسم شخصية تحرير **موجودة فعلًا** في المستودع (مثل `Ahmed Salem`, `Sarah Mitchell`, `Fatima Al Rashid`). ❌ ممنوع اختلاق اسم/لقب/خبير جديد. الترجمة ar/ru قد تحمل `author` بنفس الاسم كما هو شائع في `blogTranslations.json`.

---

### الخطوة 3 — معمارية المقال (ترتيب كتل `content` ثابت)

```
1. paragraph  — فقرة افتتاحية (1-2 جملة تؤطّر حاجة القارئ)
2. paragraph  — Quick-Answer Box (div مُلوّن داخل text)         ← إلزامي (أول المقال)
3. paragraph  — Operational Callout (إن وُجدت خبرة تشغيلية حقيقية)
4. heading + paragraph/list × (5-8)  — أقسام الجسم
   • image  — صورة داخلية (1-2)
   • list   — للمقارنات (بديل الجداول) والمواصفات
5. cta       — صندوق حجز/واتساب
6. heading "Frequently Asked Questions" ثم 5 × (heading سؤال + paragraph إجابة)
```

**ملاحظات:** لا H1 داخل `content` (العنوان من `title`). H2 (`heading`) = 5-8. الـ FAQ جزء من `content` (لا حقل منفصل).

---

### الخطوة 4 — Quick-Answer Box (إلزامي) — ككتلة `paragraph`

**كأول كتلة paragraph بعد الافتتاحية · 45-80 كلمة · `<div>` مُلوّن داخل `text`.**

```typescript
// EN (border-left) — اللغة الافتراضية
{
  type: 'paragraph',
  text: '<div style="background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;"><strong>💡 Quick Answer:</strong> Renting a Rolls-Royce Ghost in Dubai starts at <strong>AED 3,800/day</strong>. You need to be 25+, hold a valid UAE or international licence, and leave a refundable deposit. Free delivery to most Dubai hotels; chauffeur optional. WhatsApp <a href="https://wa.me/971558164922">+971 55 816 4922</a> to book.</div>'
}
```

```typescript
// AR (border-right — RTL)
{
  type: 'paragraph',
  text: '<div style="background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;"><strong>💡 الإجابة السريعة:</strong> يبدأ تأجير رولز رويس جوست في دبي من <strong>3,800 درهم/اليوم</strong>. يلزمك أن تتجاوز 25 عامًا، ورخصة قيادة إماراتية أو دولية سارية، ووديعة قابلة للاسترداد. التوصيل مجاني لأغلب فنادق دبي، والسائق الخاص اختياري. للحجز عبر واتساب <a href="https://wa.me/971558164922">+971 55 816 4922</a>.</div>'
}
```

> ⚠️ **RTL/LTR:** AR → `border-right` · EN و RU → `border-left`.
> 🎯 محتوى الـ Box يغذّي AI Overviews + Featured Snippets؛ اجعله جوابًا قاطعًا برقم + شرط + توصية.

---

### الخطوة 5 — Operational Callout (للخبرة التشغيلية الحقيقية فقط)

**متى:** خبرة تشغيل حقيقية في دبي (مواقع/أزمنة تسليم، بروتوكول سائق، امتثال RTA). ❌ ليس للمقالات النظرية.

```typescript
{
  type: 'paragraph',
  text: '<div style="background:#0f0f0f;border:1px solid #2a2a2a;border-left:4px solid #c9a227;padding:20px;margin:32px 0;border-radius:8px;"><p style="color:#c9a227;font-weight:bold;margin:0 0 8px;">🛎️ من خبرة التشغيل في دبي</p><p style="margin:0;line-height:1.8;">نسلّم السيارة جاهزةً ومفصّلةً إلى فنادق وسط مدينة دبي و DIFC ودبي مارينا، مع مرافقة السائق الخاص لشرح أنظمة المقصورة قبل الانطلاق. الالتزام بقواعد RTA على شارع الشيخ زايد جزء أساسي من بروتوكول التسليم.</p></div>'
}
```

> 🔴 **القاعدة الحديدية (E-E-A-T):** **ممنوع منعًا باتًا اختلاق** مراجعات/تقييمات/أرقام رخص/أسماء مدير/إحصاءات/اختبارات. كل رقم في أي Callout أو "Authority Signal" يجب أن يكون حقيقيًا وقابلًا للتحقق. إن لم تكن متأكدًا من رقم → احذفه أو اسأل، لا تخمّن.

---

### الخطوة 6 — Body Content

**`heading`:** سؤالي أو وصفي · ≤ 8 كلمات · يتضمن كلمة مفتاحية فرعية أو PAA.

**القوائم بديلًا عن الجداول (لا يوجد block `table`):** للمقارنات والمواصفات استخدم `list` بعناصر HTML:

```typescript
{
  type: 'list',
  items: [
    '<strong>Phantom:</strong> 6.75L V12, 563 hp — flagship presence for weddings & VIP arrivals',
    '<strong>Ghost:</strong> from AED 3,800/day — the balanced choice for business and city drives',
    '<strong>Cullinan:</strong> AED 6,500/day — luxury SUV for desert routes and families',
    '<strong>Dawn:</strong> open-top cruising along Palm Jumeirah and JBR',
    '<strong>Spectre:</strong> AED 7,500/day — the first all-electric Rolls-Royce'
  ]
}
```

**القوائم المرقّمة** (`ordered: true`) للمتطلبات/الخطوات. لا تداخل عميق. 4-6 عناصر مثالية.

---

### الخطوة 7 — Voice & Tone

> 📚 **المرجع الكنوني الكامل:** [`voice.md`](voice.md) ✅ **معتمد — اقرأه والتزم به حرفيًا قبل الكتابة** (شخصية «رجل العالم»: تهكّم بريطاني · فصحى راقية بلمسة خليجية · بطاقة هوية صوتية + 4 قوالب مقدمات + أخطاء قاتلة). ما يلي ملخّص:

**نبرة RR — صوت «رجل العالم» (ملخّص `voice.md`):**

1. **أناقة هادئة واثقة** — لا مبالغة تسويقية صارخة؛ الثقة تأتي من الدقة (مواصفة، سعر، موقع تسليم).
2. **AR = فصحى عربية راقية** — **لا عامية إطلاقًا** (عكس مشاريع أخرى). جُمل متّزنة، مفردات فخمة دقيقة.
3. **RU = روسية احترافية** — مهذّبة، واضحة، بنفس مستوى الرقي.
4. **EN = إنجليزية فاخرة سلسة** — جُمل متنوّعة الإيقاع (Burstiness): جملة طويلة سببية + جمل قصيرة موجزة.
5. **المصطلحات التقنية بالإنجليزية** عند الحاجة (V12, PHEV, bhp) داخل أي لغة.

> ❌ لا تنقل أي قاعدة "فكاهة إلزامية" أو "نسبة عامية" — تلك خاصة بمشاريع أخرى ولا تنطبق على RR.

---

### الخطوة 8 — Authority Signals (أرقام حقيقية فقط)

> 📚 الجدول الكامل ومصادر الأرقام → [`content-laws.md`](content-laws.md) §4.

**القاعدة:** "Specificity = Trust" — كل ادعاء برقم **حقيقي قابل للتحقق**.

**إشارات الثقة الحقيقية لتأجير الفخامة:**
- **مواصفات الأسطول الدقيقة:** محرك (مثل 6.75L V12)، قوة (bhp/hp)، مدى (للـ Spectre الكهربائية).
- **شفافية الأسعار:** Ghost من AED 3,800/يوم · Cullinan 6,500 · Spectre 7,500 (تحقّق قبل الكتابة).
- **مواقع التسليم في دبي:** Downtown، DIFC، Dubai Marina، Palm Jumeirah، Business Bay، مطارا DXB/DWC.
- **احترافية السائق الخاص + الامتثال لـ RTA + خبرة التشغيل في دبي.**

**أمثلة:** "محرك قوي" → "6.75L V12 بقوة 563 حصانًا" · "بسعر معقول" → "من AED 3,800/اليوم" · "تسليم سريع" → "تسليم لـ DIFC خلال 60 دقيقة".

> 🔴 ممنوع: اختلاق عدد عملاء/تقييمات/سنوات خبرة/أرقام رخص. الأسطول والأسعار ومواقع التسليم = حقائق فقط.

---

### الخطوة 9 — سياق دبي/الإمارات (اختر 2-3 على الأقل)

| العنصر | استخدام | مثال |
|--------|---------|------|
| المعالم | طرق/وجهات القيادة | "شارع الشيخ زايد، نخلة جميرا، Downtown، DIFC، Dubai Marina، JBR، Business Bay" |
| المواسم | توقيت/طلب | "موسم الأعراس، Dubai Shopping Festival، رأس السنة، نهايات الأسبوع" |
| المناخ | اختيار الموديل | "صيف دبي الحارّ — Dawn المكشوفة أنسب لأمسيات الشتاء" |
| RTA والطرق | امتثال/قيادة | "حدود السرعة وقواعد RTA على شارع الشيخ زايد" |
| الفنادق + المطار | تسليم/استقبال | "ميت آند جريت في DXB/DWC، تسليم لفنادق 5 نجوم" |
| الأسعار AED | دائمًا بالدرهم | "AED 3,800/يوم للـ Ghost، AED 6,500 للـ Cullinan" |

**تجنّب:** ❌ USD/EUR كأساس · ❌ افتراض توفّر خارج دبي.

**مثال متكامل:** "في أمسيات شتاء دبي على كورنيش JBR، تتألق رولز رويس Dawn المكشوفة. نسلّمها إلى فندقك في دبي مارينا، ومع التزام السائق بقواعد RTA على شارع الشيخ زايد، تبدأ رحلتك من AED 4,800 لليوم."

---

### الخطوة 10 — Internal Linking + CTA

**🔗 الربط الداخلي — 3 إلى 5 روابط لكل مقال (الحد الأقصى 5):**
- **داخل المتن:** 3–5 روابط داخلية موزّعة على **موضوعات ذات صلة** (مقالات أخرى/المحور Pillar) **+ صفحات خدمات/أسطول مهمة** (`/fleet/<model>` · `/services/<x>` · `/pricing` · `/booking`). **لا تتجاوز 5** (تجنّب الإفراط في الربط). كل رابط بقانون لغة النسخة (أدناه).
- **`relatedArticles[]`:** **3–5** slugs موجودة فعلًا (كروت المقالات ذات الصلة، يُفضّل من نفس العنقود/المحور).
- **مفروضة آليًا:** `scripts/blog-verify.mjs` **يفشل** لو روابط المتن > 5، ويحذّر لو < 3 أو `relatedArticles` خارج 3–5.

#### ⚖️ قانون عزل اللغة المعكوس (أعلى أولوية)

> 📚 المرجع الكنوني الكامل: [`content-laws.md`](content-laws.md) §1. الملخص الإلزامي:

- **محتوى EN** (الكائن في [slug].tsx) ➜ روابط داخلية **بلا بادئة**: `/fleet/ghost`, `/services/wedding`, `/blog/<slug>`, `/pricing`, `/booking`.
- **محتوى AR** (`blogTranslations[slug].ar.content`) ➜ كل رابط داخلي يبدأ بـ `/ar/`: `/ar/fleet/ghost`.
- **محتوى RU** (`blogTranslations[slug].ru.content`) ➜ كل رابط داخلي يبدأ بـ `/ru/`: `/ru/fleet/ghost`.
- **روابط خارجية** (`https://`, `tel:`, `mailto:`, `#`, `wa.me`) ➜ لا تتأثر.

**أمثلة سريعة:**

```html
<!-- ✅ EN content --> <a href="/fleet/ghost">the Rolls-Royce Ghost</a>
<!-- ✅ AR content --> <a href="/ar/fleet/ghost">رولز رويس جوست</a>
<!-- ✅ RU content --> <a href="/ru/fleet/ghost">Rolls-Royce Ghost</a>
<!-- ❌ EN content --> <a href="/ar/fleet/ghost">Ghost</a>   ← يُسرّب القارئ الإنجليزي للنسخة العربية
<!-- ❌ AR content --> <a href="/fleet/ghost">جوست</a>        ← يكسر الـ AR cluster (يجب /ar/)
```

> ⚠️ **شبكة الأمان لا تُغني:** قد تُعيد طبقة عرض المحتوى كتابة بعض الروابط حسب الـ locale، لكن **لا تعتمد عليها** — اكتب البادئة الصحيحة من البداية، وافحص بـ §16-A.

#### قاعدة لغة نص الرابط (Anchor Text)

- **EN:** نص الرابط إنجليزي · **AR:** عربي · **RU:** روسي. اسم "Rolls-Royce" وأسماء الموديلات (Phantom/Ghost/Cullinan/Dawn/Wraith/Spectre) تبقى كما هي في كل اللغات.

#### CTA + واتساب

استخدم كتلة `cta` للحجز، أو رابط واتساب داخل `paragraph`:

```typescript
{ type: 'cta', text: 'Ready to arrive in unmatched style? Reserve your Rolls-Royce today.', buttonText: 'Book Your Rolls-Royce', buttonLink: '/booking' }   // EN
// AR: buttonLink: '/ar/booking'   ·   RU: buttonLink: '/ru/booking'
```

> رقم واتساب الموحّد: **+971558164922** → `https://wa.me/971558164922` (رابط خارجي، لا بادئة لغة).

---

### الخطوة 11 — FAQ (5 أسئلة) — ككتل `content`

> ⚠️ **لا يوجد حقل `faq`.** الـ FAQ يُكتب داخل `content` كسلسلة: عنوان قسم `heading` ("Frequently Asked Questions") ثم لكل سؤال: كتلة `heading` (السؤال) + كتلة `paragraph` (الإجابة).

```typescript
{ type: 'heading', text: 'Frequently Asked Questions' },
{ type: 'heading', text: 'How much does it cost to rent a Rolls-Royce in Dubai?' },
{ type: 'paragraph', text: 'Daily rates start at AED 3,800 for the Ghost and reach AED 6,500 for the Cullinan and AED 7,500 for the all-electric Spectre. Longer rentals and off-peak dates lower the effective daily rate.' },
// ... 4 أسئلة أخرى (5 بالضبط)
```

**كل سؤال:** يجيب على ما لم يُذكر صراحةً في الجسم · صياغة "How/What/Can/Does" (EN) / "هل/كم/كيف/ما" (AR) / مكافئها بالروسية · إجابة 2-3 جمل (40-80 كلمة) بأرقام/أسماء موديلات.

**❌ ممنوعة (تكرار):** "ما الموديلات المتاحة؟" بعد سردها · "كم السعر؟" إن ذُكر في Quick-Answer.

> 🛈 **i18n-verify يفحص عدم تكرار FAQPage** — تأكّد ألا تُحقَن FAQPage schema مكرّرة.

---

### الخطوة 12 — Trilingual Parity (EN === AR === RU)

> 📚 المرجع الكامل: [`content-laws.md`](content-laws.md) §2.

**المبدأ:** ar و ru **ليستا ترجمة حرفية ولا ملخّصًا** — نسختان موازيتان بنفس عدد الأقسام، نفس عدد كتل `content`، نفس عدد FAQ (5)، نفس الصور (`image` بنفس المسارات)، ونفس العمق (≥ 1,500 كلمة لكل لغة).

**أهم 4 قواعد للمدونة:**

1. **بادئة الروابط ⚖️:** EN بلا بادئة · AR `/ar/` · RU `/ru/`.
2. **Callouts:** AR → `border-right` · EN و RU → `border-left`.
3. **اذكر دبي في الثلاثة:** السياق المحلي ضروري في كل لغة.
4. **الدمج الصامت:** تذكّر `{...baseArticle, ...translatedArticle}` — لو نقصت `content` في ar/ru تظهر EN. كل ترجمة تحمل `content` كاملًا.

**❌ تجنّب في ar/ru:** تلخيص قسم · حذف أمثلة دبي · حذف صورة · تبسيط الأرقام · ذكر USD بدل AED.

---

### الخطوة 13 — SEO

**`title` (عنوان الصفحة):** واضح + كلمة مفتاحية + دبي. أمثلة في §1.

**`description` (150-160 حرف):** صيغة = `[فائدة محددة] + [تفاصيل/سعر/مواصفة] + [سياق دبي/CTA]`

```
EN: "Rent a Rolls-Royce in Dubai from AED 3,800/day. Compare Phantom, Ghost & Cullinan, see requirements, delivery zones and insider booking tips." (≈150)
AR: "استأجر رولز رويس في دبي من 3,800 درهم/اليوم. قارن بين فانتوم وجوست وكولينان، واطّلع على الشروط ومناطق التسليم ونصائح الحجز." (≈150)
RU: "Аренда Rolls-Royce в Дубае от 3 800 AED/день. Сравните Phantom, Ghost и Cullinan, узнайте требования, зоны доставки и советы по бронированию." (≈150)
```

**quickAnswer Box (45-80 كلمة):** كما في §4 — إجابة قاطعة + شرط/رقم + توصية. يغذّي AI Overviews + Featured Snippets في الثلاث لغات.

> ملاحظة: لا يوجد حقول `metaTitle`/`keywords`/`excerpt` منفصلة في هذا الـ Schema؛ الـ SEO يُشتق من `title`+`description` عبر مكوّن `SEO`/`Head`.

---

### الخطوة 14 — تسجيل المقال (3 مواقع)

1. **EN:** أضِف الكائن في `blogArticles` داخل [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx) (المفتاح = الـ slug).
2. **ar + ru:** أضِف مدخلًا بنفس الـ slug في [`src/data/blogTranslations.json`](src/data/blogTranslations.json) (`{ ar: {...}, ru: {...} }`).
3. **السجل:** أضِف الـ slug إلى [`src/data/blogSlugs.json`](src/data/blogSlugs.json).

> تأكّد أن `relatedArticles` تشير إلى slugs موجودة (وإلا تُصفّى صامتًا في `getStaticProps`). الصورة (`image`) يجب أن توجد فعلًا تحت `/public/images/...`.

---

## ⛔ كليشيهات ممنوعة (Anti-AI)

> 📚 الجدول الكامل → [`content-laws.md`](content-laws.md) §5 → [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) §1.

**التذكير السريع:** "In today's world" · "There's no doubt that" · "In conclusion" · "We strive to" · "cutting-edge technology" · "ultimate luxury" بلا تخصيص · "It is important to note that" → **احذفها** واستبدلها بحقيقة محددة برقم (مواصفة/سعر/موقع).

---

## ⛔ أخطاء شائعة

| # | الخطأ | الحل |
|---|-------|------|
| 1 | لا `image` (coverImage) | إلزامي لكل مقال |
| 2 | لا Quick-Answer Box | إلزامي ككتلة `paragraph` مُلوّنة أول المقال |
| 3 | استخدام `type: 'table'` أو `type: 'faq'` | ❌ غير مدعومين — استخدم `list` للمقارنات و heading+paragraph للـ FAQ |
| 4 | FAQ ≠ 5 | إلزامي 5 ككتل `content` لكل لغة |
| 5 | `relatedArticles` فارغ أو slug غير موجود | 3 slugs موجودة فعلًا من العنقود |
| 6 | `border-right` في EN/RU | استخدم `border-left` (LTR) — `border-right` لـ AR فقط |
| 7 | تكرار محتوى بين مقالات | زاوية فريدة لكل مقال (Information Gain) |
| 8 | اختلاق أرقام/مراجعات/خبرة | **محظور** — أرقام حقيقية فقط (§8، §النموذج الصادق) |
| 9 | ar/ru ملخّص لـ EN | عمق كامل ومتساوٍ (Trilingual Parity §12) |
| **10** ⚖️ | **رابط في EN content يبدأ بـ `/ar/` أو `/ru/` أو `/en/`** — يُسرّب القارئ الإنجليزي | EN بلا بادئة: `/fleet/...`, `/blog/...` |
| **11** ⚖️ | **رابط في AR content بلا `/ar/`** (أو RU بلا `/ru/`) | أضِف البادئة الصحيحة لكل لغة |
| **12** | نسيان `content` في ترجمة ar/ru | الدمج `{...EN,...tr}` يُظهر EN صامتًا — أضِف `content` كاملًا |
| **13** | slug غير مُسجَّل في `blogSlugs.json` | لن يُولَّد في `getStaticPaths`/sitemap — سجّله |

---

## ✅ Checklist نهائي قبل النشر

**🧬 الهوية:** العنوان فائدة/سؤال · Quick-Answer Box أول المقال (مُلوّن، 45-80 كلمة) · سياق دبي (2-3 إشارات) · فصحى راقية في AR (لا عامية) · أرقام حقيقية لكل ادعاء · Operational Callout فقط لو خبرة حقيقية.

**🗂️ Schema:** slug صحيح · `category` من الأربع · `date` ISO · `readTime` نصّي · `image` موجودة فعلًا · `author` اسم تحرير حقيقي من المستودع.

**🔗 Linking:** **3–5 روابط داخلية (حد أقصى 5)** = موضوعات + أسطول/خدمات · `relatedArticles` 3–5 (موجودة) · بقانون i18n المعكوس · CTA واتساب `wa.me/971558164922`.

**⚖️ i18n Reversal (أعلى أولوية):** EN: 0 روابط تبدأ بـ `/en|/ar|/ru` · AR: كل رابط داخلي `/ar/` · RU: كل رابط داخلي `/ru/` · روابط خارجية لا تتأثر.

**📝 المحتوى:** 5-8 `heading` · 🔴 **≥ 1,500 كلمة لكل لغة (en+ar+ru) — تحقّق §16-A** · فقرات قصيرة · Burstiness · `list` للمقارنات (لا `table`) · لا كليشيهات AI.

**🎭 الأسلوب ([`voice.md`](voice.md) ✅ معتمد):** شخصية «رجل العالم» — تهكّم بريطاني هادئ · AR فصحى راقية بلمسة خليجية · RU رصينة · مصطلحات تقنية بالإنجليزية.

**🔬 المصداقية:** كل رقم حقيقي قابل للتحقق · لا اختلاق مراجعات/خبرة/رخص (§8).

**❓ FAQ:** 5 بالضبط ككتل `content` لكل لغة · لا تكرار للجسم · أرقام/أسماء موديلات في الإجابات.

**📊 SEO:** `description` 150-160 حرف · quickAnswer 45-80 يطابق الـ Box · `title` واضح + دبي.

**🌐 Trilingual:** ar و ru بنفس عمق EN · أمثلة دبي في الثلاثة · `border-left` في EN/RU · أسعار AED في الثلاثة · `content` كامل في كل ترجمة.

**🧪 البوابة:** `node scripts/i18n-verify.mjs` يمر · `npm run build` نجح · التسجيل في 3 مواقع · roadmap محدّث.

---

## 🧩 المكونات المستخدمة في صفحة المقال

> مبرمجة في [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx) — لا إدخال يدوي، لكن اعرفها لتجنّب التكرار.

| المكوّن / الدالة | الدور | إدخال من المقال؟ |
|------------------|-------|------------------|
| `renderContent(content)` | يعرض كتل `content` — يدعم **paragraph / heading / list / image / cta فقط** | ✅ يقرأ `content` |
| `SEO` + `Head` | عنوان/وصف/hreflang/structured data | ✅ من `title`+`description` |
| `Layout` | الهيكل العام (header/footer/RTL) | ❌ تلقائي |
| `WhatsAppButton` | زر واتساب عائم (+971558164922) | ❌ تلقائي |
| `relatedArticlesData` | كروت المقالات ذات الصلة (من `relatedArticles`) | ✅ يقرأ `relatedArticles` |
| `getStaticPaths` | يبني المسارات من `blogSlugs.json` (+ مفاتيح `blogArticles`) لكل locale | ✅ يقرأ `blogSlugs.json` |
| `getStaticProps` | يدمج EN base مع ترجمة ar/ru: `{...base, ...translation}` | ✅ تلقائي |

> 💡 **الخلاصة العملية:** عند كتابة مقال جديد اهتم بـ: `content` (كتل) + `title` + `description` + `image` + `relatedArticles` + FAQ (ككتل) + Quick-Answer (ككتلة). الباقي تلقائي. **اكتب روابط i18n صحيحة من البداية** — لا تعتمد على أي إعادة كتابة تلقائية.

---

## 🤝 النموذج الصادق — الكتّاب وإشارات الثقة (E-E-A-T)

> **القاعدة الحاكمة:** كل ما يُكتب يجب أن يكون **حقيقيًا وقابلًا للتحقق**. هذا نشاط خدمي فاخر حقيقي في دبي — مصداقيته رأس ماله.

**١) نسب التأليف (`author`)**
- استخدم اسم شخصية تحرير **موجودة فعلًا** في المستودع: `Ahmed Salem`, `Sarah Mitchell`, `Fatima Al Rashid` (وغيرها مما يظهر في `blogArticles`/`blogTranslations.json`).
- ❌ **ممنوع:** اختلاق اسم جديد، أو نسب لقب خبرة غير حقيقي، أو "بقلم خبير X".

**٢) إشارات الثقة الحقيقية (بدل اختبارات مختلقة)**
- **مواصفات الأسطول الدقيقة** (محرك/قوة/مدى) من مصادر رولز رويس الرسمية.
- **شفافية الأسعار** (Ghost من AED 3,800 → Spectre 7,500) — تحقّق قبل الكتابة.
- **مواقع التسليم في دبي + احترافية السائق + الامتثال لـ RTA + خبرة التشغيل**.

**٣) المحظورات المطلقة**
- ❌ اختلاق مراجعات/تقييمات/نجوم · ❌ أرقام رخص أو أسماء مدير غير حقيقية · ❌ إحصاءات "خدمنا N عميل" غير مؤكدة · ❌ اختبارات/تجارب ميدانية لم تحدث · ❌ اقتباسات منسوبة لأشخاص بلا مصدر موثّق.
- إن احتجت رقمًا غير مؤكد → احذفه أو اسأل المالك، لا تخمّن.

> 💡 إشارة E-E-A-T الإيجابية تأتي من **الدقة والشفافية**: مواصفة صحيحة، سعر شفّاف، موقع تسليم واقعي — لا من تزيين مختلق.

---

## 📐 Templates جاهزة (نسخ مباشر)

### Template 1 — كائن المقال (EN) داخل `blogArticles` في [slug].tsx

```typescript
'your-new-article-slug': {
  title: 'English Title — Benefit or Question (Dubai)',
  description: 'Meta 150-160 chars: benefit + price/spec + Dubai context + soft CTA.',
  author: 'Ahmed Salem',                       // اسم تحرير حقيقي من المستودع
  date: '2026-06-24',
  readTime: '10 min read',
  category: 'Guides',                          // Guides | Luxury | Events | Tips
  image: '/images/Rolls-royce-dubai.jpg',      // coverImage إلزامي
  content: [ /* انظر Template 2 */ ],
  relatedArticles: ['rolls-royce-wedding-car-dubai', 'rolls-royce-phantom-vs-ghost-comparison', 'hourly-rolls-royce-rental-dubai'],
},
```

### Template 2 — كتل `content` (EN — بلا بادئة لغة)

```typescript
content: [
  // 1) افتتاحية
  { type: 'paragraph', text: 'Arriving in Dubai aboard a Rolls-Royce turns a journey into an event. Here is exactly what it costs, what you need, and how to choose the right model.' },

  // 2) Quick-Answer Box (إلزامي — EN: border-left)
  { type: 'paragraph', text: '<div style="background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;"><strong>💡 Quick Answer:</strong> Rolls-Royce rental in Dubai starts at <strong>AED 3,800/day</strong> (Ghost). You must be 25+, hold a valid UAE or international licence, and leave a refundable deposit. Free hotel delivery across Dubai; chauffeur optional. WhatsApp <a href="https://wa.me/971558164922">+971 55 816 4922</a>.</div>' },

  // 3) Operational Callout (اختياري — خبرة حقيقية فقط)
  { type: 'paragraph', text: '<div style="background:#0f0f0f;border:1px solid #2a2a2a;border-left:4px solid #c9a227;padding:20px;margin:32px 0;border-radius:8px;"><p style="color:#c9a227;font-weight:bold;margin:0 0 8px;">🛎️ From our Dubai operations</p><p style="margin:0;line-height:1.8;">We deliver detailed vehicles to Downtown, DIFC and Dubai Marina hotels, with the chauffeur walking you through the cabin systems before departure.</p></div>' },

  // 4) أقسام الجسم (5-8 heading)
  { type: 'heading', text: 'Which Rolls-Royce Should You Rent in Dubai?' },
  { type: 'paragraph', text: 'Your choice depends on the occasion, the route and the season.' },
  { type: 'list', items: [
    '<strong>Phantom:</strong> 6.75L V12, 563 hp — flagship presence for weddings and VIP arrivals',
    '<strong>Ghost:</strong> from AED 3,800/day — the balanced everyday luxury choice',
    '<strong>Cullinan:</strong> AED 6,500/day — luxury SUV for desert routes and families',
    '<strong>Dawn:</strong> open-top cruising along Palm Jumeirah and JBR',
    '<strong>Spectre:</strong> AED 7,500/day — the first all-electric Rolls-Royce'
  ]},
  { type: 'image', src: '/images/Rolls-Royce-front.jpg', alt: 'Rolls-Royce in Dubai', caption: 'The Spirit of Ecstasy leading through Dubai' },
  { type: 'heading', text: 'Requirements & Booking' },
  { type: 'list', ordered: true, items: [
    'Minimum age of 25 years',
    'Valid UAE driving licence or international permit',
    'Passport and visa copy',
    'Refundable security deposit',
    'Book 3-7 days ahead for peak season (Nov-Mar)'
  ]},

  // 5) رابط داخلي (EN — بلا بادئة) + CTA
  { type: 'paragraph', text: 'For weddings, see our <a href="/services/wedding">Rolls-Royce wedding service</a> or compare the <a href="/fleet/phantom">Phantom</a> and <a href="/fleet/ghost">Ghost</a>.' },
  { type: 'cta', text: 'Ready to arrive in unmatched style? Reserve your Rolls-Royce today.', buttonText: 'Book Your Rolls-Royce', buttonLink: '/booking' },

  // 6) FAQ (5 — ككتل)
  { type: 'heading', text: 'Frequently Asked Questions' },
  { type: 'heading', text: 'How much does it cost to rent a Rolls-Royce in Dubai?' },
  { type: 'paragraph', text: 'Daily rates start at AED 3,800 for the Ghost, AED 6,500 for the Cullinan and AED 7,500 for the all-electric Spectre. Longer rentals and off-peak dates lower the effective daily rate.' },
  { type: 'heading', text: 'Do I need a chauffeur?' },
  { type: 'paragraph', text: 'No — self-drive is available if you are 25+ with a valid licence. A chauffeur is optional and ideal for weddings, airport transfers and corporate events.' },
  { type: 'heading', text: 'Can you deliver the car to my hotel?' },
  { type: 'paragraph', text: 'Yes. We deliver free of charge to most Dubai hotels including Downtown, DIFC, Dubai Marina and Palm Jumeirah, and offer meet-and-greet at DXB and DWC airports.' },
  { type: 'heading', text: 'What is the best season to rent?' },
  { type: 'paragraph', text: 'November to March offers the most comfortable weather and highest demand. For open-top models like the Dawn, winter evenings along JBR are ideal.' },
  { type: 'heading', text: 'Which model is best for a wedding?' },
  { type: 'paragraph', text: 'The Phantom is the classic wedding flagship for its presence; the Ghost is a refined alternative. Both can be arranged with a professional chauffeur and decoration.' }
],
```

### Template 3 — مدخل ترجمة في `blogTranslations.json` (ar + ru)

> ⚠️ كل لغة تحمل `content` كاملًا بنفس البنية والعمق. **AR روابط `/ar/`** و **RU روابط `/ru/`**. **AR Callouts: `border-right`**.

```jsonc
"your-new-article-slug": {
  "ar": {
    "title": "العنوان بالعربية — فائدة أو سؤال (دبي)",
    "description": "وصف 150-160 حرفًا: فائدة + سعر/مواصفة + سياق دبي.",
    "readTime": "10 دقائق قراءة",
    "category": "أدلة",
    "author": "Ahmed Salem",
    "content": [
      { "type": "paragraph", "text": "الوصول في دبي على متن رولز رويس يحوّل الرحلة إلى حدث..." },
      { "type": "paragraph", "text": "<div style=\"background:#1a1a1a;border-right:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 الإجابة السريعة:</strong> يبدأ تأجير رولز رويس في دبي من <strong>3,800 درهم/اليوم</strong> (جوست)... للحجز واتساب <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>" },
      { "type": "heading", "text": "أي رولز رويس تختار في دبي؟" },
      { "type": "list", "items": [
        "<strong>فانتوم:</strong> محرك 6.75L V12 بقوة 563 حصانًا — حضور رائد للأعراس",
        "<strong>جوست:</strong> من 3,800 درهم/اليوم — الخيار المتوازن"
      ]},
      { "type": "paragraph", "text": "للأعراس راجع <a href=\"/ar/services/wedding\">خدمة الزفاف</a> أو قارن بين <a href=\"/ar/fleet/phantom\">فانتوم</a> و<a href=\"/ar/fleet/ghost\">جوست</a>." },
      { "type": "cta", "text": "هل أنت مستعد للوصول بأناقة لا تُضاهى؟ احجز رولز رويس اليوم.", "buttonText": "احجز رولز رويس", "buttonLink": "/ar/booking" },
      { "type": "heading", "text": "الأسئلة الشائعة" },
      { "type": "heading", "text": "كم تكلفة تأجير رولز رويس في دبي؟" },
      { "type": "paragraph", "text": "تبدأ الأسعار اليومية من 3,800 درهم للجوست و6,500 للكولينان و7,500 للسبيكتر الكهربائية." }
      /* أكمل حتى 5 أسئلة FAQ + باقي الأقسام بنفس عمق EN (≥ 1,500 كلمة) */
    ]
  },
  "ru": {
    "title": "Заголовок по-русски — выгода или вопрос (Дубай)",
    "description": "Описание 150-160 символов: выгода + цена/характеристика + контекст Дубая.",
    "readTime": "10 мин чтения",
    "category": "Гиды",
    "author": "Ahmed Salem",
    "content": [
      { "type": "paragraph", "text": "Прибытие в Дубай на Rolls-Royce превращает поездку в событие..." },
      { "type": "paragraph", "text": "<div style=\"background:#1a1a1a;border-left:4px solid #c9a227;padding:16px 20px;margin:24px 0;border-radius:8px;\"><strong>💡 Краткий ответ:</strong> Аренда Rolls-Royce в Дубае от <strong>3 800 AED/день</strong> (Ghost)... WhatsApp <a href=\"https://wa.me/971558164922\">+971 55 816 4922</a>.</div>" },
      { "type": "heading", "text": "Какой Rolls-Royce выбрать в Дубае?" },
      { "type": "list", "items": [
        "<strong>Phantom:</strong> 6.75L V12, 563 л.с. — флагман для свадеб",
        "<strong>Ghost:</strong> от 3 800 AED/день — сбалансированный выбор"
      ]},
      { "type": "paragraph", "text": "Для свадеб см. <a href=\"/ru/services/wedding\">свадебный сервис</a> или сравните <a href=\"/ru/fleet/phantom\">Phantom</a> и <a href=\"/ru/fleet/ghost\">Ghost</a>." },
      { "type": "cta", "text": "Готовы прибыть с непревзойдённым стилем? Забронируйте Rolls-Royce сегодня.", "buttonText": "Забронировать Rolls-Royce", "buttonLink": "/ru/booking" },
      { "type": "heading", "text": "Часто задаваемые вопросы" },
      { "type": "heading", "text": "Сколько стоит аренда Rolls-Royce в Дубае?" },
      { "type": "paragraph", "text": "Цены начинаются от 3 800 AED за Ghost, 6 500 за Cullinan и 7 500 за электрический Spectre." }
      /* продолжите до 5 FAQ + остальные разделы с той же глубиной (≥ 1500 слов) */
    ]
  }
}
```

> ⚠️ **RU استخدم `border-left`** (LTR) في الـ Box و Callouts — على عكس AR.

---

## 📚 المراجع

| المرجع | الدور |
|--------|------|
| [`content-laws.md`](content-laws.md) | القوانين العابرة (i18n المعكوس + Trilingual Parity + Voice + Authority + Anti-AI) — **اقرأه قبل أي كتابة** |
| [`voice.md`](voice.md) | المرجع الكنوني لـ Voice & Tone — **✅ معتمد (شخصية «رجل العالم»)** |
| [`rollsroycers_content_blueprint.md`](rollsroycers_content_blueprint.md) | Burstiness + Information Gain + AEO + E-E-A-T لتأجير الفخامة |
| [`rollsroycers-blog-roadmap.md`](rollsroycers-blog-roadmap.md) | قائمة الموضوعات + المنشور + العناقيد + Auto-Workflow |
| [`rollsroycers-blog-titles-2026.md`](rollsroycers-blog-titles-2026.md) | بنك 700 عنوان (عناقيد + كلمات مفتاحية) |
| [`rollsroycers-image-prompts.md`](rollsroycers-image-prompts.md) | نظام صور المدونة (تسمية + برومبتات) — **✅ معتمد** |
| [`src/pages/blog/[slug].tsx`](src/pages/blog/[slug].tsx) | كائنات EN (`blogArticles`) + `renderContent` + getStaticProps/Paths |
| [`src/data/blogTranslations.json`](src/data/blogTranslations.json) | ترجمات ar + ru (نفس بنية الكتل) |
| [`src/data/blogSlugs.json`](src/data/blogSlugs.json) | سجل الـ slugs (paths + sitemap) |
| [`scripts/i18n-verify.mjs`](scripts/i18n-verify.mjs) | بوابة التدقيق الرسمية (0 مفاتيح خام + لا FAQPage مكرّر) |
| [`scripts/generate-sitemap.mjs`](scripts/generate-sitemap.mjs) | sitemap آلي (en/ar/ru) |

---

## 🎯 الخلاصة

كل مقال جديد يجب أن: (1) يبدأ بفائدة/سؤال + Quick-Answer Box ككتلة مُلوّنة · (2) سياق دبي طبيعي (2-3 إشارات) · (3) كل ادعاء برقم **حقيقي** (لا اختلاق) · (4) فصحى راقية في AR، روسية احترافية في RU، إنجليزية فاخرة · (5) 5 FAQ ككتل + 3 related · (6) **Trilingual Parity (EN === AR === RU)** بنفس العمق · (7) ⚖️ **i18n معكوس** (EN بلا بادئة · AR `/ar/` · RU `/ru/`) · (8) لا كليشيهات AI · 🔴 (9) **≥ 1,500 كلمة لكل لغة — مُتحقَّق بـ §16-A** · (10) مُسجَّل في **3 مواقع** (blogArticles + blogTranslations + blogSlugs) · (11) `npm run build` ثم `npm run deploy` (warm-cache) ثم الفهرسة عند موعد النشر الفعلي فقط للروابط الثلاثة.

**النتيجة:** محتوى ثلاثي اللغة يربح خوارزميًا (AI Overviews + Featured Snippets) ويبني ثقة في سوق الفخامة بدبي، ويحفظ هوية Rolls-Royce Dubai كمستشار فخامة موثوق — على ستاك Next.js Pages Router + OpenNext/Cloudflare Workers.
