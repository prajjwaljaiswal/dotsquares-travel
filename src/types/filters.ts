export interface DurationRange {
  min: number;
  max: number;
}

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  destination: string;
  duration: DurationRange;
  priceRange: PriceRange;
  travelTypes: string[];
  minRating: number;
}

export const DURATION_LIMITS: DurationRange = { min: 1, max: 30 };

export const PRICE_LIMITS: PriceRange = { min: 0, max: 10000 };

export const TRAVEL_TYPES: string[] = [
  'Adventure',
  'Leisure',
  'Business',
  'Family',
  'Solo',
  'Luxury',
];

export const RATING_OPTIONS: number[] = [0, 1, 2, 3, 4, 5];

export const DEFAULT_FILTERS: FilterState = {
  destination: '',
  duration: { min: DURATION_LIMITS.min, max: DURATION_LIMITS.max },
  priceRange: { min: PRICE_LIMITS.min, max: PRICE_LIMITS.max },
  travelTypes: [],
  minRating: 0,
};
