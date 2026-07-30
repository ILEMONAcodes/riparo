import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ArrowLeft, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

interface PropertyDetails {
  name: string;
  tagline: string;
  location: string;
  state: string;
  category: string;
  description: string;
  titleStatus: string;
  price: string;
  imageUrl: string;
  features: string[];
  mapEmbedUrl: string;
  googleMapsLink: string;
  coordinates: string;
}

const propertiesData: Record<string, PropertyDetails> = {
  'eco-ibadan': {
    name: 'Eco-Ibadan',
    tagline: 'First Eco-friendly estate in Ibadan',
    location: 'Ido, Ibadan',
    state: 'Oyo State',
    category: 'New Launch',
    description:
      'Redefining sustainable living in Oyo State with solar-integrated power, smart waste management, and vast greenery in a high-growth corridor.',
    titleStatus: 'Registered Survey, C of O (in view)',
    price: 'Contact for Pricing',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Solar-integrated clean power infrastructure',
      'Smart waste recycling systems',
      'High land appreciation corridor in Ido LGA',
      'Paved access roads & perimeter fencing',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Ido%20Local%20Government%20Ibadan%20Oyo%20State&t=&z=13&ie=UTF8&iwloc=&output=embed',
    googleMapsLink: 'https://maps.google.com/?q=Ido+Ibadan+Oyo+State',
    coordinates: '7.4647° N, 3.7533° E',
  },
  'uniciti': {
    name: 'UNICITI',
    tagline: 'First Smart Estate in Malete',
    location: 'Malete (KWASU)',
    state: 'Kwara State',
    category: 'Smart Estate',
    description:
      'Purpose-built smart infrastructure catering to high rental yields, student housing, and strategic land appreciation near KWASU campus.',
    titleStatus: 'Verified Survey Title',
    price: '₦1,000,000 / 150 SQM',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Proximity to Kwara State University (KWASU)',
      'High student housing rental demand',
      'Smart security monitoring & street lighting',
      'Flexible payment plan options available',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Malete%20KWASU%20Kwara%20State&t=&z=14&ie=UTF8&iwloc=&output=embed',
    googleMapsLink: 'https://maps.google.com/?q=Malete+KWASU+Kwara+State',
    coordinates: '8.7121° N, 4.4642° E',
  },
  'emiratis-court': {
    name: "Emirati's Court",
    tagline: 'Corridors of Growth & Prestige',
    location: 'Oke-Oyi, Ilorin',
    state: 'Kwara State',
    category: 'High ROI Corridor',
    description:
      'A prestigious gated development designed for long-term wealth security, offering prime residential and commercial plots.',
    titleStatus: 'Approved Survey & C of O Processed',
    price: '₦900,000 / 150 SQM',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    features: [
      'Commercial & residential plot allocations',
      'Rapidly developing Ilorin East investment hub',
      'Instant plot allocation upon full payment',
      'Dry ground terrain with excellent topography',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Oke-Oyi%20Ilorin%20Kwara%20State&t=&z=13&ie=UTF8&iwloc=&output=embed',
    googleMapsLink: 'https://maps.google.com/?q=Oke-Oyi+Ilorin+Kwara+State',
    coordinates: '8.5414° N, 4.6738° E',
  },
};

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = propertiesData[slug];

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1F0B05] pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link
          href="/#developments"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#7D4F2E] hover:text-[#1F0B05] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Developments</span>
        </Link>

        {/* Hero Section */}
        <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-10">
          <Image
            src={property.imageUrl}
            alt={property.name}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDBE19] text-[#1F0B05] text-xs font-bold uppercase tracking-wider mb-3">
              {property.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black mb-2">{property.name}</h1>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <MapPin className="w-4 h-4 text-[#FDBE19]" />
              <span>{property.location}, {property.state}</span>
            </div>
          </div>
        </div>

        {/* Content Details & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">About {property.name}</h2>
              <p className="text-base text-[#1F0B05]/80 leading-relaxed font-normal">
                {property.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {property.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#7D4F2E] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium text-[#1F0B05]/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing & CTA Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1F0B05]/10 shadow-sm h-fit space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1F0B05]/60 block mb-1">
                Pricing / Investment
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#7D4F2E]">
                {property.price}
              </span>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#1F0B05]/60 block mb-1">
                Title Status
              </span>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>{property.titleStatus}</span>
              </div>
            </div>

            <button className="w-full py-3.5 px-6 rounded-xl bg-[#1F0B05] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#7D4F2E] transition-colors shadow-md">
              Inquire Now
            </button>
          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE LOCATION MAP SECTION                              */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-8 border-t border-[#1F0B05]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1F0B05]">Location & Map</h3>
              <p className="text-xs sm:text-sm text-[#1F0B05]/70 font-medium mt-1">
                Approx. Coordinates: {property.coordinates}
              </p>
            </div>

            <a
              href={property.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F5EBE1] text-[#7D4F2E] text-xs font-bold uppercase tracking-wider hover:bg-[#7D4F2E] hover:text-white transition-colors w-fit"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Interactive Iframe */}
          <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-[#1F0B05]/10 shadow-lg bg-gray-100">
            <iframe
              title={`Map of ${property.name}`}
              src={property.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter grayscale-[15%] contrast-[105%]"
            />
          </div>
        </div>

      </div>
    </main>
  );
}