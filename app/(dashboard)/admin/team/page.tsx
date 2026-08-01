'use client';

import React, { useState } from 'react';
import {
  UsersRound,
  Plus,
  Search,
  Trophy,
  TrendingUp,
  DollarSign,
  Award,
  Mail,
  X,
  MoreVertical,
} from 'lucide-react';
import { MOCK_AGENTS } from '@/lib/mock-data';
import { Agent } from '@/lib/types';

export default function AdminSalesTeamPage() {
  const [agents, setAgents] = useState<Agent[]>(MOCK_AGENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for Adding New Agent
  const [newAgent, setNewAgent] = useState({
    name: '',
    email: '',
    assignedLeads: '',
    status: 'Active' as Agent['status'],
  });

  // Default Commission Rate for Riparo Agents (5%)
  const COMMISSION_RATE = 0.05;

  // Helper to generate initials from full name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Filter Logic
  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorted Leaderboard (Top Revenue First)
  const sortedLeaderboard = [...filteredAgents].sort(
    (a, b) => b.revenueGenerated - a.revenueGenerated
  );

  // Aggregated Team Metrics
  const totalTeamRevenue = agents.reduce((acc, a) => acc + a.revenueGenerated, 0);
  const totalTeamDeals = agents.reduce((acc, a) => acc + a.closedDeals, 0);
  const totalTeamCommissions = totalTeamRevenue * COMMISSION_RATE;

  const handleCreateAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgent.name || !newAgent.email) return;

    const createdAgent: Agent = {
      id: `agent-${Date.now()}`,
      name: newAgent.name,
      email: newAgent.email,
      avatar: '',
      assignedLeads: Number(newAgent.assignedLeads) || 0,
      closedDeals: 0,
      revenueGenerated: 0,
      performancePercent: 100,
      status: newAgent.status,
    };

    setAgents([...agents, createdAgent]);
    setIsModalOpen(false);
    setNewAgent({
      name: '',
      email: '',
      assignedLeads: '',
      status: 'Active',
    });
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Sales Team Performance
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Monitor agent leaderboards, active deals, and earned commissions across Riparo sales pipelines.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add New Agent</span>
        </button>
      </div>

      {/* Overview Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold text-[#7D4F2E] uppercase tracking-wider">
              Total Revenue Generated
            </p>
            <h3 className="text-xl font-black text-[#1F0B05] mt-1">
              {formatNaira(totalTeamRevenue)}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#FDBE19]/20 text-[#1F0B05] flex items-center justify-center shrink-0 border border-[#FDBE19]/30">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold text-[#7D4F2E] uppercase tracking-wider">
              Total Closed Deals
            </p>
            <h3 className="text-xl font-black text-[#1F0B05] mt-1">
              {totalTeamDeals} Properties
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#7D4F2E]/15 text-[#7D4F2E] flex items-center justify-center shrink-0 border border-[#7D4F2E]/20">
            <Award className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold text-[#7D4F2E] uppercase tracking-wider">
              Earned Commissions (5%)
            </p>
            <h3 className="text-xl font-black text-[#1F0B05] mt-1">
              {formatNaira(totalTeamCommissions)}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#1F0B05]/10 text-[#1F0B05] flex items-center justify-center shrink-0 border border-[#1F0B05]/20">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Leaderboard Highlights */}
      <div className="bg-gradient-to-r from-[#1F0B05] via-[#2D120B] to-[#1F0B05] text-white p-6 rounded-2xl border border-[#7D4F2E]/30 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Trophy className="w-5 h-5 text-[#FDBE19]" />
          <h2 className="font-bold text-base tracking-wide">
            Top Performing Agent - Q3 2026
          </h2>
        </div>

        {sortedLeaderboard.length > 0 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#FAF8F5]/10 backdrop-blur-xs p-4 rounded-xl border border-[#FAF8F5]/15">
            <div className="flex items-center gap-4">
              {/* Leaderboard Avatar Badge */}
              <div className="w-16 h-16 rounded-full bg-[#FDBE19] text-[#1F0B05] font-black text-xl flex items-center justify-center border-2 border-white shadow-md shrink-0">
                {getInitials(sortedLeaderboard[0].name)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-white">{sortedLeaderboard[0].name}</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FDBE19] text-[#1F0B05]">
                    #1 Top Seller
                  </span>
                </div>
                <p className="text-xs text-[#FAF8F5]/70">{sortedLeaderboard[0].email}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center md:text-right w-full md:w-auto border-t md:border-t-0 border-[#7D4F2E]/40 pt-4 md:pt-0">
              <div>
                <p className="text-[10px] text-[#FAF8F5]/60 uppercase font-bold">Revenue</p>
                <p className="font-black text-[#FDBE19] text-sm">
                  {formatNaira(sortedLeaderboard[0].revenueGenerated)}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#FAF8F5]/60 uppercase font-bold">Closed Deals</p>
                <p className="font-bold text-white text-sm">
                  {sortedLeaderboard[0].closedDeals}
                </p>
              </div>
              <div>
                <p className="text-[10px] text-[#FAF8F5]/60 uppercase font-bold">Est. Commission</p>
                <p className="font-bold text-[#FAF8F5] text-sm">
                  {formatNaira(sortedLeaderboard[0].revenueGenerated * COMMISSION_RATE)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Control & Search Bar */}
      <div className="bg-white p-3 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#7D4F2E]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search agent name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
          />
        </div>
      </div>

      {/* Agents Table */}
      <div className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#7D4F2E]">
            <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
              <tr>
                <th className="p-4">Rank & Agent</th>
                <th className="p-4">Active Leads</th>
                <th className="p-4">Closed Deals</th>
                <th className="p-4">Total Revenue</th>
                <th className="p-4">Commission (5%)</th>
                <th className="p-4">Performance Rate</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#7D4F2E]/10">
              {sortedLeaderboard.length > 0 ? (
                sortedLeaderboard.map((agent, index) => (
                  <tr key={agent.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="font-black text-[#7D4F2E]/60 text-xs w-4">
                          #{index + 1}
                        </span>
                        {/* Table Avatar Badge */}
                        <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#7D4F2E]/30 text-[#1F0B05] font-extrabold text-xs flex items-center justify-center shrink-0">
                          {getInitials(agent.name)}
                        </div>
                        <div>
                          <p className="font-bold text-[#1F0B05] text-sm">{agent.name}</p>
                          <div className="flex items-center gap-1 text-[11px] text-[#7D4F2E]">
                            <Mail className="w-3 h-3 text-[#7D4F2E]/60" />
                            <span>{agent.email}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-[#1F0B05]">
                      {agent.assignedLeads} Leads
                    </td>
                    <td className="p-4 font-bold text-[#1F0B05]">
                      {agent.closedDeals} Deals
                    </td>
                    <td className="p-4 font-extrabold text-[#1F0B05]">
                      {formatNaira(agent.revenueGenerated)}
                    </td>
                    <td className="p-4 font-bold text-[#7D4F2E]">
                      {formatNaira(agent.revenueGenerated * COMMISSION_RATE)}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-[#FAF8F5] border border-[#7D4F2E]/15 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#FDBE19] h-full rounded-full"
                            style={{ width: `${agent.performancePercent}%` }}
                          />
                        </div>
                        <span className="font-extrabold text-[#1F0B05] text-[11px]">
                          {agent.performancePercent}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button className="p-1.5 text-[#7D4F2E] hover:text-[#1F0B05] rounded-lg hover:bg-[#FAF8F5]">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center p-8 text-[#7D4F2E]/60 font-medium">
                    No agents match your current search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Agent Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1F0B05]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#7D4F2E]/20 shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#7D4F2E]/10 flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <UsersRound className="w-5 h-5 text-[#7D4F2E]" />
                <h2 className="font-bold text-[#1F0B05] text-base">Add New Sales Agent</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-[#7D4F2E]/60 hover:text-[#1F0B05] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateAgent} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Ibrahim Musa"
                  value={newAgent.name}
                  onChange={(e) =>
                    setNewAgent({ ...newAgent, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Riparo Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="ibrahim@riparo.ng"
                  value={newAgent.email}
                  onChange={(e) =>
                    setNewAgent({ ...newAgent, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Initial Assigned Leads
                </label>
                <input
                  type="number"
                  placeholder="10"
                  value={newAgent.assignedLeads}
                  onChange={(e) =>
                    setNewAgent({ ...newAgent, assignedLeads: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#7D4F2E]/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-[#7D4F2E] hover:text-[#1F0B05] font-bold text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold rounded-xl text-xs transition-colors shadow-sm"
                >
                  Onboard Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}