import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function TermsPage() {
  const { t } = useTranslation('common')
  
  const getTranslatedArray = (key: string, fallback: string[]): string[] => {
    const translation = t(key, { returnObjects: true });
    return Array.isArray(translation) ? translation : fallback;
  };

  const sections = [
    {
      title: t('terms.sections.rentalAgreement.title') || 'Rental Agreement',
      content: getTranslatedArray('terms.sections.rentalAgreement.content', [
        'The rental period begins when the vehicle is delivered or picked up.',
        'Extensions must be approved 24 hours in advance.',
        'Early returns are subject to the full rental period charge.',
        'All rentals require a signed agreement and valid documentation.'
      ])
    },
    {
      title: t('terms.sections.driverRequirements.title') || 'Driver Requirements',
      content: getTranslatedArray('terms.sections.driverRequirements.content', [
        'Minimum age of 25 years for all luxury vehicles.',
        'Valid UAE driving license or international driving permit required.',
        'Clean driving record with no major violations in the past 3 years.',
        'Additional drivers must be pre-approved and meet all requirements.'
      ])
    },
    {
      title: t('terms.sections.securityDeposit.title') || 'Security Deposit',
      content: getTranslatedArray('terms.sections.securityDeposit.content', [
        'Security deposit of AED 10,000 - 25,000 depending on vehicle model.',
        'Deposit is fully refundable upon safe return of the vehicle.',
        'Processing time for deposit return is 14-21 business days.',
        'Deposit covers minor damages and traffic fines.'
      ])
    },
    {
      title: t('terms.sections.insuranceCoverage.title') || 'Insurance Coverage',
      content: getTranslatedArray('terms.sections.insuranceCoverage.content', [
        'Comprehensive insurance included with all rentals.',
        'Excess liability of AED 5,000 - 15,000 depending on vehicle.',
        'Insurance does not cover negligent or reckless driving.',
        'Personal belongings are not covered under vehicle insurance.'
      ])
    },
    {
      title: t('terms.sections.usageRestrictions.title') || 'Usage Restrictions',
      content: getTranslatedArray('terms.sections.usageRestrictions.content', [
        'Vehicles must not be used for racing, rallying, or any illegal activities.',
        'Smoking is strictly prohibited in all vehicles.',
        'Pets are not allowed without prior approval and additional fees.',
        'Cross-border travel requires special permission and documentation.'
      ])
    },
    {
      title: t('terms.sections.fuelPolicy.title') || 'Fuel Policy',
      content: getTranslatedArray('terms.sections.fuelPolicy.content', [
        'Vehicles are provided with a full tank of premium fuel.',
        'Vehicles must be returned with the same fuel level.',
        'Refueling charges apply at AED 10 per liter plus service fee.',
        'Only premium grade fuel (98 octane or higher) must be used.'
      ])
    },
    {
      title: t('terms.sections.mileageAllowance.title') || 'Mileage Allowance',
      content: getTranslatedArray('terms.sections.mileageAllowance.content', [
        'Daily rentals include 250 km per day.',
        'Weekly rentals include 1,500 km per week.',
        'Monthly rentals include 4,500 km per month.',
        'Excess mileage charged at AED 15 per kilometer.'
      ])
    },
    {
      title: t('terms.sections.cancellationPolicy.title') || 'Cancellation Policy',
      content: getTranslatedArray('terms.sections.cancellationPolicy.content', [
        'Free cancellation up to 48 hours before rental start.',
        '50% charge for cancellations within 24-48 hours.',
        'Full charge for cancellations within 24 hours.',
        'No-shows forfeit the full rental amount.'
      ])
    },
    {
      title: t('terms.sections.trafficFines.title') || 'Traffic Fines & Violations',
      content: getTranslatedArray('terms.sections.trafficFines.content', [
        'Renter is responsible for all traffic fines during rental period.',
        'AED 250 administration fee per violation.',
        'Fines will be charged to the security deposit or credit card.',
        'Serious violations may result in immediate rental termination.'
      ])
    },
    {
      title: t('terms.sections.vehicleReturn.title') || 'Vehicle Return',
      content: getTranslatedArray('terms.sections.vehicleReturn.content', [
        'Vehicles must be returned at the agreed time and location.',
        'Late returns charged at hourly rate plus 50% surcharge.',
        'Vehicle must be returned in the same condition as delivered.',
        'Cleaning fees apply for excessively dirty vehicles (AED 500+).'
      ])
    },
    {
      title: t('terms.sections.liability.title') || 'Liability & Indemnification',
      content: getTranslatedArray('terms.sections.liability.content', [
        'Renter assumes full liability for the vehicle during rental period.',
        'Company is not liable for personal injury or property damage.',
        'Renter indemnifies company against all claims and losses.',
        'Maximum liability limited to the security deposit amount.'
      ])
    },
    {
      title: t('terms.sections.governingLaw.title') || 'Governing Law',
      content: getTranslatedArray('terms.sections.governingLaw.content', [
        'These terms are governed by UAE federal and Dubai local laws.',
        'Disputes shall be resolved through Dubai Courts.',
        'English version of terms prevails in case of translation conflicts.',
        'Invalid provisions shall not affect remaining terms.'
      ])
    }
  ]

  const lastUpdated = t('terms.lastUpdated') || 'January 1, 2025'

  return (
    <>
      <SEO pageKey="other.terms" />
      <Layout>
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-rolls-black to-rolls-navy"></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-rolls-gold">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8 mb-8"
              >
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Rolls-Royce Dubai. These terms and conditions outline the rules and regulations 
                  for the use of our luxury car rental services. By accessing our services and renting a vehicle, 
                  you accept these terms and conditions in full. If you disagree with any part of these terms, 
                  please do not use our services.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-rolls-black/30 backdrop-blur-sm border border-rolls-gold/10 rounded-lg p-8"
                >
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content && section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-rolls-gold mr-3 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-rolls-gold">Phone:</span> +971 55 816 4922
                  </p>
                  <p>
                    <span className="text-rolls-gold">Email:</span> legal@rollsroycers.com
                  </p>
                  <p>
                    <span className="text-rolls-gold">Address:</span> Downtown Dubai, UAE
                  </p>
                  <p>
                    <span className="text-rolls-gold">Office Hours:</span> 24/7 Customer Service
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  By proceeding with a rental, you acknowledge that:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You have read and understood these terms and conditions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You agree to be bound by these terms
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You meet all eligibility requirements
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You will comply with all applicable laws and regulations
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you agree to our terms and conditions, proceed to book your Rolls-Royce experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+971558164922"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Call: +971 55 816 4922
              </motion.a>
              <Link href="/fleet" className="btn-secondary">
                View Our Fleet
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-8">
              By booking, you agree to these terms and conditions
            </p>
          </div>
        </section>

        <WhatsAppButton />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ["common","seo","navigation","pages"])),
    },
  }
}