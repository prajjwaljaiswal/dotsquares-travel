export interface StepConfig {
  id: string;
  label: string;
  path: string;
}

export const BOOKING_STEPS: StepConfig[] = [
  { id: 'destination', label: 'Destination', path: 'destination' },
  { id: 'package', label: 'Package', path: 'package' },
  { id: 'details', label: 'Traveller Details', path: 'details' },
  { id: 'review', label: 'Review & Confirm', path: 'review' },
];

export const TOTAL_STEPS = BOOKING_STEPS.length;

export function getStepIndexByPath(path: string): number {
  const index = BOOKING_STEPS.findIndex((step) => step.path === path);
  return index === -1 ? 0 : index;
}

export function getStepByIndex(index: number): StepConfig {
  const safeIndex = Math.min(Math.max(index, 0), BOOKING_STEPS.length - 1);
  return BOOKING_STEPS[safeIndex];
}
