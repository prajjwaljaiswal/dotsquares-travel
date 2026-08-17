export interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  price: number;
  duration?: string;
  image?: string;
  [key: string]: unknown;
}

export interface BookingStepData {
  [stepKey: string]: Record<string, unknown>;
}

export interface Traveler {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  [key: string]: unknown;
}

export interface BookingState {
  selectedPackage: TravelPackage | null;
  currentStep: number;
  totalSteps: number;
  stepData: BookingStepData;
  travelers: Traveler[];
  isComplete: boolean;
}

export interface BookingActions {
  setSelectedPackage: (pkg: TravelPackage | null) => void;
  setStepData: (stepKey: string, data: Record<string, unknown>) => void;
  setTravelers: (travelers: Traveler[]) => void;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setTotalSteps: (totalSteps: number) => void;
  completeBooking: () => void;
  resetBooking: () => void;
}

export type BookingStore = BookingState & BookingActions;
