import React from 'react';
import { useTranslation } from 'next-i18next';

interface DubaiLocalSEOProps {
  location: string;
  title: string;
  description: string;
}

interface LocationData {
  name: string;
  description: string;
  landmarks: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

const DubaiLocalSEO: React.FC<DubaiLocalSEOProps> = ({ location, title, description }) => {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language || 'en';
  
  // Dubai location data with coordinates and landmarks
  const dubaiLocations: Record<string, Record<string, LocationData>> = {
    'downtown-dubai': {
      en: {
        name: 'Downtown Dubai',
        description: 'Experience luxury Rolls-Royce rental in the heart of Dubai. Perfect for business meetings at DIFC, shopping at Dubai Mall, and iconic landmarks like Burj Khalifa.',
        landmarks: ['Burj Khalifa', 'Dubai Mall', 'DIFC', 'Burj Lake', 'The Dubai Fountain'],
        coordinates: { lat: 25.1972, lng: 55.2796 }
      },
      ar: {
        name: 'وسط دبي',
        description: 'اختبر تأجير رولز رويس الفاخر في قلب دبي. مثالي للاجتماعات التجارية في DIFC، والتسوق في دبي مول، والمعالم الأيقونية مثل برج خليفة.',
        landmarks: ['برج خليفة', 'دبي مول', 'DIFC', 'برج البحيرة', 'نافورة دبي'],
        coordinates: { lat: 25.1972, lng: 55.2796 }
      },
      fr: {
        name: 'Downtown Dubaï',
        description: 'Location Rolls-Royce de luxe au cœur de Dubaï. Idéal pour les réunions au DIFC, le shopping au Dubai Mall et les monuments emblématiques comme le Burj Khalifa.',
        landmarks: ['Burj Khalifa', 'Dubai Mall', 'DIFC', 'Burj Lake', 'Fontaine de Dubaï'],
        coordinates: { lat: 25.1972, lng: 55.2796 }
      },
      ru: {
        name: 'Даунтаун Дубай',
        description: 'Аренда люксового Rolls-Royce в центре Дубая. Идеально для деловых встреч в DIFC, шоппинга в Dubai Mall и знаковых достопримечательностей, таких как Бурдж-Халифа.',
        landmarks: ['Бурдж-Халифа', 'Дубай Молл', 'DIFC', 'Озеро Бурдж', 'Фонтан Дубай'],
        coordinates: { lat: 25.1972, lng: 55.2796 }
      },
      zh: {
        name: '迪拜市中心',
        description: '在迪拜心脏地带体验豪华劳斯莱斯租赁。适合DIFC商务会议、迪拜购物中心购物以及哈利法塔等标志性地标。',
        landmarks: ['哈利法塔', '迪拜购物中心', 'DIFC', '哈利法塔湖', '迪拜喷泉'],
        coordinates: { lat: 25.1972, lng: 55.2796 }
      },
      hi: {
        name: 'डाउनटाउन दुबई',
        description: 'दुबई के केंद्र में लक्जरी रोल्स-रॉयस किराए का अनुभव करें। DIFC में बिजनेस मीटिंग, दुबई मॉल में शॉपिंग और बुर्ज खलीफा जैसे आइकॉनिक लैंडमार्क के लिए परफेक्ट।',
        landmarks: ['बुर्ज खलीफा', 'दुबई मॉल', 'DIFC', 'बुर्ज लेक', 'दुबई फाउंटेन'],
        coordinates: { lat: 25.1972, lng: 55.2796 }
      }
    },
    'dubai-marina': {
      en: {
        name: 'Dubai Marina',
        description: 'Rent a Rolls-Royce in Dubai Marina for stunning waterfront drives, beach clubs, and luxury dining experiences along the iconic marina.',
        landmarks: ['The Walk', 'JBR Beach', 'Marina Beach', 'Aquaventure Waterpark', 'Pier 7'],
        coordinates: { lat: 25.0889, lng: 55.1458 }
      },
      ar: {
        name: 'دبي مارينا',
        description: 'استأجر رولز رويس في دبي مارينا لرحلات ساحلية رائعة، ونوادي الشاطئ، وتجارب تناول طعام فاخرة على طول المارينا الأيقونية.',
        landmarks: ['ذا ووك', 'شاطئ جي بي آر', 'شاطئ المارينا', 'حديقة أكفا فينتور المائية', 'بير 7'],
        coordinates: { lat: 25.0889, lng: 55.1458 }
      },
      fr: {
        name: 'Dubai Marina',
        description: 'Louez une Rolls-Royce à Dubai Marina pour des promenades en bord de mer, des clubs de plage et des expériences gastronomiques de luxe.',
        landmarks: ['The Walk', 'Plage JBR', 'Plage Marina', 'Aquaventure Waterpark', 'Pier 7'],
        coordinates: { lat: 25.0889, lng: 55.1458 }
      },
      ru: {
        name: 'Дубай Марина',
        description: 'Арендуйте Rolls-Royce в Дубай Марина для потрясающих прибрежных поездок, пляжных клубов и роскошных ресторанов вдоль знаменитой марины.',
        landmarks: ['The Walk', 'Пляж JBR', 'Пляж Марина', 'Аквапарк Аквавенчур', 'Pier 7'],
        coordinates: { lat: 25.0889, lng: 55.1458 }
      },
      zh: {
        name: '迪拜码头',
        description: '在迪拜码头租用劳斯莱斯，享受令人惊叹的海滨驾驶、海滩俱乐部和沿标志性码头的豪华用餐体验。',
        landmarks: ['The Walk', 'JBR海滩', '码头海滩', '亚特兰蒂斯水上乐园', 'Pier 7'],
        coordinates: { lat: 25.0889, lng: 55.1458 }
      },
      hi: {
        name: 'दुबई मरीना',
        description: 'दुबई मरीना में शानदार वॉटरफ्रंट ड्राइव, बीच क्लब और लक्जरी डाइनिंग के लिए रोल्स-रॉयस किराए पर लें।',
        landmarks: ['The Walk', 'JBR बीच', 'मरीना बीच', 'एक्वाडवेंचर वॉटरपार्क', 'Pier 7'],
        coordinates: { lat: 25.0889, lng: 55.1458 }
      }
    },
    'palm-jumeirah': {
      en: {
        name: 'Palm Jumeirah',
        description: 'Luxury Rolls-Royce rental on Palm Jumeirah island with delivery to Atlantis, One&Only, and other premium resorts for the ultimate island experience.',
        landmarks: ['Atlantis The Palm', 'Aquaventure Waterpark', 'The Pointe', 'Nakheel Mall', 'Underwater Zoo'],
        coordinates: { lat: 25.1118, lng: 55.1376 }
      },
      ar: {
        name: 'نخلة جميرا',
        description: 'تأجير رولز رويس الفاخر في جزيرة نخلة جميرا مع توصيل إلى أتلانتس، ون آند أونلي، والمنتجعات المتميزة الأخرى لتجربة جزيرة لا تُنسى.',
        landmarks: ['أتلانتس ذا بالم', 'حديقة أكفا فينتور المائية', 'ذابوينت', 'محل نخيل', 'الحديقة تحت الماء'],
        coordinates: { lat: 25.1118, lng: 55.1376 }
      },
      fr: {
        name: 'Palm Jumeirah',
        description: 'Location Rolls-Royce de luxe sur l\'île de Palm Jumeirah avec livraison à Atlantis, One&Only et d\'autres complexes premium.',
        landmarks: ['Atlantis The Palm', 'Aquaventure Waterpark', 'The Pointe', 'Nakheel Mall', 'Zoo Sous-Marin'],
        coordinates: { lat: 25.1118, lng: 55.1376 }
      },
      ru: {
        name: 'Пальма Джумейра',
        description: 'Люксовая аренда Rolls-Royce на острове Пальма Джумейра с доставкой в Atlantis, One&Only и другие премиальные курорты.',
        landmarks: ['Atlantis The Palm', 'Аквапарк Аквавенчур', 'The Pointe', 'Nakheel Mall', 'Подводный Зоопарк'],
        coordinates: { lat: 25.1118, lng: 55.1376 }
      },
      zh: {
        name: '朱美拉棕榈岛',
        description: '在朱美拉棕榈岛享受豪华劳斯莱斯租赁，可送至亚特兰蒂斯、唯逸等顶级度假村。',
        landmarks: ['亚特兰蒂斯酒店', '亚特兰蒂斯水上乐园', 'The Pointe', 'Nakheel Mall', '水下动物园'],
        coordinates: { lat: 25.1118, lng: 55.1376 }
      },
      hi: {
        name: 'पाम जुमेराह',
        description: 'पाम जुमेराह द्वीप पर लक्जरी रोल्स-रॉयस किराया, अटलांटिस, वन एंड ओनली और अन्य प्रीमियम रिसॉर्ट्स तक डिलीवरी के साथ।',
        landmarks: ['अटलांटिस द पाम', 'एक्वाडवेंचर वॉटरपार्क', 'द पॉइंट', 'नखील मॉल', 'अंडरवाटर जू'],
        coordinates: { lat: 25.1118, lng: 55.1376 }
      }
    },
    'business-bay': {
      en: {
        name: 'Business Bay',
        description: 'Professional Rolls-Royce rental in Dubai Business Bay for corporate clients, with quick access to Sheikh Zayed Road and major business districts.',
        landmarks: ['Bay Avenue', 'Dubai Canal', 'Emirates Towers', 'World Trade Centre', 'Jumeirah Emirates Towers'],
        coordinates: { lat: 25.1872, lng: 55.2578 }
      },
      ar: {
        name: 'الخليج التجاري',
        description: 'تأجير رولز رويس احترافي في الخليج التجاري دبي للعملاء المؤسسيين، مع وصول سريع إلى طريق الشيخ زايد والمناطق التجارية الرئيسية.',
        landmarks: ['باي أفينيو', 'قناة دبي', 'أبراج الإمارات', 'المركز التجاري العالمي', 'أبراج جميرا الإمارات'],
        coordinates: { lat: 25.1872, lng: 55.2578 }
      },
      fr: {
        name: 'Business Bay',
        description: 'Location professionnelle de Rolls-Royce à Business Bay pour clients corporate, avec accès rapide à Sheikh Zayed Road et aux principaux quartiers d\'affaires.',
        landmarks: ['Bay Avenue', 'Canal de Dubaï', 'Emirates Towers', 'World Trade Centre', 'Jumeirah Emirates Towers'],
        coordinates: { lat: 25.1872, lng: 55.2578 }
      },
      ru: {
        name: 'Бизнес Бэй',
        description: 'Профессиональная аренда Rolls-Royce в Business Bay для корпоративных клиентов, с быстрым доступом к Шейх Заед Роуд и основным деловым районам.',
        landmarks: ['Bay Avenue', 'Канал Дубай', 'Emirates Towers', 'World Trade Centre', 'Jumeirah Emirates Towers'],
        coordinates: { lat: 25.1872, lng: 55.2578 }
      },
      zh: {
        name: '商务湾',
        description: '商务湾专业劳斯莱斯租赁，面向企业客户，可快速抵达谢赫扎耶德路及主要商务区。',
        landmarks: ['Bay Avenue', '迪拜运河', '阿联酋塔', '世界贸易中心', '卓美亚阿联酋塔'],
        coordinates: { lat: 25.1872, lng: 55.2578 }
      },
      hi: {
        name: 'बिजनेस बे',
        description: 'कॉर्पोरेट क्लाइंट्स के लिए बिजनेस बे में प्रोफेशनल रोल्स-रॉयस किराया, शेख जायद रोड और प्रमुख व्यापार जिलों तक त्वरित पहुंच के साथ।',
        landmarks: ['बे एवेन्यू', 'दुबई कैनाल', 'एमिरेट्स टावर्स', 'वर्ल्ड ट्रेड सेंटर', 'जुमेराह एमिरेट्स टावर्स'],
        coordinates: { lat: 25.1872, lng: 55.2578 }
      }
    },
    'difc': {
      en: {
        name: 'DIFC',
        description: 'Premium Rolls-Royce rental in Dubai International Financial Centre for banking professionals, with access to Gate Avenue and financial district amenities.',
        landmarks: ['Gate Avenue', 'DIFC Courts', 'Emirates Golf Club', 'Jumeirah Mosque', 'Dubai International Financial Centre'],
        coordinates: { lat: 25.2048, lng: 55.2708 }
      },
      ar: {
        name: 'DIFC',
        description: 'تأجير رولز رويس ممتاز في مركز دبي المالي العالمي للمحترفين في مجال البنوك، مع الوصول إلى جيت أفينيو ومرافق المنطقة المالية.',
        landmarks: ['جيت أفينيو', 'محاكم DIFC', 'نادي الإمارات للجولف', 'جامع جميرا', 'مركز دبي المالي العالمي'],
        coordinates: { lat: 25.2048, lng: 55.2708 }
      },
      fr: {
        name: 'DIFC',
        description: 'Location Rolls-Royce premium au DIFC pour les professionnels de la finance, avec accès à Gate Avenue et aux commodités du quartier financier.',
        landmarks: ['Gate Avenue', 'Tribunaux DIFC', 'Emirates Golf Club', 'Mosquée Jumeirah', 'Centre Financier International'],
        coordinates: { lat: 25.2048, lng: 55.2708 }
      },
      ru: {
        name: 'DIFC',
        description: 'Премиальная аренда Rolls-Royce в Международном Финансовом Центре Дубая для банковских профессионалов, с доступом к Gate Avenue.',
        landmarks: ['Gate Avenue', 'Суды DIFC', 'Emirates Golf Club', 'Мечеть Джумейра', 'Финансовый Центр'],
        coordinates: { lat: 25.2048, lng: 55.2708 }
      },
      zh: {
        name: 'DIFC金融中心',
        description: '迪拜国际金融中心高端劳斯莱斯租赁，面向银行金融专业人士，可便捷抵达Gate Avenue及金融区设施。',
        landmarks: ['Gate Avenue', 'DIFC法院', '阿联酋高尔夫俱乐部', '卓美亚清真寺', '国际金融中心'],
        coordinates: { lat: 25.2048, lng: 55.2708 }
      },
      hi: {
        name: 'DIFC',
        description: 'बैंकिंग प्रोफेशनल्स के लिए DIFC में प्रीमियम रोल्स-रॉयस किराया, Gate Avenue और फाइनेंशियल डिस्ट्रिक्ट सुविधाओं तक पहुंच के साथ।',
        landmarks: ['Gate Avenue', 'DIFC कोर्ट्स', 'एमिरेट्स गोल्फ क्लब', 'जुमेराह मस्जिद', 'दुबई इंटरनेशनल फाइनेंशियल सेंटर'],
        coordinates: { lat: 25.2048, lng: 55.2708 }
      }
    },
    'jbr': {
      en: {
        name: 'JBR',
        description: 'Rolls-Royce rental in JBR for beachfront luxury experiences, with delivery to The Walk, beach clubs, and waterfront restaurants.',
        landmarks: ['The Walk JBR', 'JBR Beach', 'Jumeirah Beach Hotel', 'Wild Wadi Waterpark', 'Souk Madinat Jumeirah'],
        coordinates: { lat: 25.0818, lng: 55.1309 }
      },
      ar: {
        name: 'جي بي آر',
        description: 'تأجير رولز رويس في جي بي آر لتجارب فاخرة على الشاطئ، مع توصيل إلى ذا ووك، ونوادي الشاطئ، والمطاعم على الواجهة البحرية.',
        landmarks: ['ذا ووك جي بي آر', 'شاطئ جي بي آر', 'فندق جميرا بيتش', 'حديقة وايلد وادي المائية', 'سوق مدينات جميرا'],
        coordinates: { lat: 25.0818, lng: 55.1309 }
      },
      fr: {
        name: 'JBR',
        description: 'Location Rolls-Royce à JBR pour des expériences luxueuses en bord de mer, avec livraison à The Walk, clubs de plage et restaurants en front de mer.',
        landmarks: ['The Walk JBR', 'Plage JBR', 'Jumeirah Beach Hotel', 'Wild Wadi Waterpark', 'Souk Madinat Jumeirah'],
        coordinates: { lat: 25.0818, lng: 55.1309 }
      },
      ru: {
        name: 'JBR',
        description: 'Аренда Rolls-Royce в JBR для роскошного отдыха на пляже, с доставкой на The Walk, пляжные клубы и рестораны на набережной.',
        landmarks: ['The Walk JBR', 'Пляж JBR', 'Jumeirah Beach Hotel', 'Аквапарк Wild Wadi', 'Сук Мадинат Джумейра'],
        coordinates: { lat: 25.0818, lng: 55.1309 }
      },
      zh: {
        name: 'JBR海滩住宅',
        description: '在JBR租用劳斯莱斯，享受海滨豪华体验，可送至The Walk、海滩俱乐部和海滨餐厅。',
        landmarks: ['The Walk JBR', 'JBR海滩', '卓美亚海滩酒店', 'Wild Wadi水上乐园', '卓美亚古堡集市'],
        coordinates: { lat: 25.0818, lng: 55.1309 }
      },
      hi: {
        name: 'JBR',
        description: 'बीचफ्रंट लक्जरी अनुभव के लिए JBR में रोल्स-रॉयस किराया, The Walk, बीच क्लब और वॉटरफ्रंट रेस्तरां तक डिलीवरी के साथ।',
        landmarks: ['The Walk JBR', 'JBR बीच', 'जुमेराह बीच होटल', 'वाइल्ड वादी वॉटरपार्क', 'सूक मदीनत जुमेराह'],
        coordinates: { lat: 25.0818, lng: 55.1309 }
      }
    }
  };

  const locationData = dubaiLocations[location]?.[currentLang] || dubaiLocations[location]?.en;

  if (!locationData) return null;

  return (
    <div className="dubai-local-seo bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gold-500 mb-4">
              {currentLang === 'ar' ? `رولز رويس في ${locationData.name}` : currentLang === 'fr' ? `Rolls-Royce à ${locationData.name}` : currentLang === 'ru' ? `Rolls-Royce в ${locationData.name}` : currentLang === 'zh' ? `${locationData.name}劳斯莱斯` : currentLang === 'hi' ? `${locationData.name} में रोल्स-रॉयस` : `Rolls-Royce in ${locationData.name}`}
            </h2>
            <p className="text-gray-300 mb-6">
              {locationData.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {currentLang === 'ar' ? 'المعالم القريبة' : currentLang === 'fr' ? 'Points d\'intérêt à proximité' : currentLang === 'ru' ? 'Ближайшие достопримечательности' : currentLang === 'zh' ? '附近地标' : currentLang === 'hi' ? 'निकटवर्ती लैंडमार्क' : 'Nearby Landmarks'}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {locationData.landmarks.map((landmark: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <svg className="w-4 h-4 text-gold-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-black rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              {currentLang === 'ar' ? 'معلومات الموقع' : currentLang === 'fr' ? 'Informations de localisation' : currentLang === 'ru' ? 'Информация о местоположении' : currentLang === 'zh' ? '位置信息' : currentLang === 'hi' ? 'स्थान की जानकारी' : 'Location Information'}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">
                  {currentLang === 'ar' ? 'الإحداثيات' : 'Coordinates'}
                </span>
                <span className="text-white">
                  {locationData.coordinates.lat}, {locationData.coordinates.lng}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">
                  {currentLang === 'ar' ? 'المنطقة' : 'Area'}
                </span>
                <span className="text-white">
                  {locationData.name}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">
                  {currentLang === 'ar' ? 'الدولة' : 'Country'}
                </span>
                <span className="text-white">
                  {currentLang === 'ar' ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}
                </span>
              </div>
            </div>
            
            {/* Local Business Schema Markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": `Rolls-Royce Rental ${locationData.name}`,
                  "image": "https://rollsroycers.com/images/showroom.jpg",
                  "telephone": "+971558164922",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Sheikh Mohammed bin Rashid Blvd",
                    "addressLocality": locationData.name,
                    "addressRegion": "Dubai",
                    "postalCode": "00000",
                    "addressCountry": "AE"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": locationData.coordinates.lat.toString(),
                    "longitude": locationData.coordinates.lng.toString()
                  },
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                  },
                  "priceRange": "AED 3,800 - AED 10,000 per day",
                  "areaServed": {
                    "@type": "Place",
                    "name": locationData.name
                  }
                })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiLocalSEO;