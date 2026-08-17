import { createStore } from 'zustand/vanilla';
import type { SearchFilters, SearchState, SearchStore } from './types';

export const defaultSearchFilters: SearchFilters = {
  destination: undefined,
  checkIn: undefined,
  checkOut: undefined,
  guests: undefined,
  priceMin: undefined,
  priceMax: undefined,
  categories: [],
};

export const defaultSearchState: SearchState = {
  query: '',
  filters: defaultSearchFilters,
  sort: 'relevance',
  results: [],
  isLoading: false,
  error: null,
};

export const createSearchStore = (initialState: SearchState = defaultSearchState) => {
  return createStore<SearchStore>()((set) => ({
    ...initialState,
    setQuery: (query) => set({ query }),
    setFilters: (filters) =>
      set((state) => ({ filters: { ...state.filters, ...filters } })),
    resetFilters: () => set({ filters: defaultSearchFilters }),
    setSort: (sort) => set({ sort }),
    setResults: (results) => set({ results }),
    setLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),
    resetSearch: () => set({ ...defaultSearchState }),
  }));
};

export type SearchStoreApi = ReturnType<typeof createSearchStore>;
