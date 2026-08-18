import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider, useBooking, setSelectedPackage } from '../../state/BookingContext';
import { BookingStep1 } from './BookingStep1';

const mockPackage = {
  id: 'pkg-7',
  name: 'Safari Adventure',
  price: 2100,
  durationDays: 10,
  destination: 'Kenya',
};

function Preloader({ children }: { children: React.ReactNode }) {
  const { dispatch } = useBooking();
  React.useEffect(() => {
    dispatch(setSelectedPackage(mockPackage));
  }, [dispatch]);
  return <>{children}</>;
}

describe('BookingStep1', () => {
  it('renders the pre-filled package details when a package is selected', () => {
    render(
      <BookingProvider>
        <Preloader>
          <MemoryRouter initialEntries={['/booking/step-1']}>
            <Routes>
              <Route path="/booking/step-1" element={<BookingStep1 />} />
            </Routes>
          </MemoryRouter>
        </Preloader>
      </BookingProvider>
    );

    expect(screen.getByTestId('booking-step1')).toBeInTheDocument();
    expect(screen.getByTestId('selected-package-name')).toHaveTextContent('Safari Adventure');
  });

  it('redirects to home when no package is selected', () => {
    render(
      <BookingProvider>
        <MemoryRouter initialEntries={['/booking/step-1']}>
          <Routes>
            <Route path="/booking/step-1" element={<BookingStep1 />} />
            <Route path="/" element={<div data-testid="home-page">Home</div>} />
          </Routes>
        </MemoryRouter>
      </BookingProvider>
    );

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
