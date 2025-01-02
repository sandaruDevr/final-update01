import { useState, useCallback } from 'react';
import { analyzeThumbnailWithFalcon } from '../services/falcon/analyze';

export function useFalconAnalysis() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeImage = useCallback(async (imageBase64: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await analyzeThumbnailWithFalcon(imageBase64);
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    analysis,
    isLoading,
    error,
    analyzeImage
  };
}