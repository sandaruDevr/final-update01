import React from 'react';
import { Lightbulb } from 'lucide-react';

interface ImprovementTipsProps {
  tips: string[];
  isLoading: boolean;
}

export function ImprovementTips({ tips, isLoading }: ImprovementTipsProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <ul className="space-y-2 text-sm text-gray-600">
      {tips.map((tip, index) => (
        <li key={index} className="flex items-start gap-2">
          <Lightbulb className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
          <span>{tip}</span>
        </li>
      ))}
    </ul>
  );
}