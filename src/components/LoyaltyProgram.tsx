import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface Tier {
  name: string
  icon: string
  requirement: string
  benefits: string[]
  color: string
  discount: number
}

export default function LoyaltyProgram() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedTier, setSelectedTier] = useState<number>(0)
  const [showEnrollForm, setShowEnrollForm] = useState(false)
  const [enrollData, setEnrollData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredCar: ''
  })

  const getTranslatedArray = (key: string, fallback: string[]): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : fallback;
  };

  const tiers: Tier[] = [
    {
      name: t('loyalty.tiers.silver.name'),
      icon: "🥈",
      requirement: t('loyalty.tiers.silver.requirement'),
      benefits: getTranslatedArray('loyalty.tiers.silver.benefits', [
        '5% discount on all rentals',
        'Priority booking access',
        'Free car delivery within Dubai',
        'Complimentary refreshments'
      ]),
      color: "from-gray-400 to-gray-600",
      discount: 5
    },
    {
      name: t('loyalty.tiers.gold.name'),
      icon: "🥇",
      requirement: t('loyalty.tiers.gold.requirement'),
      benefits: getTranslatedArray('loyalty.tiers.gold.benefits', [
        '10% discount on all rentals',
        'VIP booking concierge',
        'Free airport transfers',
        'Access to exclusive models',
        'Complimentary chauffeur upgrade'
      ]),
      color: "from-yellow-400 to-yellow-600",
      discount: 10
    },
    {
      name: t('loyalty.tiers.platinum.name'),
      icon: "👑",
      requirement: t('loyalty.tiers.platinum.requirement'),
      benefits: getTranslatedArray('loyalty.tiers.platinum.benefits', [
        '15% discount on all rentals',
        'Personal account manager',
        'Unlimited free deliveries',
        'First access to new fleet additions',
        'Complimentary photoshoot package',
        'Annual exclusive driving experience'
      ]),
      color: "from-purple-400 to-purple-600",
      discount: 15
    }
  ]

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate enrollment
    setShowEnrollForm(false)
    alert('Welcome to Rolls-Royce Elite Club! Check your email for membership details.')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">Rolls-Royce Elite Club</h2>
          <p className="text-xl text-rolls-gold">Exclusive rewards for our distinguished clients</p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedTier(index)}
              className={`relative cursor-pointer transform transition-all duration-300 ${
                selectedTier === index ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-20 rounded-lg blur-xl`}></div>
              <div className={`relative bg-rolls-black/70 backdrop-blur-sm border ${
                selectedTier === index ? 'border-rolls-gold' : 'border-rolls-gold/30'
              } rounded-lg p-6 h-full`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-3">{tier.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-sm text-gray-400">{tier.requirement}</p>
                  <div className="mt-3 text-3xl font-bold text-rolls-gold">{tier.discount}% OFF</div>
                </div>

                <div className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-rolls-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {index === 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowEnrollForm(true)
                    }}
                    className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-rolls-gold to-yellow-600 text-rolls-black font-semibold rounded hover:shadow-lg transition-shadow"
                  >
                    Join Now - Free
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Tracker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Your Journey to Elite Status</h3>
          
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-rolls-gold/20 rounded"></div>
            <div className="absolute top-5 left-0 h-1 bg-gradient-to-r from-rolls-gold to-yellow-600 rounded" style={{ width: '33%' }}></div>
            
            <div className="flex justify-between relative">
              {tiers.map((tier, index) => (
                <div key={tier.name} className="text-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    index === 0 ? 'bg-gradient-to-br from-rolls-gold to-yellow-600' : 'bg-rolls-black border-2 border-rolls-gold/30'
                  }`}>
                    {tier.icon}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{tier.name}</p>
                  <p className="text-xs text-rolls-gold">{tier.requirement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              Start your journey today and unlock exclusive benefits with every rental
            </p>
            {!showEnrollForm && (
              <button
                onClick={() => setShowEnrollForm(true)}
                className="btn-primary"
              >
                Enroll in Elite Club
              </button>
            )}
          </div>
        </motion.div>

        {/* Enrollment Form Modal */}
        {showEnrollForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowEnrollForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-rolls-black border border-rolls-gold/30 rounded-lg p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Join Rolls-Royce Elite Club</h3>
              <form onSubmit={handleEnroll} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={enrollData.name}
                    onChange={(e) => setEnrollData({...enrollData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={enrollData.email}
                    onChange={(e) => setEnrollData({...enrollData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={enrollData.phone}
                    onChange={(e) => setEnrollData({...enrollData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Preferred Rolls-Royce Model
                  </label>
                  <select
                    value={enrollData.preferredCar}
                    onChange={(e) => setEnrollData({...enrollData, preferredCar: e.target.value})}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  >
                    <option value="">Select a model</option>
                    <option value="phantom">Phantom</option>
                    <option value="cullinan">Cullinan</option>
                    <option value="ghost">Ghost</option>
                    <option value="dawn">Dawn</option>
                    <option value="wraith">Wraith</option>
                  </select>
                </div>

                <div className="flex space-x-4 pt-4">
                  <button type="submit" className="btn-primary flex-1">
                    Join Elite Club
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEnrollForm(false)}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By joining, you agree to receive exclusive offers and updates
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Benefits Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Why Join Elite Club?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-semibold text-white mb-2">Save More</h4>
              <p className="text-sm text-gray-400">Up to 15% off on every rental</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-white mb-2">Priority Access</h4>
              <p className="text-sm text-gray-400">First choice on new models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h4 className="font-semibold text-white mb-2">Exclusive Perks</h4>
              <p className="text-sm text-gray-400">Special gifts and experiences</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-semibold text-white mb-2">VIP Treatment</h4>
              <p className="text-sm text-gray-400">Personal concierge service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}