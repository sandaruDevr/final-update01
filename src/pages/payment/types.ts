export interface PaymentFormData {
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export interface PaymentFormErrors {
  cardNumber?: string;
  expiry?: string;
  cvc?: string;
}