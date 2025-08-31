import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout'
import WhatsAppButton from '@/components/WhatsAppButton'
import SEO from '@/components/SEO'

export default function CookiePolicyPage() {
  const { t } = useTranslation('pages')
  
  const getTranslatedArray = (key: string, fallback: string[]): string[] => {
    const translation = t(key, { returnObjects: true });
    if (Array.isArray(translation)) {
      return translation.filter((item): item is string => typeof item === 'string');
    }
    return fallback;
  };

  const sections = [
    {
      title: t('cookiePolicy.sections.whatAreCookies.title') || 'What Are Cookies?',
      content: getTranslatedArray('cookiePolicy.sections.whatAreCookies.content', [
        'Cookies are small text files stored on your device when you visit our website.',
        'They help us provide you with a personalized and efficient browsing experience.',
        'Cookies contain information about your preferences and website usage patterns.',
        'Most web browsers automatically accept cookies, but you can modify your browser settings to control them.'
      ])
    },
    {
      title: t('cookiePolicy.sections.typesOfCookies.title') || 'Types of Cookies We Use',
      subsections: [
        {
          subtitle: t('cookiePolicy.sections.typesOfCookies.essential.title') || 'Essential Cookies',
          content: getTranslatedArray('cookiePolicy.sections.typesOfCookies.essential.content', [
            'Required for basic website functionality and security',
            'Enable you to navigate the site and use key features',
            'Remember your booking information during sessions',
            'Cannot be disabled without affecting site functionality'
          ])
        },
        {
          subtitle: t('cookiePolicy.sections.typesOfCookies.analytics.title') || 'Analytics & Performance Cookies',
          content: getTranslatedArray('cookiePolicy.sections.typesOfCookies.analytics.content', [
            'Help us understand how visitors interact with our website',
            'Collect anonymous information about page views and user journeys',
            'Allow us to improve website performance and user experience',
            'Include Google Analytics and similar tools'
          ])
        },
        {
          subtitle: t('cookiePolicy.sections.typesOfCookies.functional.title') || 'Functional Cookies',
          content: getTranslatedArray('cookiePolicy.sections.typesOfCookies.functional.content', [
            'Remember your preferences and settings (language, currency)',
            'Personalize content based on your location and previous visits',
            'Enable enhanced features like live chat and contact forms',
            'Improve your overall browsing experience'
          ])
        },
        {
          subtitle: t('cookiePolicy.sections.typesOfCookies.marketing.title') || 'Marketing & Advertising Cookies',
          content: getTranslatedArray('cookiePolicy.sections.typesOfCookies.marketing.content', [
            'Track your visits across websites to build advertising profiles',
            'Display relevant ads based on your interests and behavior',
            'Measure the effectiveness of our marketing campaigns',
            'Enable retargeting and personalized advertising'
          ])
        }
      ]
    },
    {
      title: t('cookiePolicy.sections.specificCookies.title') || 'Specific Cookies We Use',
      subsections: [
        {
          subtitle: t('cookiePolicy.sections.specificCookies.google.title') || 'Google Services',
          content: getTranslatedArray('cookiePolicy.sections.specificCookies.google.content', [
            'Google Analytics: _ga, _gat, _gid for website analytics',
            'Google Maps: NID, PREF for location services and maps',
            'Google Ads: IDE, DSID for advertising and remarketing',
            'YouTube: VISITOR_INFO1_LIVE, YSC for embedded videos'
          ])
        },
        {
          subtitle: t('cookiePolicy.sections.specificCookies.social.title') || 'Social Media',
          content: getTranslatedArray('cookiePolicy.sections.specificCookies.social.content', [
            'Facebook: fr, sb, datr for Like buttons and social sharing',
            'Instagram: sessionid, csrftoken for embedded content',
            'WhatsApp Business: Various cookies for chat functionality',
            'LinkedIn: bcookie, bscookie for professional network features'
          ])
        },
        {
          subtitle: t('cookiePolicy.sections.specificCookies.booking.title') || 'Booking & Payment',
          content: getTranslatedArray('cookiePolicy.sections.specificCookies.booking.content', [
            'Session cookies to maintain your booking information',
            'Payment gateway cookies for secure transaction processing',
            'Preference cookies to remember your vehicle and service choices',
            'Security cookies to protect against fraud and unauthorized access'
          ])
        }
      ]
    },
    {
      title: t('cookiePolicy.sections.thirdParty.title') || 'Third-Party Cookies',
      content: getTranslatedArray('cookiePolicy.sections.thirdParty.content', [
        'Our website may contain links to third-party services (Google, Facebook, Instagram)',
        'These services may set their own cookies according to their privacy policies',
        'We do not control third-party cookies and recommend reviewing their policies',
        'Third-party cookies may track your behavior across multiple websites'
      ])
    },
    {
      title: t('cookiePolicy.sections.manageCookies.title') || 'How to Manage Cookies',
      subsections: [
        {
          subtitle: t('cookiePolicy.sections.manageCookies.browser.title') || 'Browser Settings',
          content: getTranslatedArray('cookiePolicy.sections.manageCookies.browser.content', [
            'Chrome: Settings > Privacy and Security > Cookies and other site data',
            'Safari: Preferences > Privacy > Manage Website Data',
            'Firefox: Options > Privacy & Security > Cookies and Site Data',
            'Edge: Settings > Site permissions > Cookies and site data'
          ])
        },
        {
          subtitle: t('cookiePolicy.sections.manageCookies.optOut.title') || 'Opt-Out Tools',
          content: getTranslatedArray('cookiePolicy.sections.manageCookies.optOut.content', [
            'Google Analytics Opt-out Browser Add-on',
            'Facebook Ad Preferences to control advertising cookies',
            'Your Online Choices (youronlinechoices.eu) for EU users',
            'Network Advertising Initiative (networkadvertising.org) opt-out tools'
          ])
        }
      ]
    },
    {
      title: t('cookiePolicy.sections.impact.title') || 'Impact of Disabling Cookies',
      content: getTranslatedArray('cookiePolicy.sections.impact.content', [
        'Some website features may not work properly without essential cookies',
        'You may need to re-enter information on each visit',
        'Personalized content and recommendations will not be available',
        'Analytics cookies help us improve our services - disabling them affects our ability to enhance user experience'
      ])
    },
    {
      title: t('cookiePolicy.sections.consent.title') || 'Cookie Consent',
      content: getTranslatedArray('cookiePolicy.sections.consent.content', [
        'By continuing to use our website, you consent to our use of cookies',
        'You can withdraw consent at any time by changing your browser settings',
        'We may ask for specific consent for certain types of cookies',
        'Essential cookies will continue to be used for basic functionality'
      ])
    },
    {
      title: t('cookiePolicy.sections.updates.title') || 'Policy Updates',
      content: getTranslatedArray('cookiePolicy.sections.updates.content', [
        'We may update this Cookie Policy periodically to reflect changes in technology or regulations',
        'Significant changes will be notified through our website or email',
        'The "Last Updated" date at the top shows when changes were made',
        'Continued use of our website after updates constitutes acceptance of changes'
      ])
    }
  ]

  const lastUpdated = t('cookiePolicy.lastUpdated') || 'January 1, 2025'

  return (
    <>
      <SEO pageKey="other.cookie-policy" />
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
                {t('cookiePolicy.hero.title') || 'Cookie Policy'}
              </h1>
              <p className="text-xl text-rolls-gold">
                {t('cookiePolicy.hero.subtitle') || 'Understanding Our Cookie Usage'}
              </p>
              <p className="text-gray-400 mt-4">
                {t('cookiePolicy.hero.lastUpdated') || 'Last Updated'}: {lastUpdated}
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
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t('cookiePolicy.introduction.title') || 'About This Cookie Policy'}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('cookiePolicy.introduction.content1') || 'This Cookie Policy explains how Rolls-Royce Dubai uses cookies and similar tracking technologies on our website. We are committed to being transparent about our data practices and helping you understand how cookies enhance your browsing experience.'}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('cookiePolicy.introduction.content2') || 'This policy works in conjunction with our Privacy Policy and Terms & Conditions to provide you with comprehensive information about how we handle your information.'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cookie Sections */}
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
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    {section.title}
                  </h2>
                  
                  {section.content && (
                    <ul className="space-y-3 mb-6">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="text-rolls-gold mr-3 mt-1">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-medium text-rolls-gold mb-3">
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {subsection.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-300">
                            <span className="text-rolls-gold mr-3 mt-1">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t('cookiePolicy.contact.title') || 'Questions About Cookies?'}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('cookiePolicy.contact.subtitle') || 'If you have any questions about our use of cookies, please contact us:'}
                </p>
                <div className="space-y-3 text-gray-300">
                  <p>
                    <span className="text-rolls-gold">Email:</span> privacy@rollsroycers.com
                  </p>
                  <p>
                    <span className="text-rolls-gold">Phone:</span> +971 55 816 4922
                  </p>
                  <p>
                    <span className="text-rolls-gold">Address:</span> Rolls-Royce Dubai, Downtown Dubai, UAE
                  </p>
                  <p>
                    <span className="text-rolls-gold">Response Time:</span> Within 48 hours
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
                  {t('cookiePolicy.acceptance.title') || 'Cookie Acceptance'}
                </h2>
                <p className="text-gray-300 mb-4">
                  {t('cookiePolicy.acceptance.subtitle') || 'By using our website, you acknowledge that:'}
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You understand how we use cookies on our website
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You can manage your cookie preferences through browser settings
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Some cookies are essential for website functionality
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rolls-gold mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    We respect your privacy and follow data protection regulations
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gradient-to-b from-rolls-black to-rolls-navy">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Related Policies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/privacy"
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-white">Privacy Policy</p>
                </Link>
                
                <Link 
                  href="/terms"
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-white">Terms & Conditions</p>
                </Link>
                
                <Link 
                  href="/contact"
                  className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-4 text-center hover:border-rolls-gold/40 transition-colors"
                >
                  <svg className="w-8 h-8 text-rolls-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white">Contact Us</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-rolls-navy to-rolls-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience Luxury with Rolls-Royce Dubai
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Now that you understand our cookie policy, explore our exceptional fleet and book your luxury experience.
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
      ...(await serverSideTranslations(locale || 'en', ["common", "nav", "footer", "pages"])),
    },
  }
}

