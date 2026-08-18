'use client';

import type { ReactNode } from 'react';
import { SearchProvider } from '@/store/search/search-provider';
import { BookingProvider } from '@/store/booking/booking-provider';

export interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <SearchProvider>
      <BookingProvider>{children}</BookingProvider>
    </SearchProvider>
  );
}
