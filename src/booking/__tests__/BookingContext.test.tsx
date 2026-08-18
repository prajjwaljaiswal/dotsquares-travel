import React from 'react';
import { render, screen, act, renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
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

function HookWrapper({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
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

  describe('validateDetailsStep', () => {
    it('returns valid for complete primary traveller data', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('details', {
          primaryTraveller: { name: 'John Doe', dateOfBirth: '1990-01-01', gender: 'male' },
          additionalTravellers: []
        });
      });

      const validation = result.current.validateDetailsStep();
      expect(validation.isValid).toBe(true);
      expect(Object.keys(validation.errors)).toHaveLength(0);
    });

    it('returns errors for missing primary traveller name', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('details', {
          primaryTraveller: { name: '', dateOfBirth: '1990-01-01', gender: '' },
          additionalTravellers: []
        });
      });

      const validation = result.current.validateDetailsStep();
      expect(validation.isValid).toBe(false);
      expect(validation.errors.primaryName).toBe('Primary traveller name is required');
    });

    it('returns errors for missing primary traveller DOB', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('details', {
          primaryTraveller: { name: 'John Doe', dateOfBirth: '', gender: '' },
          additionalTravellers: []
        });
      });

      const validation = result.current.validateDetailsStep();
      expect(validation.isValid).toBe(false);
      expect(validation.errors.primaryDOB).toBe('Date of birth is required');
    });

    it('returns errors for invalid date format', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('details', {
          primaryTraveller: { name: 'John Doe', dateOfBirth: '2099-12-31', gender: '' },
          additionalTravellers: []
        });
      });

      const validation = result.current.validateDetailsStep();
      expect(validation.isValid).toBe(false);
      expect(validation.errors.primaryDOB).toBe('Please enter a valid date');
    });

    it('validates additional travellers when count is greater than 1', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('destination', { travellers: 3 });
        result.current.setStepData('details', {
          primaryTraveller: { name: 'John Doe', dateOfBirth: '1990-01-01', gender: '' },
          additionalTravellers: [
            { name: 'Jane Doe', dateOfBirth: '1995-05-15', gender: 'female' },
            { name: '', dateOfBirth: '', gender: '' }
          ]
        });
      });

      const validation = result.current.validateDetailsStep();
      expect(validation.isValid).toBe(false);
      expect(validation.errors['additionalName_1']).toBe('Traveller 3 name is required');
      expect(validation.errors['additionalDOB_1']).toBe('Date of birth is required');
    });

    it('returns valid when all additional travellers are complete', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('destination', { travellers: 2 });
        result.current.setStepData('details', {
          primaryTraveller: { name: 'John Doe', dateOfBirth: '1990-01-01', gender: 'male' },
          additionalTravellers: [
            { name: 'Jane Doe', dateOfBirth: '1995-05-15', gender: 'female' }
          ]
        });
      });

      const validation = result.current.validateDetailsStep();
      expect(validation.isValid).toBe(true);
      expect(Object.keys(validation.errors)).toHaveLength(0);
    });
  });

  describe('setStepData', () => {
    it('updates details step data correctly', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      const detailsData = {
        primaryTraveller: { name: 'Alice Smith', dateOfBirth: '1985-07-20', gender: 'female' as const },
        additionalTravellers: []
      };

      act(() => {
        result.current.setStepData('details', detailsData);
      });

      expect(result.current.data.details).toEqual(detailsData);
    });

    it('maintains other step data when updating details', () => {
      const { result } = renderHook(() => useBookingWizard(), { wrapper: HookWrapper });

      act(() => {
        result.current.setStepData('destination', { destination: 'Paris', travellers: 2 });
      });

      const detailsData = {
        primaryTraveller: { name: 'Bob Wilson', dateOfBirth: '1978-03-10', gender: '' as const },
        additionalTravellers: [{ name: 'Carol Wilson', dateOfBirth: '1980-11-25', gender: '' as const }]
      };

      act(() => {
        result.current.setStepData('details', detailsData);
      });

      expect(result.current.data.destination).toEqual({ destination: 'Paris', travellers: 2 });
      expect(result.current.data.details).toEqual(detailsData);
    });
  });
});