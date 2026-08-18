import { BOOKING_STEPS } from '@/lib/bookingSteps';
import { BookingStepId } from '@/types/booking';

interface StepIndicatorProps {
  currentStepId: BookingStepId;
}

export default function StepIndicator({ currentStepId }: StepIndicatorProps) {
  const currentIndex = BOOKING_STEPS.findIndex((step) => step.id === currentStepId);
  const totalSteps = BOOKING_STEPS.length;
  const currentStepNumber = currentIndex + 1;
  const progressPercent = totalSteps > 0 ? (currentStepNumber / totalSteps) * 100 : 0;
  const currentLabel = BOOKING_STEPS[currentIndex]?.label ?? '';

  return (
    <div className="mb-8" data-testid="step-indicator">
      <div className="mb-2 flex items-center justify-between text-sm font-medium text-gray-600">
        <span>
          Step {currentStepNumber} of {totalSteps}
        </span>
        <span>{currentLabel}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={currentStepNumber}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
        />
      </div>
      <ol className="mt-4 flex flex-wrap gap-4">
        {BOOKING_STEPS.map((step, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = index === currentIndex;
          return (
            <li
              key={step.id}
              className={`flex items-center gap-2 text-sm ${
                isCurrent ? 'font-semibold text-blue-600' : isComplete ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                  isCurrent
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : isComplete
                      ? 'border-green-600 bg-green-600 text-white'
                      : 'border-gray-300 bg-white'
                }`}
              >
                {index + 1}
              </span>
              {step.label}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
