import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Lush rice terraces, pristine beaches, and vibrant culture.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    pricePerNight: 85,
  },
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    description: 'Iconic whitewashed villages perched above the Aegean Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077',
    pricePerNight: 150,
  },
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Historic temples, serene gardens, and cherry blossoms.',
    imageUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    pricePerNight: 110,
  },
];
