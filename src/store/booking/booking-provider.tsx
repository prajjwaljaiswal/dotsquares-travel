'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { createBookingActions, initialBookingState } from './booking-store';
import type { BookingState, BookingStore } from './types';

const BookingContext = createContext<BookingStore | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>(initialBookingState);

  const actions = useMemo(
    () =>
      createBookingActions((updater) => {
        setState((prev) => updater(prev));
      }),
    []
  );

  const store = useMemo<BookingStore>(
    () => ({
      ...state,
      ...actions,
    }),
    [state, actions]
  );

  return <BookingContext.Provider value={store}>{children}</BookingContext.Provider>;
}

export function useBookingStore<T>(selector: (store: BookingStore) => T): T {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error('useBookingStore must be used within a BookingProvider');
  }

  return selector(context);
}
