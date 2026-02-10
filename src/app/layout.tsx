import { ReactNode } from 'react';
import MasterLayout from './layouts/backend/MasterLayout';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MasterLayout>
      {children}
    </MasterLayout>
  );
}