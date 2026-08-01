'use client';

import React, { useState } from 'react';
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Building,
  UserCheck,
  LayoutGrid,
  List,
  MoreVertical,
  X,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { MOCK_LEADS, MOCK_AGENTS } from '@/lib/mock-data';
import { Lead } from '@/lib/types';

const PIPELINE_STAGES: Lead['status'][] = [
  'New',
  'Inspection Scheduled',
  'Negotiating',
  'Closed',
];

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(MOCK_LEADS);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for Adding New Lead
  const [newLead, setNewLead] = useState({
    clientName: '',
    phone: '',
    email: '',
    interestedProperty: 'Riparo Prime Palms Estate - Phase 1',
    budget: '',
    status: 'New' as Lead['status'],
    assignedAgent: 'Amina Yusuf',
  });

  // Filter Logic
  const filteredLeads = leads.filter((lead) => {
    return (
      lead.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.interestedProperty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.assignedAgent.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLead.clientName || !newLead.phone || !newLead.budget) return;

    const createdLead: Lead = {
      id: `lead-${Date.now()}`,
      clientName: newLead.clientName,
      phone: newLead.phone,
      email: newLead.email,
      interestedProperty: newLead.interestedProperty,
      budget: Number(newLead.budget),
      date: new Date().toISOString().split('T')[0],
      status: newLead.status,
      assignedAgent: newLead.assignedAgent,
    };

    setLeads([createdLead, ...leads]);
    setIsModalOpen(false);
    setNewLead({
      clientName: '',
      phone: '',
      email: '',
      interestedProperty: 'Riparo Prime Palms Estate - Phase 1',
      budget: '',
      status: 'New',
      assignedAgent: 'Amina Yusuf',
    });
  };

  const moveStage = (leadId: string, direction: 'next' | 'prev') => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) => {
        if (lead.id !== leadId) return lead;
        const currentIndex = PIPELINE_STAGES.indexOf(lead.status);
        const targetIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (targetIndex >= 0 && targetIndex < PIPELINE_STAGES.length) {
          return { ...lead, status: PIPELINE_STAGES[targetIndex] };
        }
        return lead;
      })
    );
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStageColor = (status: Lead['status']) => {
    switch (status) {
      case 'New':
        return 'bg-[#FDBE19]/15 text-[#1F0B05] border-[#FDBE19]/40';
      case 'Inspection Scheduled':
        return 'bg-[#7D4F2E]/10 text-[#7D4F2E] border-[#7D4F2E]/25';
      case 'Negotiating':
        return 'bg-amber-500/10 text-amber-800 border-amber-500/20';
      case 'Closed':
        return 'bg-[#1F0B05]/10 text-[#1F0B05] border-[#1F0B05]/20';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Leads & Pipeline
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Track prospective buyers, inspection schedules, and sales closures across agents.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add New Lead</span>
        </button>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-3 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#7D4F2E]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search leads, email, or agent..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#7D4F2E]/10">
          <button
            onClick={() => setViewMode('kanban')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'kanban'
                ? 'bg-white text-[#1F0B05] shadow-xs border border-[#7D4F2E]/10'
                : 'text-[#7D4F2E]/70 hover:text-[#1F0B05]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Kanban</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-white text-[#1F0B05] shadow-xs border border-[#7D4F2E]/10'
                : 'text-[#7D4F2E]/70 hover:text-[#1F0B05]'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Table</span>
          </button>
        </div>
      </div>

      {/* KANBAN VIEW */}
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {PIPELINE_STAGES.map((stage) => {
            const stageLeads = filteredLeads.filter((l) => l.status === stage);
            return (
              <div
                key={stage}
                className="bg-[#FAF8F5]/80 rounded-2xl p-3 border border-[#7D4F2E]/10 min-h-[500px] flex flex-col gap-3"
              >
                {/* Stage Header */}
                <div className="flex items-center justify-between px-1 pt-1 pb-2 border-b border-[#7D4F2E]/10">
                  <span className="text-xs font-extrabold text-[#1F0B05]">{stage}</span>
                  <span className="w-5 h-5 rounded-full bg-[#1F0B05]/5 text-[#1F0B05] text-[10px] font-bold flex items-center justify-center border border-[#7D4F2E]/10">
                    {stageLeads.length}
                  </span>
                </div>

                {/* Lead Cards */}
                <div className="space-y-3 flex-1">
                  {stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-white p-4 rounded-xl border border-[#7D4F2E]/15 shadow-xs hover:shadow-md transition-shadow space-y-3"
                    >
                      {/* Fixed Flex Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <h4
                            className="font-bold text-sm text-[#1F0B05] truncate"
                            title={lead.clientName}
                          >
                            {lead.clientName}
                          </h4>
                          <p className="text-[10px] font-semibold text-[#7D4F2E]/60 mt-0.5">
                            Added {lead.date}
                          </p>
                        </div>
                        <span className="text-xs font-black text-[#1F0B05] bg-[#FDBE19]/20 px-2 py-0.5 rounded-md border border-[#FDBE19]/30 shrink-0">
                          {formatNaira(lead.budget)}
                        </span>
                      </div>

                      {/* Property Interested */}
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF8F5] border border-[#7D4F2E]/10 text-xs text-[#1F0B05]">
                        <Building className="w-3.5 h-3.5 text-[#7D4F2E] shrink-0" />
                        <span className="truncate font-medium">
                          {lead.interestedProperty}
                        </span>
                      </div>

                      {/* Contacts */}
                      <div className="space-y-1 text-[11px] text-[#7D4F2E] pt-1">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-[#7D4F2E]/60 shrink-0" />
                          <span>{lead.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3 h-3 text-[#7D4F2E]/60 shrink-0" />
                          <span className="truncate">{lead.email}</span>
                        </div>
                      </div>

                      {/* Footer & Actions */}
                      <div className="pt-2 border-t border-[#7D4F2E]/10 flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-1.5 font-bold text-[#1F0B05] min-w-0">
                          <UserCheck className="w-3.5 h-3.5 text-[#7D4F2E] shrink-0" />
                          <span className="truncate">{lead.assignedAgent}</span>
                        </div>

                        {/* Pipeline Stage Controls */}
                        <div className="flex items-center gap-1 text-[#7D4F2E] shrink-0">
                          {stage !== 'New' && (
                            <button
                              onClick={() => moveStage(lead.id, 'prev')}
                              title="Move Backward"
                              className="p-1 text-[#7D4F2E]/70 hover:text-[#1F0B05] hover:bg-[#FAF8F5] rounded transition-colors"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {stage !== 'Closed' && (
                            <button
                              onClick={() => moveStage(lead.id, 'next')}
                              title="Move Forward"
                              className="p-1 text-[#7D4F2E]/70 hover:text-[#1F0B05] hover:bg-[#FAF8F5] rounded transition-colors"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {stageLeads.length === 0 && (
                    <div className="h-32 flex items-center justify-center border-2 border-dashed border-[#7D4F2E]/15 rounded-xl text-[#7D4F2E]/50 text-xs font-medium">
                      No leads in this stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#7D4F2E]">
              <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
                <tr>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Interested Property</th>
                  <th className="p-4">Budget</th>
                  <th className="p-4">Stage</th>
                  <th className="p-4">Assigned Agent</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7D4F2E]/10">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                      <td className="p-4 font-bold text-[#1F0B05] text-sm">
                        {lead.clientName}
                      </td>
                      <td className="p-4 space-y-1">
                        <div className="flex items-center gap-1.5 text-[#1F0B05]">
                          <Phone className="w-3 h-3 text-[#7D4F2E]/60" />
                          <span>{lead.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#7D4F2E]">
                          <Mail className="w-3 h-3 text-[#7D4F2E]/60" />
                          <span>{lead.email}</span>
                        </div>
                      </td>
                      <td className="p-4 font-medium text-[#1F0B05]">
                        {lead.interestedProperty}
                      </td>
                      <td className="p-4 font-extrabold text-[#1F0B05] text-sm">
                        {formatNaira(lead.budget)}
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStageColor(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-[#1F0B05]">
                        {lead.assignedAgent}
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
                      No leads match your current search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1F0B05]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#7D4F2E]/20 shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#7D4F2E]/10 flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#7D4F2E]" />
                <h2 className="font-bold text-[#1F0B05] text-base">Add New Prospect Lead</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-[#7D4F2E]/60 hover:text-[#1F0B05] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateLead} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Client Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Dr. Samuel Alabi"
                  value={newLead.clientName}
                  onChange={(e) =>
                    setNewLead({ ...newLead, clientName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+234 906 000 1552"
                    value={newLead.phone}
                    onChange={(e) =>
                      setNewLead({ ...newLead, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@domain.ng"
                    value={newLead.email}
                    onChange={(e) =>
                      setNewLead({ ...newLead, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Interested Property
                </label>
                <select
                  value={newLead.interestedProperty}
                  onChange={(e) =>
                    setNewLead({ ...newLead, interestedProperty: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                >
                  <option value="Riparo Prime Palms Estate - Phase 1">
                    Riparo Prime Palms Estate - Phase 1
                  </option>
                  <option value="Riparo Commercial Hub & Office Complex">
                    Riparo Commercial Hub & Office Complex
                  </option>
                  <option value="Riparo Haven Luxury 4-Bed Terrace">
                    Riparo Haven Luxury 4-Bed Terrace
                  </option>
                  <option value="Riparo Verified Agro-Investment Plots">
                    Riparo Verified Agro-Investment Plots
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">
                    Budget (NGN ₦)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="30000000"
                    value={newLead.budget}
                    onChange={(e) =>
                      setNewLead({ ...newLead, budget: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">
                    Stage
                  </label>
                  <select
                    value={newLead.status}
                    onChange={(e) =>
                      setNewLead({
                        ...newLead,
                        status: e.target.value as Lead['status'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                  >
                    {PIPELINE_STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Assign Agent
                </label>
                <select
                  value={newLead.assignedAgent}
                  onChange={(e) =>
                    setNewLead({ ...newLead, assignedAgent: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                >
                  {MOCK_AGENTS.map((agent) => (
                    <option key={agent.id} value={agent.name}>
                      {agent.name}
                    </option>
                  ))}
                </select>
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
                  Add Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}