import { GetStaticProps } from 'next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'
import GEOOptimizer from '@/components/GEOOptimizer'
import SeoContentBlock from '@/components/SeoContentBlock'
import { createWhatsAppLinkProps } from '@/utils/whatsapp'

// Localized hero + UI labels kept inline (3 locales) so the page is self-contained;
// the main prose, FAQ and related links come from the localized SeoContentBlock.
const LABELS: Record<string, { h1: string; sub: string; fleetTitle: string; perDay: string; explore: string; cta: string; prices: string }> = {
  en: {
    h1: 'Luxury Car Rental Dubai',
    sub: 'Chauffeur-driven luxury & VIP car rental in Dubai — led by the Rolls-Royce fleet. From AED 3,800/day with free delivery, 24/7.',
    fleetTitle: 'Our Luxury Fleet',
    perDay: '/ day',
    explore: 'View details',
    cta: 'Book on WhatsApp',
    prices: 'View Prices',
  },
  ar: {
    h1: 'تأجير سيارات فاخرة في دبي',
    sub: 'تأجير سيارات فاخرة و VIP مع سائق في دبي — يقوده أسطول رولز رويس. من 3,800 درهم يومياً مع توصيل مجاني على مدار الساعة.',
    fleetTitle: 'أسطولنا الفاخر',
    perDay: '/ يوم',
    explore: 'عرض التفاصيل',
    cta: 'احجز عبر واتساب',
    prices: 'الأسعار',
  },
  ru: {
    h1: 'Аренда люкс авто в Дубае',
    sub: 'Аренда люксовых и VIP-автомобилей с водителем в Дубае — во главе с автопарком Rolls-Royce. От 3 800 AED в сутки, бесплатная подача, 24/7.',
    fleetTitle: 'Наш люксовый автопарк',
    perDay: '/ сутки',
    explore: 'Подробнее',
    cta: 'Бронь в WhatsApp',
    prices: 'Цены',
  },
}

const FLEET = [
  { name: 'Rolls-Royce Phantom', price: 'AED 5,800', href: '/fleet/phantom', image: '/images/Rolls-royce-phantom.jpg' },
  { name: 'Rolls-Royce Ghost', price: 'AED 3,800', href: '/fleet/ghost', image: '/images/Rolls-Royce_Ghost-2.jpg' },
  { name: 'Rolls-Royce Cullinan', price: 'AED 6,500', href: '/fleet/cullinan', image: '/images/Rolls-Royce-Cullinan_.jpg' },
  { name: 'Rolls-Royce Dawn', price: 'AED 5,500', href: '/fleet/dawn', image: '/images/Rolls-Royce_Dawn.jpg' },
  { name: 'Rolls-Royce Wraith', price: 'AED 5,000', href: '/fleet/wraith', image: '/images/wraith-coupe.jpg' },
  { name: 'Rolls-Royce Spectre', price: 'AED 7,500', href: '/fleet/spectre', image: '/images/2024_Rolls-Royce_Spectre.jpg' },
]

export default function LuxuryCarRentalDubaiPage() {
  const { i18n } = useTranslation('common')
  const lang = i18n.language || 'en'
  const L = LABELS[lang] || LABELS.en

  return (
    <>
      <SEO pageKey="other.luxury-car-rental-dubai" />
      <GEOOptimizer
        pageKey="other.luxury-car-rental-dubai"
        title="Luxury Car Rental Dubai"
        description="Chauffeur-driven luxury and VIP car rental in Dubai led by the Rolls-Royce fleet, from AED 3,800/day with free delivery, 24/7."
        entityType="Service"
        primaryTopic="Luxury Car Rental Dubai"
        contentSummary="Luxury and VIP car rental in Dubai with professional chauffeur and free delivery. The fleet is led by Rolls-Royce — Phantom, Ghost, Cullinan, Dawn, Wraith and the electric Spectre — from AED 3,800 per day, bookable 24/7 on WhatsApp."
        facts={[
          'Luxury car rental in Dubai from AED 3,800/day',
          'Chauffeur-driven, free delivery across Dubai',
          'Rolls-Royce fleet: Phantom, Ghost, Cullinan, Dawn, Wraith, Spectre',
          '24/7 multilingual WhatsApp booking',
        ]}
        faqs={[]}
      />

      <Layout>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/Rolls-Royce-black.jpg" alt={L.h1} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-rolls-black/70 via-rolls-black/50 to-rolls-black" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 className="heading-1 text-white mb-6">{L.h1}</h1>
            <p className="mobile-text text-gray-200 mb-8 max-w-2xl mx-auto">{L.sub}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a {...createWhatsAppLinkProps('general')} className="btn-primary">{L.cta}</a>
              <Link href="/pricing" className="btn-secondary">{L.prices}</Link>
            </div>
          </div>
        </section>

        {/* Fleet grid */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container">
            <h2 className="heading-2 text-white text-center mb-12">{L.fleetTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FLEET.map((car) => (
                <Link key={car.href} href={car.href} className="group block bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-rolls-gold/50 transition-colors">
                  <div className="relative h-56">
                    <Image src={car.image} alt={car.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{car.name}</h3>
                      <p className="text-rolls-gold text-sm mt-1">{car.price} <span className="text-gray-400">{L.perDay}</span></p>
                    </div>
                    <span className="text-rolls-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">{L.explore} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Localized SEO content + FAQ + related links */}
        <SeoContentBlock blockKey="luxury-car-rental-dubai" />

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'fleet', 'navigation', 'sb_luxury-car-rental-dubai', 'seo_other'])),
    },
  }
}
