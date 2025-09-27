import { useMemo } from 'react';
import type { MetricScore, ThumbnailMetrics } from '../../types/metrics';
import type { Suggestion } from './types';
import { metricDisplayNames } from './types';

export function useSuggestions(metrics: ThumbnailMetrics): Suggestion[] {
  return useMemo(() => {
    const weakPoints = Object.entries(metrics)
      .filter(([key, metric]) => {
        // Skip the overall score
        if (key === 'overallScore') return false;
        // Only process MetricScore objects
        if (typeof metric === 'number') return false;
        // Consider scores below 70 as areas for improvement
        return metric.score < 70;
      })
      .sort((a, b) => (a[1] as MetricScore).score - (b[1] as MetricScore).score) // Sort by score ascending
      .slice(0, 3) // Get top 3 weakest areas
      .map(([key, metric]) => ({
        metric: metricDisplayNames[key] || key,
        score: (metric as MetricScore).score,
        improvement: (metric as MetricScore).feedback
      }));

    return weakPoints;
  }, [metrics]);
}