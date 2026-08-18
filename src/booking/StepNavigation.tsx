'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BOOKING_STEPS, TOTAL_STEPS } from './steps.config';

interface StepNavigationProps {
  currentStepIndex: number;
  onNext?: () => boolean | void;
  onBack?: () => void;
  nextLabel?: string;
  isNextDisabled?: boolean;
}

export function StepNavigation({
  currentStepIndex,
  onNext,
  onBack,
  nextLabel,
  isNextDisabled = false,
}: StepNavigationProps) {
  const router = useRouter();
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === TOTAL_STEPS - 1;

  const handleNext = () => {
    const canProceed = onNext ? onNext() : true;
    if (canProceed === false) {
      return;
    }
    if (!isLastStep) {
      const nextStep = BOOKING_STEPS[currentStepIndex + 1];
      router.push(`/booking/${nextStep.path}`);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
    if (!isFirstStep) {
      const previousStep = BOOKING_STEPS[currentStepIndex - 1];
      router.push(`/booking/${previousStep.path}`);
    }
  };

  return (
    <div className="step-navigation" data-testid="step-navigation">
      <button type="button" onClick={handleBack} disabled={isFirstStep} data-testid="back-button">
        Back
      </button>
      <button type="button" onClick={handleNext} disabled={isNextDisabled} data-testid="next-button">
        {nextLabel || (isLastStep ? 'Confirm Booking' : 'Next')}
      </button>
    </div>
  );
}
