import { LineChart, Palette, Timer, Wand2, Volume2, TrendingUp, FileText, Type, Zap } from 'lucide-react';
import type { Tool } from './types';

export const tools: Tool[] = [
  {
    icon: LineChart,
    label: 'Analytics Dashboard',
    description: 'Track thumbnail performance metrics',
    comingSoon: true,
    path: '#'
  },
  {
    icon: Volume2,
    label: 'Sound Analyzer',
    description: 'Analyze audio quality and engagement',
    comingSoon: true,
    path: '#'
  },
  {
    icon: TrendingUp,
    label: 'Trending Keywords',
    description: 'Discover high-performing keywords',
    comingSoon: true,
    path: '#'
  },
  {
    icon: FileText,
    label: 'Script Generator',
    description: 'AI-powered video script creation',
    comingSoon: true,
    path: '#'
  },
  {
    icon: Type,
    label: 'Title & Description',
    description: 'Generate optimized metadata',
    comingSoon: true,
    path: '#'
  },
  {
    icon: Zap,
    label: 'YouTube Automation',
    description: 'Streamline your workflow',
    comingSoon: true,
    path: '#'
  },
  {
    icon: Palette,
    label: 'Color Palette Generator',
    description: 'Create engaging thumbnail schemes',
    comingSoon: true,
    path: '#'
  },
  {
    icon: Timer,
    label: 'Timestamp Generator',
    description: 'Create video chapter markers',
    comingSoon: true,
    path: '#'
  },
  {
    icon: Wand2,
    label: 'Title Generator',
    description: 'AI-powered title suggestions',
    comingSoon: true,
    path: '#'
  }
];