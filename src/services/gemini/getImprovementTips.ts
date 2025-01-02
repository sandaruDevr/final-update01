import { geminiClient } from './client';
import { handleGeminiError } from './errors';
import { GEMINI_CONFIG } from './config';
import { retryWithBackoff } from '../utils/retry';

export async function getImprovementTips(metric: string, currentScore: number): Promise<string> {
  return retryWithBackoff(async () => {
    const model = geminiClient.getGenerativeModel({ 
      model: GEMINI_CONFIG.model,
      generationConfig: {
        ...GEMINI_CONFIG.generation,
        maxOutputTokens: 256
      }
    });

    const prompt = `Provide 3 specific, actionable tips to improve the "${metric}" metric for a YouTube thumbnail that currently scores ${currentScore}/100. Keep each tip under 50 characters.`;

    const result = await model.generateContent(prompt);
    
    if (!result.response?.text()) {
      throw new Error('Failed to generate improvement tips');
    }

    return result.response.text()
      .split('\n')
      .filter(tip => tip.trim())
      .slice(0, 3)
      .join('\n');
  }, GEMINI_CONFIG.retry);
}