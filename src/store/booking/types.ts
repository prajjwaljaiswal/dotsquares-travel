export type BookingStep = 'package' | 'travelers' | 'addons' | 'payment' | 'confirmation';

export interface PackageSelection {
  packageId: string | null;
  packageName: string | null;
  price: number | null;
}

export interface TravelerDetails {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

export type PaymentStatus = 'idle' | 'pending' | 'success' | 'failed';

export interface BookingState {
  currentStep: BookingStep;
  selectedPackage: PackageSelection;
  travelers: TravelerDetails[];
  addOns: string[];
  paymentStatus: PaymentStatus;
  totalPrice: number;
}

export interface BookingActions {
  setStep: (step: BookingStep) => void;
  selectPackage: (pkg: PackageSelection) => void;
  setTravelers: (travelers: TravelerDetails[]) => void;
  toggleAddOn: (addOnId: string) => void;
  setPaymentStatus: (status: PaymentStatus) => void;
  setTotalPrice: (price: number) => void;
  resetBooking: () => void;
}

export type BookingStore = BookingState & BookingActions;
