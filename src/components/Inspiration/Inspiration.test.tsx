import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Inspiration from './Inspiration';

describe('Inspiration', () => {
  it('renders the section heading', () => {
    render(<Inspiration />);
    expect(screen.getByText('Get Inspired')).toBeInTheDocument();
  });

  it('renders inspiration cards', () => {
    render(<Inspiration />);
    const cards = screen.getAllByTestId('inspiration-card');
    expect(cards.length).toBeGreaterThan(0);
  });
});
