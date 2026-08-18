import { useEffect, useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BookingProvider, useBooking } from '../BookingContext';
import DetailsStep from '../steps/DetailsStep';

function TravellerCountSetter({ count }: { count: number }) {
  const { updateBookingData } = useBooking();
  useEffect(() => {
    updateBookingData({ travellerCount: count });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  return null;
}

function renderWithTravellerCount(count: number) {
  return render(
    <BookingProvider>
      <TravellerCountSetter count={count} />
      <DetailsStep />
    </BookingProvider>
  );
}

describe('DetailsStep', () => {
  it('renders the primary traveller fields', () => {
    renderWithTravellerCount(1);

    expect(screen.getAllByLabelText(/full name/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/date of birth/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/gender/i)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(/age/i)[0]).toBeInTheDocument();
  });

  it('does not render additional traveller fields when traveller count is 1', () => {
    renderWithTravellerCount(1);

    expect(screen.queryByText(/traveller 2/i)).not.toBeInTheDocument();
  });

  it('renders additional traveller fields dynamically based on traveller count', () => {
    renderWithTravellerCount(3);

    expect(screen.getByText(/traveller 2/i)).toBeInTheDocument();
    expect(screen.getByText(/traveller 3/i)).toBeInTheDocument();
    expect(screen.queryByText(/traveller 4/i)).not.toBeInTheDocument();
  });

  it('shows a required error when the primary full name is left empty', () => {
    renderWithTravellerCount(1);

    const nameInput = screen.getAllByLabelText(/full name/i)[0];
    fireEvent.focus(nameInput);
    fireEvent.blur(nameInput);

    expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
  });

  it('shows a required error when date of birth is left empty', () => {
    renderWithTravellerCount(1);

    const dobInput = screen.getAllByLabelText(/date of birth/i)[0];
    fireEvent.focus(dobInput);
    fireEvent.blur(dobInput);

    expect(screen.getByText(/date of birth is required/i)).toBeInTheDocument();
  });

  it('rejects a future date of birth', () => {
    renderWithTravellerCount(1);

    const dobInput = screen.getAllByLabelText(/date of birth/i)[0];
    const futureYear = new Date().getFullYear() + 5;
    fireEvent.change(dobInput, { target: { value: `${futureYear}-01-01` } });
    fireEvent.blur(dobInput);

    expect(screen.getByText(/cannot be in the future/i)).toBeInTheDocument();
  });

  it('derives the age field from a valid date of birth', () => {
    renderWithTravellerCount(1);

    const dobInput = screen.getAllByLabelText(/date of birth/i)[0];
    fireEvent.change(dobInput, { target: { value: '2000-01-01' } });

    const ageInput = screen.getAllByLabelText(/age/i)[0] as HTMLInputElement;
    expect(Number(ageInput.value)).toBeGreaterThan(0);
  });

  it('persists form state when navigating away and back to the step', () => {
    function Harness() {
      const [showDetails, setShowDetails] = useState(true);
      return (
        <>
          <button type="button" onClick={() => setShowDetails(false)}>
            Go to another step
          </button>
          <button type="button" onClick={() => setShowDetails(true)}>
            Go back to details
          </button>
          {showDetails ? <DetailsStep /> : <div>Some other step</div>}
        </>
      );
    }

    render(
      <BookingProvider>
        <Harness />
      </BookingProvider>
    );

    const nameInput = screen.getAllByLabelText(/full name/i)[0];
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    fireEvent.click(screen.getByText('Go to another step'));
    expect(screen.getByText('Some other step')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Go back to details'));

    const nameInputAgain = screen.getAllByLabelText(/full name/i)[0] as HTMLInputElement;
    expect(nameInputAgain.value).toBe('Jane Doe');
  });
});
