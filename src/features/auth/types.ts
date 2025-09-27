export interface User {
  id: string;
  email: string;
  name?: string;
  picture?: string;
  provider: 'email' | 'google';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}