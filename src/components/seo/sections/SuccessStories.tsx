import React from 'react';
import { Star } from 'lucide-react';
import { typography } from '../../../styles/typography';

const stories = [
  {
    quote: "After using the thumbnail analyzer, my average CTR increased from 4% to 12%. It's amazing how small improvements can make such a big difference.",
    author: "Gaming Creator",
    metric: "200% CTR Increase"
  },
  {
    quote: "The AI-powered feedback helped me understand exactly what was wrong with my thumbnails. My latest videos are getting more views than ever.",
    author: "Tech Reviewer",
    metric: "3x View Growth"
  },
  {
    quote: "As a new YouTuber, this free tool has been invaluable. It's like having a professional thumbnail designer giving you feedback.",
    author: "Educational Content Creator",
    metric: "45% More Views"
  }
];

export function SuccessStories() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className={`${typography.heading} ${typography.sizes.h2} text-gray-900`}>
          Creator Success Stories
        </h2>
        <p className={`${typography.body} text-lg text-gray-600 mt-4 max-w-3xl mx-auto`}>
          See how creators are growing their channels with our free thumbnail analyzer
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className={`${typography.body} text-gray-600 mb-4`}>
              "{story.quote}"
            </blockquote>
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{story.author}</p>
              <p className="text-blue-600 text-sm font-medium">{story.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}