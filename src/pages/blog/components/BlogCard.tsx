import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  if (!post) {
    return null;
  }

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="h-4 w-4 text-blue-500" />
          {post.tags?.map(tag => (
            <span 
              key={`${post.id}-${tag}`}
              className="text-sm bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}