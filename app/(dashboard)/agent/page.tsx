'use client';

import React from 'react';
import Link from 'next/link';
import {
  Users,
  Calendar,
  Wallet,
  ArrowRight,
  Plus,
  Eye,
  Building2,
  Clock,
  PhoneCall,
} from 'lucide-react';

export default function AgentDashboardPage() {
  const stats = [
    {
      title: 'ASSIGNED LEADS',
      value: '28',
      icon: Users,
    },
    {
      title: 'ACTIVE INSPECTIONS',
      value: '5',
      icon: Calendar,
    },
    {
      title: 'EARNED COMMISSIONS',
      value: '₦4,200,000',
      icon: Wallet,
    },
  ];

  const upcomingInspections = [
    {
      id: '1',
      client: 'Dr. Samuel Alabi',
      property: 'Riparo Prime Palms Estate',
      date: 'Tomorrow, 10:00 AM',
      location: 'Ibeju-Lekki, Lagos',
    },
    {
      id: '2',
      client: 'Chief K. Okonkwo',
      property: 'Riparo Haven Luxury Villa',
      date: 'Friday, 2:30 PM',
      location: 'Ikoyi, Lagos',
    },
  ];

  const recentAssignedLeads = [
    {
      id: '1',
      client: 'Mrs. Funke Adebayo',
      property: 'Riparo Verified Agro-Plot',
      budget: '₦18,000,000',
      stage: 'New Lead',
      badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    {
      id: '2',
      client: 'Engr. David O.',
      property: 'Riparo Commercial Hub',
      budget: '₦85,000,000',
      stage: 'Negotiating',
      badgeBg: 'bg-[#FDBE19]/15 text-[#1F0B05] border-[#FDBE19]/30',
    },
    {
      id: '3',
      client: 'Alhaji Bashir M.',
      property: 'Riparo Prime Palms Plot 12',
      budget: '₦32,000,000',
      stage: 'Inspection Scheduled',
      badgeBg: 'bg-[#7D4F2E]/10 text-[#7D4F2E] border-[#7D4F2E]/20',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Agent Overview
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Welcome back! Here is your personal performance breakdown.
          </p>
        </div>

        {/* QUICK ACTION BUTTON */}
        <Link
          href="/agent/leads"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-xs cursor-pointer w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Log New Lead</span>
        </Link>
      </div>

      {/* TOP STAT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-[#7D4F2E]/15 shadow-xs flex flex-col justify-between space-y-4"
          >
            <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider">
              {stat.title}
            </span>
            <h3 className="text-3xl font-extrabold text-[#1F0B05] tracking-tight">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* RECENT ASSIGNED LEADS TABLE */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#1F0B05] text-base">
                My Assigned Leads
              </h3>
              <p className="text-xs text-[#7D4F2E]">
                Active buyers currently in your pipeline
              </p>
            </div>
            <Link
              href="/agent/leads"
              className="text-xs font-bold text-[#D48C28] hover:text-[#1F0B05] flex items-center gap-1 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#1F0B05]">
              <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
                <tr>
                  <th className="p-3">Client</th>
                  <th className="p-3">Interested Property</th>
                  <th className="p-3">Budget</th>
                  <th className="p-3">Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7D4F2E]/10">
                {recentAssignedLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-3 font-bold text-[#1F0B05]">
                      {lead.client}
                    </td>
                    <td className="p-3 font-medium text-[#7D4F2E] truncate max-w-[180px]">
                      {lead.property}
                    </td>
                    <td className="p-3 font-bold text-[#1F0B05]">
                      {lead.budget}
                    </td>
                    <td className="p-3">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${lead.badgeBg}`}>
                        {lead.stage}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* UPCOMING INSPECTIONS & ACTIONS */}
        <div className="space-y-6">
          {/* UPCOMING INSPECTIONS */}
          <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-[#1F0B05] text-base">
                Upcoming Inspections
              </h3>
              <span className="text-[10px] font-bold bg-[#7D4F2E]/10 text-[#7D4F2E] px-2 py-0.5 rounded-full">
                {upcomingInspections.length} Scheduled
              </span>
            </div>

            <div className="space-y-3">
              {upcomingInspections.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-[#7D4F2E]/15 bg-[#FAF8F5] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xs text-[#1F0B05]">
                      {item.client}
                    </h4>
                    <span className="text-[10px] font-bold text-[#D48C28] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-[#7D4F2E] font-medium truncate">
                    {item.property}
                  </p>
                  <p className="text-[11px] text-[#7D4F2E]/70">
                    Location: {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AGENT SHORTCUTS */}
          <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-xs space-y-3">
            <h3 className="font-bold text-[#1F0B05] text-base">Quick Shortcuts</h3>
            
            <div className="space-y-2">
              <Link
                href="/agent/properties"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-[#7D4F2E]/15 hover:border-[#FDBE19] hover:bg-[#FAF8F5] transition-all text-xs font-bold text-[#1F0B05] group"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-[#D48C28]" />
                  <span>Browse Available Estates</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#7D4F2E]/40 group-hover:text-[#1F0B05]" />
              </Link>

              <Link
                href="/agent/commissions"
                className="w-full flex items-center justify-between p-3 rounded-xl border border-[#7D4F2E]/15 hover:border-[#FDBE19] hover:bg-[#FAF8F5] transition-all text-xs font-bold text-[#1F0B05] group"
              >
                <div className="flex items-center gap-2.5">
                  <Wallet className="w-4 h-4 text-[#7D4F2E]" />
                  <span>My Commission Payouts</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#7D4F2E]/40 group-hover:text-[#1F0B05]" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}