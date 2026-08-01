'use client';

import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Plus,
  Phone,
  Mail,
  Calendar,
  Building2,
  DollarSign,
  ChevronRight,
  MoreVertical,
  Clock,
  CheckCircle2,
  AlertCircle,
  X,
  MessageSquare,
} from 'lucide-react';

type Stage = 'All' | 'New' | 'Inspection Scheduled' | 'Negotiating' | 'Closed Deal' | 'Lost';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  property: string;
  budget: string;
  stage: Exclude<Stage, 'All'>;
  assignedDate: string;
  nextAction: string;
  notes: string;
}

export default function AgentLeadsPage() {
  const [activeTab, setActiveTab] = useState<Stage>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Mock Lead Data
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      name: 'Dr. Samuel Alabi',
      email: 'samuel.alabi@gmail.com',
      phone: '+234 803 123 4567',
      property: 'Riparo Prime Palms Estate',
      budget: '₦45,000,000',
      stage: 'Inspection Scheduled',
      assignedDate: 'Jul 28, 2026',
      nextAction: 'Site Inspection tomorrow @ 10:00 AM',
      notes: 'Interested in a 500sqm corner piece plot.',
    },
    {
      id: '2',
      name: 'Engr. David O.',
      email: 'david.o@construction.ng',
      phone: '+234 802 987 6543',
      property: 'Riparo Commercial Hub',
      budget: '₦85,000,000',
      stage: 'Negotiating',
      assignedDate: 'Jul 20, 2026',
      nextAction: 'Follow up on payment plan terms on Friday',
      notes: 'Requesting 3-month installment payment structure.',
    },
    {
      id: '3',
      name: 'Mrs. Funke Adebayo',
      email: 'funke.adebayo@yahoo.com',
      phone: '+234 815 555 0192',
      property: 'Riparo Verified Agro-Plot',
      budget: '₦18,000,000',
      stage: 'New',
      assignedDate: 'Aug 01, 2026',
      nextAction: 'Initial qualification call required',
      notes: 'Inquired via Instagram lead form.',
    },
    {
      id: '4',
      name: 'Chief K. Okonkwo',
      email: 'okonkwo.holdings@gmail.com',
      phone: '+234 701 444 8822',
      property: 'Riparo Haven Luxury Villa',
      budget: '₦120,000,000',
      stage: 'Inspection Scheduled',
      assignedDate: 'Jul 25, 2026',
      nextAction: 'Inspection on Friday @ 2:30 PM',
      notes: 'Buyer is traveling in from Abuja for the viewing.',
    },
    {
      id: '5',
      name: 'Alhaji Bashir M.',
      email: 'bashir.m@trade.ng',
      phone: '+234 809 333 1100',
      property: 'Riparo Prime Palms Plot 12',
      budget: '₦32,000,000',
      stage: 'Closed Deal',
      assignedDate: 'Jul 10, 2026',
      nextAction: 'Deed of Assignment delivered',
      notes: 'Full payment cleared. Commission assigned.',
    },
    {
      id: '6',
      name: 'Chidi Nnamdi',
      email: 'chidi.n@techfirm.io',
      phone: '+234 812 777 9944',
      property: 'Riparo Waterfront Residence',
      budget: '₦60,000,000',
      stage: 'Lost',
      assignedDate: 'Jun 15, 2026',
      nextAction: 'None (Unresponsive)',
      notes: 'Bought property elsewhere in Lekki Phase 1.',
    },
  ]);

  // Tab pipeline configuration
  const tabs: { label: Stage; count: number }[] = [
    { label: 'All', count: leads.length },
    { label: 'New', count: leads.filter((l) => l.stage === 'New').length },
    { label: 'Inspection Scheduled', count: leads.filter((l) => l.stage === 'Inspection Scheduled').length },
    { label: 'Negotiating', count: leads.filter((l) => l.stage === 'Negotiating').length },
    { label: 'Closed Deal', count: leads.filter((l) => l.stage === 'Closed Deal').length },
    { label: 'Lost', count: leads.filter((l) => l.stage === 'Lost').length },
  ];

  // Filtered leads based on search and active tab
  const filteredLeads = leads.filter((lead) => {
    const matchesTab = activeTab === 'All' || lead.stage === activeTab;
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Stage Badge Styles
  const getStageBadge = (stage: Lead['stage']) => {
    switch (stage) {
      case 'New':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Inspection Scheduled':
        return 'bg-[#7D4F2E]/10 text-[#7D4F2E] border-[#7D4F2E]/20';
      case 'Negotiating':
        return 'bg-[#FDBE19]/20 text-[#1F0B05] border-[#FDBE19]/40';
      case 'Closed Deal':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Lost':
        return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  // Quick Stage Update handler
  const handleUpdateStage = (id: string, newStage: Lead['stage']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, stage: newStage } : lead))
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER & QUICK ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Assigned Leads & Pipeline
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Manage your buyer prospects, track site inspections, and close deals.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-xs cursor-pointer w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Lead</span>
        </button>
      </div>

      {/* PIPELINE TABS */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-[#7D4F2E]/15">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.label;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1F0B05] text-white shadow-xs'
                  : 'text-[#7D4F2E] hover:bg-white/80 hover:text-[#1F0B05]'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                  isActive
                    ? 'bg-[#FDBE19] text-[#1F0B05]'
                    : 'bg-[#7D4F2E]/10 text-[#7D4F2E]'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* SEARCH AND BAR FILTER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-[#7D4F2E]/15 shadow-xs">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7D4F2E]" />
          <input
            type="text"
            placeholder="Search leads by client name, email, or estate..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#FAF8F5] border border-[#7D4F2E]/15 focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50 font-medium"
          />
        </div>

        <div className="text-xs text-[#7D4F2E] font-medium self-end sm:self-auto">
          Showing <strong className="text-[#1F0B05]">{filteredLeads.length}</strong> leads
        </div>
      </div>

      {/* LEADS CARDS GRID */}
      {filteredLeads.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-[#7D4F2E]/15 text-center space-y-3">
          <Users className="w-10 h-10 text-[#7D4F2E]/40 mx-auto" />
          <h3 className="text-base font-bold text-[#1F0B05]">No leads found</h3>
          <p className="text-xs text-[#7D4F2E] max-w-sm mx-auto">
            There are no assigned leads matching your current tab filter or search query.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-5 flex flex-col justify-between space-y-4 hover:border-[#FDBE19] transition-all"
            >
              <div className="space-y-3">
                {/* TOP ROW: NAME & STAGE */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-extrabold text-[#1F0B05] text-base leading-snug">
                      {lead.name}
                    </h3>
                    <p className="text-[11px] text-[#7D4F2E] font-medium">
                      Assigned: {lead.assignedDate}
                    </p>
                  </div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border shrink-0 ${getStageBadge(
                      lead.stage
                    )}`}
                  >
                    {lead.stage}
                  </span>
                </div>

                {/* CONTACT INFORMATION */}
                <div className="space-y-1.5 text-xs text-[#1F0B05]">
                  <div className="flex items-center gap-2 text-[#7D4F2E]">
                    <Phone className="w-3.5 h-3.5 text-[#D48C28] shrink-0" />
                    <a
                      href={`tel:${lead.phone}`}
                      className="hover:text-[#1F0B05] font-semibold"
                    >
                      {lead.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#7D4F2E]">
                    <Mail className="w-3.5 h-3.5 text-[#D48C28] shrink-0" />
                    <span className="truncate">{lead.email}</span>
                  </div>
                </div>

                <hr className="border-[#7D4F2E]/10" />

                {/* PROPERTY & BUDGET */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#7D4F2E] font-medium flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-[#7D4F2E]" />
                      Estate:
                    </span>
                    <span className="font-bold text-[#1F0B05] truncate max-w-[170px]">
                      {lead.property}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#7D4F2E] font-medium flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#7D4F2E]" />
                      Budget:
                    </span>
                    <span className="font-extrabold text-[#1F0B05]">
                      {lead.budget}
                    </span>
                  </div>
                </div>

                {/* NEXT ACTION BOX */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/10 space-y-1">
                  <div className="text-[10px] font-bold text-[#D48C28] uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Next Scheduled Step
                  </div>
                  <p className="text-xs font-semibold text-[#1F0B05]">
                    {lead.nextAction}
                  </p>
                </div>

                {/* NOTES */}
                {lead.notes && (
                  <p className="text-[11px] text-[#7D4F2E] italic line-clamp-2">
                    "{lead.notes}"
                  </p>
                )}
              </div>

              {/* BOTTOM ACTIONS & STAGE CHANGING DROPDOWN */}
              <div className="pt-3 border-t border-[#7D4F2E]/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <a
                    href={`tel:${lead.phone}`}
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#FDBE19]/20 text-[#1F0B05] border border-[#7D4F2E]/15 transition-colors"
                    title="Call Client"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${lead.email}`}
                    className="p-2 rounded-lg bg-[#FAF8F5] hover:bg-[#FDBE19]/20 text-[#1F0B05] border border-[#7D4F2E]/15 transition-colors"
                    title="Email Client"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* STAGE SELECT DROPDOWN */}
                <select
                  value={lead.stage}
                  onChange={(e) =>
                    handleUpdateStage(lead.id, e.target.value as Lead['stage'])
                  }
                  className="px-2.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#7D4F2E]/20 text-xs font-bold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19] cursor-pointer"
                >
                  <option value="New">Move to: New</option>
                  <option value="Inspection Scheduled">Move to: Inspection</option>
                  <option value="Negotiating">Move to: Negotiating</option>
                  <option value="Closed Deal">Move to: Closed Deal</option>
                  <option value="Lost">Move to: Lost</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL: LOG NEW LEAD */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#7D4F2E]/20 p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#7D4F2E]/10 pb-3">
              <h3 className="font-extrabold text-lg text-[#1F0B05]">
                Log New Lead
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded-lg text-[#7D4F2E] hover:text-[#1F0B05] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsAddModalOpen(false);
              }}
              className="space-y-4 text-xs text-[#1F0B05]"
            >
              <div>
                <label className="block font-bold text-[#7D4F2E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Chief Emeka N."
                  className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#7D4F2E] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#7D4F2E] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="client@gmail.com"
                    className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#7D4F2E] mb-1">
                    Interested Property
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Riparo Prime Palms"
                    className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#7D4F2E] mb-1">
                    Estimated Budget (NGN)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₦35,000,000"
                    className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#7D4F2E] mb-1">
                  Initial Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specific client requests or requirements..."
                  className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#7D4F2E]/20 text-[#7D4F2E] font-bold hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#FDBE19] text-[#1F0B05] font-extrabold hover:bg-amber-400 transition-colors"
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