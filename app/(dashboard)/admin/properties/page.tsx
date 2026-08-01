'use client';

import React, { useState } from 'react';
import {
  Building2,
  Plus,
  Search,
  Filter,
  MapPin,
  Tag,
  User,
  X,
  MoreVertical,
  CheckCircle2,
  Clock,
  Ban,
} from 'lucide-react';
import { MOCK_PROPERTIES } from '@/lib/mock-data';
import { Property } from '@/lib/types';

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(MOCK_PROPERTIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for Add Property Modal
  const [newProp, setNewProp] = useState({
    name: '',
    location: '',
    price: '',
    status: 'Available' as Property['status'],
    agentName: 'Amina Yusuf',
    image: '',
  });

  // Filter Logic
  const filteredProperties = properties.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.agentName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === 'All' || item.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const handleCreateProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProp.name || !newProp.location || !newProp.price) return;

    const createdItem: Property = {
      id: `prop-${Date.now()}`,
      name: newProp.name,
      location: newProp.location,
      price: Number(newProp.price),
      status: newProp.status,
      agentName: newProp.agentName,
      image:
        newProp.image ||
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      dateAdded: new Date().toISOString().split('T')[0],
    };

    setProperties([createdItem, ...properties]);
    setIsModalOpen(false);
    setNewProp({
      name: '',
      location: '',
      price: '',
      status: 'Available',
      agentName: 'Amina Yusuf',
      image: '',
    });
  };

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusBadge = (status: Property['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FDBE19]/15 text-[#1F0B05] border border-[#FDBE19]/40">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1F0B05]" />
            Available
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#7D4F2E]/10 text-[#7D4F2E] border border-[#7D4F2E]/25">
            <Clock className="w-3.5 h-3.5 text-[#7D4F2E]" />
            Pending
          </span>
        );
      case 'Sold':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1F0B05]/10 text-[#1F0B05] border border-[#1F0B05]/20">
            <Ban className="w-3.5 h-3.5 text-[#1F0B05]" />
            Sold
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Property Management
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Manage and monitor all Riparo land plots and residential portfolios.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4 stroke-[2.5]" />
          <span>Add New Property</span>
        </button>
      </div>

      {/* Filters & Control Bar */}
      <div className="bg-white p-3 rounded-2xl border border-[#7D4F2E]/15 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#7D4F2E]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, location, or agent..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
          />
        </div>

        {/* Status Tabs */}
        <div className="flex items-center gap-1 bg-[#FAF8F5] p-1 rounded-xl border border-[#7D4F2E]/10 w-full md:w-auto overflow-x-auto">
          {['All', 'Available', 'Pending', 'Sold'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                selectedStatus === status
                  ? 'bg-white text-[#1F0B05] shadow-xs border border-[#7D4F2E]/10'
                  : 'text-[#7D4F2E]/70 hover:text-[#1F0B05]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#7D4F2E]">
            <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
              <tr>
                <th className="p-4">Property</th>
                <th className="p-4">Location</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4">Assigned Agent</th>
                <th className="p-4">Date Added</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#7D4F2E]/10">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((prop) => (
                  <tr key={prop.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={prop.image}
                          alt={prop.name}
                          className="w-12 h-12 rounded-xl object-cover border border-[#7D4F2E]/15 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-[#1F0B05] text-sm">{prop.name}</p>
                          <p className="text-[11px] font-semibold text-[#7D4F2E]/60">ID: {prop.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-[#1F0B05]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#7D4F2E] shrink-0" />
                        <span>{prop.location}</span>
                      </div>
                    </td>
                    <td className="p-4 font-extrabold text-[#1F0B05] text-sm">
                      {formatNaira(prop.price)}
                    </td>
                    <td className="p-4">{getStatusBadge(prop.status)}</td>
                    <td className="p-4 font-semibold text-[#1F0B05]">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#7D4F2E] shrink-0" />
                        <span>{prop.agentName}</span>
                      </div>
                    </td>
                    <td className="p-4 text-[#7D4F2E] font-medium">{prop.dateAdded}</td>
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
                    No properties match your current search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Property Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1F0B05]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#7D4F2E]/20 shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-[#7D4F2E]/10 flex items-center justify-between bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#7D4F2E]" />
                <h2 className="font-bold text-[#1F0B05] text-base">Add New Riparo Listing</h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-[#7D4F2E]/60 hover:text-[#1F0B05] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateProperty} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Property Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Riparo Luxury Terraces"
                  value={newProp.name}
                  onChange={(e) => setNewProp({ ...newProp, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Location (City / State)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., GRA, Ilorin, Kwara State"
                  value={newProp.location}
                  onChange={(e) => setNewProp({ ...newProp, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">
                    Price (NGN ₦)
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="15000000"
                    value={newProp.price}
                    onChange={(e) => setNewProp({ ...newProp, price: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1F0B05] mb-1">
                    Status
                  </label>
                  <select
                    value={newProp.status}
                    onChange={(e) =>
                      setNewProp({
                        ...newProp,
                        status: e.target.value as Property['status'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                  >
                    <option value="Available">Available</option>
                    <option value="Pending">Pending</option>
                    <option value="Sold">Sold</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Assigned Agent
                </label>
                <select
                  value={newProp.agentName}
                  onChange={(e) =>
                    setNewProp({ ...newProp, agentName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl focus:outline-none focus:border-[#FDBE19] text-[#1F0B05]"
                >
                  <option value="Amina Yusuf">Amina Yusuf</option>
                  <option value="Chidi Okechukwu">Chidi Okechukwu</option>
                  <option value="David Adeleke">David Adeleke</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-[#1F0B05] mb-1">
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  value={newProp.image}
                  onChange={(e) => setNewProp({ ...newProp, image: e.target.value })}
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
                  Save Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}