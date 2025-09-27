import { HfInference } from '@huggingface/inference';
import { FALCON_CONFIG } from './config';

export const falconClient = new HfInference(FALCON_CONFIG.apiKey);