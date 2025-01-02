import React from 'react';
import { Play } from 'lucide-react';

export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg transform rotate-45" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="h-4 w-4 text-red-500 transform -rotate-45" fill="currentColor" />
      </div>
    </div>
  );
}