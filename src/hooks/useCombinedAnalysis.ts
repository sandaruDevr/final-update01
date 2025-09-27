import { useState, useCallback } from 'react';
import { useThumbnailAnalysis } from './useThumbnailAnalysis';
import { useYouTubeAnalysis } from './useYouTubeAnalysis';
import type { ThumbnailState } from '../types';

type AnalysisMode = 'upload' | 'youtube';

interface CombinedAnalysisState extends ThumbnailState {
  mode: AnalysisMode | null;
  videoId?: string | null;
  videoTitle?: string | null;
  thumbnailUrl?: string | null;
}

export function useCombinedAnalysis() {
  const fileAnalysis = useThumbnailAnalysis();
  const youtubeAnalysis = useYouTubeAnalysis();
  const [currentMode, setCurrentMode] = useState<AnalysisMode | null>(null);

  const handleFileSelect = useCallback(async (file: File, title?: string) => {
    setCurrentMode('upload');
    await fileAnalysis.handleFileSelect(file, title);
  }, [fileAnalysis.handleFileSelect]);

  const handleYouTubeAnalyze = useCallback(async (url: string) => {
    setCurrentMode('youtube');
    await youtubeAnalysis.handleUrlAnalyze(url);
  }, [youtubeAnalysis.handleUrlAnalyze]);

  const resetAnalysis = useCallback(() => {
    setCurrentMode(null);
    fileAnalysis.resetAnalysis();
    youtubeAnalysis.resetAnalysis();
  }, [fileAnalysis.resetAnalysis, youtubeAnalysis.resetAnalysis]);

  // Determine which state to return based on current mode
  const getCurrentState = (): CombinedAnalysisState => {
    const baseState = {
      mode: currentMode,
    };

    if (currentMode === 'upload') {
      return {
        ...fileAnalysis.state,
        ...baseState,
      };
    } else if (currentMode === 'youtube') {
      return {
        ...youtubeAnalysis.state,
        file: null, // YouTube mode doesn't have a file
        ...baseState,
        videoId: youtubeAnalysis.state.videoId,
        videoTitle: youtubeAnalysis.state.videoTitle,
        thumbnailUrl: youtubeAnalysis.state.thumbnailUrl,
      };
    }

    // No mode selected, return initial state
    return {
      file: null,
      preview: null,
      analysis: null,
      isAnalyzing: false,
      error: null,
      debugInfo: null,
      ...baseState,
    };
  };

  return {
    state: getCurrentState(),
    handleFileSelect,
    handleYouTubeAnalyze,
    resetAnalysis,
  };
}
