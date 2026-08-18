import { bookingReducer, initialBookingState, setSelectedPackage, clearSelectedPackage, TravelPackage } from './BookingContext';

const mockPackage: TravelPackage = {
  id: 'pkg-1',
  name: 'Test Package',
  price: 999,
  durationDays: 5,
  destination: 'Test Destination',
};

describe('bookingReducer', () => {
  it('returns the initial state with no selected package', () => {
    expect(initialBookingState.selectedPackage).toBeNull();
  });

  it('sets the selected package on SET_SELECTED_PACKAGE', () => {
    const nextState = bookingReducer(initialBookingState, setSelectedPackage(mockPackage));
    expect(nextState.selectedPackage).toEqual(mockPackage);
  });

  it('clears the selected package on CLEAR_SELECTED_PACKAGE', () => {
    const withPackage = bookingReducer(initialBookingState, setSelectedPackage(mockPackage));
    const cleared = bookingReducer(withPackage, clearSelectedPackage());
    expect(cleared.selectedPackage).toBeNull();
  });

  it('returns the same state for unknown actions', () => {
    // @ts-expect-error testing default branch with invalid action type
    const nextState = bookingReducer(initialBookingState, { type: 'UNKNOWN' });
    expect(nextState).toBe(initialBookingState);
  });
});
