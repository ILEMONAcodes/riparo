'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  Users,
  TrendingUp,
  UserCheck,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  ShieldCheck,
  Menu,
  X,
  Globe,
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const adminNavItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Properties', href: '/admin/properties', icon: Building2 },
    { label: 'Leads Pipeline', href: '/admin/leads', icon: Users },
    { label: 'Sales Team', href: '/admin/team', icon: TrendingUp },
    { label: 'Clients', href: '/admin/clients', icon: UserCheck },
    { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { label: 'Notifications', href: '/admin/notifications', icon: Bell },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen w-full bg-[#FAF8F5] overflow-hidden">
      
      {/* MOBILE TOP NAVBAR */}
      <div className="md:hidden bg-[#1F0B05] text-white p-4 flex items-center justify-between z-30 shadow-md w-full shrink-0 border-b border-[#7D4F2E]/20">
        <Link href="/admin" className="relative w-28 h-8 block">
          <Image
            src="/logo.png"
            alt="Riparo Real Estate"
            fill
            priority
            className="object-contain object-left brightness-0 invert"
          />
        </Link>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-xl bg-white/10 text-[#FDBE19] hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MOBILE BACKDROP OVERLAY */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
        />
      )}

      {/* ADMIN SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 h-full w-64 bg-[#1F0B05] text-white flex flex-col justify-between p-5 border-r border-[#7D4F2E]/20 shrink-0 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          {/* LOGO */}
          <div className="pt-2 pb-1 flex items-center justify-between">
            <Link href="/admin" className="relative w-36 h-10 block">
              <Image
                src="/logo.png"
                alt="Riparo Real Estate"
                fill
                priority
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ADMIN BADGE */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAF8F5]/10 border border-[#7D4F2E]/30 text-xs font-semibold text-[#FDBE19]">
            <ShieldCheck className="w-4 h-4 text-[#FDBE19]" />
            <span>Admin Workspace</span>
          </div>

          {/* NAV LINKS */}
          <nav className="space-y-1.5 pt-2">
            {adminNavItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-[#FDBE19] text-[#1F0B05] shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#1F0B05]' : 'text-white/60'}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM NAVIGATION UTILITIES */}
        <div className="pt-4 border-t border-white/10 space-y-1">
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white/70 hover:text-[#FDBE19] hover:bg-white/5 transition-all"
          >
            <Globe className="w-4 h-4 text-[#FDBE19]" />
            <span>Back to Main Site</span>
          </Link>

          <Link
            href="/login"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white/60 hover:text-red-400 hover:bg-white/5 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* ADMIN CONTENT AREA */}
      <main className="flex-1 h-full overflow-y-auto p-4 sm:p-6 lg:p-8 w-full min-w-0 relative z-10">
        {children}
      </main>
    </div>
  );
}