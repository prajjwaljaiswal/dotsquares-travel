import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PackageStep from '../steps/PackageStep';

function renderStep(props: Record<string, unknown> = {}) {
  return render(
    <MemoryRouter>
      <PackageStep
        packageName="Bali Bliss 5N/6D"
        destination="Bali, Indonesia"
        {...props}
      />
    </MemoryRouter>
  );
}

describe('PackageStep', () => {
  it('displays the selected package and destination as read-only', () => {
    renderStep();
    expect(screen.getByTestId('package-step-destination')).toHaveTextContent('Bali, Indonesia');
    expect(screen.getByTestId('package-step-package')).toHaveTextContent('Bali Bliss 5N/6D');
  });

  it('provides a link to change the selected package', () => {
    renderStep();
    const link = screen.getByRole('link', { name: /change package/i });
    expect(link).toHaveAttribute('href', '/booking/destination');
  });

  it('respects a custom change link destination', () => {
    renderStep({ changeHref: '/booking/package' });
    const link = screen.getByRole('link', { name: /change package/i });
    expect(link).toHaveAttribute('href', '/booking/package');
  });

  it('requires a travel date to be selected before continuing', () => {
    renderStep();
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));
    expect(screen.getByText(/please select a travel date/i)).toBeInTheDocument();
  });

  it('rejects past travel dates', () => {
    renderStep();
    fireEvent.change(screen.getByLabelText(/travel date/i), { target: { value: '2000-01-01' } });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));
    expect(screen.getByText(/cannot be in the past/i)).toBeInTheDocument();
  });

  it('rejects fewer than 1 traveller', () => {
    renderStep();
    fireEvent.change(screen.getByLabelText(/number of travellers/i), { target: { value: '0' } });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));
    expect(screen.getByText(/at least 1 traveller/i)).toBeInTheDocument();
  });

  it('rejects an empty travellers value', () => {
    renderStep();
    fireEvent.change(screen.getByLabelText(/number of travellers/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));
    expect(screen.getByText(/at least 1 traveller/i)).toBeInTheDocument();
  });

  it('submits valid data with a future date and valid traveller count', () => {
    const onSubmit = vi.fn();
    renderStep({ onSubmit, initialTravellers: 2 });

    const future = new Date();
    future.setDate(future.getDate() + 5);
    const iso = future.toISOString().slice(0, 10);

    fireEvent.change(screen.getByLabelText(/travel date/i), { target: { value: iso } });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(onSubmit).toHaveBeenCalledWith({ travelDate: iso, travellers: 2 });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
