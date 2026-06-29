# 🏆 كتاب السيطرة المتقدم — RollsRoycers Dominance Playbook

> **طبقة متقدمة فوق `rollsroycers-blog.md`** — استراتيجيات للسيطرة على نتائج البحث والاقتباسات في AI Overviews. الهدف: تسجيل ≥80/100 في كل مقياس.
> **التقسيم:** *ماذا نستهدف* → [`rollsroycers-keyword-strategy.md`](rollsroycers-keyword-strategy.md) · *كيف نكتب* → [`rollsroycers-blog.md`](rollsroycers-blog.md) · *كيف نسيطر* → **أنت هنا**.

---

## §1 — GEO: تحسين لـ Generative Engine (AI Overviews / SGE)

> **الهدف:** أن تقتبسنا AI Overviews من Google و Bing Copilot و ChatGPT كمصدر أساسي عن تأجير رولز رويس في دبي.

### 1.1 بصمة الاقتباس الذرية (Atomic Citation Footprint)
- **كل فقرة = حقيقة قابلة للاقتباس:** لا فقرات عامة أو "فخمة بامتياز". كل جملة تحمل بيانات محددة (رقم، مواصفة، سعر، موقع).
- **نمط المعلومة المُقتبَسة:**
  ```
  The Rolls-Royce Ghost produces 563 hp from its 6.75-litre twin-turbo V12,
  and is available for rental in Dubai from AED 3,800 per day with free
  delivery to Downtown Dubai, DIFC, and Palm Jumeirah.
  ```
  ← هذه الجملة تحتوي 5 بيانات قابلة للاقتباس (قوة، سعة، سعر، مناطق تسليم).

### 1.2 معرّفات القياس (Measurement IDs)
- **كل ادعاء كمّي يجب أن يحمل وحدة قياس:**
  - ✅ `6.75-litre V12` · `563 hp` · `AED 3,800/day` · `0–100 km/h in 4.8s` · `520 km range`
  - ❌ `powerful engine` · `competitive price` · `long range`
- **لماذا:** AI engines ترتّب المصادر حسب "information gain" — المصدر الذي يقدم أرقاماً محددة يُقتبَس أكثر.

### 1.3 ليدربورد مُرتّب (Ranked Leaderboards)
- **في مقالات المقارنة:** ضع جدول ترتيب واضح (لا مساواة مبهمة):
  ```
  | Rank | Model    | Power  | Daily Rate | Best For         |
  |------|----------|--------|------------|------------------|
  | 1    | Phantom  | 563 hp | AED 5,500  | Weddings & VIP   |
  | 2    | Cullinan | 563 hp | AED 6,500  | Families & Tours |
  | 3    | Ghost    | 563 hp | AED 3,800  | Business & Daily |
  ```
- **لماذا:** AI Overviews تُفضّل المصادر التي تُرتّب الخيارات بوضوح.

### 1.4 إشارات الحداثة (Freshness Signals)
- **الصور:** C2PA Content Credentials + EXIF DateTimeOriginal = إثبات أن المحتوى حديث.
- **الأسعار:** بتاريخ `As of [Month Year]` — يُظهر للـ AI engine أن البيانات مُحدّثة.
- **الخدمات:** ذكر أحداث قادمة في دبي (Dubai Shopping Festival, Expo, F1 Abu Dhabi) كسياق.

### 1.5 حلقات مقاومة الاقتباسات (Counter-Citation Loops)
- إذا اقتبس منافس معلومة خاطئة عن رولز رويس أو أسعار التأجير → **اكتب فقرة تصحيحية** بالدليل.
- **النمط:** "Unlike commonly stated, the Rolls-Royce Spectre is not a concept car — it's a production vehicle available for rent in Dubai..."

---

## §2 — AEO: Answer Engine Optimization (تحسين محركات الإجابة)

### 2.1 صندوق الإجابة السريعة (Quick Answer Box)
- **كل مقال يبدأ بـ Quick Answer** (45-80 كلمة) — فقرة ملوّنة في أول الـ content.
- **هيكل الإجابة المثالي (BLUF — Bottom Line Up Front):**
  1. الإجابة المباشرة في أول جملة
  2. الرقم الداعم (سعر/مواصفة)
  3. الـ CTA (واتساب/حجز)
- **مثال:**
  > A Rolls-Royce Ghost costs AED 3,800 per day to rent in Dubai, including insurance and 250 km. Delivery is free to any Dubai hotel. Book via WhatsApp: +971558164922.

