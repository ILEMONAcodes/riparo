'use client';

import React from 'react';
import { Building2, Users, Wallet, ArrowUpRight } from 'lucide-react';

export default function AgentDashboardPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-[#1F0B05]">Agent Overview</h1>
        <p className="text-xs text-[#7D4F2E] font-medium">
          Welcome back! Here is your personal performance breakdown.
        </p>
      </div>

      {/* AGENT STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm space-y-2">
          <span className="text-[10px] font-bold text-[#7D4F2E] uppercase">Assigned Leads</span>
          <h3 className="text-2xl font-bold text-[#1F0B05]">28</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm space-y-2">
          <span className="text-[10px] font-bold text-[#7D4F2E] uppercase">Active Inspections</span>
          <h3 className="text-2xl font-bold text-[#1F0B05]">5</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm space-y-2">
          <span className="text-[10px] font-bold text-[#7D4F2E] uppercase">Earned Commissions</span>
          <h3 className="text-2xl font-bold text-[#1F0B05]">₦4,200,000</h3>
        </div>
      </div>
    </div>
  );
}