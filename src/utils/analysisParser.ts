import type { AnalysisResult } from '../types';
import { AnalysisError } from './errors';
import { validateMetrics } from './validation/analysisValidator';
import { cleanMarkdownText, sanitizeJsonString } from './text/cleaners';

const METRIC_KEYS = [
  'overallScore',
  'ctrPrediction',
  'potentialCtr',
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

// Create lookup map for various key formats
const METRIC_KEY_LOOKUP = new Map([
  // Exact matches
  ...METRIC_KEYS.map((key) => [key.toLowerCase(), key] as const),
  // Common variations
  ['overall score', 'overallScore'],
  ['overallscore', 'overallScore'],
  ['curiosity gap', 'curiosityGap'],
  ['curiositygap', 'curiosityGap'],
  ['engagement potential', 'engagementPotential'],
  ['engagementpotential', 'engagementPotential'],
  ['emotional appeal', 'emotionalAppeal'],
  ['emotionalappeal', 'emotionalAppeal'],
  ['relevance to title', 'relevanceToTitle'],
  ['relevancetotitle', 'relevanceToTitle'],
  ['subject focus', 'subjectFocus'],
  ['subjectfocus', 'subjectFocus'],
  // Handle spaces and normalize
  ['eye-catching abilities', 'engagementPotential'], // Map this to engagement potential
  ['eye catching abilities', 'engagementPotential']
]);

function normalizeMetricKeys<T extends Record<string, unknown>>(data: T): T {
  const normalizedEntries = Object.entries(data ?? {}).map(([key, value]) => {
    const normalizedKey = METRIC_KEY_LOOKUP.get(key.toLowerCase()) ?? key;
    return [normalizedKey, value] as const;
  });

  return Object.fromEntries(normalizedEntries) as T;
}

function addMissingMetrics(data: any): any {
  const defaultMetric = { score: 0, feedback: "Not analyzed" };
  const requiredMetrics = [
    'clarity', 'contrast', 'balance', 'emotionalAppeal',
    'relevanceToTitle', 'subjectFocus', 'curiosityGap',
    'hooking', 'modernApproach', 'readability',
    'mobileOptimization', 'engagementPotential'
  ];

  const result = { ...data };
  
  // Ensure numeric values exist
  if (!result.overallScore && typeof result.overallScore !== 'number') {
    result.overallScore = 0;
  }
  if (!result.ctrPrediction && typeof result.ctrPrediction !== 'number') {
    result.ctrPrediction = 0;
  }
  if (!result.potentialCtr && typeof result.potentialCtr !== 'number') {
    result.potentialCtr = 0;
  }

  // Add missing metrics with default values
  for (const metric of requiredMetrics) {
    if (!result[metric]) {
      result[metric] = defaultMetric;
    }
  }

  return result;
}

export function parseAnalysisText(analysisText: string): AnalysisResult {
  try {
    // Clean and sanitize the response text
    const cleanedText = cleanMarkdownText(analysisText);
    const sanitizedText = sanitizeJsonString(cleanedText);
    
    const parsedData = JSON.parse(sanitizedText);
    const normalizedData = normalizeMetricKeys(parsedData);
    const completeData = addMissingMetrics(normalizedData);
    
    // Debug: Log the parsed data structure
    console.log('Parsed data keys:', Object.keys(parsedData));
    console.log('Normalized data keys:', Object.keys(normalizedData));
    console.log('Complete data keys:', Object.keys(completeData));
    
    // Validate the metrics structure
    validateMetrics(completeData);

    return {
      metrics: {
        ...completeData,
        overallScore: completeData.overallScore
      },
    };
  } catch (error) {
    if (error instanceof AnalysisError) {
      // Include raw response in error for debugging
      throw new AnalysisError(`${error.message}\n\nRaw response:\n${analysisText}`);
    }
    if (error instanceof SyntaxError) {
      throw new AnalysisError(`Invalid analysis format: malformed JSON response. Raw response:\n${analysisText}`);
    }
    throw new AnalysisError(`Failed to parse analysis results. Raw response:\n${analysisText}`);
  }
}