export interface ChecklistItem {
  id: string;
  label: string;
}

export interface InfoItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const inclusions: ChecklistItem[] = [
  { id: 'inc-1', label: 'Return flights from home city' },
  { id: 'inc-2', label: 'Airport transfers' },
  { id: 'inc-3', label: 'Daily breakfast' },
  { id: 'inc-4', label: 'English-speaking tour guide' },
  { id: 'inc-5', label: 'All entrance fees for scheduled sightseeing' },
];

export const exclusions: ChecklistItem[] = [
  { id: 'exc-1', label: 'Travel insurance' },
  { id: 'exc-2', label: 'Visa fees' },
  { id: 'exc-3', label: 'Lunch and dinner unless specified' },
  { id: 'exc-4', label: 'Personal expenses and tips' },
  { id: 'exc-5', label: 'Optional activities not listed in the itinerary' },
];

export const accommodations: InfoItem[] = [
  {
    id: 'acc-1',
    icon: '🏨',
    title: '4-Star City Hotel',
    description: '3 nights in a centrally located 4-star hotel with breakfast included.',
  },
  {
    id: 'acc-2',
    icon: '🏖️',
    title: 'Beachfront Resort',
    description: '2 nights at a beachfront resort with sea-view rooms.',
  },
  {
    id: 'acc-3',
    icon: '⛰️',
    title: 'Mountain Lodge',
    description: '1 night at a cozy mountain lodge with a bonfire evening.',
  },
];

export const transportOptions: InfoItem[] = [
  {
    id: 'trn-1',
    icon: '✈️',
    title: 'Return Flights',
    description: 'Economy class return flights between home city and destination.',
  },
  {
    id: 'trn-2',
    icon: '🚌',
    title: 'Private Coach',
    description: 'Air-conditioned private coach for all sightseeing transfers.',
  },
  {
    id: 'trn-3',
    icon: '🚗',
    title: 'Airport Transfers',
    description: 'Private car transfers to and from the airport.',
  },
];

export const activities: InfoItem[] = [
  {
    id: 'act-1',
    icon: '🎯',
    title: 'City Walking Tour',
    description: 'Guided walking tour through the historic city center.',
  },
  {
    id: 'act-2',
    icon: '🚤',
    title: 'Sunset Boat Cruise',
    description: 'Evening cruise with dinner and live music.',
  },
  {
    id: 'act-3',
    icon: '🥾',
    title: 'Guided Hike',
    description: 'Half-day guided hike with scenic viewpoints.',
  },
];
