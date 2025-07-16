import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SEO from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useTranslation } from 'next-i18next'

export default function ContactPage() {
  const { t } = useTranslation('common')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'phone',
    bestTime: 'morning'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'phone',
        bestTime: 'morning'
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      description: '24/7 Support Available',
      value: '+971 55 816 4922',
      action: 'tel:+971558164922',
      color: 'bg-blue-500'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick Response Guaranteed',
      value: '+971 55 816 4922',
      action: 'https://wa.me/971558164922',
      color: 'bg-green-500'
    },
    {
      icon: '📧',
      title: 'Email Us',
      description: 'We reply within 2 hours',
      value: 'info@rollsroycers.com',
      action: 'mailto:info@rollsroycers.com',
      color: 'bg-purple-500'
    },
    {
      icon: '📍',
      title: 'Visit Our Office',
      description: 'Mon-Sat: 9AM-8PM',
      value: 'Downtown Dubai, UAE',
      action: 'https://maps.google.com',
      color: 'bg-red-500'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'hover:bg-pink-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-blue-400' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-700' },
    { name: 'YouTube', icon: '📹', url: '#', color: 'hover:bg-red-600' }
  ]

  return (
    <Layout>
      <SEO pageKey="other.contact" />

      <div className="min-h-screen bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Rolls-royce-dubai.jpg"
              alt="Contact Rolls-Royce Dubai"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                We're here to make your luxury car rental experience extraordinary
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all hover:scale-105 group"
              >
                <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{method.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                <p className="text-rolls-gold font-medium">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder={t('placeholders.johnDoe')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder="+971 55 816 4922"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder={t('placeholders.rentalInquiry')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {['phone', 'email', 'whatsapp'].map((method) => (
                        <label key={method} className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                            className="mr-2 text-rolls-gold"
                          />
                          <span className="text-gray-300 capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bestTime" className="block text-gray-300 mb-2">
                      Best Time to Contact
                    </label>
                    <select
                      id="bestTime"
                      value={formData.bestTime}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                    >
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (5PM - 8PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-full font-semibold transition-all ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-rolls-gold text-black hover:bg-yellow-600'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-500"
                    >
                      ✓ Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500"
                    >
                      ✗ Failed to send. Please try again.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-gray-800 rounded-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.875374893958!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuNSJF!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Monday - Friday</span>
                    <span className="text-rolls-gold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Saturday</span>
                    <span className="text-rolls-gold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Sunday</span>
                    <span className="text-rolls-gold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-gray-700 mt-4">
                    <p className="text-green-500">📞 24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl transition-all hover:scale-110 ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: 'What documents do I need to rent?',
                  a: 'Valid UAE driving license or international driving permit, passport copy, and Emirates ID (for residents).'
                },
                {
                  q: 'Can I rent for just a few hours?',
                  a: 'Yes! We offer flexible hourly packages starting from 4 hours minimum.'
                },
                {
                  q: 'Do you provide airport pickup?',
                  a: 'Absolutely! We offer complimentary airport pickup and drop-off services.'
                },
                {
                  q: 'Is insurance included?',
                  a: 'Yes, comprehensive insurance is included in all our rental packages.'
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-700 rounded-lg p-6"
                >
                  <h4 className="text-white font-semibold mb-2">{faq.q}</h4>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WhatsAppButton />
      </div>
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