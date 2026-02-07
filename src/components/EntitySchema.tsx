import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface EntitySchemaProps {
  pageType?: 'home' | 'fleet' | 'service' | 'location' | 'compare' | 'blog' | 'other'
  carModel?: string
  serviceType?: string
  locationName?: string
}

export default function EntitySchema({
  pageType = 'home',
  carModel,
  serviceType,
  locationName
}: EntitySchemaProps) {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'en'
  const baseUrl = 'https://rollsroycers.com'
  const localePath = currentLang === 'en' ? '' : `/${currentLang}`

  // Core AutoRental Business Entity
  const autoRentalSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": `${baseUrl}/#organization`,
    "name": "Rolls Roycers Dubai",
    "alternateName": ["Rolls Royce Rental Dubai", "Rolls-Royce Dubai", "تأجير رولز رويس دبي"],
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo-512.png`,
    "image": `${baseUrl}/images/Rolls-Royce-black.jpg`,
    "description": getBusinessDescription(currentLang),
    "inLanguage": currentLang,
    "telephone": "+971558164922",
    "email": "info@rollsroycers.com",
    "foundingDate": "2010",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 50,
      "maxValue": 100
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai", "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" } },
      { "@type": "City", "name": "Abu Dhabi", "containedInPlace": { "@type": "Country", "name": "United Arab Emirates" } }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "AED 3,800 - AED 10,000/day",
    "currenciesAccepted": "AED, USD, EUR, GBP",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "knowsAbout": [
      "Rolls-Royce",
      "Luxury Car Rental",
      "Dubai Tourism",
      "VIP Transportation",
      "Wedding Car Service",
      "Corporate Transportation",
      "Airport Transfer Service",
      "Chauffeur Service"
    ],
    "knowsLanguage": ["en", "ar", "ru", "fr", "zh", "hi"],
    "brand": {
      "@type": "Brand",
      "name": "Rolls-Royce",
      "url": "https://www.rolls-roycemotorcars.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/rollsroycersdubai",
      "https://www.instagram.com/rollsroycersdubai",
      "https://twitter.com/rollsroycersdxb",
      "https://www.linkedin.com/company/rollsroycersdubai",
      "https://www.youtube.com/rollsroycersdubai"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rolls-Royce Fleet",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Luxury Sedans",
          "itemListElement": [
            createVehicleOffer("Rolls-Royce Phantom", "Phantom", "Luxury Sedan", "5800", "V12", 563),
            createVehicleOffer("Rolls-Royce Ghost", "Ghost", "Luxury Sedan", "3800", "V12", 563)
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Luxury SUV",
          "itemListElement": [
            createVehicleOffer("Rolls-Royce Cullinan", "Cullinan", "Luxury SUV", "6500", "V12", 563)
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Convertibles & Coupes",
          "itemListElement": [
            createVehicleOffer("Rolls-Royce Dawn", "Dawn", "Convertible", "5500", "V12", 563),
            createVehicleOffer("Rolls-Royce Wraith", "Wraith", "Coupe", "5000", "V12", 624),
            createVehicleOffer("Rolls-Royce Spectre", "Spectre", "Electric Coupe", "7500", "Electric", 577)
          ]
        }
      ]
    }
  }

  // Vehicle Schema for fleet pages
  const vehicleSchema = carModel ? createDetailedVehicleSchema(carModel, currentLang, localePath) : null

  // Service Schema for service pages
  const serviceSchema = serviceType ? createDetailedServiceSchema(serviceType, currentLang, localePath) : null

  // Place Schema for location pages
  const placeSchema = locationName ? createPlaceSchema(locationName, currentLang, localePath) : null

  return (
    <Head>
      {/* Core AutoRental Entity - only on homepage */}
      {pageType === 'home' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRentalSchema) }}
        />
      )}

      {/* Vehicle Schema for fleet pages */}
      {vehicleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
        />
      )}

      {/* Service Schema for service pages */}
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {/* Place Schema for location pages */}
      {placeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        />
      )}
    </Head>
  )
}

function createVehicleOffer(name: string, model: string, config: string, price: string, engine: string, hp: number) {
  return {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Car",
      "name": name,
      "brand": { "@type": "Brand", "name": "Rolls-Royce" },
      "model": model,
      "vehicleConfiguration": config,
      "vehicleEngine": {
        "@type": "EngineSpecification",
        "engineType": engine,
        "enginePower": { "@type": "QuantitativeValue", "value": hp, "unitCode": "BHP" }
      },
      "fuelType": "Petrol",
      "vehicleModelDate": "2026",
      "color": "Multiple colors available"
    },
    "price": price,
    "priceCurrency": "AED",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": price,
      "priceCurrency": "AED",
      "unitText": "DAY"
    },
    "availability": "https://schema.org/InStock"
  }
}

function getBusinessDescription(lang: string): string {
  const descriptions: Record<string, string> = {
    en: 'Premium Rolls-Royce rental service in Dubai offering luxury chauffeur services, wedding cars, airport transfers, and corporate transportation. Available 24/7 with free delivery across Dubai.',
    ar: 'خدمة تأجير رولز رويس المتميزة في دبي تقدم خدمات السائق الفاخرة، سيارات الزفاف، النقل من المطار، والنقل للشركات. متاح 24/7 مع التوصيل المجاني في جميع أنحاء دبي.',
    fr: 'Service premium de location Rolls-Royce à Dubaï offrant chauffeur de luxe, voitures de mariage, transferts aéroport et transport d\'entreprise. Disponible 24h/24 avec livraison gratuite dans tout Dubaï.',
    ru: 'Премиальная аренда Rolls-Royce в Дубае с услугами водителя, свадебными автомобилями, трансферами из аэропорта и корпоративным транспортом. Доступно 24/7 с бесплатной доставкой по всему Дубаю.',
    zh: '迪拜高级劳斯莱斯租赁服务，提供豪华司机服务、婚车、机场接送和企业交通。全天候24/7服务，迪拜全城免费送车。',
    hi: 'दुबई में प्रीमियम रोल्स रॉयस किराया सेवा — लक्जरी ड्राइवर सेवाएं, शादी की कारें, एयरपोर्ट ट्रांसफर और कॉर्पोरेट ट्रांसपोर्टेशन। दुबई भर में मुफ्त डिलीवरी के साथ 24/7 उपलब्ध।'
  }
  return descriptions[lang] || descriptions['en']
}

function createDetailedVehicleSchema(model: string, lang: string, localePath: string) {
  const vehicles: Record<string, any> = {
    phantom: {
      name: "Rolls-Royce Phantom",
      model: "Phantom",
      config: "Extended Wheelbase Luxury Sedan",
      price: "5800",
      hp: 563,
      doors: 4,
      seats: 5,
      description: "The pinnacle of luxury motoring. The Rolls-Royce Phantom Extended Wheelbase offers unmatched comfort, Starlight headliner, and bespoke craftsmanship for the ultimate Dubai experience.",
      image: "https://rollsroycers.com/images/Rolls-royce-phantom.jpg"
    },
    ghost: {
      name: "Rolls-Royce Ghost",
      model: "Ghost",
      config: "Series II Luxury Sedan",
      price: "3800",
      hp: 563,
      doors: 4,
      seats: 5,
      description: "The perfect balance of luxury and driving dynamics. Ghost Series II with Planar suspension and illuminated fascia. Ideal for business and leisure in Dubai.",
      image: "https://rollsroycers.com/images/Rolls-Royce-Ghost-Black-Badge.jpg"
    },
    cullinan: {
      name: "Rolls-Royce Cullinan",
      model: "Cullinan",
      config: "Luxury SUV",
      price: "6500",
      hp: 563,
      doors: 5,
      seats: 7,
      description: "The ultimate luxury SUV. Rolls-Royce Cullinan offers unparalleled versatility with 7-seater configuration, perfect for family trips and desert tours in Dubai.",
      image: "https://rollsroycers.com/images/Rolls-Royce-Cullinan_.jpg"
    },
    dawn: {
      name: "Rolls-Royce Dawn",
      model: "Dawn",
      config: "Luxury Convertible",
      price: "5500",
      hp: 563,
      doors: 2,
      seats: 4,
      description: "The most social Rolls-Royce. Dawn convertible with retractable roof, perfect for beach drives along Dubai Marina and JBR.",
      image: "https://rollsroycers.com/images/Rolls-royce-dawn.jpg"
    },
    wraith: {
      name: "Rolls-Royce Wraith",
      model: "Wraith",
      config: "Grand Tourer Coupe",
      price: "5000",
      hp: 624,
      doors: 2,
      seats: 4,
      fuelType: "Petrol",
      engineType: "6.75L Twin-Turbo V12",
      description: "The most powerful and dynamic Rolls-Royce. Wraith with 624hp and Starlight headliner, a true grand tourer for special occasions in Dubai.",
      image: "https://rollsroycers.com/images/Rolls-royce-Wraith.jpg"
    },
    spectre: {
      name: "Rolls-Royce Spectre",
      model: "Spectre",
      config: "Electric Luxury Coupe",
      price: "7500",
      hp: 577,
      doors: 2,
      seats: 4,
      fuelType: "Electric",
      engineType: "Dual Electric Motors",
      description: "The first fully electric Rolls-Royce. Spectre with 577hp instant torque, 520+ km range, and zero emissions — the future of ultra-luxury motoring in Dubai.",
      image: "https://rollsroycers.com/images/2024_Rolls-Royce_Spectre.jpg"
    }
  }

  const v = vehicles[model]
  if (!v) return null

  return {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "@id": `https://rollsroycers.com${localePath}/fleet/${model}#vehicle`,
    "inLanguage": lang,
    "name": v.name,
    "brand": { "@type": "Brand", "name": "Rolls-Royce" },
    "model": v.model,
    "vehicleConfiguration": v.config,
    "vehicleModelDate": "2026",
    "numberOfDoors": v.doors,
    "seatingCapacity": v.seats,
    "fuelType": v.fuelType || "Petrol",
    "driveWheelConfiguration": "AllWheelDriveConfiguration",
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "engineType": v.engineType || "6.75L Twin-Turbo V12",
      "enginePower": { "@type": "QuantitativeValue", "value": v.hp, "unitCode": "BHP" }
    },
    "description": v.description,
    "image": v.image,
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": v.price,
      "highPrice": (parseInt(v.price) * 20).toString(),
      "priceCurrency": "AED",
      "offerCount": "3",
      "offers": [
        { "@type": "Offer", "name": "Daily Rental", "price": v.price, "priceCurrency": "AED", "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "DAY" }, "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Weekly Rental", "price": (parseInt(v.price) * 6).toString(), "priceCurrency": "AED", "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "WEEK" }, "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Monthly Rental", "price": (parseInt(v.price) * 20).toString(), "priceCurrency": "AED", "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "MONTH" }, "availability": "https://schema.org/InStock" }
      ]
    }
  }
}

