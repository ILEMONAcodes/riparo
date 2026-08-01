'use client';

import React, { useState } from 'react';
import {
  Users,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  Building2,
  Calendar,
  MoreVertical,
  X,
  CheckCircle2,
  Clock,
  DollarSign,
} from 'lucide-react';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: 'Buying' | 'Investing' | 'Renting';
  budget: number;
  assignedAgent: string;
  status: 'Active Lead' | 'Under Contract' | 'Closed Client';
  dateAdded: string;
}

const MOCK_CLIENTS: Client[] = [
  {
    id: 'client-1',
    name: 'Amina Bello',
    email: 'a.bello@example.com',
    phone: '+234 803 123 4567',
    interest: 'Buying',
    budget: 350000000,
    assignedAgent: 'Ibrahim Musa',
    status: 'Under Contract',
    dateAdded: '2026-07-15',
  },
  {
    id: 'client-2',
    name: 'Chidi Okonkwo',
    email: 'chidi.o@example.com',
    phone: '+234 802 987 6543',
    interest: 'Investing',
    budget: 850000000,
    assignedAgent: 'Fatima Abubakar',
    status: 'Active Lead',
    dateAdded: '2026-07-22',
  },
  {
    id: 'client-3',
    name: 'David Adeleke',
    email: 'd.adeleke@example.com',
    phone: '+234 811 555 0192',
    interest: 'Buying',
    budget: 1200000000,
    assignedAgent: 'Ibrahim Musa',
    status: 'Closed Client',
    dateAdded: '2026-06-10',
  },
];

