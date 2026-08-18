import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ExplorePage from './ExplorePage';

describe('ExplorePage search bar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders all destinations by default', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>
    );

    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(1);
  });

  it('shows matching suggestions after debounce when typing', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'Kyoto' } });
    vi.advanceTimersByTime(300);

    expect(
      screen.getByRole('option', { name: /Kyoto Cultural Experience/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('option', { name: /Kyoto Temple Tour/i })
    ).toBeInTheDocument();
  });

  it('filters results and syncs the URL when a suggestion is selected', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>
    );

    const input = screen.getByRole('searchbox');
    fireEvent.change(input, { target: { value: 'Kyoto' } });
    vi.advanceTimersByTime(300);

    const option = screen.getByRole('option', { name: /Kyoto Cultural Experience/i });
    fireEvent.mouseDown(option);

    expect(screen.getByText('Kyoto, Japan')).toBeInTheDocument();
    expect(screen.getByText('package')).toBeInTheDocument();
    expect(screen.getByText('$949')).toBeInTheDocument();
    expect(screen.queryByText('Kyoto Temple Tour')).not.toBeInTheDocument();
    expect(input.value).toBe('Kyoto Cultural Experience');
  });
});
