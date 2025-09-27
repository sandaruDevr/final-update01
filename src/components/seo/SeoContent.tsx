import React from 'react';
import { Benefits } from './sections/Benefits';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { GrowthStrategies } from './sections/GrowthStrategies';
import { SuccessStories } from './sections/SuccessStories';
import { typography } from '../../styles/typography';
import { animations } from '../../styles/animations';

export function SeoContent() {
  return (
    <div className={`max-w-4xl mx-auto py-16 px-4 space-y-16 ${animations.fadeIn}`}>
      <section className="text-center space-y-4">
        <h2 className={`${typography.heading} ${typography.sizes.h2} text-gray-900`}>
          Create Better Thumbnails with Our Free AI Analyzer
        </h2>
        <p className={`${typography.body} text-lg text-gray-600 max-w-2xl mx-auto`}>
          Join thousands of successful YouTubers who use our free AI-powered analyzer
          to create thumbnails that attract more views, increase engagement, and grow their channels faster.
        </p>
      </section>

      <GrowthStrategies />
      <Benefits />
      <Features />
      <HowItWorks />
      <SuccessStories />
    </div>
  );
}