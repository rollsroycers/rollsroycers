import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'

export default function SpecialOffers() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Calculate time until end of month for offer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
      const difference = endOfMonth.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const offers = [
    {
      id: 1,
      title: t('offers.weekend.title'),
      discount: t('offers.weekend.discount'),
      description: t('offers.weekend.description'),
      code: "WEEKEND20",
      icon: "🌟"
    },
    {
      id: 2,
      title: t('offers.firstTime.title'),
      discount: t('offers.firstTime.discount'),
      description: t('offers.firstTime.description'),
      code: "FIRST15",
      icon: "🎁"
    },
    {
      id: 3,
      title: t('offers.monthly.title'),
      discount: t('offers.monthly.discount'),
      description: t('offers.monthly.description'),
      code: "MONTH30",
      icon: "📅"
    },
    {
      id: 4,
      title: t('offers.chauffeur.title'),
      discount: t('offers.chauffeur.discount'),
      description: t('offers.chauffeur.description'),
      code: "CHAUFFEUR",
      icon: "👨‍✈️"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-rolls-black via-rolls-navy to-rolls-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(196, 165, 112, 0.1) 35px, rgba(196, 165, 112, 0.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">{t('common.specialOffers')}</h2>
          <p className="text-xl text-rolls-gold">{t('common.limitedTimeDeals')}</p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-lg p-6 glass-effect">
            <p className="text-rolls-gold text-sm mb-3 text-center">{t('common.offersEndIn')}</p>
            <div className="flex space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-rolls-gold/10 rounded-lg p-3 min-w-[60px]">
                    <span className="text-2xl font-bold text-rolls-gold">{value.toString().padStart(2, '0')}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 capitalize">{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-rolls-black/80 to-rolls-navy/80 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 h-full group-hover:border-rolls-gold/50 transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl mb-4">{offer.icon}</div>
                
                {/* Discount Badge */}
                <div className="absolute -top-3 -right-3 bg-rolls-gold text-rolls-black font-bold px-4 py-2 rounded-full text-sm animate-pulse">
                  {offer.discount}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{offer.description}</p>
                
                {/* Promo Code */}
                <div className="bg-rolls-black/50 border border-rolls-gold/30 rounded px-3 py-2 text-center">
                  <p className="text-xs text-gray-500 mb-1">{t('common.useCode')}</p>
                  <p className="text-rolls-gold font-mono font-bold">{offer.code}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-rolls-gold/0 via-rolls-gold/5 to-rolls-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact">
            <button className="btn-primary text-lg px-10 py-5 group">
              Claim Your Offer
              <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
          <p className="text-gray-500 text-sm mt-4">*Terms and conditions apply</p>
        </motion.div>
      </div>
    </section>
  )
}