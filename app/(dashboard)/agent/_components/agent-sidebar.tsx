'use client';

import React from 'react';
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
} from 'lucide-react';

export default function AgentSidebar() {
  const pathname = usePathname();

  const agentNavItems = [
    { label: 'Dashboard', href: '/agent', icon: LayoutDashboard },
    { label: 'Assigned Leads', href: '/agent/leads', icon: Users },
    { label: 'My Properties', href: '/agent/properties', icon: Building2 },
    { label: 'My Clients', href: '/agent/clients', icon: UserCheck },
    { label: 'Commissions', href: '/agent/commissions', icon: Award },
    { label: 'Notifications', href: '/agent/notifications', icon: Bell },
    { label: 'Settings', href: '/agent/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#1F0B05] text-white flex flex-col justify-between p-5 border-r border-[#7D4F2E]/20 shrink-0 min-h-screen">
      <div className="space-y-6">
        
        {/* RIPARO LOGO */}
        <div className="pt-2 pb-1">
          <Link href="/agent" className="relative w-36 h-10 block">
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
        <nav className="space-y-1.5 pt-2">
          {agentNavItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={idx}
                href={item.href}
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

      {/* LOGOUT */}
      <div className="pt-6 border-t border-white/10">
        <Link
          href="/login"
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white/60 hover:text-[#FDBE19] transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}