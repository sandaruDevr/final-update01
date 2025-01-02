import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeminiConfig } from '../../config/gemini';

// Singleton instance of the Gemini client
export const geminiClient = new GoogleGenerativeAI(GeminiConfig.apiKey);