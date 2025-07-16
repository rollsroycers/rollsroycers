# 🌍 دليل الترجمات السريع - موقع Rolls-Royce Dubai

## 🚀 **الأوامر الأساسية**

### **فحص الترجمات:**
```bash
npm run translations:check          # فحص اكتمال الترجمات
npm run translations:test           # اختبار شامل لجميع الملفات
npm run translations:extract-keys   # استخراج المفاتيح من الكود
```

### **إصلاح المشاكل:**
```bash
npm run translations:complete       # إكمال المفاتيح المفقودة
npm run translations:update-code    # تحديث namespace في الملفات
npm run translations:fix-seo        # إصلاح مشاكل SEO
```

### **إعداد كامل جديد:**
```bash
npm run translations:full-setup     # إعداد شامل للترجمات
```

---

## 📂 **بنية الملفات**

```
public/locales/[lang]/
├── navigation.json     # قوائم التنقل والمواقع
├── footer.json         # محتوى Footer
├── services.json       # جميع الخدمات والباقات
├── fleet.json          # معلومات السيارات
├── pages.json          # صفحات خاصة (terms, privacy)
├── common.json         # محتوى عام ومشترك
└── seo.json           # عناوين وأوصاف الصفحات
```

---

## 🔧 **إضافة صفحة جديدة**

### **1. إضافة namespace للصفحة:**
```typescript
// في src/pages/my-new-page.tsx
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', [
        'common', 'seo', 'navigation'  // أضف namespace حسب الحاجة
      ])),
    },
  }
}
```

### **2. إضافة المفاتيح للملفات:**
```json
// في public/locales/en/seo.json
{
  "pages": {
    "myNewPage": {
      "title": "My New Page Title",
      "description": "Page description for SEO"
    }
  }
}
```

### **3. استخدام في المكون:**
```typescript
// في المكون
import { useTranslation } from 'next-i18next'

const { t } = useTranslation('seo')
<SEO pageKey="myNewPage" />
```

---

## 🌍 **اللغات المدعومة**

1. **🇺🇸 English (en)** - الأساس
2. **🇦🇪 العربية (ar)** - مترجمة بالكامل
3. **🇷🇺 Русский (ru)** - تترجم تلقائياً
4. **🇫🇷 Français (fr)** - تترجم تلقائياً
5. **🇨🇳 中文 (zh)** - تترجم تلقائياً
6. **🇮🇳 हिंदी (hi)** - تترجم تلقائياً

---

## ⚠️ **نصائح مهمة**

### **✅ افعل:**
- استخدم namespace مناسب لكل صفحة
- اختبر `npm run build` بعد التغييرات
- استخدم مفاتيح واضحة ومنطقية
- افحص جميع اللغات

### **❌ لا تفعل:**
- لا تحذف مفاتيح مستخدمة
- لا تنس إضافة namespace للصفحات الجديدة
- لا تستخدم مفاتيح مكررة
- لا تترك مفاتيح فارغة

---

## 🆘 **حل المشاكل الشائعة**

### **مشكلة: مفاتيح تظهر للمستخدم**
```bash
# 1. فحص namespace
npm run translations:extract-keys

# 2. إصلاح المفاتيح المفقودة
npm run translations:complete

# 3. اختبار
npm run build
```

### **مشكلة: صفحة جديدة لا تعمل**
```bash
# 1. تحديث الكود
npm run translations:update-code

# 2. اختبار
npm run translations:test
```

### **مشكلة: بناء فاشل**
```bash
# إعادة إعداد كاملة
npm run translations:full-setup
npm run build
```

---

## 📞 **الدعم**

إذا واجهت مشاكل، استخدم:
1. `npm run translations:debug` - تشخيص مفصل
2. `npm run translations:report` - تقرير شامل
3. راجع الملفات في `scripts/` للأدوات المساعدة

---

**🎯 الموقع يدعم 6 لغات مع 202 صفحة تعمل بشكل مثالي!** ✨ 