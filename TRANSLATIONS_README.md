# 🌐 دليل نظام الترجمات السريع - Rolls-Royce Dubai

## 🚀 **الأوامر السريعة**

```bash
# فحص سريع للترجمات
npm run translations:check

# تشخيص المشاكل
npm run translations:debug

# فحص namespace SEO
npm run translations:audit-seo

# إصلاح namespace SEO (إذا احتجت)
npm run translations:fix-seo

# اختبار شامل
npm run translations:test

# إنشاء تقرير مفصل
npm run translations:report
```

## 📁 **هيكل ملفات الترجمة**

```
public/locales/
├── en/              # الإنجليزية
│   ├── common.json  # المحتوى العام
│   └── seo.json     # العناوين والأوصاف
├── ar/              # العربية
├── ru/              # الروسية
├── fr/              # الفرنسية
├── zh/              # الصينية
└── hi/              # الهندية
```

## ⚡ **إضافة صفحة جديدة**

عند إنشاء صفحة جديدة تستخدم `<SEO>`:

```typescript
// في getStaticProps
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'seo'])),
      //                                                            ⬆️ مهم!
    },
  }
}

// في المكون
<SEO pageKey="other.new-page" />
```

ثم أضف المفاتيح في `public/locales/*/seo.json`:
```json
{
  "pages": {
    "other": {
      "new-page": {
        "title": "عنوان الصفحة",
        "description": "وصف الصفحة",
        "keywords": "كلمات مفتاحية"
      }
    }
  }
}
```

## 🔧 **استكشاف الأخطاء**

### مشكلة: تظهر مفاتيح بدلاً من النصوص
```bash
# 1. تحقق من ملفات الترجمة
npm run translations:check

# 2. تحقق من namespace seo
npm run translations:audit-seo

# 3. إصلح إذا احتجت
npm run translations:fix-seo
```

### مشكلة: ترجمة مفقودة
```bash
# 1. شخص المشكلة
npm run translations:debug

# 2. أضف المفتاح المفقود في الملفات المناسبة
```

## 📊 **مراقبة دورية**

```bash
# فحص أسبوعي
npm run translations:test

# تقرير شهري
npm run translations:report
```

## 🎯 **مؤشرات النجاح**

- ✅ 0% مفاتيح ظاهرة على الموقع
- ✅ 100% اكتمال الترجمة
- ✅ جميع العناوين تعمل بشكل صحيح
- ✅ SEO محسن لجميع اللغات

## 🚨 **تحذيرات مهمة**

1. **لا تنس إضافة `'seo'` namespace** عند إنشاء صفحات جديدة
2. **احتفظ بتنسيق JSON صحيح** في ملفات الترجمة
3. **اختبر جميع اللغات** بعد أي تغيير
4. **استخدم الأدوات المرفقة** للفحص الدوري

---

**🏆 النظام جاهز للاستخدام والإنتاج!** 