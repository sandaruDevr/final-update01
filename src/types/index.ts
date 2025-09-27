import type { ThumbnailMetrics } from './metrics';

export interface AnalysisResult {
  metrics: ThumbnailMetrics;
}

export interface ThumbnailState {
  file: File | null;
  preview: string | null;
  analysis: AnalysisResult | null;
  isAnalyzing: boolean;
  error: string | null;
  debugInfo: string | null;
}