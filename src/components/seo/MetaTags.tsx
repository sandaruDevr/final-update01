import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../../config/seo';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  image?: string;
}

export function MetaTags({ 
  title = seoConfig.default.title,
  description = seoConfig.default.description,
  keywords = seoConfig.default.keywords,
  type = 'website',
  image = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'
}: MetaTagsProps) {
  const siteUrl = window.location.origin;
  const canonicalUrl = window.location.href;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content="YouTube Thumbnail Analyzer" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  );
}