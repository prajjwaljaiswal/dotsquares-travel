import { render, screen } from '@testing-library/react';
import TermsPage from './page';

describe('TermsPage', () => {
  it('renders the terms and conditions heading', () => {
    render(<TermsPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /terms & conditions/i }),
    ).toBeInTheDocument();
  });

  it('renders placeholder legal content sections', () => {
    render(<TermsPage />);
    expect(screen.getByText(/bookings and payments/i)).toBeInTheDocument();
    expect(screen.getByText(/limitation of liability/i)).toBeInTheDocument();
  });
});
