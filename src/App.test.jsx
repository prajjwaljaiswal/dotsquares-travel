import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App.jsx';

describe('App routing', () => {
  it('renders the 404 page for an unmatched route', () => {
    render(
      <MemoryRouter initialEntries={['/some/unknown/route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders the Home page at the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /dotsquares travel/i })).toBeInTheDocument();
  });

  it('renders the Explore page at /explore', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /explore destinations/i })).toBeInTheDocument();
  });
});
