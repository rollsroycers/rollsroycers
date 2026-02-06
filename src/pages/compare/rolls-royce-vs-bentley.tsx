import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'

export default function RollsRoyceVsBentleyPage() {
  const { t } = useTranslation('common')
  const [selectedAspect, setSelectedAspect] = useState('overview')

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
    { id: 'overview', name: t('compare.aspects.overview.name'), icon: '📊' },
    { id: 'luxury', name: t('compare.aspects.luxury.name'), icon: '💎' },
    { id: 'performance', name: t('compare.aspects.performance.name'), icon: '🏎️' },
    { id: 'technology', name: t('compare.aspects.technology.name'), icon: '📱' },
    { id: 'heritage', name: t('compare.aspects.heritage.name'), icon: '🏛️' },
    { id: 'price', name: t('compare.aspects.price.name'), icon: '💰' }
  ]

  const comparisonData = {
    overview: {
      'rolls-royce': {
        title: t('compare.overview.rolls-royce.title') || 'The Pinnacle of Luxury',
        points: getTranslatedArray('compare.overview.rolls-royce.points', [
          'Uncompromising commitment to luxury and comfort',
          'Bespoke craftsmanship with unlimited customization',
          'The quietest and smoothest ride in the automotive world',
          'Preferred choice of royalty and heads of state'
        ]),
        summary: t('compare.overview.rolls-royce.summary') || 'Rolls-Royce represents the absolute pinnacle of automotive luxury, where no compromise is made in the pursuit of perfection.'
      },
      'bentley': {
        title: t('compare.overview.bentley.title') || 'Performance Luxury',
        points: getTranslatedArray('compare.overview.bentley.points', [
          'Luxury combined with sporting performance',
          'Handcrafted interiors with modern technology',
          'More driver-focused experience',
          'Racing heritage and sporting credentials'
        ]),
        summary: t('compare.overview.bentley.summary') || 'Bentley offers a unique blend of luxury and performance, appealing to those who want to drive as much as be driven.'
      }
    },
    luxury: {
      'rolls-royce': {
        title: t('compare.luxury.rolls-royce.title') || 'Unparalleled Opulence',
        points: getTranslatedArray('compare.luxury.rolls-royce.points', [
          'Hand-stitched leather from specially reared bulls',
          'Real wood veneers from single trees for perfect matching',
          'Starlight headliner with thousands of fiber optic lights',
          'Bespoke department for unlimited personalization'
        ]),
        summary: t('compare.luxury.rolls-royce.summary') || 'Every Rolls-Royce is a masterpiece of craftsmanship, with attention to detail that borders on obsession.'
      },
      'bentley': {
        title: t('compare.luxury.bentley.title') || 'Contemporary Luxury',
        points: getTranslatedArray('compare.luxury.bentley.points', [
          'Diamond-quilted leather seats',
          'Rotating display featuring analog dials',
          'Knurled metal controls and switches',
          'Mulliner personalization service'
        ]),
        summary: t('compare.luxury.bentley.summary') || 'Bentley combines traditional craftsmanship with modern luxury, creating an environment that\'s both opulent and sporting.'
      }
    },
    performance: {
      'rolls-royce': {
        title: t('compare.performance.rolls-royce.title') || 'Effortless Power',
        points: getTranslatedArray('compare.performance.rolls-royce.points', [
          'V12 engines delivering seamless power',
          'Focus on refinement over outright speed',
          'Magic Carpet Ride suspension system',
          'Near-silent operation at any speed'
        ]),
        summary: t('compare.performance.rolls-royce.summary') || 'Rolls-Royce prioritizes smooth, effortless power delivery over sporting performance, creating a serene driving experience.'
      },
      'bentley': {
        title: t('compare.performance.bentley.title') || 'Exhilarating Performance',
        points: getTranslatedArray('compare.performance.bentley.points', [
          'W12 and V8 engines with massive power',
          '0-60 mph in under 4 seconds (Continental GT)',
          'Active all-wheel drive systems',
          'Track-capable luxury vehicles'
        ]),
        summary: t('compare.performance.bentley.summary') || 'Bentley delivers supercar performance wrapped in luxury, appealing to enthusiasts who refuse to compromise.'
      }
    },
    technology: {
      'rolls-royce': {
        title: t('compare.technology.rolls-royce.title') || 'Invisible Technology',
        points: getTranslatedArray('compare.technology.rolls-royce.points', [
          'Technology hidden behind traditional interfaces',
          'Satellite Aided Transmission',
          'Night vision with pedestrian detection',
          'Bespoke audio system tuned to each car'
        ]),
        summary: t('compare.technology.rolls-royce.summary') || 'Rolls-Royce integrates cutting-edge technology seamlessly, maintaining a classic, uncluttered aesthetic.'
      },
      'bentley': {
        title: t('compare.technology.bentley.title') || 'Modern Innovation',
        points: getTranslatedArray('compare.technology.bentley.points', [
          'Rotating display with touchscreen',
          'Advanced driver assistance systems',
          'Bang & Olufsen audio systems',
          'Fully digital instrument cluster'
        ]),
        summary: t('compare.technology.bentley.summary') || 'Bentley embraces modern technology more openly, offering a blend of traditional luxury and contemporary innovation.'
      }
    },
    heritage: {
      'rolls-royce': {
        title: t('compare.heritage.rolls-royce.title') || '120 Years of Excellence',
        points: getTranslatedArray('compare.heritage.rolls-royce.points', [
          'Founded in 1904 by Henry Royce and Charles Rolls',
          'Spirit of Ecstasy - the most famous automotive mascot',
          'Supplier to royalty worldwide',
          'The best car in the world philosophy'
        ]),
        summary: t('compare.heritage.rolls-royce.summary') || 'Rolls-Royce has maintained its position as the ultimate luxury car manufacturer for over a century.'
      },
      'bentley': {
        title: t('compare.heritage.bentley.title') || 'Racing Pedigree',
        points: getTranslatedArray('compare.heritage.bentley.points', [
          'Founded in 1919 by W.O. Bentley',
          'Five Le Mans victories in the 1920s',
          'Modern racing success at Le Mans',
          'Bentley Boys racing heritage'
        ]),
        summary: t('compare.heritage.bentley.summary') || 'Bentley\'s racing heritage infuses every model with a sporting spirit that sets it apart from pure luxury brands.'
      }
    },
    price: {
      'rolls-royce': {
        title: t('compare.price.rolls-royce.title') || 'Ultimate Investment',
        points: getTranslatedArray('compare.price.rolls-royce.points', [
          'Starting prices from AED 2,000,000+',
          'Bespoke options can double the base price',
          'Strong value retention',
          'Exclusive ownership experience'
        ]),
        summary: t('compare.price.rolls-royce.summary') || 'Rolls-Royce commands premium prices that reflect its position as the ultimate luxury automobile.'
      },
      'bentley': {
        title: t('compare.price.bentley.title') || 'Accessible Ultra-Luxury',
        points: getTranslatedArray('compare.price.bentley.points', [
          'Starting prices from AED 1,200,000+',
          'More accessible entry point to ultra-luxury',
          'Good value retention',
          'Wider model range and price points'
        ]),
        summary: t('compare.price.bentley.summary') || 'Bentley offers a more accessible entry into the ultra-luxury segment while maintaining exclusivity.'
      }
    }
  }

  const modelComparisons = [
    {
      rollsRoyce: {
        model: t('compare.models.phantom.rollsRoyce.model'),
        image: '/images/Rolls-royce-phantom.jpg',
        price: t('compare.models.phantom.rollsRoyce.price'),
        type: t('compare.models.phantom.rollsRoyce.type')
      },
      bentley: {
        model: t('compare.models.phantom.bentley.model'),
        image: '/images/bentley-mulsanne.jpg',
        price: t('compare.models.phantom.bentley.price'),
        type: t('compare.models.phantom.bentley.type')
      }
    },
    {
      rollsRoyce: {
        model: t('compare.models.ghost.rollsRoyce.model'),
        image: '/images/Black_Rolls_Royce_Ghost.jpg',
        price: t('compare.models.ghost.rollsRoyce.price'),
        type: t('compare.models.ghost.rollsRoyce.type')
      },
      bentley: {
        model: t('compare.models.ghost.bentley.model'),
        image: '/images/bentley-flying-spur.jpg',
        price: t('compare.models.ghost.bentley.price'),
        type: t('compare.models.ghost.bentley.type')
      }
    },
    {
      rollsRoyce: {
        model: t('compare.models.cullinan.rollsRoyce.model'),
        image: '/images/Rolls-Royce-Cullinan_.jpg',
        price: t('compare.models.cullinan.rollsRoyce.price'),
        type: t('compare.models.cullinan.rollsRoyce.type')
      },
      bentley: {
        model: t('compare.models.cullinan.bentley.model'),
        image: '/images/bentley-bentayga.jpg',
        price: t('compare.models.cullinan.bentley.price'),
        type: t('compare.models.cullinan.bentley.type')
      }
    }
  ]

  const rentalComparison = {
    rollsRoyce: {
      daily: t('compare.rental.rollsRoyce.daily') || 'AED 3,500+',
      weekly: t('compare.rental.rollsRoyce.weekly') || 'AED 21,000+',
      monthly: t('compare.rental.rollsRoyce.monthly') || 'AED 75,000+',
      benefits: getTranslatedArray('compare.rental.rollsRoyce.benefits', [
        'Professional chauffeur included',
        'Complimentary fuel',
        'Comprehensive insurance',
        'Bespoke concierge service'
      ])
    },
    bentley: {
      daily: t('compare.rental.bentley.daily') || 'AED 2,800+',
      weekly: t('compare.rental.bentley.weekly') || 'AED 16,000+',
      monthly: t('compare.rental.bentley.monthly') || 'AED 55,000+',
      benefits: getTranslatedArray('compare.rental.bentley.benefits', [
        'Sport and luxury options',
        'Self-drive available',
        'Track day experiences',
        'Performance driving courses'
      ])
    }
  }

  return (
    <>
      <SEO pageKey="compare.rolls-royce-vs-bentley" />
      <GEOOptimizer
        pageKey="compare.rolls-royce-vs-bentley"
        title="Rolls-Royce vs Bentley Rental Dubai 2026"
        description="Compare Rolls-Royce vs Bentley rental in Dubai. Price, luxury, comfort comparison to help you choose."
        entityType="ComparisonArticle"
        primaryTopic="Rolls-Royce vs Bentley Rental Dubai"
        contentSummary="Detailed comparison of Rolls-Royce vs Bentley rental in Dubai. Rolls-Royce Phantom from AED 5,800/day vs Bentley Flying Spur from AED 4,500/day. Compare luxury features, comfort, chauffeur quality, and overall experience."
        facts={['Rolls-Royce Phantom from AED 5,800/day', 'Bentley Flying Spur from AED 4,500/day', 'Rolls-Royce rated #1 for luxury', 'Both available with chauffeur in Dubai']}
        faqs={[
          { question: 'Is Rolls-Royce or Bentley better to rent in Dubai?', answer: 'Rolls-Royce offers superior luxury, comfort, and prestige. Bentley provides a sportier driving experience. For weddings and VIP events, Rolls-Royce Phantom is the clear choice. For spirited driving, consider Bentley Continental GT.' },
          { question: 'Which is more expensive to rent, Rolls-Royce or Bentley?', answer: 'Rolls-Royce is typically 20-30% more expensive than Bentley. Phantom starts at AED 5,800/day while Bentley Flying Spur starts at AED 4,500/day. Both include professional chauffeur.' }
        ]}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="grid grid-cols-2 h-full">
              <div className="relative">
                <Image
                  src="/images/Rolls-royce-official.jpg"
                  alt="Rolls-Royce"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rolls-black/80 to-transparent"></div>
              </div>
              <div className="relative">
                <Image
                  src="/images/Black_Rolls_Royce_Ghost.jpg"
                  alt={t('compare.hero.bentleyAlt')}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-rolls-black/80 to-transparent"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('compare.hero.title.rollsRoyce')} <span className="text-rolls-gold">{t('compare.hero.title.vs')}</span> {t('compare.hero.title.bentley')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('compare.hero.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">{t('compare.quickSummary.rollsRoyce.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('compare.summary.rollsRoyce.tagline')}
                </p>
                <div className="space-y-2">
                  <p className="text-rolls-gold">✓ {t('compare.quickSummary.rollsRoyce.point1')}</p>
                  <p className="text-rolls-gold">✓ {t('compare.quickSummary.rollsRoyce.point2')}</p>
                  <p className="text-rolls-gold">✓ {t('compare.quickSummary.rollsRoyce.point3')}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-lg p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">{t('compare.quickSummary.bentley.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('compare.summary.bentley.tagline')}
                </p>
                <div className="space-y-2">
                  <p className="text-emerald-400">✓ {t('compare.quickSummary.bentley.point1')}</p>
                  <p className="text-emerald-400">✓ {t('compare.quickSummary.bentley.point2')}</p>
                  <p className="text-emerald-400">✓ {t('compare.quickSummary.bentley.point3')}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Aspect Selector */}
        <section className="py-8 bg-gradient-to-b from-rolls-navy to-rolls-black sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
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
                  {`${aspects.find(a => a.id === selectedAspect)?.name} ${t('compare.detailed.comparison')}`}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Rolls-Royce */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{t('compare.detailed.rollsRoyce')}</h3>
                      <div className="w-16 h-16 bg-rolls-gold/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👑</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-rolls-gold mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-gray-400 italic">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['rolls-royce'].summary}
                    </p>
                  </div>

                  {/* Bentley */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{t('compare.detailed.bentley')}</h3>
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🦅</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-emerald-400 mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['bentley'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['bentley'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-gray-400 italic">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['bentley'].summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Model Comparisons */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.modelComparison.title')}
            </h2>
            
            <div className="space-y-12 max-w-6xl mx-auto">
              {modelComparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Rolls-Royce Model */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={comparison.rollsRoyce.image}
                        alt={comparison.rollsRoyce.model}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {comparison.rollsRoyce.model}
                      </h3>
                      <p className="text-rolls-gold mb-2">{comparison.rollsRoyce.type}</p>
                      <p className="text-2xl font-bold text-white">{comparison.rollsRoyce.price}</p>
                    </div>
                  </div>

                  {/* Bentley Model */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-emerald-500/20 rounded-lg overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={comparison.rollsRoyce.image} 
                        alt={comparison.bentley.model}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {comparison.bentley.model}
                      </h3>
                      <p className="text-emerald-400 mb-2">{comparison.bentley.type}</p>
                      <p className="text-2xl font-bold text-white">{comparison.bentley.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Comparison */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.rental.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Rolls-Royce Rental */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('compare.rental.rollsRoyce.title')}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('compare.rental.dailyRate')}</span>
                    <span className="text-xl font-bold text-rolls-gold">{rentalComparison.rollsRoyce.daily}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('compare.rental.weeklyRate')}</span>
                    <span className="text-xl font-bold text-rolls-gold">{rentalComparison.rollsRoyce.weekly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('compare.rental.monthlyRate')}</span>
                    <span className="text-xl font-bold text-rolls-gold">{rentalComparison.rollsRoyce.monthly}</span>
                  </div>
                </div>
                
                <h4 className="text-white font-semibold mb-3">{t('compare.rental.whyChooseRollsRoyce')}</h4>
                <ul className="space-y-2 mb-6">
                  {rentalComparison.rollsRoyce.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-rolls-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Link href="/booking" className="btn-primary w-full text-center">
                  {t('compare.rental.bookRollsRoyce')}
                </Link>
              </motion.div>

              {/* Bentley Rental */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('compare.rental.bentley.title')}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('compare.rental.dailyRate')}</span>
                    <span className="text-xl font-bold text-emerald-400">{rentalComparison.bentley.daily}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('compare.rental.weeklyRate')}</span>
                    <span className="text-xl font-bold text-emerald-400">{rentalComparison.bentley.weekly}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('compare.rental.monthlyRate')}</span>
                    <span className="text-xl font-bold text-emerald-400">{rentalComparison.bentley.monthly}</span>
                  </div>
                </div>
                
                <h4 className="text-white font-semibold mb-3">{t('compare.rental.whyChooseBentley')}</h4>
                <ul className="space-y-2 mb-6">
                  {rentalComparison.bentley.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full transition-all w-full">
                  {t('compare.rental.inquireBentley')}
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Which Should You Choose? */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.choice.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">{t('compare.choice.rollsRoyce.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.rollsRoyce.point1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.rollsRoyce.point2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.rollsRoyce.point3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.rollsRoyce.point4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-rolls-gold mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.rollsRoyce.point5')}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">{t('compare.choice.bentley.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.bentley.point1')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.bentley.point2')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.bentley.point3')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.bentley.point4')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-3">•</span>
                    <span className="text-gray-300">{t('compare.choice.bentley.point5')}</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Verdict */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('compare.verdict.title')}
              </h2>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-12">
                <p className="text-xl text-gray-300 mb-6">
                  {t('compare.verdict.p1')}
                </p>
                <p className="text-2xl text-rolls-gold font-semibold mb-8">
                  {t('compare.verdict.p2')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/fleet" className="btn-primary">
                    {t('compare.verdict.exploreFleet')}
                  </Link>
                  <Link href="/booking" className="btn-secondary">
                    {t('compare.verdict.bookExperience')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Comparisons */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.related.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">{t('compare.related.mercedes.title')}</h3>
                <p className="text-gray-400 mb-4">{t('compare.related.mercedes.subtitle')}</p>
                <Link href="/compare/rolls-royce-vs-mercedes" className="text-rolls-gold hover:text-white transition-colors">
                  {t('compare.related.comingSoon')} →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">Rolls-Royce vs Ferrari</h3>
                <p className="text-gray-400 mb-4">Luxury comfort vs supercar performance</p>
                <Link href="/compare/rolls-royce-vs-ferrari" className="text-rolls-gold hover:text-white transition-colors">
                  Coming Soon →
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-2">Phantom vs Maybach</h3>
                <p className="text-gray-400 mb-4">The ultimate flagship comparison</p>
                <Link href="/compare/phantom-vs-maybach" className="text-rolls-gold hover:text-white transition-colors">
                  Coming Soon →
                </Link>
              </motion.div>
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