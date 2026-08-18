import React, { useEffect } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PackageStep from '../steps/PackageStep';
import { BookingProvider, useBooking } from '../BookingContext';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
}

function SeedPackage() {
  const { setSelectedPackage } = useBooking();
  useEffect(() => {
    setSelectedPackage({
      id: 'pkg-1',
      name: 'Bali Explorer',
      destination: 'Bali, Indonesia',
      price: 1200,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

describe('PackageStep', () => {
  it('renders the selected package summary as read-only with a change option', () => {
    render(
      <Wrapper>
        <SeedPackage />
        <PackageStep />
      </Wrapper>
    );

    expect(screen.getByText('Bali Explorer')).toBeInTheDocument();
    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument();
    expect(screen.getByTestId('change-package-button')).toBeInTheDocument();
  });

  it('calls onChangePackage when the change button is clicked', () => {
    const onChangePackage = jest.fn();

    render(
      <Wrapper>
        <SeedPackage />
        <PackageStep onChangePackage={onChangePackage} />
      </Wrapper>
    );

    fireEvent.click(screen.getByTestId('change-package-button'));
    expect(onChangePackage).toHaveBeenCalledTimes(1);
  });

  it('shows a message when no package has been selected', () => {
    render(
      <Wrapper>
        <PackageStep />
      </Wrapper>
    );

    expect(screen.getByText('No package selected.')).toBeInTheDocument();
    expect(screen.queryByTestId('change-package-button')).not.toBeInTheDocument();
  });

  it('rejects a past travel date', () => {
    render(
      <Wrapper>
        <PackageStep />
      </Wrapper>
    );

    const dateInput = screen.getByTestId('travel-date-input');
    fireEvent.change(dateInput, { target: { value: '2000-01-01' } });

    expect(screen.getByTestId('date-error')).toHaveTextContent(
      'Travel date cannot be in the past.'
    );
  });

  it('accepts a valid future travel date without showing an error', () => {
    render(
      <Wrapper>
        <PackageStep />
      </Wrapper>
    );

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    const futureDateString = futureDate.toISOString().split('T')[0];

    const dateInput = screen.getByTestId('travel-date-input');
    fireEvent.change(dateInput, { target: { value: futureDateString } });

    expect(screen.queryByTestId('date-error')).not.toBeInTheDocument();
  });

  it('requires at least 1 traveller', () => {
    render(
      <Wrapper>
        <PackageStep />
      </Wrapper>
    );

    const travellersInput = screen.getByTestId('travellers-input');
    fireEvent.change(travellersInput, { target: { value: '0' } });

    expect(screen.getByTestId('travellers-error')).toHaveTextContent(
      'At least 1 traveller is required.'
    );
  });

  it('accepts a valid traveller count without showing an error', () => {
    render(
      <Wrapper>
        <PackageStep />
      </Wrapper>
    );

    const travellersInput = screen.getByTestId('travellers-input');
    fireEvent.change(travellersInput, { target: { value: '3' } });

    expect(screen.queryByTestId('travellers-error')).not.toBeInTheDocument();
  });
});
