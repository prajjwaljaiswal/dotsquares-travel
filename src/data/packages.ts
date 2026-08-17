import type { TravelPackage } from '../types/package';

const packages: TravelPackage[] = [
  {
    id: 'bali-adventure',
    title: 'Bali Adventure Escape',
    shortOverview:
      'Explore lush rice terraces, sacred temples and pristine beaches on this 7-day Bali journey.',
    description:
      'Discover the magic of Bali on this immersive 7-day adventure. From sunrise treks up Mount Batur to relaxing days on the beaches of Nusa Dua, this package blends culture, nature and relaxation into one unforgettable trip. Stay in handpicked boutique hotels and travel with expert local guides throughout your journey.',
    highlights: [
      'Sunrise trek up Mount Batur',
      'Guided tour of Tanah Lot Temple',
      'Private beach day in Nusa Dua',
      'Traditional Balinese cooking class',
      'Visit to the Tegallalang Rice Terraces',
    ],
    price: 1299,
    currency: 'USD',
    durationDays: 7,
    rating: 4.7,
    reviewCount: 218,
    availability: 'available',
    images: [
      { id: 'img-1', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', alt: 'Bali rice terraces' },
      { id: 'img-2', url: 'https://images.unsplash.com/photo-1518548419970-9b3bf7d8dd0b', alt: 'Bali temple at sunset' },
      { id: 'img-3', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62', alt: 'Bali beach' },
      { id: 'img-4', url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b', alt: 'Bali waterfall' },
    ],
  },
  {
    id: 'paris-getaway',
    title: 'Paris Romantic Getaway',
    shortOverview: 'A 4-day escape through the City of Light featuring iconic landmarks and gourmet dining.',
    description:
      "Stroll along the Seine, marvel at the Eiffel Tower and savor world-class cuisine on this 4-day Parisian getaway. Perfect for couples and culture lovers, this package includes skip-the-line access to major museums and a private evening river cruise.",
    highlights: [
      'Skip-the-line Louvre Museum tour',
      'Evening Seine river cruise',
      'Guided walk through Montmartre',
      'Reserved viewing at the Eiffel Tower summit',
    ],
    price: 899,
    currency: 'USD',
    durationDays: 4,
    rating: 4.5,
    reviewCount: 142,
    availability: 'limited',
    availableSpots: 3,
    images: [
      { id: 'img-1', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', alt: 'Eiffel Tower' },
      { id: 'img-2', url: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f', alt: 'Paris street' },
      { id: 'img-3', url: 'https://images.unsplash.com/photo-1471623320832-752e8bbf8413', alt: 'Louvre Museum' },
    ],
  },
  {
    id: 'swiss-alps-trek',
    title: 'Swiss Alps Trekking Expedition',
    shortOverview: 'A 6-day guided trek through breathtaking alpine trails and charming mountain villages.',
    description:
      "Challenge yourself with a 6-day trekking expedition through the Swiss Alps. Traverse scenic mountain passes, stay in cozy alpine lodges and take in panoramic views of some of Europe's highest peaks, all with the support of expert mountain guides.",
    highlights: [
      'Guided trek through Zermatt trails',
      'Panoramic views of the Matterhorn',
      'Overnight stay in a traditional alpine lodge',
      'Cable car ride to Klein Matterhorn',
    ],
    price: 1599,
    currency: 'USD',
    durationDays: 6,
    rating: 4.9,
    reviewCount: 97,
    availability: 'soldout',
    images: [
      { id: 'img-1', url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7', alt: 'Swiss Alps mountains' },
      { id: 'img-2', url: 'https://images.unsplash.com/photo-1508264165352-258db2ebd59b', alt: 'Alpine village' },
    ],
  },
];

export function getPackageById(id: string): Promise<TravelPackage | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(packages.find((pkg) => pkg.id === id));
    }, 200);
  });
}

export function getAllPackages(): TravelPackage[] {
  return packages;
}
