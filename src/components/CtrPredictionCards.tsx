import { TrendingUp, Target } from 'lucide-react';
import { motion } from 'framer-motion';

interface CtrPredictionCardsProps {
  ctrPrediction: number;
  potentialCtr: number;
}

export function CtrPredictionCards({ ctrPrediction, potentialCtr }: CtrPredictionCardsProps) {
  const getCtRColor = (ctr: number) => {
    if (ctr >= 10) return 'text-green-600';
    if (ctr >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCtRBgColor = (ctr: number) => {
    if (ctr >= 10) return 'from-green-50 to-emerald-50 border-green-200';
    if (ctr >= 6) return 'from-yellow-50 to-orange-50 border-yellow-200';
    return 'from-red-50 to-pink-50 border-red-200';
  };

  return (
    <div className="space-y-3">
      {/* Current CTR Prediction */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${getCtRBgColor(ctrPrediction)} border p-4 shadow-sm hover:shadow-md transition-all duration-300`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/80 rounded-lg shadow-sm">
            <TrendingUp className={`h-4 w-4 ${getCtRColor(ctrPrediction)}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-1">
              <span className={`text-xl font-bold ${getCtRColor(ctrPrediction)}`}>
                {ctrPrediction.toFixed(1)}%
              </span>
            </div>
            <p className="text-xs text-gray-600 font-medium">CTR Prediction</p>
          </div>
        </div>
      </motion.div>

      {/* Potential CTR */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-4 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/80 rounded-lg shadow-sm">
            <Target className="h-4 w-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-blue-600">
                {potentialCtr.toFixed(1)}%
              </span>
            </div>
            <p className="text-xs text-gray-600 font-medium">Potential CTR</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
