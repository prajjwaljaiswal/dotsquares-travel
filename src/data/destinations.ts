export interface Destination {
  id: string;
  name: string;
  image: string;
  teaser: string;
  slug: string;
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Paris',
    image: '/images/destinations/paris.jpg',
    teaser: 'Experience the city of love, iconic landmarks, and world-class cuisine',
    slug: 'paris',
  },
  {
    id: '2',
    name: 'Tokyo',
    image: '/images/destinations/tokyo.jpg',
    teaser: 'Where ancient traditions meet cutting-edge technology and vibrant culture',
    slug: 'tokyo',
  },
  {
    id: '3',
    name: 'Bali',
    image: '/images/destinations/bali.jpg',
    teaser: 'Tropical paradise with stunning beaches, temples, and lush landscapes',
    slug: 'bali',
  },
  {
    id: '4',
    name: 'New York',
    image: '/images/destinations/nyc.jpg',
    teaser: 'The city that never sleeps with iconic skyline and endless entertainment',
    slug: 'new-york',
  },
  {
    id: '5',
    name: 'Rome',
    image: '/images/destinations/rome.jpg',
    teaser: 'Walk through centuries of history in the Eternal City',
    slug: 'rome',
  },
  {
    id: '6',
    name: 'Sydney',
    image: '/images/destinations/sydney.jpg',
    teaser: 'Harbor city famous for its Opera House, Harbour Bridge, and beaches',
    slug: 'sydney',
  },
  {
    id: '7',
    name: 'Dubai',
    image: '/images/destinations/dubai.jpg',
    teaser: 'Luxury shopping, ultramodern architecture, and desert adventures',
    slug: 'dubai',
  },
];