### 2.2 FAQ Schema المُهيمِن
- **5 أسئلة FAQ بالضبط لكل لغة** — مصاغة كأسئلة يطرحها المستخدم الحقيقي.
- **قاعدة "People Also Ask":** صِغ الأسئلة كما تظهر في Google PAA — ليس أسئلة أكاديمية.
  - ✅ "How much does it cost to rent a Rolls-Royce in Dubai?"
  - ❌ "What are the economic considerations of Rolls-Royce rental?"
- **الإجابة:** أول جملة = الإجابة الكاملة. ثم توسيع بالتفاصيل.

### 2.3 جداول المقارنة الهيكلية
- **في كل مقال مقارنة أو سعري:** ضع جدول HTML/markdown منظم.
- **لماذا:** AI engines ومحركات البحث تستخرج الجداول كإجابات مباشرة.

---

## §3 — SERP Feature Hunting (اصطياد ميزات نتائج البحث)

### 3.1 Featured Snippet Bait
- **لكل H2:** ضع فقرة 40-60 كلمة بعده مباشرة تجيب على السؤال بشكل كامل — هذه هي "الطُعم" لـ Featured Snippet.
- **أنماط الطُعم:**
  - **تعريف:** "A Rolls-Royce Phantom is [definition]. It features [key specs]..."
  - **قائمة مرقّمة:** "The 5 steps to rent a Rolls-Royce in Dubai: 1. Choose your model..."
  - **جدول:** أسعار مقارنة بين الموديلات

### 3.2 Image Pack
- **الصور بأسماء ملفات وصفية + alt text ثلاثي اللغة** (يتم عبر `blog-img-metadata.mjs`).
- **Schema ImageObject** مع `contentUrl` + `caption` + `width/height`.
- **C2PA signatures** — تعطي الصور مصداقية إضافية في نتائج الصور.

### 3.3 Video Carousel (مستقبلي)
- عند إنتاج فيديوهات قصيرة لرولز رويس → ضع Schema VideoObject في المقال.
- استهدف "rolls royce dubai" + "rental experience" كفيديوهات YouTube Shorts.

---

## §4 — سلطة المحور (Pillar Authority Building)

### 4.1 بنية الروابط الداخلية
- **كل Supporting يربط صعوداً** إلى Pillar-ه + Money Page.
- **كل Pillar يربط أفقياً** إلى 2-3 محاور أخرى من عناقيد مختلفة.
- **النتيجة:** شبكة silo واضحة يفهمها Google كسلطة موضوعية.

### 4.2 قاعدة "المحور أولاً"
- **Pillars تُنشر قبل Supporting** (مضمّن في `publish-schedule.json`).
- السبب: حين يُنشر الداعم، يجد رابط المحور حياً → link equity يتدفق فوراً.

### 4.3 تحديث المحاور
- بعد نشر كل 5 دواعم جديدة → **حدّث محورها** بإضافة "See Also" أو فقرة سياقية جديدة.
- هذا يعطي المحور إشارة freshness مستمرة.

---

## §5 — سلطة الكيان (Entity Authority)

### 5.1 Schema.org المُعزّز
- **BlogPosting** مع `author` (Person) + `publisher` (Organization: Naqra FZE) + `about` (Thing: Rolls-Royce).
- **LocalBusiness** في الصفحات الرئيسية — يربط الكيان بدبي جغرافياً.
- **sameAs** إلى صفحات ويكيبيديا لرولز رويس + صفحة LinkedIn لـ Naqra FZE.

### 5.2 بناء كيان "Naqra FZE" في Knowledge Graph
- **اسم ثابت** في كل Schema: `"Naqra FZE"` (ليس "RollsRoycers" أو "Rolls Royce Dubai Rental")
- **عنوان ثابت:** Dubai, UAE
- **هاتف ثابت:** +971558164922
- **شعار ثابت:** URL واحد لا يتغير

---

## §6 — قائمة التحقق للمقال المُسيطر (≥80/100)

- [ ] Quick Answer في أول 80 كلمة (BLUF)
- [ ] 5+ بيانات كمية بوحدات قياس في كل قسم
- [ ] جدول مقارنة/ترتيب واحد على الأقل
- [ ] FAQ × 5 (مصاغة كـ PAA) × 3 لغات
- [ ] Featured Snippet bait بعد كل H2 (40-60 كلمة)
- [ ] Schema BlogPosting + FAQ كامل
- [ ] صور بـ C2PA + alt text ثلاثي اللغة
- [ ] 3-5 روابط داخلية (Pillar ↔ Supporting ↔ Money Page)
- [ ] سياق دبي (2-3 معالم/مواسم/خدمات)
- [ ] أسعار AED محدّثة مع تاريخ
