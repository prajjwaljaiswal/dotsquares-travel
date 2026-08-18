import { DestinationStep } from './steps/DestinationStep';
import { DetailsStep } from './steps/DetailsStep';
import { PackageStep } from './steps/PackageStep';
import { ReviewStep } from './steps/ReviewStep';

export interface StepConfig {
  id: string;
  label: string;
  path: string;
}

export const BOOKING_STEPS: StepConfig[] = [
  { id: 'destination', label: 'Destination', path: 'destination' },
  { id: 'details', label: 'Traveller Details', path: 'details' },
  { id: 'package', label: 'Package', path: 'package' },
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

export const bookingSteps = [
  {
    id: 'destination',
    title: 'Destination',
    component: DestinationStep,
    path: '/booking/destination'
  },
  {
    id: 'details',
    title: 'Traveller Details',
    component: DetailsStep,
    path: '/booking/details',
    validate: (context: any) => context.validateDetailsStep().isValid
  },
  {
    id: 'package',
    title: 'Package',
    component: PackageStep,
    path: '/booking/package'
  },
  {
    id: 'review',
    title: 'Review',
    component: ReviewStep,
    path: '/booking/review'
  }
];

export const initialBookingData = {
  destination: {},
  details: {
    primaryTraveller: { name: '', dateOfBirth: '', gender: '' },
    additionalTravellers: []
  },
  package: {}
};