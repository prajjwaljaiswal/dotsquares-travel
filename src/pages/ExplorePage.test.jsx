import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExplorePage from './ExplorePage';

afterEach(() => {
  vi.useRealTimers();
  cleanup();
});

describe('ExplorePage', () => {
  it('renders all demo places by default', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getByText('Bali Beach Getaway')).toBeInTheDocument();
    expect(screen.getByText('Paris City Explorer')).toBeInTheDocument();
  });

  it('initializes search query from URL params', () => {
    render(
      <MemoryRouter initialEntries={['/explore?q=Bali']}>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getByRole('combobox')).toHaveValue('Bali');
    expect(screen.getByText('Bali Beach Getaway')).toBeInTheDocument();
    expect(screen.queryByText('Paris City Explorer')).not.toBeInTheDocument();
  });

  it('filters results as the debounced query changes', () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Tokyo' } });
    vi.advanceTimersByTime(300);

    expect(screen.getAllByText('Tokyo Neon Nights').length).toBeGreaterThan(0);
    expect(screen.queryByText('Bali Beach Getaway')).not.toBeInTheDocument();
  });

  it('filters results when a suggestion is selected', () => {
    vi.useFakeTimers();

    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Kyoto' } });
    vi.advanceTimersByTime(300);

    const option = screen.getByRole('option', { name: /Kyoto Cultural Tour/i });
    fireEvent.mouseDown(option);

    expect(input).toHaveValue('Kyoto Cultural Tour');
    expect(screen.queryByText('Bali Beach Getaway')).not.toBeInTheDocument();
  });
});
