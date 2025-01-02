import React from 'react';
import { typography } from '../../../styles/typography';

const features = [
  {
    category: 'Analysis',
    items: [
      'AI-powered image recognition',
      'Color scheme optimization',
      'Text readability scoring',
      'Composition analysis'
    ]
  },
  {
    category: 'Optimization',
    items: [
      'Real-time feedback',
      'Actionable suggestions',
      'A/B testing support',
      'Best practices guidelines'
    ]
  },
  {
    category: 'Performance',
    items: [
      'Click-through rate prediction',
      'Engagement metrics',
      'Competitor analysis',
      'Trend alignment'
    ]
  }
];

export function Features() {
  return (
    <section className="space-y-8">
      <h3 className={`${typography.heading} ${typography.sizes.h3} text-gray-900 text-center`}>
        Comprehensive Analysis Tools
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <h4 className={`${typography.heading} text-lg font-semibold text-blue-600`}>
              {feature.category}
            </h4>
            <ul className="space-y-2">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className={`${typography.body} text-gray-600 flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}