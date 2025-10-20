'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
// NextAuth 제거

interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const authStatus = localStorage.getItem('isAuthenticated');
        const email = localStorage.getItem('userEmail');
        
        if (authStatus === 'true' && email) {
          setIsAuthenticated(true);
          setUserEmail(email);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (email: string) => {
    setIsAuthenticated(true);
    setUserEmail(email);
    if (typeof window !== 'undefined') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userEmail');
    }
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
