export interface Suggestion {
  metric: string;
  score: number;
  improvement: string;
}

export const metricDisplayNames: Record<string, string> = {
  clarity: 'Image Clarity',
  readability: 'Text Readability',
  contrast: 'Color Contrast',
  balance: 'Visual Balance',
  emotionalAppeal: 'Emotional Impact',
  relevanceToTitle: 'Title Relevance',
  brandingConsistency: 'Branding',
  subjectFocus: 'Subject Focus',
  engagementPotential: 'Engagement',
  callToActionStrength: 'Call to Action'
};