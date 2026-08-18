export interface Review {
  id: string;
  packageId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  category: string;
  price: number;
  currency: string;
  imageUrl: string;
  description: string;
  rating: number;
  reviews: Review[];
}

export const packages: TravelPackage[] = [
  {
    id: 'pkg-001',
    title: 'Bali Beach Escape',
    destination: 'Bali',
    category: 'Beach',
    price: 799,
    currency: 'USD',
    imageUrl: 'https://images.example.com/bali-beach.jpg',
    description: '7 days of sun, sand and relaxation in the heart of Bali.',
    rating: 4.6,
    reviews: [
      {
        id: 'rev-001',
        packageId: 'pkg-001',
        author: 'Priya Sharma',
        rating: 5,
        comment: 'Absolutely stunning resort and the itinerary was perfectly paced. Would book again!',
        date: '2024-02-14'
      },
      {
        id: 'rev-002',
        packageId: 'pkg-001',
        author: 'James Carter',
        rating: 4,
        comment: 'Great value for money, though the airport transfer was a bit delayed.',
        date: '2024-01-30'
      }
    ]
  },
  {
    id: 'pkg-002',
    title: 'Bali Cultural Retreat',
    destination: 'Bali',
    category: 'Culture',
    price: 649,
    currency: 'USD',
    imageUrl: 'https://images.example.com/bali-culture.jpg',
    description: 'Explore temples, rice terraces and traditional villages across Bali.',
    rating: 4.4,
    reviews: [
      {
        id: 'rev-003',
        packageId: 'pkg-002',
        author: 'Aditi Rao',
        rating: 4,
        comment: 'Loved the guided temple tours, very knowledgeable local guides.',
        date: '2024-03-02'
      }
    ]
  },
  {
    id: 'pkg-003',
    title: 'Bali Adventure Trek',
    destination: 'Bali',
    category: 'Adventure',
    price: 899,
    currency: 'USD',
    imageUrl: 'https://images.example.com/bali-trek.jpg',
    description: 'Volcano sunrise trek and white water rafting through Bali highlands.',
    rating: 4.7,
    reviews: [
      {
        id: 'rev-004',
        packageId: 'pkg-003',
        author: 'Michael Lee',
        rating: 5,
        comment: 'The sunrise trek was the highlight of our trip, breathtaking views!',
        date: '2024-02-20'
      }
    ]
  },
  {
    id: 'pkg-004',
    title: 'Swiss Alps Ski Adventure',
    destination: 'Switzerland',
    category: 'Adventure',
    price: 1499,
    currency: 'USD',
    imageUrl: 'https://images.example.com/swiss-alps.jpg',
    description: 'Ski the Swiss Alps with expert instructors and cozy chalet stays.',
    rating: 4.8,
    reviews: [
      {
        id: 'rev-005',
        packageId: 'pkg-004',
        author: 'Elena Fischer',
        rating: 5,
        comment: 'Best skiing trip of my life, the chalet was pure luxury.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: 'pkg-005',
    title: 'Swiss Lakes & Villages',
    destination: 'Switzerland',
    category: 'Culture',
    price: 1099,
    currency: 'USD',
    imageUrl: 'https://images.example.com/swiss-lakes.jpg',
    description: 'A relaxed tour through Switzerland lakeside towns and villages.',
    rating: 4.5,
    reviews: [
      {
        id: 'rev-006',
        packageId: 'pkg-005',
        author: 'Tom Becker',
        rating: 4,
        comment: 'Beautiful scenery, the boat rides on the lakes were relaxing.',
        date: '2024-02-05'
      }
    ]
  },
  {
    id: 'pkg-006',
    title: 'Kyoto Zen Journey',
    destination: 'Japan',
    category: 'Culture',
    price: 1299,
    currency: 'USD',
    imageUrl: 'https://images.example.com/kyoto-zen.jpg',
    description: 'Discover ancient temples, gardens and tea ceremonies in Kyoto.',
    rating: 4.9,
    reviews: [
      {
        id: 'rev-007',
        packageId: 'pkg-006',
        author: 'Yuki Tanaka',
        rating: 5,
        comment: 'An unforgettable, peaceful experience. The tea ceremony was magical.',
        date: '2024-03-11'
      }
    ]
  }
];
