import { Destination } from '../types/destination';

export const destinations: Destination[] = [
  {
    id: 'dest-bali',
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    heroImageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    summary: 'A tropical paradise known for lush rice terraces, ancient temples, and vibrant beach culture.',
    attractions: [
      {
        id: 'bali-1',
        name: 'Tanah Lot Temple',
        description: 'An iconic sea temple perched on a rock formation, famous for stunning sunset views.',
        imageUrl: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
        category: 'Culture'
      },
      {
        id: 'bali-2',
        name: 'Tegallalang Rice Terraces',
        description: 'Dramatic stepped rice paddies offering some of the most picturesque scenery in Bali.',
        imageUrl: 'https://images.unsplash.com/photo-1518548419970-73b1c39ce7f4?auto=format&fit=crop&w=800&q=80',
        category: 'Nature'
      },
      {
        id: 'bali-3',
        name: 'Ubud Monkey Forest',
        description: 'A sacred sanctuary home to hundreds of playful long-tailed macaques and ancient temples.',
        imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
        category: 'Wildlife'
      },
      {
        id: 'bali-4',
        name: 'Mount Batur Sunrise Trek',
        description: 'A guided pre-dawn hike up an active volcano rewarded with breathtaking sunrise views.',
        imageUrl: 'https://images.unsplash.com/photo-1518544866330-95a4cf5b9b3f?auto=format&fit=crop&w=800&q=80',
        category: 'Adventure'
      }
    ]
  },
  {
    id: 'dest-paris',
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    heroImageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80',
    summary: 'The City of Light, celebrated for its art, architecture, and world-class cuisine.',
    attractions: [
      {
        id: 'paris-1',
        name: 'Eiffel Tower',
        description: 'The world-famous iron lattice tower offering panoramic views of the city.',
        imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
        category: 'Landmark'
      },
      {
        id: 'paris-2',
        name: 'The Louvre',
        description: 'The world\'s largest art museum, home to masterpieces like the Mona Lisa.',
        imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
        category: 'Culture'
      },
      {
        id: 'paris-3',
        name: 'Montmartre & Sacré-Cœur',
        description: 'A charming hilltop district with cobblestone streets and a stunning basilica view.',
        imageUrl: 'https://images.unsplash.com/photo-1541171376-31c4ed4d5906?auto=format&fit=crop&w=800&q=80',
        category: 'Culture'
      }
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}
