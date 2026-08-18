'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { SearchFilters, SearchResultItem, SortOption } from '@/types/search';

interface SearchState {
  query: string;
  filters: SearchFilters;
  sort: SortOption;
  results: SearchResultItem[];
  isLoading: boolean;
}

interface SearchContextValue extends SearchState {
  setQuery: (query: string) => void;
  setFilters: (filters: SearchFilters) => void;
  updateFilter: (key: string, value: unknown) => void;
  setSort: (sort: SortOption) => void;
  setResults: (results: SearchResultItem[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  resetSearch: () => void;
}

const initialState: SearchState = {
  query: '',
  filters: {},
  sort: 'default',
  results: [],
  isLoading: false,
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<string>(initialState.query);
  const [filters, setFiltersState] = useState<SearchFilters>(initialState.filters);
  const [sort, setSort] = useState<SortOption>(initialState.sort);
  const [results, setResults] = useState<SearchResultItem[]>(initialState.results);
  const [isLoading, setIsLoading] = useState<boolean>(initialState.isLoading);

  const setFilters = useCallback((newFilters: SearchFilters) => {
    setFiltersState(newFilters);
  }, []);

  const updateFilter = useCallback((key: string, value: unknown) => {
    setFiltersState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetSearch = useCallback(() => {
    setQuery(initialState.query);
    setFiltersState(initialState.filters);
    setSort(initialState.sort);
    setResults(initialState.results);
    setIsLoading(initialState.isLoading);
  }, []);

  const value = useMemo<SearchContextValue>(
    () => ({
      query,
      filters,
      sort,
      results,
      isLoading,
      setQuery,
      setFilters,
      updateFilter,
      setSort,
      setResults,
      setIsLoading,
      resetSearch,
    }),
    [query, filters, sort, results, isLoading, setFilters, updateFilter, resetSearch]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearchContext(): SearchContextValue {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}
