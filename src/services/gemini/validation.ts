import { GeminiAPIError } from './errors';
import type { GeminiResponse } from './types';

const TRUNCATION_INDICATORS = [
  '... (truncated)',
  '...',
  '…',
  '[truncated]',
  '[...]'
];

const REQUIRED_METRICS = [
  'clarity',
  'readability',
  'contrast',
  'balance',
  'emotionalAppeal',
  'relevanceToTitle',
  'brandingConsistency',
  'subjectFocus',
  'engagementPotential',
  'callToActionStrength'
] as const;

export function validateGeminiResponse(response: GeminiResponse): void {
  const { text } = response;
  
  if (!text) {
    throw new GeminiAPIError('No analysis results received from the API');
  }

  // Check for truncation indicators
  if (TRUNCATION_INDICATORS.some(indicator => text.includes(indicator))) {
    throw new GeminiAPIError('Received truncated response from API');
  }

  try {
    const parsed = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object') {
      throw new Error('Invalid response structure');
    }

    // Verify all required metrics are present with correct structure
    for (const metric of REQUIRED_METRICS) {
      const metricData = parsed[metric];
      
      if (!metricData) {
        throw new Error(`Missing metric: ${metric}`);
      }
      
      if (typeof metricData !== 'object') {
        throw new Error(`Invalid metric structure for ${metric}: expected object`);
      }
      
      if (typeof metricData.score !== 'number') {
        throw new Error(`Invalid score for ${metric}: expected number`);
      }
      
      if (typeof metricData.feedback !== 'string') {
        throw new Error(`Invalid feedback for ${metric}: expected string`);
      }
      
      // Validate score range
      if (metricData.score < 0 || metricData.score > 100) {
        throw new Error(`Score out of range for ${metric}: must be between 0 and 100`);
      }
    }
  } catch (error) {
    throw new GeminiAPIError(
      `Invalid JSON response: ${error instanceof Error ? error.message : 'unknown error'}`
    );
  }
}