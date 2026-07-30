// types/index.ts

export type PropertyStatus = 'Available' | 'Sold' | 'Under Construction' | 'Investment Opportunity';

export interface PropertyListing {
  id: string;
  slug: string;
  title: string;
  brand: 'Riparo' | 'Cosgrove' | 'EVC'; // Optional filter for portfolio views
  location: {
    state: string; // e.g., FCT Abuja
    area: string;  // e.g., Guzape
  };
  price: {
    amount: number;
    currency: 'NGN' | 'USD';
    type: 'Sale' | 'Annual Rent' | 'Investment Unit';
  };
  features: {
    bedrooms?: number;
    bathrooms?: number;
    sizeSqM?: number; // Size in square meters
    amenities: string[]; // e.g., ["Smart Home", "Pool", "CCTV", "Gym"]
  };
  media: {
    thumbnailUrl: string; // URL from Unsplash/your assets
    galleryUrls: string[];
    virtualTourUrl?: string; // Optional Matterport/Video link
  };
  constructionStage?: {
    currentPercent: number; // 0-100
    milestoneName: string; // e.g., 'Foundation complete'
    updatedAt: Date;
  };
  status: PropertyStatus;
  ctaText?: string; // e.g., "Invest in Unit" instead of "View Details"
}