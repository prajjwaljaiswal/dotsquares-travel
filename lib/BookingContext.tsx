import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { BookingData, initialBookingData } from '@/types/booking';

interface InitializeBookingContext {
  packageId?: string;
  destinationId?: string;
  destinationName?: string;
}

interface BookingContextValue {
  bookingData: BookingData;
  updateBookingData: (updates: Partial<BookingData>) => void;
  initializeBooking: (context: InitializeBookingContext) => void;
  resetBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingData, setBookingData] = useState<BookingData>(initialBookingData);

  const updateBookingData = (updates: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...updates }));
  };

  const initializeBooking = (context: InitializeBookingContext) => {
    setBookingData((prev) => ({
      ...prev,
      packageId: context.packageId ?? prev.packageId,
      destinationId: context.destinationId ?? prev.destinationId,
      destinationName: context.destinationName ?? prev.destinationName,
    }));
  };

  const resetBooking = () => {
    setBookingData(initialBookingData);
  };

  const value = useMemo<BookingContextValue>(
    () => ({ bookingData, updateBookingData, initializeBooking, resetBooking }),
    [bookingData]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return ctx;
}
