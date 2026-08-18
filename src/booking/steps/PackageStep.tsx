'use client';

import React, { useMemo, useState, ChangeEvent } from 'react';
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

function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

function validateDate(value: string): string {
  if (!value) {
    return 'Please select a travel date.';
  }

  const selected = new Date(value);
  if (Number.isNaN(selected.getTime())) {
    return 'Please enter a valid travel date.';
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  selected.setHours(0, 0, 0, 0);

  if (selected < today) {
    return 'Travel date cannot be in the past.';
  }

  return '';
}

function validateTravellers(value: number): string {
  if (Number.isNaN(value) || value < 1) {
    return 'At least 1 traveller is required.';
  }

  if (!Number.isInteger(value)) {
    return 'Traveller count must be a whole number.';
  }

  return '';
}

export function PackageStep({ currentStepIndex }: PackageStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { packageId, packageName, travelDate, travellers } = formData.package;

  const [dateError, setDateError] = useState<string>(
    travelDate ? validateDate(travelDate) : ''
  );
  const [travellersError, setTravellersError] = useState<string>(
    typeof travellers === 'number' ? validateTravellers(travellers) : ''
  );

  const minDate = useMemo(() => getTodayDateString(), []);

  const handleSelect = (id: string, name: string, price: number) => {
    updateStepData('package', { packageId: id, packageName: name, price });
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    updateStepData('package', { travelDate: value });
    setDateError(validateDate(value));
  };

  const handleTravellersChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    updateStepData('package', { travellers: value });
    setTravellersError(validateTravellers(value));
  };

  const isNextDisabled =
    !packageId ||
    !travelDate ||
    !!dateError ||
    typeof travellers !== 'number' ||
    !!travellersError;

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

      <div className="field">
        <label htmlFor="travel-date">Travel Date</label>
        <input
          id="travel-date"
          type="date"
          value={travelDate ?? ''}
          min={minDate}
          onChange={handleDateChange}
          data-testid="travel-date-input"
        />
        {dateError && (
          <p className="error" data-testid="date-error">
            {dateError}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="travellers">Number of Travellers</label>
        <input
          id="travellers"
          type="number"
          min={1}
          step={1}
          value={travellers ?? ''}
          onChange={handleTravellersChange}
          data-testid="travellers-input"
        />
        {travellersError && (
          <p className="error" data-testid="travellers-error">
            {travellersError}
          </p>
        )}
      </div>

      <StepNavigation currentStepIndex={currentStepIndex} isNextDisabled={isNextDisabled} />
    </div>
  );
}