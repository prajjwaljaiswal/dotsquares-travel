import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { DetailsStep } from '../steps/DetailsStep';

describe('DetailsStep', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  afterEach(() => {
    cleanup();
    window.sessionStorage.clear();
  });

  it('renders the primary traveller fields', () => {
    render(<DetailsStep />);

    expect(screen.getByLabelText(/Full Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gender \(optional\)/i)).toBeInTheDocument();
  });

  it('shows a validation error when the required full name is left empty', () => {
    render(<DetailsStep />);

    const nameInput = screen.getByLabelText(/Full Name \*/i);
    fireEvent.blur(nameInput);

    expect(screen.getByText(/Full name is required\./i)).toBeInTheDocument();
  });

  it('shows a validation error for an invalid date of birth', () => {
    render(<DetailsStep />);

    const dobInput = screen.getByLabelText(/Date of Birth \*/i);
    fireEvent.change(dobInput, { target: { value: '2999-01-01' } });
    fireEvent.blur(dobInput);

    expect(screen.getByText(/Enter a valid date of birth/i)).toBeInTheDocument();
  });

  it('accepts a valid date of birth without showing an error', () => {
    render(<DetailsStep />);

    const dobInput = screen.getByLabelText(/Date of Birth \*/i);
    fireEvent.change(dobInput, { target: { value: '1990-05-15' } });
    fireEvent.blur(dobInput);

    expect(screen.queryByText(/Enter a valid date of birth/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Date of birth is required\./i)).not.toBeInTheDocument();
  });

  it('renders additional traveller fields based on the traveller count from Step 1', () => {
    window.sessionStorage.setItem('booking:travellerCount', '3');

    render(<DetailsStep />);

    expect(screen.getByText(/Additional Traveller 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Additional Traveller 2/i)).toBeInTheDocument();
    expect(screen.queryByText(/Additional Traveller 3/i)).not.toBeInTheDocument();
  });

  it('does not render additional traveller fields for a single traveller', () => {
    window.sessionStorage.setItem('booking:travellerCount', '1');

    render(<DetailsStep />);

    expect(screen.queryByText(/Additional Traveller/i)).not.toBeInTheDocument();
  });

  it('persists form state when navigating back and forth between steps', () => {
    const { unmount } = render(<DetailsStep />);

    const nameInput = screen.getByLabelText(/Full Name \*/i);
    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

    const dobInput = screen.getByLabelText(/Date of Birth \*/i);
    fireEvent.change(dobInput, { target: { value: '1990-05-15' } });

    unmount();

    render(<DetailsStep />);

    const restoredName = screen.getByLabelText(/Full Name \*/i) as HTMLInputElement;
    const restoredDob = screen.getByLabelText(/Date of Birth \*/i) as HTMLInputElement;

    expect(restoredName.value).toBe('Jane Doe');
    expect(restoredDob.value).toBe('1990-05-15');
  });

  it('persists additional traveller data across remounts', () => {
    window.sessionStorage.setItem('booking:travellerCount', '2');

    const { unmount } = render(<DetailsStep />);

    const additionalNameInput = screen.getByLabelText(
      /Full Name \*/i,
      { selector: '#additional-0-full-name' }
    ) as HTMLInputElement;

    fireEvent.change(additionalNameInput, { target: { value: 'John Smith' } });
    unmount();

    render(<DetailsStep />);

    const restored = screen.getByLabelText(/Full Name \*/i, {
      selector: '#additional-0-full-name',
    }) as HTMLInputElement;

    expect(restored.value).toBe('John Smith');
  });
});
