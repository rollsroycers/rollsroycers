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

interface ComparisonCard {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  href: string
  highlights: string[]
}

export default function ComparePage() {
  const { t } = useTranslation('common')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getHighlights = (comparisonId: string): string[] => {
    const highlights = t(`compare.comparisons.${comparisonId}.highlights`, { returnObjects: true })
    if (Array.isArray(highlights)) {
      return highlights.map((item: any) => {
        if (typeof item === 'string') return item
        if (item && typeof item === 'object' && 'text' in item) return item.text
        if (item && typeof item === 'object' && 'label' in item) return item.label
        return String(item)
      })
    }
    // Fallback highlights
    if (comparisonId === 'rolls-royce-vs-bentley') {
      return [
        'Heritage & craftsmanship comparison',
        'Performance philosophy differences',
        'Customization options analysis',
        'Investment value assessment'
      ]
    }
    if (comparisonId === 'rolls-royce-vs-ferrari') {
      return [
        'Comfort vs speed priorities',
        'Brand prestige comparison',
        'Driving experience analysis',
        'Ownership experience differences'
      ]
    }
    if (comparisonId === 'rolls-royce-vs-mercedes') {
      return [
        'Technology integration comparison',
        'Build quality assessment',
        'Luxury features analysis',
        'Service & maintenance comparison'
      ]
    }
    if (comparisonId === 'phantom-vs-maybach') {
      return [
        'Interior opulence comparison',
        'Ride quality assessment',
        'Exclusivity factor analysis',
        'Price-to-value ratio'
      ]
    }
    return []
  }

  const comparisons: ComparisonCard[] = [
    {
      id: 'rolls-royce-vs-bentley',
      title: t('compare.comparisons.rolls-royce-vs-bentley.title') || 'Rolls-Royce vs Bentley',
      subtitle: t('compare.comparisons.rolls-royce-vs-bentley.subtitle') || 'British Luxury Showdown',
      description: t('compare.comparisons.rolls-royce-vs-bentley.description') || 'Compare two titans of British luxury automotive engineering',
      image: '/images/bentley-bentayga.jpg',
      href: '/compare/rolls-royce-vs-bentley',
      highlights: getHighlights('rolls-royce-vs-bentley')
    },
    {
      id: 'rolls-royce-vs-ferrari',
      title: t('compare.comparisons.rolls-royce-vs-ferrari.title') || 'Rolls-Royce vs Ferrari',
      subtitle: t('compare.comparisons.rolls-royce-vs-ferrari.subtitle') || 'Luxury vs Performance',
      description: t('compare.comparisons.rolls-royce-vs-ferrari.description') || 'Discover the differences between ultimate luxury and ultimate performance',
      image: '/images/ferrari.jpg',
      href: '/compare/rolls-royce-vs-ferrari',
      highlights: getHighlights('rolls-royce-vs-ferrari')
    },
    {
      id: 'rolls-royce-vs-mercedes',
      title: t('compare.comparisons.rolls-royce-vs-mercedes.title') || 'Rolls-Royce vs Mercedes',
      subtitle: t('compare.comparisons.rolls-royce-vs-mercedes.subtitle') || 'Classic vs Modern Luxury',
      description: t('compare.comparisons.rolls-royce-vs-mercedes.description') || 'Compare traditional British luxury with German engineering excellence',
      image: '/images/Mercedes_Maybach_GLS.jpeg',
      href: '/compare/rolls-royce-vs-mercedes',
      highlights: getHighlights('rolls-royce-vs-mercedes')
    },
    {
      id: 'phantom-vs-maybach',
      title: t('compare.comparisons.phantom-vs-maybach.title') || 'Phantom vs Maybach',
      subtitle: t('compare.comparisons.phantom-vs-maybach.subtitle') || 'Ultimate Flagship Battle',
      description: t('compare.comparisons.phantom-vs-maybach.description') || 'The ultimate comparison between flagship sedans',
      image: '/images/Mercedes-Benz_Maybach.avif',
      href: '/compare/phantom-vs-maybach',
      highlights: getHighlights('phantom-vs-maybach')
    }
  ]

  const categories = [
    { id: 'all', name: t('compare.categories.all') || 'All Comparisons', icon: '📊' },
    { id: 'luxury', name: t('compare.categories.luxury') || 'Luxury Focus', icon: '💎' },
    { id: 'performance', name: t('compare.categories.performance') || 'Performance', icon: '🏎️' },
    { id: 'heritage', name: t('compare.categories.heritage') || 'Heritage Brands', icon: '🏛️' }
  ]

  const filteredComparisons = selectedCategory === 'all' 
    ? comparisons 
    : comparisons.filter(comp => {
        if (selectedCategory === 'luxury') return ['rolls-royce-vs-bentley', 'phantom-vs-maybach'].includes(comp.id)
        if (selectedCategory === 'performance') return ['rolls-royce-vs-ferrari'].includes(comp.id)
        if (selectedCategory === 'heritage') return ['rolls-royce-vs-bentley', 'rolls-royce-vs-mercedes'].includes(comp.id)
        return true
      })

  return (
    <Layout>
      <SEO
        pageKey="compare.index"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Rolls-Royce-black.jpg"
            alt={t('compare.hero.imageAlt') || 'Luxury car comparison showcase'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('compare.hero.title') || 'Compare Luxury Cars'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('compare.hero.subtitle') || 'Make an Informed Decision'}
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('compare.hero.description') || 'Explore detailed comparisons between Rolls-Royce and other luxury brands'}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {['comparisons', 'brands', 'features', 'experts'].map((stat) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                    {t(`compare.stats.${stat}.value`) || (stat === 'comparisons' ? '4+' : stat === 'brands' ? '5' : stat === 'features' ? '20+' : '10+')}
                  </div>
                  <div className="text-sm text-gray-300">
                    {t(`compare.stats.${stat}.label`) || (stat === 'comparisons' ? 'Detailed Comparisons' : stat === 'brands' ? 'Luxury Brands' : stat === 'features' ? 'Features Analyzed' : 'Expert Reviews')}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-black text-white scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-md hover:shadow-lg`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('compare.comparisons.title') || 'Featured Comparisons'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('compare.comparisons.subtitle') || 'Explore our comprehensive luxury car comparisons'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredComparisons.map((comparison, index) => (
              <motion.div
                key={comparison.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Link href={comparison.href}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={comparison.image}
                      alt={comparison.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{comparison.title}</h3>
                      <p className="text-sm text-gray-300">{comparison.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{comparison.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {comparison.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center text-sm">
                          <span className="text-yellow-500 mr-2">✓</span>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-black font-semibold group-hover:text-yellow-500 transition-colors">
                        {t('compare.cta.viewComparison') || 'View Comparison'}
                      </span>
                      <svg className="w-5 h-5 text-yellow-500 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('compare.whyCompare.title') || 'Why Compare with Us?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('compare.whyCompare.subtitle') || 'Get expert insights and detailed analysis'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {['informed', 'comprehensive', 'expert'].map((reason, index) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{t(`compare.whyCompare.reasons.${reason}.icon`) || (reason === 'informed' ? '📊' : reason === 'comprehensive' ? '🔍' : '👨‍💼')}</div>
                <h3 className="text-2xl font-bold mb-4">
                  {t(`compare.whyCompare.reasons.${reason}.title`) ||
                    (reason === 'informed' ? 'Informed Decisions' :
                    reason === 'comprehensive' ? 'Comprehensive Analysis' :
                    'Expert Insights')}
                </h3>
                <p className="text-gray-600">
                  {t(`compare.whyCompare.reasons.${reason}.description`) ||
                    (reason === 'informed' ? 'Make confident choices with our comprehensive comparisons' :
                    reason === 'comprehensive' ? 'We analyze performance, luxury, technology, heritage and value' :
                    'Benefit from years of experience in the luxury automotive industry')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Comparison Tool */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('compare.tool.title') || 'Interactive Comparison Tool'}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {t('compare.tool.subtitle') || 'Compare specifications, features, and pricing across our entire luxury fleet'}
            </p>
            <Link href="/fleet" className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors">
              {t('compare.tool.cta') || 'Start Comparing'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('compare.faq.title') || 'Frequently Asked Questions'}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {['q1', 'q2', 'q3', 'q4'].map((qId, index) => (
              <motion.div
                key={qId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-3">
                  {t(`compare.faq.${qId}.question`) ||
                    (qId === 'q1' ? 'What makes Rolls-Royce unique compared to other luxury brands?' :
                    qId === 'q2' ? 'Which brand offers better value for money?' :
                    qId === 'q3' ? 'Can I test drive multiple brands before deciding?' :
                    'Which brand is best for chauffeur services?')}
                </h3>
                <p className="text-gray-600">
                  {t(`compare.faq.${qId}.answer`) ||
                    (qId === 'q1' ? 'Rolls-Royce stands apart with its uncompromising commitment to craftsmanship and legendary Magic Carpet Ride.' :
                    qId === 'q2' ? 'Value depends on your priorities. Rolls-Royce offers unparalleled luxury while other brands may offer more technology at lower prices.' :
                    qId === 'q3' ? 'Yes! We offer test drive experiences for all vehicles in our fleet. Contact our team to arrange consecutive test drives.' :
                    'Rolls-Royce is traditionally the gold standard for chauffeur services with supreme rear-seat comfort.')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('compare.cta.title') || 'Ready to Experience Excellence?'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('compare.cta.subtitle') || 'Choose your perfect luxury vehicle and begin your journey today'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                {t('compare.cta.book') || 'Book Now'}
              </Link>
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('compare.cta.contact') || 'Contact Expert'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'seo'])),
    },
  }
}