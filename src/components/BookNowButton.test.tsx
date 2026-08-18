import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BookNowButton } from './BookNowButton';
import { BookingProvider, useBooking } from '../state/BookingContext';

const mockPackage = {
  id: 'pkg-42',
  name: 'Mountain Trek',
  price: 799,
  durationDays: 4,
  destination: 'Nepal',
};

function SelectedPackageDisplay() {
  const { state } = useBooking();
  return <div data-testid="selected-package">{state.selectedPackage?.name ?? 'none'}</div>;
}

describe('BookNowButton', () => {
  it('renders with the Book Now label', () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookNowButton travelPackage={mockPackage} />
        </MemoryRouter>
      </BookingProvider>
    );

    expect(screen.getByTestId('book-now-button')).toHaveTextContent('Book Now');
  });

  it('applies the sticky class by default', () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookNowButton travelPackage={mockPackage} />
        </MemoryRouter>
      </BookingProvider>
    );

    expect(screen.getByTestId('book-now-button').className).toContain('book-now-button--sticky');
  });

  it('does not apply the sticky class when sticky is false', () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookNowButton travelPackage={mockPackage} sticky={false} />
        </MemoryRouter>
      </BookingProvider>
    );

    expect(screen.getByTestId('book-now-button').className).not.toContain('book-now-button--sticky');
  });

  it('sets the selected package in booking state on click', () => {
    render(
      <BookingProvider>
        <MemoryRouter>
          <BookNowButton travelPackage={mockPackage} />
          <SelectedPackageDisplay />
        </MemoryRouter>
      </BookingProvider>
    );

    expect(screen.getByTestId('selected-package')).toHaveTextContent('none');
    fireEvent.click(screen.getByTestId('book-now-button'));
    expect(screen.getByTestId('selected-package')).toHaveTextContent('Mountain Trek');
  });
});
