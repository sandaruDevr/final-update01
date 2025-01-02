import { useMemo } from 'react';
import type { MetricScore } from '../../types/metrics';
import type { Suggestion } from './types';
import { metricDisplayNames } from './types';

export function useSuggestions(metrics: Record<string, MetricScore>): Suggestion[] {
  return useMemo(() => {
    const weakPoints = Object.entries(metrics)
      .filter(([key, metric]) => {
        // Skip the overall score
        if (key === 'overallScore') return false;
        // Consider scores below 70 as areas for improvement
        return metric.score < 70;
      })
      .sort((a, b) => a[1].score - b[1].score) // Sort by score ascending
      .slice(0, 3) // Get top 3 weakest areas
      .map(([key, metric]) => ({
        metric: metricDisplayNames[key] || key,
        score: metric.score,
        improvement: metric.feedback
      }));

    return weakPoints;
  }, [metrics]);
}