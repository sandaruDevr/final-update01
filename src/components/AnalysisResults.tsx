import React from 'react';
import { MetricCard } from './MetricCard';
import { OverallScore } from './OverallScore';
import { SuggestionsBox } from './suggestions/SuggestionsBox';
import { animations } from '../styles/animations';
import type { AnalysisResult } from '../types';

interface AnalysisResultsProps {
  result: AnalysisResult;
  onReupload: () => void;
  debugInfo?: string | null;
}

export function AnalysisResults({ result, onReupload, debugInfo }: AnalysisResultsProps) {
  const { metrics } = result;

  return (
    <div className={`space-y-8 ${animations.fadeIn}`}>
      <OverallScore score={metrics.overallScore} onReupload={onReupload} />
      
      <SuggestionsBox metrics={metrics} />

      <div className="grid gap-4 sm:grid-cols-2">
        <MetricCard title="Clarity" metric={metrics.clarity} />
        <MetricCard title="Readability" metric={metrics.readability} />
        <MetricCard title="Contrast" metric={metrics.contrast} />
        <MetricCard title="Balance" metric={metrics.balance} />
        <MetricCard title="Emotional Appeal" metric={metrics.emotionalAppeal} />
        <MetricCard title="Relevance to Title" metric={metrics.relevanceToTitle} />
        <MetricCard title="Branding Consistency" metric={metrics.brandingConsistency} />
        <MetricCard title="Subject Focus" metric={metrics.subjectFocus} />
        <MetricCard title="Engagement Potential" metric={metrics.engagementPotential} />
        <MetricCard title="Call-to-Action Strength" metric={metrics.callToActionStrength} />
      </div>

      {debugInfo && (
        <details className="mt-6 p-4 bg-gray-50 rounded-lg">
          <summary className="cursor-pointer text-sm text-gray-600 font-medium">
            Debug Information
          </summary>
          <pre className="mt-2 p-4 bg-gray-100 rounded text-xs overflow-x-auto">
            {debugInfo}
          </pre>
        </details>
      )}
    </div>
  );
}