import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    car: '',
    date: '',
    duration: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        car: '',
        date: '',
        duration: '',
        message: ''
      })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-rolls-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-white mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name.placeholder')}
                    required
                    className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                    required
                    className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phone.placeholder')}
                    required
                    className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors"
                  >
                    <option value="">{t('contact.form.car')}</option>
                    <option value="phantom">Rolls-Royce Phantom</option>
                    <option value="cullinan">Rolls-Royce Cullinan</option>
                    <option value="ghost">Rolls-Royce Ghost</option>
                    <option value="dawn">Rolls-Royce Dawn</option>
                    <option value="wraith">Rolls-Royce Wraith</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder={t('contact.form.date')}
                    required
                    className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder={t('contact.form.duration')}
                    required
                    className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message.placeholder')}
                  rows={4}
                  className="w-full px-6 py-4 bg-rolls-navy/50 border border-rolls-gold/20 rounded-sm text-white placeholder-gray-400 focus:border-rolls-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <span className="loader mr-3" />
                      Processing...
                    </span>
                  ) : (
                    t('contact.form.submit')
                  )}
                </button>
              </div>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  {t('contact.form.success')}
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  {t('contact.form.error')}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="bg-rolls-navy/30 p-8 rounded-lg glass-effect">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t('contact.info.phone')}
              </h3>
              <a
                href="tel:+971558164922"
                className="text-3xl font-bold text-rolls-gold hover:text-rolls-gold/80 transition-colors"
              >
                +971 55 816 4922
              </a>
              <p className="text-gray-400 mt-4">
                {t('contact.cta')}
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rolls-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{t('contact.info.email')}</h4>
                  <a href="mailto:info@rollsroycers.com" className="text-gray-400 hover:text-rolls-gold transition-colors">
                    info@rollsroycers.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rolls-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{t('contact.info.address')}</h4>
                  <p className="text-gray-400">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-rolls-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-rolls-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{t('contact.info.hours')}</h4>
                  <p className="text-gray-400">{t('contact.info.hours')}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-rolls-navy/30 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-400">Dubai, UAE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}