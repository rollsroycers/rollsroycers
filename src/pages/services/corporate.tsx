import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function CorporateServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState('executive')
  
  const corporatePackages = {
    executive: {
      name: 'Executive Package',
      description: 'Perfect for C-suite transportation and VIP client meetings',
      features: [
        'Dedicated account manager',
        'Monthly billing & invoicing',
        'Priority booking system',
        '24/7 availability',
        'Multilingual chauffeurs',
        'Confidentiality agreements',
        'Flexible cancellation policy',
        'Volume discounts'
      ],
      vehicles: ['Ghost', 'Phantom'],
      startingPrice: 'AED 5,500/day'
    },
    conference: {
      name: 'Conference & Events',
      description: 'Comprehensive fleet solutions for corporate events',
      features: [
        'Multiple vehicle coordination',
        'Event planning assistance',
        'Airport group transfers',
        'Branded welcome signs',
        'Dedicated dispatch team',
        'Real-time GPS tracking',
        'Guest management system',
        'Post-event reporting'
      ],
      vehicles: ['Full Fleet Available'],
      startingPrice: 'Custom Quote'
    },
    roadshow: {
      name: 'Roadshow Package',
      description: 'Multi-day solutions for investor relations and presentations',
      features: [
        'Consistent chauffeur team',
        'Route optimization',
        'Mobile office setup',
        'Equipment transportation',
        'Inter-emirate travel',
        'Standby availability',
        'Presentation equipment',
        'Security coordination'
      ],
      vehicles: ['Ghost', 'Cullinan'],
      startingPrice: 'AED 32,000/week'
    },
    partnership: {
      name: 'Annual Partnership',
      description: 'Long-term luxury mobility solutions for enterprises',
      features: [
        'Guaranteed availability',
        'Preferred rates',
        'Dedicated fleet allocation',
        'Custom branding options',
        'Employee transportation',
        'Board meeting services',
        'International coordination',
        'Quarterly business reviews'
      ],
      vehicles: ['Entire Fleet'],
      startingPrice: 'Bespoke Pricing'
    }
  }

  const clientLogos = [
    { name: 'Emirates NBD', sector: 'Banking' },
    { name: 'DAMAC Properties', sector: 'Real Estate' },
    { name: 'Dubai Holdings', sector: 'Investment' },
    { name: 'Emaar', sector: 'Development' },
    { name: 'DIFC', sector: 'Financial' },
    { name: 'ADNOC', sector: 'Energy' }
  ]

  const benefits = [
    {
      icon: '🏢',
      title: 'Corporate Image',
      description: 'Enhance your company\'s prestige with the world\'s finest automobiles'
    },
    {
      icon: '📊',
      title: 'Productivity',
      description: 'Transform travel time into productive work sessions with mobile office features'
    },
    {
      icon: '🔒',
      title: 'Privacy & Security',
      description: 'Discreet, professional service with comprehensive confidentiality protocols'
    },
    {
      icon: '🌍',
      title: 'Global Standards',
      description: 'Consistent luxury experience matching international business expectations'
    }
  ]

  const caseStudies = [
    {
      client: 'Global Investment Bank',
      challenge: 'Required reliable luxury transport for 50+ executives during annual conference',
      solution: 'Deployed 15 vehicles with dedicated dispatch, resulting in 100% on-time performance',
      result: '3-year partnership agreement signed'
    },
    {
      client: 'Tech Multinational',
      challenge: 'Needed discrete transport for high-profile acquisition negotiations',
      solution: 'Provided Ghost with security-trained chauffeur and mobile office setup',
      result: 'Successfully completed $2B deal with full confidentiality'
    }
  ]

  return (
    <>
      <SEO pageKey="services.corporate" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-with-chauffeur.jpg"
              alt="Rolls-Royce Corporate Services Dubai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 via-rolls-black/50 to-rolls-black"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Corporate Excellence
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                Elevate Your Business Transportation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Corporate Quote
                </motion.button>
                <a href="#packages" className="btn-secondary">
                  View Packages
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">500+</div>
                  <div className="text-sm text-gray-400">Corporate Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">98%</div>
                  <div className="text-sm text-gray-400">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold">24/7</div>
                  <div className="text-sm text-gray-400">Dedicated Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Rolls-Royce for Business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Packages */}
        <section id="packages" className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Tailored Corporate Solutions
            </h2>
            
            {/* Package Selector */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {Object.keys(corporatePackages).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedPackage(key)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedPackage === key
                      ? 'bg-rolls-gold text-rolls-black font-semibold'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20'
                  }`}
                >
                  {corporatePackages[key as keyof typeof corporatePackages].name}
                </button>
              ))}
            </div>

            {/* Selected Package Details */}
            <motion.div
              key={selectedPackage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {corporatePackages[selectedPackage as keyof typeof corporatePackages].name}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {corporatePackages[selectedPackage as keyof typeof corporatePackages].description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-4">Features Included:</h4>
                    <ul className="space-y-3">
                      {corporatePackages[selectedPackage as keyof typeof corporatePackages].features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <svg className="w-5 h-5 text-rolls-gold mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-rolls-gold font-semibold mb-4">Package Details:</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400">Available Vehicles:</p>
                        <p className="text-white font-medium">
                          {corporatePackages[selectedPackage as keyof typeof corporatePackages].vehicles.join(', ')}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Starting From:</p>
                        <p className="text-2xl font-bold text-rolls-gold">
                          {corporatePackages[selectedPackage as keyof typeof corporatePackages].startingPrice}
                        </p>
                      </div>
                      <button className="btn-primary w-full mt-6">
                        Request Custom Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Trusted by Leading Companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/30 rounded-lg p-6 text-center"
                >
                  <p className="text-white font-semibold">{client.name}</p>
                  <p className="text-rolls-gold text-sm mt-1">{client.sector}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8">
              + Many more prestigious organizations across the UAE
            </p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-rolls-gold mb-4">{study.client}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-400 uppercase">Challenge</p>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase">Solution</p>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase">Result</p>
                      <p className="text-white font-medium">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Benefits Grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Corporate Account Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rolls-gold mb-3">Financial Advantages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Volume-based discounts</li>
                  <li>• Monthly consolidated billing</li>
                  <li>• Flexible payment terms</li>
                  <li>• No deposit requirements</li>
                </ul>
              </div>
              
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rolls-gold mb-3">Operational Excellence</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Dedicated account manager</li>
                  <li>• Priority dispatch system</li>
                  <li>• Real-time tracking portal</li>
                  <li>• Detailed usage reports</li>
                </ul>
              </div>
              
              <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-rolls-gold mb-3">Service Guarantees</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 15-minute response time</li>
                  <li>• Backup vehicle provision</li>
                  <li>• 24/7 support hotline</li>
                  <li>• Service level agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Elevate Your Corporate Transportation
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that trust Rolls-Royce Dubai for their executive transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Speak to Corporate Team
              </motion.a>
              <button className="btn-secondary">
                Download Corporate Brochure
              </button>
            </div>
            
            {/* Contact Form Preview */}
            <div className="max-w-md mx-auto bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Inquiry</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-2 bg-rolls-black/30 border border-rolls-gold/20 rounded text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full px-4 py-2 bg-rolls-black/30 border border-rolls-gold/20 rounded text-white placeholder-gray-500"
                />
                <select className="w-full px-4 py-2 bg-rolls-black/30 border border-rolls-gold/20 rounded text-white">
                  <option>Select Package Interest</option>
                  <option>Executive Package</option>
                  <option>Conference & Events</option>
                  <option>Roadshow Package</option>
                  <option>Annual Partnership</option>
                </select>
                <button type="submit" className="btn-primary w-full">
                  Submit Inquiry
                </button>
              </form>
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
