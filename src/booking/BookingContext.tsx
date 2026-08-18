'use client';

import React, { createContext, useContext, useMemo, useState, ReactNode, useCallback } from 'react';
import { useGlobalContext } from '../store/GlobalContext';

export interface DestinationStepData {
  destinationId: string | null;
  destinationName: string | null;
}

export interface PackageStepData {
  packageId: string | null;
  packageName: string | null;
  price: number | null;
}

export interface DetailsStepData {
  travellerName: string;
  email: string;
  phone: string;
  travellerCount: number;
}

export interface ReviewStepData {
  agreedToTerms: boolean;
}

export interface BookingFormData {
  destination: DestinationStepData;
  package: PackageStepData;
  details: DetailsStepData;
  review: ReviewStepData;
}

interface BookingWizardState {
  formData: BookingFormData;
  updateStepData: <K extends keyof BookingFormData>(step: K, data: Partial<BookingFormData[K]>) => void;
  resetFormData: () => void;
}

const defaultFormData: BookingFormData = {
  destination: { destinationId: null, destinationName: null },
  package: { packageId: null, packageName: null, price: null },
  details: { travellerName: '', email: '', phone: '', travellerCount: 1 },
  review: { agreedToTerms: false },
};

const BookingContext = createContext<BookingWizardState | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const { selectedDestination, selectedPackage } = useGlobalContext();

  const buildInitialFormData = useCallback(
    (): BookingFormData => ({
      ...defaultFormData,
      destination: selectedDestination
        ? { destinationId: selectedDestination.id, destinationName: selectedDestination.name }
        : defaultFormData.destination,
      package: selectedPackage
        ? { packageId: selectedPackage.id, packageName: selectedPackage.name, price: selectedPackage.price }
        : defaultFormData.package,
    }),
    [selectedDestination, selectedPackage]
  );

  const [formData, setFormData] = useState<BookingFormData>(buildInitialFormData);

  const updateStepData = useCallback(
    <K extends keyof BookingFormData>(step: K, data: Partial<BookingFormData[K]>) => {
      setFormData((prev) => ({
        ...prev,
        [step]: { ...prev[step], ...data },
      }));
    },
    []
  );

  const resetFormData = useCallback(() => {
    setFormData(buildInitialFormData());
  }, [buildInitialFormData]);

  const value = useMemo<BookingWizardState>(
    () => ({ formData, updateStepData, resetFormData }),
    [formData, updateStepData, resetFormData]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBookingWizard(): BookingWizardState {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingWizard must be used within a BookingProvider');
  }
  return context;
}
