export interface CheckoutSessionResponse {
  sessionId: string;
  error?: string;
}

export interface CreateCheckoutSessionParams {
  plan: string;
}