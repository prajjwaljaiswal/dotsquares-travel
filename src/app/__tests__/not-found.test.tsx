import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '@/app/not-found';

describe('NotFound page', () => {
  it('renders a 404 message with a link back to the homepage', () => {
    render(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: /back to homepage/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
