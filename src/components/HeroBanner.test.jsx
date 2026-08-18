import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroBanner from './HeroBanner.jsx';

function renderWithRouter(children) {
  return render(<BrowserRouter>{children}</BrowserRouter>);
}

describe('HeroBanner', () => {
  it('renders DotSquares Travel branding and messaging', () => {
    renderWithRouter(<HeroBanner />);

    expect(screen.getByTestId('hero-banner')).toBeInTheDocument();
    expect(screen.getByText('DotSquares Travel')).toBeInTheDocument();
    expect(
      screen.getByText('Discover Your Next Great Escape')
    ).toBeInTheDocument();
  });

  it('renders the embedded search widget', () => {
    renderWithRouter(<HeroBanner />);

    expect(screen.getByTestId('search-widget')).toBeInTheDocument();
  });
});
