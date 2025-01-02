import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSuggestions } from './useSuggestions';
import { SuggestionsList } from './SuggestionsList';
import type { MetricScore } from '../../types/metrics';

interface SuggestionsBoxProps {
  metrics: Record<string, MetricScore>;
}

export function SuggestionsBox({ metrics }: SuggestionsBoxProps) {
  const [isOpen, setIsOpen] = useState(true);
  const suggestions = useSuggestions(metrics);

  if (suggestions.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-amber-50 rounded-xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-amber-100 to-amber-50"
      >
        <div className="flex items-center gap-2 text-amber-700 font-semibold">
          <Lightbulb className="h-5 w-5" />
          Areas for Improvement
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-amber-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-amber-500" />
        )}
      </button>

      {isOpen && <SuggestionsList suggestions={suggestions} />}
    </motion.div>
  );
}