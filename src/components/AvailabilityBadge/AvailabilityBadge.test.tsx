import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvailabilityBadge } from './AvailabilityBadge';

describe('AvailabilityBadge', () => {
  it('renders available label', () => {
    render(<AvailabilityBadge status="available" />);
    expect(screen.getByTestId('availability-badge')).toHaveTextContent('Available');
  });

  it('renders limited label with spot count', () => {
    render(<AvailabilityBadge status="limited" availableSpots={3} />);
    expect(screen.getByTestId('availability-badge')).toHaveTextContent('Limited Spots (3 left)');
  });

  it('renders sold out label', () => {
    render(<AvailabilityBadge status="soldout" />);
    expect(screen.getByTestId('availability-badge')).toHaveTextContent('Sold Out');
  });
});
