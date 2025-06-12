import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: '🏆' },
    { number: '50+', label: 'Luxury Vehicles', icon: '🚗' },
    { number: '10,000+', label: 'Happy Clients', icon: '😊' },
    { number: '24/7', label: 'Service Available', icon: '⏰' }
  ]

  const values = [
    {
      title: 'Uncompromising Quality',
      description: 'We maintain the highest standards in vehicle maintenance and service delivery',
      icon: '✨'
    },
    {
      title: 'Customer First',
      description: 'Your satisfaction is our primary goal, with personalized service for every client',
      icon: '🎯'
    },
    {
      title: 'Luxury Experience',
      description: 'Beyond transportation, we deliver unforgettable moments of pure luxury',
      icon: '💎'
    },
    {
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through consistent, dependable service',
      icon: '🤝'
    }
  ]

  const team = [
    {
      name: 'Ahmed Al Rashid',
      role: 'Founder & CEO',
      bio: 'With over 20 years in luxury automotive, Ahmed brings unparalleled expertise to Dubai\'s premium car rental market.',
      image: '/images/team/ceo.jpg'
    },
    {
      name: 'Sarah Mitchell',
      role: 'Operations Director',
      bio: 'Former Rolls-Royce executive ensuring our fleet meets the highest international standards.',
      image: '/images/team/operations.jpg'
    },
    {
      name: 'Mohammed Hassan',
      role: 'Head of Chauffeur Services',
      bio: 'Leading a team of 50+ elite chauffeurs with focus on excellence and discretion.',
      image: '/images/team/chauffeur-head.jpg'
    }
  ]

  const milestones = [
    { year: '2009', event: 'Company founded with 3 Rolls-Royce vehicles' },
    { year: '2013', event: 'Expanded fleet to 15 vehicles, introduced chauffeur services' },
    { year: '2016', event: 'Became official partner for Dubai luxury hotels' },
    { year: '2019', event: 'Launched corporate services division' },
    { year: '2021', event: 'Introduced contactless booking and digital services' },
    { year: '2024', event: 'Celebrating 15 years with 50+ vehicle fleet' }
  ]

  const certifications = [
    'Dubai Tourism Licensed',
    'ISO 9001:2015 Certified',
    'Luxury Travel Network Member',
    'Dubai Chamber Member',
    'RTA Approved Operator'
  ]

  return (
    <>
      <SEO pageKey="other.about" />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-official.jpg"
              alt="Rolls-Royce Dubai About Us"
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
                Our Story
              </h1>
              <p className="text-2xl text-rolls-gold mb-8">
                15 Years of Luxury Excellence in Dubai
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-8"
              >
                Welcome to Rolls-Royce Dubai
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-300 leading-relaxed mb-6"
              >
                Since 2009, Rolls-Royce Dubai has been the epitome of luxury car rental in the United Arab Emirates. 
                We don't just rent cars; we deliver experiences that embody the spirit of Rolls-Royce – 
                unparalleled luxury, exceptional service, and attention to every detail.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                From a modest beginning with three vehicles, we've grown to become Dubai's most trusted name 
                in luxury transportation, serving royalty, celebrities, business leaders, and discerning 
                travelers from around the world.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-rolls-gold mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-rolls-gold/30"></div>
                
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    } mb-8`}
                  >
                    <div className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                    }`}>
                      <div className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6">
                        <div className="text-rolls-gold font-bold text-xl mb-2">{milestone.year}</div>
                        <p className="text-gray-300">{milestone.event}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-rolls-gold rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-rolls-gold/20 flex items-center justify-center">
                    <svg className="w-20 h-20 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-rolls-gold mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Certifications & Memberships
            </h2>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-full px-6 py-3"
                >
                  <p className="text-white font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Rolls-Royce Dubai?
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-rolls-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Largest Fleet in UAE</h3>
                      <p className="text-gray-400">Over 50 meticulously maintained Rolls-Royce vehicles</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-rolls-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Premium Insurance</h3>
                      <p className="text-gray-400">Comprehensive coverage for complete peace of mind</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-rolls-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-400">Round-the-clock assistance in multiple languages</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-rolls-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Elite Chauffeurs</h3>
                      <p className="text-gray-400">Professional drivers trained in luxury service</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-rolls-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h3>
                      <p className="text-gray-400">No hidden fees, clear terms and conditions</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-rolls-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">VIP Treatment</h3>
                      <p className="text-gray-400">Red carpet service for every client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have chosen Rolls-Royce Dubai for their luxury transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call: +971 55 816 4922
              </motion.a>
              <Link href="/fleet" className="btn-secondary">
                View Our Fleet
              </Link>
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