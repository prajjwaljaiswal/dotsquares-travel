import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import DetailsStep from '../steps/DetailsStep';

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

describe('DetailsStep', () => {
  it('renders the primary traveller fields', () => {
    render(<DetailsStep travellerCount={1} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
  });

  it('shows validation errors for required fields on submit', () => {
    render(<DetailsStep travellerCount={1} />);

    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/date of birth is required/i)).toBeInTheDocument();
  });

  it('does not call onSubmit when required fields are missing', () => {
    let submitted = false;
    render(<DetailsStep travellerCount={1} onSubmit={() => (submitted = true)} />);

    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(submitted).toBe(false);
  });

  it('calls onSubmit with valid data when all required fields are filled', () => {
    let submittedValues: unknown = null;
    render(<DetailsStep travellerCount={1} onSubmit={(values) => (submittedValues = values)} />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: '1990-05-20' } });

    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(submittedValues).toEqual({
      primary: { fullName: 'Jane Doe', dob: '1990-05-20', gender: '' },
      additional: [],
    });
  });

  it('renders additional traveller name fields based on traveller count', () => {
    render(<DetailsStep travellerCount={3} />);

    expect(screen.getByLabelText(/traveller 2 full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/traveller 3 full name/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/traveller 4 full name/i)).not.toBeInTheDocument();
  });

  it('validates that additional traveller names are required', () => {
    render(<DetailsStep travellerCount={2} />);

    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    const errorMessages = screen.getAllByText(/name is required/i);
    expect(errorMessages.length).toBeGreaterThanOrEqual(2);
  });

  it('persists form state across remounts (navigating back and forth)', () => {
    const { unmount } = render(<DetailsStep travellerCount={2} storageKey="test:details" />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/traveller 2 full name/i), {
      target: { value: 'John Doe' },
    });

    unmount();

    render(<DetailsStep travellerCount={2} storageKey="test:details" />);

    expect(screen.getByLabelText(/full name/i)).toHaveValue('Jane Doe');
    expect(screen.getByLabelText(/traveller 2 full name/i)).toHaveValue('John Doe');
  });
});
