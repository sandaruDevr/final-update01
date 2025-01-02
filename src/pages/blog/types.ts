import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
}