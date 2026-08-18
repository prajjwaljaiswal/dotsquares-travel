export interface SearchFormValues {
  destination: string
  checkIn: string
  checkOut: string
  travellers: number
  packageType: PackageType
}

export type PackageType = 'adventure' | 'leisure' | 'business' | 'luxury' | 'family'

export const PACKAGE_TYPE_OPTIONS: { value: PackageType; label: string }[] = [
  { value: 'adventure', label: 'Adventure' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'business', label: 'Business' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'family', label: 'Family' },
]

export const DEFAULT_SEARCH_VALUES: SearchFormValues = {
  destination: '',
  checkIn: '',
  checkOut: '',
  travellers: 2,
  packageType: 'leisure',
}

export interface SearchFilters {
  destination?: string;
  priceMin?: number;
  priceMax?: number;
  duration?: string;
  category?: string;
  [key: string]: unknown;
}

export type SortOption = 'price-asc' | 'price-desc' | 'popularity' | 'rating' | 'default';

export interface SearchResultItem {
  id: string;
  name: string;
  destination: string;
  price: number;
  rating?: number;
  [key: string]: unknown;
}