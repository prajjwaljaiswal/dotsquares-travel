'use client';

import type { ReactNode } from 'react';
import { BookingProvider } from './booking/booking-provider';
import { SearchProvider } from './search/search-provider';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <BookingProvider>{children}</BookingProvider>
    </SearchProvider>
  );
}
