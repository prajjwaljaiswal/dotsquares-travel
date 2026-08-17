import { TravelPackage } from '../types/package';

export const packages: TravelPackage[] = [
  {
    id: 'p1',
    title: 'Bali Beach Escape',
    image: 'https://images.example.com/packages/bali.jpg',
    duration: '5 Days / 4 Nights',
    rating: 4.8,
    price: 899,
    featured: true,
    trending: true,
    description:
      'Relax on pristine beaches, explore ancient temples, and enjoy vibrant nightlife on this all-inclusive Bali getaway.'
  },
  {
    id: 'p2',
    title: 'Swiss Alps Adventure',
    image: 'https://images.example.com/packages/swiss-alps.jpg',
    duration: '7 Days / 6 Nights',
    rating: 4.9,
    price: 2199,
    featured: true,
    trending: false,
    description:
      'Hike scenic trails, ride historic cable cars, and take in breathtaking alpine views on this Swiss mountain adventure.'
  },
  {
    id: 'p3',
    title: 'Dubai City Lights',
    image: 'https://images.example.com/packages/dubai.jpg',
    duration: '4 Days / 3 Nights',
    rating: 4.6,
    price: 1099,
    featured: false,
    trending: true,
    description:
      'Experience futuristic skylines, desert safaris, and luxury shopping in the heart of Dubai.'
  },
  {
    id: 'p4',
    title: 'Kyoto Cultural Journey',
    image: 'https://images.example.com/packages/kyoto.jpg',
    duration: '6 Days / 5 Nights',
    rating: 4.7,
    price: 1599,
    featured: true,
    trending: true,
    description:
      'Wander through ancient temples, traditional gardens, and historic streets on this immersive Kyoto experience.'
  },
  {
    id: 'p5',
    title: 'Santorini Sunset Retreat',
    image: 'https://images.example.com/packages/santorini.jpg',
    duration: '5 Days / 4 Nights',
    rating: 4.9,
    price: 1799,
    featured: true,
    trending: false,
    description:
      'Watch world-famous sunsets, sail the Aegean Sea, and stay in iconic cliffside villas in Santorini.'
  },
  {
    id: 'p6',
    title: 'Amazon Rainforest Expedition',
    image: 'https://images.example.com/packages/amazon.jpg',
    duration: '8 Days / 7 Nights',
    rating: 4.5,
    price: 2499,
    featured: false,
    trending: true,
    description:
      'Explore the world\'s largest rainforest with guided wildlife tours, river cruises, and jungle lodges.'
  },
  {
    id: 'p7',
    title: 'Iceland Northern Lights Tour',
    image: 'https://images.example.com/packages/iceland.jpg',
    duration: '6 Days / 5 Nights',
    rating: 4.8,
    price: 2099,
    featured: true,
    trending: true,
    description:
      'Chase the aurora borealis, soak in geothermal hot springs, and explore glaciers on this Icelandic adventure.'
  },
  {
    id: 'p8',
    title: 'Maldives Overwater Bliss',
    image: 'https://images.example.com/packages/maldives.jpg',
    duration: '5 Days / 4 Nights',
    rating: 5.0,
    price: 2999,
    featured: false,
    trending: false,
    description:
      'Unwind in a private overwater villa surrounded by crystal-clear turquoise waters and vibrant coral reefs.'
  }
];
