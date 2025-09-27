export interface Suggestion {
  metric: string;
  score: number;
  improvement: string;
}

export const metricDisplayNames: Record<string, string> = {
  clarity: 'Image Clarity',
  contrast: 'Color Contrast',
  balance: 'Visual Balance',
  emotionalAppeal: 'Emotional Impact',
  relevanceToTitle: 'Title Relevance',
  subjectFocus: 'Subject Focus',
  curiosityGap: 'Curiosity Gap',
  engagementPotential: 'Engagement'
};