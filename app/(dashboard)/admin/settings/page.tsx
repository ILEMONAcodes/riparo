'use client';

import React, { useState } from 'react';
import {
  User,
  Shield,
  Building,
  Percent,
  Save,
  CheckCircle2,
  Lock,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'agency' | 'commission' | 'security'>('profile');
  const [saved, setSaved] = useState(false);

  // Form States
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@riparo.ng',
    phone: '+234 800 000 0000',
    role: 'Principal Administrator',
  });

  const [agency, setAgency] = useState({
    name: 'Riparo Real Estate & Construction',
    website: 'https://riparo.ng',
    currency: 'NGN (₦)',
    address: 'Victoria Island, Lagos, Nigeria',
  });

  const [commission, setCommission] = useState({
    defaultRate: '5',
    agentSplit: '70',
    companySplit: '30',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#7D4F2E]/10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#1F0B05] tracking-tight">
            Settings
          </h1>
          <p className="text-sm text-[#7D4F2E] font-medium mt-1">
            Manage your administrative account, agency profiles, and transaction rates.
          </p>
        </div>

        {/* SAVE SUCCESS BANNER */}
        {saved && (
          <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-300 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Changes saved successfully!
          </div>
        )}
      </div>

      {/* NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#7D4F2E]/10">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'profile'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          <User className="w-4 h-4" />
          Admin Profile
        </button>
        <button
          onClick={() => setActiveTab('agency')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'agency'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          <Building className="w-4 h-4" />
          Agency Details
        </button>
        <button
          onClick={() => setActiveTab('commission')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'commission'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          <Percent className="w-4 h-4" />
          Commission Rules
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'security'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          <Shield className="w-4 h-4" />
          Security
        </button>
      </div>

      {/* FORM CONTENT */}
      <form onSubmit={handleSave} className="bg-white rounded-2xl border border-[#7D4F2E]/10 p-6 sm:p-8 space-y-6 shadow-2xs">
        {/* TAB 1: ADMIN PROFILE */}
        {activeTab === 'profile' && (
          <div className="space-y-5">
            <h2 className="text-base font-bold text-[#1F0B05]">Personal Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]/50" />
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]/50" />
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]/50" />
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Admin Role</label>
                <input
                  type="text"
                  disabled
                  value={profile.role}
                  className="w-full bg-zinc-100 border border-[#7D4F2E]/10 rounded-xl px-4 py-2.5 text-xs font-semibold text-zinc-500 cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AGENCY DETAILS */}
        {activeTab === 'agency' && (
          <div className="space-y-5">
            <h2 className="text-base font-bold text-[#1F0B05]">Agency Information</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Agency Name</label>
                <input
                  type="text"
                  value={agency.name}
                  onChange={(e) => setAgency({ ...agency, name: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Website URL</label>
                <div className="relative">
                  <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]/50" />
                  <input
                    type="text"
                    value={agency.website}
                    onChange={(e) => setAgency({ ...agency, website: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Primary Office Address</label>
                <input
                  type="text"
                  value={agency.address}
                  onChange={(e) => setAgency({ ...agency, address: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COMMISSION RULES */}
        {activeTab === 'commission' && (
          <div className="space-y-5">
            <h2 className="text-base font-bold text-[#1F0B05]">Default Commission Defaults</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Standard Deal Fee (%)</label>
                <input
                  type="number"
                  value={commission.defaultRate}
                  onChange={(e) => setCommission({ ...commission, defaultRate: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Agent Share (%)</label>
                <input
                  type="number"
                  value={commission.agentSplit}
                  onChange={(e) => setCommission({ ...commission, agentSplit: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Riparo Brokerage Share (%)</label>
                <input
                  type="number"
                  value={commission.companySplit}
                  onChange={(e) => setCommission({ ...commission, companySplit: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl px-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SECURITY */}
        {activeTab === 'security' && (
          <div className="space-y-5">
            <h2 className="text-base font-bold text-[#1F0B05]">Password & Security</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">Current Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]/50" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F0B05] mb-2">New Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]/50" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#FAF8F5] border border-[#7D4F2E]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs font-semibold text-[#1F0B05] focus:outline-none focus:border-[#FDBE19]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <div className="pt-4 border-t border-[#7D4F2E]/10 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#1F0B05] text-[#FDBE19] hover:bg-[#38190B] px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}