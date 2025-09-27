export class AnalysisError extends Error {
  constructor(message: string, public readonly cause?: unknown) {
    super(message);
    this.name = 'AnalysisError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}