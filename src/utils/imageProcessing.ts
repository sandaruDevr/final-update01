import { validateImageFile } from './validation';
import { AnalysisError } from './errors';

interface ProcessedImage {
  mimeType: string;
  url: string;
  base64Data: string;
}

export async function processImageForAnalysis(file: File): Promise<ProcessedImage> {
  try {
    validateImageFile(file);
    
    const url = URL.createObjectURL(file);
    const base64Data = await convertToBase64(file);

    return {
      mimeType: file.type,
      url,
      base64Data,
    };
  } catch (error) {
    throw error instanceof Error 
      ? error 
      : new AnalysisError('Failed to process image');
  }
}

async function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    
    reader.onerror = () => {
      reject(new AnalysisError('Failed to read image file'));
    };
    
    reader.readAsDataURL(file);
  });
}