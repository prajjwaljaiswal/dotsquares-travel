import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import ExplorePage from '../Explore/ExplorePage';

function renderAboutUsPage() {
  return render(
    <MemoryRouter initialEntries={['/about']}>
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe('AboutUsPage', () => {
  it('renders all sections in order', () => {
    renderAboutUsPage();

    const page = screen.getByTestId('about-us-page');
    const sectionTestIds = [
      'about-hero-section',
      'about-story-section',
      'about-mission-section',
      'about-values-section',
      'about-team-section',
      'about-cta-section',
    ];

    const renderedOrder = Array.from(page.children).map((child) =>
      child.getAttribute('data-testid')
    );

    expect(renderedOrder).toEqual(sectionTestIds);
  });

  it('navigates to /explore when the CTA button is clicked', async () => {
    renderAboutUsPage();

    const ctaButton = screen.getByTestId('cta-explore-button');
    await userEvent.click(ctaButton);

    expect(await screen.findByTestId('explore-page')).toBeInTheDocument();
  });
});