function createDetailedServiceSchema(serviceType: string, lang: string, localePath: string) {
  const services: Record<string, any> = {
    wedding: { name: "Rolls-Royce Wedding Car Service Dubai", price: "2500", desc: "Luxury Rolls-Royce wedding car rental in Dubai with decoration, red carpet, and professional chauffeur." },
    corporate: { name: "Corporate Rolls-Royce Service Dubai", price: "1200", desc: "Executive Rolls-Royce transportation for corporate meetings, client entertainment, and business events in Dubai." },
    'airport-transfer': { name: "Rolls-Royce Airport Transfer Dubai", price: "1500", desc: "VIP Rolls-Royce airport transfer with meet & greet at DXB, DWC, and AUH airports." },
    chauffeur: { name: "Rolls-Royce Chauffeur Service Dubai", price: "800", desc: "Professional multilingual chauffeur service with Rolls-Royce vehicles, available hourly and daily." },
    events: { name: "Rolls-Royce Events Service Dubai", price: "3000", desc: "Luxury Rolls-Royce for galas, premieres, red carpet arrivals, and VIP events in Dubai." },
    photoshoot: { name: "Rolls-Royce Photoshoot Dubai", price: "1200", desc: "Rolls-Royce vehicles for fashion shoots, music videos, Instagram content, and commercial photography." },
    tours: { name: "Rolls-Royce Dubai Tours", price: "2500", desc: "Private luxury Dubai city tours in Rolls-Royce with professional chauffeur guide." }
  }

  const s = services[serviceType]
  if (!s) return null

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://rollsroycers.com${localePath}/services/${serviceType}#service`,
    "inLanguage": lang,
    "name": s.name,
    "description": s.desc,
    "provider": { "@id": "https://rollsroycers.com/#autorental" },
    "areaServed": { "@type": "City", "name": "Dubai" },
    "offers": {
      "@type": "Offer",
      "price": s.price,
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock"
    },
    "serviceType": s.name
  }
}

