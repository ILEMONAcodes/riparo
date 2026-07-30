export interface Development {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  state: string;
  badge: string;
  titleStatus: string;
  priceRange: string;
  pricing: { size: string; price: string }[];
  landmarks: string[];
  features: string[];
}

export const developmentsData: Development[] = [
  {
    slug: 'eco-ibadan',
    name: 'Eco-Ibadan',
    tagline: 'First Eco-friendly estate in Ibadan',
    location: 'Ido, Ibadan',
    state: 'Oyo State',
    badge: 'New Launch',
    titleStatus: 'Registered Survey, C of O (in view)',
    priceRange: 'Contact for Pricing',
    pricing: [],
    landmarks: ['Ido Local Govt Secretariat', 'Ibadan-Abeokuta Expressway Axis'],
    features: ['Eco-Friendly Design', 'Solar-Ready Infrastructure', 'Gated Community', 'Green Parks']
  },
  {
    slug: 'uniciti',
    name: 'UNICITI',
    tagline: 'First Smart Estate in Malete',
    location: 'Malete (KWASU), Ilorin',
    state: 'Kwara State',
    badge: 'Smart Estate',
    titleStatus: 'Verified Survey Title',
    priceRange: '₦1,000,000 – ₦3,000,000',
    pricing: [
      { size: '150 SQM', price: '₦1,000,000' },
      { size: '300 SQM', price: '₦2,000,000' },
      { size: '450 SQM', price: '₦3,000,000' }
    ],
    landmarks: [
      'Less than 10 mins from Kwara State University (KWASU)',
      'Less than 8 mins from Sydney',
      '3 mins drive from Ayobami Hostel',
      'Less than 8 mins from MD Ayoka Filling Station'
    ],
    features: ['Smart CCTV Monitoring', 'Fast Wi-Fi Nodes', 'Perimeter Fencing', 'Paved Access Roads']
  },
  {
    slug: 'emiratis-court',
    name: "Emirati's Court",
    tagline: 'In the Corridors of Growth & Prestige',
    location: 'Oke-Oyi, Ilorin',
    state: 'Kwara State',
    badge: 'High ROI Corridor',
    titleStatus: 'Approved Survey & C of O Processed',
    priceRange: '₦900,000 – ₦2,500,000',
    pricing: [
      { size: '150 SQM', price: '₦900,000' },
      { size: '300 SQM', price: '₦1,800,000' },
      { size: '450 SQM', price: '₦2,500,000' }
    ],
    landmarks: [
      'University of Ilorin Teaching Hospital (UITH)',
      'Proposed Ilorin Smart City',
      'Proposed Jimoh Babalola University',
      'Ilorin East Local Government Secretariat'
    ],
    features: [
      'Perimeter Fencing',
      'Gated Gatehouse',
      'Allocated Cornerpiece',
      'Eco-Friendly Layout',
      'Estate Clearing Completed',
      'Accessible Motorable Road'
    ]
  }
];