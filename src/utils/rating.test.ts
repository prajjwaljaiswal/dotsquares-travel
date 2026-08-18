import { describe, it, expect } from 'vitest';
import { getStarRating } from './rating';

describe('getStarRating', () => {
  it('returns full stars for a whole number rating', () => {
    expect(getStarRating(4)).toEqual({ full: 4, half: false, empty: 1 });
  });

  it('returns a half star for a .5 rating', () => {
    expect(getStarRating(3.5)).toEqual({ full: 3, half: true, empty: 1 });
  });

  it('clamps ratings above 5', () => {
    expect(getStarRating(6)).toEqual({ full: 5, half: false, empty: 0 });
  });

  it('clamps ratings below 0', () => {
    expect(getStarRating(-1)).toEqual({ full: 0, half: false, empty: 5 });
  });
});
