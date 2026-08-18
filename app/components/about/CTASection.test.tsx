import React from 'react';
import { render, screen } from '@testing-library/react';
import CTASection from './CTASection';

describe('CTASection', () => {
  it('renders the CTA heading and description', () => {
    render(<CTASection />);

    expect(
      screen.getByRole('heading', { name: /ready for your next adventure\?/i })
    ).toBeInTheDocument();
  });

  it('renders a link to /explore', () => {
    render(<CTASection />);

    const link = screen.getByRole('link', { name: /explore destinations/i });
    expect(link).toHaveAttribute('href', '/explore');
  });
});
