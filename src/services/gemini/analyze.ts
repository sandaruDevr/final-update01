import { geminiClient } from './client';
import { handleGeminiError } from './errors';
import { validateGeminiResponse } from './validation';
import { GeminiConfig } from '../../config/gemini';
import { GEMINI_CONFIG } from './config';
import { AnalysisError } from '../../utils/errors';
import { retryWithBackoff } from '../utils/retry';
import { sanitizeResponse } from './sanitizer';

export async function analyzeThumbnail(imageData: string, mimeType: string): Promise<string> {
  return retryWithBackoff(async () => {
    const model = geminiClient.getGenerativeModel({ 
      model: GEMINI_CONFIG.model,
      generationConfig: GEMINI_CONFIG.generation
    });

    const result = await model.generateContent([
      GeminiConfig.prompt,
      {
        inlineData: {
          data: imageData,
          mimeType,
        },
      },
    ]);

    if (!result.response) {
      throw new AnalysisError('No response received from Gemini API');
    }

    const rawText = result.response.text();
    if (!rawText) {
      throw new AnalysisError('Empty response from Gemini API');
    }

    // Sanitize and validate the response
    const cleanText = sanitizeResponse(rawText);
    validateGeminiResponse({ text: cleanText });
    
    return cleanText;
  }, GEMINI_CONFIG.retry);
}