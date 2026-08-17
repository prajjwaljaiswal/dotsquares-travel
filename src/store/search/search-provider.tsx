'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore } from 'zustand';
import { createSearchStore, type SearchStoreApi } from './search-store';
import type { SearchStore } from './types';

const SearchStoreContext = createContext<SearchStoreApi | undefined>(undefined);

export interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const storeRef = useRef<SearchStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createSearchStore();
  }

  return (
    <SearchStoreContext.Provider value={storeRef.current}>
      {children}
    </SearchStoreContext.Provider>
  );
};

export function useSearchStore<T>(selector: (store: SearchStore) => T): T {
  const searchStoreContext = useContext(SearchStoreContext);

  if (!searchStoreContext) {
    throw new Error('useSearchStore must be used within a SearchProvider');
  }

  return useStore(searchStoreContext, selector);
}
