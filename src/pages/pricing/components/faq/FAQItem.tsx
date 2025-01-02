import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useClickOutside } from '../../../../hooks/useClickOutside';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(itemRef, () => {
    if (isOpen) onToggle();
  });

  return (
    <div 
      ref={itemRef}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {question}
        </span>
        <div className={`p-2 rounded-full transition-colors ${
          isOpen ? 'bg-blue-50' : 'bg-gray-50 group-hover:bg-blue-50'
        }`}>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
          )}
        </div>
      </button>
      
      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}