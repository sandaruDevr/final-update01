import React from 'react';
import { TabbedUploadSection } from '../../../components/TabbedUploadSection';
import { AnalysisResults } from '../../../components/AnalysisResults';
import { useCombinedAnalysis } from '../../../hooks/useCombinedAnalysis';
import { BoltText } from '../../../components/typography/BoltText';

export function UploadSection() {
  const { state, handleFileSelect, handleYouTubeAnalyze, resetAnalysis } = useCombinedAnalysis();
  const { analysis, isAnalyzing, error } = state;

  return (
    <section className="space-y-6">
      <div className="text-center">
        <p className="text-xl font-jakarta text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-500 font-semibold animate-fadeIn">
          Upload your thumbnail or analyze from YouTube URL to get AI-powered insights and optimization tips
        </p>
      </div>

      {!analysis && (
        <TabbedUploadSection 
          onFileAnalyze={handleFileSelect}
          onYouTubeAnalyze={handleYouTubeAnalyze}
          isAnalyzing={isAnalyzing} 
        />
      )}

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
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