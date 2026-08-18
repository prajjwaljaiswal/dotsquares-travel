export interface TravelPackage {
  id: string;
  name: string;
  description: string;
  location: string;
  price: number;
  currency: string;
  image: string;
  rating?: number;
  duration?: string;
  isFeatured?: boolean;
  isTrending?: boolean;
}

export const packages: TravelPackage[] = [
  {
    id: '1',
    name: 'Paris Getaway',
    description: 'Experience the romance and charm of the City of Lights with guided tours and luxury accommodation',
    location: 'Paris, France',
    price: 1299,
    currency: 'USD',
    image: '/images/packages/paris.jpg',
    rating: 4.8,
    duration: '5 days',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Tokyo Adventure',
    description: 'Discover ancient traditions blend with futuristic technology in Japan vibrant capital',
    location: 'Tokyo, Japan',
    price: 1899,
    currency: 'USD',
    image: '/images/packages/tokyo.jpg',
    rating: 4.9,
    duration: '7 days',
    isTrending: true,
  },
  {
    id: '3',
    name: 'Bali Retreat',
    description: 'Relax in tropical paradise with pristine beaches, ancient temples, and lush rice terraces',
    location: 'Bali, Indonesia',
    price: 899,
    currency: 'USD',
    image: '/images/packages/bali.jpg',
    rating: 4.7,
    duration: '6 days',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'New York Explorer',
    description: 'Experience the energy of the city that never sleeps with iconic landmarks and Broadway shows',
    location: 'New York, USA',
    price: 1099,
    currency: 'USD',
    image: '/images/packages/nyc.jpg',
    rating: 4.6,
    duration: '4 days',
    isTrending: true,
  },
  {
    id: '5',
    name: 'Rome Historical',
    description: 'Walk through centuries of history visiting the Colosseum, Vatican City, and ancient ruins',
    location: 'Rome, Italy',
    price: 1199,
    currency: 'USD',
    image: '/images/packages/rome.jpg',
    rating: 4.8,
    duration: '5 days',
    isFeatured: true,
  },
];

export const getPackageById = (id: string): TravelPackage | undefined => {
  return packages.find((pkg) => pkg.id === id);
};

export const getFeaturedOrTrendingPackages = (): TravelPackage[] => {
  return packages.filter((pkg) => pkg.isFeatured || pkg.isTrending);
};
