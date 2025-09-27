import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  subtitleClassName?: string;
}

export function SectionTitle({ 
  title, 
  subtitle,
  className = 'text-gray-900',
  subtitleClassName = 'text-gray-600'
}: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className={`text-3xl font-bold mb-4 ${className}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}