'use client';

import React from 'react';
import { StepIndicator } from './StepIndicator';
import { BOOKING_STEPS, getStepIndexByPath } from './steps.config';
import { DestinationStep } from './steps/DestinationStep';
import { PackageStep } from './steps/PackageStep';
import { DetailsStep } from './steps/DetailsStep';
import { ReviewStep } from './steps/ReviewStep';

interface StepComponentProps {
  currentStepIndex: number;
}

const STEP_COMPONENTS: Record<string, React.ComponentType<StepComponentProps>> = {
  destination: DestinationStep,
  package: PackageStep,
  details: DetailsStep,
  review: ReviewStep,
};

interface BookingWizardProps {
  currentStepPath: string;
}

export function BookingWizard({ currentStepPath }: BookingWizardProps) {
  const currentStepIndex = getStepIndexByPath(currentStepPath);
  const activeStep = BOOKING_STEPS[currentStepIndex];
  const ActiveStepComponent = STEP_COMPONENTS[activeStep.id];

  return (
    <section className="booking-wizard" data-testid="booking-wizard">
      <StepIndicator currentStepIndex={currentStepIndex} />
      <div className="booking-wizard__content">
        <ActiveStepComponent currentStepIndex={currentStepIndex} />
      </div>
    </section>
  );
}
