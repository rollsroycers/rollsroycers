import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Navbar from './Navbar'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'
import { useRouter } from 'next/router'

const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false })
const SocialProofNotifications = dynamic(() => import('./SocialProofNotifications'), { ssr: false })
const VoiceSearch = dynamic(() => import('./VoiceSearch'), { ssr: false })

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { locale } = useRouter()
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-rolls-gold focus:text-black focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <Breadcrumbs />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <SocialProofNotifications />
      <VoiceSearch />
    </div>
  )
}