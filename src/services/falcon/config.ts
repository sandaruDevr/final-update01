export const FALCON_CONFIG = {
  model: 'tiiuae/falcon-7b-instruct',
  apiKey: process.env.HUGGINGFACE_API_KEY || '',
  maxRetries: 3,
  temperature: 0.7,
  maxTokens: 500
} as const;