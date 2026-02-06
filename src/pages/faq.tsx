import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function FAQPage() {
  const { t } = useTranslation('common')
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: t('faqPage.categories.all'), icon: '📋' },
    { id: 'booking', name: t('faqPage.categories.booking'), icon: '📅' },
    { id: 'requirements', name: t('faqPage.categories.requirements'), icon: '📄' },
    { id: 'pricing', name: t('faqPage.categories.pricing'), icon: '💰' },
    { id: 'vehicles', name: t('faqPage.categories.vehicles'), icon: '🚗' },
    { id: 'services', name: t('faqPage.categories.services'), icon: '🎯' },
    { id: 'policies', name: t('faqPage.categories.policies'), icon: '📜' }
  ]

  const faqs = [
    // Booking & Reservations
    {
      id: 1,
      category: 'booking',
      question: t('faqPage.questions.q1'),
      answer: t('faqPage.questions.a1')
    },
    {
      id: 2,
      category: 'booking',
      question: t('faqPage.questions.q2'),
      answer: t('faqPage.questions.a2')
    },
    {
      id: 3,
      category: 'booking',
      question: t('faqPage.questions.q3'),
      answer: t('faqPage.questions.a3')
    },
    {
      id: 4,
      category: 'booking',
      question: t('faqPage.questions.q4'),
      answer: t('faqPage.questions.a4')
    },

    // Requirements
    {
      id: 5,
      category: 'requirements',
      question: t('faqPage.questions.q5'),
      answer: t('faqPage.questions.a5')
    },
    {
      id: 6,
      category: 'requirements',
      question: t('faqPage.questions.q6'),
      answer: t('faqPage.questions.a6')
    },
    {
      id: 7,
      category: 'requirements',
      question: t('faqPage.questions.q7'),
      answer: t('faqPage.questions.a7')
    },

    // Pricing & Payment
    {
      id: 8,
      category: 'pricing',
      question: t('faqPage.questions.q8'),
      answer: t('faqPage.questions.a8')
    },
    {
      id: 9,
      category: 'pricing',
      question: t('faqPage.questions.q9'),
      answer: t('faqPage.questions.a9')
    },
    {
      id: 10,
      category: 'pricing',
      question: t('faqPage.questions.q10'),
      answer: t('faqPage.questions.a10')
    },

    // Vehicles
    {
      id: 11,
      category: 'vehicles',
      question: t('faqPage.questions.q11'),
      answer: t('faqPage.questions.a11')
    },
    {
      id: 12,
      category: 'vehicles',
      question: t('faqPage.questions.q12'),
      answer: t('faqPage.questions.a12')
    },
    {
      id: 13,
      category: 'vehicles',
      question: t('faqPage.questions.q13'),
      answer: t('faqPage.questions.a13')
    },

    // Services
    {
      id: 14,
      category: 'services',
      question: t('faqPage.questions.q14'),
      answer: t('faqPage.questions.a14')
    },
    {
      id: 15,
      category: 'services',
      question: t('faqPage.questions.q15'),
      answer: t('faqPage.questions.a15')
    },
    {
      id: 16,
      category: 'services',
      question: t('faqPage.questions.q16'),
      answer: t('faqPage.questions.a16')
    },

    // Policies
    {
      id: 17,
      category: 'policies',
      question: t('faqPage.questions.q17'),
      answer: t('faqPage.questions.a17')
    },
    {
      id: 18,
      category: 'policies',
      question: t('faqPage.questions.q18'),
      answer: t('faqPage.questions.a18')
    },
    {
      id: 19,
      category: 'policies',
      question: t('faqPage.questions.q19'),
      answer: t('faqPage.questions.a19')
    },
    {
      id: 20,
      category: 'policies',
      question: t('faqPage.questions.q20'),
      answer: t('faqPage.questions.a20')
    }
  ]

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleQuestion = (questionId: number) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <Layout>
      <SEO pageKey="other.faq" />
      <GEOOptimizer
        pageKey="other.faq"
        title="Rolls-Royce Rental Dubai FAQ 2026"
        description="Frequently asked questions about Rolls-Royce rental in Dubai. Pricing, requirements, booking, and more."
        entityType="FAQPage"
        primaryTopic="Rolls-Royce Rental Dubai FAQ"
        contentSummary="Complete FAQ for Rolls-Royce rental in Dubai. Answers about pricing, tourist requirements, booking process, delivery, chauffeur services, wedding packages, and corporate accounts."
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-rolls-black via-rolls-navy to-rolls-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0">
          <Image
            src="/images/faq-hero.jpg"
            alt="FAQ Hero"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-rolls-gold">
              {t('faqPage.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              {t('faqPage.subtitle')}
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t('faqPage.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-rolls-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-rolls-gold text-rolls-black'
                    : 'bg-rolls-charcoal text-white hover:bg-rolls-gold hover:text-rolls-black'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-rolls-charcoal/50 backdrop-blur-sm rounded-xl border border-rolls-gold/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-rolls-gold/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    openQuestion === faq.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <div className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-rolls-gold to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-rolls-black mb-6">
              {t('faqPage.contactCta.title')}
            </h2>
            <p className="text-xl text-rolls-black/80 mb-8 max-w-2xl mx-auto">
              {t('faqPage.contactCta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+971558164922"
                className="inline-flex items-center px-8 py-4 bg-rolls-black text-white rounded-lg hover:bg-rolls-charcoal transition-colors duration-300 font-semibold"
              >
                📞 {t('faqPage.contactCta.callButton')}
              </Link>
              
              <Link
                href="https://wa.me/971558164922"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
              >
                💬 {t('faqPage.contactCta.whatsappButton')}
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-rolls-black rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
              >
                ✉️ {t('faqPage.contactCta.emailButton')}
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}