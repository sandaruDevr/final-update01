import React, { useState } from 'react';
import { CircularProgress } from './charts/CircularProgress';
import { ImprovementTips } from './ImprovementTips';
import { useImprovementTips } from '../hooks/useImprovementTips';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { typography } from '../styles/typography';
import { animations } from '../styles/animations';
import type { MetricScore } from '../types/metrics';

interface MetricCardProps {
  title: string;
  metric: MetricScore;
}

export function MetricCard({ title, metric }: MetricCardProps) {
  const [showTips, setShowTips] = useState(false);
  const { tips, isLoading, fetchTips } = useImprovementTips();

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#22C55E';
    if (score >= 60) return '#EAB308';
    return '#EF4444';
  };

  const handleToggleTips = () => {
    setShowTips(!showTips);
    if (!showTips && tips.length === 0) {
      fetchTips(title, metric.score);
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 ${animations.scaleUp}`}>
      <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
        <h3 className={`${typography.heading} text-base sm:text-lg text-gray-900 leading-tight`}>{title}</h3>
        <CircularProgress 
          value={metric.score} 
          color={getScoreColor(metric.score)}
          size={40}
          strokeWidth={4}
        />
      </div>
      <p className={`${typography.body} text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2`}>{metric.feedback}</p>
      
      <button
        onClick={handleToggleTips}
        className="flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors"
      >
        {showTips ? (
          <>
            <ChevronUp className="h-4 w-4" />
            Hide tips
          </>
        ) : (
          <>
            <ChevronDown className="h-4 w-4" />
            Show tips
          </>
        )}
      </button>

      {showTips && (
        <div className={`mt-3 pt-3 border-t ${animations.slideUp}`}>
          <ImprovementTips tips={tips} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}