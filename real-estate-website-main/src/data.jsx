// Banner stats
export const bannerData = [
    {500: 'Properties Sold'},
    {1000: 'Happy Customers'},
    {50: 'Locations Covered'}
]

// Import land images (using existing house images as placeholders)
import House1 from './assets/images/houses/house1.png';
import House2 from './assets/images/houses/house2.png';
import House3 from './assets/images/houses/house3.png';
import House4 from './assets/images/houses/house4.png';
import House5 from './assets/images/houses/house5.png';
import House6 from './assets/images/houses/house6.png';
import House7 from './assets/images/houses/house7.png';
import House8 from './assets/images/houses/house8.png';
import House9 from './assets/images/houses/house9.png';
import House10 from './assets/images/houses/house10.png';
import House11 from './assets/images/houses/house11.png';
import House12 from './assets/images/houses/house12.png';
import House1Lg from './assets/images/houses/house1lg.png';
import House2Lg from './assets/images/houses/house2lg.png';
import House3Lg from './assets/images/houses/house3lg.png';
import House4Lg from './assets/images/houses/house4lg.png';
import House5Lg from './assets/images/houses/house5lg.png';
import House6Lg from './assets/images/houses/house6lg.png';
import House7Lg from './assets/images/houses/house7lg.png';
import House8Lg from './assets/images/houses/house8lg.png';
import House9Lg from './assets/images/houses/house9lg.png';
import House10Lg from './assets/images/houses/house10lg.png';
import House11Lg from './assets/images/houses/house11lg.png';
import House12Lg from './assets/images/houses/house12lg.png';

// Import agent images
import Agent1 from './assets/images/agents/agent1.png';
import Agent2 from './assets/images/agents/agent2.png';
import Agent3 from './assets/images/agents/agent3.png';
import MDRadhakrishnan from './assets/images/agents/md_radhakrishnan.jpg';


