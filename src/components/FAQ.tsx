import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { useInView } from 'react-intersection-observer'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "What documents do I need to rent a Rolls-Royce in Dubai?",
      answer: "You need a valid driver's license (International Driving Permit for tourists), passport copy, and a credit card for the security deposit. UAE residents need their Emirates ID."
    },
    {
      question: "What is the minimum rental period?",
      answer: "Our minimum rental period is 24 hours. We also offer hourly packages starting from 4 hours for special occasions."
    },
    {
      question: "Do you provide airport pickup and drop-off?",
      answer: "Yes, we offer complimentary pickup and drop-off services at Dubai International Airport (DXB) and Al Maktoum International Airport (DWC)."
    },
    {
      question: "Is insurance included in the rental price?",
      answer: "Yes, comprehensive insurance is included. However, there's a security deposit that varies by model (AED 10,000-20,000) which is fully refundable."
    },
    {
      question: "Can I drive to other Emirates?",
      answer: "Yes, you can drive to all UAE Emirates. For Oman or other GCC countries, please inform us in advance for special insurance arrangements."
    },
    {
      question: "What happens in case of an accident?",
      answer: "Contact us immediately at +971558164922. We provide 24/7 roadside assistance. Minor damages may be covered by the security deposit."
    },
    {
      question: "Do you offer chauffeur services?",
      answer: "Yes, we provide professional, multilingual chauffeurs who are trained in luxury vehicle operation and familiar with all Dubai locations."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 48 hours before rental. 50% charge for cancellations within 24-48 hours. No refund for cancellations within 24 hours."
    },
    {
      question: "Are there any age restrictions?",
      answer: "Drivers must be at least 25 years old with a minimum of 2 years driving experience. For chauffeur services, there are no age restrictions for passengers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, bank transfers, and cash. A credit card is required for the security deposit."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-rolls-gold">Everything you need to know</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-rolls-gold flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Schema.org FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  )
}