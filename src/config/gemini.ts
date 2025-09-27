export const GeminiConfig = {
  apiKey: import.meta.env.VITE_GEMINI_API_KEY as string,
  prompt: `You Are experienced Thumbnail analyzer Analyze this YouTube thumbnail Deeply for $1M budget, and provide a JSON response with scores and feedback for EXACTLY these metrics. always compare with Top youtubers's thumbnails, not just theorytical analysis.

VIDEO_TITLE_CONTEXT: If a video title is provided, use it to better understand the content context and evaluate how well the thumbnail represents and complements the video topic.

CRITICAL: Use EXACTLY these key names (case-sensitive):
- overallScore (number)
- ctrPrediction (number) - Accuratly Predicted click-through rate percentage of youtube video (0-100)
- potentialCtr (number) - Potential maximum CTR with improvements (0-100)
- clarity (object with score and feedback) - Image sharpness, resolution, visual quality
- contrast (object with score and feedback) - Color contrast, text visibility, visual separation
- balance (object with score and feedback) - Visual composition, element placement, symmetry
- emotionalAppeal (object with score and feedback) - Emotional connection, mood, feeling evoked
- relevanceToTitle (object with score and feedback) - How well thumbnail matches video topic
- subjectFocus (object with score and feedback) - Main subject clarity, focal point strength
- curiosityGap (object with score and feedback) - Intrigue factor,controvercy, mystery, "what happens next? etc"
- hooking (object with score and feedback) - Combined thumbnail+title hook strength, first impression impact, viewer stopping power
- modernApproach (object with score and feedback) - Contemporary design trends, current YouTube aesthetics, up-to-date visual style
- readability (object with score and feedback) - Text size, font style, spacing, and legibility across devices (especially mobile)
- mobileOptimization (object with score and feedback) - How well details are visible in small-scale thumbnail previews (phones/tablets)
- engagementPotential (object with score and feedback) - Click-worthiness, eye-catching appeal, minimalist, smoothness etc

Scoring Guidelines:
- 0-30: Poor, major issues
- 31-50: Below average  
- 51-70: Average
- 71-85: Good
- 86-95: Excellent
- 96-100: Exceptional

REQUIRED JSON FORMAT (copy exactly):
{
  "overallScore": 50,
  "ctrPrediction": 2.5,
  "potentialCtr": 10,
  "clarity": { "score": 50, "feedback": "Clear and sharp image quality" },
  "contrast": { "score": 50, "feedback": "Good color contrast" },
  "balance": { "score": 50, "feedback": "Well-balanced composition" },
  "emotionalAppeal": { "score": 50, "feedback": "Evokes moderate interest" },
  "relevanceToTitle": { "score": 50, "feedback": "Matches content well" },
  "subjectFocus": { "score": 50, "feedback": "Clear main subject" },
  "curiosityGap": { "score": 50, "feedback": "Creates strong intrigue" },
  "hooking": { "score": 50, "feedback": "Strong hook with title synergy" },
  "modernApproach": { "score": 50, "feedback": "Contemporary design style" },
  "readability": { "score": 50, "feedback": "Text is clear and legible" },
  "mobileOptimization": { "score": 50, "feedback": "Works well on mobile devices" },
  "engagementPotential": { "score": 50, "feedback": "Likely to attract clicks" }
}

MUST include ALL 12 metrics above. Keep feedback under 50 characters. Be highly critical.`
} as const;