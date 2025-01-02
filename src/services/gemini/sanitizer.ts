import { AnalysisError } from '../../utils/errors';

export function sanitizeResponse(text: string): string {
  try {
    // Remove markdown code blocks
    let cleaned = text.replace(/```(json)?\n?/g, '');
    
    // Find the first { and last }
    const firstBrace = cleaned.indexOf('{');
    const lastBrace = cleaned.lastIndexOf('}');
    
    if (firstBrace === -1 || lastBrace === -1) {
      throw new AnalysisError('Invalid response format: missing JSON object');
    }
    
    // Extract only the JSON object
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
    
    // Remove any non-JSON content
    try {
      const parsed = JSON.parse(cleaned);
      return JSON.stringify(parsed);
    } catch {
      throw new AnalysisError('Invalid JSON structure in response');
    }
  } catch (error) {
    if (error instanceof AnalysisError) {
      throw error;
    }
    throw new AnalysisError('Failed to sanitize API response');
  }
}