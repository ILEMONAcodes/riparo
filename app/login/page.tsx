'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'admin' | 'agent'>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Direct routing based on selected role
    setTimeout(() => {
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/agent');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#1F0B05] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Subtle Circles Pattern to match Logo */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#7D4F2E]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[#FDBE19]/10 blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 relative z-10 border border-[#7D4F2E]/20">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="relative w-36 h-12 mx-auto">
            <Image
              src="/logo.png"
              alt="Riparo Real Estate"
              fill
              priority
              className="object-contain"
            />
          </div>
          <p className="text-xs text-[#7D4F2E] uppercase font-bold tracking-widest pt-1">
            Portal Authentication
          </p>
        </div>

        {/* Role Toggle Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF8F5] rounded-xl border border-[#7D4F2E]/15">
          <button
            type="button"
            onClick={() => setRole('admin')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
              role === 'admin'
                ? 'bg-[#1F0B05] text-white shadow-md'
                : 'text-[#7D4F2E] hover:text-[#1F0B05]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-[#FDBE19]" />
            <span>Admin</span>
          </button>

          <button
            type="button"
            onClick={() => setRole('agent')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
              role === 'agent'
                ? 'bg-[#1F0B05] text-white shadow-md'
                : 'text-[#7D4F2E] hover:text-[#1F0B05]'
            }`}
          >
            <UserCheck className="w-4 h-4 text-[#FDBE19]" />
            <span>Agent</span>
          </button>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1F0B05]">
              Work Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3 text-[#7D4F2E]/60" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={role === 'admin' ? 'admin@riparo.ng' : 'agent@riparo.ng'}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] rounded-xl border border-[#7D4F2E]/20 text-xs text-[#1F0B05] font-medium focus:outline-none focus:border-[#FDBE19] focus:ring-1 focus:ring-[#FDBE19] transition-all"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#1F0B05]">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-[#7D4F2E]/60" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] rounded-xl border border-[#7D4F2E]/20 text-xs text-[#1F0B05] font-medium focus:outline-none focus:border-[#FDBE19] focus:ring-1 focus:ring-[#FDBE19] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2 mt-2"
          >
            <span>{isLoading ? 'Authenticating...' : `Access ${role === 'admin' ? 'Admin' : 'Agent'} Workspace`}</span>
            {!isLoading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="text-center pt-2">
          <p className="text-[11px] text-[#7D4F2E]/80">
            Riparo Real Estate & Construction Portal Access
          </p>
        </div>

      </div>
    </div>
  );
}