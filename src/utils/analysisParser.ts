import type { AnalysisResult } from '../types';
import { AnalysisError } from './errors';
import { validateMetrics } from './validation/analysisValidator';
import { cleanMarkdownText, sanitizeJsonString } from './text/cleaners';

export function parseAnalysisText(analysisText: string): AnalysisResult {
  try {
    // Clean and sanitize the response text
    const cleanedText = cleanMarkdownText(analysisText);
    const sanitizedText = sanitizeJsonString(cleanedText);
    
    const parsedData = JSON.parse(sanitizedText);
    
    // Validate the metrics structure
    validateMetrics(parsedData);

    return {
      metrics: {
        ...parsedData,
        overallScore: parsedData.overallScore
      },
    };
  } catch (error) {
    if (error instanceof AnalysisError) {
      throw error;
    }
    if (error instanceof SyntaxError) {
      throw new AnalysisError(`Invalid analysis format: malformed JSON response. Raw response:\n${analysisText}`);
    }
    throw new AnalysisError('Failed to parse analysis results');
  }
}