import { createBookingStore, defaultBookingState } from './booking-store';

describe('bookingStore', () => {
  it('initializes with default state', () => {
    const store = createBookingStore();
    const state = store.getState();

    expect(state.selectedPackage).toBeNull();
    expect(state.currentStep).toBe(0);
    expect(state.totalSteps).toBe(defaultBookingState.totalSteps);
    expect(state.stepData).toEqual({});
    expect(state.travelers).toEqual([]);
    expect(state.isComplete).toBe(false);
  });

  it('sets the selected package', () => {
    const store = createBookingStore();
    const pkg = { id: 'pkg-1', name: 'Bali Getaway', destination: 'Bali', price: 999 };

    store.getState().setSelectedPackage(pkg);

    expect(store.getState().selectedPackage).toEqual(pkg);
  });

  it('merges step data per step key without overwriting other steps', () => {
    const store = createBookingStore();

    store.getState().setStepData('travelers', { count: 2 });
    store.getState().setStepData('travelers', { names: ['Alice', 'Bob'] });
    store.getState().setStepData('payment', { method: 'card' });

    expect(store.getState().stepData).toEqual({
      travelers: { count: 2, names: ['Alice', 'Bob'] },
      payment: { method: 'card' },
    });
  });

  it('navigates through steps within bounds', () => {
    const store = createBookingStore();

    store.getState().nextStep();
    store.getState().nextStep();
    expect(store.getState().currentStep).toBe(2);

    store.getState().prevStep();
    expect(store.getState().currentStep).toBe(1);

    store.getState().goToStep(100);
    expect(store.getState().currentStep).toBe(store.getState().totalSteps - 1);

    store.getState().goToStep(-10);
    expect(store.getState().currentStep).toBe(0);
  });

  it('marks booking as complete', () => {
    const store = createBookingStore();
    store.getState().completeBooking();
    expect(store.getState().isComplete).toBe(true);
  });

  it('resets the entire booking state', () => {
    const store = createBookingStore();
    store.getState().setSelectedPackage({ id: 'pkg-1', name: 'Bali', destination: 'Bali', price: 500 });
    store.getState().nextStep();
    store.getState().setStepData('payment', { method: 'card' });
    store.getState().completeBooking();

    store.getState().resetBooking();

    expect(store.getState()).toEqual(
      expect.objectContaining({
        selectedPackage: null,
        currentStep: 0,
        stepData: {},
        isComplete: false,
      })
    );
  });
});
