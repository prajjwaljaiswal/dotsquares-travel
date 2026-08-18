'use client';

import React from 'react';
import { useBookingWizard } from '../BookingContext';
import { StepNavigation } from '../StepNavigation';

interface PackageStepProps {
  currentStepIndex: number;
}

const AVAILABLE_PACKAGES = [
  { id: 'standard', name: 'Standard Package', price: 499 },
  { id: 'deluxe', name: 'Deluxe Package', price: 899 },
  { id: 'premium', name: 'Premium Package', price: 1499 },
];

export function PackageStep({ currentStepIndex }: PackageStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { packageId, packageName } = formData.package;

  const handleSelect = (id: string, name: string, price: number) => {
    updateStepData('package', { packageId: id, packageName: name, price });
  };

  return (
    <div data-testid="package-step">
      <h2>Select a package</h2>
      <div className="package-options">
        {AVAILABLE_PACKAGES.map(({ id, name, price }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSelect(id, name, price)}
            aria-pressed={packageId === id}
            data-testid={`package-option-${id}`}
          >
            {name} - ${price}
          </button>
        ))}
      </div>
      {packageName && <p data-testid="selected-package">Selected package: {packageName}</p>}
      <StepNavigation currentStepIndex={currentStepIndex} isNextDisabled={!packageId} />
    </div>
  );
}
