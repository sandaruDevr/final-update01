export const GeminiConfig = {
  apiKey: 'AIzaSyDb_zHRbe-lg6hFJisC1qfn56G6OkB77mk',
  prompt: `Analyze this YouTube thumbnail deeply and provide a concise JSON response with scores and feedback for each metric, plus an overall score. Keep the response under 1000 characters total.

  Scoring Guidelines:
- 0-30: Poor, major issues
- 31-50: Below average
- 51-70: Average
- 71-85: Good
- 86-95: Excellent
- 96-100: Exceptional

{
  "overallScore": 50,
  "clarity": { "score": 50, "feedback": "Clear and sharp image quality" },
  "readability": { "score": 50, "feedback": "Text is easy to read" },
  "contrast": { "score": 50, "feedback": "Good color contrast" },
  "balance": { "score": 50, "feedback": "Well-balanced composition" },
  "emotionalAppeal": { "score": 50, "feedback": "Evokes moderate interest" },
  "relevanceToTitle": { "score": 50, "feedback": "Matches content well" },
  "brandingConsistency": { "score": 50, "feedback": "Consistent brand elements" },
  "subjectFocus": { "score": 50, "feedback": "Clear main subject" },
  "engagementPotential": { "score": 50, "feedback": "Likely to attract clicks" },
  "callToActionStrength": { "score": 50, "feedback": "Strong call to action" }
}

Follow this exact format. Keep feedback under 50 characters per metric.
Add up to 5 words to feedback.
Give best accurate scores for each.
It must be very difficult to get higher than 80 scores.
Be highly critical for every metric.
The overall score should reflect the thumbnail's overall effectiveness based on Engagement Potential, Call-to-Action Strength , Emotional Appeal  and eye-catching abilities, not just an average of other scores.
if provided image does not seems like thumbnal give 0-25 scores for it.
Ensure valid JSON format.`
} as const;