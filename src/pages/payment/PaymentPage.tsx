import React from 'react';
import { PaymentSummary } from './components/PaymentSummary';
import { BoltText } from '../../components/typography/BoltText';
import { useParams } from '../../hooks/useParams';
import { useStripeCheckout } from '../../hooks/useStripeCheckout';
import { Lock, AlertCircle } from 'lucide-react';

export function PaymentPage() {
  const { plan } = useParams();
  const { handlePayment, isLoading, error } = useStripeCheckout();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl text-center mb-8">
          <BoltText variant="title">Complete Your Purchase</BoltText>
        </h1>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
              
              <button
                onClick={() => plan && handlePayment(plan)}
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    <Lock className="h-5 w-5" />
                    <span>Proceed to Secure Payment</span>
                    <img 
                      src="https://cdn.jsdelivr.net/gh/stripe/stripe-meta/Logo/badge/Powered%20by%20Stripe%20-%20white.png"
                      alt="Powered by Stripe"
                      className="h-5"
                    />
                  </>
                )}
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Secure payment powered by Stripe</p>
                <p className="mt-1">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <PaymentSummary planId={plan} />
          </div>
        </div>
      </div>
    </div>
  );
}