export default function AdminClientsPage() {
  const [clients, setClients] = useState<Client[]>(MOCK_CLIENTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying' as Client['interest'],
    budget: '',
    assignedAgent: 'Ibrahim Musa',
    status: 'Active Lead' as Client['status'],
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery);

    const matchesStatus =
      statusFilter === 'All' || client.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name || !newClient.email) return;

    const createdClient: Client = {
      id: `client-${Date.now()}`,
      name: newClient.name,
      email: newClient.email,
      phone: newClient.phone || '+234 000 000 0000',
      interest: newClient.interest,
      budget: Number(newClient.budget) || 0,
      assignedAgent: newClient.assignedAgent,
      status: newClient.status,
      dateAdded: new Date().toISOString().split('T')[0],
    };

    setClients([createdClient, ...clients]);
    setIsModalOpen(false);
    setNewClient({
      name: '',
      email: '',
      phone: '',
      interest: 'Buying',
      budget: '',
      assignedAgent: 'Ibrahim Musa',
      status: 'Active Lead',
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Top Header - Mobile Stacked */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1F0B05] tracking-tight">
            Client Directory
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Manage high-net-worth buyers, investors, and active deal pipelines.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add New Client</span>
        </button>
      </div>

      {/* Metrics Bar - 1 Col on Mobile, 3 Col on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold text-[#7D4F2E] uppercase tracking-wider">
              Total Managed Clients
            </p>
            <h3 className="text-lg sm:text-xl font-black text-[#1F0B05] mt-1">
              {clients.length} Clients
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#1F0B05] flex items-center justify-center shrink-0 border border-[#7D4F2E]/20">
            <Users className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-extrabold text-[#7D4F2E] uppercase tracking-wider">
              Under Contract
            </p>
            <h3 className="text-lg sm:text-xl font-black text-[#1F0B05] mt-1">
              {clients.filter((c) => c.status === 'Under Contract').length} Deals
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#FDBE19]/20 text-[#1F0B05] flex items-center justify-center shrink-0 border border-[#FDBE19]/30">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex items-center justify-between sm:col-span-2 lg:col-span-1">
          <div>
            <p className="text-[10px] font-extrabold text-[#7D4F2E] uppercase tracking-wider">
              Total Portfolio Budget
            </p>
            <h3 className="text-lg sm:text-xl font-black text-[#1F0B05] mt-1">
              {formatNaira(clients.reduce((acc, c) => acc + c.budget, 0))}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#7D4F2E]/15 text-[#7D4F2E] flex items-center justify-center shrink-0 border border-[#7D4F2E]/20">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="bg-white p-3 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-[#7D4F2E]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search client, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="w-4 h-4 text-[#7D4F2E] shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 text-xs bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] font-semibold"
          >
            <option value="All">All Statuses</option>
            <option value="Active Lead">Active Leads</option>
            <option value="Under Contract">Under Contract</option>
            <option value="Closed Client">Closed Clients</option>
          </select>
        </div>
      </div>

      {/* --- MOBILE CARDS (Shows only on small screens) --- */}
      <div className="block md:hidden space-y-3">
        {filteredClients.length > 0 ? (
          filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white p-4 rounded-2xl border border-[#7D4F2E]/15 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between border-b border-[#7D4F2E]/10 pb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#7D4F2E]/30 text-[#1F0B05] font-black text-xs flex items-center justify-center shrink-0">
                    {getInitials(client.name)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F0B05] text-sm">{client.name}</h4>
                    <p className="text-[10px] text-[#7D4F2E]">{client.email}</p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black ${
                    client.status === 'Closed Client'
                      ? 'bg-emerald-100 text-emerald-800'
                      : client.status === 'Under Contract'
                      ? 'bg-[#FDBE19]/20 text-[#1F0B05]'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {client.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div>
                  <span className="text-[10px] text-[#7D4F2E]/60 uppercase font-bold block">
                    Interest & Budget
                  </span>
                  <span className="font-extrabold text-[#1F0B05]">
                    {formatNaira(client.budget)}
                  </span>
                  <span className="text-[10px] text-[#7D4F2E] block">({client.interest})</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#7D4F2E]/60 uppercase font-bold block">
                    Agent
                  </span>
                  <span className="font-semibold text-[#1F0B05]">{client.assignedAgent}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#7D4F2E] pt-2 border-t border-[#7D4F2E]/10">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#7D4F2E]/60" />
                  {client.phone}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#7D4F2E]/60" />
                  {client.dateAdded}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white p-6 rounded-2xl text-center text-xs text-[#7D4F2E]/60">
            No clients match your filter.
          </div>
        )}
      </div>

      {/* --- DESKTOP TABLE (Hidden on Mobile) --- */}
      <div className="hidden md:block bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-sm overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-xs text-[#7D4F2E]">
            <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
              <tr>
                <th className="p-4">Client</th>
                <th className="p-4">Interest & Budget</th>
                <th className="p-4">Assigned Agent</th>
                <th className="p-4">Status</th>
                <th className="p-4">Added Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#7D4F2E]/10">
              {filteredClients.length > 0 ? (
                filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#7D4F2E]/30 text-[#1F0B05] font-extrabold text-xs flex items-center justify-center shrink-0">
                          {getInitials(client.name)}
                        </div>
                        <div>
                          <p className="font-bold text-[#1F0B05] text-sm">{client.name}</p>
                          <div className="flex items-center gap-3 mt-0.5 text-[11px]">
                            <span className="flex items-center gap-1 text-[#7D4F2E]">
                              <Mail className="w-3 h-3" />
                              {client.email}
                            </span>
                            <span className="flex items-center gap-1 text-[#7D4F2E]">
                              <Phone className="w-3 h-3" />
                              {client.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[#1F0B05] font-bold text-[10px] border border-[#7D4F2E]/15 mb-1">
                        {client.interest}
                      </span>
                      <p className="font-extrabold text-[#1F0B05]">
                        {formatNaira(client.budget)}
                      </p>
                    </td>
                    <td className="p-4 font-semibold text-[#1F0B05]">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#7D4F2E]" />
                        <span>{client.assignedAgent}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black ${
                          client.status === 'Closed Client'
                            ? 'bg-emerald-100 text-emerald-800'
                            : client.status === 'Under Contract'
                            ? 'bg-[#FDBE19]/20 text-[#1F0B05]'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {client.status === 'Closed Client' && <CheckCircle2 className="w-3 h-3" />}
                        {client.status}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-[#7D4F2E]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#7D4F2E]/60" />
                        <span>{client.dateAdded}</span>
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
                  <td colSpan={6} className="text-center p-8 text-[#7D4F2E]/60 font-medium">
                    No clients found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal - Fully Scrollable on Small Mobile Screens */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1F0B05]/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-[#7D4F2E]/20 shadow-2xl w-full max-w-md overflow-hidden my-auto">
            <div className="p-4 sm:p-5 border-b border-[#7D4F2E]/10 flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#7D4F2E]" />
                <h2 className="font-bold text-[#1F0B05] text-sm sm:text-base">Add New Client</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-[#7D4F2E]/60 hover:text-[#1F0B05] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateClient} className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Amina Bello"
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="amina@example.com"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">Phone</label>
                  <input
                    type="text"
                    placeholder="+234 800 000 0000"
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">Primary Interest</label>
                  <select
                    value={newClient.interest}
                    onChange={(e) =>
                      setNewClient({
                        ...newClient,
                        interest: e.target.value as Client['interest'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] font-medium"
                  >
                    <option value="Buying">Buying</option>
                    <option value="Investing">Investing</option>
                    <option value="Renting">Renting</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">Target Budget (NGN)</label>
                  <input
                    type="number"
                    placeholder="350000000"
                    value={newClient.budget}
                    onChange={(e) => setNewClient({ ...newClient, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#7D4F2E]/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-[#7D4F2E] hover:text-[#1F0B05] font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold rounded-xl transition-colors shadow-sm"
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