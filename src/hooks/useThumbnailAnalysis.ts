import { useState, useCallback } from 'react';
import { analyzeThumbnail } from '../utils/gemini';
import { processImageForAnalysis } from '../utils/imageProcessing';
import { parseAnalysisText } from '../utils/analysisParser';
import type { ThumbnailState } from '../types';
import { AnalysisError, ValidationError } from '../utils/errors';

const initialState: ThumbnailState = {
  file: null,
  preview: null,
  analysis: null,
  isAnalyzing: false,
  error: null,
  debugInfo: null,
};

export function useThumbnailAnalysis() {
  const [state, setState] = useState<ThumbnailState>(initialState);

  const handleFileSelect = useCallback(async (file: File) => {
    try {
      setState(prev => ({
        ...prev,
        file,
        isAnalyzing: true,
        error: null,
        debugInfo: null,
      }));

      const { url, base64Data, mimeType } = await processImageForAnalysis(file);
      
      setState(prev => ({
        ...prev,
        preview: url,
      }));

      const analysisText = await analyzeThumbnail(base64Data, mimeType);
      const analysis = parseAnalysisText(analysisText);

      setState(prev => ({
        ...prev,
        isAnalyzing: false,
        analysis,
        debugInfo: null,
      }));
    } catch (error) {
      let errorMessage: string;
      let debugInfo: string | null = null;
      
      if (error instanceof ValidationError) {
        errorMessage = error.message;
      } else if (error instanceof AnalysisError) {
        errorMessage = error.message;
        // If the error message contains raw response data, extract it for debug info
        if (error.message.includes('Raw response:')) {
          const [message, ...debug] = error.message.split('Raw response:');
          errorMessage = message.trim();
          debugInfo = debug.join('Raw response:').trim();
        }
        console.error('Analysis error:', { message: error.message, debugInfo });
      } else {
        errorMessage = 'An unexpected error occurred. Please try again.';
        console.error('Unexpected error during thumbnail analysis:', error);
      }

      setState(prev => ({
        ...prev,
        isAnalyzing: false,
        error: errorMessage,
        debugInfo,
      }));
    }
  }, []);

  const resetAnalysis = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    handleFileSelect,
    resetAnalysis,
  };
}