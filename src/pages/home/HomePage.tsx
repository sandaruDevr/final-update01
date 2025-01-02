import React from 'react';
import { MetaTags } from '../../components/seo/MetaTags';
import { UploadSection } from './components/UploadSection';
import { SeoContent } from '../../components/seo/SeoContent';
import { PricingFAQ } from '../pricing/components/PricingFAQ';
import { seoConfig } from '../../config/seo';

export function HomePage() {
  return (
    <>
      <MetaTags 
        title={seoConfig.pages.home.title}
        description={seoConfig.pages.home.description}
        keywords={seoConfig.pages.home.keywords}
      />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
          <UploadSection />
          <SeoContent />
          <PricingFAQ />
        </div>
      </div>
    </>
  );
}