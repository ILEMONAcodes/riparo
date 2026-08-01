'use client';

import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
  Layers,
  DollarSign,
  Users,
} from 'lucide-react';

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'6m' | '1y' | 'all'>('6m');

  // Mock Monthly Revenue Data
  const monthlyRevenue = [
    { month: 'Feb', revenue: 45000000, target: 40000000, height: 45 },
    { month: 'Mar', revenue: 62000000, target: 50000000, height: 62 },
    { month: 'Apr', revenue: 58000000, target: 55000000, height: 58 },
    { month: 'May', revenue: 85000000, target: 70000000, height: 85 },
    { month: 'Jun', revenue: 92000000, target: 80000000, height: 92 },
    { month: 'Jul', revenue: 110000000, target: 90000000, height: 100 },
  ];

  // Lead Sources Breakdown
  const leadSources = [
    { source: 'Instagram Ads', percentage: 38, count: 142, color: 'bg-emerald-500' },
    { source: 'Referrals & Direct', percentage: 27, count: 101, color: 'bg-sky-500' },
    { source: 'Website Organic', percentage: 20, count: 75, color: 'bg-amber-500' },
    { source: 'Property Expos & Events', percentage: 15, count: 56, color: 'bg-purple-500' },
  ];

  // Conversion Pipeline Metrics
  const conversionFunnel = [
    { stage: 'Total Inquiries', count: 374, percentage: '100%' },
    { stage: 'Inspections Booked', count: 186, percentage: '49.7%' },
    { stage: 'Negotiations Started', count: 72, percentage: '19.2%' },
    { stage: 'Closed Sales', count: 38, percentage: '10.1%' },
  ];

  const formatNaira = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Analytics & Revenue Insights
          </h1>
          <p className="text-sm text-slate-500">
            In-depth performance metrics, lead acquisition channels, and financial forecasts for Riparo.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Time Range Selector */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs font-medium">
            <button
              onClick={() => setTimeRange('6m')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                timeRange === '6m'
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              6 Months
            </button>
            <button
              onClick={() => setTimeRange('1y')}
              className={`px-3 py-1.5 rounded-md transition-all ${
                timeRange === '1y'
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1 Year
            </button>
          </div>

          <button className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Gross Revenue (YTD)
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            {formatNaira(452000000)}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+18.4% from last quarter</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Conversion Rate
            </span>
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center">
              <Target className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">10.1%</h3>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+2.3% improvement</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Avg. Deal Closure
            </span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">
            {formatNaira(11890000)}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <span>Per closed property</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Sales Cycle
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">14 Days</h3>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <ArrowDownRight className="w-3.5 h-3.5" />
            <span>-3 days faster response</span>
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Revenue Breakdown (Bar Chart) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Monthly Revenue vs Target
              </h3>
              <p className="text-xs text-slate-500">
                Gross sales figures against quarterly targets (in NGN)
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-emerald-600 inline-block" />
                <span className="text-slate-600">Actual Revenue</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-sm bg-slate-200 inline-block" />
                <span className="text-slate-600">Target</span>
              </div>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-64 flex items-end justify-between gap-3 pt-8 px-2 border-b border-slate-100">
            {monthlyRevenue.map((item) => (
              <div
                key={item.month}
                className="flex-1 flex flex-col items-center gap-2 h-full justify-end group"
              >
                {/* Tooltip on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] py-1 px-2 rounded font-semibold whitespace-nowrap shadow-md">
                  {formatNaira(item.revenue)}
                </div>

                {/* Bars */}
                <div className="w-full max-w-[40px] flex items-end gap-1 h-full">
                  <div
                    className="w-1/2 bg-slate-200 rounded-t transition-all group-hover:bg-slate-300"
                    style={{ height: `${(item.target / 110000000) * 100}%` }}
                  />
                  <div
                    className="w-1/2 bg-emerald-600 rounded-t transition-all group-hover:bg-emerald-500"
                    style={{ height: `${item.height}%` }}
                  />
                </div>

                <span className="text-xs font-semibold text-slate-600 mt-2">
                  {item.month}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
            <span>Highest Performing Month: <strong>July (₦110M)</strong></span>
            <span>Overall Target Attainment: <strong className="text-emerald-600">114%</strong></span>
          </div>
        </div>

        {/* Lead Source Distribution */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              Lead Source Distribution
            </h3>
            <p className="text-xs text-slate-500">
              Where new buyer inquiries originate from
            </p>
          </div>

          {/* Source Bars */}
          <div className="space-y-4">
            {leadSources.map((item) => (
              <div key={item.source} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{item.source}</span>
                  <span className="font-bold text-slate-900">
                    {item.percentage}% <span className="text-slate-400 font-normal">({item.count})</span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Instagram Ads</strong> generated the highest volume of qualified leads this month.</span>
          </div>
        </div>
      </div>

      {/* Conversion Funnel Row */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div>
          <h3 className="font-bold text-slate-900 text-base">
            Sales Pipeline Conversion Funnel
          </h3>
          <p className="text-xs text-slate-500">
            Conversion drop-off rates from initial inquiry to closed land/property deed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {conversionFunnel.map((funnel, index) => (
            <div
              key={funnel.stage}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 relative"
            >
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Stage 0{index + 1}
              </div>
              <h4 className="font-bold text-slate-900 text-sm">{funnel.stage}</h4>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-extrabold text-slate-900">
                  {funnel.count}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {funnel.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}