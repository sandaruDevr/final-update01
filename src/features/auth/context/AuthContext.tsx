import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { User, AuthState } from '../types';
import { authReducer, initialState } from './authReducer';
import { getGoogleUserInfo } from '../services/google';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (accessToken: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      dispatch({ type: 'SET_USER', payload: JSON.parse(user) });
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: 'LOGIN_START' });
      // In a real app, make API call here
      const user: User = { id: '1', email, provider: 'email' };
      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Invalid credentials' });
      throw error;
    }
  };

  const loginWithGoogle = async (accessToken: string) => {
    try {
      dispatch({ type: 'LOGIN_START' });
      const googleUser = await getGoogleUserInfo(accessToken);
      
      const user: User = {
        id: googleUser.sub,
        email: googleUser.email,
        name: googleUser.name,
        picture: googleUser.picture,
        provider: 'google'
      };

      localStorage.setItem('user', JSON.stringify(user));
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Google sign in failed' });
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}