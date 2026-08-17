import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';

const allItems = [
  { id: '1', name: 'Bali Beach Getaway', location: 'Bali, Indonesia' },
  { id: '2', name: 'Paris City Explorer', location: 'Paris, France' },
  { id: '3', name: 'Balinese Cultural Tour', location: 'Ubud, Bali' },
];

describe('SearchBar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    cleanup();
  });

  it('shows matching suggestions after debounce when typing', () => {
    const onDebouncedChange = vi.fn();
    const onSelect = vi.fn();

    render(
      <SearchBar
        value=""
        allItems={allItems}
        onDebouncedChange={onDebouncedChange}
        onSelect={onSelect}
      />
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'bali' } });

    vi.advanceTimersByTime(300);

    expect(screen.getByText('Bali Beach Getaway')).toBeInTheDocument();
    expect(screen.getByText('Balinese Cultural Tour')).toBeInTheDocument();
    expect(screen.queryByText('Paris City Explorer')).not.toBeInTheDocument();
    expect(onDebouncedChange).toHaveBeenCalledWith('bali');
  });

  it('calls onSelect and closes dropdown when a suggestion is chosen', () => {
    const onDebouncedChange = vi.fn();
    const onSelect = vi.fn();

    render(
      <SearchBar
        value=""
        allItems={allItems}
        onDebouncedChange={onDebouncedChange}
        onSelect={onSelect}
      />
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'paris' } });
    vi.advanceTimersByTime(300);

    const option = screen.getByText('Paris City Explorer');
    fireEvent.mouseDown(option);

    expect(onSelect).toHaveBeenCalledWith(allItems[1]);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('clears suggestions when input is emptied', () => {
    const onDebouncedChange = vi.fn();
    const onSelect = vi.fn();

    render(
      <SearchBar
        value=""
        allItems={allItems}
        onDebouncedChange={onDebouncedChange}
        onSelect={onSelect}
      />
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'bali' } });
    vi.advanceTimersByTime(300);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '' } });
    vi.advanceTimersByTime(300);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(onDebouncedChange).toHaveBeenCalledWith('');
  });
});
