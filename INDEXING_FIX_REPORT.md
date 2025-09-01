
# تقرير إصلاح مشاكل الفهرسة
تاريخ: 2025-09-01T14:17:58.052Z

## المشكلة المكتشفة
- Google Search Console يظهر 32 صفحة "Discovered - currently not indexed"
- معظم هذه الصفحات (27 صفحة) هي صفحات إنجليزية مع /en/ prefix

## السبب الجذري
1. Google يكتشف الصفحات الإنجليزية بـ /en/ prefix
2. الـ canonical URLs للصفحات الإنجليزية يجب أن تكون بدون prefix
3. هذا يسبب duplicate content issues

## الحلول المطبقة

### 1. إضافة Permanent Redirects (301)
تم إضافة redirects من /en/* إلى /* لجميع الصفحات الإنجليزية:
- /en/ → /
- /en/about → /about
- /en/blog → /blog
- /en/blog/rolls-royce-dawn-convertible-dubai → /blog/rolls-royce-dawn-convertible-dubai
- /en/blog/rolls-royce-wedding-car-dubai → /blog/rolls-royce-wedding-car-dubai
- /en/blog/top-scenic-drives-dubai → /blog/top-scenic-drives-dubai
- /en/blog/ultimate-guide-rolls-royce-rental-dubai → /blog/ultimate-guide-rolls-royce-rental-dubai
- /en/booking → /booking
- /en/compare/rolls-royce-vs-bentley → /compare/rolls-royce-vs-bentley
- /en/contact → /contact
- /en/faq → /faq
- /en/fleet/cullinan → /fleet/cullinan
- /en/fleet/dawn → /fleet/dawn
- /en/fleet/ghost → /fleet/ghost
- /en/fleet/phantom → /fleet/phantom
- /en/fleet/wraith → /fleet/wraith
- /en/locations/difc → /locations/difc
- /en/locations/downtown-dubai → /locations/downtown-dubai
- /en/locations/dubai-marina → /locations/dubai-marina
- /en/locations/jbr → /locations/jbr
- /en/pricing → /pricing
- /en/privacy → /privacy
- /en/services/airport-transfer → /services/airport-transfer
- /en/services/chauffeur → /services/chauffeur
- /en/services/corporate → /services/corporate
- /en/services/tours → /services/tours
- /en/services/wedding → /services/wedding

### 2. تحديث خريطة الموقع
- التأكد من أن خريطة الموقع تحتوي فقط على canonical URLs
- الصفحات الإنجليزية بدون /en/ prefix
- اللغات الأخرى مع prefix مناسب

### 3. تحسينات SEO إضافية
- إضافة canonical tags صحيحة
- تحسين alternate hreflang tags
- إضافة structured data

## الخطوات التالية
1. نشر التغييرات على الموقع
2. إرسال خريطة الموقع المحدثة إلى Google Search Console
3. استخدام URL Inspection tool لطلب فهرسة الصفحات
4. مراقبة التقدم خلال 2-4 أسابيع

## الصفحات التي تحتاج متابعة خاصة
- https://rollsroycers.com/ar/blog/rolls-royce-dawn-convertible-dubai
- https://rollsroycers.com/ar/locations/downtown-dubai
- https://rollsroycers.com/fr/blog/luxury-shopping-dubai-rolls-royce
- https://rollsroycers.com/hi/faq
