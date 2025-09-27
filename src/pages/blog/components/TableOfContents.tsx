import React from 'react';
import { Image, Users, Palette, Layout, Target, Zap, BarChart, Camera } from 'lucide-react';
import type { Section } from '../types';

const sections: Section[] = [
  { id: 'text', title: 'Use Bold, Clear Text', icon: Image },
  { id: 'faces', title: 'Incorporate Faces', icon: Users },
  { id: 'colors', title: 'Bright Colors Are Key', icon: Palette },
  { id: 'simple', title: 'Keep It Simple', icon: Layout },
  { id: 'urgency', title: 'Add Sense of Urgency', icon: Target },
  { id: 'consistency', title: 'Consistency Is Crucial', icon: Zap },
  { id: 'testing', title: 'Test and Optimize', icon: BarChart },
  { id: 'quality', title: 'High Resolution', icon: Camera }
];

export function TableOfContents() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
      <nav className="grid sm:grid-cols-2 gap-4">
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <section.icon className="h-5 w-5" />
            </div>
            <span className="font-medium text-gray-900">{section.title}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}