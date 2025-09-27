import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from './types';

export function TestimonialCard({ name, avatar, rating, text }: Testimonial) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg min-w-full md:min-w-[400px] flex-shrink-0">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}