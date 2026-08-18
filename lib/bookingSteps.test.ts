import { BOOKING_STEPS, getStepIndex, isValidStepId, getStepByIndex } from './bookingSteps';

describe('bookingSteps', () => {
  it('contains four steps in the expected order', () => {
    expect(BOOKING_STEPS).toHaveLength(4);
    expect(BOOKING_STEPS.map((step) => step.id)).toEqual(['destination', 'dates', 'travelers', 'review']);
  });

  it('returns the correct index for a valid step', () => {
    expect(getStepIndex('dates')).toBe(1);
    expect(getStepIndex('review')).toBe(3);
  });

  it('returns -1 for an unknown step', () => {
    expect(getStepIndex('unknown')).toBe(-1);
  });

  it('validates step ids correctly', () => {
    expect(isValidStepId('destination')).toBe(true);
    expect(isValidStepId('invalid-step')).toBe(false);
  });

  it('returns the step at a given index', () => {
    expect(getStepByIndex(0)?.id).toBe('destination');
    expect(getStepByIndex(10)).toBeUndefined();
  });
});
