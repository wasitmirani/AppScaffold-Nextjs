"use client";

import { useRouter } from 'next/navigation';

const SESSION_DURATION_MINUTES = Number(process.env.NEXT_PUBLIC_SESSION_DURATION_MINUTES ?? 30);
const EXPIRY_KEY = 'authExpiry';
const TOKEN_KEY = 'authToken';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    if (typeof window !== 'undefined') {
      const expiry = Date.now() + SESSION_DURATION_MINUTES * 60 * 1000;
      window.localStorage.setItem(TOKEN_KEY, 'demo-token');
      window.localStorage.setItem(EXPIRY_KEY, String(expiry));
      router.replace('/app/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
        <p className="mb-6 text-sm text-slate-600">
          Use this demo button to authenticate and access the protected app layout.
        </p>
        <p className="mb-6 text-xs text-slate-500">
          Your session will expire after {SESSION_DURATION_MINUTES} minutes.
        </p>
        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
