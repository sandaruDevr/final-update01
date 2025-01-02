import { useState } from 'react';
import { stripePromise } from '../services/stripe/client';
import { createCheckoutSession } from '../services/stripe/createCheckoutSession';

export function useStripeCheckout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async (plan: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { sessionId, error: sessionError } = await createCheckoutSession({ plan });
      
      if (sessionError || !sessionId) {
        throw new Error(sessionError || 'Failed to create checkout session');
      }

      // Only pass sessionId to redirectToCheckout
      const { error: checkoutError } = await stripe.redirectToCheckout({ sessionId });
      
      if (checkoutError) {
        throw new Error(checkoutError.message);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment initialization failed';
      setError(errorMessage);
      console.error('Payment error:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handlePayment,
    isLoading,
    error,
  };
}