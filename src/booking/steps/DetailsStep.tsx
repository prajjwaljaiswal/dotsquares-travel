'use client';

import React, { useState } from 'react';
import { useBookingWizard, DetailsStepData } from '../BookingContext';
import { StepNavigation } from '../StepNavigation';

interface DetailsStepProps {
  currentStepIndex: number;
}

export function DetailsStep({ currentStepIndex }: DetailsStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { travellerName, email, phone, travellerCount } = formData.details;
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof DetailsStepData, value: string | number) => {
    updateStepData('details', { [field]: value } as Partial<DetailsStepData>);
  };

  const validate = (): boolean => {
    if (!travellerName.trim() || !email.trim()) {
      setError('Please fill in traveller name and email before continuing.');
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div data-testid="details-step">
      <h2>Traveller details</h2>
      <label htmlFor="travellerName">Full name</label>
      <input
        id="travellerName"
        data-testid="traveller-name-input"
        value={travellerName}
        onChange={(e) => handleChange('travellerName', e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        data-testid="email-input"
        value={email}
        onChange={(e) => handleChange('email', e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        data-testid="phone-input"
        value={phone}
        onChange={(e) => handleChange('phone', e.target.value)}
      />
      <label htmlFor="travellerCount">Number of travellers</label>
      <input
        id="travellerCount"
        type="number"
        min={1}
        data-testid="traveller-count-input"
        value={travellerCount}
        onChange={(e) => handleChange('travellerCount', Number(e.target.value))}
      />
      {error && <p role="alert">{error}</p>}
      <StepNavigation currentStepIndex={currentStepIndex} onNext={validate} />
    </div>
  );
}
