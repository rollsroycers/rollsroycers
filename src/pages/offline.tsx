import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from '@/lib/serverSideTranslations'

export default function OfflinePage() {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('offline.title')}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('offline.heading')}</h1>
          <p className="text-lg text-gray-600">{t('offline.message')}</p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}