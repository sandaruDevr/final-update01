import type { ThumbnailMetrics } from '../../types/metrics';
import { AnalysisError } from '../errors';

const REQUIRED_METRICS = [
  'clarity',
  'contrast',
  'balance',
  'emotionalAppeal',
  'relevanceToTitle',
  'subjectFocus',
  'curiosityGap',
  'hooking',
  'modernApproach',
  'readability',
  'mobileOptimization',
  'engagementPotential'
] as const;

export function validateMetrics(metrics: unknown): asserts metrics is ThumbnailMetrics {
  if (!metrics || typeof metrics !== 'object') {
    throw new AnalysisError('Invalid analysis format: metrics must be an object');
  }

  // Validate overall score
  const overallScore = (metrics as any).overallScore;
  if (typeof overallScore !== 'number' || overallScore < 0 || overallScore > 100) {
    throw new AnalysisError('Invalid or missing overall score: must be a number between 0 and 100');
  }

  for (const metric of REQUIRED_METRICS) {
    const metricValue = (metrics as any)[metric];
    if (!metricValue) {
      throw new AnalysisError(`Missing required metric: ${metric}`);
    }
    if (typeof metricValue.score !== 'number' || typeof metricValue.feedback !== 'string') {
      throw new AnalysisError(`Invalid format for metric ${metric}: must have score (number) and feedback (string)`);
    }
    if (metricValue.score < 0 || metricValue.score > 100) {
      throw new AnalysisError(`Invalid score for ${metric}: must be between 0 and 100`);
    }
  }
}