function createPlaceSchema(locationName: string, lang: string, localePath: string) {
  const locations: Record<string, { name: string; lat: number; lng: number; desc: string }> = {
    'downtown-dubai': { name: "Downtown Dubai", lat: 25.1972, lng: 55.2796, desc: "Rolls-Royce rental in Downtown Dubai near Burj Khalifa, Dubai Mall, and DIFC." },
    'dubai-marina': { name: "Dubai Marina", lat: 25.0889, lng: 55.1458, desc: "Rolls-Royce rental in Dubai Marina for waterfront drives and beach experiences." },
    'palm-jumeirah': { name: "Palm Jumeirah", lat: 25.1118, lng: 55.1376, desc: "Rolls-Royce rental on Palm Jumeirah with delivery to Atlantis and premium resorts." },
    'business-bay': { name: "Business Bay", lat: 25.1872, lng: 55.2578, desc: "Professional Rolls-Royce rental in Business Bay for corporate clients." },
    'jbr': { name: "JBR", lat: 25.0818, lng: 55.1309, desc: "Rolls-Royce rental at JBR for beachfront luxury experiences." },
    'difc': { name: "DIFC", lat: 25.2048, lng: 55.2708, desc: "Premium Rolls-Royce rental in Dubai International Financial Centre." }
  }

  const loc = locations[locationName]
  if (!loc) return null

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://rollsroycers.com${localePath}/locations/${locationName}#location`,
    "inLanguage": lang,
    "name": `Rolls-Royce Rental ${loc.name}`,
    "description": loc.desc,
    "geo": { "@type": "GeoCoordinates", "latitude": loc.lat, "longitude": loc.lng },
    "address": { "@type": "PostalAddress", "addressLocality": loc.name, "addressRegion": "Dubai", "addressCountry": "AE" },
    "telephone": "+971558164922",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "parentOrganization": { "@id": "https://rollsroycers.com/#autorental" }
  }
}
