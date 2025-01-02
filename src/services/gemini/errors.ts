import { AnalysisError } from '../../utils/errors';

export class GeminiAPIError extends AnalysisError {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = 'GeminiAPIError';
  }
}

export function handleGeminiError(error: unknown): never {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    
    if (message.includes('permission_denied')) {
      throw new GeminiAPIError('API key is invalid or has insufficient permissions', 'PERMISSION_DENIED');
    }
    if (message.includes('resource_exhausted')) {
      throw new GeminiAPIError('API quota exceeded. Please try again later', 'QUOTA_EXCEEDED');
    }
    if (message.includes('invalid_argument')) {
      throw new GeminiAPIError('Invalid request format. Please check the image format and size', 'INVALID_REQUEST');
    }
    
    throw new GeminiAPIError(`Analysis failed: ${error.message}`);
  }
  
  throw new GeminiAPIError('An unexpected error occurred during analysis');
}