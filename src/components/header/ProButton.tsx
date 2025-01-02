import React from 'react';
import { Crown } from 'lucide-react';

interface ProButtonProps {
  onClick?: () => void;
}

export function ProButton({ onClick }: ProButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <Crown className="h-4 w-4" />
      Upgrade to Pro
    </button>
  );
}