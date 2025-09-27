import { useState, useCallback } from 'react';
import { 
  extractVideoId, 
  getThumbnailUrl, 
  getVideoTitle, 
  fetchThumbnailAsBlob,
  convertBlobToBase64,
  YouTubeApiError 
} from '../services/youtube/api';
import { analyzeThumbnail } from '../utils/gemini';
import { parseAnalysisText } from '../utils/analysisParser';
import type { ThumbnailState } from '../types';
import { AnalysisError, ValidationError } from '../utils/errors';

interface YouTubeAnalysisState extends Omit<ThumbnailState, 'file'> {
  videoId: string | null;
  videoTitle: string | null;
  thumbnailUrl: string | null;
}

const initialState: YouTubeAnalysisState = {
  videoId: null,
  videoTitle: null,
  thumbnailUrl: null,
  preview: null,
  analysis: null,
  isAnalyzing: false,
  error: null,
  debugInfo: null,
};

export function useYouTubeAnalysis() {
  const [state, setState] = useState<YouTubeAnalysisState>(initialState);

  const handleUrlAnalyze = useCallback(async (url: string) => {
    try {
      setState(prev => ({
        ...prev,
        isAnalyzing: true,
        error: null,
        debugInfo: null,
      }));

      // Extract video ID
      const videoId = extractVideoId(url);
      if (!videoId) {
        throw new AnalysisError('Invalid YouTube URL format');
      }

      setState(prev => ({
        ...prev,
        videoId,
      }));

      // Get video title and thumbnail URL
      const [videoTitle, thumbnailUrl] = await Promise.all([
        getVideoTitle(videoId),
        Promise.resolve(getThumbnailUrl(videoId, 'maxresdefault'))
      ]);

      setState(prev => ({
        ...prev,
        videoTitle,
        thumbnailUrl,
        preview: thumbnailUrl,
      }));

      // Fetch thumbnail as blob and convert to base64
      const thumbnailBlob = await fetchThumbnailAsBlob(thumbnailUrl);
      const base64Data = await convertBlobToBase64(thumbnailBlob);
      const mimeType = thumbnailBlob.type;

      // Analyze the thumbnail with title context
      const analysisText = await analyzeThumbnail(base64Data, mimeType, videoTitle);
      const analysis = parseAnalysisText(analysisText);

      setState(prev => ({
        ...prev,
        isAnalyzing: false,
        analysis,
        debugInfo: null,
      }));
    } catch (error) {
      let errorMessage: string;
      let debugInfo: string | null = null;
      
      if (error instanceof YouTubeApiError) {
        errorMessage = error.message;
        console.error('YouTube API error:', { message: error.message, status: error.status });
      } else if (error instanceof ValidationError) {
        errorMessage = error.message;
      } else if (error instanceof AnalysisError) {
        errorMessage = error.message;
        // If the error message contains raw response data, extract it for debug info
        if (error.message.includes('Raw response:')) {
          const [message, ...debug] = error.message.split('Raw response:');
          errorMessage = message.trim();
          debugInfo = debug.join('Raw response:').trim();
        }
        console.error('Analysis error:', { message: error.message, debugInfo });
      } else {
        errorMessage = 'An unexpected error occurred. Please try again.';
        console.error('Unexpected error during YouTube thumbnail analysis:', error);
      }

      setState(prev => ({
        ...prev,
        isAnalyzing: false,
        error: errorMessage,
        debugInfo,
      }));
    }
  }, []);

  const resetAnalysis = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    handleUrlAnalyze,
    resetAnalysis,
  };
}
