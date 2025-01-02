import React from 'react';
import { BoltText } from '../../../components/typography/BoltText';

export function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-4">
        <BoltText variant="title">Choose Your Plan</BoltText>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Unlock powerful features to optimize your YouTube thumbnails and grow your channel
      </p>
    </div>
  );
}