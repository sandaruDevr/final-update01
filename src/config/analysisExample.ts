/**
 * Example of the expected JSON response format from Gemini API analysis
 */
export const EXAMPLE_ANALYSIS_RESPONSE = {
  "clarity": {
    "score": 85,
    "feedback": "The image has excellent resolution and sharp focus. Key elements are clearly visible with good lighting."
  },
  "contrast": {
    "score": 88,
    "feedback": "Strong color contrast between elements creates clear visual hierarchy and separation."
  },
  "balance": {
    "score": 75,
    "feedback": "Good overall composition with slight weight towards the left side. Could be more evenly distributed."
  },
  "emotionalAppeal": {
    "score": 82,
    "feedback": "Effective use of color psychology and imagery to evoke interest and excitement."
  },
  "relevanceToTitle": {
    "score": 95,
    "feedback": "Visual elements directly support and reinforce the video topic with clear connection."
  },
  "subjectFocus": {
    "score": 85,
    "feedback": "Main subject is immediately identifiable and well-positioned within the frame."
  },
  "curiosityGap": {
    "score": 80,
    "feedback": "Hooks viewers with intriguing visuals and text."
  },
  "engagementPotential": {
    "score": 88,
    "feedback": "Strong visual hooks and curiosity-driving elements that encourage clicks."
  }
} as const;