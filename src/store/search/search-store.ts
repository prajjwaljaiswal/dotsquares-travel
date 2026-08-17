import type { SearchActions, SearchFilters, SearchResultItem, SearchState, SortOption } from './types';

export const initialSearchFilters: SearchFilters = {
  destination: '',
  priceRange: [0, 10000],
  duration: null,
  categories: [],
};

export const initialSearchState: SearchState = {
  query: '',
  filters: initialSearchFilters,
  sort: 'relevance',
  results: [],
  isLoading: false,
};

type StateUpdater = (updater: (state: SearchState) => SearchState) => void;

export function createSearchActions(setState: StateUpdater): SearchActions {
  return {
    setQuery: (query: string) => setState((state) => ({ ...state, query })),
    setFilters: (filters: Partial<SearchFilters>) =>
      setState((state) => ({
        ...state,
        filters: { ...state.filters, ...filters },
      })),
    resetFilters: () =>
      setState((state) => ({
        ...state,
        filters: initialSearchFilters,
      })),
    setSort: (sort: SortOption) => setState((state) => ({ ...state, sort })),
    setResults: (results: SearchResultItem[]) => setState((state) => ({ ...state, results })),
    setLoading: (isLoading: boolean) => setState((state) => ({ ...state, isLoading })),
    resetSearch: () => setState(() => initialSearchState),
  };
}
