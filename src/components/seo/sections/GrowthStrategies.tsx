import React from 'react';
import { typography } from '../../../styles/typography';
import { strategies } from './growth/data';
import { StrategyCard } from './growth/StrategyCard';

export function GrowthStrategies() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className={`${typography.heading} ${typography.sizes.h2} text-gray-900`}>
          Grow Your Channel with Better Thumbnails
        </h2>
        <p className={`${typography.body} text-lg text-gray-600 mt-4 max-w-3xl mx-auto`}>
          Join thousands of content creators who use our free thumbnail analyzer to increase views and accelerate channel growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {strategies.map((strategy, index) => (
          <StrategyCard key={index} strategy={strategy} />
        ))}
      </div>
    </section>
  );
}