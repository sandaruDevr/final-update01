import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeminiConfig } from '../../config/gemini';

// Singleton instance of the Gemini client
const apiKey = GeminiConfig.apiKey;

if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length === 0) {
  throw new Error(
    'Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file and restart the dev server.'
  );
}

export const geminiClient = new GoogleGenerativeAI(apiKey);