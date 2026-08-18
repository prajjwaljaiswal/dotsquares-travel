import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StepNavigation } from '../StepNavigation';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe('StepNavigation', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('disables the back button on the first step', () => {
    render(<StepNavigation currentStepIndex={0} />);
    expect(screen.getByTestId('back-button')).toBeDisabled();
  });

  it('navigates to the next step path when next is clicked', () => {
    render(<StepNavigation currentStepIndex={0} />);
    fireEvent.click(screen.getByTestId('next-button'));
    expect(mockPush).toHaveBeenCalledWith('/booking/package');
  });

  it('navigates to the previous step path when back is clicked', () => {
    render(<StepNavigation currentStepIndex={1} />);
    fireEvent.click(screen.getByTestId('back-button'));
    expect(mockPush).toHaveBeenCalledWith('/booking/destination');
  });

  it('does not navigate when onNext validation returns false', () => {
    const onNext = jest.fn(() => false);
    render(<StepNavigation currentStepIndex={0} onNext={onNext} />);
    fireEvent.click(screen.getByTestId('next-button'));
    expect(onNext).toHaveBeenCalled();
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('shows the Confirm Booking label on the last step', () => {
    render(<StepNavigation currentStepIndex={3} />);
    expect(screen.getByTestId('next-button').textContent).toBe('Confirm Booking');
  });
});
