import React from 'react';
import { Receipt } from 'lucide-react';
import { usePricingData } from '../hooks/usePricingData';

interface PaymentSummaryProps {
  planId?: string;
}

export function PaymentSummary({ planId }: PaymentSummaryProps) {
  const { plan, loading, error } = usePricingData(planId);

  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (error || !plan) {
    return <div className="text-red-500">Invalid plan selected</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <Receipt className="h-5 w-5" />
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">{plan.name} Plan</span>
          <span className="font-semibold">${plan.price}/month</span>
        </div>

        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">Tax</span>
          <span className="font-semibold">${(plan.price * 0.1).toFixed(2)}</span>
        </div>

        <div className="flex justify-between py-2 font-bold">
          <span>Total</span>
          <span>${(plan.price * 1.1).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}