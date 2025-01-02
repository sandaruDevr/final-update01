import { Eye, Target, TrendingUp, BarChart } from 'lucide-react';
import type { Strategy } from './types';

export const strategies: Strategy[] = [
  {
    icon: Eye,
    title: 'First Impressions Matter',
    description: "YouTube thumbnails are your video's first impression. Studies show that 90% of best-performing videos have custom thumbnails. Our free analyzer helps you create thumbnails that grab attention and drive clicks."
  },
  {
    icon: Target,
    title: 'Click-Through Rate Optimization',
    description: "Higher CTR means more views from the same impressions. Top YouTubers achieve 15%+ CTR by continuously testing and optimizing their thumbnails. Use our free tool to analyze and improve your thumbnail performance."
  },
  {
    icon: TrendingUp,
    title: 'Channel Growth Acceleration',
    description: "Better thumbnails lead to more clicks, which signals YouTube to promote your content more. Many creators report 2-3x view growth after optimizing their thumbnails using data-driven insights."
  },
  {
    icon: BarChart,
    title: 'Data-Driven Success',
    description: "Stop guessing what works. Our free thumbnail analyzer provides actionable metrics and AI-powered suggestions to help you create thumbnails that consistently perform better."
  }
];