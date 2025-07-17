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
      title: t('contact.contactMethods.call.title'),
      description: t('contact.contactMethods.call.description'),
      value: t('contact.contactMethods.call.value'),
      action: 'tel:+971558164922',
      color: 'bg-blue-500'
    },
    {
      icon: '💬',
      title: t('contact.contactMethods.whatsapp.title'),
      description: t('contact.contactMethods.whatsapp.description'),
      value: t('contact.contactMethods.whatsapp.value'),
      action: 'https://wa.me/971558164922',
      color: 'bg-green-500'
    },
    {
      icon: '📧',
      title: t('contact.contactMethods.email.title'),
      description: t('contact.contactMethods.email.description'),
      value: t('contact.contactMethods.email.value'),
      action: 'mailto:info@rollsroycers.com',
      color: 'bg-purple-500'
    },
    {
      icon: '📍',
      title: t('contact.contactMethods.office.title'),
      description: t('contact.contactMethods.office.description'),
      value: t('contact.contactMethods.office.value'),
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
                {t('contact.hero.title')}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                {t('contact.hero.description')}
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
              <h2 className="text-3xl font-bold text-white mb-8">{t('contact.form.title')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      {t('contact.form.name.label')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder={t('contact.form.name.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      {t('contact.form.email.label')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder={t('contact.form.email.placeholder')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">
                      {t('contact.form.phone.label')} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder={t('contact.form.phone.placeholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">
                      {t('contact.form.subject.label')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                      placeholder={t('contact.form.subject.placeholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    {t('contact.form.message.label')} *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold resize-none"
                    placeholder={t('contact.form.message.placeholder')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      {t('contact.form.preferredContact.label')}
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
                          <span className="text-gray-300">
                            {t(`contact.form.preferredContact.${method}`)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bestTime" className="block text-gray-300 mb-2">
                      {t('contact.form.bestTime.label')}
                    </label>
                    <select
                      id="bestTime"
                      value={formData.bestTime}
                      onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                      className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-rolls-gold"
                    >
                      <option value="morning">{t('contact.form.bestTime.morning')}</option>
                      <option value="afternoon">{t('contact.form.bestTime.afternoon')}</option>
                      <option value="evening">{t('contact.form.bestTime.evening')}</option>
                      <option value="anytime">{t('contact.form.bestTime.anytime')}</option>
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
                    {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-green-500"
                    >
                      {t('contact.form.success')}
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500"
                    >
                      {t('contact.form.error')}
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
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.businessHours.title')}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>{t('contact.businessHours.monday')}</span>
                    <span className="text-rolls-gold">{t('contact.businessHours.mondayHours')}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t('contact.businessHours.saturday')}</span>
                    <span className="text-rolls-gold">{t('contact.businessHours.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{t('contact.businessHours.sunday')}</span>
                    <span className="text-rolls-gold">{t('contact.businessHours.sundayHours')}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-700 mt-4">
                    <p className="text-green-500">{t('contact.businessHours.emergency')}</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.socialMedia.title')}
                </h3>
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
              {t('contact.faq.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {['q1', 'q2', 'q3', 'q4'].map((faqKey, index) => (
                <motion.div
                  key={faqKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-700 rounded-lg p-6"
                >
                  <h4 className="text-white font-semibold mb-2">
                    {t(`contact.faq.${faqKey}.question`)}
                  </h4>
                  <p className="text-gray-300">
                    {t(`contact.faq.${faqKey}.answer`)}
                  </p>
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