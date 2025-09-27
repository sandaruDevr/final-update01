import React from 'react';

interface BoltTextProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'accent';
  className?: string;
}

export function BoltText({ children, variant = 'accent', className = '' }: BoltTextProps) {
  const variants = {
    title: 'font-jakarta font-extrabold tracking-tight',
    subtitle: 'font-jakarta font-semibold tracking-wider',
    accent: 'font-jakarta italic tracking-tight'
  };

  const gradients = {
    title: 'bg-gradient-to-r from-gray-900 to-gray-800',
    subtitle: 'bg-gradient-to-r from-blue-600 to-purple-600',
    accent: 'bg-gradient-to-r from-blue-500 to-purple-500'
  };

  return (
    <span className={`${variants[variant]} bg-clip-text text-transparent ${gradients[variant]} ${className}`}>
      {children}
    </span>
  );
}