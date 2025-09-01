import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import { translateSpec } from '@/utils/translations'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'
import Script from 'next/script'

// AI-Optimized Content Component
const AIOptimizedContent = ({ locale }: { locale: string }) => {
  const contentByLocale: Record<string, JSX.Element> = {
    en: (
      <>
        {/* English AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Why Choose Rolls-Royce Phantom in Dubai?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                When you rent a Rolls-Royce Phantom in Dubai, you're not just choosing a car – you're selecting an experience that defines luxury itself. 
                As the flagship model of the world's most prestigious automotive marque, the Phantom represents the pinnacle of craftsmanship, 
                combining British heritage with cutting-edge technology.
              </p>
              
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Dubai's Most Requested Luxury Vehicle
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In a city where luxury knows no bounds, the Phantom stands supreme. With over 10,000 satisfied clients since 2010, 
                our Phantom rental service has become synonymous with excellence. From royal families to Fortune 500 CEOs, 
                the discerning elite choose the Phantom for its unmatched presence and comfort.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Perfect for Every Prestigious Occasion
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>✨ <strong>Weddings:</strong> Make your special day unforgettable with the world's most romantic luxury car</li>
                <li>🏢 <strong>Corporate Events:</strong> Impress clients and partners with unparalleled sophistication</li>
                <li>✈️ <strong>Airport Transfers:</strong> Start your Dubai journey with VIP treatment from the moment you land</li>
                <li>🌃 <strong>City Tours:</strong> Experience Dubai's landmarks from the throne of automotive royalty</li>
                <li>📸 <strong>Photoshoots:</strong> Create stunning content with the most photogenic luxury vehicle</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                The Magic Carpet Ride Experience
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Phantom's revolutionary "Magic Carpet Ride" isn't just marketing – it's engineering excellence. 
                The self-leveling air suspension system, combined with the Flagbearer system that scans the road ahead, 
                creates an otherworldly smooth ride that must be experienced to be believed. Whether cruising along 
                Sheikh Zayed Road or arriving at the Burj Al Arab, you'll float above the road in supreme comfort.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Unrivaled Craftsmanship & Customization
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Each Phantom in our fleet features hand-stitched leather, real wood veneers selected from a single tree, 
                and the iconic Starlight Headliner with 1,340 fiber optic lights creating a celestial atmosphere. 
                The Gallery – a glass-enclosed artwork space spanning the dashboard – showcases bespoke commissioned pieces, 
                making each journey a cultural experience.
              </p>

              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">
                  Exclusive Dubai Benefits
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Complimentary pickup from any Dubai location</li>
                  <li>👨‍✈️ Professional multilingual chauffeur in formal attire</li>
                  <li>💧 Premium refreshments and WiFi onboard</li>
                  <li>📱 24/7 concierge support for reservations and recommendations</li>
                  <li>🎯 Flexible booking with free cancellation up to 48 hours</li>
                  <li>🏆 Best price guarantee – find cheaper, we'll match it</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Frequently Asked Questions About Phantom Rental
              </h3>
              <div className="space-y-4">
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">How much does it cost to rent a Phantom in Dubai?</summary>
                  <p className="mt-2 text-gray-300">
                    Phantom rental starts from AED 5,800 per day, with weekly rates at AED 34,800 and monthly at AED 116,000. 
                    All prices include insurance, VAT, and basic chauffeur service.
                  </p>
                </details>
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">Can tourists rent a Rolls-Royce Phantom?</summary>
                  <p className="mt-2 text-gray-300">
                    Absolutely! Tourists can rent with a valid passport, international driving license, and credit card. 
                    However, most clients prefer our chauffeur service for the ultimate luxury experience.
                  </p>
                </details>
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">What's included in the rental?</summary>
                  <p className="mt-2 text-gray-300">
                    Comprehensive insurance, 250km daily mileage, professional chauffeur (optional), 24/7 support, 
                    and complimentary delivery/pickup within Dubai city limits.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Phantom Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "The Phantom made our wedding absolutely magical. The attention to detail, from the white glove service 
                  to the champagne setup, exceeded all expectations. Highly recommended!"
                </p>
                <p className="text-rolls-gold font-semibold">Sarah & Ahmed, Wedding</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "For our corporate event, the Phantom fleet made a lasting impression on our international partners. 
                  The professionalism and luxury were unmatched."
                </p>
                <p className="text-rolls-gold font-semibold">David Chen, CEO TechCorp</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "First time in Dubai and the Phantom tour was the highlight. Our chauffeur was knowledgeable 
                  and the car itself is a work of art. Worth every dirham!"
                </p>
                <p className="text-rolls-gold font-semibold">Maria Rodriguez, Tourist</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    ar: (
      <>
        {/* Arabic AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy" dir="rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                لماذا تختار رولز رويس فانتوم في دبي؟
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                عندما تستأجر رولز رويس فانتوم في دبي، فأنت لا تختار مجرد سيارة - بل تختار تجربة تعرّف الفخامة نفسها.
                باعتبارها الطراز الرائد لأرقى علامة سيارات في العالم، تمثل فانتوم قمة الحرفية،
                حيث تجمع بين التراث البريطاني والتكنولوجيا المتطورة.
              </p>
              {/* Continue with Arabic content... */}
            </div>
          </div>
        </section>
      </>
    ),
    fr: (
      <>
        {/* French AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Pourquoi Choisir la Rolls-Royce Phantom à Dubaï?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Lorsque vous louez une Rolls-Royce Phantom à Dubaï, vous ne choisissez pas simplement une voiture – 
                vous sélectionnez une expérience qui définit le luxe lui-même. En tant que modèle phare de la marque 
                automobile la plus prestigieuse au monde, la Phantom représente le summum du savoir-faire.
              </p>
              {/* Continue with French content... */}
            </div>
          </div>
        </section>
      </>
    ),
    zh: (
      <>
        {/* Chinese AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                为什么在迪拜选择劳斯莱斯幻影？
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                当您在迪拜租用劳斯莱斯幻影时，您选择的不仅仅是一辆汽车——您选择的是定义奢华本身的体验。
                作为世界上最负盛名的汽车品牌的旗舰车型，幻影代表着工艺的巅峰，
                将英国传统与尖端技术完美结合。
              </p>
              {/* Continue with Chinese content... */}
            </div>
          </div>
        </section>
      </>
    ),
    ru: (
      <>
        {/* Russian AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Почему выбрать Rolls-Royce Phantom в Дубае?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Когда вы арендуете Rolls-Royce Phantom в Дубае, вы выбираете не просто автомобиль – 
                вы выбираете опыт, который определяет саму роскошь. Как флагманская модель самой 
                престижной автомобильной марки в мире, Phantom представляет вершину мастерства.
              </p>
              {/* Continue with Russian content... */}
            </div>
          </div>
        </section>
      </>
    ),
    hi: (
      <>
        {/* Hindi AI-Optimized Content */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                दुबई में रोल्स-रॉयस फैंटम क्यों चुनें?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                जब आप दुबई में रोल्स-रॉयस फैंटम किराए पर लेते हैं, तो आप केवल एक कार नहीं चुन रहे हैं - 
                आप एक ऐसा अनुभव चुन रहे हैं जो विलासिता को परिभाषित करता है। दुनिया के सबसे प्रतिष्ठित 
                ऑटोमोटिव ब्रांड के फ्लैगशिप मॉडल के रूप में, फैंटम शिल्प कौशल के शिखर का प्रतिनिधित्व करता है।
              </p>
              {/* Continue with Hindi content... */}
            </div>
          </div>
        </section>
      </>
    )
  }
  
  return contentByLocale[locale] || contentByLocale['en']
}

export default function PhantomPage() {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const features = t('fleet.phantom.features', { returnObjects: true }) as { title: string; desc: string; icon: string }[]
  const specs = t('fleet.phantom.specs', { returnObjects: true }) as Record<string, string>

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Phantom Rental Dubai",
    "image": [
      "https://www.rollsroycers.com/images/Rolls-royce-phantom.jpg",
      "https://www.rollsroycers.com/images/inside-Rolls-Royce.jpg"
    ],
    "description": "Rent Rolls-Royce Phantom in Dubai from AED 5,800/day. 2025 Extended Wheelbase model with professional chauffeur. Perfect for weddings, VIP transfers & corporate events.",
    "brand": {
      "@type": "Brand",
      "name": "Rolls-Royce"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://www.rollsroycers.com/fleet/phantom",
      "priceCurrency": "AED",
      "lowPrice": "5800",
      "highPrice": "116000",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rolls-Royce Dubai",
        "telephone": "+971558164922",
        "email": "info@rollsroycers.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Ahmed"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "The Phantom made our wedding absolutely magical. The attention to detail exceeded all expectations."
      }
    ]
  }

  const vehicleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": "Rolls-Royce Phantom Extended Wheelbase",
    "manufacturer": {
      "@type": "Organization",
      "name": "Rolls-Royce Motor Cars"
    },
    "model": "Phantom",
    "vehicleConfiguration": "Extended Wheelbase",
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": "6.75L V12 Twin-Turbo",
      "enginePower": {
        "@type": "QuantitativeValue",
        "value": "563",
        "unitCode": "HP"
      }
    },
    "vehicleSeatingCapacity": 5,
    "fuelType": "Petrol",
    "vehicleTransmission": "8-Speed Automatic",
    "speed": {
      "@type": "QuantitativeValue",
      "value": "250",
      "unitCode": "KMH"
    }
  }

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to rent a Rolls-Royce Phantom in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Phantom rental starts from AED 5,800 per day, with weekly rates at AED 34,800 and monthly at AED 116,000. All prices include insurance, VAT, and basic chauffeur service."
        }
      },
      {
        "@type": "Question",
        "name": "Can tourists rent a Rolls-Royce Phantom in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Tourists can rent with a valid passport, international driving license, and credit card. Most clients prefer our chauffeur service for the ultimate luxury experience."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in the Phantom rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comprehensive insurance, 250km daily mileage, professional chauffeur (optional), 24/7 support, and complimentary delivery/pickup within Dubai city limits."
        }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.phantom" />
      
      {/* Structured Data Scripts */}
      <Script
        id="phantom-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="phantom-vehicle-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleStructuredData) }}
      />
      <Script
        id="phantom-faq-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-phantom.jpg"
              alt="Rolls-Royce Phantom Dubai - Luxury Car Rental"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 via-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('fleet.phantom.name')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-4">
                {t('fleet.phantom.description')}
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Experience the pinnacle of luxury with Dubai's most prestigious vehicle. 
                The Phantom delivers an unparalleled combination of craftsmanship, technology, and comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.rentNow')} - AED 5,800/Day
                </motion.a>
                <Link href="/fleet" className="btn-secondary">
                  {t('nav.fleet')}
                </Link>
              </div>
              <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
                <span>✓ Instant Booking</span>
                <span>✓ Free Cancellation</span>
                <span>✓ Best Price Guarantee</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="py-6 bg-rolls-gold/10 border-y border-rolls-gold/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-rolls-gold">10,000+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">4.9/5</div>
                <div className="text-sm text-gray-400">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">15min</div>
                <div className="text-sm text-gray-400">Delivery Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">Since 2010</div>
                <div className="text-sm text-gray-400">In Business</div>
              </div>
            </div>
          </div>
        </section>

        {/* Price & Availability */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Transparent Pricing & Instant Availability
              </h2>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 5,800</h3>
                    <p className="text-gray-400">{t('pricing.daily')}</p>
                    <p className="text-sm text-gray-500 mt-2">250km included</p>
                  </div>
                  <div className="border-2 border-rolls-gold/50 rounded-lg p-4">
                    <div className="text-xs text-rolls-gold mb-1">MOST POPULAR</div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 34,800</h3>
                    <p className="text-gray-400">{t('pricing.weekly')}</p>
                    <p className="text-sm text-gray-500 mt-2">1,750km included</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">{t('common.aed')} 116,000</h3>
                    <p className="text-gray-400">{t('pricing.monthly')}</p>
                    <p className="text-sm text-gray-500 mt-2">5,000km included</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-green-400 mb-4">✓ Available Now - Instant Confirmation</p>
                  <a href="#booking" className="btn-primary">Check Real-Time Availability</a>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <span>✓ Insurance Included</span>
                  <span>✓ VAT Included</span>
                  <span>✓ No Hidden Fees</span>
                  <span>✓ Free Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              {t('fleet.phantom.featuresTitle')}
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Every detail crafted to perfection, every feature designed for your ultimate comfort
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Array.isArray(features) && features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.specsTitle')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(specs).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-rolls-black/30 rounded-lg border border-rolls-gold/10"
                  >
                    <span className="text-gray-400 capitalize">{translateSpec(key, t)}:</span>
                    <span className="text-white font-semibold">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI-Optimized Content Section */}
        <AIOptimizedContent locale={locale || 'en'} />

        {/* Gallery */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('fleet.phantom.galleryTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 md:col-span-2">
                <Image
                  src="/images/Rolls-royce-phantom.jpg"
                  alt={t('fleet.phantom.gallery.exteriorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/inside-Rolls-Royce.jpg"
                  alt={t('fleet.phantom.gallery.interiorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t('fleet.phantom.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('fleet.phantom.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a {...createWhatsAppLinkProps('phantom')} className="btn-primary">
                Chat: +971 55 816 4922
              </a>
              <a href="#booking" className="btn-secondary">
                {t('nav.bookingLink')}
              </a>
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","fleet"])),
    },
  }
}