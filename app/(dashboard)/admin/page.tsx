'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Users,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  Plus,
  ArrowRight,
  X,
  UserPlus,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

  // Form state for adding a new pipeline lead
  const [leadData, setLeadData] = useState({
    clientName: '',
    property: '',
    budget: '',
    status: 'New',
  });

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`New Lead Saved: ${leadData.clientName}`);
    setIsManageModalOpen(false);
    setLeadData({ clientName: '', property: '', budget: '', status: 'New' });
  };

  const stats = [
    {
      title: 'TOTAL PROPERTIES',
      value: '24',
      change: '+3 this month',
      icon: Building2,
      color: 'text-[#7D4F2E] bg-[#7D4F2E]/10',
    },
    {
      title: 'ACTIVE LEADS',
      value: '142',
      change: '+18% vs last month',
      icon: Users,
      color: 'text-[#7D4F2E] bg-[#7D4F2E]/10',
    },
    {
      title: 'SALES AGENTS',
      value: '8',
      change: '2 active now',
      icon: TrendingUp,
      color: 'text-[#D48C28] bg-[#D48C28]/10',
    },
    {
      title: 'REVENUE (YTD)',
      value: '₦452,000,000',
      change: '+12.4% quarter growth',
      icon: Wallet,
      color: 'text-[#1F0B05] bg-[#FDBE19]/20',
    },
  ];

  const recentLeads = [
    {
      id: '1',
      client: 'Dr. Samuel Alabi',
      property: 'Riparo Prime Palms Estate...',
      budget: '₦45,000,000',
      stage: 'Negotiating',
      badgeBg: 'bg-[#FDBE19]/15 text-[#1F0B05] border-[#FDBE19]/30',
    },
    {
      id: '2',
      client: 'Chief K. Okonkwo',
      property: 'Riparo Haven Luxury 4-B...',
      budget: '₦120,000,000',
      stage: 'Inspection Scheduled',
      badgeBg: 'bg-[#7D4F2E]/10 text-[#7D4F2E] border-[#7D4F2E]/20',
    },
    {
      id: '3',
      client: 'Mrs. Funke Adebayo',
      property: 'Riparo Verified Agro-Inve...',
      budget: '₦18,000,000',
      stage: 'New',
      badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
    },
    {
      id: '4',
      client: 'Engr. David O.',
      property: 'Riparo Commercial Hub',
      budget: '₦85,000,000',
      stage: 'Closed',
      badgeBg: 'bg-[#1F0B05] text-white border-[#1F0B05]',
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Admin Overview
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium">
            Welcome back! Here is an overview of Riparo&apos;s real estate performance.
          </p>
        </div>

        {/* MANAGE PIPELINE BUTTON */}
        <button
          onClick={() => setIsManageModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-sm cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Manage Pipeline</span>
        </button>
      </div>

      {/* KPI STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider">
                  {stat.title}
                </span>
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#1F0B05]">
                  {stat.value}
                </h3>
                <p className="text-xs text-[#D48C28] font-bold mt-1 flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{stat.change}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* RECENT ACTIVITY & SHORTCUTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* RECENT PROSPECT ACTIVITY */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#1F0B05] text-base">
                Recent Prospect Activity
              </h3>
              <p className="text-xs text-[#7D4F2E]">
                Latest leads currently moving through the pipeline
              </p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-[#D48C28] hover:text-[#1F0B05] flex items-center gap-1 transition-colors"
            >
              <span>View All Leads</span>
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
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7D4F2E]/10">
                {recentLeads.map((lead) => (
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

        {/* QUICK SHORTCUTS */}
        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-[#1F0B05] text-base">Quick Shortcuts</h3>
            <p className="text-xs text-[#7D4F2E]">
              Direct access to core administrative controls.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <Link
              href="/admin/leads"
              className="w-full flex items-center justify-between p-3.5 rounded-xl border border-[#7D4F2E]/15 hover:border-[#FDBE19] hover:bg-[#FAF8F5] transition-all text-xs font-bold text-[#1F0B05] group"
            >
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-[#D48C28]" />
                <span>Leads & Pipeline Kanban</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#7D4F2E]/40 group-hover:text-[#1F0B05] transition-colors" />
            </Link>

            <Link
              href="/admin/team"
              className="w-full flex items-center justify-between p-3.5 rounded-xl border border-[#7D4F2E]/15 hover:border-[#FDBE19] hover:bg-[#FAF8F5] transition-all text-xs font-bold text-[#1F0B05] group"
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-4 h-4 text-[#7D4F2E]" />
                <span>Sales Team Leaderboard</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#7D4F2E]/40 group-hover:text-[#1F0B05] transition-colors" />
            </Link>

            <Link
              href="/admin/analytics"
              className="w-full flex items-center justify-between p-3.5 rounded-xl border border-[#7D4F2E]/15 hover:border-[#FDBE19] hover:bg-[#FAF8F5] transition-all text-xs font-bold text-[#1F0B05] group"
            >
              <div className="flex items-center gap-3">
                <Wallet className="w-4 h-4 text-[#1F0B05]" />
                <span>Analytics & Revenue Reports</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#7D4F2E]/40 group-hover:text-[#1F0B05] transition-colors" />
            </Link>
          </div>
        </div>

      </div>

      {/* MANAGE PIPELINE DIALOG / MODAL */}
      {isManageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-[#7D4F2E]/20 relative animate-in fade-in zoom-in-95 duration-200">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsManageModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-[#7D4F2E]/60 hover:text-[#1F0B05] hover:bg-[#FAF8F5]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* MODAL HEADER */}
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-[#FDBE19]/20 text-[#1F0B05] rounded-xl">
                <UserPlus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1F0B05]">
                  Add Pipeline Lead
                </h3>
                <p className="text-xs text-[#7D4F2E]">
                  Register a new prospect into the sales pipeline.
                </p>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-1">
                  Client Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief K. Okonkwo"
                  value={leadData.clientName}
                  onChange={(e) =>
                    setLeadData({ ...leadData, clientName: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#7D4F2E]/20 text-xs focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-1">
                  Interested Property
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Riparo Haven Luxury 4-B..."
                  value={leadData.property}
                  onChange={(e) =>
                    setLeadData({ ...leadData, property: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-xl border border-[#7D4F2E]/20 text-xs focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1F0B05] mb-1">
                    Budget (₦)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 120,000,000"
                    value={leadData.budget}
                    onChange={(e) =>
                      setLeadData({ ...leadData, budget: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-[#7D4F2E]/20 text-xs focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1F0B05] mb-1">
                    Status
                  </label>
                  <select
                    value={leadData.status}
                    onChange={(e) =>
                      setLeadData({ ...leadData, status: e.target.value })
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-[#7D4F2E]/20 text-xs focus:outline-none focus:border-[#FDBE19] bg-white"
                  >
                    <option value="New">New</option>
                    <option value="Inspection Scheduled">Inspection Scheduled</option>
                    <option value="Negotiating">Negotiating</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsManageModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#7D4F2E] hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#FDBE19] text-[#1F0B05] hover:bg-amber-400"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}