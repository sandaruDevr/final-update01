import React from 'react';
import { UploadZone } from '../../../components/UploadZone';
import { AnalysisResults } from '../../../components/AnalysisResults';
import { useThumbnailAnalysis } from '../../../hooks/useThumbnailAnalysis';
import { BoltText } from '../../../components/typography/BoltText';

export function UploadSection() {
  const { state, handleFileSelect, resetAnalysis } = useThumbnailAnalysis();
  const { analysis, isAnalyzing, error } = state;

  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-xl font-jakarta text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 font-semibold animate-fadeIn">
          Upload your thumbnail to get AI-powered insights and optimization tips
        </p>
      </div>

      {!analysis && (
        <UploadZone onFileSelect={handleFileSelect} />
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      {isAnalyzing && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
          <p className="text-gray-600">Analyzing your thumbnail...</p>
        </div>
      )}

      {analysis && (
        <AnalysisResults 
          result={analysis} 
          onReupload={resetAnalysis}
        />
      )}
    </section>
  );
}