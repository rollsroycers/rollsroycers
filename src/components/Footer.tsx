import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Footer() {
  const { t } = useTranslation('common')
  const [dubaiTime, setDubaiTime] = useState('')

  // Update Dubai time every second
  useEffect(() => {
    const updateDubaiTime = () => {
      const dubaiTimeZone = 'Asia/Dubai'
      const now = new Date()
      const dubaiDate = new Intl.DateTimeFormat('en-US', {
        timeZone: dubaiTimeZone,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(now)
      setDubaiTime(dubaiDate)
    }

    // Update immediately
    updateDubaiTime()

    // Update every second
    const interval = setInterval(updateDubaiTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const fleetLinks = [
    { href: '/fleet/phantom', label: t('fleet.phantom.name'), icon: '👑' },
    { href: '/fleet/ghost', label: t('fleet.ghost.name'), icon: '🌟' },
    { href: '/fleet/cullinan', label: t('fleet.cullinan.name'), icon: '🏔️' },
    { href: '/fleet/dawn', label: t('fleet.dawn.name'), icon: '☀️' },
    { href: '/fleet/wraith', label: t('fleet.wraith.name'), icon: '⚡' }
  ]

  const serviceLinks = [
    { href: '/services/wedding', label: t('services.wedding.title'), icon: '💒' },
    { href: '/services/corporate', label: t('services.corporate.title'), icon: '💼' },
    { href: '/services/airport-transfer', label: t('services.airport.title'), icon: '✈️' },
    { href: '/services/chauffeur', label: t('services.chauffeur.title'), icon: '🎩' }
  ]

  const locationLinks = [
    { href: '/locations/downtown-dubai', label: t('locations.downtownDubai.nav'), icon: '🏙️' },
    { href: '/locations/dubai-marina', label: t('locations.dubaiMarina.nav'), icon: '🌊' },
    { href: '/locations/palm-jumeirah', label: t('locations.palmJumeirah.nav'), icon: '🌴' },
    { href: '/locations/business-bay', label: t('locations.businessBay.nav'), icon: '🏢' }
  ]

  const quickLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/gallery', label: t('nav.gallery') },
    { href: '/testimonials', label: t('nav.testimonials') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/faq', label: t('nav.faq') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/compare/rolls-royce-vs-bentley', label: t('home.explore.compare.title') },
    { href: '/contact', label: t('nav.contact') }
  ]

  const socialLinks = [
    { 
      href: 'https://facebook.com/rollsroycers', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      label: 'Facebook'
    },
    { 
      href: 'https://instagram.com/rollsroycers', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
        </svg>
      ),
      label: 'Instagram'
    },
    { 
      href: 'https://wa.me/971558164922', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      label: 'WhatsApp'
    },
    { 
      href: 'https://youtube.com/rollsroycers', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      label: 'YouTube'
    }
  ]

  return (
    <footer className="bg-rolls-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.jpg"
                alt="Rolls-Royce Dubai"
                width={60}
                height={60}
                className="rounded-full"
                style={{ height: 'auto' }}
                priority
              />
              <div>
                <h3 className="font-bold text-lg">{t('common.rollsRoyceDubai').split(' ')[0]}</h3>
                <p className="text-sm text-gray-400">{t('common.rollsRoyceDubai').split(' ')[1]}</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              {t('footer.about')}
            </p>
            {/* Social Links - Mobile Optimized */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-rolls-gold/10 rounded-full flex items-center justify-center hover:bg-rolls-gold hover:text-rolls-black transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Fleet Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-rolls-gold">{t('nav.fleet')}</h4>
            <ul className="space-y-2">
              {fleetLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-rolls-gold transition-colors text-sm"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-rolls-gold">{t('nav.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-rolls-gold transition-colors text-sm"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-rolls-gold">{t('nav.locations')}</h4>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="flex items-center space-x-2 text-gray-400 hover:text-rolls-gold transition-colors text-sm"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-rolls-gold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-rolls-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Optimized CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">{t('footer.support')}</p>
                <a href="tel:+971558164922" className="text-rolls-gold font-semibold hover:text-white transition-colors">
                  +971 55 816 4922
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">{t('footer.email')}</p>
                <a href="mailto:info@rollsroycers.com" className="text-rolls-gold font-semibold hover:text-white transition-colors">
                  info@rollsroycers.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-rolls-gold/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-rolls-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">{t('footer.showroom')}</p>
                <p className="text-rolls-gold font-semibold">{t('locations.downtownDubai.nav')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-rolls-black border-t border-gray-800 z-40">
        <div className="grid grid-cols-4 gap-0">
          <Link 
            href="/" 
            className="flex flex-col items-center justify-center py-3 hover:bg-rolls-gold/10 transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xs">{t('nav.home')}</span>
          </Link>
          
          <a 
            href="tel:+971558164922" 
            className="flex flex-col items-center justify-center py-3 hover:bg-rolls-gold/10 transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-xs">{t('footer.call')}</span>
          </a>
          
          <a 
            href="https://wa.me/971558164922" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 hover:bg-rolls-gold/10 transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="text-xs">{t('footer.whatsapp')}</span>
          </a>
          
          <Link 
            href="/booking" 
            className="flex flex-col items-center justify-center py-3 bg-rolls-gold text-rolls-black hover:bg-white transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold">{t('nav.booking')}</span>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4 pb-20 lg:pb-4">
        <div className="container mx-auto px-4">
          {/* Dubai Time Display */}
          <div className="flex items-center justify-center text-sm text-gray-300 mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-light">Dubai: {dubaiTime}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 Rolls-Royce Dubai. {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-rolls-gold transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-rolls-gold transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}