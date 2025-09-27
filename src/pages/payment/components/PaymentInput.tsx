import React from 'react';

interface PaymentInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PaymentInput({
  label,
  name,
  placeholder,
  value,
  error,
  onChange
}: PaymentInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full px-3 py-2 rounded-lg border
          ${error ? 'border-red-500' : 'border-gray-300'}
          focus:outline-none focus:ring-2 focus:ring-blue-500
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}