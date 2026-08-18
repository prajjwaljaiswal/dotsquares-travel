import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const places = [
  {
    id: 1,
    name: 'Kyoto Cultural Experience',
    location: 'Kyoto, Japan',
    type: 'package',
    price: 899,
  },
  {
    id: 2,
    name: 'Roman Holiday Package',
    location: 'Rome, Italy',
    type: 'package',
    price: 699,
  },
];

describe('SearchBar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders a text input', () => {
    render(<SearchBar places={places} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('shows matching suggestions only after the debounce delay', () => {
    render(<SearchBar places={places} />);
    const input = screen.getByRole('combobox');

    fireEvent.change(input, { target: { value: 'Rome' } });
    expect(screen.queryByRole('option')).not.toBeInTheDocument();

    vi.advanceTimersByTime(300);

    expect(
      screen.getByRole('option', { name: /Roman Holiday Package/i })
    ).toBeInTheDocument();
  });

  it('calls onSelect and onQueryChange when a suggestion is chosen', () => {
    const onSelect = vi.fn();
    const onQueryChange = vi.fn();

    render(
      <SearchBar
        places={places}
        onSelect={onSelect}
        onQueryChange={onQueryChange}
      />
    );

    const input = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'Kyoto' } });
    vi.advanceTimersByTime(300);

    const option = screen.getByRole('option', {
      name: /Kyoto Cultural Experience/i,
    });
    fireEvent.mouseDown(option);

    expect(onSelect).toHaveBeenCalledWith(places[0]);
    expect(onQueryChange).toHaveBeenCalledWith('Kyoto Cultural Experience');
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
});
