export interface InspirationOffer {
  id: string
  title: string
  description: string
  image: string
  ctaLabel: string
  ctaLink: string
}

export const inspirationOffers: InspirationOffer[] = [
  {
    id: 'i1',
    title: 'Summer Escapes in Santorini',
    description: 'Save up to 30% on beachfront stays and sunset cruises this season.',
    image:
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80',
    ctaLabel: 'Explore Santorini',
    ctaLink: '/explore'
  },
  {
    id: 'i2',
    title: 'Mountain Retreats in Switzerland',
    description: 'Discover alpine adventures with our curated hiking and wellness packages.',
    image:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    ctaLabel: 'Plan Your Trip',
    ctaLink: '/explore'
  },
  {
    id: 'i3',
    title: 'Cultural Journeys Through Japan',
    description: 'Immerse yourself in tradition with exclusive tea ceremony and temple tours.',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    ctaLabel: 'Discover Japan',
    ctaLink: '/explore'
  }
]
