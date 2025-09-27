import React from 'react';
import { Link } from 'react-router-dom';
import { BoltText } from '../typography/BoltText';

export function Logo() {
  return (
    <Link to="/" className="flex items-center group">
      <img 
        src="https://firebasestorage.googleapis.com/v0/b/pubg-uc-209ba.appspot.com/o/U.png?alt=media&token=586453b1-a053-4b8f-ab8c-fb957407b7ce"
        alt="Thumblytics Logo"
        className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
      />
      <div className="ml-3">
        <div className="text-2xl">
          <BoltText variant="title">Free YouTube Thumbnail Analyzer</BoltText>
        </div>
        <h1 className="text-sm transform -translate-y-1">
          <BoltText variant="subtitle">Thumblytics</BoltText>
        </h1>
      </div>
    </Link>
  );
}