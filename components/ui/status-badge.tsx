import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStyle = (val: string) => {
    switch (val) {
      case 'Available':
      case 'Closed':
      case 'Active':
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pending':
      case 'Inspection Scheduled':
      case 'Negotiating':
      case 'Scheduled':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'New':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Contacted':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Sold':
      case 'Lost':
      case 'Inactive':
      case 'Cancelled':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getStyle(
        status
      )}`}
    >
      {status}
    </span>
  );
}