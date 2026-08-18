import React from 'react';
import { BookingProvider } from '../../booking/BookingContext';

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
}
