import { useState, useCallback } from 'react';
import { getImprovementTips } from '../services/gemini/getImprovementTips';

export function useImprovementTips() {
  const [tips, setTips] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTips = useCallback(async (metric: string, score: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getImprovementTips(metric, score);
      setTips(response.split('\n').filter(Boolean));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load tips');
      setTips([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { tips, isLoading, error, fetchTips };
}