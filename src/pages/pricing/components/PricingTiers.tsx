import React from 'react';
import { Check, Zap } from 'lucide-react';
import { PricingCard } from './PricingCard';
import type { PricingTier } from '../types';

export const tiers: PricingTier[] = [
  {
    visibility : false,
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: [
      'Basic thumbnail analysis',
      'Standard metrics',
      'Limited to 5 analyses per day',
      'Community support'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline'
  },
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
  {
    visibility : false,
    name: 'Enterprise',
    price: 29.99,
    description: 'For teams and agencies',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'API access',
      'Custom integrations',
      'Dedicated support',
      'Analytics dashboard'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline'
  }
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
