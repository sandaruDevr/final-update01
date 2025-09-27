import { STRIPE_CONFIG } from './config';
import { MOCK_PRICES, MOCK_SESSION_ID } from './mockData';
import type { CheckoutSessionResponse, CreateCheckoutSessionParams } from './types';

export async function createCheckoutSession(params: CreateCheckoutSessionParams): Promise<CheckoutSessionResponse> {
  // In development, simulate API call with mock data
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve) => {
      setTimeout(() => {
        const priceId = MOCK_PRICES[params.plan];
        if (!priceId) {
          resolve({
            sessionId: '',
            error: 'Invalid plan selected'
          });
          return;
        }
        
        // Mock session creation with success/cancel URLs included
        resolve({
          sessionId: MOCK_SESSION_ID,
          // URLs would be set on the server side in production
        });
      }, 1000);
    });
  }

  // In production, make actual API call
  try {
    const response = await fetch(STRIPE_CONFIG.apiEndpoints.createCheckoutSession, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...params,
        successUrl: STRIPE_CONFIG.successUrl,
        cancelUrl: STRIPE_CONFIG.cancelUrl,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    return await response.json();
  } catch (error) {
    return {
      sessionId: '',
      error: error instanceof Error ? error.message : 'Failed to create checkout session',
    };
  }
}