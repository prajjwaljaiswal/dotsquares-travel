import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './not-found';

describe('NotFound page', () => {
  it('renders a 404 message', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', { name: /page not found/i })
    ).toBeInTheDocument();
  });

  it('renders a link back to the homepage', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /back to homepage/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
