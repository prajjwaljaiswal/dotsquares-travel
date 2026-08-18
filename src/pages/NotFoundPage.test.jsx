import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage.jsx';
import HomePage from './HomePage.jsx';
import ExplorePage from './ExplorePage.jsx';

describe('NotFoundPage', () => {
  it('renders for any unmatched route', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /wandered off the map/i })
    ).toBeInTheDocument();
  });

  it('renders CTA buttons linking to homepage and explore page', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /back to homepage/i });
    const exploreLink = screen.getByRole('link', {
      name: /explore destinations/i
    });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(exploreLink).toHaveAttribute('href', '/explore');
  });

  it('navigates to homepage when the primary CTA is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/missing-page']}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: /wandered off the map/i })
    ).toBeInTheDocument();
  });
});
