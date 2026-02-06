import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [fleetOpen, setFleetOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const router = useRouter()
  const { t, i18n } = useTranslation('common')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇦🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ]

  const fleetItems = [
    { href: '/fleet/phantom', label: t('fleet.phantom.name'), icon: '👑' },
    { href: '/fleet/ghost', label: t('fleet.ghost.name'), icon: '🌟' },
    { href: '/fleet/cullinan', label: t('fleet.cullinan.name'), icon: '🏔️' },
    { href: '/fleet/dawn', label: t('fleet.dawn.name'), icon: '☀️' },
    { href: '/fleet/wraith', label: t('fleet.wraith.name'), icon: '⚡' }
  ]

  const serviceItems = [
    { href: '/services/wedding', label: t('services.wedding.title'), icon: '💒' },
    { href: '/services/corporate', label: t('services.corporate.title'), icon: '💼' },
    { href: '/services/airport-transfer', label: t('services.airport.title'), icon: '✈️' },
    { href: '/services/chauffeur', label: t('services.chauffeur.title'), icon: '🎩' },
    { href: '/services/events', label: t('services.events.title'), icon: '🎭' },
    { href: '/services/photoshoot', label: t('services.photoshoot.title'), icon: '📸' },
    { href: '/services/tours', label: t('services.tours.title'), icon: '🗺️' }
  ]

  const locationItems = [
    { href: '/locations/downtown-dubai', label: t('locations.downtownDubai.nav'), icon: '🏙️' },
    { href: '/locations/dubai-marina', label: t('locations.dubaiMarina.nav'), icon: '🌊' },
    { href: '/locations/palm-jumeirah', label: t('locations.palmJumeirah.nav'), icon: '🌴' },
    { href: '/locations/business-bay', label: t('locations.businessBay.nav'), icon: '🏢' },
    { href: '/locations/jbr', label: t('locations.jbr.nav'), icon: '🏖️' },
    { href: '/locations/difc', label: t('locations.difc.nav'), icon: '🏦' }
  ]

  const moreItems = [
    { href: '/gallery', label: t('nav.gallery'), icon: '📸' },
    { href: '/testimonials', label: t('nav.testimonials'), icon: '⭐' },
    { href: '/pricing', label: t('nav.pricing'), icon: '💰' },
    { href: '/faq', label: t('nav.faq'), icon: '❓' },
    { href: '/blog', label: t('nav.blog'), icon: '📖' },
    { href: '/compare/rolls-royce-vs-bentley', label: t('nav.compare'), icon: '⚖️' }
  ]

  const handleLanguageChange = (langCode: string) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: langCode })
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-rolls-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.jpg"
              alt="Rolls-Royce Dubai"
              width={40}
              height={40}
              className="rounded-full"
              priority
              style={{ width: '40px', height: '40px' }}
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              {t('common.rollsRoyceDubai')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-rolls-gold transition-colors">
              {t('nav.home')}
            </Link>

            {/* Fleet Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-rolls-gold transition-colors flex items-center space-x-1"
                onMouseEnter={() => setFleetOpen(true)}
                onMouseLeave={() => setFleetOpen(false)}
              >
                <span>{t('nav.fleet')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {fleetOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setFleetOpen(true)}
                    onMouseLeave={() => setFleetOpen(false)}
                    className="absolute top-full left-0 mt-2 w-48 bg-rolls-black/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden"
                  >
                    {fleetItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold transition-all"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-rolls-gold transition-colors flex items-center space-x-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>{t('nav.services')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-rolls-black/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden"
                  >
                    {serviceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold transition-all"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group">
              <button 
                className="text-white hover:text-rolls-gold transition-colors flex items-center space-x-1"
                onMouseEnter={() => setLocationsOpen(true)}
                onMouseLeave={() => setLocationsOpen(false)}
              >
                <span>{t('nav.locations')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {locationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onMouseEnter={() => setLocationsOpen(true)}
                    onMouseLeave={() => setLocationsOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-rolls-black/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden"
                  >
                    {locationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold transition-all"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-white hover:text-rolls-gold transition-colors">
              {t('nav.about')}
            </Link>

            <Link href="/contact" className="text-white hover:text-rolls-gold transition-colors">
              {t('nav.contact')}
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-rolls-gold transition-colors flex items-center space-x-1">
                <span>{t('nav.more')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-rolls-black/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold transition-all"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Language & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white hover:text-rolls-gold transition-colors">
                <span className="text-xl">{languages.find(lang => lang.code === i18n.language)?.flag}</span>
                <span className="text-sm">{languages.find(lang => lang.code === i18n.language)?.code.toUpperCase()}</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-40 bg-rolls-black/95 backdrop-blur-md rounded-lg shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex items-center space-x-3 px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold transition-all w-full text-left ${
                      i18n.language === lang.code ? 'bg-rolls-gold/10' : ''
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/booking"
              className="bg-rolls-gold text-rolls-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-all flex items-center space-x-2"
            >
              <span>📅</span>
              <span>{t('nav.book')}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none p-2 touch-action-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-rolls-black/95 backdrop-blur-md"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all touch-action-manipulation min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.home')}
                </Link>

                {/* Mobile Fleet Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setFleetOpen(!fleetOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all touch-action-manipulation min-h-[44px]"
                  >
                    <span>{t('nav.fleet')}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${fleetOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {fleetOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1"
                      >
                        {fleetItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-rolls-gold rounded-md transition-all touch-action-manipulation min-h-[44px]"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Services Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all"
                  >
                    <span>{t('nav.services')}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1"
                      >
                        {serviceItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-rolls-gold rounded-md transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Locations Accordion */}
                <div className="space-y-1">
                  <button
                    onClick={() => setLocationsOpen(!locationsOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all"
                  >
                    <span>{t('nav.locations')}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${locationsOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {locationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-1"
                      >
                        {locationItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-rolls-gold rounded-md transition-all"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/about"
                  className="block px-3 py-2 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.about')}
                </Link>

                <Link
                  href="/contact"
                  className="block px-3 py-2 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.contact')}
                </Link>

                {/* Mobile More Items */}
                <div className="border-t border-rolls-gold/20 pt-2 mt-2">
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-rolls-gold/20 hover:text-rolls-gold rounded-md transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Language Selector */}
                <div className="border-t border-rolls-gold/20 pt-2 mt-2">
                  <p className="px-3 py-2 text-gray-400 text-sm">{t('nav.language')}</p>
                  <div className="grid grid-cols-3 gap-2 px-3">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code)
                          setIsOpen(false)
                        }}
                        className={`flex items-center justify-center space-x-2 py-2 rounded-md transition-all ${
                          i18n.language === lang.code
                            ? 'bg-rolls-gold text-rolls-black'
                            : 'bg-rolls-gold/10 text-white hover:bg-rolls-gold/20'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-xs">{lang.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="px-3 pt-4">
                  <Link
                    href="/booking"
                    className="block w-full bg-rolls-gold text-rolls-black text-center py-4 rounded-full font-semibold hover:bg-white transition-all touch-action-manipulation min-h-[48px] flex items-center justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    📅 {t('nav.book')}
                  </Link>
                </div>

                {/* Mobile Quick Actions */}
                <div className="flex justify-around px-3 pt-4 gap-2">
                  <a
                    {...createWhatsAppLinkProps('general')}
                    className="flex flex-col items-center text-white hover:text-rolls-gold transition-colors p-2 touch-action-manipulation min-h-[44px] min-w-[44px] justify-center"
                  >
                    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-xs">Chat</span>
                  </a>
                  <a
                    {...createWhatsAppLinkProps('quote')}
                    className="flex flex-col items-center text-white hover:text-rolls-gold transition-colors p-2 touch-action-manipulation min-h-[44px] min-w-[44px] justify-center"
                  >
                    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span className="text-xs">{t('footer.whatsapp')}</span>
                  </a>
                  <Link
                    href="/pricing"
                    className="flex flex-col items-center text-white hover:text-rolls-gold transition-colors p-2 touch-action-manipulation min-h-[44px] min-w-[44px] justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">{t('nav.pricing')}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}