import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders a link to the Privacy Policy page', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /privacy policy/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/privacy-policy');
  });

  it('renders a link to the Terms & Conditions page', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /terms & conditions/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/terms-conditions');
  });
});
