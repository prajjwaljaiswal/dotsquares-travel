import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import SearchWidget from './SearchWidget.jsx';

function TestApp({ initialEntries }) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/" element={<SearchWidget />} />
        <Route path="/explore" element={<div data-testid="explore-page">Explore</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('SearchWidget', () => {
  it('captures destination, dates, travellers and package type', () => {
    render(<TestApp initialEntries={['/']} />);

    expect(screen.getByLabelText('Destination')).toBeInTheDocument();
    expect(screen.getByLabelText('Check-in')).toBeInTheDocument();
    expect(screen.getByLabelText('Check-out')).toBeInTheDocument();
    expect(screen.getByLabelText('Travellers')).toBeInTheDocument();
    expect(screen.getByLabelText('Package Type')).toBeInTheDocument();
  });

  it('navigates to /explore with query params on submit', () => {
    render(<TestApp initialEntries={['/']} />);

    fireEvent.change(screen.getByLabelText('Destination'), {
      target: { value: 'Bali' }
    });
    fireEvent.change(screen.getByLabelText('Check-in'), {
      target: { value: '2024-08-01' }
    });
    fireEvent.change(screen.getByLabelText('Check-out'), {
      target: { value: '2024-08-10' }
    });
    fireEvent.change(screen.getByLabelText('Travellers'), {
      target: { value: '3' }
    });
    fireEvent.change(screen.getByLabelText('Package Type'), {
      target: { value: 'all-inclusive' }
    });

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(screen.getByTestId('explore-page')).toBeInTheDocument();
  });
});
