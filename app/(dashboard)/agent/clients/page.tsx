'use client';

import React, { useState } from 'react';
import {
  Users,
  Search,
  Plus,
  Phone,
  Mail,
  Building2,
  Calendar,
  DollarSign,
  UserCheck,
  X,
  Clock,
  ExternalLink,
  ChevronRight,
  MapPin,
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  occupation: string;
  status: 'Active Buyer' | 'Closed Client' | 'Prospect';
  purchasedPropertiesCount: number;
  totalSpent: string;
  lastContactDate: string;
  notes: string;
  assignedProperty: string;
}

export default function AgentClientsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);

  // Mock Clients Data
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Dr. Samuel Alabi',
      phone: '+234 803 123 4567',
      email: 'samuel.alabi@gmail.com',
      occupation: 'Medical Doctor',
      status: 'Active Buyer',
      purchasedPropertiesCount: 1,
      totalSpent: '₦45,000,000',
      lastContactDate: 'Yesterday',
      assignedProperty: 'Riparo Prime Palms Estate',
      notes: 'Looking to acquire a second commercial plot in Lekki phase 1.',
    },
    {
      id: '2',
      name: 'Alhaji Bashir M.',
      phone: '+234 809 333 1100',
      email: 'bashir.m@trade.ng',
      occupation: 'Commodities Trader',
      status: 'Closed Client',
      purchasedPropertiesCount: 2,
      totalSpent: '₦72,000,000',
      lastContactDate: 'Jul 28, 2026',
      assignedProperty: 'Riparo Prime Palms Plot 12',
      notes: 'Completed full payment for Plot 12. Deed of assignment issued.',
    },
    {
      id: '3',
      name: 'Mrs. Funke Adebayo',
      phone: '+234 815 555 0192',
      email: 'funke.adebayo@yahoo.com',
      occupation: 'Software Executive',
      status: 'Prospect',
      purchasedPropertiesCount: 0,
      totalSpent: '₦0',
      lastContactDate: 'Aug 01, 2026',
      assignedProperty: 'Riparo Verified Agro-Plot',
      notes: 'Inquired about agricultural land banking in Epe.',
    },
    {
      id: '4',
      name: 'Chief K. Okonkwo',
      phone: '+234 701 444 8822',
      email: 'okonkwo.holdings@gmail.com',
      occupation: 'Real Estate Developer',
      status: 'Active Buyer',
      purchasedPropertiesCount: 3,
      totalSpent: '₦210,000,000',
      lastContactDate: '2 days ago',
      assignedProperty: 'Riparo Haven Luxury Villa',
      notes: 'Scheduled for villa viewing in Ikoyi this Friday.',
    },
  ]);

  // Filtered Clients
  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery)
  );

  const getStatusBadge = (status: Client['status']) => {
    switch (status) {
      case 'Active Buyer':
        return 'bg-[#FDBE19]/20 text-[#1F0B05] border-[#FDBE19]/40';
      case 'Closed Client':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Prospect':
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            My Clients
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Manage your personal client list, view lifetime spend, and track past transactions.
          </p>
        </div>

        <button
          onClick={() => setIsAddClientModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-xs cursor-pointer w-fit"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Client</span>
        </button>
      </div>

      {/* SEARCH AND COUNTER */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#7D4F2E]/15 shadow-xs">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]" />
          <input
            type="text"
            placeholder="Search clients by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#FAF8F5] border border-[#7D4F2E]/15 focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50 font-medium"
          />
        </div>

        <div className="text-xs text-[#7D4F2E] font-medium">
          Total Client Directory: <strong className="text-[#1F0B05]">{filteredClients.length}</strong>
        </div>
      </div>

      {/* CLIENT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-5 flex flex-col justify-between space-y-4 hover:border-[#FDBE19] transition-all"
          >
            <div className="space-y-3">
              {/* TOP NAME & STATUS */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-extrabold text-[#1F0B05] text-base leading-snug">
                    {client.name}
                  </h3>
                  <p className="text-[11px] text-[#7D4F2E] font-medium">
                    {client.occupation}
                  </p>
                </div>
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border shrink-0 ${getStatusBadge(
                    client.status
                  )}`}
                >
                  {client.status}
                </span>
              </div>

              {/* CONTACT DETAILS */}
              <div className="space-y-1.5 text-xs text-[#1F0B05]">
                <div className="flex items-center gap-2 text-[#7D4F2E]">
                  <Phone className="w-3.5 h-3.5 text-[#D48C28] shrink-0" />
                  <a href={`tel:${client.phone}`} className="hover:text-[#1F0B05] font-semibold">
                    {client.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#7D4F2E]">
                  <Mail className="w-3.5 h-3.5 text-[#D48C28] shrink-0" />
                  <span className="truncate">{client.email}</span>
                </div>
              </div>

              <hr className="border-[#7D4F2E]/10" />

              {/* PURCHASE STATS */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-[#FAF8F5] rounded-xl border border-[#7D4F2E]/10">
                <div>
                  <span className="text-[10px] font-bold text-[#7D4F2E] uppercase block">
                    Properties
                  </span>
                  <span className="text-xs font-extrabold text-[#1F0B05]">
                    {client.purchasedPropertiesCount} Purchased
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#7D4F2E] uppercase block">
                    Total Volume
                  </span>
                  <span className="text-xs font-extrabold text-[#1F0B05]">
                    {client.totalSpent}
                  </span>
                </div>
              </div>

              {/* CURRENT INTEREST */}
              <div className="text-xs text-[#7D4F2E]">
                <span className="font-bold text-[#1F0B05]">Active Estate Interest: </span>
                {client.assignedProperty}
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="pt-3 border-t border-[#7D4F2E]/10 flex items-center justify-between gap-2">
              <span className="text-[10px] text-[#7D4F2E]/70 font-medium">
                Last contact: {client.lastContactDate}
              </span>

              <button
                onClick={() => setSelectedClient(client)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#D48C28] hover:text-[#1F0B05] transition-colors cursor-pointer"
              >
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL: CLIENT DETAILS */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#7D4F2E]/20 p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#7D4F2E]/10 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-[#1F0B05]">
                  {selectedClient.name}
                </h3>
                <p className="text-xs text-[#7D4F2E]">{selectedClient.occupation}</p>
              </div>
              <button
                onClick={() => setSelectedClient(null)}
                className="p-1 rounded-lg text-[#7D4F2E] hover:text-[#1F0B05] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-2">
                <span className="font-bold text-[#7D4F2E] uppercase tracking-wider text-[10px]">
                  Contact Information
                </span>
                <div className="p-3 bg-[#FAF8F5] rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#7D4F2E]">Phone:</span>
                    <strong className="text-[#1F0B05]">{selectedClient.phone}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7D4F2E]">Email:</span>
                    <strong className="text-[#1F0B05]">{selectedClient.email}</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-[#7D4F2E] uppercase tracking-wider text-[10px]">
                  Transaction History
                </span>
                <div className="p-3 bg-[#FAF8F5] rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#7D4F2E]">Land Deals Closed:</span>
                    <strong className="text-[#1F0B05]">
                      {selectedClient.purchasedPropertiesCount} Plots
                    </strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7D4F2E]">Total Capital Spent:</span>
                    <strong className="text-[#1F0B05]">{selectedClient.totalSpent}</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-[#7D4F2E] uppercase tracking-wider text-[10px]">
                  Agent Notes
                </span>
                <p className="p-3 bg-[#FAF8F5] rounded-xl text-[#1F0B05] font-medium leading-relaxed">
                  "{selectedClient.notes}"
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#7D4F2E]/10 flex items-center justify-end">
              <button
                onClick={() => setSelectedClient(null)}
                className="px-4 py-2 rounded-xl bg-[#1F0B05] text-white font-bold text-xs hover:bg-[#7D4F2E] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD CLIENT */}
      {isAddClientModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#7D4F2E]/20 p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#7D4F2E]/10 pb-3">
              <h3 className="font-extrabold text-base text-[#1F0B05]">
                Add Client to Directory
              </h3>
              <button
                onClick={() => setIsAddClientModalOpen(false)}
                className="p-1 rounded-lg text-[#7D4F2E] hover:text-[#1F0B05] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsAddClientModalOpen(false);
              }}
              className="space-y-3 text-xs text-[#1F0B05]"
            >
              <div>
                <label className="block font-bold text-[#7D4F2E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Client full name"
                  className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#7D4F2E] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234..."
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

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddClientModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#7D4F2E]/20 text-[#7D4F2E] font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#FDBE19] text-[#1F0B05] font-extrabold hover:bg-amber-400 transition-colors"
                >
                  Save Client
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}