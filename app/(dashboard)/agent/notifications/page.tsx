'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  CheckCircle2,
  Clock,
  UserPlus,
  DollarSign,
  Building2,
  AlertCircle,
  Check,
  Trash2,
  ArrowRight,
  Filter,
} from 'lucide-react';

type NotificationCategory = 'Lead' | 'Commission' | 'Inspection' | 'System';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  category: NotificationCategory;
  isRead: boolean;
  actionUrl?: string;
  actionLabel?: string;
}

export default function AgentNotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'New Lead Assigned',
      message: 'Mrs. Funke Adebayo has been assigned to you for Riparo Verified Agro-Plot Corridor.',
      timestamp: '10 minutes ago',
      category: 'Lead',
      isRead: false,
      actionUrl: '/agent/leads',
      actionLabel: 'View Lead',
    },
    {
      id: '2',
      title: 'Commission Cleared! ₦1,600,000',
      message: 'Your commission for Riparo Prime Palms Plot 12 has been cleared and is withdrawable.',
      timestamp: '2 hours ago',
      category: 'Commission',
      isRead: false,
      actionUrl: '/agent/commissions',
      actionLabel: 'Request Payout',
    },
    {
      id: '3',
      title: 'Upcoming Site Inspection',
      message: 'Reminder: Site viewing scheduled with Dr. Samuel Alabi tomorrow at 10:00 AM.',
      timestamp: '1 day ago',
      category: 'Inspection',
      isRead: true,
      actionUrl: '/agent/leads',
      actionLabel: 'Check Schedule',
    },
    {
      id: '4',
      title: 'New Price List Updated',
      message: 'Riparo Haven Luxury Villa plots have been updated with new pricing structures.',
      timestamp: '3 days ago',
      category: 'System',
      isRead: true,
      actionUrl: '/agent/properties',
      actionLabel: 'View Properties',
    },
    {
      id: '5',
      title: 'Payout Request Approved',
      message: 'Your payout request PAY-1002 of ₦2,000,000 has been processed into your GTB account.',
      timestamp: 'Jul 15, 2026',
      category: 'Commission',
      isRead: true,
    },
  ]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const filteredNotifications = notifications.filter((n) =>
    filter === 'unread' ? !n.isRead : true
  );

  const toggleReadStatus = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const getCategoryIcon = (category: NotificationCategory) => {
    switch (category) {
      case 'Lead':
        return <UserPlus className="w-4 h-4 text-sky-600" />;
      case 'Commission':
        return <DollarSign className="w-4 h-4 text-emerald-600" />;
      case 'Inspection':
        return <Building2 className="w-4 h-4 text-[#D48C28]" />;
      case 'System':
        return <AlertCircle className="w-4 h-4 text-indigo-600" />;
    }
  };

  const getCategoryBadgeStyle = (category: NotificationCategory) => {
    switch (category) {
      case 'Lead':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Commission':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Inspection':
        return 'bg-[#7D4F2E]/10 text-[#7D4F2E] border-[#7D4F2E]/20';
      case 'System':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
              Notifications & Alerts
            </h1>
            {unreadCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-[#FDBE19] text-[#1F0B05]">
                {unreadCount} new
              </span>
            )}
          </div>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Stay informed on lead assignments, inspection reminders, and commission payouts.
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#7D4F2E]/20 text-[#1F0B05] hover:bg-[#FAF8F5] font-bold text-xs transition-colors shadow-xs cursor-pointer w-fit"
          >
            <Check className="w-4 h-4 text-[#D48C28]" />
            <span>Mark all as read</span>
          </button>
        )}
      </div>

      {/* FILTER CONTROLS */}
      <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-[#7D4F2E]/15 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-[#1F0B05] text-white shadow-xs'
                : 'text-[#7D4F2E] hover:bg-[#FAF8F5]'
            }`}
          >
            All Alerts ({notifications.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'unread'
                ? 'bg-[#1F0B05] text-white shadow-xs'
                : 'text-[#7D4F2E] hover:bg-[#FAF8F5]'
            }`}
          >
            Unread Only ({unreadCount})
          </button>
        </div>

        <div className="text-xs text-[#7D4F2E] font-medium hidden sm:block">
          Showing <strong>{filteredNotifications.length}</strong> items
        </div>
      </div>

      {/* NOTIFICATIONS LIST */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl border border-[#7D4F2E]/15 text-center space-y-3">
            <Bell className="w-10 h-10 text-[#7D4F2E]/30 mx-auto" />
            <h3 className="text-base font-bold text-[#1F0B05]">No notifications found</h3>
            <p className="text-xs text-[#7D4F2E] max-w-sm mx-auto">
              {filter === 'unread'
                ? "You've read all your notifications! Check 'All Alerts' to review older messages."
                : 'Your inbox is currently clear.'}
            </p>
          </div>
        ) : (
          filteredNotifications.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                !item.isRead
                  ? 'bg-white border-[#FDBE19] shadow-xs'
                  : 'bg-white/60 border-[#7D4F2E]/15 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-start gap-3.5">
                {/* ICON BADGE */}
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/10 shrink-0 mt-0.5 sm:mt-0">
                  {getCategoryIcon(item.category)}
                </div>

                {/* CONTENT */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-extrabold text-[#1F0B05] text-sm">
                      {item.title}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryBadgeStyle(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    {!item.isRead && (
                      <span className="w-2 h-2 rounded-full bg-[#FDBE19] inline-block" />
                    )}
                  </div>
                  <p className="text-xs text-[#7D4F2E] font-medium leading-relaxed">
                    {item.message}
                  </p>
                  <p className="text-[10px] text-[#7D4F2E]/60 font-semibold pt-0.5">
                    {item.timestamp}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-2 self-end sm:self-center shrink-0 border-t sm:border-t-0 border-[#7D4F2E]/10 pt-2 sm:pt-0 w-full sm:w-auto justify-end">
                {item.actionUrl && (
                  <Link
                    href={item.actionUrl}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FAF8F5] hover:bg-[#FDBE19]/20 text-[#1F0B05] font-bold text-xs border border-[#7D4F2E]/15 transition-colors"
                  >
                    <span>{item.actionLabel || 'View'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D48C28]" />
                  </Link>
                )}

                <button
                  onClick={() => toggleReadStatus(item.id)}
                  className="p-2 rounded-xl text-[#7D4F2E] hover:text-[#1F0B05] hover:bg-[#FAF8F5] transition-colors"
                  title={item.isRead ? 'Mark as Unread' : 'Mark as Read'}
                >
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      item.isRead ? 'text-emerald-600' : 'text-[#7D4F2E]/40'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}