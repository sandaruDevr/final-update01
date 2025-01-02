export const STRIPE_CONFIG = {
  // Use Stripe's test publishable key for development
  publishableKey: 'pk_test_51Mxt4VSIXJGVqwlPBxAzVCXa4fdXhRZmtK8FZJXJGVqwlP',
  apiEndpoints: {
    createCheckoutSession: '/api/create-checkout-session',
  },
  // Safely construct URLs using relative paths
  get successUrl() {
    try {
      return new URL('/payment/success', window.location.href).toString();
    } catch {
      return '/payment/success';
    }
  },
  get cancelUrl() {
    try {
      return new URL('/payment/cancel', window.location.href).toString();
    } catch {
      return '/payment/cancel';
    }
  },
} as const;