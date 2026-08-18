import { BookingStep, BookingStepId } from '@/types/booking';

export const BOOKING_STEPS: BookingStep[] = [
  { id: 'destination', label: 'Destination' },
  { id: 'dates', label: 'Dates' },
  { id: 'travelers', label: 'Travelers' },
  { id: 'review', label: 'Review & Confirm' },
];

export function getStepIndex(stepId: string): number {
  return BOOKING_STEPS.findIndex((step) => step.id === stepId);
}

export function isValidStepId(stepId: string): stepId is BookingStepId {
  return BOOKING_STEPS.some((step) => step.id === stepId);
}

export function getStepByIndex(index: number): BookingStep | undefined {
  return BOOKING_STEPS[index];
}
