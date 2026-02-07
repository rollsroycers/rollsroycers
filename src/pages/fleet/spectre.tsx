import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'
import Script from 'next/script'
import GEOOptimizer from '@/components/GEOOptimizer'
import EntitySchema from '@/components/EntitySchema'

// AI-Optimized Content Component
const AIOptimizedContent = ({ locale }: { locale: string }) => {
  const contentByLocale: Record<string, React.JSX.Element> = {
    en: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Why Rent the Rolls-Royce Spectre in Dubai?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Rolls-Royce Spectre is a landmark in automotive history — the first fully electric Rolls-Royce ever built.
                When you rent the Spectre in Dubai, you experience the future of ultra-luxury motoring: whisper-silent electric power,
                instantaneous torque, and the unmistakable presence of a Rolls-Royce, all wrapped in a breathtaking fastback coupé design.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Dubai&apos;s First Electric Ultra-Luxury Rental
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In a city that embraces innovation and sustainability, the Spectre is the perfect choice for discerning clients
                who want the pinnacle of luxury with zero emissions. Glide silently along Sheikh Zayed Road, arrive at the Burj Al Arab
                with effortless grace, or cruise the Palm Jumeirah crescent in the world&apos;s most luxurious electric vehicle.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Unmatched Electric Performance
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With 577 horsepower and 900 Nm of instant torque, the Spectre accelerates from 0-100 km/h in just 4.5 seconds —
                all in complete silence. The 102 kWh battery provides over 520 km of range, more than enough for a full day of
                luxury touring across Dubai and beyond.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Perfect for Every Occasion
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>⚡ <strong>Corporate Events:</strong> Make a statement about innovation and sustainability at business gatherings</li>
                <li>📸 <strong>Photoshoots:</strong> The Spectre&apos;s futuristic design creates stunning visual content</li>
                <li>🌃 <strong>City Tours:</strong> Experience Dubai&apos;s landmarks in whisper-quiet luxury</li>
                <li>✈️ <strong>Airport Transfers:</strong> Arrive in style with zero emissions</li>
                <li>🎉 <strong>Special Occasions:</strong> Celebrate milestones with the future of Rolls-Royce</li>
              </ul>

              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">
                  Exclusive Dubai Benefits
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Complimentary pickup from any Dubai location</li>
                  <li>👨‍✈️ Professional multilingual chauffeur in formal attire</li>
                  <li>🔋 Fully charged and ready for your journey</li>
                  <li>📱 24/7 concierge support for reservations and recommendations</li>
                  <li>🎯 Flexible booking with free cancellation up to 48 hours</li>
                  <li>🏆 Best price guarantee – find cheaper, we&apos;ll match it</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                Frequently Asked Questions About Spectre Rental
              </h3>
              <div className="space-y-4">
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">How much does it cost to rent a Rolls-Royce Spectre in Dubai?</summary>
                  <p className="mt-2 text-gray-300">
                    Spectre rental starts from AED 7,500 per day, with weekly rates at AED 45,000 and monthly at AED 150,000.
                    All prices include insurance, VAT, and professional chauffeur service.
                  </p>
                </details>
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">What is the range of the Rolls-Royce Spectre?</summary>
                  <p className="mt-2 text-gray-300">
                    The Spectre has a WLTP range of over 520 km on a full charge, more than enough for a full day of luxury
                    touring across Dubai. We deliver the car fully charged for your convenience.
                  </p>
                </details>
                <details className="bg-rolls-black/30 rounded-lg p-4">
                  <summary className="font-semibold cursor-pointer">Is the Spectre as quiet as other Rolls-Royce models?</summary>
                  <p className="mt-2 text-gray-300">
                    The Spectre is even quieter than any previous Rolls-Royce. Being fully electric, it offers the most
                    refined and silent driving experience ever created by the marque — truly the &quot;magic carpet ride&quot; perfected.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Our Spectre Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;The Spectre is a game-changer. Silent, powerful, and incredibly luxurious. Our clients were amazed
                  when we arrived at the DIFC event in this stunning electric Rolls-Royce.&quot;
                </p>
                <p className="text-rolls-gold font-semibold">Khalid Al Rashid, Tech CEO</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;Perfect for our sustainability-focused brand shoot. The Spectre&apos;s design is incredibly photogenic,
                  and having an electric Rolls-Royce aligned perfectly with our message.&quot;
                </p>
                <p className="text-rolls-gold font-semibold">Elena Marchetti, Creative Director</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-rolls-gold">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &quot;Touring Dubai in the Spectre was an unforgettable experience. The silence lets you fully appreciate
                  the city&apos;s beauty. The instant acceleration is thrilling!&quot;
                </p>
                <p className="text-rolls-gold font-semibold">James Wong, Tourist from Singapore</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    ar: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy" dir="rtl">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                لماذا تستأجر رولز رويس سبكتر في دبي؟
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                رولز رويس سبكتر هي علامة فارقة في تاريخ السيارات — أول رولز رويس كهربائية بالكامل على الإطلاق.
                عندما تستأجر سبكتر في دبي، تختبر مستقبل الفخامة الفائقة: قوة كهربائية صامتة،
                عزم دوران فوري، وحضور رولز رويس الذي لا يُخطئه أحد، كل ذلك في تصميم كوبيه فاستباك مذهل.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                أول سيارة كهربائية فائقة الفخامة للإيجار في دبي
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                في مدينة تحتضن الابتكار والاستدامة، سبكتر هي الخيار المثالي للعملاء المميزين
                الذين يريدون قمة الفخامة مع صفر انبعاثات. انزلق بصمت على طريق الشيخ زايد،
                أو وصل إلى برج العرب بأناقة لا مثيل لها.
              </p>

              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
                أداء كهربائي لا مثيل له
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                بقوة 577 حصاناً و900 نيوتن متر من العزم الفوري، تتسارع سبكتر من 0-100 كم/س في 4.5 ثوانٍ فقط —
                كل ذلك في صمت تام. بطارية 102 كيلوواط ساعة توفر أكثر من 520 كم مدى، أكثر من كافٍ ليوم كامل من الجولات الفاخرة.
              </p>

              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">مزايا حصرية في دبي</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 استلام مجاني من أي موقع في دبي</li>
                  <li>👨‍✈️ سائق محترف متعدد اللغات بزي رسمي</li>
                  <li>🔋 مشحونة بالكامل وجاهزة لرحلتك</li>
                  <li>📱 دعم كونسيرج على مدار الساعة</li>
                  <li>🎯 حجز مرن مع إلغاء مجاني حتى 48 ساعة</li>
                  <li>🏆 ضمان أفضل سعر</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black" dir="rtl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">ماذا يقول عملاء سبكتر</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;سبكتر غيّرت قواعد اللعبة. صامتة، قوية، وفاخرة بشكل لا يصدق. أبهر عملاؤنا عندما وصلنا لفعالية DIFC بهذه الرولز رويس الكهربائية المذهلة.&quot;</p>
                <p className="text-rolls-gold font-semibold">خالد الراشد، رئيس تنفيذي تقني</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;مثالية لتصوير علامتنا التجارية المركزة على الاستدامة. تصميم سبكتر مذهل للتصوير، ووجود رولز رويس كهربائية يتوافق تماماً مع رسالتنا.&quot;</p>
                <p className="text-rolls-gold font-semibold">إيلينا مارشيتي، مديرة إبداعية</p>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-rolls-gold">⭐</span>))}</div>
                <p className="text-gray-300 mb-4">&quot;جولة دبي في سبكتر كانت تجربة لا تُنسى. الصمت يتيح لك تقدير جمال المدينة بالكامل. التسارع الفوري مثير!&quot;</p>
                <p className="text-rolls-gold font-semibold">جيمس وونغ، سائح من سنغافورة</p>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    fr: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Pourquoi Louer la Rolls-Royce Spectre à Dubaï ?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                La Rolls-Royce Spectre est un jalon dans l&apos;histoire automobile — la première Rolls-Royce entièrement électrique.
                En louant la Spectre à Dubaï, vous vivez le futur du luxe automobile : une puissance électrique silencieuse,
                un couple instantané et la présence inimitable d&apos;une Rolls-Royce dans un design coupé fastback époustouflant.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Performance Électrique Inégalée</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Avec 577 chevaux et 900 Nm de couple instantané, la Spectre accélère de 0 à 100 km/h en seulement 4,5 secondes —
                dans un silence total. La batterie de 102 kWh offre plus de 520 km d&apos;autonomie.
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">Avantages Exclusifs à Dubaï</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Prise en charge gratuite depuis n&apos;importe quel lieu à Dubaï</li>
                  <li>👨‍✈️ Chauffeur professionnel multilingue en tenue formelle</li>
                  <li>🔋 Entièrement chargée et prête pour votre voyage</li>
                  <li>📱 Service conciergerie 24h/24 et 7j/7</li>
                  <li>🎯 Réservation flexible avec annulation gratuite jusqu&apos;à 48h</li>
                  <li>🏆 Garantie meilleur prix</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    ru: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                Почему стоит арендовать Rolls-Royce Spectre в Дубае?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Rolls-Royce Spectre — это историческая веха в автомобилестроении: первый полностью электрический Rolls-Royce.
                Арендуя Spectre в Дубае, вы испытываете будущее ультра-люксового автомобилестроения: бесшумную электрическую мощность,
                мгновенный крутящий момент и безошибочное присутствие Rolls-Royce в потрясающем кузове купе-фастбэк.
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Непревзойдённые электрические характеристики</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                С мощностью 577 л.с. и мгновенным крутящим моментом 900 Нм, Spectre разгоняется от 0 до 100 км/ч всего за 4,5 секунды —
                в полной тишине. Батарея на 102 кВтч обеспечивает запас хода более 520 км.
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">Эксклюзивные преимущества в Дубае</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 Бесплатная доставка в любую точку Дубая</li>
                  <li>👨‍✈️ Профессиональный многоязычный водитель в формальной одежде</li>
                  <li>🔋 Полностью заряжена и готова к поездке</li>
                  <li>📱 Консьерж-сервис 24/7</li>
                  <li>🎯 Гибкое бронирование с бесплатной отменой за 48 часов</li>
                  <li>🏆 Гарантия лучшей цены</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    zh: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                为什么在迪拜租劳斯莱斯闪灵？
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                劳斯莱斯闪灵是汽车历史上的里程碑——有史以来第一辆全电动劳斯莱斯。
                在迪拜租用闪灵，您将体验超豪华汽车的未来：无声电力、瞬时扭矩，
                以及劳斯莱斯独特的存在感，全部融入令人惊叹的fastback轿跑设计中。
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">无与伦比的电动性能</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                拥有577马力和900牛·米的瞬时扭矩，闪灵仅需4.5秒即可从0加速至100公里/小时——
                完全静音。102千瓦时电池提供超过520公里续航里程。
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">迪拜独家优势</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 迪拜任何地点免费接送</li>
                  <li>👨‍✈️ 专业多语种司机正装服务</li>
                  <li>🔋 满电出发，随时就绪</li>
                  <li>📱 24/7礼宾服务支持</li>
                  <li>🎯 灵活预订，48小时免费取消</li>
                  <li>🏆 最优价格保证</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    hi: (
      <>
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <h2 className="text-3xl font-bold text-rolls-gold mb-8">
                दुबई में रोल्स-रॉयस स्पेक्टर क्यों किराए पर लें?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                रोल्स-रॉयस स्पेक्टर ऑटोमोटिव इतिहास में एक मील का पत्थर है — अब तक की पहली पूर्ण इलेक्ट्रिक रोल्स-रॉयस।
                दुबई में स्पेक्टर किराए पर लेकर, आप अल्ट्रा-लक्जरी मोटरिंग के भविष्य का अनुभव करते हैं: व्हिस्पर-साइलेंट इलेक्ट्रिक पावर,
                तत्काल टॉर्क, और रोल्स-रॉयस की अचूक उपस्थिति।
              </p>
              <h3 className="text-2xl font-semibold text-white mt-8 mb-4">बेजोड़ इलेक्ट्रिक प्रदर्शन</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                577 हॉर्सपावर और 900 Nm इंस्टेंट टॉर्क के साथ, स्पेक्टर केवल 4.5 सेकंड में 0-100 km/h तक पहुंचती है —
                पूर्ण शांति में। 102 kWh बैटरी 520 km से अधिक की रेंज प्रदान करती है।
              </p>
              <div className="bg-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-6 mt-8">
                <h3 className="text-2xl font-semibold text-rolls-gold mb-4">दुबई में विशेष लाभ</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>🚗 दुबई में किसी भी स्थान से मुफ्त पिकअप</li>
                  <li>👨‍✈️ फॉर्मल ड्रेस में प्रोफेशनल मल्टीलिंगुअल चालक</li>
                  <li>🔋 पूरी तरह चार्ज और आपकी यात्रा के लिए तैयार</li>
                  <li>📱 24/7 कंसीयज सपोर्ट</li>
                  <li>🎯 48 घंटे तक मुफ्त कैंसलेशन के साथ फ्लेक्सिबल बुकिंग</li>
                  <li>🏆 सर्वोत्तम मूल्य गारंटी</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    ),
  }

  return contentByLocale[locale] || contentByLocale['en']
}

