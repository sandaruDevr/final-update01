import React from 'react';
import { MetaTags } from '../../components/seo/MetaTags';
import { PricingTiers } from './components/PricingTiers';
import { PricingHeader } from './components/PricingHeader';
import { seoConfig } from '../../config/seo';

export function PricingPage() {
  return (
    <>
      <MetaTags 
        title={seoConfig.pages.pricing.title}
        description={seoConfig.pages.pricing.description}
        keywords={seoConfig.pages.pricing.keywords}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <PricingHeader />
          <PricingTiers />
        </div>
      </div>
    </>
  );
}