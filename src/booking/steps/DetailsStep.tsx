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
    errors.travellerName = 'Traveller name is required.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (data.phone && data.phone.trim() && !/^[0-9+\-() \s]{6,}$/.test(data.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.travellerCount || data.travellerCount < 1) {
    errors.travellerCount = 'There must be at least 1 traveller.';
  }

  return errors;
}

export function DetailsStep({ currentStepIndex }: DetailsStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { travellerName, email, phone, travellerCount } = formData.details;
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = (field: keyof DetailsStepData, value: string | number) => {
    updateStepData('details', { [field]: value } as Partial<DetailsStepData>);
  };

  const handleBlur = (field: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      const errors = validateFields(formData.details);
      return { ...prev, [field]: errors[field] };
    });
  };

  const validate = (): boolean => {
    const errors = validateFields(formData.details);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setError('Please correct the highlighted fields before continuing.');
      return false;
    }

    setError(null);
    return true;
  };

  return (
    <div data-testid="details-step">
      <h2>Primary traveller information</h2>
      <p>Please provide the details of the primary traveller for this booking.</p>

      <div>
        <label htmlFor="travellerName">Full name</label>
        <input
          id="travellerName"
          data-testid="traveller-name-input"
          value={travellerName}
          onChange={(e) => handleChange('travellerName', e.target.value)}
          onBlur={() => handleBlur('travellerName')}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.travellerName)}
          aria-describedby={fieldErrors.travellerName ? 'travellerName-error' : undefined}
        />
        {fieldErrors.travellerName && (
          <p id="travellerName-error" role="alert" data-testid="traveller-name-error">
            {fieldErrors.travellerName}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          data-testid="email-input"
          value={email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
        />
        {fieldErrors.email && (
          <p id="email-error" role="alert" data-testid="email-error">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          data-testid="phone-input"
          value={phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
        />
        {fieldErrors.phone && (
          <p id="phone-error" role="alert" data-testid="phone-error">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="travellerCount">Number of travellers</label>
        <input
          id="travellerCount"
          type="number"
          min={1}
          data-testid="traveller-count-input"
          value={travellerCount}
          onChange={(e) => handleChange('travellerCount', Number(e.target.value))}
          onBlur={() => handleBlur('travellerCount')}
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.travellerCount)}
          aria-describedby={fieldErrors.travellerCount ? 'travellerCount-error' : undefined}
        />
        {fieldErrors.travellerCount && (
          <p id="travellerCount-error" role="alert" data-testid="traveller-count-error">
            {fieldErrors.travellerCount}
          </p>
        )}
      </div>

      {error && <p role="alert">{error}</p>}
      <StepNavigation currentStepIndex={currentStepIndex} onNext={validate} />
    </div>
  );
}