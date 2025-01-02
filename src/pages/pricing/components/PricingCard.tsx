import React from 'react';
import { Check, Zap } from 'lucide-react';
import { BoltText } from '../../../components/typography/BoltText';
import type { PricingTier } from '../types';

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const handlePurchase = () => {
    // For enterprise, we might want to handle differently
    if (tier.name === 'Enterprise') {
      // TODO: Implement contact sales flow
      return;
    }
    
    // Navigate to payment page with plan parameter
    window.location.href = `/payment?plan=${encodeURIComponent(tier.name)}`;
  };

  return (
    <div className={`
      rounded-2xl p-8 h-full
      ${tier.popular 
        ? 'bg-gradient-to-b from-blue-50 to-white ring-2 ring-blue-500 shadow-xl' 
        : 'bg-white shadow-lg'
      }
    `}>
      {tier.popular && (
        <div className="flex items-center gap-1 text-blue-600 mb-4">
          <Zap className="h-5 w-5" />
          <span className="text-sm font-semibold">Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">
          <BoltText variant={tier.popular ? 'title' : 'subtitle'}>{tier.name}</BoltText>
        </h3>
        <p className="text-gray-600">{tier.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${tier.price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handlePurchase}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200
          ${tier.buttonVariant === 'gradient'
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
            : 'border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600'
          }
        `}
      >
        {tier.buttonText}
      </button>
    </div>
  );
}