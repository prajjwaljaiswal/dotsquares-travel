import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />);
    expect(screen.getByText('What Our Travelers Say')).toBeInTheDocument();
  });

  it('renders testimonial cards', () => {
    render(<Testimonials />);
    const cards = screen.getAllByTestId('testimonial-card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
