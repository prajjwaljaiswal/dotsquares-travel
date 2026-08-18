import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Explore from './Explore.jsx';

describe('Explore page', () => {
  it('displays applied query parameters', () => {
    render(
      <MemoryRouter
        initialEntries={[
          '/explore?destination=Bali&startDate=2024-08-01&endDate=2024-08-10&travellers=3&packageType=all-inclusive'
        ]}
      >
        <Routes>
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </MemoryRouter>
    );

    const summary = screen.getByTestId('explore-summary');
    expect(summary).toHaveTextContent('Bali');
    expect(summary).toHaveTextContent('2024-08-01 - 2024-08-10');
    expect(summary).toHaveTextContent('3');
    expect(summary).toHaveTextContent('all-inclusive');
  });
});
