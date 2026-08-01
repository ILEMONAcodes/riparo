'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  User,
  CreditCard,
  Bell,
  Lock,
  CheckCircle2,
  Save,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

export default function AgentSettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'payout' | 'notifications' | 'security'>('profile');
  const [isSaved, setIsSaved] = useState(false);

  // Profile Form State
  const [profile, setProfile] = useState({
    fullName: 'Ilemona Agent',
    email: 'ilemona@riparo.ng',
    phone: '+234 803 123 4567',
    agencyName: 'Riparo Premier Realty',
    agentId: 'RP-AGENT-2026-882',
  });

  // Bank Details State
  const [bankDetails, setBankDetails] = useState({
    bankName: 'Guaranty Trust Bank (GTB)',
    accountNumber: '0123454819',
    accountName: 'ILEMONA AGENT',
  });

  // Notification Preferences State
  const [notifications, setNotifications] = useState({
    emailNewLead: true,
    emailCommissionCleared: true,
    smsInspectionReminder: true,
    pushMarketUpdates: false,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Agent Settings
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Manage your agent profile, payout bank account, notification preferences, and password.
          </p>
        </div>

        {isSaved && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Settings saved successfully!</span>
          </div>
        )}
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#7D4F2E]/15 pb-1">
        {[
          { id: 'profile', label: 'Profile Details', icon: User },
          { id: 'payout', label: 'Payout Account', icon: CreditCard },
          { id: 'notifications', label: 'Notifications', icon: Bell },
          { id: 'security', label: 'Security & Password', icon: Lock },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1F0B05] text-white shadow-xs'
                  : 'text-[#7D4F2E] hover:bg-white hover:text-[#1F0B05]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: PROFILE DETAILS */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-6 space-y-6">
          <div className="flex items-center gap-4 border-b border-[#7D4F2E]/10 pb-5">
            <div className="relative w-16 h-16 rounded-2xl bg-[#1F0B05] text-[#FDBE19] font-extrabold text-xl flex items-center justify-center shrink-0 border border-[#7D4F2E]/20">
              IA
            </div>
            <div>
              <h3 className="font-extrabold text-[#1F0B05] text-base">{profile.fullName}</h3>
              <p className="text-xs text-[#7D4F2E]">Agent ID: <strong className="text-[#1F0B05]">{profile.agentId}</strong></p>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Verified Riparo Partner
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#1F0B05]">
            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Full Name</label>
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Email Address</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Phone Number</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Brokerage / Agency</label>
              <input
                type="text"
                value={profile.agencyName}
                onChange={(e) => setProfile({ ...profile, agencyName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] font-medium"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 2: PAYOUT ACCOUNT */}
      {activeTab === 'payout' && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-6 space-y-6">
          <div className="border-b border-[#7D4F2E]/10 pb-3">
            <h3 className="font-extrabold text-[#1F0B05] text-base">Commission Payout Bank Details</h3>
            <p className="text-xs text-[#7D4F2E]">
              All approved commission payouts will be directly remitted into this account.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/15 space-y-2">
            <div className="flex items-center gap-2 text-xs text-[#D48C28] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Active Verified Account</span>
            </div>
            <div className="text-sm font-extrabold text-[#1F0B05]">{bankDetails.accountName}</div>
            <div className="text-xs text-[#7D4F2E]">
              {bankDetails.bankName} • Account: <span className="font-mono font-bold text-[#1F0B05]">{bankDetails.accountNumber}</span>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#1F0B05]">
            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Bank Name</label>
              <select
                value={bankDetails.bankName}
                onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] bg-white font-medium"
              >
                <option value="Guaranty Trust Bank (GTB)">Guaranty Trust Bank (GTB)</option>
                <option value="Access Bank">Access Bank</option>
                <option value="Zenith Bank">Zenith Bank</option>
                <option value="First Bank of Nigeria">First Bank of Nigeria</option>
                <option value="United Bank for Africa (UBA)">United Bank for Africa (UBA)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Account Number</label>
              <input
                type="text"
                maxLength={10}
                value={bankDetails.accountNumber}
                onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] font-mono text-sm font-bold"
              />
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Account Name (Auto-Verified)</label>
              <input
                type="text"
                readOnly
                value={bankDetails.accountName}
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 bg-[#FAF8F5] text-[#7D4F2E] font-bold"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Update Bank Account</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 3: NOTIFICATIONS */}
      {activeTab === 'notifications' && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-6 space-y-6">
          <div className="border-b border-[#7D4F2E]/10 pb-3">
            <h3 className="font-extrabold text-[#1F0B05] text-base">Notification Preferences</h3>
            <p className="text-xs text-[#7D4F2E]">Choose how you want to be alerted about leads and commission clearances.</p>
          </div>

          <div className="space-y-4 text-xs text-[#1F0B05]">
            {[
              { key: 'emailNewLead', label: 'Email alerts for new client lead assignments', desc: 'Receive instant emails when prospects are assigned to you.' },
              { key: 'emailCommissionCleared', label: 'Email alerts when deal commissions clear', desc: 'Get notified as soon as land payments are confirmed and funds clear.' },
              { key: 'smsInspectionReminder', label: 'SMS reminders for scheduled site viewings', desc: 'Receive SMS alerts 2 hours prior to scheduled client site tours.' },
              { key: 'pushMarketUpdates', label: 'Riparo estate inventory price & availability updates', desc: 'Brochure updates and price adjustments on listed estates.' },
            ].map((item) => (
              <div key={item.key} className="flex items-start justify-between gap-4 p-3 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/10">
                <div>
                  <h4 className="font-bold text-[#1F0B05]">{item.label}</h4>
                  <p className="text-[#7D4F2E] text-[11px] mt-0.5">{item.desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications[item.key as keyof typeof notifications]}
                  onChange={(e) =>
                    setNotifications({ ...notifications, [item.key]: e.target.checked })
                  }
                  className="w-4 h-4 accent-[#FDBE19] cursor-pointer mt-1"
                />
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Save Preferences</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 4: SECURITY */}
      {activeTab === 'security' && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-6 space-y-6">
          <div className="border-b border-[#7D4F2E]/10 pb-3">
            <h3 className="font-extrabold text-[#1F0B05] text-base">Change Password</h3>
            <p className="text-xs text-[#7D4F2E]">Ensure your agent account remains secure with a strong password.</p>
          </div>

          <div className="space-y-4 max-w-md text-xs text-[#1F0B05]">
            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Current Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">New Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
              />
            </div>

            <div>
              <label className="block font-bold text-[#7D4F2E] mb-1">Confirm New Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19]"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F0B05] hover:bg-[#7D4F2E] text-white font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
            >
              <Lock className="w-4 h-4 text-[#FDBE19]" />
              <span>Update Password</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}