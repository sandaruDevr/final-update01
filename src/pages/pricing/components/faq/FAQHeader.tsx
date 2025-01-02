import React from 'react';
import { HelpCircle, Search, Youtube, Zap } from 'lucide-react';
import { BoltText } from '../../../../components/typography/BoltText';

export function FAQHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-6">
        <HelpCircle className="h-5 w-5 text-blue-500" />
        <span className="text-blue-700 font-medium">Expert YouTube Thumbnail Tips</span>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">
        <BoltText variant="subtitle">Frequently Asked Questions</BoltText>
      </h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Everything you need to know about creating high-performing YouTube thumbnails
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 flex items-center gap-3">
          <Youtube className="h-5 w-5 text-blue-500" />
          <span className="text-sm font-medium text-blue-700">YouTube Optimization</span>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 flex items-center gap-3">
          <Search className="h-5 w-5 text-purple-500" />
          <span className="text-sm font-medium text-purple-700">SEO Best Practices</span>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 flex items-center gap-3">
          <Zap className="h-5 w-5 text-indigo-500" />
          <span className="text-sm font-medium text-indigo-700">Growth Strategies</span>
        </div>
      </div>
    </div>
  );
}