'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Filter,
  Download,
  Share2,
  MapPin,
  Maximize2,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  X,
  FileText,
  Building2,
  Calendar,
} from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  price: string;
  plotSize: string;
  availablePlots: number;
  totalPlots: number;
  status: 'Available' | 'Selling Fast' | 'Sold Out';
  image: string;
  brochureUrl: string;
  description: string;
  features: string[];
}

export default function AgentPropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [shareModalProperty, setShareModalProperty] = useState<Property | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Mock Property Listings Data
  const properties: Property[] = [
    {
      id: '1',
      title: 'Riparo Prime Palms Estate',
      location: 'Ibeju-Lekki, Lagos',
      type: 'Residential & Commercial Plots',
      price: '₦45,000,000',
      plotSize: '500 sqm',
      availablePlots: 12,
      totalPlots: 40,
      status: 'Selling Fast',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
      brochureUrl: '#',
      description: 'Luxury dry land development positioned along the strategic expansion corridor of Lekki. Perfect for residential estate homes.',
      features: ['C of O Title', 'Gated Security', 'Paved Roads', 'Paved Drainage'],
    },
    {
      id: '2',
      title: 'Riparo Haven Luxury Villa',
      location: 'Ikoyi, Lagos',
      type: 'Fully Serviced Villa Plot',
      price: '₦120,000,000',
      plotSize: '900 sqm',
      availablePlots: 3,
      totalPlots: 8,
      status: 'Selling Fast',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop',
      brochureUrl: '#',
      description: 'Ultra-exclusive residential plots designed for bespoke luxury builds in prime Ikoyi.',
      features: ['Federal Governor’s Consent', '24/7 Power', 'Water Frontage', 'CCTV Security'],
    },
    {
      id: '3',
      title: 'Riparo Verified Agro-Plot Corridor',
      location: 'Epe, Lagos',
      type: 'Agricultural & Investment Land',
      price: '₦18,000,000',
      plotSize: '1,000 sqm',
      availablePlots: 28,
      totalPlots: 100,
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
      brochureUrl: '#',
      description: 'High-yield agricultural land titles suitable for medium-scale agro-investments and land banking.',
      features: ['Registered Survey', 'Freehold Title', 'Perimeter Fencing', 'Access Road'],
    },
    {
      id: '4',
      title: 'Riparo Commercial Trade Hub',
      location: 'Victoria Island, Lagos',
      type: 'Commercial Plot',
      price: '₦250,000,000',
      plotSize: '1,200 sqm',
      availablePlots: 1,
      totalPlots: 4,
      status: 'Selling Fast',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      brochureUrl: '#',
      description: 'Prime commercial plot with high footfall accessibility suitable for corporate office towers or retail centers.',
      features: ['C of O', 'Prime Corner Piece', 'High Floor Ratio', 'Paved Access'],
    },
    {
      id: '5',
      title: 'Riparo Waterfront Residence',
      location: 'Lekki Phase 1, Lagos',
      type: 'Mixed-Use Land',
      price: '₦95,000,000',
      plotSize: '600 sqm',
      availablePlots: 0,
      totalPlots: 15,
      status: 'Sold Out',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      brochureUrl: '#',
      description: 'Premium waterfront parcel featuring direct lagoon access and private jetty privileges.',
      features: ['Governor’s Consent', 'Private Jetty Access', 'Underground Utilities'],
    },
  ];

  // Filtering Logic
  const filteredProperties = properties.filter((prop) => {
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || prop.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Property['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Selling Fast':
        return 'bg-[#FDBE19]/20 text-[#1F0B05] border-[#FDBE19]/40';
      case 'Sold Out':
        return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  const handleCopyShareLink = (propertyId: string) => {
    const shareableUrl = `${window.location.origin}/properties/${propertyId}?ref=agent`;
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1F0B05] tracking-tight">
            Property Catalog & Marketing Assets
          </h1>
          <p className="text-xs text-[#7D4F2E] font-medium mt-0.5">
            Browse verified estates, share instant property links with prospects, and download brochures.
          </p>
        </div>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#7D4F2E]/15 shadow-xs">
        {/* Search Bar */}
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7D4F2E]" />
          <input
            type="text"
            placeholder="Search by estate name, location, or plot type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-[#FAF8F5] border border-[#7D4F2E]/15 focus:outline-none focus:border-[#FDBE19] text-[#1F0B05] placeholder-[#7D4F2E]/50 font-medium"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {['All', 'Available', 'Selling Fast', 'Sold Out'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                statusFilter === status
                  ? 'bg-[#1F0B05] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#7D4F2E] hover:bg-[#7D4F2E]/10'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* PROPERTY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((prop) => (
          <div
            key={prop.id}
            className="bg-white rounded-2xl border border-[#7D4F2E]/15 shadow-xs overflow-hidden flex flex-col justify-between group hover:border-[#FDBE19] transition-all"
          >
            <div>
              {/* IMAGE HEADER WITH STATUS BADGE */}
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold border ${getStatusBadge(
                      prop.status
                    )} shadow-xs`}
                  >
                    {prop.status}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#1F0B05]/80 backdrop-blur-xs px-2.5 py-1 rounded-lg text-white text-[11px] font-bold">
                  {prop.availablePlots} / {prop.totalPlots} Plots Left
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#7D4F2E] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D48C28] shrink-0" />
                    <span>{prop.location}</span>
                  </div>
                  <h3 className="font-extrabold text-[#1F0B05] text-base leading-snug">
                    {prop.title}
                  </h3>
                </div>

                {/* PRICE AND PLOT SIZE */}
                <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider block">
                      Starting Price
                    </span>
                    <span className="text-base font-extrabold text-[#1F0B05]">
                      {prop.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#7D4F2E] uppercase tracking-wider block">
                      Plot Size
                    </span>
                    <span className="text-xs font-bold text-[#1F0B05] flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-[#D48C28]" />
                      {prop.plotSize}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#7D4F2E] line-clamp-2">
                  {prop.description}
                </p>

                {/* KEY TITLE FEATURES */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {prop.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-[#7D4F2E]/5 border border-[#7D4F2E]/10 text-[10px] font-bold text-[#7D4F2E]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD FOOTER ACTIONS */}
            <div className="p-4 border-t border-[#7D4F2E]/10 bg-[#FAF8F5]/50 flex items-center gap-2">
              <button
                onClick={() => setShareModalProperty(prop)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#FDBE19] hover:bg-amber-400 text-[#1F0B05] font-extrabold text-xs transition-colors cursor-pointer shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Link</span>
              </button>

              <a
                href={prop.brochureUrl}
                download
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-[#7D4F2E]/20 hover:bg-[#7D4F2E]/10 text-[#1F0B05] font-bold text-xs transition-colors"
                title="Download Marketing Brochure"
              >
                <Download className="w-3.5 h-3.5 text-[#7D4F2E]" />
                <span className="hidden sm:inline">Brochure</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* SHARE MODAL */}
      {shareModalProperty && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full border border-[#7D4F2E]/20 p-6 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#7D4F2E]/10 pb-3">
              <h3 className="font-extrabold text-base text-[#1F0B05]">
                Share Property with Client
              </h3>
              <button
                onClick={() => setShareModalProperty(null)}
                className="p-1 rounded-lg text-[#7D4F2E] hover:text-[#1F0B05] hover:bg-[#FAF8F5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#7D4F2E]/10 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={shareModalProperty.image}
                    alt={shareModalProperty.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#1F0B05]">
                    {shareModalProperty.title}
                  </h4>
                  <p className="text-[11px] text-[#7D4F2E]">
                    {shareModalProperty.price} • {shareModalProperty.location}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#7D4F2E] mb-1.5">
                  Unique Agent Tracked Link
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={`https://riparo.ng/properties/${shareModalProperty.id}?ref=agent`}
                    className="w-full p-2.5 rounded-xl border border-[#7D4F2E]/20 text-xs font-mono text-[#1F0B05] bg-[#FAF8F5] select-all focus:outline-none"
                  />
                  <button
                    onClick={() => handleCopyShareLink(shareModalProperty.id)}
                    className="px-3.5 py-2.5 rounded-xl bg-[#1F0B05] text-white hover:bg-[#7D4F2E] font-bold text-xs transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FDBE19]" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#7D4F2E]/10 flex items-center justify-end">
              <button
                onClick={() => setShareModalProperty(null)}
                className="px-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#7D4F2E]/20 text-[#1F0B05] font-bold text-xs hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}