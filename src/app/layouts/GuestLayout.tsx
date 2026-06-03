import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function GuestLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        {children}
      </div>
    </div>
  );
}
