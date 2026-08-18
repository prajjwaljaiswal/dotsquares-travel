export interface PackageImage {
  id: string;
  src: string;
  alt: string;
}

export type PackageAvailability = 'available' | 'limited' | 'sold-out';

export interface PackageHighlight {
  id: string;
  label: string;
}

export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  shortOverview: string;
  description: string;
  price: number;
  currency: string;
  durationDays: number;
  rating: number;
  reviewCount: number;
  availability: PackageAvailability;
  images: PackageImage[];
  highlights: PackageHighlight[];
  location: string;
}
