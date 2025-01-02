import React from 'react';
import { AlertCircle } from 'lucide-react';
import type { Suggestion } from './types';

interface SuggestionsListProps {
  suggestions: Suggestion[];
}

export function SuggestionsList({ suggestions }: SuggestionsListProps) {
  return (
    <div className="p-6 space-y-4">
      {suggestions.map((suggestion, index) => (
        <div key={index} className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-amber-900">{suggestion.metric}</h4>
            <p className="text-amber-800 mt-1">{suggestion.improvement}</p>
          </div>
        </div>
      ))}
    </div>
  );
}