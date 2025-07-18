import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import SocialProofNotifications from './SocialProofNotifications'
import VoiceSearch from './VoiceSearch'
import Breadcrumbs from './Breadcrumbs'
import { useTranslation } from 'next-i18next'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { i18n } = useTranslation()
  const dir = i18n.dir()

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <SocialProofNotifications />
      <VoiceSearch />
    </div>
  )
}