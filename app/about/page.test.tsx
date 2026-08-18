import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';

describe('AboutPage', () => {
  it('renders all About Us sections in order', () => {
    render(<AboutPage />);

    const level1Headings = screen.getAllByRole('heading', { level: 1 });
    const level2Headings = screen.getAllByRole('heading', { level: 2 });
    const headingTexts = [...level1Headings, ...level2Headings].map(
      (heading) => heading.textContent
    );

    expect(headingTexts).toEqual([
      'About Us',
      'Our Story',
      'Our Mission & Values',
      'Meet the Team',
      'Ready for Your Next Adventure?',
    ]);
  });

  it('renders a CTA button linking to /explore', () => {
    render(<AboutPage />);

    const link = screen.getByRole('link', { name: /explore destinations/i });
    expect(link).toHaveAttribute('href', '/explore');
  });
});