import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from './testimonialData';

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative mt-12">
      <div className="overflow-hidden">
        <div className="flex gap-6 transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <span className="text-white">
          {currentIndex + 1}/{testimonials.length}
        </span>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}