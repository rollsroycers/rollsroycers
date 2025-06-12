import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface PriceBreakdown {
  basePrice: number
  chauffeurPrice: number
  insurancePrice: number
  deliveryPrice: number
  discount: number
  total: number
}

export default function PriceCalculator() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCar, setSelectedCar] = useState('phantom')
  const [days, setDays] = useState(1)
  const [withChauffeur, setWithChauffeur] = useState(false)
  const [deliveryLocation, setDeliveryLocation] = useState('hotel')
  const [promoCode, setPromoCode] = useState('')
  const [breakdown, setBreakdown] = useState<PriceBreakdown | null>(null)

  const carPrices = {
    phantom: { daily: 5800, weekly: 34800, monthly: 116000 },
    cullinan: { daily: 6500, weekly: 39000, monthly: 130000 },
    ghost: { daily: 4800, weekly: 28800, monthly: 96000 },
    dawn: { daily: 5500, weekly: 33000, monthly: 110000 },
    wraith: { daily: 5000, weekly: 30000, monthly: 100000 }
  }

  const promoCodes = {
    'WEEKEND20': 0.20,
    'FIRST15': 0.15,
    'MONTH30': 0.30,
    'LUXURY10': 0.10
  }

  const calculatePrice = () => {
    const car = carPrices[selectedCar as keyof typeof carPrices]
    let basePrice = 0

    // Calculate base price with volume discounts
    if (days >= 30) {
      basePrice = car.monthly
    } else if (days >= 7) {
      basePrice = Math.floor((car.weekly / 7) * days)
    } else {
      basePrice = car.daily * days
    }

    // Additional services
    const chauffeurPrice = withChauffeur ? 1500 * days : 0
    const insurancePrice = 350 * days
    const deliveryPrice = deliveryLocation === 'airport' ? 500 : deliveryLocation === 'hotel' ? 0 : 350

    // Apply promo code
    const discountRate = promoCodes[promoCode.toUpperCase() as keyof typeof promoCodes] || 0
    const subtotal = basePrice + chauffeurPrice + insurancePrice + deliveryPrice
    const discount = subtotal * discountRate

    setBreakdown({
      basePrice,
      chauffeurPrice,
      insurancePrice,
      deliveryPrice,
      discount,
      total: subtotal - discount
    })
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
          <h2 className="heading-2 text-white mb-4">Price Calculator</h2>
          <p className="text-xl text-rolls-gold">Get an instant quote for your luxury experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 glass-effect">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Inputs */}
              <div className="space-y-6">
                {/* Car Selection */}
                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Select Your Rolls-Royce
                  </label>
                  <select
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  >
                    <option value="phantom">Rolls-Royce Phantom</option>
                    <option value="cullinan">Rolls-Royce Cullinan</option>
                    <option value="ghost">Rolls-Royce Ghost</option>
                    <option value="dawn">Rolls-Royce Dawn</option>
                    <option value="wraith">Rolls-Royce Wraith</option>
                  </select>
                </div>

                {/* Rental Duration */}
                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Rental Duration (Days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="365"
                    value={days}
                    onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {days >= 30 ? '🎉 Monthly rate applied!' : days >= 7 ? '🎉 Weekly rate applied!' : 'Daily rate'}
                  </p>
                </div>

                {/* Chauffeur Option */}
                <div>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withChauffeur}
                      onChange={(e) => setWithChauffeur(e.target.checked)}
                      className="w-5 h-5 text-rolls-gold bg-rolls-navy border-rolls-gold/20 rounded focus:ring-rolls-gold"
                    />
                    <span className="text-white">Professional Chauffeur (+AED 1,500/day)</span>
                  </label>
                </div>

                {/* Delivery Location */}
                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Delivery Location
                  </label>
                  <select
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white focus:border-rolls-gold focus:outline-none"
                  >
                    <option value="hotel">Hotel (Free)</option>
                    <option value="airport">Airport (AED 500)</option>
                    <option value="other">Other Location (AED 350)</option>
                  </select>
                </div>

                {/* Promo Code */}
                <div>
                  <label className="block text-sm font-medium text-rolls-gold mb-2">
                    Promo Code
                  </label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="w-full px-4 py-3 bg-rolls-navy/50 border border-rolls-gold/20 rounded text-white placeholder-gray-500 focus:border-rolls-gold focus:outline-none"
                  />
                </div>

                <button
                  onClick={calculatePrice}
                  className="btn-primary w-full"
                >
                  Calculate Price
                </button>
              </div>

              {/* Right Column - Price Breakdown */}
              <div className="bg-rolls-black/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Price Breakdown</h3>
                
                {breakdown ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between text-gray-300">
                      <span>Vehicle Rental</span>
                      <span>AED {breakdown.basePrice.toLocaleString()}</span>
                    </div>
                    
                    {breakdown.chauffeurPrice > 0 && (
                      <div className="flex justify-between text-gray-300">
                        <span>Chauffeur Service</span>
                        <span>AED {breakdown.chauffeurPrice.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-gray-300">
                      <span>Comprehensive Insurance</span>
                      <span>AED {breakdown.insurancePrice.toLocaleString()}</span>
                    </div>
                    
                    {breakdown.deliveryPrice > 0 && (
                      <div className="flex justify-between text-gray-300">
                        <span>Delivery Fee</span>
                        <span>AED {breakdown.deliveryPrice.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {breakdown.discount > 0 && (
                      <div className="flex justify-between text-green-400">
                        <span>Discount Applied</span>
                        <span>-AED {breakdown.discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="border-t border-rolls-gold/30 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-white">Total</span>
                        <span className="text-2xl font-bold text-rolls-gold">
                          AED {breakdown.total.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        *Includes VAT and all fees. Security deposit required separately.
                      </p>
                    </div>
                    
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary w-full mt-6 block text-center"
                    >
                      Book This Package
                    </motion.a>
                  </motion.div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    <svg className="w-16 h-16 mx-auto mb-4 text-rolls-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p>Configure your rental and click calculate to see pricing</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}