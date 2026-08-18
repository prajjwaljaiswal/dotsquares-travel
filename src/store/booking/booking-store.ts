import type { BookingActions, BookingState, PackageSelection, TravelerDetails } from './types';

export const initialBookingState: BookingState = {
  currentStep: 'package',
  selectedPackage: {
    packageId: null,
    packageName: null,
    price: null,
  },
  travelers: [],
  addOns: [],
  paymentStatus: 'idle',
  totalPrice: 0,
};

type StateUpdater = (updater: (state: BookingState) => BookingState) => void;

export function createBookingActions(setState: StateUpdater): BookingActions {
  return {
    setStep: (step) => setState((state) => ({ ...state, currentStep: step })),
    selectPackage: (pkg: PackageSelection) =>
      setState((state) => ({
        ...state,
        selectedPackage: pkg,
        totalPrice: pkg.price ?? state.totalPrice,
      })),
    setTravelers: (travelers: TravelerDetails[]) =>
      setState((state) => ({ ...state, travelers })),
    toggleAddOn: (addOnId: string) =>
      setState((state) => ({
        ...state,
        addOns: state.addOns.includes(addOnId)
          ? state.addOns.filter((id) => id !== addOnId)
          : [...state.addOns, addOnId],
      })),
    setPaymentStatus: (status) => setState((state) => ({ ...state, paymentStatus: status })),
    setTotalPrice: (price) => setState((state) => ({ ...state, totalPrice: price })),
    resetBooking: () => setState(() => initialBookingState),
  };
}
