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
  travelDate: string | null;
  travellerCount: number;
}

export interface TravellerInfo {
  fullName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
}

export function createEmptyTraveller(): TravellerInfo {
  return {
    fullName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
  };
}

export interface DetailsStepData {
  travellerName: string;
  email: string;
  phone: string;
  travellerCount: number;
  primaryTraveller: TravellerInfo;
  additionalTravellers: TravellerInfo[];
  travellerDetailsValid: boolean;
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
  validateDetailsStep: () => { isValid: boolean; errors: Record<string, string> };
}

const defaultFormData: BookingFormData = {
  destination: { destinationId: null, destinationName: null },
  package: { packageId: null, packageName: null, price: null, travelDate: null, travellerCount: 1 },
  details: {
    travellerName: '',
    email: '',
    phone: '',
    travellerCount: 1,
    primaryTraveller: createEmptyTraveller(),
    additionalTravellers: [],
    travellerDetailsValid: false,
  },
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
        ? {
            packageId: selectedPackage.id,
            packageName: selectedPackage.name,
            price: selectedPackage.price,
            travelDate: defaultFormData.package.travelDate,
            travellerCount: defaultFormData.package.travellerCount,
          }
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

  const validateDetailsStep = useCallback(() => {
    const errors: Record<string, string> = {};
    const { details } = formData;

    if (!details.primaryTraveller.fullName.trim()) {
      errors.primaryName = 'Primary traveller name is required';
    }

    if (!details.primaryTraveller.dateOfBirth) {
      errors.primaryDOB = 'Date of birth is required';
    } else {
      const dob = new Date(details.primaryTraveller.dateOfBirth);
      if (isNaN(dob.getTime())) {
        errors.primaryDOB = 'Please enter a valid date';
      } else {
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        if (age < 0 || age > 150) {
          errors.primaryDOB = 'Please enter a valid date';
        }
      }
    }

    if (!details.primaryTraveller.gender) {
      errors.primaryGender = 'Gender is required';
    }

    const additionalCount = details.travellerCount - 1;
    if (additionalCount > 0) {
      for (let i = 0; i < additionalCount; i++) {
        const traveller = details.additionalTravellers[i];
        if (!traveller || !traveller.fullName.trim()) {
          errors[`additional_${i}_name`] = `Traveller ${i + 2} name is required`;
        }
        if (!traveller?.dateOfBirth) {
          errors[`additional_${i}_dob`] = 'Date of birth is required';
        } else {
          const dob = new Date(traveller.dateOfBirth);
          if (isNaN(dob.getTime())) {
            errors[`additional_${i}_dob`] = 'Please enter a valid date';
          } else {
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            if (age < 0 || age > 150) {
              errors[`additional_${i}_dob`] = 'Please enter a valid date';
            }
          }
        }
        if (!traveller?.gender) {
          errors[`additional_${i}_gender`] = 'Gender is required';
        }
      }
    }

    return { isValid: Object.keys(errors).length === 0, errors };
  }, [formData]);

  const value = useMemo<BookingWizardState>(
    () => ({ formData, updateStepData, resetFormData, validateDetailsStep }),
    [formData, updateStepData, resetFormData, validateDetailsStep]
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