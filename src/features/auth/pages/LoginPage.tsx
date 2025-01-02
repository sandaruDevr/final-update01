import React from 'react';
import { LoginForm } from '../components/LoginForm';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <LoginForm />
      </div>
    </div>
  );
}