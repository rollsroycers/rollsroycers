import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import WhatsAppButton from '@/components/WhatsAppButton'
import PriceCalculator from '@/components/PriceCalculator'

export default function PricingPage() {
  const [selectedDuration, setSelectedDuration] = useState('daily')
  const [showCalculator, setShowCalculator] = useState(false)

  const durations = [
    { id: 'daily', name: 'Daily Rates', multiplier: 1 },
    { id: 'weekly', name: 'Weekly Rates', multiplier: 6, discount: '15% OFF' },
    { id: 'monthly', name: 'Monthly Rates', multiplier: 20, discount: '30% OFF' }
  ]

  const vehiclePricing = [
    {
      model: 'Phantom',
      tagline: 'The Ultimate Flagship',
      image: '/images/Rolls-royce-phantom.jpg',
      prices: {
        daily: 5800,
        weekly: 34800,
        monthly: 116000
      },
      features: [
        'Extended wheelbase available',
        'Starlight headliner',
        'Privacy suite option',
        'Bespoke audio system'
      ],
      popular: false
    },
    {
      model: 'Ghost',
      tagline: 'Effortless Everywhere',
      image: '/images/Black_Rolls_Royce_Ghost.jpg',
      prices: {
        daily: 4800,
        weekly: 28800,
        monthly: 96000
      },
      features: [
        'Illuminated fascia',
        'Black Badge available',
        'Planar suspension',
        'Magic carpet ride'
      ],
      popular: true
    },
    {
      model: 'Cullinan',
      tagline: 'Luxury SUV Excellence',
      image: '/images/Rolls-Royce-Cullinan_.jpg',
      prices: {
        daily: 6500,
        weekly: 39000,
        monthly: 130000
      },
      features: [
        'All-terrain capability',
        'Viewing suite option',
        'Recreation module',
        'Night vision system'
      ],
      popular: false
    },
    {
      model: 'Dawn',
      tagline: 'Social Convertible',
      image: '/images/Rolls-Royce_Dawn.jpg',
      prices: {
        daily: 5500,
        weekly: 33000,
        monthly: 110000
      },
      features: [
        'Convertible roof',
        'Wind deflector',
        'Bespoke audio tuning',
        'Open-air luxury'
      ],
      popular: false
    },
    {
      model: 'Wraith',
      tagline: 'Grand Tourer',
      image: '/images/Rolls-royce-with-blan.jpg',
      prices: {
        daily: 5000,
        weekly: 30000,
        monthly: 100000
      },
      features: [
        'Fastback design',
        'Starlight headliner',
        'Black Badge power',
        'Dynamic performance'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      service: 'Professional Chauffeur',
      price: 'AED 1,500/day',
      description: 'Experienced, multilingual drivers'
    },
    {
      service: 'Airport Transfer',
      price: 'AED 1,000',
      description: 'One-way luxury transfer'
    },
    {
      service: 'Wedding Package',
      price: 'From AED 8,500',
      description: 'Decorated vehicle with chauffeur'
    },
    {
      service: 'Hourly Rental',
      price: 'AED 2,000/hour',
      description: 'Minimum 4 hours'
    },
    {
      service: 'Extra Mileage',
      price: 'AED 20/km',
      description: 'Beyond 250km daily allowance'
    },
    {
      service: 'Delivery & Collection',
      price: 'AED 500 in Dubai',
      description: 'Other emirates from AED 1,000'
    }
  ]

  const corporatePackages = [
    {
      name: 'Executive',
      price: 'AED 85,000/month',
      features: [
        '20 days per month',
        'Choice of Ghost or Wraith',
        'Dedicated chauffeur',
        'Airport transfers included'
      ]
    },
    {
      name: 'Chairman',
      price: 'AED 150,000/month',
      features: [
        'Unlimited usage',
        'Any vehicle from fleet',
        '2 dedicated chauffeurs',
        'Priority booking'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom Quote',
      features: [
        'Multiple vehicles',
        'Fleet management',
        'Corporate branding',
        'Dedicated account team'
      ]
    }
  ]

  const seasonalFactors = [
    {
      season: 'Peak Season (Nov-Mar)',
      factor: '+20%',
      description: 'Dubai season & holidays'
    },
    {
      season: 'Ramadan',
      factor: '+15%',
      description: 'High demand period'
    },
    {
      season: 'Summer (Jun-Aug)',
      factor: '-10%',
      description: 'Special summer rates'
    },
    {
      season: 'Events & Exhibitions',
      factor: '+25%',
      description: 'GITEX, Air Show, etc.'
    }
  ]

  return (
    <>
      <SEO pageKey="other.pricing" />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Pricing"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-2xl text-rolls-gold mb-4">
                No Hidden Fees, Just Pure Luxury
              </p>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                All prices include basic insurance, 250km daily mileage, and VAT
              </p>
            </motion.div>
          </div>
        </section>

        {/* Duration Selector */}
        <section className="py-8 bg-gradient-to-b from-rolls-black to-rolls-navy sticky top-0 z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {durations.map((duration) => (
                <motion.button
                  key={duration.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedDuration(duration.id)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all ${
                    selectedDuration === duration.id
                      ? 'bg-rolls-gold text-rolls-black'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  <span className="text-lg">{duration.name}</span>
                  {duration.discount && (
                    <span className="ml-2 text-sm bg-green-500/20 text-green-400 px-2 py-1 rounded">
                      {duration.discount}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Pricing Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {vehiclePricing.map((vehicle, index) => (
                <motion.div
                  key={vehicle.model}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-rolls-black/50 backdrop-blur-sm border ${
                    vehicle.popular ? 'border-rolls-gold border-2' : 'border-rolls-gold/20'
                  } rounded-lg overflow-hidden relative`}
                >
                  {vehicle.popular && (
                    <div className="absolute top-0 right-0 bg-rolls-gold text-rolls-black px-4 py-1 rounded-bl-lg font-semibold z-10">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="aspect-video relative">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.model} Rental`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rolls-black to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{vehicle.model}</h3>
                    <p className="text-gray-400 mb-4">{vehicle.tagline}</p>
                    
                    <div className="mb-6">
                      <p className="text-4xl font-bold text-rolls-gold">
                        AED {vehicle.prices[selectedDuration as keyof typeof vehicle.prices].toLocaleString()}
                      </p>
                      <p className="text-gray-400">
                        {selectedDuration === 'daily' ? 'per day' : 
                         selectedDuration === 'weekly' ? 'per week' : 
                         'per month'}
                      </p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-rolls-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/fleet/${vehicle.model.toLowerCase()}`} className="btn-primary w-full text-center">
                      View Details & Book
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Additional Services & Fees
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.service}</h3>
                  <p className="text-2xl font-bold text-rolls-gold mb-2">{service.price}</p>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Corporate & Long-Term Packages
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {corporatePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border ${
                    index === 1 ? 'border-rolls-gold border-2' : 'border-rolls-gold/30'
                  } rounded-lg p-8 text-center relative`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rolls-gold text-rolls-black px-4 py-1 rounded-full text-sm font-bold">
                      RECOMMENDED
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-rolls-gold mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services/corporate" className="btn-primary w-full">
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Pricing */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Seasonal Price Adjustments
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-rolls-gold/10">
                      <th className="px-6 py-4 text-left text-white font-semibold">Season/Event</th>
                      <th className="px-6 py-4 text-center text-white font-semibold">Price Factor</th>
                      <th className="px-6 py-4 text-left text-white font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seasonalFactors.map((factor, index) => (
                      <tr key={index} className="border-t border-rolls-gold/10">
                        <td className="px-6 py-4 text-gray-300">{factor.season}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${
                            factor.factor.startsWith('+') ? 'text-red-400' : 'text-green-400'
                          }`}>
                            {factor.factor}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-400">{factor.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-gray-400 mt-4">
                * Prices subject to availability and may vary during special events
              </p>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Calculate Your Total Cost
              </h2>
              <p className="text-xl text-gray-300">
                Use our calculator to estimate your rental cost including all services
              </p>
            </div>
            
            {!showCalculator ? (
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalculator(true)}
                  className="btn-primary"
                >
                  Open Price Calculator
                </motion.button>
              </div>
            ) : (
              <PriceCalculator />
            )}
          </div>
        </section>

        {/* Price Match Guarantee */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-gradient-to-r from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Best Price Guarantee
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Find a lower price for the same Rolls-Royce rental in Dubai? 
                  We'll match it and give you an additional 5% discount.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <div className="text-4xl mb-2">💰</div>
                    <h3 className="text-white font-semibold mb-2">Price Match</h3>
                    <p className="text-gray-400 text-sm">We match any verified competitor price</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">🎁</div>
                    <h3 className="text-white font-semibold mb-2">Extra 5% Off</h3>
                    <p className="text-gray-400 text-sm">Additional discount on matched price</p>
                  </div>
                  <div>
                    <div className="text-4xl mb-2">✅</div>
                    <h3 className="text-white font-semibold mb-2">No Hidden Fees</h3>
                    <p className="text-gray-400 text-sm">Transparent pricing always</p>
                  </div>
                </div>
                <Link href="/booking" className="btn-primary">
                  Book with Confidence
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Pricing FAQs
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: 'What is included in the rental price?',
                  a: 'All prices include comprehensive insurance, 250km daily mileage allowance, VAT, and 24/7 roadside assistance. Fuel is not included.'
                },
                {
                  q: 'Are there any security deposits?',
                  a: 'Yes, a refundable security deposit of AED 5,000-10,000 is required depending on the vehicle model. This is held on your credit card.'
                },
                {
                  q: 'Can I get a discount for longer rentals?',
                  a: 'Yes! Weekly rentals get 15% off, monthly rentals 30% off, and 3+ months up to 40% off the daily rate.'
                },
                {
                  q: 'Do prices change during holidays?',
                  a: 'Prices may increase 20-25% during peak season (November-March) and major events. Book early for best rates.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-rolls-gold hover:text-white transition-colors">
                View all FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Luxury?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your Rolls-Royce today and enjoy the best rates in Dubai
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="btn-primary">
                  Book Now
                </Link>
                <a
                  href="tel:+971558164922"
                  className="btn-secondary"
                >
                  Call for Special Rates
                </a>
              </div>
              
              <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">24/7</p>
                  <p className="text-gray-400">Customer Support</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">0%</p>
                  <p className="text-gray-400">Hidden Fees</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-rolls-gold mb-2">100%</p>
                  <p className="text-gray-400">Satisfaction</p>
                </div>
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