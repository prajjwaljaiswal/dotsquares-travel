export interface PackageImage {
  id: string;
  url: string;
  alt: string;
}

export type AvailabilityStatus = 'available' | 'limited' | 'soldout';

export interface TravelPackage {
  id: string;
  title: string;
  shortOverview: string;
  description: string;
  highlights: string[];
  price: number;
  currency: string;
  durationDays: number;
  rating: number;
  reviewCount: number;
  availability: AvailabilityStatus;
  availableSpots?: number;
  images: PackageImage[];
  featured?: boolean;
  trending?: boolean;
}