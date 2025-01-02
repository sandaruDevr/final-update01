import type { ThumbnailMetrics } from '../../types';

export function calculateOverallScore(metrics: ThumbnailMetrics): number {
  const scores = Object.values(metrics)
    .filter(metric => 'score' in metric)
    .map(metric => metric.score);
    
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}