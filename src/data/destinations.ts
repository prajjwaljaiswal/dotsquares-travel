import { Destination } from '../types/destination';

export const destinations: Destination[] = [
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    description:
      'A tropical paradise known for its beaches, volcanic mountains and vibrant culture.',
    imageUrl: 'https://images.example.com/bali/hero.jpg',
    attractions: [
      {
        id: 'ubud-monkey-forest',
        name: 'Ubud Monkey Forest',
        description:
          'A nature reserve and Hindu temple complex home to hundreds of long-tailed macaques.',
        imageUrl: 'https://images.example.com/bali/ubud-monkey-forest.jpg',
        category: 'Nature',
      },
      {
        id: 'tanah-lot',
        name: 'Tanah Lot',
        description:
          'An iconic rock formation temple perched just off the coast, famous for sunset views.',
        imageUrl: 'https://images.example.com/bali/tanah-lot.jpg',
        category: 'Landmark',
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'April to October, during the dry season.',
      weatherNotes:
        'Tropical climate with high humidity; expect brief afternoon showers in the wet season.',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian (Bahasa Indonesia), Balinese widely spoken locally.',
      timezone: 'Central Indonesia Time (UTC+8)',
      visaRequirements: 'Visa-free entry for up to 30 days for many nationalities.',
    },
  },
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    description:
      'The former imperial capital of Japan, celebrated for temples, gardens and traditional wooden houses.',
    imageUrl: 'https://images.example.com/kyoto/hero.jpg',
    attractions: [
      {
        id: 'fushimi-inari',
        name: 'Fushimi Inari Shrine',
        description:
          'Famous for its thousands of vermilion torii gates winding up a wooded mountain.',
        imageUrl: 'https://images.example.com/kyoto/fushimi-inari.jpg',
        category: 'Landmark',
      },
    ],
    practicalInfo: {
      bestTimeToVisit: 'March to May for cherry blossoms, October to November for autumn colours.',
      currency: 'Japanese Yen (JPY)',
      language: 'Japanese',
    },
  },
  {
    id: 'reykjavik-iceland',
    name: 'Reykjavik',
    country: 'Iceland',
    description:
      'The world\'s northernmost capital, a gateway to glaciers, geysers and the northern lights.',
    attractions: [],
  },
];

export default destinations;
