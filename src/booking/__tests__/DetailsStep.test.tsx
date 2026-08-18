import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DetailsStep } from '../steps/DetailsStep';
import { BookingProvider, useBooking } from '../BookingContext';
import React from 'react';

const mockNavigate = vi.fn();
const mockOnNext = vi.fn();
const mockOnBack = vi.fn();

function renderWithProvider(component: React.ReactElement, initialData?: any) {
  return render(
    <BookingProvider>
      {component}
    </BookingProvider>
  );
}

describe('DetailsStep', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders primary traveller form fields', () => {
    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />);

    expect(screen.getByTestId('primary-name')).toBeInTheDocument();
    expect(screen.getByTestId('primary-dob')).toBeInTheDocument();
    expect(screen.getByTestId('primary-gender')).toBeInTheDocument();
  });

  it('shows validation errors when required fields are empty', async () => {
    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />);

    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Primary traveller name is required')).toBeInTheDocument();
      expect(screen.getByText('Date of birth is required')).toBeInTheDocument();
    });

    expect(mockOnNext).not.toHaveBeenCalled();
  });

  it('navigates to next step when all required fields are valid', async () => {
    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />);

    const nameInput = screen.getByTestId('primary-name') as HTMLInputElement;
    const dobInput = screen.getByTestId('primary-dob') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });

    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });
  });

  it('renders correct number of additional traveller fields based on count', () => {
    const customInitialData = {
      destination: { travellers: 3 },
      details: null
    };

    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />, customInitialData);

    expect(screen.getByTestId('additional-traveller-0')).toBeInTheDocument();
    expect(screen.getByTestId('additional-traveller-1')).toBeInTheDocument();
    expect(screen.queryByTestId('additional-traveller-2')).not.toBeInTheDocument();
  });

  it('validates additional travellers when count > 1', async () => {
    const customInitialData = {
      destination: { travellers: 2 },
      details: {
        primaryTraveller: { name: 'John', dateOfBirth: '1990-01-01', gender: '' },
        additionalTravellers: [{ name: '', dateOfBirth: '', gender: '' }]
      }
    };

    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />, customInitialData);

    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Traveller 2 name is required')).toBeInTheDocument();
    });

    expect(mockOnNext).not.toHaveBeenCalled();
  });

  it('calls onBack when back button is clicked', () => {
    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />);

    const backButton = screen.getByTestId('back-button');
    fireEvent.click(backButton);

    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it('persists form data when navigating between steps', async () => {
    let capturedData: any;

    function TestComponent() {
      const { data, setStepData } = useBooking();
      capturedData = data;
      return <DetailsStep onNext={mockOnNext} onBack={mockOnBack} />;
    }

    renderWithProvider(<TestComponent />);

    const nameInput = screen.getByTestId('primary-name') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } });

    await waitFor(() => {
      expect(capturedData.details?.primaryTraveller.name).toBe('Jane Smith');
    });
  });

  it('validates date of birth format and shows error for invalid dates', async () => {
    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />);

    const nameInput = screen.getByTestId('primary-name') as HTMLInputElement;
    const dobInput = screen.getByTestId('primary-dob') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dobInput, { target: { value: '2099-12-31' } });

    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid date')).toBeInTheDocument();
    });
  });

  it('allows optional gender field to remain empty', async () => {
    renderWithProvider(<DetailsStep onNext={mockOnNext} onBack={mockOnBack} />);

    const nameInput = screen.getByTestId('primary-name') as HTMLInputElement;
    const dobInput = screen.getByTestId('primary-dob') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } });

    const nextButton = screen.getByTestId('next-button');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(mockOnNext).toHaveBeenCalled();
    });

    expect(screen.queryByText('Gender is required')).not.toBeInTheDocument();
  });
});
