import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import WhatsAppButton from '@/components/WhatsAppButton'
import PriceCalculator from '@/components/PriceCalculator'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

export default function PricingPage() {
  const { t } = useTranslation('common')
  const [selectedDuration, setSelectedDuration] = useState('daily')
  const [showCalculator, setShowCalculator] = useState(false)

  const durations = [
    { id: 'daily', name: 'Daily Rates', multiplier: 1 },
    { id: 'weekly', name: 'Weekly Rates', multiplier: 6, discount: '15% OFF' },
    { id: 'monthly', name: 'Monthly Rates', multiplier: 20, discount: '30% OFF' }
  ]

  const vehiclePricing = [
    {
      model: 'Phantom',
      tagline: 'The Ultimate Flagship',
      image: '/images/Rolls-royce-phantom.jpg',
      prices: {
        daily: 5800,
        weekly: 34800,
        monthly: 116000
      },
      features: [
        'Extended wheelbase available',
        'Starlight headliner',
        'Privacy suite option',
        'Bespoke audio system'
      ],
      popular: false
    },
    {
      model: 'Ghost',
      tagline: 'Effortless Everywhere',
      image: '/images/Black_Rolls_Royce_Ghost.jpg',
      prices: {
        daily: 3800,
        weekly: 22800,
        monthly: 76000
      },
      features: [
        'Illuminated fascia',
        'Black Badge available',
        'Planar suspension',
        'Magic carpet ride'
      ],
      popular: true
    },
    {
      model: 'Cullinan',
      tagline: 'Luxury SUV Excellence',
      image: '/images/Rolls-Royce-Cullinan_.jpg',
      prices: {
        daily: 6500,
        weekly: 39000,
        monthly: 130000
      },
      features: [
        'All-terrain capability',
        'Viewing suite option',
        'Recreation module',
        'Night vision system'
      ],
      popular: false
    },
    {
      model: 'Dawn',
      tagline: 'Social Convertible',
      image: '/images/Rolls-Royce_Dawn.jpg',
      prices: {
        daily: 5500,
        weekly: 33000,
        monthly: 110000
      },
      features: [
        'Convertible roof',
        'Wind deflector',
        'Bespoke audio tuning',
        'Open-air luxury'
      ],
      popular: false
    },
    {
      model: 'Wraith',
      tagline: 'Grand Tourer',
      image: '/images/Rolls-royce-with-blan.jpg',
      prices: {
        daily: 5000,
        weekly: 30000,
        monthly: 100000
      },
      features: [
        'Fastback design',
        'Starlight headliner',
        'Black Badge power',
        'Dynamic performance'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      service: 'Professional Chauffeur',
      price: 'AED 1,500/day',
      description: 'Experienced, multilingual drivers'
    },
    {
      service: 'Airport Transfer',
      price: 'AED 1,000',
      description: 'One-way luxury transfer'
    },
    {
      service: 'Wedding Package',
      price: 'From AED 8,500',
      description: 'Decorated vehicle with chauffeur'
    },
    {
      service: 'Hourly Rental',
      price: 'AED 2,000/hour',
      description: 'Minimum 4 hours'
    },
    {
      service: 'Extra Mileage',
      price: 'AED 20/km',
      description: 'Beyond 250km daily allowance'
    },
    {
      service: 'Delivery & Collection',
      price: 'AED 500 in Dubai',
      description: 'Other emirates from AED 1,000'
    }
  ]

  const corporatePackages = [
    {
      name: 'Executive',
      price: 'AED 85,000/month',
      features: [
        '20 days per month',
        'Choice of Ghost or Wraith',
        'Dedicated chauffeur',
        'Airport transfers included'
      ]
    },
    {
      name: 'Chairman',
      price: 'AED 150,000/month',
      features: [
        'Unlimited usage',
        'Any vehicle from fleet',
        '2 dedicated chauffeurs',
        'Priority booking'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      features: [
        'Multiple vehicles',
        'Fleet management',
        'Corporate branding',
        'Dedicated account team'
      ]
    }
  ]

  const seasonalFactors = [
    {
      season: 'Peak Season (Nov-Mar)',
      factor: '+20%',
      description: 'Dubai season & holidays'
    },
    {
      season: 'Ramadan',
      factor: '+15%',
      description: 'High demand period'
    },
    {
      season: 'Summer (Jun-Aug)',
      factor: '-10%',
      description: 'Special summer rates'
    },
    {
      season: 'Events & Exhibitions',
      factor: '+25%',
      description: 'GITEX, Air Show, etc.'
    }
  ]

  return (
    <>
      <SEO pageKey="other.pricing" />
      <GEOOptimizer
        pageKey="other.pricing"
        title="Rolls-Royce Rental Prices Dubai 2026"
        description="Rolls-Royce rental prices in Dubai 2026. Ghost from AED 3,800/day, Phantom AED 5,800/day, Cullinan AED 6,500/day."
        entityType="PriceList"
        primaryTopic="Rolls-Royce Rental Price Dubai 2026"
        contentSummary="Complete Rolls-Royce rental pricing for Dubai 2026. Ghost from AED 3,800/day, Wraith AED 5,000/day, Dawn AED 5,500/day, Phantom AED 5,800/day, Cullinan AED 6,500/day. All prices include chauffeur, insurance, and 24/7 support."
        pricing={{
          currency: 'AED',
          items: [
            { name: 'Rolls-Royce Ghost', price: '3800', unit: 'DAY' },
            { name: 'Rolls-Royce Wraith', price: '5000', unit: 'DAY' },
            { name: 'Rolls-Royce Dawn', price: '5500', unit: 'DAY' },
            { name: 'Rolls-Royce Phantom', price: '5800', unit: 'DAY' },
            { name: 'Rolls-Royce Cullinan', price: '6500', unit: 'DAY' }
          ]
        }}
        facts={['Ghost from AED 3,800/day', 'Phantom from AED 5,800/day', 'Cullinan SUV from AED 6,500/day', 'All prices include chauffeur', 'Weekly & monthly discounts available']}
        faqs={[
          { question: 'How much does it cost to rent a Rolls-Royce in Dubai 2026?', answer: 'Rolls-Royce rental in Dubai starts from AED 3,800/day for the Ghost. Phantom AED 5,800/day, Cullinan AED 6,500/day. Weekly rates offer 15% discount, monthly rates 40% discount.' },
          { question: 'What is included in the rental price?', answer: 'All rental prices include professional chauffeur, comprehensive insurance, 24/7 roadside assistance, complimentary water and WiFi, and free delivery anywhere in Dubai.' }
        ]}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Pricing"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {t('pricingPage.hero.title')}
              </h1>
              <p className="text-2xl text-rolls-gold mb-4">
                {t('pricingPage.hero.subtitle')}
              </p>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                {t('pricingPage.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Duration Selector */}
        <section className="py-8 bg-gradient-to-b from-rolls-black to-rolls-navy sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {durations.map((duration) => (
                <motion.button
                  key={duration.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all ${
                    selectedDuration === duration.id
                      ? 'bg-rolls-gold text-rolls-black'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  <span className="text-lg">{duration.name}</span>
                  {duration.discount && (
                    <span className="ml-2 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      {duration.discount}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Pricing Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {vehiclePricing.map((vehicle, index) => (
                <motion.div
                  key={vehicle.model}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-rolls-black/50 backdrop-blur-sm border ${
                    vehicle.popular ? 'border-rolls-gold border-2' : 'border-rolls-gold/20'
                  } rounded-lg overflow-hidden relative`}
                >
                  {vehicle.popular && (
                    <div className="absolute top-0 right-0 bg-rolls-gold text-rolls-black px-4 py-1 rounded-bl-lg font-semibold z-10">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="aspect-video relative">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.model} Rental`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{vehicle.model}</h3>
                    <p className="text-gray-400 mb-4">{vehicle.tagline}</p>
                    
                    <div className="mb-6">
                      <p className="text-4xl font-bold text-rolls-gold">
                        AED {vehicle.prices[selectedDuration as keyof typeof vehicle.prices].toLocaleString()}
                      </p>
                      <p className="text-gray-400">
                        {selectedDuration === 'daily' ? 'per day' : 
                         selectedDuration === 'weekly' ? 'per week' : 
                         'per month'}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-rolls-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/fleet/${vehicle.model.toLowerCase()}`} className="btn-primary w-full text-center">
                      View {vehicle.model} Details & Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('pricingPage.additionalServices.title')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.service}</h3>
                  <p className="text-2xl font-bold text-rolls-gold mb-2">{service.price}</p>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('pricingPage.corporatePackages.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {corporatePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border ${
                    index === 1 ? 'border-rolls-gold border-2' : 'border-rolls-gold/30'
                  } rounded-lg p-8 text-center relative`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rolls-gold text-rolls-black px-4 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-rolls-gold mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/corporate" className="btn-primary w-full">
                    {t('pricingPage.corporatePackages.learnMore')}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Pricing */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('pricingPage.seasonalPricing.title')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-rolls-gold/10">
                      <th className="px-6 py-4 text-left text-white font-semibold">Season/Event</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Price Factor</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seasonalFactors.map((factor, index) => (
                      <tr key={index} className="border-t border-rolls-gold/10">
                        <td className="px-6 py-4 text-gray-300">{factor.season}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            factor.factor.startsWith('+') ? 'text-red-400' : 'text-green-400'
                          }`}>
                            {factor.factor}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{factor.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-gray-400 mt-4">
                {t('pricingPage.seasonalPricing.disclaimer')}
              </p>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                {t('pricingPage.priceCalculator.title')}
              </h2>
              <p className="text-xl text-gray-300">
                {t('pricingPage.priceCalculator.subtitle')}
              </p>
            </div>
            
            {!showCalculator ? (
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalculator(true)}
                  className="btn-primary"
                >
                  {t('pricingPage.priceCalculator.openButton')}
                </motion.button>
              </div>
            ) : (
              <PriceCalculator />
            )}
          </div>
        </section>

        {/* Price Match Guarantee */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {t('pricingPage.priceGuarantee.title')}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {t('pricingPage.priceGuarantee.subtitle')}
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-4xl mb-2">💰</div>
                    <h3 className="text-white font-semibold mb-2">{t('pricingPage.priceGuarantee.features.priceMatch.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('pricingPage.priceGuarantee.features.priceMatch.description')}</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">🎁</div>
                    <h3 className="text-white font-semibold mb-2">{t('pricingPage.priceGuarantee.features.extraDiscount.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('pricingPage.priceGuarantee.features.extraDiscount.description')}</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">✅</div>
                    <h3 className="text-white font-semibold mb-2">{t('pricingPage.priceGuarantee.features.noHiddenFees.title')}</h3>
                    <p className="text-gray-400 text-sm">{t('pricingPage.priceGuarantee.features.noHiddenFees.description')}</p>
                  </div>
                </div>
                <Link href="/booking" className="btn-primary">
                  {t('pricingPage.priceGuarantee.cta')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('pricingPage.faq.title')}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: t('pricingPage.faq.questions.included.question'),
                  a: t('pricingPage.faq.questions.included.answer')
                },
                {
                  q: t('pricingPage.faq.questions.deposit.question'),
                  a: t('pricingPage.faq.questions.deposit.answer')
                },
                {
                  q: t('pricingPage.faq.questions.discounts.question'),
                  a: t('pricingPage.faq.questions.discounts.answer')
                },
                {
                  q: t('pricingPage.faq.questions.holidays.question'),
                  a: t('pricingPage.faq.questions.holidays.answer')
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-rolls-gold hover:text-white transition-colors">
                {t('pricingPage.faq.viewAllFaqs')} →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('pricingPage.cta.title')}
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('pricingPage.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  {t('pricingPage.cta.bookNow')}
                </Link>
                <a
                  {...createWhatsAppLinkProps('pricing')}
                  className="btn-secondary"
                >
                  {t('pricingPage.cta.callForRates')}
                </a>
              </div>
              
              <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">24/7</p>
                  <p className="text-gray-400">{t('pricingPage.cta.stats.support')}</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">0%</p>
                  <p className="text-gray-400">{t('pricingPage.cta.stats.hiddenFees')}</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">100%</p>
                  <p className="text-gray-400">{t('pricingPage.cta.stats.satisfaction')}</p>
                </div>
              </div>
            </motion.div>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}