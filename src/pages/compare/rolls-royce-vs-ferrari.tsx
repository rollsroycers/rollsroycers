import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { m as motion } from 'framer-motion'
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
        title: t('compare.ferrari.rental.rolls-royce.title'),
        points: getTranslatedArray('compare.ferrari.rental.rolls-royce.points', []),
        summary: t('compare.ferrari.rental.rolls-royce.summary')
      },
      'ferrari': {
        title: t('compare.ferrari.rental.ferrari.title'),
        points: getTranslatedArray('compare.ferrari.rental.ferrari.points', []),
        summary: t('compare.ferrari.rental.ferrari.summary')
      }
    },
    comfort: {
      'rolls-royce': {
        title: t('compare.ferrari.comfort.rolls-royce.title'),
        points: getTranslatedArray('compare.ferrari.comfort.rolls-royce.points', []),
        summary: t('compare.ferrari.comfort.rolls-royce.summary')
      },
      'ferrari': {
        title: t('compare.ferrari.comfort.ferrari.title'),
        points: getTranslatedArray('compare.ferrari.comfort.ferrari.points', []),
        summary: t('compare.ferrari.comfort.ferrari.summary')
      }
    },
    occasion: {
      'rolls-royce': {
        title: t('compare.ferrari.occasion.rolls-royce.title'),
        points: getTranslatedArray('compare.ferrari.occasion.rolls-royce.points', []),
        summary: t('compare.ferrari.occasion.rolls-royce.summary')
      },
      'ferrari': {
        title: t('compare.ferrari.occasion.ferrari.title'),
        points: getTranslatedArray('compare.ferrari.occasion.ferrari.points', []),
        summary: t('compare.ferrari.occasion.ferrari.summary')
      }
    },
    service: {
      'rolls-royce': {
        title: t('compare.ferrari.service.rolls-royce.title'),
        points: getTranslatedArray('compare.ferrari.service.rolls-royce.points', []),
        summary: t('compare.ferrari.service.rolls-royce.summary')
      },
      'ferrari': {
        title: t('compare.ferrari.service.ferrari.title'),
        points: getTranslatedArray('compare.ferrari.service.ferrari.points', []),
        summary: t('compare.ferrari.service.ferrari.summary')
      }
    },
    value: {
      'rolls-royce': {
        title: t('compare.ferrari.value.rolls-royce.title'),
        points: getTranslatedArray('compare.ferrari.value.rolls-royce.points', []),
        summary: t('compare.ferrari.value.rolls-royce.summary')
      },
      'ferrari': {
        title: t('compare.ferrari.value.ferrari.title'),
        points: getTranslatedArray('compare.ferrari.value.ferrari.points', []),
        summary: t('compare.ferrari.value.ferrari.summary')
      }
    },
    experience: {
      'rolls-royce': {
        title: t('compare.ferrari.experience.rolls-royce.title'),
        points: getTranslatedArray('compare.ferrari.experience.rolls-royce.points', []),
        summary: t('compare.ferrari.experience.rolls-royce.summary')
      },
      'ferrari': {
        title: t('compare.ferrari.experience.ferrari.title'),
        points: getTranslatedArray('compare.ferrari.experience.ferrari.points', []),
        summary: t('compare.ferrari.experience.ferrari.summary')
      }
    }
  }

  const rentalPackages = {
    rollsRoyce: {
      daily: {
        price: 'AED 3,500',
        includes: getTranslatedArray('compare.ferrari.packages.rollsRoyce.daily.includes', []),
        totalValue: 'AED 5,500+'
      },
      weekly: {
        price: 'AED 21,000',
        includes: getTranslatedArray('compare.ferrari.packages.rollsRoyce.weekly.includes', []),
        totalValue: 'AED 35,000+'
      },
      monthly: {
        price: 'AED 75,000',
        includes: getTranslatedArray('compare.ferrari.packages.rollsRoyce.monthly.includes', []),
        totalValue: 'AED 120,000+'
      }
    },
    ferrari: {
      daily: {
        price: 'AED 4,000',
        excludes: getTranslatedArray('compare.ferrari.packages.ferrari.daily.excludes', []),
        realCost: 'AED 6,500+'
      },
      weekly: {
        price: 'AED 25,000',
        excludes: getTranslatedArray('compare.ferrari.packages.ferrari.weekly.excludes', []),
        realCost: 'AED 40,000+'
      },
      monthly: {
        price: 'AED 90,000',
        excludes: getTranslatedArray('compare.ferrari.packages.ferrari.monthly.excludes', []),
        realCost: 'AED 150,000+'
      }
    }
  }

  const getTestimonials = (): { name: string; position: string; text: string; rating: number }[] => {
    const list = t('compare.ferrari.testimonials.list', { returnObjects: true })
    if (Array.isArray(list)) {
      return list.map((item: any) => ({
        name: typeof item?.name === 'string' ? item.name : '',
        position: typeof item?.position === 'string' ? item.position : '',
        text: typeof item?.text === 'string' ? item.text : '',
        rating: 5,
      }))
    }
    return []
  }

  const testimonials = getTestimonials()

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
                  <p className="text-sm text-gray-300">{t('compare.ferrari.hero.stats.satisfaction')}</p>
                </div>
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">50%</p>
                  <p className="text-sm text-gray-300">{t('compare.ferrari.hero.stats.moreValue')}</p>
                </div>
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">24/7</p>
                  <p className="text-sm text-gray-300">{t('compare.ferrari.hero.stats.fullService')}</p>
                </div>
                <div className="bg-rolls-gold/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-3xl font-bold text-rolls-gold">100%</p>
                  <p className="text-sm text-gray-300">{t('compare.ferrari.hero.stats.allInclusive')}</p>
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
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">{t('compare.ferrari.winner.value.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('compare.ferrari.winner.value.description')}
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  {getTranslatedArray('compare.ferrari.winner.value.points', []).map((point, i) => (
                    <li key={i}>✓ {point}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-rolls-gold/30 to-rolls-gold/10 border border-rolls-gold/40 rounded-lg p-8"
              >
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">{t('compare.ferrari.winner.experience.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('compare.ferrari.winner.experience.description')}
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  {getTranslatedArray('compare.ferrari.winner.experience.points', []).map((point, i) => (
                    <li key={i}>✓ {point}</li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-rolls-gold/30 to-rolls-gold/10 border border-rolls-gold/40 rounded-lg p-8"
              >
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-rolls-gold mb-4">{t('compare.ferrari.winner.service.title')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('compare.ferrari.winner.service.description')}
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  {getTranslatedArray('compare.ferrari.winner.service.points', []).map((point, i) => (
                    <li key={i}>✓ {point}</li>
                  ))}
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
                        {t('compare.ferrari.detailed.recommended')}
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
                        {t('compare.ferrari.detailed.limited')}
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
                        <p className="text-sm text-gray-400">{t(`compare.ferrari.packages.rateLabel.${period}`)}</p>
                      </div>
                      <span className="bg-rolls-gold text-rolls-black px-3 py-1 rounded-full text-xs font-bold">
                        {t('compare.ferrari.packages.bestValue')}
                      </span>
                    </div>

                    <p className="text-sm text-green-400 font-semibold mb-3">✓ {t('compare.ferrari.packages.allInclusive')}</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {rentalPackages.rollsRoyce[period as keyof typeof rentalPackages.rollsRoyce].includes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-rolls-gold/20">
                      <p className="text-xs text-gray-400">{t('compare.ferrari.packages.totalValueLabel')}</p>
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
                        <p className="text-sm text-gray-400">{t(`compare.ferrari.packages.rateLabel.${period}`)}</p>
                      </div>
                      <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs">
                        {t('compare.ferrari.packages.extras')}
                      </span>
                    </div>

                    <p className="text-sm text-red-400 font-semibold mb-3">✗ {t('compare.ferrari.packages.additionalCosts')}</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {rentalPackages.ferrari[period as keyof typeof rentalPackages.ferrari].excludes.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-red-600/20">
                      <p className="text-xs text-gray-400">{t('compare.ferrari.packages.realCostLabel')}</p>
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
                    <h3 className="text-2xl font-bold text-rolls-gold mb-4">{t('compare.ferrari.finalCta.rollsRoyce.label')}</h3>
                    <ul className="text-gray-300 space-y-2 text-left">
                      {getTranslatedArray('compare.ferrari.finalCta.rollsRoyce.points', []).map((point, i) => (
                        <li key={i}>✓ {point}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-500 mb-4">{t('compare.ferrari.finalCta.ferrari.label')}</h3>
                    <ul className="text-gray-400 space-y-2 text-left">
                      {getTranslatedArray('compare.ferrari.finalCta.ferrari.points', []).map((point, i) => (
                        <li key={i}>✗ {point}</li>
                      ))}
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
                <a href="https://wa.me/971558164922" target="_blank" rel="noopener noreferrer" className="bg-rolls-black text-white px-6 py-3 rounded-full font-semibold hover:bg-rolls-navy transition-colors">
                  📞 +971 55 816 4922
                </a>
                <a href="https://wa.me/971558164922" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                  💬 {t('compare.ferrari.contact.whatsapp')}
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
      ...(await serverSideTranslations(locale || 'en', ['common', 'comparemain', 'navigation', 'seo_compare'])),
    },
  }
}