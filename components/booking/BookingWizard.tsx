import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import StepIndicator from './StepIndicator';
import { BOOKING_STEPS, getStepIndex } from '@/lib/bookingSteps';
import { BookingStepId } from '@/types/booking';

interface BookingWizardProps {
  currentStepId: BookingStepId;
  children: ReactNode;
  canGoNext?: boolean;
  onNext?: () => boolean | void;
  onBack?: () => void;
}

export default function BookingWizard({
  currentStepId,
  children,
  canGoNext = true,
  onNext,
  onBack,
}: BookingWizardProps) {
  const router = useRouter();
  const currentIndex = getStepIndex(currentStepId);
  const isFirstStep = currentIndex <= 0;
  const isLastStep = currentIndex >= BOOKING_STEPS.length - 1;

  const goToStep = (index: number) => {
    const step = BOOKING_STEPS[index];
    if (step) {
      router.push(`/booking/${step.id}`);
    }
  };

  const handleBack = () => {
    onBack?.();
    if (!isFirstStep) {
      goToStep(currentIndex - 1);
    }
  };

  const handleNext = () => {
    const result = onNext?.();
    if (result === false) {
      return;
    }
    if (!isLastStep) {
      goToStep(currentIndex + 1);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10" data-testid="booking-wizard">
      <StepIndicator currentStepId={currentStepId} />
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">{children}</div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          disabled={isFirstStep}
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={!canGoNext}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLastStep ? 'Confirm' : 'Next'}
        </button>
      </div>
    </div>
  );
}
