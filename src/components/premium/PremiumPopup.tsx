import React from 'react';
import { X, Zap, Crown, Check } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { animations } from '../../styles/animations';

interface PremiumPopupProps {
  onClose: () => void;
}

export function PremiumPopup({ onClose }: PremiumPopupProps) {
  const premiumFeatures = [
    'Advanced AI analysis algorithms',
    'Batch thumbnail processing',
    'Competitor thumbnail analysis',
    'Custom branding templates',
    'Priority support'
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className={`bg-white rounded-xl shadow-xl max-w-md w-full ${animations.scaleUp}`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-amber-500" />
              <h3 className="text-xl font-bold text-gray-900">
                Unlock Premium Features
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-500" />
                  <span className="font-semibold text-amber-700">Special Offer</span>
                </div>
                <CountdownTimer 
                  initialMinutes={30} 
                  onComplete={onClose}
                />
              </div>
              <p className="text-amber-800">
                Get <span className="font-bold">40% off</span> Premium when you upgrade today!
              </p>
            </div>

            <ul className="space-y-2">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center space-y-3">
              <button
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg px-4 py-2 font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
              >
                Upgrade Now - 40% Off
              </button>
              <button
                onClick={onClose}
                className="text-sm text-gray-500 hover:text-gray-600"
              >
                Continue with Free Version
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}