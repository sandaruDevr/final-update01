import { useState } from 'react';
import { Youtube, Sparkles, AlertCircle, Play } from 'lucide-react';

interface YouTubeUrlInputProps {
  onAnalyze: (url: string) => void;
  isAnalyzing?: boolean;
}

export function YouTubeUrlInput({ onAnalyze, isAnalyzing = false }: YouTubeUrlInputProps) {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const validateYouTubeUrl = (url: string): boolean => {
    if (!url.trim()) return true;
    return extractVideoId(url) !== null;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setIsValidUrl(validateYouTubeUrl(newUrl));
  };

  const handleAnalyze = () => {
    if (url.trim() && isValidUrl) {
      onAnalyze(url.trim());
    }
  };

  const canAnalyze = url.trim() && isValidUrl && !isAnalyzing;

  return (
    <div className="relative">
      {/* Premium Background with Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-purple-500/5 to-blue-500/10 rounded-3xl animate-pulse" />
      
      {/* Main Container */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Youtube className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            YouTube Analysis
          </h2>
          <p className="text-gray-600 font-medium">
            Paste any YouTube video URL for instant thumbnail analysis
          </p>
        </div>

        {/* Premium URL Input */}
        <div className="relative mb-8">
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r p-[2px] transition-all duration-300 ${
            isFocused || url ? 'from-red-500 via-purple-500 to-blue-500 shadow-lg' : 'from-gray-200 to-gray-300'
          }`}>
            <div className="relative flex items-center bg-white rounded-2xl">
              <div className="flex items-center pl-5 pr-3 py-4">
                <Play className={`h-5 w-5 transition-colors duration-300 ${
                  isFocused || url ? 'text-red-500' : 'text-gray-400'
                }`} />
              </div>
              <input
                type="url"
                value={url}
                onChange={handleUrlChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder="https://youtube.com/watch?v=..."
                className="flex-1 py-4 pr-12 bg-transparent text-gray-800 placeholder-gray-400 text-lg font-medium focus:outline-none"
              />
              {!isValidUrl && url.trim() && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
          </div>
          
          {!isValidUrl && url.trim() && (
            <div className="flex items-center gap-2 mt-3 text-red-500 text-sm font-medium">
              <AlertCircle className="h-4 w-4" />
              Invalid YouTube URL format
            </div>
          )}
        </div>

        {/* Premium Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={!canAnalyze}
          className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 
                     p-[2px] transition-all duration-300 hover:from-red-500 hover:via-purple-600 hover:to-blue-600 
                     disabled:from-gray-300 disabled:to-gray-400 shadow-xl hover:shadow-2xl disabled:shadow-md"
        >
          <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 
                          group-hover:from-red-500 group-hover:via-purple-600 group-hover:to-blue-600
                          group-disabled:from-gray-400 group-disabled:to-gray-500 
                          px-8 py-5 rounded-2xl transition-all duration-300">
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white/30 border-t-white" />
                <span className="text-white font-bold text-lg">Analyzing...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-white font-bold text-lg">Analyze Thumbnail</span>
              </>
            )}
          </div>
          
          {/* Button Shine Effect */}
          <div className="absolute inset-0 -top-2 -bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                            transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </div>
        </button>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
      </div>
    </div>
  );
}
