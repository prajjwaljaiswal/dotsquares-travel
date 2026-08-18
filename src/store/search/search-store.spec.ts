import { createSearchStore, defaultSearchFilters } from './search-store';

describe('searchStore', () => {
  it('initializes with default state', () => {
    const store = createSearchStore();
    const state = store.getState();

    expect(state.query).toBe('');
    expect(state.filters).toEqual(defaultSearchFilters);
    expect(state.sort).toBe('relevance');
    expect(state.results).toEqual([]);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('updates the query', () => {
    const store = createSearchStore();
    store.getState().setQuery('paris');
    expect(store.getState().query).toBe('paris');
  });

  it('merges filters instead of replacing them', () => {
    const store = createSearchStore();
    store.getState().setFilters({ destination: 'Paris' });
    store.getState().setFilters({ guests: 2 });

    expect(store.getState().filters).toEqual(
      expect.objectContaining({ destination: 'Paris', guests: 2 })
    );
  });

  it('resets filters to defaults', () => {
    const store = createSearchStore();
    store.getState().setFilters({ destination: 'Paris', guests: 4 });
    store.getState().resetFilters();

    expect(store.getState().filters).toEqual(defaultSearchFilters);
  });

  it('updates sort and results', () => {
    const store = createSearchStore();
    store.getState().setSort('price-asc');
    store.getState().setResults([{ id: '1', name: 'Hotel A', price: 120 }]);

    expect(store.getState().sort).toBe('price-asc');
    expect(store.getState().results).toHaveLength(1);
  });

  it('tracks loading and error state', () => {
    const store = createSearchStore();
    store.getState().setLoading(true);
    store.getState().setError('Something went wrong');

    expect(store.getState().isLoading).toBe(true);
    expect(store.getState().error).toBe('Something went wrong');
  });

  it('resets the entire search state', () => {
    const store = createSearchStore();
    store.getState().setQuery('paris');
    store.getState().setResults([{ id: '1', name: 'Hotel A', price: 120 }]);
    store.getState().setLoading(true);

    store.getState().resetSearch();

    expect(store.getState().query).toBe('');
    expect(store.getState().results).toEqual([]);
    expect(store.getState().isLoading).toBe(false);
  });
});
