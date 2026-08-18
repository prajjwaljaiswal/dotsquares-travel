import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

export interface TravelPackage {
  id: string;
  name: string;
  price: number;
  durationDays: number;
  imageUrl?: string;
  destination?: string;
}

export interface BookingState {
  selectedPackage: TravelPackage | null;
}

export type BookingAction =
  | { type: 'SET_SELECTED_PACKAGE'; payload: TravelPackage }
  | { type: 'CLEAR_SELECTED_PACKAGE' };

export const initialBookingState: BookingState = {
  selectedPackage: null,
};

export function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_SELECTED_PACKAGE':
      return { ...state, selectedPackage: action.payload };
    case 'CLEAR_SELECTED_PACKAGE':
      return { ...state, selectedPackage: null };
    default:
      return state;
  }
}

interface BookingContextValue {
  state: BookingState;
  dispatch: Dispatch<BookingAction>;
}

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

export function setSelectedPackage(pkg: TravelPackage): BookingAction {
  return { type: 'SET_SELECTED_PACKAGE', payload: pkg };
}

export function clearSelectedPackage(): BookingAction {
  return { type: 'CLEAR_SELECTED_PACKAGE' };
}
