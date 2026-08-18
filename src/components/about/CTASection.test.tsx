import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CTASection from './CTASection';

function ExploreStub(): JSX.Element {
  return <div data-testid="explore-stub">Explore Page</div>;
}

describe('CTASection', () => {
  it('renders the explore call to action button', () => {
    render(
      <MemoryRouter>
        <CTASection />
      </MemoryRouter>
    );

    expect(screen.getByTestId('cta-explore-button')).toBeInTheDocument();
  });

  it('navigates to /explore when clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<CTASection />} />
          <Route path="/explore" element={<ExploreStub />} />
        </Routes>
      </MemoryRouter>
    );

    await userEvent.click(screen.getByTestId('cta-explore-button'));

    expect(await screen.findByTestId('explore-stub')).toBeInTheDocument();
  });
});
