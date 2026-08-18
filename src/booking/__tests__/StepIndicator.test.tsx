import React from 'react';
import { render, screen } from '@testing-library/react';
import { StepIndicator } from '../StepIndicator';
import { BOOKING_STEPS } from '../steps.config';

describe('StepIndicator', () => {
  it('renders the current step progress label', () => {
    render(<StepIndicator currentStepIndex={1} />);
    expect(screen.getByText(`Step 2 of ${BOOKING_STEPS.length}`)).toBeInTheDocument();
  });

  it('renders all step labels', () => {
    render(<StepIndicator currentStepIndex={0} />);
    BOOKING_STEPS.forEach((step) => {
      expect(screen.getByText(step.label)).toBeInTheDocument();
    });
  });

  it('marks steps before the current index as completed and the current one as active', () => {
    render(<StepIndicator currentStepIndex={2} />);
    const items = screen.getAllByRole('listitem');
    expect(items[0].className).toContain('completed');
    expect(items[1].className).toContain('completed');
    expect(items[2].className).toContain('active');
    expect(items[3].className).not.toContain('completed');
    expect(items[3].className).not.toContain('active');
  });
});
