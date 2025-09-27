export const GEMINI_CONFIG = {
  model: 'gemini-2.5-flash',
  generation: {
    maxOutputTokens: 10000, // Further reduced to ensure complete responses
    temperature: 0.1,
    topK: 1,
    topP: 0.1
  },
  retry: {
    maxAttempts: 3,
    initialDelay: 500
  }
} as const;