export const housesData = [
  {
    id: 1,
    type: 'Residential Plot',
    name: 'Premium Plot - Ashok Nagar',
    description:
      'Premium residential plot located in the heart of Ashok Nagar, Chennai. This prime location offers excellent connectivity to schools, hospitals, and shopping centres. DTCP approved with clear title. Ideal for building your dream home in one of Chennai\'s most sought-after neighbourhoods. East-facing plot with wide road access.',
    image: House1,
    imageLg: House1Lg,
    country: 'Chennai',
    address: '1st Avenue, Ashok Nagar, Chennai - 600 083',
    surface: '1200 sq ft',
    year: '2024',
    price: '4500000',
    priceDisplay: '45 Lakhs',
    facing: 'East',
    approval: 'DTCP Approved',
    status: 'Ready',
    amenities: ['Water Connection', 'Electricity', 'Road Access', 'Drainage'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 2,
    type: 'Residential Plot',
    name: 'Corner Plot - Velachery',
    description:
      'Spacious corner residential plot in Velachery near the metro station. Excellent investment opportunity with rapid appreciation in value. CMDA approved layout with all amenities. Close proximity to IT corridors, schools, and healthcare facilities. Perfect for both residential construction and investment purposes.',
    image: House2,
    imageLg: House2Lg,
    country: 'Chennai',
    address: 'Near Metro Station, Velachery, Chennai - 600 042',
    surface: '1500 sq ft',
    year: '2024',
    price: '6000000',
    priceDisplay: '60 Lakhs',
    facing: 'North-East',
    approval: 'CMDA Approved',
    status: 'Ready',
    amenities: ['Metro Nearby', 'Water Connection', 'Electricity', 'Park'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 3,
    type: 'Commercial Plot',
    name: 'Commercial Land - OMR',
    description:
      'Prime commercial plot on Old Mahabalipuram Road (OMR), the IT corridor of Chennai. Ideal for commercial building, showroom, or IT office. High visibility location with excellent frontage. DTCP approved with clear patta. Surrounded by major IT parks and residential townships.',
    image: House3,
    imageLg: House3Lg,
    country: 'Chennai',
    address: 'IT Corridor, OMR, Chennai - 600 119',
    surface: '2400 sq ft',
    year: '2024',
    price: '12000000',
    priceDisplay: '1.2 Crore',
    facing: 'South',
    approval: 'DTCP Approved',
    status: 'Ready',
    amenities: ['Main Road', 'IT Parks Nearby', 'Bus Stop', 'High Visibility'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 4,
    type: 'Residential Plot',
    name: 'Gated Community - Tambaram',
    description:
      'Beautiful residential plot in a gated community layout at Tambaram. Features include 24/7 security, landscaped gardens, children\'s play area, and clubhouse access. RERA registered project with bank loan availability. Close to Tambaram railway station and bus terminus.',
    image: House4,
    imageLg: House4Lg,
    country: 'Chennai',
    address: 'West Tambaram, Chennai - 600 045',
    surface: '1000 sq ft',
    year: '2025',
    price: '2500000',
    priceDisplay: '25 Lakhs',
    facing: 'West',
    approval: 'RERA Registered',
    status: 'Ready',
    amenities: ['Gated Community', '24/7 Security', 'Park', 'Clubhouse'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 5,
    type: 'Farm Land',
    name: 'Farm Land - Kanchipuram',
    description:
      'Fertile agricultural land near Kanchipuram with good water table. Suitable for farming, farmhouse construction, or long-term investment. Well-connected by road with nearby village amenities. Patta transfer available. Surrounded by coconut groves and paddy fields.',
    image: House5,
    imageLg: House5Lg,
    country: 'Kanchipuram',
    address: 'Near Kanchipuram, Tamil Nadu - 631 501',
    surface: '1 Acre',
    year: '2024',
    price: '3500000',
    priceDisplay: '35 Lakhs',
    facing: 'East',
    approval: 'Patta Available',
    status: 'Ready',
    amenities: ['Water Source', 'Road Access', 'Electricity', 'Fencing'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 6,
    type: 'Residential Plot',
    name: 'Premium Villa Plot - ECR',
    description:
      'Exclusive villa plot on East Coast Road (ECR) with beach proximity. Perfect for luxury beach house or weekend villa. DTCP approved gated community with world-class amenities. Stunning sea breeze and peaceful environment away from the city hustle.',
    image: House6,
    imageLg: House6Lg,
    country: 'Chennai',
    address: 'East Coast Road, Kovalam, Chennai - 603 112',
    surface: '2000 sq ft',
    year: '2025',
    price: '8000000',
    priceDisplay: '80 Lakhs',
    facing: 'East',
    approval: 'DTCP Approved',
    status: 'Under Development',
    amenities: ['Beach Nearby', 'Gated Community', 'Landscaping', 'Club House'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 7,
    type: 'Residential Plot',
    name: 'Budget Plot - Avadi',
    description:
      'Affordable residential plot in Avadi with good connectivity to the city. CMDA approved layout with all basic amenities. Near Avadi bus terminus and railway station. Ideal for middle-class families looking to build their own home at an affordable price.',
    image: House7,
    imageLg: House7Lg,
    country: 'Chennai',
    address: 'Near Bus Terminus, Avadi, Chennai - 600 054',
    surface: '800 sq ft',
    year: '2024',
    price: '1600000',
    priceDisplay: '16 Lakhs',
    facing: 'North',
    approval: 'CMDA Approved',
    status: 'Ready',
    amenities: ['Bus Stop', 'Railway Station', 'Market', 'School'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 8,
    type: 'Commercial Plot',
    name: 'Shop Plot - Anna Nagar',
    description:
      'Prime commercial plot in Anna Nagar suitable for shop, showroom, or office space. High footfall area with excellent commercial potential. CMDA approved with clear documentation. One of Chennai\'s most prestigious residential and commercial localities.',
    image: House8,
    imageLg: House8Lg,
    country: 'Chennai',
    address: '2nd Avenue, Anna Nagar, Chennai - 600 040',
    surface: '600 sq ft',
    year: '2024',
    price: '9000000',
    priceDisplay: '90 Lakhs',
    facing: 'South',
    approval: 'CMDA Approved',
    status: 'Ready',
    amenities: ['Main Road', 'Parking', 'High Footfall', 'Metro Nearby'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 9,
    type: 'Residential Plot',
    name: 'Lake View Plot - Sholinganallur',
    description:
      'Beautiful residential plot with lake view in Sholinganallur, close to major IT companies and international schools. DTCP approved layout with modern infrastructure. A perfect blend of nature and urban convenience. Bank loan available from all major banks.',
    image: House9,
    imageLg: House9Lg,
    country: 'Chennai',
    address: 'Near IT Park, Sholinganallur, Chennai - 600 119',
    surface: '1350 sq ft',
    year: '2025',
    price: '5400000',
    priceDisplay: '54 Lakhs',
    facing: 'East',
    approval: 'DTCP Approved',
    status: 'Ready',
    amenities: ['Lake View', 'IT Park Nearby', 'School', 'Hospital'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 10,
    type: 'Farm Land',
    name: 'Investment Land - Chengalpattu',
    description:
      'Excellent investment land near Chengalpattu with upcoming infrastructure developments. Located near the proposed industrial corridor. Patta and chitta available. Good road connectivity and expected high appreciation in the next 3-5 years.',
    image: House10,
    imageLg: House10Lg,
    country: 'Chengalpattu',
    address: 'Near NH45, Chengalpattu, Tamil Nadu - 603 001',
    surface: '2 Acres',
    year: '2024',
    price: '5000000',
    priceDisplay: '50 Lakhs',
    facing: 'North',
    approval: 'Patta Available',
    status: 'Ready',
    amenities: ['NH Access', 'Village Nearby', 'Water', 'Electricity'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 11,
    type: 'Residential Plot',
    name: 'Premium Plot - Porur',
    description:
      'Well-located residential plot in Porur, one of the fastest growing areas in Chennai. Close to Ramachandra University and major hospitals. DTCP approved with clear title. Excellent connectivity to airport and city centre via the Porur junction flyover.',
    image: House11,
    imageLg: House11Lg,
    country: 'Chennai',
    address: 'Near Ramachandra Hospital, Porur, Chennai - 600 116',
    surface: '1100 sq ft',
    year: '2025',
    price: '3800000',
    priceDisplay: '38 Lakhs',
    facing: 'South-East',
    approval: 'DTCP Approved',
    status: 'Ready',
    amenities: ['Hospital Nearby', 'School', 'Bus Route', 'Airport Access'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
  {
    id: 12,
    type: 'Residential Plot',
    name: 'Affordable Plot - Guduvanchery',
    description:
      'Affordable residential plot in the rapidly developing Guduvanchery area. DTCP approved layout with tar road, drainage, and street lights. Close to SRM University and GST Road. Ideal for budget-conscious buyers looking for future appreciation.',
    image: House12,
    imageLg: House12Lg,
    country: 'Chengalpattu',
    address: 'Near SRM University, Guduvanchery - 603 202',
    surface: '900 sq ft',
    year: '2024',
    price: '1800000',
    priceDisplay: '18 Lakhs',
    facing: 'West',
    approval: 'DTCP Approved',
    status: 'Ready',
    amenities: ['University Nearby', 'GST Road', 'Bus Stop', 'Market'],
    agent: {
      image: MDRadhakrishnan,
      name: 'S. V. Radhakrishnan',
      phone: '90473 35599',
    },
  },
];

// Testimonials data
export const testimonials = [
  {
    name: 'Suresh Kumar',
    location: 'Velachery, Chennai',
    rating: 5,
    text: 'Excellent service from NIMI Housing! They helped me find the perfect plot in Velachery. The entire process was transparent and hassle-free. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    location: 'Tambaram, Chennai',
    rating: 5,
    text: 'I was looking for an affordable plot near Tambaram and NIMI Housing delivered exactly what I wanted. S. V. Radhakrishnan sir personally guided me through the documentation.',
  },
  {
    name: 'Rajesh Iyer',
    location: 'OMR, Chennai',
    rating: 4,
    text: 'Invested in a commercial plot on OMR through NIMI Housing. The property has already appreciated by 30% in just 2 years. Great investment advice!',
  },
  {
    name: 'Lakshmi Narayanan',
    location: 'Ashok Nagar, Chennai',
    rating: 5,
    text: 'Bought a residential plot in Ashok Nagar. The legal verification was thorough and all documents were clear. Very professional team!',
  },
];

// Popular locations
export const popularLocations = [
  { name: 'Ashok Nagar', properties: 12, avgPrice: '45L - 90L' },
  { name: 'Velachery', properties: 8, avgPrice: '35L - 75L' },
  { name: 'OMR', properties: 15, avgPrice: '25L - 1.2Cr' },
  { name: 'Anna Nagar', properties: 10, avgPrice: '60L - 1.5Cr' },
  { name: 'Tambaram', properties: 20, avgPrice: '15L - 40L' },
  { name: 'ECR', properties: 6, avgPrice: '50L - 2Cr' },
  { name: 'Porur', properties: 9, avgPrice: '30L - 60L' },
  { name: 'Sholinganallur', properties: 11, avgPrice: '40L - 80L' },
];

// Blog data
export const blogPosts = [
  {
    id: 1,
    title: '5 Things to Check Before Buying Land in Chennai',
    excerpt: 'Learn the essential checks — title deed, encumbrance certificate, DTCP approval, patta, and more — before investing in land.',
    date: 'Aug 10, 2026',
    category: 'Buying Guide',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Top 10 Upcoming Areas in Chennai for Land Investment in 2026',
    excerpt: 'Discover the fastest growing areas in Chennai that offer excellent appreciation potential for land buyers and investors.',
    date: 'Aug 5, 2026',
    category: 'Investment',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'RERA vs DTCP vs CMDA: Understanding Land Approvals',
    excerpt: 'A comprehensive guide to understanding different land approval authorities in Tamil Nadu and what they mean for buyers.',
    date: 'Jul 28, 2026',
    category: 'Legal',
    readTime: '6 min read',
  },
];

// FAQ data
export const faqData = [
  {
    q: 'What types of properties does NIMI Housing offer?',
    a: 'We specialize in residential plots, commercial plots, farm land, and villa plots across Chennai and surrounding districts including Kanchipuram and Chengalpattu.',
  },
  {
    q: 'Are all properties legally verified?',
    a: 'Yes, every property listed with NIMI Housing undergoes thorough legal verification including title deed check, encumbrance certificate, DTCP/CMDA approval status, and patta verification.',
  },
  {
    q: 'Do you offer bank loan assistance?',
    a: 'Yes, we provide complete bank loan assistance. Most of our DTCP/CMDA approved plots are eligible for home loans from all major banks.',
  },
  {
    q: 'Can I schedule a site visit?',
    a: 'Absolutely! You can schedule a free site visit by calling us at 90473 35599 or clicking the "Book a Visit" button on our website. We arrange transportation for site visits.',
  },
  {
    q: 'What is the process for buying a plot?',
    a: 'The process includes: 1) Choose your plot, 2) Site visit, 3) Legal verification, 4) Token advance, 5) Sale deed registration, 6) Possession. We guide you through every step.',
  },
  {
    q: 'Do you offer EMI/instalment payment options?',
    a: 'Yes, we offer flexible EMI options for select properties. Contact our team at 90473 35599 for detailed payment plans.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We cover all major areas in Chennai including Ashok Nagar, Velachery, OMR, Anna Nagar, Tambaram, ECR, Porur, Sholinganallur, Avadi, and surrounding districts.',
  },
  {
    q: 'How can I contact NIMI Housing?',
    a: 'You can reach us at: Phone: 90473 35599, Email: info@nimihousing.com, Office: No.70/16, Sundarbans Ground Floor, 1st Avenue, Ashok Nagar, Chennai - 600 083.',
  },
];