import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SEO from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'booking', name: 'Booking & Reservations', icon: '📅' },
    { id: 'requirements', name: 'Requirements', icon: '📄' },
    { id: 'pricing', name: 'Pricing & Payment', icon: '💰' },
    { id: 'vehicles', name: 'Vehicles', icon: '🚗' },
    { id: 'services', name: 'Services', icon: '🎯' },
    { id: 'policies', name: 'Policies', icon: '📜' }
  ]

  const faqs = [
    // Booking & Reservations
    {
      id: 1,
      category: 'booking',
      question: 'How do I book a Rolls-Royce in Dubai?',
      answer: 'Booking is simple! You can book online through our website, call us at +971 55 816 4922, or send us a WhatsApp message. We recommend booking at least 48 hours in advance to ensure availability of your preferred vehicle.'
    },
    {
      id: 2,
      category: 'booking',
      question: 'Can I book a Rolls-Royce for the same day?',
      answer: 'Yes, same-day bookings are possible subject to availability. However, we recommend booking in advance to secure your preferred vehicle. For urgent bookings, please call us directly for immediate assistance.'
    },
    {
      id: 3,
      category: 'booking',
      question: 'How far in advance should I book?',
      answer: 'For the best selection and guaranteed availability, we recommend booking at least 3-7 days in advance. During peak seasons (November to March) and for special events, booking 2-4 weeks ahead is advisable.'
    },
    {
      id: 4,
      category: 'booking',
      question: 'Can I modify or cancel my reservation?',
      answer: 'Yes, modifications are free up to 48 hours before your rental. Cancellations made 48+ hours in advance receive a full refund. Cancellations within 24-48 hours incur a 50% charge, and within 24 hours are non-refundable.'
    },
    // Requirements
    {
      id: 5,
      category: 'requirements',
      question: 'What documents do I need to rent a Rolls-Royce?',
      answer: 'You need: 1) Valid UAE driving license or international driving permit, 2) Passport copy, 3) UAE visa copy (for tourists), 4) Credit card for security deposit, 5) Proof of residence or hotel booking.'
    },
    {
      id: 6,
      category: 'requirements',
      question: 'What is the minimum age to rent?',
      answer: 'The minimum age is 25 years old. Drivers must have held a valid driving license for at least 3 years. For chauffeur services, there are no age restrictions for passengers.'
    },
    {
      id: 7,
      category: 'requirements',
      question: 'Do you accept international driving licenses?',
      answer: 'Yes, we accept valid international driving permits from most countries. Visitors from GCC countries, USA, UK, Canada, and most European countries can drive with their home country license for up to 6 months.'
    },
    {
      id: 8,
      category: 'requirements',
      question: 'Is a security deposit required?',
      answer: 'Yes, a refundable security deposit between AED 5,000-10,000 is required, depending on the vehicle. This is held on your credit card and released within 3-5 business days after the rental, pending no damages or violations.'
    },
    // Pricing & Payment
    {
      id: 9,
      category: 'pricing',
      question: 'What are your rental rates?',
      answer: 'Our rates vary by model: Phantom (AED 5,800/day), Ghost (AED 4,800/day), Cullinan (AED 6,500/day), Dawn (AED 5,500/day), Wraith (AED 5,000/day). Weekly and monthly rates offer significant discounts. Contact us for custom quotes.'
    },
    {
      id: 10,
      category: 'pricing',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), bank transfers, and cryptocurrency (Bitcoin, Ethereum). Corporate accounts with NET payment terms are available for qualified businesses.'
    },
    {
      id: 11,
      category: 'pricing',
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees! Our quoted price includes basic insurance, 250km daily allowance, and VAT. Additional charges only apply for extra mileage (AED 15/km), additional drivers, or optional services like chauffeur or delivery.'
    },
    {
      id: 12,
      category: 'pricing',
      question: 'Do you offer long-term rental discounts?',
      answer: 'Yes! Weekly rentals receive 10% discount, monthly rentals 20% discount, and 3+ months up to 30% discount. Corporate packages and seasonal promotions offer additional savings.'
    },
    // Vehicles
    {
      id: 13,
      category: 'vehicles',
      question: 'Which Rolls-Royce models are available?',
      answer: 'Our fleet includes the latest models: Phantom (flagship sedan), Ghost (executive sedan), Cullinan (luxury SUV), Dawn (convertible), and Wraith (grand tourer). All vehicles are less than 2 years old and maintained to perfection.'
    },
    {
      id: 14,
      category: 'vehicles',
      question: 'Can I choose specific colors or features?',
      answer: 'Yes, we have multiple colors available including black, white, silver, and special editions. Specific features like starlight headliner, Black Badge editions, or particular interior colors can be requested based on availability.'
    },
    {
      id: 15,
      category: 'vehicles',
      question: 'Are the vehicles insured?',
      answer: 'All vehicles come with comprehensive insurance coverage. This includes third-party liability and collision damage waiver. Personal accident insurance and zero-deductible options are available for additional peace of mind.'
    },
    {
      id: 16,
      category: 'vehicles',
      question: 'What is the fuel policy?',
      answer: 'Vehicles are provided with a full tank and should be returned full. If returned with less fuel, refueling charges apply at AED 20/liter. Our concierge can arrange refueling service for your convenience.'
    },
    // Services
    {
      id: 17,
      category: 'services',
      question: 'Do you provide chauffeur services?',
      answer: 'Yes, we offer professional chauffeur services with multilingual drivers trained in VIP protocol. Chauffeur service is AED 800-1200 additional per day depending on hours required. Hourly chauffeur rates are also available.'
    },
    {
      id: 18,
      category: 'services',
      question: 'Is delivery and pickup available?',
      answer: 'Complimentary delivery and pickup within Dubai city limits. Delivery to airports, hotels, and residences is included. For locations outside Dubai (Abu Dhabi, Sharjah, etc.), nominal delivery charges apply.'
    },
    {
      id: 19,
      category: 'services',
      question: 'Can I take the car outside UAE?',
      answer: 'Cross-border travel to Oman is possible with prior arrangement and additional insurance. Travel to other GCC countries requires special permits. Additional fees and documentation requirements apply.'
    },
    {
      id: 20,
      category: 'services',
      question: 'Do you offer wedding packages?',
      answer: 'Yes! Our wedding packages include decorated vehicles, uniformed chauffeur, red carpet service, and complimentary champagne. Multiple vehicle packages for wedding convoys are available with special rates.'
    },
    // Policies
    {
      id: 21,
      category: 'policies',
      question: 'What is your mileage policy?',
      answer: 'Each rental includes 250km per day. Additional kilometers are charged at AED 10/km. Unlimited mileage packages are available for weekly and monthly rentals at an additional cost.'
    },
    {
      id: 22,
      category: 'policies',
      question: 'What happens in case of an accident?',
      answer: 'Contact us immediately and file a police report. With our comprehensive insurance, you\'re covered for most incidents. Your liability is limited to the insurance excess amount, which varies by vehicle model.'
    },
    {
      id: 23,
      category: 'policies',
      question: 'Can I smoke in the vehicles?',
      answer: 'All our vehicles are strictly non-smoking to maintain their pristine condition. Violation of this policy results in a AED 1,500 cleaning fee. We can arrange stops for smoking breaks during chauffeur services.'
    },
    {
      id: 24,
      category: 'policies',
      question: 'What about traffic fines?',
      answer: 'You are responsible for all traffic violations during your rental period. Fines will be charged to your account with a AED 100 administrative fee. We recommend using our chauffeur service to avoid any violations.'
    }
  ]

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <>
      <SEO pageKey="other.faq" />

      <Layout>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/faq-hero.jpg"
              alt="Rolls-Royce FAQ"
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
                Frequently Asked Questions
              </h1>
              <p className="text-2xl text-rolls-gold">
                Everything You Need to Know
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <section className="py-8 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-white">Can't find your answer?</span>
                <a href="tel:+971558164922" className="text-rolls-gold hover:text-white transition-colors">
                  Call us: +971 55 816 4922
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <a href="https://wa.me/971558164922" target="_blank" rel="noopener noreferrer" className="text-rolls-gold hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-rolls-gold text-rolls-black'
                      : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:border-rolls-gold/40'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-rolls-gold/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <motion.svg
                      animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6 text-rolls-gold flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openQuestion === faq.id ? 'auto' : 0,
                      opacity: openQuestion === faq.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Popular Topics
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-white mb-4">First Time Renting?</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#5" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Required documents
                    </Link>
                  </li>
                  <li>
                    <Link href="#1" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → How to book
                    </Link>
                  </li>
                  <li>
                    <Link href="#9" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Pricing information
                    </Link>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-white mb-4">Pricing & Payment</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#11" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Hidden fees policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#10" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Payment methods
                    </Link>
                  </li>
                  <li>
                    <Link href="#12" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Long-term discounts
                    </Link>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-b from-rolls-gold/20 to-rolls-gold/10 border border-rolls-gold/30 rounded-lg p-8"
              >
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-white mb-4">Policies & Rules</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#21" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Mileage limits
                    </Link>
                  </li>
                  <li>
                    <Link href="#4" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Cancellation policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#22" className="text-gray-300 hover:text-rolls-gold transition-colors">
                      → Insurance coverage
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Answers */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Quick Answers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold text-rolls-gold mb-2">25+</p>
                <p className="text-white font-semibold mb-1">Minimum Age</p>
                <p className="text-gray-400 text-sm">With 3 years license</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold text-rolls-gold mb-2">250km</p>
                <p className="text-white font-semibold mb-1">Daily Allowance</p>
                <p className="text-gray-400 text-sm">AED 10/extra km</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold text-rolls-gold mb-2">48hrs</p>
                <p className="text-white font-semibold mb-1">Free Cancellation</p>
                <p className="text-gray-400 text-sm">Before rental</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-rolls-black/30 border border-rolls-gold/10 rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold text-rolls-gold mb-2">24/7</p>
                <p className="text-white font-semibold mb-1">Support Available</p>
                <p className="text-gray-400 text-sm">Phone & WhatsApp</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-12"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our team is here to help you 24/7. Contact us through your preferred channel.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <a
                    href="tel:+971558164922"
                    className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-lg p-6 hover:bg-rolls-gold/20 transition-colors"
                  >
                    <svg className="w-8 h-8 text-rolls-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-gray-400 text-sm mt-1">+971 55 816 4922</p>
                  </a>
                  
                  <a
                    href="https://wa.me/971558164922"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-lg p-6 hover:bg-rolls-gold/20 transition-colors"
                  >
                    <svg className="w-8 h-8 text-rolls-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-gray-400 text-sm mt-1">Quick Response</p>
                  </a>
                  
                  <a
                    href="mailto:info@rollsroycers.com"
                    className="bg-rolls-gold/10 border border-rolls-gold/20 rounded-lg p-6 hover:bg-rolls-gold/20 transition-colors"
                  >
                    <svg className="w-8 h-8 text-rolls-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-gray-400 text-sm mt-1">Detailed Inquiries</p>
                  </a>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary">
                    Contact Form
                  </Link>
                  <Link href="/booking" className="btn-secondary">
                    Book Now
                  </Link>
                </div>
              </motion.div>
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
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation"])),
    },
  }
}