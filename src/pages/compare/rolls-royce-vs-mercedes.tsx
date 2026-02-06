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

export default function RollsRoyceVsMercedesPage() {
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
    { id: 'overview', name: t('compare.mercedes.aspects.overview.name', 'Overview'), icon: '📊' },
    { id: 'luxury', name: t('compare.mercedes.aspects.luxury.name', 'Luxury & Comfort'), icon: '💎' },
    { id: 'performance', name: t('compare.mercedes.aspects.performance.name', 'Performance'), icon: '🏎️' },
    { id: 'technology', name: t('compare.mercedes.aspects.technology.name', 'Technology'), icon: '📱' },
    { id: 'heritage', name: t('compare.mercedes.aspects.heritage.name', 'Heritage'), icon: '🏛️' },
    { id: 'rental', name: t('compare.mercedes.aspects.rental.name', 'Rental Experience'), icon: '🚗' }
  ]

  const comparisonData = {
    overview: {
      'rolls-royce': {
        title: t('compare.mercedes.overview.rolls-royce.title', 'The Epitome of Bespoke Luxury'),
        points: getTranslatedArray('compare.mercedes.overview.rolls-royce.points', [
          'Handcrafted excellence with unlimited customization',
          'The most prestigious automotive brand in the world',
          'Unmatched ride quality with Magic Carpet Ride',
          'Symbol of ultimate success and achievement'
        ]),
        summary: t('compare.mercedes.overview.rolls-royce.summary', 'Rolls-Royce stands alone at the pinnacle of automotive luxury.')
      },
      'mercedes': {
        title: t('compare.mercedes.overview.mercedes.title', 'Pioneering Luxury Innovation'),
        points: getTranslatedArray('compare.mercedes.overview.mercedes.points', [
          'Advanced technology integrated with refined luxury',
          'Broader model range from executive to ultra-luxury',
          'Industry-leading safety and innovation features',
          'Perfect balance of performance and comfort'
        ]),
        summary: t('compare.mercedes.overview.mercedes.summary', 'Mercedes-Benz combines German engineering with modern luxury.')
      }
    },
    luxury: {
      'rolls-royce': {
        title: t('compare.mercedes.luxury.rolls-royce.title', 'Artisanal Craftsmanship'),
        points: getTranslatedArray('compare.mercedes.luxury.rolls-royce.points', [
          'Hand-stitched leather from exclusive European tanneries',
          'Starlight headliner with up to 1,600 fiber optic lights',
          'Bespoke wood veneers matched from single trees',
          'Gallery feature transforming dashboard into art space'
        ]),
        summary: t('compare.mercedes.luxury.rolls-royce.summary', 'Every Rolls-Royce interior is a bespoke masterpiece.')
      },
      'mercedes': {
        title: t('compare.mercedes.luxury.mercedes.title', 'Modern Sophisticated Luxury'),
        points: getTranslatedArray('compare.mercedes.luxury.mercedes.points', [
          'MBUX interior assistant with gesture control',
          'Energizing comfort with massage and aromatherapy',
          'Burmester 4D surround sound systems',
          'Executive rear seat package with reclining seats'
        ]),
        summary: t('compare.mercedes.luxury.mercedes.summary', 'Mercedes-Benz delivers cutting-edge luxury with advanced technology.')
      }
    },
    performance: {
      'rolls-royce': {
        title: t('compare.mercedes.performance.rolls-royce.title', 'Effortless Waftability'),
        points: getTranslatedArray('compare.mercedes.performance.rolls-royce.points', [
          'Twin-turbo V12 engines with seamless power delivery',
          'Focus on silence and smoothness over speed',
          'Satellite Aided Transmission for predictive gear changes',
          'Air suspension with road-scanning technology'
        ]),
        summary: t('compare.mercedes.performance.rolls-royce.summary', 'Rolls-Royce prioritizes serene, effortless progress.')
      },
      'mercedes': {
        title: t('compare.mercedes.performance.mercedes.title', 'Dynamic Performance Excellence'),
        points: getTranslatedArray('compare.mercedes.performance.mercedes.points', [
          'AMG variants with exceptional performance capabilities',
          'EQ Boost mild hybrid technology for efficiency',
          '4MATIC all-wheel drive for superior traction',
          'Multiple driving modes from comfort to sport+'
        ]),
        summary: t('compare.mercedes.performance.mercedes.summary', 'Mercedes-Benz offers versatile performance options.')
      }
    },
    technology: {
      'rolls-royce': {
        title: t('compare.mercedes.technology.rolls-royce.title', 'Discreet Innovation'),
        points: getTranslatedArray('compare.mercedes.technology.rolls-royce.points', [
          'Technology seamlessly integrated behind classic design',
          'Bespoke audio system individually tuned to each car',
          'Night vision with wildlife and pedestrian warning',
          'Spirit of Ecstasy retracts automatically for security'
        ]),
        summary: t('compare.mercedes.technology.rolls-royce.summary', 'Rolls-Royce integrates technology invisibly.')
      },
      'mercedes': {
        title: t('compare.mercedes.technology.mercedes.title', 'Technological Leadership'),
        points: getTranslatedArray('compare.mercedes.technology.mercedes.points', [
          'MBUX Hyperscreen with AI-powered personalization',
          'Level 3 autonomous driving capabilities',
          'Augmented reality navigation display',
          'Over-the-air updates for continuous improvement'
        ]),
        summary: t('compare.mercedes.technology.mercedes.summary', 'Mercedes-Benz leads automotive technology innovation.')
      }
    },
    heritage: {
      'rolls-royce': {
        title: t('compare.mercedes.heritage.rolls-royce.title', '120 Years of Perfection'),
        points: getTranslatedArray('compare.mercedes.heritage.rolls-royce.points', [
          'Founded in 1904 with commitment to excellence',
          'Provider to royalty and world leaders',
          'Spirit of Ecstasy - most iconic automotive symbol',
          'Each car still hand-built in Goodwood, England'
        ]),
        summary: t('compare.mercedes.heritage.rolls-royce.summary', 'Rolls-Royce represents an unbroken tradition of excellence.')
      },
      'mercedes': {
        title: t('compare.mercedes.heritage.mercedes.title', 'Inventor of the Automobile'),
        points: getTranslatedArray('compare.mercedes.heritage.mercedes.points', [
          'Karl Benz created the first automobile in 1886',
          'Pioneered countless automotive innovations',
          'Three-pointed star symbolizes universal motorization',
          'Consistent Formula 1 dominance showcasing excellence'
        ]),
        summary: t('compare.mercedes.heritage.mercedes.summary', 'Mercedes-Benz invented the automobile and continues to shape its future.')
      }
    },
    rental: {
      'rolls-royce': {
        title: t('compare.mercedes.rental.rolls-royce.title', 'Ultimate Rental Experience'),
        points: getTranslatedArray('compare.mercedes.rental.rolls-royce.points', [
          'Professional chauffeur included with every rental',
          'Daily rates from AED 3,500 with all-inclusive service',
          'Complimentary fuel, insurance, and 24/7 concierge',
          'Perfect for weddings, corporate events, and VIP occasions'
        ]),
        summary: t('compare.mercedes.rental.rolls-royce.summary', 'Rolls-Royce rental offers an unmatched luxury experience with complete white-glove service.')
      },
      'mercedes': {
        title: t('compare.mercedes.rental.mercedes.title', 'Standard Luxury Rental'),
        points: getTranslatedArray('compare.mercedes.rental.mercedes.points', [
          'Self-drive options from AED 1,200 per day',
          'Basic insurance coverage included',
          'Limited chauffeur availability',
          'Suitable for business meetings and airport transfers'
        ]),
        summary: t('compare.mercedes.rental.mercedes.summary', 'Mercedes rental provides good value but lacks the exclusive services of Rolls-Royce.')
      }
    }
  }

  const modelComparisons = [
    {
      rollsRoyce: {
        model: t('compare.mercedes.models.flagship.rollsRoyce.model', 'Rolls-Royce Phantom'),
        image: '/images/Rolls-royce-phantom.jpg',
        price: t('compare.mercedes.models.flagship.rollsRoyce.price', 'AED 5,800/day'),
        type: t('compare.mercedes.models.flagship.rollsRoyce.type', 'Ultimate Flagship Experience')
      },
      mercedes: {
        model: t('compare.mercedes.models.flagship.mercedes.model', 'Mercedes-Maybach S680'),
        image: '/images/mercedes_benz.avif',
        price: t('compare.mercedes.models.flagship.mercedes.price', 'AED 2,500/day'),
        type: t('compare.mercedes.models.flagship.mercedes.type', 'Executive Luxury')
      }
    },
    {
      rollsRoyce: {
        model: t('compare.mercedes.models.executive.rollsRoyce.model', 'Rolls-Royce Ghost'),
        image: '/images/Black_Rolls_Royce_Ghost.jpg',
        price: t('compare.mercedes.models.executive.rollsRoyce.price', 'AED 3,800/day'),
        type: t('compare.mercedes.models.executive.rollsRoyce.type', 'Business Excellence')
      },
      mercedes: {
        model: t('compare.mercedes.models.executive.mercedes.model', 'Mercedes S-Class'),
        image: '/images/mercedes_benz.avif',
        price: t('compare.mercedes.models.executive.mercedes.price', 'AED 1,200/day'),
        type: t('compare.mercedes.models.executive.mercedes.type', 'Corporate Standard')
      }
    },
    {
      rollsRoyce: {
        model: t('compare.mercedes.models.suv.rollsRoyce.model', 'Rolls-Royce Cullinan'),
        image: '/images/Rolls-Royce-Cullinan_.jpg',
        price: t('compare.mercedes.models.suv.rollsRoyce.price', 'AED 4,500/day'),
        type: t('compare.mercedes.models.suv.rollsRoyce.type', 'Luxury Adventure')
      },
      mercedes: {
        model: t('compare.mercedes.models.suv.mercedes.model', 'Mercedes-Maybach GLS'),
        image: '/images/mercedes_benz.avif',
        price: t('compare.mercedes.models.suv.mercedes.price', 'AED 1,800/day'),
        type: t('compare.mercedes.models.suv.mercedes.type', 'Family Luxury')
      }
    }
  ]

  return (
    <>
      <SEO pageKey="compare.rolls-royce-vs-mercedes" />
      <GEOOptimizer
        pageKey="compare.rolls-royce-vs-mercedes"
        title="Rolls-Royce vs Mercedes Rental Dubai 2026"
        description="Compare Rolls-Royce vs Mercedes-Maybach rental in Dubai. Phantom vs S-Class pricing and features."
        entityType="ComparisonArticle"
        primaryTopic="Rolls-Royce vs Mercedes Rental Dubai"
        contentSummary="Rolls-Royce Phantom vs Mercedes-Maybach S-Class rental comparison in Dubai. Phantom from AED 5,800/day vs Maybach from AED 3,200/day. Rolls-Royce offers handcrafted bespoke luxury, Mercedes offers tech-forward comfort."
        facts={['Rolls-Royce Phantom from AED 5,800/day', 'Mercedes-Maybach S-Class from AED 3,200/day', 'Rolls-Royce = bespoke handcrafted luxury', 'Mercedes = technology-forward comfort']}
      />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="grid grid-cols-2 h-full">
              <div className="relative">
                <Image
                  src="/images/Rolls-Royce_Phantom_Extended_Series_II.jpg"
                  alt="Rolls-Royce"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rolls-black/90 to-transparent"></div>
              </div>
              <div className="relative">
                <Image
                  src="/images/mercedes_benz.avif"
                  alt="Mercedes-Benz"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-rolls-black/90 to-transparent"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rolls-black/60 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {t('compare.mercedes.hero.title.rollsRoyce', 'Rent Rolls-Royce')}
                <span className="text-rolls-gold mx-4">{t('compare.mercedes.hero.title.vs', 'or')}</span>
                {t('compare.mercedes.hero.title.mercedes', 'Mercedes-Benz in Dubai')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                {t('compare.mercedes.hero.subtitle', 'Why Rolls-Royce Rental Delivers an Unmatched Luxury Experience')}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fleet" className="btn-primary">
                  {t('compare.mercedes.hero.exploreFleet', 'Explore Our Fleet')}
                </Link>
                <Link href="/booking" className="btn-secondary">
                  {t('compare.mercedes.hero.bookNow', 'Book Your Experience')}
                </Link>
              </div>
            </motion.div>
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
                  {`${aspects.find(a => a.id === selectedAspect)?.name} ${t('compare.mercedes.detailed.comparison', 'Comparison')}`}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Rolls-Royce */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{t('compare.mercedes.detailed.rollsRoyce', 'Rolls-Royce')}</h3>
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

                  {/* Mercedes */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-silver/20 rounded-lg p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{t('compare.mercedes.detailed.mercedes', 'Mercedes-Benz')}</h3>
                      <div className="w-16 h-16 bg-silver/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">⭐</span>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-silver mb-4">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['mercedes'].title}
                    </h4>
                    
                    <ul className="space-y-3 mb-6">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['mercedes'].points.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-silver mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-gray-400 italic">
                      {comparisonData[selectedAspect as keyof typeof comparisonData]['mercedes'].summary}
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
              {t('compare.mercedes.modelComparison.title', 'Model by Model Comparison')}
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
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden group">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={comparison.rollsRoyce.image}
                        alt={comparison.rollsRoyce.model}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {comparison.rollsRoyce.model}
                      </h3>
                      <p className="text-rolls-gold mb-2">{comparison.rollsRoyce.type}</p>
                      <p className="text-2xl font-bold text-white">{comparison.rollsRoyce.price}</p>
                    </div>
                  </div>

                  {/* Mercedes Model */}
                  <div className="bg-rolls-black/50 backdrop-blur-sm border border-silver/20 rounded-lg overflow-hidden group">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={comparison.mercedes.image}
                        alt={comparison.mercedes.model}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {comparison.mercedes.model}
                      </h3>
                      <p className="text-silver mb-2">{comparison.mercedes.type}</p>
                      <p className="text-2xl font-bold text-white">{comparison.mercedes.price}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Rolls-Royce Rental Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              {t('compare.mercedes.whyRent.title', 'Why Rent Rolls-Royce Over Mercedes?')}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">👨‍✈️</div>
                <h3 className="text-xl font-bold text-rolls-gold mb-3">
                  {t('compare.mercedes.whyRent.chauffeur.title', 'Professional Chauffeur')}
                </h3>
                <p className="text-gray-300">
                  {t('compare.mercedes.whyRent.chauffeur.desc', 'Every Rolls-Royce rental includes a trained professional chauffeur. Mercedes rentals often charge extra.')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold text-rolls-gold mb-3">
                  {t('compare.mercedes.whyRent.experience.title', 'VIP Experience')}
                </h3>
                <p className="text-gray-300">
                  {t('compare.mercedes.whyRent.experience.desc', 'Red carpet service, airport meet & greet, and personalized attention that Mercedes rentals cannot match.')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
              >
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-rolls-gold mb-3">
                  {t('compare.mercedes.whyRent.prestige.title', 'Ultimate Prestige')}
                </h3>
                <p className="text-gray-300">
                  {t('compare.mercedes.whyRent.prestige.desc', 'Arrive in a Rolls-Royce and make an unforgettable impression. Mercedes is common, Rolls-Royce is extraordinary.')}
                </p>
              </motion.div>
            </div>

            {/* Rental Packages Comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {t('compare.mercedes.packages.rollsRoyce.title', 'Rolls-Royce All-Inclusive Package')}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-rolls-gold mr-3">✓</span>
                    {t('compare.mercedes.packages.rollsRoyce.p1', 'Professional uniformed chauffeur')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-rolls-gold mr-3">✓</span>
                    {t('compare.mercedes.packages.rollsRoyce.p2', 'Unlimited fuel included')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-rolls-gold mr-3">✓</span>
                    {t('compare.mercedes.packages.rollsRoyce.p3', 'Comprehensive insurance coverage')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-rolls-gold mr-3">✓</span>
                    {t('compare.mercedes.packages.rollsRoyce.p4', '24/7 concierge service')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-rolls-gold mr-3">✓</span>
                    {t('compare.mercedes.packages.rollsRoyce.p5', 'Complimentary refreshments')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-rolls-gold mr-3">✓</span>
                    {t('compare.mercedes.packages.rollsRoyce.p6', 'Red carpet service for events')}
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-3xl font-bold text-rolls-gold mb-2">
                    {t('compare.mercedes.packages.rollsRoyce.price', 'From AED 3,500/day')}
                  </p>
                  <Link href="/booking" className="btn-primary w-full">
                    {t('compare.mercedes.packages.rollsRoyce.cta', 'Book Rolls-Royce Now')}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-500/20 to-gray-500/10 border border-gray-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {t('compare.mercedes.packages.mercedes.title', 'Mercedes Basic Rental')}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-gray-400 mr-3">○</span>
                    {t('compare.mercedes.packages.mercedes.p1', 'Self-drive or chauffeur (extra cost)')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gray-400 mr-3">○</span>
                    {t('compare.mercedes.packages.mercedes.p2', 'Fuel costs extra')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gray-400 mr-3">○</span>
                    {t('compare.mercedes.packages.mercedes.p3', 'Basic insurance only')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gray-400 mr-3">○</span>
                    {t('compare.mercedes.packages.mercedes.p4', 'Limited support hours')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gray-400 mr-3">○</span>
                    {t('compare.mercedes.packages.mercedes.p5', 'No complimentary extras')}
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-gray-400 mr-3">○</span>
                    {t('compare.mercedes.packages.mercedes.p6', 'Standard service only')}
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-400 mb-2">
                    {t('compare.mercedes.packages.mercedes.price', 'From AED 1,200/day')}
                  </p>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-full transition-all w-full opacity-50 cursor-not-allowed">
                    {t('compare.mercedes.packages.mercedes.cta', 'Limited Service')}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                {t('compare.mercedes.finalCta.title', 'Experience True Luxury with Rolls-Royce Dubai')}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('compare.mercedes.finalCta.subtitle', 'Don\'t settle for ordinary. Choose Rolls-Royce for your special occasions, corporate events, and VIP experiences in Dubai.')}
              </p>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 mb-8">
                <p className="text-2xl text-rolls-gold font-semibold mb-4">
                  {t('compare.mercedes.finalCta.offer', 'Special Offer: Book 3+ Days and Get 10% Off')}
                </p>
                <p className="text-gray-300 mb-6">
                  {t('compare.mercedes.finalCta.callNow', 'Call Now for Instant Booking')}
                </p>
                <a href="tel:+971558164922" className="text-3xl font-bold text-white hover:text-rolls-gold transition-colors">
                  +971 55 816 4922
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fleet" className="btn-primary">
                  {t('compare.mercedes.finalCta.viewFleet', 'View Rolls-Royce Fleet')}
                </Link>
                <Link href="/booking" className="btn-secondary">
                  {t('compare.mercedes.finalCta.bookNow', 'Book Your Rolls-Royce')}
                </Link>
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