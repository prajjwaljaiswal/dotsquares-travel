import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookingWizard } from '../BookingWizard';
import { BookingProvider } from '../BookingContext';
import { GlobalProvider } from '../../store/GlobalContext';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

function renderWizard(stepPath: string) {
  return render(
    <GlobalProvider>
      <BookingProvider>
        <BookingWizard currentStepPath={stepPath} />
      </BookingProvider>
    </GlobalProvider>
  );
}

describe('BookingWizard', () => {
  it('renders the destination step and matching progress label for the first step', () => {
    renderWizard('destination');
    expect(screen.getByTestId('destination-step')).toBeInTheDocument();
    expect(screen.getByText('Step 1 of 4')).toBeInTheDocument();
  });

  it('renders the review step and correct progress label for the last step', () => {
    renderWizard('review');
    expect(screen.getByTestId('review-step')).toBeInTheDocument();
    expect(screen.getByText('Step 4 of 4')).toBeInTheDocument();
  });

  it('falls back to the first step for an unknown step path', () => {
    renderWizard('unknown-step');
    expect(screen.getByTestId('destination-step')).toBeInTheDocument();
  });
});
