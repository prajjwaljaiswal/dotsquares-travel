'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { BookingStepData, TravelPackage } from '@/types/booking';

interface BookingState {
  selectedPackage: TravelPackage | null;
  currentStep: number;
  stepData: BookingStepData;
}

interface BookingContextValue extends BookingState {
  setSelectedPackage: (pkg: TravelPackage | null) => void;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  updateStepData: (step: string, data: Record<string, unknown>) => void;
  resetBooking: () => void;
}

const initialState: BookingState = {
  selectedPackage: null,
  currentStep: 0,
  stepData: {},
};

const BookingContext = createContext<BookingContextValue | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(
    initialState.selectedPackage
  );
  const [currentStep, setCurrentStep] = useState<number>(initialState.currentStep);
  const [stepData, setStepData] = useState<BookingStepData>(initialState.stepData);

  const updateStepData = useCallback((step: string, data: Record<string, unknown>) => {
    setStepData((prev) => ({
      ...prev,
      [step]: { ...prev[step], ...data },
    }));
  }, []);

  const goToNextStep = useCallback(() => {
    setCurrentStep((prev) => prev + 1);
  }, []);

  const goToPreviousStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  }, []);

  const resetBooking = useCallback(() => {
    setSelectedPackage(initialState.selectedPackage);
    setCurrentStep(initialState.currentStep);
    setStepData(initialState.stepData);
  }, []);

  const value = useMemo<BookingContextValue>(
    () => ({
      selectedPackage,
      currentStep,
      stepData,
      setSelectedPackage,
      setCurrentStep,
      goToNextStep,
      goToPreviousStep,
      updateStepData,
      resetBooking,
    }),
    [
      selectedPackage,
      currentStep,
      stepData,
      goToNextStep,
      goToPreviousStep,
      updateStepData,
      resetBooking,
    ]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBookingContext(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
}
