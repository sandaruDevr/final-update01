import { RefreshCw } from 'lucide-react';
import { ScoreCircle } from './ScoreCircle';
import { CtrPredictionCards } from './CtrPredictionCards';
import { motion } from 'framer-motion';

interface OverallScoreProps {
  score: number;
  ctrPrediction: number;
  potentialCtr: number;
  onReupload: () => void;
}

export function OverallScore({ score, ctrPrediction, potentialCtr, onReupload }: OverallScoreProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 sm:p-8"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Overall Thumbnail Score</h2>
        <p className="text-gray-600 mt-2">
          A very good score is between 60 and 80. For best results, you should strive for 70 and above.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Score Circle */}
        <div className="flex-shrink-0">
          <ScoreCircle score={score} />
        </div>
        
        {/* CTR Prediction Cards */}
        <div className="flex-shrink-0">
          <CtrPredictionCards 
            ctrPrediction={ctrPrediction} 
            potentialCtr={potentialCtr} 
          />
        </div>
      </div>

      {/* Analyze Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={onReupload}
          className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-full font-medium hover:bg-blue-100 transition-colors"
        >
          <RefreshCw className="h-5 w-5" />
          Analyze Another Thumbnail
        </button>
      </div>
    </motion.div>
  );
}