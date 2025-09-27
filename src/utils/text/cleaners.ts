/**
 * Utilities for cleaning and formatting text responses
 */

/**
 * Removes markdown code block markers and unwanted characters from text
 */
export function cleanMarkdownText(text: string): string {
  return text
    .replace(/```json\n?/g, '')
    .replace(/```\n?/g, '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove zero-width spaces
    .replace(/\n+/g, ' ')  // Replace newlines with spaces
    .trim();
}

/**
 * Sanitizes JSON string and ensures it's a complete JSON object
 */
export function sanitizeJsonString(text: string): string {
  let cleaned = text
    .replace(/^\uFEFF/, '')  // Remove BOM
    .replace(/[\x00-\x1F\x7F-\x9F]/g, '') // Remove control characters
    .trim();

  // Find the outermost JSON object
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');
  
  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error('Invalid JSON: missing braces');
  }
  
  // Extract only the JSON object
  cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  
  // Verify it's valid JSON by parsing and stringifying
  try {
    return JSON.stringify(JSON.parse(cleaned));
  } catch (error) {
    throw new Error('Invalid JSON structure');
  }
}