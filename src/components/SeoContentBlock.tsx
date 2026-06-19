import Link from 'next/link'
import { useTranslation } from 'next-i18next'

interface SeoContentBlockProps {
  /** key under `seoBlocks` in common.json, e.g. "fleet-dawn" */
  blockKey: string
}

interface FaqItem { question: string; answer: string }
interface RelatedLink { label: string; href: string }
interface SeoBlock {
  heading?: string
  quickAnswer?: string
  keyFacts?: string[]
  body?: string[]
  faqs?: FaqItem[]
  related?: RelatedLink[]
}

// Section labels live here (3 locales) so the JSON content stays lean.
const LABELS: Record<string, { faq: string; related: string; keyFacts: string }> = {
  en: { faq: 'Frequently Asked Questions', related: 'Explore More', keyFacts: 'Key Facts' },
  ar: { faq: 'الأسئلة الشائعة', related: 'استكشف المزيد', keyFacts: 'حقائق سريعة' },
  ru: { faq: 'Часто задаваемые вопросы', related: 'Смотрите также', keyFacts: 'Ключевые факты' },
}

/**
 * Localized on-page SEO/AEO content block: a keyword-rich section, a visible
 * FAQ accordion (+ a single FAQPage schema), and related internal links.
 * Content is read from common.json `seoBlocks.<blockKey>` so it is fully i18n.
 * Renders nothing if the block is missing — safe to drop on any page.
 */
export default function SeoContentBlock({ blockKey }: SeoContentBlockProps) {
  const { t, i18n } = useTranslation('common')
  const raw = t(`seoBlocks.${blockKey}`, { returnObjects: true }) as unknown
  const block = raw && typeof raw === 'object' && !Array.isArray(raw) ? (raw as SeoBlock) : null
  if (!block || !block.heading) return null

  const lang = i18n.language || 'en'
  const labels = LABELS[lang] || LABELS.en
  const body = Array.isArray(block.body) ? block.body : []
  const faqs = Array.isArray(block.faqs) ? block.faqs : []
  const related = Array.isArray(block.related) ? block.related : []
  const keyFacts = Array.isArray(block.keyFacts) ? block.keyFacts : []
  const quickAnswer = typeof block.quickAnswer === 'string' ? block.quickAnswer : ''

  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  return (
    <section className="py-16 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container max-w-4xl">
        <h2 className="heading-2 text-white mb-6">{block.heading}</h2>

        {/* Answer-first lead (AEO): a direct, quotable answer for AI engines */}
        {quickAnswer && (
          <p className="faq-answer text-lg text-white/90 leading-relaxed mb-6 ltr:border-l-4 rtl:border-r-4 border-rolls-gold ltr:pl-4 rtl:pr-4">
            {quickAnswer}
          </p>
        )}

        {keyFacts.length > 0 && (
          <div className="mb-8 bg-white/5 border border-white/10 rounded-lg p-5">
            <h3 className="text-rolls-gold font-semibold mb-3">{labels.keyFacts}</h3>
            <ul className="space-y-2">
              {keyFacts.map((f, i) => (
                <li key={i} className="text-gray-300 flex gap-2">
                  <span className="text-rolls-gold" aria-hidden="true">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {body.map((p, i) => (
          <p key={i} className="text-gray-300 leading-relaxed mb-4">{p}</p>
        ))}

        {faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="heading-3 text-rolls-gold mb-6">{labels.faq}</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-white/5 border border-white/10 rounded-lg p-4">
                  <summary className="faq-question cursor-pointer text-white font-medium list-none flex justify-between items-center">
                    <span>{f.question}</span>
                    <span className="text-rolls-gold ml-4 rtl:ml-0 rtl:mr-4 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-answer text-gray-300 mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <nav className="mt-12" aria-label={labels.related}>
            <h2 className="heading-3 text-rolls-gold mb-4">{labels.related}</h2>
            <ul className="flex flex-wrap gap-3">
              {related.map((r, i) => (
                <li key={i}>
                  <Link
                    href={r.href}
                    className="inline-block px-4 py-2 border border-rolls-gold/40 text-rolls-gold rounded-sm hover:bg-rolls-gold hover:text-rolls-black transition-colors text-sm"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {faqSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        )}
      </div>
    </section>
  )
}
