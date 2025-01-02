import React from 'react';
import { TrendingUp, Users, BarChart, Target } from 'lucide-react';
import { typography } from '../../../styles/typography';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Views',
    description: 'Boost your video performance with thumbnails that attract more clicks'
  },
  {
    icon: Users,
    title: 'Grow Audience',
    description: 'Build a loyal following with consistent, professional thumbnails'
  },
  {
    icon: BarChart,
    title: 'Track Performance',
    description: 'Monitor thumbnail effectiveness with detailed analytics'
  },
  {
    icon: Target,
    title: 'Beat Competition',
    description: 'Stand out in search results and recommended videos'
  }
];

export function Benefits() {
  return (
    <section className="space-y-8">
      <h3 className={`${typography.heading} ${typography.sizes.h3} text-gray-900 text-center`}>
        Why Choose Our Thumbnail Analyzer
      </h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
              <benefit.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`${typography.heading} text-lg font-semibold text-gray-900`}>
                {benefit.title}
              </h4>
              <p className={`${typography.body} mt-1 text-gray-600`}>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}