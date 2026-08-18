import { render, screen } from '@testing-library/react';
import TermsConditionsPage from './page';

describe('TermsConditionsPage', () => {
  it('renders the page heading', () => {
    render(<TermsConditionsPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /terms & conditions/i })
    ).toBeInTheDocument();
  });

  it('renders placeholder legal text sections', () => {
    render(<TermsConditionsPage />);
    expect(screen.getByText(/acceptance of terms/i)).toBeInTheDocument();
    expect(screen.getByText(/limitation of liability/i)).toBeInTheDocument();
    expect(screen.getByText(/governing law/i)).toBeInTheDocument();
  });
});
