import { render, screen } from '@testing-library/react';
import StepIndicator from './StepIndicator';

describe('StepIndicator', () => {
  it('renders the current step number and total steps', () => {
    render(<StepIndicator currentStepId="dates" />);
    expect(screen.getByText('Step 2 of 4')).toBeInTheDocument();
  });

  it('renders the label for the current step', () => {
    render(<StepIndicator currentStepId="travelers" />);
    expect(screen.getByText('Step 3 of 4')).toBeInTheDocument();
    expect(screen.getAllByText('Travelers').length).toBeGreaterThan(0);
  });

  it('shows a progress bar reflecting the current step', () => {
    render(<StepIndicator currentStepId="review" />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '4');
    expect(progressBar).toHaveAttribute('aria-valuemax', '4');
  });
});
