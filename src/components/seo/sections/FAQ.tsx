import React from 'react';
import { typography } from '../../../styles/typography';

const faqs = [
  {
    question: 'How does the thumbnail analyzer work?',
    answer: 'Our AI-powered analyzer evaluates multiple aspects of your thumbnail including clarity, composition, text readability, and emotional impact to provide comprehensive feedback.'
  },
  {
    question: 'What makes a good YouTube thumbnail?',
    answer: 'A good thumbnail should be clear, eye-catching, relevant to your content, and optimized for both mobile and desktop viewing. It should also maintain consistent branding.'
  },
  {
    question: 'How can I improve my thumbnail click-through rate?',
    answer: 'Focus on creating high-contrast designs, using compelling visuals, adding clear text, and ensuring your thumbnail accurately represents your content.'
  }
];

export function FAQ() {
  return (
    <section className="space-y-8">
      <h3 className={`${typography.heading} ${typography.sizes.h3} text-gray-900 text-center`}>
        Frequently Asked Questions
      </h3>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-2">
            <h4 className={`${typography.heading} text-lg font-semibold text-gray-900`}>
              {faq.question}
            </h4>
            <p className={`${typography.body} text-gray-600`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}