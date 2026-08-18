import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DestinationStep } from '../steps/DestinationStep';
import { BookingProvider } from '../BookingContext';
import { GlobalProvider } from '../../store/GlobalContext';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

function renderStep() {
  return render(
    <GlobalProvider>
      <BookingProvider>
        <DestinationStep currentStepIndex={0} />
      </BookingProvider>
    </GlobalProvider>
  );
}

describe('DestinationStep', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('disables the next button when no destination is selected', () => {
    renderStep();
    expect(screen.getByTestId('next-button')).toBeDisabled();
  });

  it('enables the next button and shows the selection after choosing a destination', () => {
    renderStep();
    fireEvent.click(screen.getByTestId('destination-option-bali'));
    expect(screen.getByTestId('next-button')).not.toBeDisabled();
    expect(screen.getByTestId('selected-destination').textContent).toBe('Selected destination: Bali');
  });
});
