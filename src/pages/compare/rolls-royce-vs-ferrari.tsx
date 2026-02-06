import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'

export default function RollsRoyceVsFerrariPage() {
  const { t } = useTranslation('common')
  const [selectedAspect, setSelectedAspect] = useState('rental')

  const getTranslatedArray = (key: string, fallback: string[]): string[] => {
    const translation = t(key, { returnObjects: true });
    if (Array.isArray(translation)) {
      return translation.map(item => {
        if (typeof item === 'string') {
          return item;
        }
        if (typeof item === 'object' && item !== null && 'point' in item) {
          return (item as { point: string }).point;
        }
        return '';
      }).filter(item => item !== '');
    }
    return fallback;
  };

  const aspects = [
    { id: 'rental', name: t('compare.ferrari.aspects.rental.name', 'Rental Experience'), icon: '🚗' },
    { id: 'comfort', name: t('compare.ferrari.aspects.comfort.name', 'Comfort & Luxury'), icon: '💎' },
    { id: 'occasion', name: t('compare.ferrari.aspects.occasion.name', 'Perfect Occasions'), icon: '🎯' },
    { id: 'service', name: t('compare.ferrari.aspects.service.name', 'Service & Support'), icon: '⭐' },
    { id: 'value', name: t('compare.ferrari.aspects.value.name', 'Value Proposition'), icon: '💰' },
    { id: 'experience', name: t('compare.ferrari.aspects.experience.name', 'Dubai Experience'), icon: '🌟' }
  ]

  const comparisonData = {
    rental: {
      'rolls-royce': {
        title: t('compare.ferrari.rental.rolls-royce.title', 'Premium Rental Excellence'),
        points: getTranslatedArray('compare.ferrari.rental.rolls-royce.points', [
          'Professional chauffeur included at no extra cost',
          'Complimentary fuel for all rental periods',
          'Free airport transfers and meet & greet service',
          'Flexible rental terms from 4 hours to monthly',
          '24/7 concierge support in multiple languages',
          'Comprehensive insurance with zero deductible'
        ]),
        summary: t('compare.ferrari.rental.rolls-royce.summary', 'Rolls-Royce rental offers an unmatched luxury experience with complete peace of mind and exceptional value for discerning clients.')
      },
      'ferrari': {
        title: t('compare.ferrari.rental.ferrari.title', 'Performance Rental'),
        points: getTranslatedArray('compare.ferrari.rental.ferrari.points', [
          'Self-drive only (special license required)',
          'Fuel costs not included',
          'Limited daily mileage allowance',
          'High security deposit required',
          'Basic insurance with high deductible',
          'Additional fees for delivery/collection'
        ]),
        summary: t('compare.ferrari.rental.ferrari.summary', 'Ferrari rental focuses on the driving experience but comes with additional costs and restrictions.')
      }
    },
    comfort: {
      'rolls-royce': {
        title: t('compare.ferrari.comfort.rolls-royce.title', 'Ultimate Comfort'),
        points: getTranslatedArray('compare.ferrari.comfort.rolls-royce.points', [
          'Spacious cabin for up to 5 passengers',
          'Whisper-quiet interior ideal for business calls',
          'Massage seats with climate control',
          'Privacy glass and partition available',
          'Premium entertainment system',
          'Ample luggage space for shopping and travel'
        ]),
        summary: t('compare.ferrari.comfort.rolls-royce.summary', 'Rolls-Royce provides a serene sanctuary perfect for Dubai\'s climate and lifestyle, ensuring arrival in absolute comfort.')
      },
      'ferrari': {
        title: t('compare.ferrari.comfort.ferrari.title', 'Sport-Focused Interior'),
        points: getTranslatedArray('compare.ferrari.comfort.ferrari.points', [
          'Limited to 2 passengers only',
          'Engine noise dominates the cabin',
          'Racing seats less comfortable for long trips',
          'Minimal luggage space',
          'Limited visibility',
          'Harsh suspension on city roads'
        ]),
        summary: t('compare.ferrari.comfort.ferrari.summary', 'Ferrari prioritizes performance over comfort, which can be challenging for extended use in Dubai traffic.')
      }
    },
    occasion: {
      'rolls-royce': {
        title: t('compare.ferrari.occasion.rolls-royce.title', 'Perfect for Every Occasion'),
        points: getTranslatedArray('compare.ferrari.occasion.rolls-royce.points', [
          'Weddings and special celebrations',
          'Corporate events and business meetings',
          'Airport transfers for VIP guests',
          'Shopping trips to Dubai Mall and Mall of Emirates',
          'Fine dining experiences at luxury hotels',
          'Royal protocol events and diplomatic occasions'
        ]),
        summary: t('compare.ferrari.occasion.rolls-royce.summary', 'Rolls-Royce is the versatile choice that elevates any occasion with unmatched prestige and elegance.')
      },
      'ferrari': {
        title: t('compare.ferrari.occasion.ferrari.title', 'Limited Use Cases'),
        points: getTranslatedArray('compare.ferrari.occasion.ferrari.points', [
          'Weekend joy rides only',
          'Not suitable for formal events',
          'Impractical for business meetings',
          'Cannot accommodate groups',
          'Uncomfortable in traffic',
          'Weather-dependent experience'
        ]),
        summary: t('compare.ferrari.occasion.ferrari.summary', 'Ferrari rental is limited to recreational driving and lacks the versatility needed for most luxury occasions.')
      }
    },
    service: {
      'rolls-royce': {
        title: t('compare.ferrari.service.rolls-royce.title', 'White Glove Service'),
        points: getTranslatedArray('compare.ferrari.service.rolls-royce.points', [
          'Dedicated account manager for personalized service',
          'Complimentary vehicle swap if needed',
          'Red carpet arrival service available',
          'Refreshments and amenities included',
          'Child seats and special requests accommodated',
          'Multilingual chauffeurs with local expertise'
        ]),
        summary: t('compare.ferrari.service.rolls-royce.summary', 'Our Rolls-Royce service exceeds expectations with attention to every detail and genuine care for client comfort.')
      },
      'ferrari': {
        title: t('compare.ferrari.service.ferrari.title', 'Basic Rental Service'),
        points: getTranslatedArray('compare.ferrari.service.ferrari.points', [
          'Standard rental counter service',
          'Limited support hours',
          'No chauffeur option available',
          'Extra charges for most services',
          'Strict terms and conditions',
          'Limited flexibility for changes'
        ]),
        summary: t('compare.ferrari.service.ferrari.summary', 'Ferrari rental offers basic service focused on the car rather than the complete client experience.')
      }
    },
    value: {
      'rolls-royce': {
        title: t('compare.ferrari.value.rolls-royce.title', 'Exceptional Value'),
        points: getTranslatedArray('compare.ferrari.value.rolls-royce.points', [
          'All-inclusive pricing with no hidden costs',
          'Chauffeur service saves on driver costs',
          'Fuel included saves AED 500-1000 per day',
          'Free delivery saves AED 300-500',
          'Comprehensive insurance provides peace of mind',
          'Loyalty program with exclusive benefits'
        ]),
        summary: t('compare.ferrari.value.rolls-royce.summary', 'When considering all included services, Rolls-Royce rental offers superior value and worry-free luxury.')
      },
      'ferrari': {
        title: t('compare.ferrari.value.ferrari.title', 'Hidden Costs'),
        points: getTranslatedArray('compare.ferrari.value.ferrari.points', [
          'Base price excludes many essentials',
          'Fuel costs add significant expense',
          'High insurance deductible risk',
          'Delivery and collection fees',
          'Excess mileage charges',
          'Expensive damage liability'
        ]),
        summary: t('compare.ferrari.value.ferrari.summary', 'Ferrari\'s apparent rental rate becomes much higher when all additional costs are considered.')
      }
    },
    experience: {
      'rolls-royce': {
        title: t('compare.ferrari.experience.rolls-royce.title', 'The Dubai Lifestyle Choice'),
        points: getTranslatedArray('compare.ferrari.experience.rolls-royce.points', [
          'Arrive at Burj Al Arab in ultimate style',
          'Perfect for Dubai\'s luxury shopping destinations',
          'Ideal for business in DIFC and Downtown',
          'Comfortable in all weather conditions',
          'Prestigious presence at exclusive venues',
          'Networking opportunities with elite clientele'
        ]),
        summary: t('compare.ferrari.experience.rolls-royce.summary', 'Rolls-Royce rental perfectly complements Dubai\'s luxury lifestyle and opens doors to exclusive experiences.')
      },
      'ferrari': {
        title: t('compare.ferrari.experience.ferrari.title', 'Limited Dubai Compatibility'),
        points: getTranslatedArray('compare.ferrari.experience.ferrari.points', [
          'Uncomfortable in summer heat',
          'Impractical for most Dubai venues',
          'Attracts unwanted attention',
          'Challenging in heavy traffic',
          'Limited parking options',
          'Not suitable for family outings'
        ]),
        summary: t('compare.ferrari.experience.ferrari.summary', 'Ferrari\'s limitations become apparent in Dubai\'s daily luxury lifestyle requirements.')
      }
    }
  }

  const rentalPackages = {
    rollsRoyce: {
      daily: {
        price: 'AED 3,500',
        includes: [
          'Professional chauffeur',
          'Unlimited local mileage',
          'Complimentary fuel',
          'Comprehensive insurance',
          'Airport transfers',
          '24/7 support'
        ],
        totalValue: 'AED 5,500+'
      },
      weekly: {
        price: 'AED 21,000',
        includes: [
          'All daily benefits',
          '1 free extra day',
          'VIP event access',
          'Personal concierge',
          'Luxury hotel partnerships',
          'Complimentary car wash'
        ],
        totalValue: 'AED 35,000+'
      },
      monthly: {
        price: 'AED 75,000',
        includes: [
          'All weekly benefits',
          'Dedicated account manager',
          'Vehicle replacement option',
          'Custom branding available',
          'Corporate billing',
          'Exclusive member events'
        ],
        totalValue: 'AED 120,000+'
      }
    },
    ferrari: {
      daily: {
        price: 'AED 4,000',
        excludes: [
          'Chauffeur (not available)',
          'Fuel (AED 500-800/day)',
          'Full insurance (AED 1,000/day)',
          'Delivery (AED 500)',
          'Excess mileage (AED 10/km)',
          'Security deposit (AED 20,000)'
        ],
        realCost: 'AED 6,500+'
      },
      weekly: {
        price: 'AED 25,000',
        excludes: [
          'All daily exclusions',
          'No loyalty benefits',
          'Limited support hours',
          'Weather restrictions',
          'Maintenance downtime',
          'No replacement vehicle'
        ],
        realCost: 'AED 40,000+'
      },
      monthly: {
        price: 'AED 90,000',
        excludes: [
          'All weekly exclusions',
          'High wear and tear risk',
          'No corporate benefits',
          'Limited availability',
          'Strict usage terms',
          'No customization'
        ],
        realCost: 'AED 150,000+'
      }
    }
  }

  const testimonials = [
    {
      name: 'Ahmed Al Rashid',
      position: 'CEO, Dubai Holdings',
      text: 'For business in Dubai, nothing compares to the Rolls-Royce experience. The chauffeur service allows me to work during transit, and the prestige it brings to corporate meetings is invaluable.',
      rating: 5
    },
    {
      name: 'Princess Fatima',
      position: 'Royal Family Member',
      text: 'We exclusively use Rolls-Royce for all our official engagements. The comfort, privacy, and reliability are unmatched. Ferrari simply cannot provide the dignity required for formal occasions.',
      rating: 5
    },
    {
      name: 'Viktor Petrov',
      position: 'Luxury Real Estate Developer',
      text: 'I tried Ferrari rental once - the hidden costs and impracticality were shocking. Rolls-Royce includes everything and actually costs less when you factor in all services. It\'s a smart business choice.',
      rating: 5
    }
  ]

  return (
    <>
      <SEO pageKey="compare.rolls-royce-vs-ferrari" />
      <GEOOptimizer
        pageKey="compare.rolls-royce-vs-ferrari"
        title="Rolls-Royce vs Ferrari Rental Dubai 2026"
        description="Compare Rolls-Royce vs Ferrari rental in Dubai. Luxury comfort vs supercar thrills."
        entityType="ComparisonArticle"
        primaryTopic="Rolls-Royce vs Ferrari Rental Dubai"
        contentSummary="Rolls-Royce vs Ferrari rental comparison in Dubai. Rolls-Royce offers ultimate luxury and comfort from AED 3,800/day. Ferrari delivers supercar performance from AED 3,500/day. Choose based on your occasion."
        facts={['Rolls-Royce Ghost from AED 3,800/day', 'Ferrari 488 from AED 3,500/day', 'Rolls-Royce = luxury comfort', 'Ferrari = supercar performance']}
      />
      <Layout>
        {/* Hero Section - Rental Focused */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Rental Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 via-rolls-black/80 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('compare.ferrari.hero.title', 'Rolls-Royce vs Ferrari Rental in Dubai')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                {t('compare.ferrari.hero.subtitle', 'Discover why Rolls-Royce is the intelligent choice for luxury car rental in Dubai')}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">98%</p>
                  <p className="text-sm text-gray-300">Client Satisfaction</p>
                </div>
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">50%</p>
                  <p className="text-sm text-gray-300">More Value</p>
                </div>
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">24/7</p>
                  <p className="text-sm text-gray-300">Full Service</p>
                </div>
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">100%</p>
                  <p className="text-sm text-gray-300">All Inclusive</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary text-lg px-8 py-4">
                  {t('compare.ferrari.hero.bookRollsRoyce', 'Book Rolls-Royce Now')}
                </Link>
                <Link href="#comparison" className="btn-secondary text-lg px-8 py-4">
                  {t('compare.ferrari.hero.seeComparison', 'See Full Comparison')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Rolls-Royce Wins */}
        <section className="py-16 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {t('compare.ferrari.winner.title', 'Why Smart Clients Choose Rolls-Royce')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('compare.ferrari.winner.subtitle', 'The numbers speak for themselves - Rolls-Royce delivers superior value, comfort, and prestige')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-rolls-gold/30 to-rolls-gold/10 border border-rolls-gold/40 rounded-lg p-8"
              >
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">Better Value</h3>
                <p className="text-gray-300 mb-4">
                  All-inclusive pricing saves you AED 2,000+ per day compared to Ferrari when including fuel, insurance, and chauffeur costs.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>✓ Free chauffeur (worth AED 800/day)</li>
                  <li>✓ Free fuel (worth AED 500/day)</li>
                  <li>✓ Full insurance included</li>
                  <li>✓ No hidden charges</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-rolls-gold/30 to-rolls-gold/10 border border-rolls-gold/40 rounded-lg p-8"
              >
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">Superior Experience</h3>
                <p className="text-gray-300 mb-4">
                  Rolls-Royce provides a complete luxury experience, not just a car rental. Perfect for business and pleasure.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>✓ Seats up to 5 passengers</li>
                  <li>✓ Silent cabin for calls</li>
                  <li>✓ Ample luggage space</li>
                  <li>✓ All-weather comfort</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-rolls-gold/30 to-rolls-gold/10 border border-rolls-gold/40 rounded-lg p-8"
              >
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">Unmatched Service</h3>
                <p className="text-gray-300 mb-4">
                  Our white-glove service ensures every journey exceeds expectations with personalized attention to detail.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>✓ 24/7 concierge support</li>
                  <li>✓ Airport meet & greet</li>
                  <li>✓ Flexible rental terms</li>
                  <li>✓ VIP treatment always</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aspect Selector */}
        <section id="comparison" className="py-8 bg-gradient-to-b from-rolls-navy to-rolls-black sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {aspects.map((aspect) => (
                <motion.button
                  key={aspect.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAspect(aspect.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                    selectedAspect === aspect.id
                      ? 'bg-rolls-gold text-rolls-black'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  <span className="text-xl">{aspect.icon}</span>
                  <span>{aspect.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                key={selectedAspect}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                  {aspects.find(a => a.id === selectedAspect)?.name} {t('compare.ferrari.detailed.comparison', 'Comparison')}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Rolls-Royce - Always First */}
                  <div className="bg-gradient-to-br from-rolls-gold/20 to-rolls-gold/5 border-2 border-rolls-gold/40 rounded-lg p-8 transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">Rolls-Royce</h3>
                      <div className="bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-sm font-bold">
                        RECOMMENDED
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-rolls-gold mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-200">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-rolls-gold/10 rounded-lg p-4">
                      <p className="text-gray-300 italic">
                        {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].summary}
                      </p>
                    </div>
                  </div>

                  {/* Ferrari - With Disadvantages Highlighted */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 opacity-90">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">Ferrari</h3>
                      <div className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        LIMITED
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-red-400 mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['ferrari'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['ferrari'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-400">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-red-900/20 rounded-lg p-4">
                      <p className="text-gray-400 italic">
                        {comparisonData[selectedAspect as keyof typeof comparisonData]['ferrari'].summary}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rental Packages Comparison */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.ferrari.packages.title', 'Rental Packages - The Real Cost')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {['daily', 'weekly', 'monthly'].map((period, index) => (
                <motion.div
                  key={period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Rolls-Royce Package */}
                  <div className="bg-gradient-to-b from-rolls-gold/30 to-rolls-gold/10 border-2 border-rolls-gold/40 rounded-t-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">Rolls-Royce</h3>
                        <p className="text-3xl font-bold text-rolls-gold mt-2">
                          {rentalPackages.rollsRoyce[period as keyof typeof rentalPackages.rollsRoyce].price}
                        </p>
                        <p className="text-sm text-gray-400 capitalize">{period} Rate</p>
                      </div>
                      <span className="bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-xs font-bold">
                        BEST VALUE
                      </span>
                    </div>
                    
                    <p className="text-sm text-green-400 font-semibold mb-3">✓ All Inclusive</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {rentalPackages.rollsRoyce[period as keyof typeof rentalPackages.rollsRoyce].includes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-rolls-gold/20">
                      <p className="text-xs text-gray-400">Total Value:</p>
                      <p className="text-lg font-bold text-rolls-gold">
                        {rentalPackages.rollsRoyce[period as keyof typeof rentalPackages.rollsRoyce].totalValue}
                      </p>
                    </div>
                  </div>
                  
                  {/* Ferrari Package */}
                  <div className="bg-gray-900/50 border border-gray-700 rounded-b-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">Ferrari</h3>
                        <p className="text-3xl font-bold text-red-500 mt-2">
                          {rentalPackages.ferrari[period as keyof typeof rentalPackages.ferrari].price}
                        </p>
                        <p className="text-sm text-gray-400 capitalize">{period} Rate</p>
                      </div>
                      <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs">
                        + EXTRAS
                      </span>
                    </div>
                    
                    <p className="text-sm text-red-400 font-semibold mb-3">✗ Additional Costs:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {rentalPackages.ferrari[period as keyof typeof rentalPackages.ferrari].excludes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-red-600/20">
                      <p className="text-xs text-gray-400">Real Cost:</p>
                      <p className="text-lg font-bold text-red-500">
                        {rentalPackages.ferrari[period as keyof typeof rentalPackages.ferrari].realCost}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mt-12"
            >
              <p className="text-2xl text-white mb-4">
                {t('compare.ferrari.packages.summary', 'Save up to 40% with Rolls-Royce all-inclusive rental')}
              </p>
              <Link href="/booking" className="btn-primary text-lg px-8 py-4">
                {t('compare.ferrari.packages.cta', 'Book Smart - Choose Rolls-Royce')}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.ferrari.testimonials.title', 'What Our Clients Say')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('compare.ferrari.finalCta.title', 'The Smart Choice is Clear')}
              </h2>
              <div className="bg-gradient-to-br from-rolls-gold/20 to-rolls-gold/10 border-2 border-rolls-gold/40 rounded-lg p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-rolls-gold mb-4">Rolls-Royce</h3>
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>✓ All-inclusive luxury</li>
                      <li>✓ Professional chauffeur</li>
                      <li>✓ Perfect for all occasions</li>
                      <li>✓ Superior comfort</li>
                      <li>✓ Best overall value</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">Ferrari</h3>
                    <ul className="text-gray-400 space-y-2 text-left">
                      <li>✗ Hidden extra costs</li>
                      <li>✗ Self-drive only</li>
                      <li>✗ Limited practicality</li>
                      <li>✗ Uncomfortable</li>
                      <li>✗ Higher total cost</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-xl text-gray-300 mb-8">
                  {t('compare.ferrari.finalCta.message', 'Join thousands of satisfied clients who choose Rolls-Royce for the ultimate luxury rental experience in Dubai.')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/booking" className="btn-primary text-lg px-8 py-4">
                    {t('compare.ferrari.finalCta.bookNow', 'Reserve Your Rolls-Royce')}
                  </Link>
                  <Link href="/fleet" className="btn-secondary text-lg px-8 py-4">
                    {t('compare.ferrari.finalCta.viewFleet', 'View Our Fleet')}
                  </Link>
                </div>
                
                <p className="text-sm text-gray-400 mt-6">
                  {t('compare.ferrari.finalCta.urgency', '⏰ Limited availability - Book now to secure your dates')}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Bar */}
        <section className="py-8 bg-rolls-gold">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-rolls-black font-bold text-xl">
                  {t('compare.ferrari.contact.title', 'Ready to Experience True Luxury?')}
                </p>
                <p className="text-rolls-black/80">
                  {t('compare.ferrari.contact.subtitle', 'Our team is available 24/7 to assist you')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+971501234567" className="bg-rolls-black text-white px-6 py-3 rounded-full font-semibold hover:bg-rolls-navy transition-colors">
                  📞 +971 50 123 4567
                </a>
                <a href="https://wa.me/971501234567" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                  💬 WhatsApp Now
                </a>
              </div>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}