'use client';

import React, { useState } from 'react';
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

function getTodayIso(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function validateDate(value: string, todayIso: string): string {
  if (!value) {
    return 'Please select a travel date.';
  }
  if (value < todayIso) {
    return 'Travel date cannot be in the past. Please choose a future date.';
  }
  return '';
}

function validateTravellers(value: number): string {
  if (!Number.isFinite(value) || value < 1) {
    return 'At least 1 traveller is required.';
  }
  if (!Number.isInteger(value)) {
    return 'Number of travellers must be a whole number.';
  }
  return '';
}

export function PackageStep({ currentStepIndex }: PackageStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { packageId, packageName, travelDate, travellers } = formData.package;

  const todayIso = getTodayIso();
  const [dateError, setDateError] = useState('');
  const [travellersError, setTravellersError] = useState('');
  const [touched, setTouched] = useState(false);

  const handleSelect = (id: string, name: string, price: number) => {
    updateStepData('package', { packageId: id, packageName: name, price });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    updateStepData('package', { travelDate: value });
    if (touched) {
      setDateError(validateDate(value, todayIso));
    }
  };

  const handleTravellersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === '' ? NaN : Number(event.target.value);
    updateStepData('package', { travellers: value });
    if (touched) {
      setTravellersError(validateTravellers(value));
    }
  };

  const handleValidateBeforeNext = () => {
    setTouched(true);
    const dateValidationError = validateDate(travelDate ?? '', todayIso);
    const travellersValidationError = validateTravellers(travellers ?? NaN);
    setDateError(dateValidationError);
    setTravellersError(travellersValidationError);
    return !dateValidationError && !travellersValidationError;
  };

  const isNextDisabled =
    !packageId ||
    Boolean(validateDate(travelDate ?? '', todayIso)) ||
    Boolean(validateTravellers(travellers ?? NaN));

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

      <div className="package-step__field">
        <label htmlFor="travel-date">Travel date</label>
        <input
          id="travel-date"
          name="travelDate"
          type="date"
          min={todayIso}
          value={travelDate ?? ''}
          onChange={handleDateChange}
          onBlur={() => {
            setTouched(true);
            setDateError(validateDate(travelDate ?? '', todayIso));
          }}
          aria-invalid={dateError ? 'true' : 'false'}
          aria-describedby={dateError ? 'travel-date-error' : undefined}
          data-testid="travel-date-input"
        />
        {dateError && (
          <p id="travel-date-error" role="alert" className="package-step__error">
            {dateError}
          </p>
        )}
      </div>

      <div className="package-step__field">
        <label htmlFor="travellers">Number of travellers</label>
        <input
          id="travellers"
          name="travellers"
          type="number"
          min={1}
          step={1}
          value={travellers === undefined || Number.isNaN(travellers) ? '' : travellers}
          onChange={handleTravellersChange}
          onBlur={() => {
            setTouched(true);
            setTravellersError(validateTravellers(travellers ?? NaN));
          }}
          aria-invalid={travellersError ? 'true' : 'false'}
          aria-describedby={travellersError ? 'travellers-error' : undefined}
          data-testid="travellers-input"
        />
        {travellersError && (
          <p id="travellers-error" role="alert" className="package-step__error">
            {travellersError}
          </p>
        )}
      </div>

      <StepNavigation
        currentStepIndex={currentStepIndex}
        isNextDisabled={isNextDisabled}
        onBeforeNext={handleValidateBeforeNext}
      />
    </div>
  );
}