export interface SearchFilters {
  destination?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  priceMin?: number;
  priceMax?: number;
  categories?: string[];
}

export interface SearchResultItem {
  id: string;
  name: string;
  price: number;
  rating?: number;
  image?: string;
  [key: string]: unknown;
}

export type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'rating';

export interface SearchState {
  query: string;
  filters: SearchFilters;
  sort: SortOption;
  results: SearchResultItem[];
  isLoading: boolean;
  error: string | null;
}

export interface SearchActions {
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;
  setSort: (sort: SortOption) => void;
  setResults: (results: SearchResultItem[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  resetSearch: () => void;
}

export type SearchStore = SearchState & SearchActions;
