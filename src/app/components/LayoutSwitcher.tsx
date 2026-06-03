"use client";

import { ReactNode } from 'react';
import useAuth from '../hooks/useAuth';
import MasterLayout from '../layouts/backend/MasterLayout';
import GuestLayout from '../layouts/GuestLayout';

type Props = {
  children: ReactNode;
};

export default function LayoutSwitcher({ children }: Props) {
  const { isAuthenticated, loading } = useAuth();
 
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading authentication status…
      </div>
    );
  }

  return isAuthenticated ? (
    
    <MasterLayout>{children}</MasterLayout>
  ) : (
    <GuestLayout>{children}</GuestLayout>
  );
}
