export type Currency = 'INR' | 'USD';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

export interface Package {
  id: string;
  destinationId: string;
  name: string;
  slug: string;
  durationDays: number;
  durationNights: number;
  price: number;
  currency: Currency;
  summary: string;
  heroImageUrl: string;
  images: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  reviews: Review[];
}

export interface Destination {
  id: string;
  name: string;
  slug: string;
  country: string;
  tagline: string;
  description: string;
  heroImageUrl: string;
  images: string[];
  bestTimeToVisit: string;
  packages: Package[];
  testimonials: Testimonial[];
}
