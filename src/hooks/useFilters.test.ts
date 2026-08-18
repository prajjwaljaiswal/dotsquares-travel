import { act, renderHook } from '@testing-library/react';
import { useFilters } from './useFilters';
import { DEFAULT_FILTERS } from '../types/filters';

describe('useFilters', () => {
  it('initializes with default filters merged with provided initial filters', () => {
    const { result } = renderHook(() => useFilters({ destination: 'Bali' }));

    expect(result.current.filters.destination).toBe('Bali');
    expect(result.current.filters.duration).toEqual(DEFAULT_FILTERS.duration);
    expect(result.current.filters.priceRange).toEqual(DEFAULT_FILTERS.priceRange);
  });

  it('updates destination', () => {
    const { result } = renderHook(() => useFilters());

    act(() => result.current.setDestination('Lisbon'));

    expect(result.current.filters.destination).toBe('Lisbon');
  });

  it('toggles travel types on and off', () => {
    const { result } = renderHook(() => useFilters());

    act(() => result.current.toggleTravelType('Adventure'));
    expect(result.current.filters.travelTypes).toContain('Adventure');

    act(() => result.current.toggleTravelType('Adventure'));
    expect(result.current.filters.travelTypes).not.toContain('Adventure');
  });

  it('updates duration and price range independently', () => {
    const { result } = renderHook(() => useFilters());

    act(() => result.current.setDuration({ min: 3, max: 10 }));
    expect(result.current.filters.duration).toEqual({ min: 3, max: 10 });

    act(() => result.current.setPriceRange({ min: 100, max: 2000 }));
    expect(result.current.filters.priceRange).toEqual({ min: 100, max: 2000 });
  });

  it('sets minimum rating', () => {
    const { result } = renderHook(() => useFilters());

    act(() => result.current.setMinRating(4));

    expect(result.current.filters.minRating).toBe(4);
  });

  it('computes active filter count from combined filters', () => {
    const { result } = renderHook(() => useFilters());

    expect(result.current.activeFilterCount).toBe(0);

    act(() => {
      result.current.setDestination('Bali');
      result.current.toggleTravelType('Adventure');
      result.current.setMinRating(3);
    });

    expect(result.current.activeFilterCount).toBe(3);
  });

  it('resets filters back to defaults (including initial overrides)', () => {
    const { result } = renderHook(() => useFilters({ destination: 'Bali' }));

    act(() => result.current.setDestination('Lisbon'));
    expect(result.current.filters.destination).toBe('Lisbon');

    act(() => result.current.resetFilters());
    expect(result.current.filters.destination).toBe('Bali');
  });

  it('allows replacing the entire filter state via setFilters', () => {
    const { result } = renderHook(() => useFilters());

    act(() =>
      result.current.setFilters({
        destination: 'Tokyo',
        duration: { min: 5, max: 12 },
        priceRange: { min: 200, max: 1500 },
        travelTypes: ['Solo'],
        minRating: 5,
      })
    );

    expect(result.current.filters).toEqual({
      destination: 'Tokyo',
      duration: { min: 5, max: 12 },
      priceRange: { min: 200, max: 1500 },
      travelTypes: ['Solo'],
      minRating: 5,
    });
  });
});
