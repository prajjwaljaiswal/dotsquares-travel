'use client';

import { createContext, useContext, useRef, type ReactNode } from 'react';
import { useStore } from 'zustand';
import { createBookingStore, type BookingStoreApi } from './booking-store';
import type { BookingStore } from './types';

const BookingStoreContext = createContext<BookingStoreApi | undefined>(undefined);

export interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const storeRef = useRef<BookingStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createBookingStore();
  }

  return (
    <BookingStoreContext.Provider value={storeRef.current}>
      {children}
    </BookingStoreContext.Provider>
  );
};

export function useBookingStore<T>(selector: (store: BookingStore) => T): T {
  const bookingStoreContext = useContext(BookingStoreContext);

  if (!bookingStoreContext) {
    throw new Error('useBookingStore must be used within a BookingProvider');
  }

  return useStore(bookingStoreContext, selector);
}
