import React from 'react';
import { motion } from 'framer-motion';

interface ScoreCircleProps {
  score: number;
  size?: number;
}

export function ScoreCircle({ score, size = 200 }: ScoreCircleProps) {
  const circumference = size * Math.PI;
  const progress = (score / 100) * circumference;
  const radius = size / 2;
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return '#22C55E'; // Green
    if (score >= 60) return '#EAB308'; // Yellow
    return '#EF4444'; // Red
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    return 'Needs Improvement';
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          className="stroke-gray-100"
          strokeWidth="20"
          fill="none"
        />
        {/* Progress circle */}
        <motion.circle
          cx={radius}
          cy={radius}
          r={radius - 10}
          stroke={getScoreColor(score)}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-5xl font-bold" style={{ color: getScoreColor(score) }}>
            {score}
          </div>
          <div className="text-sm text-gray-500 mt-1">/ 100</div>
          <div className="text-sm font-medium mt-2" style={{ color: getScoreColor(score) }}>
            {getScoreLabel(score)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}