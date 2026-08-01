'use client';

import React, { useState } from 'react';
import {
  Wallet,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building2,
  Plus,
  X,
  Search,
  Filter,
  ArrowDownToLine,
  CreditCard,
} from 'lucide-react';

interface CommissionDeal {
  id: string;
  property: string;
  client: string;
  dealValue: string;
  commissionRate: string;
  commissionAmount: string;
  date: string;
  status: 'Cleared' | 'Pending' | 'In Escrow';
}

interface PayoutRequest {
  id: string;
  amount: string;
  bankName: string;
  accountNumber: string;
  requestDate: string;
  status: 'Approved' | 'Processing' | 'Pending';
}

export default function AgentCommissionsPage() {
  const [activeTab, setActiveTab] = useState<'commissions' | 'payouts'>('commissions');
  const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
  const [payoutAmountInput, setPayoutAmountInput] = useState('');

  // Mock Commission Deals
  const [commissions] = useState<CommissionDeal[]>([
    {
      id: '1',
      property: 'Riparo Prime Palms Plot 12',
      client: 'Alhaji Bashir M.',
      dealValue: '₦32,000,000',
      commissionRate: '5%',
      commissionAmount: '₦1,600,000',
      date: 'Jul 10, 2026',
      status: 'Cleared',
    },
    {
      id: '2',
      property: 'Riparo Haven Luxury Villa',
      client: 'Chief K. Okonkwo',
      dealValue: '₦120,000,000',
      commissionRate: '3%',
      commissionAmount: '₦3,600,000',
      date: 'Jun 22, 2026',
      status: 'Cleared',
    },
    {
      id: '3',
      property: 'Riparo Commercial Hub',
      client: 'Engr. David O.',
      dealValue: '₦85,000,000',
      commissionRate: '4%',
      commissionAmount: '₦3,400,000',
      date: 'Jul 20, 2026',
      status: 'Pending',
    },
    {
      id: '4',
      property: 'Riparo Verified Agro-Plot',
      client: 'Mrs. Funke Adebayo',
      dealValue: '₦18,000,000',
      commissionRate: '5%',
      commissionAmount: '₦900,000',
      date: 'Aug 01, 2026',
      status: 'In Escrow',
    },
  ]);

  // Mock Payout Requests
  const [payouts, setPayouts] = useState<PayoutRequest[]>([
    {
      id: 'PAY-1002',
      amount: '₦2,000,000',
      bankName: 'Guaranty Trust Bank (GTB)',
      accountNumber: '**** **** 4819',
      requestDate: 'Jul 15, 2026',
      status: 'Approved',
    },
    {
      id: 'PAY-1001',
      amount: '₦1,000,000',
      bankName: 'Guaranty Trust Bank (GTB)',
      accountNumber: '**** **** 4819',
      requestDate: 'Jun 30, 2026',
      status: 'Approved',
    },
  ]);

  const getStatusBadge = (status: CommissionDeal['status'] | PayoutRequest['status']) => {
    switch (status) {
      case 'Cleared':
      case 'Approved':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pending':
      case 'Processing':
        return 'bg-[#FDBE19]/20 text-[#1F0B05] border-[#FDBE19]/40';
      case 'In Escrow':
        return 'bg-sky-50 text-sky-700 border-sky-200';
    }
  };

  const handleRequestPayout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!payoutAmountInput) return;

    const newPayout: PayoutRequest = {
      id: `PAY-${Math.floor(1000 + Math.random() * 9000)}`,
      amount: `₦${Number(payoutAmountInput).toLocaleString()}`,
      bankName: 'Guaranty Trust Bank (GTB)',
      accountNumber: '**** **** 4819',
      requestDate: 'Today',
      status: 'Processing',
    };

    setPayouts([newPayout, ...payouts]);
    setIsPayoutModalOpen(false);
    setPayoutAmountInput('');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER & PAYOUT ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Commissions & Earnings
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Track deal commission payouts, withdraw cleared funds, and review earnings history.
          </p>
        </div>

        <button
          onClick={() => setIsPayoutModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors shadow-xs cursor-pointer w-fit"
        >
          <ArrowDownToLine className="w-4 h-4" />
          <span>Request Payout</span>
        </button>
      </div>

      {/* TOP SUMMARY STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-[#7D4F2E]/15 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider">
              TOTAL EARNED COMMISSIONS
            </span>
            <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/10">
              <Wallet className="w-4 h-4 text-[#D48C28]" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-[#1F0B05] tracking-tight">
            ₦9,500,000
          </h3>
          <p className="text-[11px] text-[#7D4F2E] font-medium">
            Lifetime aggregate earnings across all estate sales
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#7D4F2E]/15 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider">
              CLEARED & WITHDRAWABLE
            </span>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-[#1F0B05] tracking-tight">
            ₦2,200,000
          </h3>
          <p className="text-[11px] text-[#7D4F2E] font-medium">
            Ready for instant bank payout transfer
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#7D4F2E]/15 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider">
              PENDING COMMISSIONS
            </span>
            <div className="p-2 rounded-xl bg-[#FDBE19]/10 border border-[#FDBE19]/30">
              <Clock className="w-4 h-4 text-[#1F0B05]" />
            </div>
          </div>
          <h3 className="text-3xl font-extrabold text-[#1F0B05] tracking-tight">
            ₦4,300,000
          </h3>
          <p className="text-[11px] text-[#7D4F2E] font-medium">
            Awaiting client installment completion or deed sign-off
          </p>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex items-center gap-2 border-b border-[#7D4F2E]/15 pb-1">
        <button
          onClick={() => setActiveTab('commissions')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'commissions'
              ? 'bg-[#1F0B05] text-white shadow-xs'
              : 'text-[#7D4F2E] hover:bg-white hover:text-[#1F0B05]'
          }`}
        >
          Deal Commissions Breakdown
        </button>
        <button
          onClick={() => setActiveTab('payouts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'payouts'
              ? 'bg-[#1F0B05] text-white shadow-xs'
              : 'text-[#7D4F2E] hover:bg-white hover:text-[#1F0B05]'
          }`}
        >
          Payout Request History
        </button>
      </div>

      {/* TAB 1: COMMISSIONS TABLE */}
      {activeTab === 'commissions' && (
        <div className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#1F0B05] text-base">
                Commission Records
              </h3>
              <p className="text-xs text-[#7D4F2E]">
                Detailed list of deal commissions and payout availability
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#1F0B05]">
              <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
                <tr>
                  <th className="p-3">Property</th>
                  <th className="p-3">Buyer / Client</th>
                  <th className="p-3">Deal Value</th>
                  <th className="p-3">Rate</th>
                  <th className="p-3">Commission</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7D4F2E]/10">
                {commissions.map((item) => (
                  <tr key={item.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-3 font-bold text-[#1F0B05]">
                      {item.property}
                    </td>
                    <td className="p-3 text-[#7D4F2E] font-medium">
                      {item.client}
                    </td>
                    <td className="p-3 font-bold text-[#1F0B05]">
                      {item.dealValue}
                    </td>
                    <td className="p-3 text-[#7D4F2E] font-bold">
                      {item.commissionRate}
                    </td>
                    <td className="p-3 font-extrabold text-[#1F0B05]">
                      {item.commissionAmount}
                    </td>
                    <td className="p-3 text-[#7D4F2E]/80 text-[11px]">
                      {item.date}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: PAYOUTS HISTORY */}
      {activeTab === 'payouts' && (
        <div className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-[#1F0B05] text-base">
                Bank Payout History
              </h3>
              <p className="text-xs text-[#7D4F2E]">
                Track processing and completed withdrawal transfers
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#1F0B05]">
              <thead className="bg-[#FAF8F5] text-[#7D4F2E] font-bold uppercase tracking-wider border-b border-[#7D4F2E]/10">
                <tr>
                  <th className="p-3">Reference ID</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Bank Destination</th>
                  <th className="p-3">Account Number</th>
                  <th className="p-3">Requested Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#7D4F2E]/10">
                {payouts.map((payout) => (
                  <tr key={payout.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="p-3 font-mono text-[11px] font-bold text-[#1F0B05]">
                      {payout.id}
                    </td>
                    <td className="p-3 font-extrabold text-[#1F0B05]">
                      {payout.amount}
                    </td>
                    <td className="p-3 text-[#7D4F2E] font-medium">
                      {payout.bankName}
                    </td>
                    <td className="p-3 text-[#7D4F2E]">
                      {payout.accountNumber}
                    </td>
                    <td className="p-3 text-[#7D4F2E]/80 text-[11px]">
                      {payout.requestDate}
                    </td>
                    <td className="p-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusBadge(
                          payout.status
                        )}`}
                      >
                        {payout.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL: REQUEST PAYOUT */}
      {isPayoutModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#7D4F2E]/20 p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#7D4F2E]/10 pb-3">
              <h3 className="font-extrabold text-base text-[#1F0B05]">
                Request Commission Payout
              </h3>
              <button
                onClick={() => setIsPayoutModalOpen(false)}
                className="p-1 rounded-lg text-[#7D4F2E] hover:text-[#1F0B05] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRequestPayout} className="space-y-4 text-xs text-[#1F0B05]">
              {/* BALANCE SUMMARY */}
              <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#7D4F2E]/10 flex items-center justify-between">
                <span className="text-[#7D4F2E] font-medium">Available Cleared Balance:</span>
                <strong className="text-base text-[#1F0B05]">₦2,200,000</strong>
              </div>

              {/* PAYOUT AMOUNT */}
              <div>
                <label className="block font-bold text-[#7D4F2E] mb-1">
                  Payout Amount (NGN) *
                </label>
                <input
                  type="number"
                  required
                  max={2200000}
                  placeholder="e.g. 1000000"
                  value={payoutAmountInput}
                  onChange={(e) => setPayoutAmountInput(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 focus:outline-none focus:border-[#FDBE19] text-sm font-bold"
                />
              </div>

              {/* DESTINATION BANK DETAILS */}
              <div className="p-3.5 rounded-xl border border-[#7D4F2E]/15 bg-white space-y-1.5">
                <div className="text-[10px] font-bold text-[#D48C28] uppercase tracking-wider flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  Destination Bank Account
                </div>
                <p className="font-extrabold text-[#1F0B05]">Guaranty Trust Bank (GTB)</p>
                <p className="text-xs text-[#7D4F2E]">Account: 0123454819 • Ilemona Agent</p>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsPayoutModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-[#7D4F2E]/20 text-[#7D4F2E] font-bold hover:bg-[#FAF8F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#FDBE19] text-[#1F0B05] font-extrabold hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Confirm Payout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}