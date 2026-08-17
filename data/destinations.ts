import { Destination } from '@/types/index';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'Iconic whitewashed villages perched above the Aegean Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
    pricePerNight: 220,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Historic temples, serene gardens, and traditional tea houses.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    pricePerNight: 180,
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Banff',
    country: 'Canada',
    description: 'Turquoise lakes surrounded by towering Rocky Mountain peaks.',
    imageUrl: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce',
    pricePerNight: 150,
    rating: 4.7,
  },
];
