import { useState } from 'react';
import { Upload, Link } from 'lucide-react';
import { UploadZone } from './UploadZone';
import { YouTubeUrlInput } from './YouTubeUrlInput';

type TabType = 'upload' | 'youtube';

interface TabbedUploadSectionProps {
  onFileAnalyze: (file: File, title?: string) => void;
  onYouTubeAnalyze: (url: string) => void;
  isAnalyzing?: boolean;
}

export function TabbedUploadSection({ 
  onFileAnalyze, 
  onYouTubeAnalyze, 
  isAnalyzing = false 
}: TabbedUploadSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>('upload');

  const tabs = [
    {
      id: 'upload' as TabType,
      label: 'Upload Image',
      icon: Upload,
      description: 'Upload your thumbnail file'
    },
    {
      id: 'youtube' as TabType,
      label: 'YouTube URL',
      icon: Link,
      description: 'Analyze from YouTube video URL'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Premium Tab Navigation */}
      <div className="relative">
        {/* Background with animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-3xl p-[2px] animate-pulse">
          <div className="bg-white rounded-3xl h-full" />
        </div>
        
        {/* Tab Container */}
        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-3 shadow-2xl">
          <div className="flex space-x-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex-1 overflow-hidden rounded-2xl transition-all duration-300 ${
                    isActive ? 'transform scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                >
                  {/* Active tab gradient background */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-2xl" />
                  )}
                  
                  {/* Tab content */}
                  <div className={`relative flex items-center justify-center gap-4 px-8 py-6 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white shadow-xl'
                      : 'bg-gray-50/80 text-gray-600 hover:bg-gray-100/80 hover:text-gray-800'
                  }`}>
                    <Icon className={`h-6 w-6 transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`} />
                    <div className="text-center">
                      <div className="text-lg font-bold">{tab.label}</div>
                      <div className={`text-sm font-medium ${
                        isActive ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {tab.description}
                      </div>
                    </div>
                  </div>

                  {/* Hover shine effect */}
                  {!isActive && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                      transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Premium Tab Content */}
      <div className="min-h-[500px]">
        {activeTab === 'upload' && (
          <div className="animate-fadeIn">
            <UploadZone onAnalyze={onFileAnalyze} isAnalyzing={isAnalyzing} />
          </div>
        )}
        
        {activeTab === 'youtube' && (
          <div className="animate-fadeIn">
            <YouTubeUrlInput onAnalyze={onYouTubeAnalyze} isAnalyzing={isAnalyzing} />
          </div>
        )}
      </div>
    </div>
  );
}
