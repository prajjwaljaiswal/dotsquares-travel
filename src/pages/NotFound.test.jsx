import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import NotFound from './NotFound.jsx';

describe('NotFound page', () => {
  it('renders a friendly 404 message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /wandered off the map/i })
    ).toBeInTheDocument();
  });

  it('renders CTA buttons linking to homepage and explore page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const homeCta = screen.getByTestId('not-found-home-cta');
    const exploreCta = screen.getByTestId('not-found-explore-cta');

    expect(homeCta).toHaveAttribute('href', '/');
    expect(exploreCta).toHaveAttribute('href', '/explore');
  });
});
