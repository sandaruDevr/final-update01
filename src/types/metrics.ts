export interface MetricScore {
  score: number;
  feedback: string;
}

export interface ThumbnailMetrics {
  clarity: MetricScore;
  readability: MetricScore;
  contrast: MetricScore;
  balance: MetricScore;
  emotionalAppeal: MetricScore;
  relevanceToTitle: MetricScore;
  brandingConsistency: MetricScore;
  subjectFocus: MetricScore;
  engagementPotential: MetricScore;
  callToActionStrength: MetricScore;
  overallScore: number;
}