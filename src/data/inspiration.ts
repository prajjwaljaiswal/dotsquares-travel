export interface InspirationOffer {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface InspirationHighlight {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export const inspirationHighlight: InspirationHighlight = {
  subtitle: 'Summer Getaway Sale',
  title: 'Save up to 30% on your next escape',
  description:
    'Explore sun-soaked beaches, vibrant cities, and hidden gems around the world. Book before the season ends and unlock exclusive seasonal savings.',
  image:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  ctaLabel: 'Explore Offers',
  ctaHref: '/offers'
};

export const inspirationOffers: InspirationOffer[] = [
  {
    id: 'offer-santorini',
    title: 'Santorini Sunset Escape',
    description:
      'Whitewashed villages, caldera views, and unforgettable sunsets await in the Greek islands.',
    image:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    ctaLabel: 'View Package',
    ctaHref: '/destinations/santorini'
  },
  {
    id: 'offer-bali',
    title: 'Bali Rainforest Retreat',
    description:
      'Discover lush jungles, ancient temples, and tranquil rice terraces on this island getaway.',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80',
    ctaLabel: 'View Package',
    ctaHref: '/destinations/bali'
  },
  {
    id: 'offer-kyoto',
    title: 'Kyoto Cultural Journey',
    description:
      'Wander through historic temples, serene gardens, and vibrant streets steeped in tradition.',
    image:
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800&q=80',
    ctaLabel: 'View Package',
    ctaHref: '/destinations/kyoto'
  }
];
