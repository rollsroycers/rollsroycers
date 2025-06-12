import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import ComparisonTool from '@/components/ComparisonTool'
import SEO from '@/components/SEO'

export default function BusinessBayPage() {
  const businessTowers = [
    { name: 'Ubora Tower', type: 'Commercial', feature: 'Valet Parking' },
    { name: 'Bay Square', type: 'Mixed Use', feature: 'Direct Access' },
    { name: 'Executive Tower', type: 'Office Complex', feature: '24/7 Access' },
    { name: 'Capital Bay', type: 'Business Hub', feature: 'VIP Entrance' },
    { name: 'Preatoni Tower', type: 'Commercial', feature: 'Basement Parking' },
    { name: 'The Metropolis', type: 'Business Center', feature: 'Concierge Service' }
  ]

  const keyAdvantages = [
    {
      icon: '🏢',
      title: 'Business Hub',
      description: 'Heart of Dubai\'s business district with easy access to DIFC and Downtown'
    },
    {
      icon: '🚗',
      title: 'Quick Connectivity',
      description: 'Strategic location with multiple entry/exit points to Sheikh Zayed Road'
    },
    {
      icon: '🍽️',
      title: 'Premium Dining',
      description: 'World-class restaurants for business lunches and client entertainment'
    },
    {
      icon: '🏨',
      title: 'Luxury Hotels',
      description: 'Five-star hotels perfect for international business travelers'
    }
  ]

  const corporateServices = [
    {
      service: 'Executive Daily Rental',
      description: 'Perfect for high-level meetings and client impressions',
      features: ['Morning delivery to office', 'Evening pickup service', 'Flexible timing'],
      price: 'From AED 5,500/day'
    },
    {
      service: 'Conference Package',
      description: 'Multiple vehicles for corporate events and conferences',
      features: ['Fleet coordination', 'Professional chauffeurs', 'VIP guest management'],
      price: 'From AED 35,000'
    },
    {
      service: 'Monthly Corporate',
      description: 'Long-term solutions for executives and companies',
      features: ['Dedicated vehicle', 'Account management', 'Priority support'],
      price: 'From AED 95,000/month'
    }
  ]

  const nearbyDestinations = [
    { name: 'Dubai Mall', distance: '5 minutes', purpose: 'Client entertainment' },
    { name: 'DIFC', distance: '8 minutes', purpose: 'Financial meetings' },
    { name: 'Dubai Canal', distance: '2 minutes', purpose: 'Scenic drives' },
    { name: 'La Mer Beach', distance: '10 minutes', purpose: 'Leisure breaks' },
    { name: 'City Walk', distance: '7 minutes', purpose: 'Business lunches' },
    { name: 'Dubai Airport', distance: '20 minutes', purpose: 'Airport transfers' }
  ]

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Tech Innovations LLC',
      text: 'Using Rolls-Royce for our board meetings has elevated our company image significantly. The Business Bay delivery service is impeccable.',
      vehicle: 'Ghost'
    },
    {
      name: 'Aisha Al Maktoum',
      company: 'Investment Group',
      text: 'The monthly package for our C-suite executives has been a game-changer. Professional service that matches Business Bay\'s standards.',
      vehicle: 'Phantom'
    },
    {
      name: 'Marcus Williams',
      company: 'Global Consulting',
      text: 'When entertaining international clients in Dubai, nothing impresses like arriving in a Rolls-Royce. Essential for our business.',
      vehicle: 'Cullinan'
    }
  ]

  return (
    <>
      <SEO pageKey="locations.business-bay" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-dubai.jpg"
              alt="Rolls-Royce Business Bay Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/60 via-rolls-black/40 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Business Bay Excellence
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Executive Transportation for Dubai's Business Elite
              </p>
              
              {/* Business District Badge */}
              <div className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3 mb-8">
                <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Dubai's Premier Business District</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Book Executive Service
                </motion.button>
                <a href="#corporate" className="btn-secondary">
                  Corporate Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Rolls-Royce in Business Bay?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {keyAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                  <p className="text-gray-400">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Towers */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Direct Delivery to Business Towers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {businessTowers.map((tower, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 hover:border-rolls-gold/40 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{tower.name}</h3>
                  <p className="text-rolls-gold text-sm mb-2">{tower.type}</p>
                  <p className="text-gray-400 text-sm">✓ {tower.feature}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              + All Business Bay towers and commercial buildings with complimentary valet coordination
            </p>
          </div>
        </section>

        {/* Corporate Services */}
        <section id="corporate" className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Corporate Services for Business Bay
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {corporateServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.service}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-rolls-gold mb-4">{service.price}</div>
                  <button className="btn-primary w-full">
                    Inquire Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Destinations */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Quick Access from Business Bay
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-4 bg-rolls-gold/10 font-semibold text-white">
                  <div>Destination</div>
                  <div>Drive Time</div>
                  <div>Purpose</div>
                </div>
                {nearbyDestinations.map((dest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-3 gap-4 p-4 border-t border-rolls-gold/10"
                  >
                    <div className="text-gray-300">{dest.name}</div>
                    <div className="text-rolls-gold">{dest.distance}</div>
                    <div className="text-gray-400 text-sm">{dest.purpose}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Elevate Your Business Image
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-rolls-gold mb-4">Client Impressions</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Arrive at meetings in unparalleled style</li>
                  <li>• Transport VIP clients and partners</li>
                  <li>• Stand out in the business community</li>
                  <li>• Create memorable first impressions</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h3 className="text-xl font-semibold text-rolls-gold mb-4">Productivity Benefits</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Mobile office with WiFi and charging</li>
                  <li>• Quiet space for calls and preparation</li>
                  <li>• Professional chauffeur handling navigation</li>
                  <li>• Stress-free travel between meetings</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Business Bay Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-rolls-gold text-sm">{testimonial.company}</p>
                    <p className="text-gray-400 text-sm mt-1">Vehicle: {testimonial.vehicle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Executive Fleet for Business Bay
            </h2>
            <ComparisonTool />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Business Transportation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of Business Bay executives who choose Rolls-Royce for their corporate mobility needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call Business Team
              </motion.a>
              <Link href="/services/corporate" className="btn-secondary">
                Corporate Packages
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">200+</div>
                <div className="text-sm text-gray-400">Corporate Clients</div>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">10 min</div>
                <div className="text-sm text-gray-400">Tower Delivery</div>
              </div>
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-rolls-gold">24/7</div>
                <div className="text-sm text-gray-400">Business Support</div>
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
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  }
}