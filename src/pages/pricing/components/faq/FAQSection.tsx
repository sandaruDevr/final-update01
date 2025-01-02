import React from 'react';
import { FAQList } from './FAQList';
import { FAQHeader } from './FAQHeader';

export function FAQSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <FAQHeader />
        <FAQList />
      </div>
    </section>
  );
}