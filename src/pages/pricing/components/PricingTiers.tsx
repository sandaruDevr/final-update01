import React from 'react';
import { PricingCard } from './PricingCard';
import type { PricingTier } from '../types';

export const tiers: PricingTier[] = [
  {
    visibility: false,
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
    price: 5.99,
    description: 'Best for content creators',
    features: [
      'Advanced AI analysis',
      'Advanced AI analysis',
      'Advanced YouTube Previews ',
      'Access to Affiliate Program  ',
      'Priority support',
      'Custom branding'
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'gradient',
    popular: true
  },
  {
    visibility: false,
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
  // Filter out hidden plans
  const visibleTiers = tiers.filter((tier) => tier.visibility !== false);

  return (
    <div
      className={`gap-8 mb-16 ${
        visibleTiers.length === 1
          ? 'flex justify-center' // Center if only one pricing card is visible
          : 'grid md:grid-cols-3'
      }`}
    >
      {visibleTiers.map((tier) => (
        <PricingCard key={tier.name} tier={tier} />
      ))}
    </div>
  );
}
