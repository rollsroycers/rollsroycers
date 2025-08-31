const fs = require('fs');
const path = require('path');

// ترجمات مقال Dubai Motor Show 2024 لجميع اللغات
const translations = {
  ar: {
    slug: 'dubai-motor-show-2024',
    title: 'معرض دبي الدولي للسيارات 2024: رولز رويس تخطف الأضواء',
    description: 'عش روعة معرض دبي الدولي للسيارات 2024. كشف حصري عن موديلات رولز رويس الجديدة، العروض الحية، ومستقبل الفخامة في الشرق الأوسط.',
    content: 'تغطية شاملة لمعرض دبي الدولي للسيارات 2024 مع التركيز على رولز رويس سبيكتر الكهربائية، مجموعة الخليج العربي المحدودة، والابتكارات المستقبلية.',
    keywords: ['معرض دبي للسيارات', 'رولز رويس سبيكتر', 'سيارات كهربائية فاخرة', 'مجموعة الخليج العربي', 'معرض السيارات 2024']
  },
  fr: {
    slug: 'dubai-motor-show-2024',
    title: 'Salon International de l\'Automobile de Dubaï 2024: Rolls-Royce Vole la Vedette',
    description: 'Découvrez la grandeur du Salon de l\'Auto de Dubaï 2024. Dévoilements exclusifs Rolls-Royce, nouveaux modèles et l\'avenir du luxe automobile au Moyen-Orient.',
    content: 'Couverture complète du Salon de Dubaï 2024 avec focus sur la Rolls-Royce Spectre électrique, la Collection Golfe Arabique exclusive et les innovations futures.',
    keywords: ['Salon auto Dubaï', 'Rolls-Royce Spectre', 'voitures électriques luxe', 'Collection Golfe', 'Salon automobile 2024']
  },
  hi: {
    slug: 'dubai-motor-show-2024',
    title: 'दुबई इंटरनेशनल मोटर शो 2024: रोल्स-रॉयस ने चुराई सुर्खियां',
    description: 'दुबई इंटरनेशनल मोटर शो 2024 की भव्यता का अनुभव करें। रोल्स-रॉयस के विशेष अनावरण, नए मॉडल और मध्य पूर्व में लक्जरी का भविष्य।',
    content: 'दुबई मोटर शो 2024 की संपूर्ण कवरेज, रोल्स-रॉयस स्पेक्टर इलेक्ट्रिक, अरेबियन गल्फ कलेक्शन और भविष्य की नवाचार।',
    keywords: ['दुबई मोटर शो', 'रोल्स-रॉयस स्पेक्टर', 'इलेक्ट्रिक लक्जरी कार', 'अरेबियन गल्फ कलेक्शन', 'मोटर शो 2024']
  },
  ru: {
    slug: 'dubai-motor-show-2024',
    title: 'Дубайский международный автосалон 2024: Rolls-Royce крадет шоу',
    description: 'Откройте для себя величие Дубайского автосалона 2024. Эксклюзивные премьеры Rolls-Royce, новые модели и будущее роскоши на Ближнем Востоке.',
    content: 'Полное освещение Дубайского автосалона 2024 с фокусом на электрический Rolls-Royce Spectre, эксклюзивную коллекцию Arabian Gulf и будущие инновации.',
    keywords: ['Дубайский автосалон', 'Rolls-Royce Spectre', 'электрические люкс авто', 'Коллекция Arabian Gulf', 'Автосалон 2024']
  },
  zh: {
    slug: 'dubai-motor-show-2024',
    title: '2024迪拜国际车展：劳斯莱斯成为焦点',
    description: '体验2024迪拜国际车展的盛况。劳斯莱斯独家发布、新车型、现场演示以及中东奢华汽车的未来。',
    content: '2024迪拜车展全面报道，聚焦劳斯莱斯电动Spectre、阿拉伯湾限量系列以及未来创新。',
    keywords: ['迪拜车展', '劳斯莱斯Spectre', '电动豪车', '阿拉伯湾系列', '2024车展']
  }
};

console.log('✅ Dubai Motor Show 2024 - ترجمات جاهزة لجميع اللغات:');
console.log('📝 اللغات المتوفرة:');
console.log('   - العربية (ar)');
console.log('   - الفرنسية (fr)');
console.log('   - الهندية (hi)');
console.log('   - الروسية (ru)');
console.log('   - الصينية (zh)');
console.log('\n📌 المحتوى محسّن للسيو في جميع اللغات');
console.log('🎯 الكلمات المفتاحية مُحدّثة لكل لغة');

module.exports = translations;