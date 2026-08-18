import { describe, it, expect } from 'vitest';
import { sortItems, SortOption } from './sorting';

interface TestDestination {
  id: string;
  name: string;
  price: number;
  rating: number;
  popularity: number;
  createdAt: string;
}

const mockDestinations: TestDestination[] = [
  { id: '1', name: 'Budget Beach', price: 100, rating: 4.2, popularity: 75, createdAt: '2024-03-15' },
  { id: '2', name: 'Luxury Resort', price: 500, rating: 4.8, popularity: 95, createdAt: '2024-02-20' },
  { id: '3', name: 'Mountain Retreat', price: 200, rating: 4.5, popularity: 60, createdAt: '2024-04-10' },
  { id: '4', name: 'City Break', price: 150, rating: 4.0, popularity: 85, createdAt: '2024-01-05' },
  { id: '5', name: 'Island Paradise', price: 300, rating: 4.9, popularity: 90, createdAt: '2024-03-01' },
];

describe('sortItems', () => {
  it('sorts by popularity descending by default', () => {
    const sorted = sortItems(mockDestinations, 'popularity');
    expect(sorted[0].id).toBe('2'); // 95 popularity
    expect(sorted[1].id).toBe('5'); // 90 popularity
    expect(sorted[2].id).toBe('4'); // 85 popularity
    expect(sorted[3].id).toBe('1'); // 75 popularity
    expect(sorted[4].id).toBe('3'); // 60 popularity
  });

  it('sorts by price ascending (low to high)', () => {
    const sorted = sortItems(mockDestinations, 'price_asc');
    expect(sorted[0].id).toBe('1'); // 100
    expect(sorted[1].id).toBe('4'); // 150
    expect(sorted[2].id).toBe('3'); // 200
    expect(sorted[3].id).toBe('5'); // 300
    expect(sorted[4].id).toBe('2'); // 500
  });

  it('sorts by price descending (high to low)', () => {
    const sorted = sortItems(mockDestinations, 'price_desc');
    expect(sorted[0].id).toBe('2'); // 500
    expect(sorted[1].id).toBe('5'); // 300
    expect(sorted[2].id).toBe('3'); // 200
    expect(sorted[3].id).toBe('4'); // 150
    expect(sorted[4].id).toBe('1'); // 100
  });

  it('sorts by rating descending (highest first)', () => {
    const sorted = sortItems(mockDestinations, 'rating');
    expect(sorted[0].id).toBe('5'); // 4.9
    expect(sorted[1].id).toBe('2'); // 4.8
    expect(sorted[2].id).toBe('3'); // 4.5
    expect(sorted[3].id).toBe('1'); // 4.2
    expect(sorted[4].id).toBe('4'); // 4.0
  });

  it('sorts by newest first (createdAt descending)', () => {
    const sorted = sortItems(mockDestinations, 'newest');
    expect(sorted[0].id).toBe('3'); // 2024-04-10
    expect(sorted[1].id).toBe('1'); // 2024-03-15
    expect(sorted[2].id).toBe('5'); // 2024-03-01
    expect(sorted[3].id).toBe('2'); // 2024-02-20
    expect(sorted[4].id).toBe('4'); // 2024-01-05
  });

  it('does not mutate the original array', () => {
    const original = [...mockDestinations];
    const sorted = sortItems(mockDestinations, 'price_asc');
    
    expect(mockDestinations).toEqual(original);
    expect(sorted).not.toBe(mockDestinations);
    expect(sorted[0]).not.toBe(mockDestinations[0]);
  });

  it('handles empty arrays', () => {
    const sorted = sortItems([], 'popularity');
    expect(sorted).toEqual([]);
  });

  it('handles single item arrays', () => {
    const single = [mockDestinations[0]];
    const sorted = sortItems(single, 'rating');
    expect(sorted).toHaveLength(1);
    expect(sorted[0].id).toBe('1');
  });

  it('maintains stable sort for equal values', () => {
    const items = [
      { id: 'a', price: 100, rating: 4, popularity: 50, createdAt: '2024-01-01' },
      { id: 'b', price: 100, rating: 4, popularity: 50, createdAt: '2024-01-01' },
    ];
    const sorted = sortItems(items, 'price_asc');
    expect(sorted[0].id).toBe('a');
    expect(sorted[1].id).toBe('b');
  });
});