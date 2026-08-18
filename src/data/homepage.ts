import { Review, Testimonial } from './types';

/**
 * Curated reviews shown on the homepage "What our travelers say" section.
 */
export const homepageReviews: Review[] = [
  {
    id: 'home-rev-1',
    author: 'Ankita Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Ubud and Tanah Lot were breathtaking! The itinerary was well planned and our guide was very knowledgeable.',
    date: '2024-02-18',
    avatarUrl: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 'home-rev-2',
    author: 'Ishaan & Riya Bhatt',
    location: 'Mumbai',
    rating: 5,
    comment: 'The overwater villa was pure luxury and the beach dinner was the most romantic evening of our lives.',
    date: '2024-02-14',
    avatarUrl: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 'home-rev-3',
    author: 'Nikhil Chatterjee',
    location: 'Kolkata',
    rating: 5,
    comment: 'The Versailles day trip was breathtaking and the Seine cruise dinner was a wonderful experience.',
    date: '2023-10-12',
    avatarUrl: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 'home-rev-4',
    author: 'Rahul Bansal',
    location: 'Delhi',
    rating: 5,
    comment: 'Jungfraujoch was a once-in-a-lifetime experience. The scenery throughout the trip was stunning.',
    date: '2023-08-14',
    avatarUrl: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: 'home-rev-5',
    author: 'Devansh Kohli',
    location: 'Noida',
    rating: 5,
    comment: 'Phi Phi Island and Maya Bay were absolutely stunning. Krabi was a hidden gem we loved exploring.',
    date: '2024-02-27',
    avatarUrl: 'https://i.pravatar.cc/150?img=69'
  },
  {
    id: 'home-rev-6',
    author: 'Nitin Joshi',
    location: 'Delhi',
    rating: 5,
    comment: 'The houseboat stay was such a unique experience and the Gulmarg gondola ride offered stunning views.',
    date: '2023-05-20',
    avatarUrl: 'https://i.pravatar.cc/150?img=76'
  },
  {
    id: 'home-rev-7',
    author: 'Vikram Singh',
    location: 'Jaipur',
    rating: 5,
    comment: 'The desert safari was thrilling and Burj Khalifa views were spectacular. Well organized trip.',
    date: '2024-01-22',
    avatarUrl: 'https://i.pravatar.cc/150?img=18'
  }
];

/**
 * Curated testimonials used across the homepage hero/testimonial carousel
 * as well as in destination detail pages when no destination-specific
 * testimonials are available.
 */
export const homepageTestimonials: Testimonial[] = [
  {
    id: 'home-test-1',
    author: 'Priya & Karan Malhotra',
    role: 'Honeymoon couple, Bali',
    quote: 'Our honeymoon in Bali was straight out of a dream. Thank you for such flawless planning!',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
    rating: 5
  },
  {
    id: 'home-test-2',
    author: 'The Chopra Family',
    role: 'Family traveler, Maldives',
    quote: 'A wonderful family holiday with activities for both kids and adults. Will definitely return!',
    avatarUrl: 'https://i.pravatar.cc/150?img=48',
    rating: 5
  },
  {
    id: 'home-test-3',
    author: 'Aisha & Zaid Khan',
    role: 'Anniversary trip, Paris',
    quote: 'We celebrated our anniversary in the most romantic city in the world, and it was perfectly planned.',
    avatarUrl: 'https://i.pravatar.cc/150?img=33',
    rating: 5
  },
  {
    id: 'home-test-4',
    author: 'Manish Agarwal',
    role: 'Rail enthusiast, Switzerland',
    quote: 'The Glacier Express journey alone was worth the trip. An impeccably organized tour.',
    avatarUrl: 'https://i.pravatar.cc/150?img=57',
    rating: 5
  },
  {
    id: 'home-test-5',
    author: 'Gaurav Malhotra',
    role: 'Adventure traveler, Kashmir',
    quote: 'Sonmarg and Gulmarg offered some of the most stunning mountain views I have ever seen in India.',
    avatarUrl: 'https://i.pravatar.cc/150?img=81',
    rating: 5
  },
  {
    id: 'home-test-6',
    author: 'Sanya Kapoor',
    role: 'Family traveler, Dubai',
    quote: 'Every detail was taken care of. The luxury escape package was worth every penny.',
    avatarUrl: 'https://i.pravatar.cc/150?img=41',
    rating: 5
  }
];
