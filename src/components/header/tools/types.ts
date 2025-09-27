import type { LucideIcon } from 'lucide-react';

export interface Tool {
  icon: LucideIcon;
  label: string;
  description: string;
  comingSoon?: boolean;
  path: string;
}