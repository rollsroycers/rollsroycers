const fs = require('fs');
const path = require('path');

const translations = {
  ar: {
    "cookie-policy": {
      "title": "سياسة ملفات تعريف الارتباط | رولز رويس دبي - كيف نستخدم ملفات تعريف الارتباط",
      "description": "تعرف على كيفية استخدام رولز رويس دبي لملفات تعريف الارتباط لتحسين تجربة التصفح. تشرح سياسة ملفات تعريف الارتباط أنواع ملفات تعريف الارتباط التي نستخدمها وكيفية إدارتها وحقوق الخصوصية الخاصة بك.",
      "keywords": "سياسة ملفات تعريف الارتباط، ملفات تعريف الارتباط الخصوصية، ملفات تعريف ارتباط الموقع، إدارة ملفات تعريف الارتباط، حماية البيانات، موافقة ملفات تعريف الارتباط، سياسة الخصوصية، استخدام ملفات تعريف الارتباط، تتبع الموقع، الخصوصية عبر الإنترنت"
    }
  },
  fr: {
    "cookie-policy": {
      "title": "Politique des cookies | Rolls-Royce Dubaï - Comment nous utilisons les cookies",
      "description": "Découvrez comment Rolls-Royce Dubaï utilise les cookies pour améliorer votre expérience de navigation. Notre politique des cookies explique les types de cookies que nous utilisons, comment les gérer et vos droits en matière de confidentialité.",
      "keywords": "politique des cookies, cookies de confidentialité, cookies de site web, gestion des cookies, protection des données, consentement aux cookies, politique de confidentialité, utilisation des cookies, suivi du site web, confidentialité en ligne"
    }
  },
  zh: {
    "cookie-policy": {
      "title": "Cookie政策 | 劳斯莱斯迪拜 - 我们如何使用Cookie",
      "description": "了解劳斯莱斯迪拜如何使用Cookie来增强您的浏览体验。我们的Cookie政策解释了我们使用的Cookie类型、如何管理它们以及您的隐私权利。",
      "keywords": "Cookie政策, 隐私Cookie, 网站Cookie, Cookie管理, 数据保护, Cookie同意, 隐私政策, Cookie使用, 网站跟踪, 在线隐私"
    }
  },
  ru: {
    "cookie-policy": {
      "title": "Политика использования файлов cookie | Rolls-Royce Дубай - Как мы используем файлы cookie",
      "description": "Узнайте, как Rolls-Royce Дубай использует файлы cookie для улучшения вашего опыта просмотра. Наша политика использования файлов cookie объясняет типы файлов cookie, которые мы используем, как управлять ими и ваши права на конфиденциальность.",
      "keywords": "политика файлов cookie, файлы cookie конфиденциальности, файлы cookie веб-сайта, управление файлами cookie, защита данных, согласие на файлы cookie, политика конфиденциальности, использование файлов cookie, отслеживание веб-сайта, конфиденциальность в интернете"
    }
  },
  hi: {
    "cookie-policy": {
      "title": "कुकी नीति | रोल्स-रॉयस दुबई - हम कुकीज़ का उपयोग कैसे करते हैं",
      "description": "जानें कि रोल्स-रॉयस दुबई आपके ब्राउज़िंग अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग कैसे करता है। हमारी कुकी नीति बताती है कि हम किस प्रकार की कुकीज़ का उपयोग करते हैं, उन्हें कैसे प्रबंधित करें और आपके गोपनीयता अधिकार।",
      "keywords": "कुकी नीति, गोपनीयता कुकीज़, वेबसाइट कुकीज़, कुकी प्रबंधन, डेटा सुरक्षा, कुकी सहमति, गोपनीयता नीति, कुकीज़ का उपयोग, वेबसाइट ट्रैकिंग, ऑनलाइन गोपनीयता"
    }
  }
};

Object.entries(translations).forEach(([lang, cookiePolicyData]) => {
  const filePath = path.join(__dirname, '..', 'public', 'locales', lang, 'seo.json');
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const seoData = JSON.parse(content);
    
    // Check structure and add cookie-policy in the appropriate place
    if (seoData.pages) {
      // For files with 'pages' root structure (ar, fr, zh, ru, hi)
      if (!seoData.pages["cookie-policy"]) {
        seoData.pages["cookie-policy"] = cookiePolicyData["cookie-policy"];
        
        fs.writeFileSync(filePath, JSON.stringify(seoData, null, 2) + '\n', 'utf8');
        console.log(`✅ Added cookie-policy SEO to ${lang}/seo.json`);
      } else {
        console.log(`⏭️ Cookie-policy SEO already exists in ${lang}/seo.json`);
      }
    } else if (seoData.seo?.other) {
      // For files with 'seo.other' structure (en)
      if (!seoData.seo.other["cookie-policy"]) {
        seoData.seo.other["cookie-policy"] = cookiePolicyData["cookie-policy"];
        
        fs.writeFileSync(filePath, JSON.stringify(seoData, null, 2) + '\n', 'utf8');
        console.log(`✅ Added cookie-policy SEO to ${lang}/seo.json`);
      } else {
        console.log(`⏭️ Cookie-policy SEO already exists in ${lang}/seo.json`);
      }
    } else {
      console.log(`⚠️ Could not find expected structure in ${lang}/seo.json`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${lang}/seo.json:`, error.message);
  }
});

console.log('\n✅ Cookie policy SEO translations added successfully!');