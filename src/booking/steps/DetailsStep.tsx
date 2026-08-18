'use client';

import React, { useState } from 'react';
import { useBookingWizard, DetailsStepData } from '../BookingContext';
import { StepNavigation } from '../StepNavigation';

interface DetailsStepProps {
  currentStepIndex: number;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DetailsStep({ currentStepIndex }: DetailsStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { travellerName, email, phone, travellerCount } = formData.details;
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof DetailsStepData, value: string | number) => {
    updateStepData('details', { [field]: value } as Partial<DetailsStepData>);
  };

  const validate = (): boolean => {
    if (!travellerName.trim()) {
      setError('Please enter the primary traveller\u2019s full name.');
      return false;
    }
    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (!phone.trim()) {
      setError('Please enter a contact phone number.');
      return false;
    }
    if (!travellerCount || travellerCount < 1) {
      setError('Number of travellers must be at least 1.');
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div data-testid="details-step">
      <h2>Traveller details</h2>
      <p>Please provide the primary traveller&rsquo;s information to continue your booking.</p>

      <label htmlFor="travellerName">
        Full name<span aria-hidden="true"> *</span>
      </label>
      <input
        id="travellerName"
        data-testid="traveller-name-input"
        value={travellerName}
        onChange={(e) => handleChange('travellerName', e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="email">
        Email<span aria-hidden="true"> *</span>
      </label>
      <input
        id="email"
        type="email"
        data-testid="email-input"
        value={email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="phone">
        Phone<span aria-hidden="true"> *</span>
      </label>
      <input
        id="phone"
        type="tel"
        data-testid="phone-input"
        value={phone}
        onChange={(e) => handleChange('phone', e.target.value)}
        required
        aria-required="true"
      />

      <label htmlFor="travellerCount">
        Number of travellers<span aria-hidden="true"> *</span>
      </label>
      <input
        id="travellerCount"
        type="number"
        min={1}
        data-testid="traveller-count-input"
        value={travellerCount}
        onChange={(e) => handleChange('travellerCount', Number(e.target.value))}
        required
        aria-required="true"
      />

      {error && <p role="alert">{error}</p>}
      <StepNavigation currentStepIndex={currentStepIndex} onNext={validate} />
    </div>
  );
}