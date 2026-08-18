import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExplorePage from './ExplorePage';

describe('ExplorePage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders all demo places by default', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/results/i)).toBeInTheDocument();
    expect(screen.getByText('Rome, Italy')).toBeInTheDocument();
  });

  it('shows matching suggestions when typing and filters results on selection', () => {
    render(
      <MemoryRouter>
        <ExplorePage />
      </MemoryRouter>
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Kyoto' } });

    vi.advanceTimersByTime(300);

    const option = screen.getByRole('option', {
      name: /Kyoto Cultural Experience/i,
    });
    fireEvent.mouseDown(option);

    expect(screen.getByDisplayValue('Kyoto Cultural Experience')).toBeInTheDocument();
    expect(screen.getByText('Kyoto, Japan')).toBeInTheDocument();
    expect(screen.queryByText('Rome, Italy')).not.toBeInTheDocument();
  });

  it('syncs search query with URL params', () => {
    render(
      <MemoryRouter initialEntries={['/?q=Rome']}>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue('Rome')).toBeInTheDocument();
    expect(screen.getByText('Rome, Italy')).toBeInTheDocument();
  });
});
