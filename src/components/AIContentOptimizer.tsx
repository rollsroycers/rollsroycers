import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

interface AIContentOptimizerProps {
  pageKey: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  faq?: Array<{ question: string; answer: string }>;
  howTo?: {
    title: string;
    steps: string[];
  };
}

const AIContentOptimizer: React.FC<AIContentOptimizerProps> = ({
  pageKey,
  title,
  description,
  content,
  keywords,
  faq,
  howTo
}) => {
  const { t, i18n } = useTranslation('common');
  const currentLang = i18n.language || 'en';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      setIsVisible(true);
    }
  }, []);

  // AI-optimized content structure for search engines
  const aiContentStructure = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "articleBody": content,
    "keywords": keywords.join(', '),
    "inLanguage": currentLang,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://rollsroycers.com/${pageKey}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Rolls-Royce Dubai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rollsroycers.com/images/logo-512.png"
      }
    },
    ...(faq && {
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Frequently Asked Questions",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "See our comprehensive FAQ section below"
          }
        }
      ]
    }),
    ...(howTo && {
      "@type": "HowTo",
      "name": howTo.title,
      "step": howTo.steps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": `Step ${index + 1}`,
        "text": step
      }))
    })
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="ai-content-optimizer" style={{ display: 'none' }}>
      {/* AI-optimized structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aiContentStructure)
        }}
      />
      
      {/* AI-optimized content markers for search engines */}
      <div data-ai-content="true" data-page-key={pageKey}>
        <div data-ai-title="true">{title}</div>
        <div data-ai-description="true">{description}</div>
        <div data-ai-keywords="true">{keywords.join(', ')}</div>
        <div data-ai-body="true">{content}</div>
        
        {faq && (
          <div data-ai-faq="true">
            {faq.map((item, index) => (
              <div key={index} data-ai-question={item.question}>
                {item.answer}
              </div>
            ))}
          </div>
        )}
        
        {howTo && (
          <div data-ai-howto="true">
            <div data-ai-howto-title="true">{howTo.title}</div>
            {howTo.steps.map((step, index) => (
              <div key={index} data-ai-howto-step={index + 1}>
                {step}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIContentOptimizer;