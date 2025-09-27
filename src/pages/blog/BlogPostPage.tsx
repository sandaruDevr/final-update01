import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Tag, BookOpen, Star, TrendingUp, Search } from 'lucide-react';
import { blogPosts } from './data/blogPosts';
import { BoltText } from '../../components/typography/BoltText';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  // Table of Contents sections based on the content
  const sections = [
    { id: 'keyword-research', title: 'Keyword Research', icon: Search },
    { id: 'metadata', title: 'Optimize Your Metadata', icon: BookOpen },
    { id: 'watch-time', title: 'Increase Watch Time', icon: Clock },
    { id: 'analytics', title: 'Leverage Analytics', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-4xl mx-auto px-4">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        {/* Hero Section */}
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

        {/* Table of Contents */}
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

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Check if paragraph is a heading (starts with number and dot)
              if (/^\d+\./.test(paragraph)) {
                const [title, ...content] = paragraph.split('\n');
                const sectionId = sections[parseInt(title) - 1]?.id;
                
                return (
                  <div key={index} id={sectionId} className="scroll-mt-20">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
                    {content.map((line, i) => (
                      <p key={i} className="mb-4 text-gray-700">
                        {line.replace(/^- /, '')}
                      </p>
                    ))}
                  </div>
                );
              }
              
              return (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="h-4 w-4 text-blue-500" />
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}