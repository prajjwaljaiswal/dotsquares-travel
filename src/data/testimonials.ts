export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  quote: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    location: 'London, UK',
    rating: 5,
    quote:
      'Booking with this team made our honeymoon absolutely unforgettable. Every detail was taken care of, from the airport transfer to the sunset dinner cruise.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 't2',
    name: 'James Carter',
    location: 'Austin, USA',
    rating: 4,
    quote:
      'Great value for money and a really smooth booking process. The itinerary they suggested for Bali was spot on and saved us so much planning time.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 't3',
    name: 'Priya Nair',
    location: 'Mumbai, India',
    rating: 5,
    quote:
      'From the first inquiry to landing back home, the support was fantastic. Our family trip to Switzerland felt completely stress-free.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    id: 't4',
    name: 'Diego Fernandez',
    location: 'Madrid, Spain',
    rating: 4,
    quote:
      'Loved the personalized recommendations. We discovered hidden gems in Kyoto we never would have found on our own.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    id: 't5',
    name: 'Amelia Clarke',
    location: 'Sydney, Australia',
    rating: 5,
    quote:
      'Exceptional service from start to finish. The 24/7 support was a lifesaver when our connecting flight got delayed.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
  {
    id: 't6',
    name: 'Michael Osei',
    location: 'Accra, Ghana',
    rating: 4,
    quote:
      'The whole booking experience felt premium without the premium price tag. Will definitely be using this platform again.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
  },
];
