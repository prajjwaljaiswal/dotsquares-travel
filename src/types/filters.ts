export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  destination: string;
  duration: string;
  priceRange: PriceRange;
  travelType: string[];
  rating: number;
}

export interface FilterOption {
  label: string;
  value: string;
}

export const DEFAULT_FILTER_STATE: FilterState = {
  destination: '',
  duration: '',
  priceRange: { min: 0, max: 10000 },
  travelType: [],
  rating: 0,
};

export const DURATION_OPTIONS: FilterOption[] = [
  { label: 'Any duration', value: '' },
  { label: '1-3 days', value: '1-3' },
  { label: '4-7 days', value: '4-7' },
  { label: '8-14 days', value: '8-14' },
  { label: '15+ days', value: '15+' },
];

export const TRAVEL_TYPE_OPTIONS: string[] = [
  'Adventure',
  'Beach',
  'Cultural',
  'Luxury',
  'Family',
];

export const RATING_OPTIONS: number[] = [4, 3, 2, 1];
