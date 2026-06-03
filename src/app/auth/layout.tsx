"use client";

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from '../hooks/useAuth';

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace('/app/dashboard');
    }
  }, [loading, isAuthenticated, router]);

  if (loading || isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
