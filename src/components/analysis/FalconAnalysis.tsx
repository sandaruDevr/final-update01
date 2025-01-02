import React from 'react';
import { Brain } from 'lucide-react';
import { useFalconAnalysis } from '../../hooks/useFalconAnalysis';

interface FalconAnalysisProps {
  imageBase64: string;
}

export function FalconAnalysis({ imageBase64 }: FalconAnalysisProps) {
  const { analysis, isLoading, error, analyzeImage } = useFalconAnalysis();

  React.useEffect(() => {
    if (imageBase64) {
      analyzeImage(imageBase64);
    }
  }, [imageBase64, analyzeImage]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        {error}
      </div>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="h-5 w-5 text-purple-500" />
        <h3 className="text-lg font-semibold">Falcon AI Analysis</h3>
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{analysis}</p>
    </div>
  );
}