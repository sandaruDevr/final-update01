import React, { useState } from 'react';
import { FAQItem } from './faq/FAQItem';
import { FAQHeader } from './faq/FAQHeader';
import { faqs } from './faq/data';
import { MessageCircle } from 'lucide-react';

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <FAQHeader />

      <div className="space-y-4 mb-12">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-4 py-2 mb-4 shadow-sm">
          <MessageCircle className="h-5 w-5 text-blue-500" />
          <span className="text-blue-700 font-medium">Need More Help?</span>
        </div>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Our team is here to help!
        </p>
        <a 
          href="mailto:sadaludev@gmail.com" 
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}