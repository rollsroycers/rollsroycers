import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CookieConsent from './CookieConsent'
import SocialProofNotifications from './SocialProofNotifications'
import VoiceSearch from './VoiceSearch'
import Breadcrumbs from './Breadcrumbs'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { locale } = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

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