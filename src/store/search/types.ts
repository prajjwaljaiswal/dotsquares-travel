export interface SearchFilters {
  destination: string;
  priceRange: [number, number];
  duration: string | null;
  categories: string[];
}

export type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'rating';

export interface SearchResultItem {
  id: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  sort: SortOption;
  results: SearchResultItem[];
  isLoading: boolean;
}

export interface SearchActions {
  setQuery: (query: string) => void;
  setFilters: (filters: Partial<SearchFilters>) => void;
  resetFilters: () => void;
  setSort: (sort: SortOption) => void;
  setResults: (results: SearchResultItem[]) => void;
  setLoading: (isLoading: boolean) => void;
  resetSearch: () => void;
}

export type SearchStore = SearchState & SearchActions;
