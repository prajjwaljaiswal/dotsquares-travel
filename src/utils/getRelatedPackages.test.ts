import { getRelatedPackages } from './getRelatedPackages';
import { TravelPackage } from '../data/packages';

const basePackage = (
  overrides: Partial<TravelPackage>
): TravelPackage => ({
  id: 'id',
  title: 'title',
  destination: 'destination',
  category: 'category',
  price: 100,
  currency: 'USD',
  imageUrl: 'image.jpg',
  description: 'description',
  rating: 4,
  reviews: [],
  ...overrides
});

describe('getRelatedPackages', () => {
  it('returns packages with the same destination first', () => {
    const current = basePackage({ id: '1', destination: 'Bali', category: 'Beach' });
    const all = [
      current,
      basePackage({ id: '2', destination: 'Bali', category: 'Culture' }),
      basePackage({ id: '3', destination: 'Japan', category: 'Beach' }),
      basePackage({ id: '4', destination: 'Switzerland', category: 'Adventure' })
    ];

    const result = getRelatedPackages(current, all);

    expect(result.some((pkg) => pkg.id === '1')).toBe(false);
    expect(result[0].destination).toBe('Bali');
  });

  it('falls back to same category when destinations do not match', () => {
    const current = basePackage({ id: '1', destination: 'Bali', category: 'Beach' });
    const all = [
      current,
      basePackage({ id: '2', destination: 'Japan', category: 'Beach' }),
      basePackage({ id: '3', destination: 'Switzerland', category: 'Adventure' }),
      basePackage({ id: '4', destination: 'Peru', category: 'Adventure' })
    ];

    const result = getRelatedPackages(current, all, { minResults: 1 });

    expect(result[0].category).toBe('Beach');
  });

  it('returns at least minResults items when enough packages exist', () => {
    const current = basePackage({ id: '1', destination: 'Bali', category: 'Beach' });
    const all = [
      current,
      basePackage({ id: '2', destination: 'Peru', category: 'Adventure' }),
      basePackage({ id: '3', destination: 'Japan', category: 'Culture' }),
      basePackage({ id: '4', destination: 'Egypt', category: 'History' })
    ];

    const result = getRelatedPackages(current, all, { minResults: 3 });

    expect(result.length).toBeGreaterThanOrEqual(3);
    expect(result.some((pkg) => pkg.id === '1')).toBe(false);
  });

  it('excludes the current package from the results', () => {
    const current = basePackage({ id: '1' });
    const all = [current, basePackage({ id: '2' })];

    const result = getRelatedPackages(current, all);

    expect(result.find((pkg) => pkg.id === '1')).toBeUndefined();
  });
});
