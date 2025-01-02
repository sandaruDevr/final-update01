import React from 'react';
import { ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BoltText } from '../typography/BoltText';

export function Logo() {
  return (
    <Link to="/" className="flex items-center group">
      <ImageIcon className="h-8 w-8 text-blue-500 transition-transform group-hover:scale-110" />
      <div className="ml-3">
        <h1 className="text-2xl">
          <BoltText variant="title">Free YouTube Thumbnail Analyzer</BoltText>
        </h1>
        <div className="text-sm transform -translate-y-1">
          <BoltText variant="subtitle">Thumblytics</BoltText>
        </div>
      </div>
    </Link>
  );
}