import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

export function GoogleSignInButton() {
  const { loginWithGoogle, isLoading } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        await loginWithGoogle(response.access_token);
      } catch (error) {
        console.error('Google login failed:', error);
      }
    },
    onError: () => {
      console.error('Google login failed');
    }
  });

  return (
    <button
      onClick={() => login()}
      disabled={isLoading}
      className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="Google"
        className="w-5 h-5"
      />
      {isLoading ? 'Signing in...' : 'Continue with Google'}
    </button>
  );
}