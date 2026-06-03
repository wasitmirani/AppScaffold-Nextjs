"use client";

import { useEffect, useState } from 'react';

const SESSION_DURATION_MINUTES = Number(process.env.NEXT_PUBLIC_SESSION_DURATION_MINUTES ?? 30);
const EXPIRY_KEY = 'authExpiry';
const TOKEN_KEY = 'authToken';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    const token = window.localStorage.getItem(TOKEN_KEY);
    const expiryString = window.localStorage.getItem(EXPIRY_KEY);
    const expiry = expiryString ? Number(expiryString) : NaN;

    const clearSession = () => {
      window.localStorage.removeItem(TOKEN_KEY);
      window.localStorage.removeItem(EXPIRY_KEY);
    };

    if (!token || !expiry || Date.now() > expiry) {
      clearSession();
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    setIsAuthenticated(true);
    setLoading(false);

    const timeout = window.setTimeout(() => {
      clearSession();
      setIsAuthenticated(false);
    }, expiry - Date.now());

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  return { isAuthenticated, loading };
}
