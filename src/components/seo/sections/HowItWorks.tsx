import React from 'react';
import { Upload, Sparkles, LineChart } from 'lucide-react';
import { typography } from '../../../styles/typography';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Thumbnail',
    description: 'Simply drag and drop your thumbnail image or click to upload'
  },
  {
    icon: Sparkles,
    title: 'Get AI Analysis',
    description: 'Our AI analyzes multiple aspects of your thumbnail design'
  },
  {
    icon: LineChart,
    title: 'Optimize & Improve',
    description: 'Receive detailed feedback and actionable improvement tips'
  }
];

export function HowItWorks() {
  return (
    <section className="space-y-8">
      <h3 className={`${typography.heading} ${typography.sizes.h3} text-gray-900 text-center`}>
        How It Works
      </h3>
      
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full text-blue-600">
              <step.icon className="w-8 h-8" />
            </div>
            <h4 className={`${typography.heading} text-lg font-semibold text-gray-900`}>
              {step.title}
            </h4>
            <p className={`${typography.body} text-gray-600`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}