export default function SpectrePage() {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    { icon: '⚡', title: t('fleet.spectre.features.0.title'), desc: t('fleet.spectre.features.0.desc') },
    { icon: '🔋', title: t('fleet.spectre.features.1.title'), desc: t('fleet.spectre.features.1.desc') },
    { icon: '🤫', title: t('fleet.spectre.features.2.title'), desc: t('fleet.spectre.features.2.desc') },
    { icon: '✨', title: t('fleet.spectre.features.3.title'), desc: t('fleet.spectre.features.3.desc') },
    { icon: '🏎️', title: t('fleet.spectre.features.4.title'), desc: t('fleet.spectre.features.4.desc') },
    { icon: '🎵', title: t('fleet.spectre.features.5.title'), desc: t('fleet.spectre.features.5.desc') },
    { icon: '🌟', title: t('fleet.spectre.features.6.title'), desc: t('fleet.spectre.features.6.desc') },
    { icon: '🔒', title: t('fleet.spectre.features.7.title'), desc: t('fleet.spectre.features.7.desc') },
  ]

  const specs = {
    engine: t('fleet.spectre.specs.engine'),
    power: t('fleet.spectre.specs.power'),
    torque: t('fleet.spectre.specs.torque'),
    acceleration: t('fleet.spectre.specs.acceleration'),
    topSpeed: t('fleet.spectre.specs.topSpeed'),
    range: t('fleet.spectre.specs.range'),
    battery: t('fleet.spectre.specs.battery'),
    seats: t('fleet.spectre.specs.seats'),
  }

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rolls-Royce Spectre Rental Dubai",
    "image": [
      "https://www.rollsroycers.com/images/2024_Rolls-Royce_Spectre.jpg"
    ],
    "description": "Rent the first fully electric Rolls-Royce Spectre in Dubai from AED 7,500/day. Zero emissions luxury with 577hp and 520km range.",
    "brand": {
      "@type": "Brand",
      "name": "Rolls-Royce"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "7500",
      "highPrice": "150000",
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Rolls Roycers Dubai",
        "url": "https://rollsroycers.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "187",
      "bestRating": "5"
    }
  }

  const vehicleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    "name": "Rolls-Royce Spectre",
    "manufacturer": "Rolls-Royce Motor Cars",
    "model": "Spectre",
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "engineType": "Dual Electric Motor",
      "enginePower": {
        "@type": "QuantitativeValue",
        "value": "577",
        "unitCode": "HP"
      }
    },
    "vehicleSeatingCapacity": 4,
    "fuelType": "Electric",
    "vehicleTransmission": "Single-Speed Automatic",
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
        "name": "How much does it cost to rent a Rolls-Royce Spectre in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spectre rental starts from AED 7,500 per day, with weekly rates at AED 45,000 and monthly at AED 150,000. All prices include insurance, VAT, and professional chauffeur service."
        }
      },
      {
        "@type": "Question",
        "name": "What is the range of the Rolls-Royce Spectre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Spectre has a WLTP range of over 520 km on a full charge, more than enough for a full day of luxury touring across Dubai."
        }
      },
      {
        "@type": "Question",
        "name": "Is the Rolls-Royce Spectre fully electric?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Spectre is the first fully electric Rolls-Royce. It produces 577 HP and 900 Nm of torque with zero emissions, offering the quietest and smoothest Rolls-Royce experience ever."
        }
      }
    ]
  }

  return (
    <>
      <SEO pageKey="fleet.spectre" />
      <GEOOptimizer
        pageKey="fleet.spectre"
        title="Rent Rolls-Royce Spectre Dubai 2026"
        description="Rent the first fully electric Rolls-Royce Spectre in Dubai from AED 7,500/day. 577hp, 520km range, zero emissions luxury."
        entityType="Vehicle"
        primaryTopic="Rolls-Royce Spectre Rental Dubai"
        contentSummary="The Rolls-Royce Spectre is the first fully electric ultra-luxury car available for rent in Dubai. From AED 7,500/day with professional chauffeur. 577 HP dual electric motors, 520km range, 0-100 in 4.5s. Perfect for corporate events, photoshoots, and luxury tours."
        facts={[
          'Rolls-Royce Spectre rental from AED 7,500/day',
          'First fully electric Rolls-Royce ever built',
          '577 HP dual electric motors with 900 Nm torque',
          '520+ km range on a single charge',
          '0-100 km/h in 4.5 seconds',
          'Professional chauffeur included',
          'Zero emissions luxury experience'
        ]}
        faqs={[
          { question: 'How much does it cost to rent a Rolls-Royce Spectre in Dubai?', answer: 'The Rolls-Royce Spectre rental starts from AED 7,500 per day. Weekly rates from AED 45,000 and monthly from AED 150,000. All prices include professional chauffeur, insurance, and 24/7 support.' },
          { question: 'What is the range of the Spectre?', answer: 'The Spectre has over 520 km range on a full charge, more than enough for a full day of luxury touring across Dubai and beyond.' },
          { question: 'Is the Spectre good for corporate events?', answer: 'Absolutely. The Spectre makes a powerful statement about innovation and sustainability, making it ideal for tech companies, corporate events, and forward-thinking brands.' }
        ]}
      />
      <EntitySchema pageType="fleet" carModel="spectre" />

      {/* Structured Data Scripts */}
      <Script
        id="spectre-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="spectre-vehicle-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleStructuredData) }}
      />
      <Script
        id="spectre-faq-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/2024_Rolls-Royce_Spectre.jpg"
              alt="Rolls-Royce Spectre Dubai - Electric Luxury Car Rental"
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
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 rounded-full px-4 py-1 mb-6">
                <span className="text-green-400 text-sm font-semibold">⚡ 100% Electric</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {t('fleet.spectre.name')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-4">
                {t('fleet.spectre.tagline')}
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                {t('fleet.spectre.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#booking"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  {t('fleet.rentNow')} - AED 7,500/{t('fleet.perDay')}
                </motion.a>
                <Link href="/fleet" className="btn-secondary">
                  {t('fleet.learn_more')}
                </Link>
              </div>
              <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
                <span>⚡ {t('fleet.spectre.badges.electric')}</span>
                <span>✓ {t('fleet.spectre.badges.zeroemissions')}</span>
                <span>✓ {t('fleet.spectre.badges.chauffeur')}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="py-6 bg-rolls-gold/10 border-y border-rolls-gold/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-rolls-gold">577 HP</div>
                <div className="text-sm text-gray-400">{t('fleet.spectre.stats.power')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">520+ km</div>
                <div className="text-sm text-gray-400">{t('fleet.spectre.stats.range')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">4.5s</div>
                <div className="text-sm text-gray-400">{t('fleet.spectre.stats.acceleration')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">0</div>
                <div className="text-sm text-gray-400">{t('fleet.spectre.stats.emissions')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-rolls-gold">24/7</div>
                <div className="text-sm text-gray-400">{t('fleet.spectre.stats.support')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Price & Availability */}
        <section id="booking" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                {t('fleet.spectre.pricing.title')}
              </h2>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">AED 7,500</h3>
                    <p className="text-gray-400">{t('fleet.spectre.pricing.daily')}</p>
                    <p className="text-sm text-gray-500 mt-2">{t('fleet.spectre.pricing.dailyNote')}</p>
                  </div>
                  <div className="border-2 border-rolls-gold/50 rounded-lg p-4">
                    <div className="text-xs text-rolls-gold mb-1">{t('fleet.spectre.pricing.popular')}</div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">AED 45,000</h3>
                    <p className="text-gray-400">{t('fleet.spectre.pricing.weekly')}</p>
                    <p className="text-sm text-gray-500 mt-2">{t('fleet.spectre.pricing.weeklyNote')}</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-rolls-gold mb-2">AED 150,000</h3>
                    <p className="text-gray-400">{t('fleet.spectre.pricing.monthly')}</p>
                    <p className="text-sm text-gray-500 mt-2">{t('fleet.spectre.pricing.monthlyNote')}</p>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-green-400 mb-4">⚡ {t('fleet.spectre.pricing.available')}</p>
                  <a {...createWhatsAppLinkProps('spectre')} className="btn-primary">
                    {t('fleet.spectre.pricing.bookNow')}
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <span>✓ {t('fleet.spectre.pricing.includes.insurance')}</span>
                  <span>✓ {t('fleet.spectre.pricing.includes.vat')}</span>
                  <span>✓ {t('fleet.spectre.pricing.includes.chauffeur')}</span>
                  <span>✓ {t('fleet.spectre.pricing.includes.delivery')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              {t('fleet.spectre.featuresTitle')}
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('fleet.spectre.featuresSubtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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
              {t('fleet.spectre.specsTitle')}
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
                    <span className="text-gray-400 capitalize">{t(`fleet.spectre.specLabels.${key}`)}:</span>
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
              {t('fleet.spectre.galleryTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative h-64 md:col-span-2">
                <Image
                  src="/images/2024_Rolls-Royce_Spectre.jpg"
                  alt={t('fleet.spectre.gallery.exteriorAlt')}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-64">
                <Image
                  src="/images/inside-Rolls-Royce.jpg"
                  alt={t('fleet.spectre.gallery.interiorAlt')}
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
              {t('fleet.spectre.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('fleet.spectre.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a {...createWhatsAppLinkProps('spectre')} className="btn-primary">
                {t('fleet.spectre.cta.chat')}
              </a>
              <Link href="/booking" className="btn-secondary">
                {t('fleet.spectre.cta.book')}
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services & Fleet */}
        <section className="py-20 bg-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-4">{t('fleetPage.relatedServices')}</h2>
            <p className="text-rolls-gold/70 text-center mb-12">{t('fleetPage.spectre.relatedSubtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: '/services/corporate', title: t('fleetPage.spectre.services.corporate.title'), desc: t('fleetPage.spectre.services.corporate.desc') },
                { href: '/services/tours', title: t('fleetPage.spectre.services.tours.title'), desc: t('fleetPage.spectre.services.tours.desc') },
                { href: '/services/chauffeur', title: t('fleetPage.spectre.services.chauffeur.title'), desc: t('fleetPage.spectre.services.chauffeur.desc') },
              ].map((service) => (
                <Link key={service.href} href={service.href} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rolls-gold/50 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white group-hover:text-rolls-gold transition-colors mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </Link>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">{t('fleetPage.exploreModels')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { href: '/fleet/phantom', name: t('fleet.phantom.name'), price: t('fleetPage.spectre.models.phantom.price') },
                { href: '/fleet/ghost', name: t('fleet.ghost.name'), price: t('fleetPage.spectre.models.ghost.price') },
                { href: '/fleet/cullinan', name: t('fleet.cullinan.name'), price: t('fleetPage.spectre.models.cullinan.price') },
                { href: '/fleet/dawn', name: t('fleet.dawn.name'), price: t('fleetPage.spectre.models.dawn.price') },
                { href: '/fleet/wraith', name: t('fleet.wraith.name'), price: t('fleetPage.spectre.models.wraith.price') },
              ].map((model) => (
                <Link key={model.href} href={model.href} className="group text-center bg-white/5 border border-white/10 rounded-lg p-4 hover:border-rolls-gold/50 transition-all">
                  <p className="text-white font-semibold group-hover:text-rolls-gold transition-colors">{model.name}</p>
                  <p className="text-rolls-gold/70 text-sm mt-1">{model.price}</p>
                </Link>
              ))}
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
