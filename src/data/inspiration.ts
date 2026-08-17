export interface InspirationOffer {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaLabel: string;
  ctaUrl: string;
  badge?: string;
}

export const inspirationOffers: InspirationOffer[] = [
  {
    id: 'i1',
    title: 'Summer Escapes to Santorini',
    description:
      'Whitewashed villages, turquoise waters, and unforgettable sunsets await. Book now and save up to 25% on early summer getaways.',
    imageUrl:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    ctaLabel: 'Explore Santorini Deals',
    ctaUrl: '/destinations/santorini',
    badge: 'Save 25%',
  },
  {
    id: 'i2',
    title: 'Winter Wonderland in the Swiss Alps',
    description:
      'Ski slopes, cozy chalets, and breathtaking mountain views. Limited-time winter packages available for a magical retreat.',
    imageUrl:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    ctaLabel: 'Discover Alpine Getaways',
    ctaUrl: '/destinations/swiss-alps',
    badge: 'Winter Special',
  },
  {
    id: 'i3',
    title: 'Cultural Journeys Through Kyoto',
    description:
      'Ancient temples, cherry blossoms, and serene gardens. Immerse yourself in tradition with our curated Kyoto experiences.',
    imageUrl:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    ctaLabel: 'Plan Your Trip',
    ctaUrl: '/destinations/kyoto',
    badge: 'New',
  },
];
