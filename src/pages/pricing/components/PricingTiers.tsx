import React from 'react';
import { Check, Zap } from 'lucide-react';
import { PricingCard } from './PricingCard';
import type { PricingTier } from '../types';

export const tiers: PricingTier[] = [

  {
    name: 'Pro',
    price: 4.99,
    description: 'Best for content creators',
    features: [
      'Advanced AI analysis',
      'Unlimited analyses',
      'Batch processing',
      'Competitor analysis',
      'Priority support',
      'Custom branding'
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'gradient',
    popular: true
  },

];

export function PricingTiers() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {tiers.map((tier) => (
        <PricingCard key={tier.name} tier={tier} />
      ))}
    </div>
  );
}
