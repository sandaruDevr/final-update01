export interface GeminiResponse {
  text: string;
  safetyRatings?: Array<{
    category: string;
    probability: string;
  }>;
}

export interface GeminiError {
  code: string;
  message: string;
  details?: unknown;
}