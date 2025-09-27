import React from 'react';
import { blogPosts } from './data/blogPosts';
import { BlogCard } from './components/BlogCard';
import { BoltText } from '../../components/typography/BoltText';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <BoltText variant="title">YouTube Creator Resources</BoltText>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tips and strategies to help you create better content and grow your channel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}