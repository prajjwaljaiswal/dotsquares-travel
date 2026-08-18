'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { createSearchActions, initialSearchState } from './search-store';
import type { SearchState, SearchStore } from './types';

const SearchContext = createContext<SearchStore | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SearchState>(initialSearchState);

  const actions = useMemo(
    () =>
      createSearchActions((updater) => {
        setState((prev) => updater(prev));
      }),
    []
  );

  const store = useMemo<SearchStore>(
    () => ({
      ...state,
      ...actions,
    }),
    [state, actions]
  );

  return <SearchContext.Provider value={store}>{children}</SearchContext.Provider>;
}

export function useSearchStore<T>(selector: (store: SearchStore) => T): T {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchStore must be used within a SearchProvider');
  }

  return selector(context);
}
