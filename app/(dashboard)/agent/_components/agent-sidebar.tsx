'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  Award,
  Bell,
  Settings,
  LogOut,
  User,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react';

export default function AgentSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const agentNavItems = [
    { label: 'Dashboard', href: '/agent', icon: LayoutDashboard },
    { label: 'Assigned Leads', href: '/agent/leads', icon: Users },
    { label: 'My Properties', href: '/agent/properties', icon: Building2 },
    { label: 'My Clients', href: '/agent/clients', icon: UserCheck },
    { label: 'Commissions', href: '/agent/commissions', icon: Award },
    { label: 'Notifications', href: '/agent/notifications', icon: Bell },
    { label: 'Settings', href: '/agent/settings', icon: Settings },
  ];

  const sidebarContent = (
    <div className="flex flex-col justify-between h-full p-5 text-white bg-[#1F0B05]">
      <div className="space-y-5">
        {/* BACK TO MAIN SITE LINK & CLOSE BUTTON */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/60 hover:text-[#FDBE19] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Main Site</span>
          </Link>

          {/* CLOSE BUTTON (ONLY INSIDE MOBILE DRAWER) */}
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1 rounded-lg bg-white/10 text-white/80 hover:text-white md:hidden cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* RIPARO LOGO */}
        <div className="pt-1 pb-1">
          <Link href="/agent" className="relative w-36 h-9 block">
            <Image
              src="/logo.png"
              alt="Riparo Real Estate"
              fill
              priority
              className="object-contain object-left brightness-0 invert"
            />
          </Link>
        </div>

        {/* AGENT BADGE */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FAF8F5]/10 border border-[#7D4F2E]/30 text-xs font-semibold text-[#FDBE19]">
          <User className="w-4 h-4 text-[#FDBE19]" />
          <span>Agent Portal</span>
        </div>

        {/* NAV LINKS */}
        <nav className="space-y-1.5 pt-1">
          {agentNavItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#FDBE19] text-[#1F0B05] shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-[#1F0B05]' : 'text-white/60'
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* LOGOUT */}
      <div className="pt-5 border-t border-white/10">
        <Link
          href="/login"
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white/60 hover:text-[#FDBE19] transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* 1. MOBILE TOP HEADER (Spans 100% width across top of mobile screen) */}
      <div className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-[#1F0B05] text-white border-b border-[#7D4F2E]/20 sticky top-0 z-40">
        <Link href="/agent" className="relative w-28 h-8 block">
          <Image
            src="/logo.png"
            alt="Riparo Real Estate"
            fill
            priority
            className="object-contain object-left brightness-0 invert"
          />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-white/80 hover:text-white rounded-lg bg-white/5 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 2. MOBILE BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 md:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* 3. MOBILE SLIDE-OUT DRAWER */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#1F0B05] border-r border-[#7D4F2E]/20 transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* 4. DESKTOP PERMANENT SIDEBAR (Hidden on mobile via hidden md:flex) */}
      <aside className="hidden md:flex w-64 bg-[#1F0B05] border-r border-[#7D4F2E]/20 shrink-0 h-screen sticky top-0 overflow-y-auto">
        {sidebarContent}
      </aside>
    </>
  );
}