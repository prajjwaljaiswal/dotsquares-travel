import { createStore } from 'zustand/vanilla';
import type { BookingState, BookingStore } from './types';

export const defaultBookingState: BookingState = {
  selectedPackage: null,
  currentStep: 0,
  totalSteps: 4,
  stepData: {},
  travelers: [],
  isComplete: false,
};

export const createBookingStore = (initialState: BookingState = defaultBookingState) => {
  return createStore<BookingStore>()((set) => ({
    ...initialState,
    setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
    setStepData: (stepKey, data) =>
      set((state) => ({
        stepData: {
          ...state.stepData,
          [stepKey]: { ...state.stepData[stepKey], ...data },
        },
      })),
    setTravelers: (travelers) => set({ travelers }),
    goToStep: (step) =>
      set((state) => ({
        currentStep: Math.min(Math.max(step, 0), state.totalSteps - 1),
      })),
    nextStep: () =>
      set((state) => ({
        currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1),
      })),
    prevStep: () =>
      set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 0),
      })),
    setTotalSteps: (totalSteps) => set({ totalSteps }),
    completeBooking: () => set({ isComplete: true }),
    resetBooking: () => set({ ...defaultBookingState }),
  }));
};

export type BookingStoreApi = ReturnType<typeof createBookingStore>;
