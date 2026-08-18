'use client';

import React, { useState } from 'react';
import { useBookingWizard, DetailsStepData } from '../BookingContext';
import { StepNavigation } from '../StepNavigation';

interface DetailsStepProps {
  currentStepIndex: number;
}

interface FieldErrors {
  travellerName?: string;
  email?: string;
  phone?: string;
  travellerCount?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields(data: DetailsStepData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.travellerName.trim()) {
    errors.travellerName = 'Full name is required.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!data.travellerCount || data.travellerCount < 1) {
    errors.travellerCount = 'At least one traveller is required.';
  }

  return errors;
}

export function DetailsStep({ currentStepIndex }: DetailsStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { travellerName, email, phone, travellerCount } = formData.details;
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof DetailsStepData, value: string | number) => {
    updateStepData('details', { [field]: value } as Partial<DetailsStepData>);
  };

  const markTouched = (field: keyof DetailsStepData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const fieldErrors = validateFields(formData.details);

  const validate = (): boolean => {
    const errors = validateFields(formData.details);
    setTouched({
      travellerName: true,
      email: true,
      phone: true,
      travellerCount: true,
    });

    if (errors.travellerName || errors.email || errors.travellerCount) {
      setError('Please fill in traveller name and email before continuing.');
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div data-testid="details-step">
      <h2>Traveller details</h2>
      <div>
        <label htmlFor="travellerName">Full name *</label>
        <input
          id="travellerName"
          data-testid="traveller-name-input"
          value={travellerName}
          onChange={(e) => handleChange('travellerName', e.target.value)}
          onBlur={() => markTouched('travellerName')}
          aria-required="true"
          aria-invalid={Boolean(touched.travellerName && fieldErrors.travellerName)}
        />
        {touched.travellerName && fieldErrors.travellerName && (
          <p role="alert" data-testid="traveller-name-error">
            {fieldErrors.travellerName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          data-testid="email-input"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => markTouched('email')}
          aria-required="true"
          aria-invalid={Boolean(touched.email && fieldErrors.email)}
        />
        {touched.email && fieldErrors.email && (
          <p role="alert" data-testid="email-error">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          data-testid="phone-input"
          value={phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => markTouched('phone')}
        />
      </div>

      <div>
        <label htmlFor="travellerCount">Number of travellers *</label>
        <input
          id="travellerCount"
          type="number"
          min={1}
          data-testid="traveller-count-input"
          value={travellerCount}
          onChange={(e) => handleChange('travellerCount', Number(e.target.value))}
          onBlur={() => markTouched('travellerCount')}
          aria-required="true"
          aria-invalid={Boolean(touched.travellerCount && fieldErrors.travellerCount)}
        />
        {touched.travellerCount && fieldErrors.travellerCount && (
          <p role="alert" data-testid="traveller-count-error">
            {fieldErrors.travellerCount}
          </p>
        )}
      </div>

      {error && <p role="alert">{error}</p>}
      <StepNavigation currentStepIndex={currentStepIndex} onNext={validate} />
    </div>
  );
}