import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import DestinationDetailPage from './DestinationDetailPage';

function renderWithRoute(slug) {
  return render(
    <MemoryRouter initialEntries={[`/destinations/${slug}`]}>
      <Routes>
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('DestinationDetailPage', () => {
  it('renders hero and overview content for a known destination', () => {
    renderWithRoute('santorini');

    expect(
      screen.getByRole('heading', { name: /santorini, greece/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/overview/i)).toBeInTheDocument();
    expect(
      screen.getByText(/volcanic caldera/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/sunset views over the caldera from oia village/i)
    ).toBeInTheDocument();
  });

  it('renders different data when the route param changes', () => {
    renderWithRoute('kyoto');

    expect(
      screen.getByRole('heading', { name: /kyoto, japan/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/fushimi inari shrine/i)
    ).toBeInTheDocument();
  });

  it('shows a not found message for an unknown slug', () => {
    renderWithRoute('atlantis');

    expect(
      screen.getByRole('heading', { name: /destination not found/i })
    ).toBeInTheDocument();
  });
});
