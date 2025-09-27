import React from 'react';
import { CreditCard, Lock } from 'lucide-react';
import { usePaymentForm } from '../hooks/usePaymentForm';
import { PaymentInput } from './PaymentInput';

export function PaymentForm() {
  const { formData, errors, handleChange, handleSubmit } = usePaymentForm();

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Details
          </h2>
          
          <PaymentInput
            label="Card Number"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            error={errors.cardNumber}
            onChange={handleChange}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <PaymentInput
              label="Expiry Date"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              error={errors.expiry}
              onChange={handleChange}
            />
            <PaymentInput
              label="CVC"
              name="cvc"
              placeholder="123"
              value={formData.cvc}
              error={errors.cvc}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
        >
          <div className="flex items-center justify-center gap-2">
            <Lock className="h-4 w-4" />
            Pay Securely
          </div>
        </button>
      </div>
    </form>
  );
}