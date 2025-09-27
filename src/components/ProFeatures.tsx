import React from 'react';
import { Crown, Zap, Lock, Sparkles } from 'lucide-react';

interface ProFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ProFeature({ icon, title, description }: ProFeatureProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50">
      <div className="text-amber-500 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function ProFeatures() {
  return (
    <div className="fixed bottom-6 right-6">
      <div className="relative group">
        <button 
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Crown className="h-5 w-5" />
          Upgrade to Pro
        </button>
        
        <div className="absolute bottom-full right-0 mb-4 w-80 p-4 bg-white rounded-xl shadow-xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 transform origin-bottom-right">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-amber-500 font-semibold">
              <Sparkles className="h-5 w-5" />
              Pro Features
            </div>
            
            <ProFeature
              icon={<Zap className="h-5 w-5" />}
              title="Batch Analysis"
              description="Analyze multiple thumbnails at once and compare results"
            />
            
            <ProFeature
              icon={<Lock className="h-5 w-5" />}
              title="Advanced Metrics"
              description="Get detailed insights and competitive analysis"
            />
            
            <div className="pt-3 text-center">
              <p className="text-sm font-medium text-gray-900">
                $9.99/month
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}