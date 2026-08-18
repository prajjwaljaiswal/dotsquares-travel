export type BookingStepId = 'destination' | 'dates' | 'travelers' | 'review';

export interface BookingStep {
  id: BookingStepId;
  label: string;
}

export interface TravelerInfo {
  fullName: string;
  email: string;
}

export interface BookingData {
  packageId?: string;
  destinationId?: string;
  destinationName?: string;
  startDate?: string;
  endDate?: string;
  travelerCount: number;
  travelers: TravelerInfo[];
  notes?: string;
}

export const initialBookingData: BookingData = {
  travelerCount: 1,
  travelers: [],
};
