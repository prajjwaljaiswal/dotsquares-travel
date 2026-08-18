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
