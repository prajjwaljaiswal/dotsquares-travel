'use client';

import React, { useState } from 'react';
import { useBookingWizard } from '../BookingContext';
import { StepNavigation } from '../StepNavigation';

interface ReviewStepProps {
  currentStepIndex: number;
}

export function ReviewStep({ currentStepIndex }: ReviewStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { destination, package: selectedPackage, details, review } = formData;
  const [error, setError] = useState<string | null>(null);

  const handleTermsChange = (checked: boolean) => {
    updateStepData('review', { agreedToTerms: checked });
  };

  const validate = (): boolean => {
    if (!review.agreedToTerms) {
      setError('Please accept the terms and conditions to confirm your booking.');
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div data-testid="review-step">
      <h2>Review your booking</h2>
      <ul>
        <li>Destination: {destination.destinationName || 'Not selected'}</li>
        <li>Package: {selectedPackage.packageName || 'Not selected'}</li>
        <li>Price: {selectedPackage.price ? `$${selectedPackage.price}` : '-'}</li>
        <li>Traveller: {details.travellerName || 'Not provided'}</li>
        <li>Email: {details.email || 'Not provided'}</li>
        <li>Travellers: {details.travellerCount}</li>
      </ul>
      <label>
        <input
          type="checkbox"
          data-testid="terms-checkbox"
          checked={review.agreedToTerms}
          onChange={(e) => handleTermsChange(e.target.checked)}
        />
        I agree to the terms and conditions
      </label>
      {error && <p role="alert">{error}</p>}
      <StepNavigation
        currentStepIndex={currentStepIndex}
        onNext={validate}
        nextLabel="Confirm Booking"
      />
    </div>
  );
}
