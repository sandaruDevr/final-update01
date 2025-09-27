import React, { useState } from 'react';

export function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email..."
        className="flex-1 px-6 py-3 rounded-full text-gray-800 bg-white border-2 border-transparent focus:border-primary-300 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}