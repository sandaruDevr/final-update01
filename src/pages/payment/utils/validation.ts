import type { PaymentFormData, PaymentFormErrors } from '../types';

export function validatePaymentForm(data: PaymentFormData): PaymentFormErrors {
  const errors: PaymentFormErrors = {};

  if (!data.cardNumber.match(/^\d{16}$/)) {
    errors.cardNumber = 'Please enter a valid 16-digit card number';
  }

  if (!data.expiry.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
    errors.expiry = 'Please enter a valid expiry date (MM/YY)';
  }

  if (!data.cvc.match(/^\d{3,4}$/)) {
    errors.cvc = 'Please enter a valid CVC';
  }

  return errors;
}