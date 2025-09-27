import React from 'react';
import { TestimonialSlider } from './TestimonialSlider';
import { SectionTitle } from '../common/SectionTitle';

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-400">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Student's Testimonials"
          subtitle="Here's what our users have to say about their transformative experience. Real stories, real growth. Discover firsthand the impact our analyzer has had on their channels."
          className="text-white"
          subtitleClassName="text-primary-100"
        />
        <TestimonialSlider />
      </div>
    </section>
  );
}