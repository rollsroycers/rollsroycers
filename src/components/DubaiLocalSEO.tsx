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
              {currentLang === 'ar' ? `رولز رويس في ${locationData.name}` : `Rolls-Royce in ${locationData.name}`}
            </h2>
            <p className="text-gray-300 mb-6">
              {locationData.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                {currentLang === 'ar' ? 'المعالم القريبة' : 'Nearby Landmarks'}
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
              {currentLang === 'ar' ? 'معلومات الموقع' : 'Location Information'}
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