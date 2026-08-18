import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BookingProvider, useBookingWizard } from '../BookingContext';
import { GlobalProvider, useGlobalContext } from '../../store/GlobalContext';

function TestConsumer() {
  const { formData, updateStepData } = useBookingWizard();
  return (
    <div>
      <p data-testid="destination-name">{formData.destination.destinationName || 'none'}</p>
      <button
        type="button"
        onClick={() => updateStepData('details', { travellerName: 'Jane Doe' })}
      >
        Update
      </button>
      <p data-testid="traveller-name">{formData.details.travellerName}</p>
    </div>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <BookingProvider>{children}</BookingProvider>
    </GlobalProvider>
  );
}

function PresetGlobalAndBooking() {
  const { setSelectedDestination } = useGlobalContext();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setSelectedDestination({ id: 'bali', name: 'Bali' });
    setReady(true);
  }, [setSelectedDestination]);

  if (!ready) {
    return null;
  }

  return (
    <BookingProvider>
      <TestConsumer />
    </BookingProvider>
  );
}

describe('BookingContext', () => {
  it('initializes with default empty form data when no global selection exists', () => {
    render(<TestConsumer />, { wrapper: Wrapper });
    expect(screen.getByTestId('destination-name').textContent).toBe('none');
  });

  it('preserves entered data across updates via updateStepData', () => {
    render(<TestConsumer />, { wrapper: Wrapper });
    act(() => {
      screen.getByText('Update').click();
    });
    expect(screen.getByTestId('traveller-name').textContent).toBe('Jane Doe');
  });

  it('throws when useBookingWizard is used outside of a BookingProvider', () => {
    const renderWithoutProvider = () => render(<TestConsumer />);
    expect(renderWithoutProvider).toThrow();
  });

  it('seeds destination data from the GlobalContext selection', () => {
    render(
      <GlobalProvider>
        <PresetGlobalAndBooking />
      </GlobalProvider>
    );
    expect(screen.getByTestId('destination-name').textContent).toBe('Bali');
  });
});
