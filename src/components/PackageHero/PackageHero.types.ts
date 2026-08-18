import type { PackageAvailability, PackageImage } from '../../types/package.types';

export interface PackageHeroProps {
  title: string;
  shortOverview: string;
  price: number;
  currency: string;
  durationDays: number;
  rating: number;
  reviewCount: number;
  availability: PackageAvailability;
  images: PackageImage[];
  className?: string;
}
