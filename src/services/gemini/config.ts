export const GEMINI_CONFIG = {
  model: 'gemini-1.5-flash',
  generation: {
    maxOutputTokens: 1024, // Further reduced to ensure complete responses
    temperature: 0.1,
    topK: 1,
    topP: 0.1
  },
  retry: {
    maxAttempts: 3,
    initialDelay: 1000
  }
} as const;