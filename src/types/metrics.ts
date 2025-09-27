export interface MetricScore {
  score: number;
  feedback: string;
}

export interface ThumbnailMetrics {
  clarity: MetricScore;
  contrast: MetricScore;
  balance: MetricScore;
  emotionalAppeal: MetricScore;
  relevanceToTitle: MetricScore;
  subjectFocus: MetricScore;
  curiosityGap: MetricScore;
  hooking: MetricScore;
  modernApproach: MetricScore;
  readability: MetricScore;
  mobileOptimization: MetricScore;
  engagementPotential: MetricScore;
  overallScore: number;
  ctrPrediction: number;
  potentialCtr: number;
  [key: string]: MetricScore | number;
}