import { useState } from 'react';
import { validatePaymentForm } from '../utils/validation';
import type { PaymentFormData, PaymentFormErrors } from '../types';

const initialFormData: PaymentFormData = {
  cardNumber: '',
  expiry: '',
  cvc: '',
};

export function usePaymentForm() {
  const [formData, setFormData] = useState<PaymentFormData>(initialFormData);
  const [errors, setErrors] = useState<PaymentFormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validatePaymentForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Implement payment processing
    console.log('Processing payment:', formData);
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}