'use client';

import type { ReactNode } from 'react';
import { SearchProvider } from './SearchContext';
import { BookingProvider } from './BookingContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <BookingProvider>{children}</BookingProvider>
    </SearchProvider>
  );
}
