"use client";

import { useEffect, useState } from 'react';

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem('authToken') : null;
    setIsAuthenticated(Boolean(token));
    setLoading(false);
  }, []);

  return { isAuthenticated, loading };
}
