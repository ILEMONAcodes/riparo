'use client';

import React, { useState } from 'react';
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Check,
  Filter,
} from 'lucide-react';

type NotificationType = 'lead' | 'deal' | 'property' | 'system';

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: NotificationType;
  read: boolean;
  highPriority?: boolean;
}

const initialNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'High-Value Lead Assigned',
    description: 'New inquiry for "Eko Atlantic Penthouse" (₦450,000,000) assigned to Amina Yusuf.',
    time: '10 minutes ago',
    type: 'lead',
    read: false,
    highPriority: true,
  },
  {
    id: '2',
    title: 'Deal Moved to "Under Contract"',
    description: 'Chidi Okechukwu updated status for Ikoyi Villa Mansion pipeline.',
    time: '1 hour ago',
    type: 'deal',
    read: false,
  },
  {
    id: '3',
    title: 'New Property Listing Published',
    description: 'Banana Island Waterfront Land has been approved and published to client directory.',
    time: '3 hours ago',
    type: 'property',
    read: true,
  },
  {
    id: '4',
    title: 'Monthly Sales Target Reached',
    description: 'Sales team hit Q3 total deal threshold of ₦1,000,000,000.',
    time: '1 day ago',
    type: 'system',
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'priority'>('all');

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const toggleReadStatus = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const filteredNotifications = notifications.filter((item) => {
    if (activeFilter === 'unread') return !item.read;
    if (activeFilter === 'priority') return item.highPriority;
    return true;
  });

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'lead':
        return <Users className="w-5 h-5 text-amber-600" />;
      case 'deal':
        return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case 'property':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'system':
        return <TrendingUp className="w-5 h-5 text-purple-600" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#7D4F2E]/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#1F0B05] tracking-tight">
              Notifications
            </h1>
            {unreadCount > 0 && (
              <span className="px-2.5 py-0.5 text-xs font-bold bg-[#FDBE19] text-[#1F0B05] rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
          <p className="text-sm text-[#7D4F2E] font-medium mt-1">
            Real-time updates on high-value clients, properties, and agent pipelines.
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="flex items-center gap-2 text-xs font-bold text-[#1F0B05] bg-white border border-[#7D4F2E]/20 px-4 py-2.5 rounded-xl hover:bg-[#FAF8F5] transition-all shadow-2xs self-start sm:self-auto"
          >
            <Check className="w-4 h-4 text-[#FDBE19]" />
            Mark all as read
          </button>
        )}
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeFilter === 'all'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          All Activity ({notifications.length})
        </button>
        <button
          onClick={() => setActiveFilter('unread')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeFilter === 'unread'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setActiveFilter('priority')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeFilter === 'priority'
              ? 'bg-[#1F0B05] text-[#FDBE19]'
              : 'bg-white text-[#7D4F2E] border border-[#7D4F2E]/15 hover:bg-[#FAF8F5]'
          }`}
        >
          High Priority
        </button>
      </div>

      {/* NOTIFICATION LIST */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#7D4F2E]/10">
            <Bell className="w-10 h-10 text-[#7D4F2E]/30 mx-auto mb-3" />
            <p className="text-base font-bold text-[#1F0B05]">No notifications found</p>
            <p className="text-xs text-[#7D4F2E] mt-1">You are all caught up!</p>
          </div>
        ) : (
          filteredNotifications.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                !item.read
                  ? 'bg-white border-[#FDBE19]/60 shadow-xs'
                  : 'bg-white/60 border-[#7D4F2E]/10 opacity-80'
              }`}
            >
              {/* ICON BADGE */}
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/10 shrink-0">
                {getIcon(item.type)}
              </div>

              {/* TEXT CONTENT */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold text-[#1F0B05]">{item.title}</h3>
                  {item.highPriority && (
                    <span className="px-2 py-0.5 text-[10px] font-black bg-red-100 text-red-700 rounded-md">
                      PRIORITY
                    </span>
                  )}
                  {!item.read && (
                    <span className="w-2 h-2 rounded-full bg-[#FDBE19] inline-block" />
                  )}
                </div>
                <p className="text-xs text-[#7D4F2E] mt-1 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-[11px] text-[#7D4F2E]/60 font-semibold mt-2">
                  {item.time}
                </p>
              </div>

              {/* READ TOGGLE BUTTON */}
              <button
                onClick={() => toggleReadStatus(item.id)}
                className="p-2 rounded-lg text-[#7D4F2E]/50 hover:text-[#1F0B05] hover:bg-[#FAF8F5] transition-colors shrink-0"
                title={item.read ? 'Mark as unread' : 'Mark as read'}
              >
                {item.read ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-[#7D4F2E]/40 hover:border-[#1F0B05]" />
                )}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}