/**
 * Example of the expected JSON response format from Gemini API analysis
 */
export const EXAMPLE_ANALYSIS_RESPONSE = {
  "clarity": {
    "score": 85,
    "feedback": "The image has excellent resolution and sharp focus. Key elements are clearly visible with good lighting."
  },
  "readability": {
    "score": 90,
    "feedback": "Text is well-sized and highly legible with strong contrast against the background."
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
  "brandingConsistency": {
    "score": 70,
    "feedback": "Basic brand elements present but could be more prominently featured for stronger recognition."
  },
  "subjectFocus": {
    "score": 85,
    "feedback": "Main subject is immediately identifiable and well-positioned within the frame."
  },
  "engagementPotential": {
    "score": 88,
    "feedback": "Strong visual hooks and curiosity-driving elements that encourage clicks."
  },
  "callToActionStrength": {
    "score": 78,
    "feedback": "Clear call-to-action elements present but could be more compelling or urgent."
  }
} as const;