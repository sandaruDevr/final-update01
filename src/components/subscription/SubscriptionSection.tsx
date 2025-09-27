import React from 'react';
import { SubscriptionForm } from './SubscriptionForm';

export function SubscriptionSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-100 to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-500 to-primary-400 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Get In Touch!
          </h2>
          <p className="text-primary-100 text-center mb-8">
            Subscribe to get in touch and to enjoy discounts, promos and much more!
          </p>
          <SubscriptionForm />
        </div>
      </div>
    </section>
  );
}