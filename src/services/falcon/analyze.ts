import { falconClient } from './client';
import { FALCON_CONFIG } from './config';
import { retryWithBackoff } from '../utils/retry';
import type { FalconResponse } from './types';

export async function analyzeThumbnailWithFalcon(imageBase64: string): Promise<string> {
  return retryWithBackoff(async () => {
    const response = await falconClient.textGeneration({
      model: FALCON_CONFIG.model,
      inputs: `Analyze this YouTube thumbnail and provide detailed feedback on its effectiveness:
              [Image: ${imageBase64}]`,
      parameters: {
        max_new_tokens: FALCON_CONFIG.maxTokens,
        temperature: FALCON_CONFIG.temperature,
        return_full_text: false,
      }
    }) as FalconResponse;

    return response.generated_text;
  }, {
    maxAttempts: FALCON_CONFIG.maxRetries,
    initialDelay: 1000
  });
}