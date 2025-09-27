import React from 'react';
import { typography } from '../../../../styles/typography';
import type { Strategy } from './types';

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  const { icon: Icon, title, description } = strategy;
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className={`${typography.heading} text-lg font-semibold text-gray-900`}>
            {title}
          </h3>
          <p className={`${typography.body} mt-2 text-gray-600`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}