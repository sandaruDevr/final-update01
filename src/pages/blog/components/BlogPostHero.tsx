import React from 'react';
import { Clock, User, Star } from 'lucide-react';
import { BoltText } from '../../../components/typography/BoltText';
import type { BlogPost } from '../types';

interface BlogPostHeroProps {
  post: BlogPost;
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">
          <BoltText variant="title">{post.title}</BoltText>
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
          <div>{post.date}</div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>Editor's Choice</span>
          </div>
        </div>
      </div>
    </div>
  );
}