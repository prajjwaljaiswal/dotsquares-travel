import { TravelPackageDetails } from '../types/travelPackage';

export const demoTravelPackageDetails: TravelPackageDetails = {
  inclusions: [
    { id: 'inc-1', label: '4 nights accommodation in 4-star hotels' },
    { id: 'inc-2', label: 'Daily breakfast and 2 dinners' },
    { id: 'inc-3', label: 'Airport pick-up and drop-off' },
    { id: 'inc-4', label: 'All inter-city transfers by private coach' },
    { id: 'inc-5', label: 'English-speaking tour guide' },
    { id: 'inc-6', label: 'Entry tickets to all listed attractions' },
  ],
  exclusions: [
    { id: 'exc-1', label: 'International flights' },
    { id: 'exc-2', label: 'Travel insurance' },
    { id: 'exc-3', label: 'Personal expenses and shopping' },
    { id: 'exc-4', label: 'Lunch on tour days' },
    { id: 'exc-5', label: 'Visa fees' },
    { id: 'exc-6', label: 'Tips and gratuities for guides and drivers' },
  ],
  accommodation: [
    {
      id: 'acc-1',
      name: 'The Grand Horizon Hotel',
      type: 'City Hotel · 4 Star',
      description:
        'Centrally located hotel with rooftop pool, free Wi-Fi and complimentary breakfast buffet.',
      icon: '🏨',
    },
    {
      id: 'acc-2',
      name: 'Lakeside Retreat Resort',
      type: 'Resort · 4 Star',
      description:
        'Lakefront resort with private balconies, spa access and on-site restaurant.',
      icon: '🏖️',
    },
    {
      id: 'acc-3',
      name: 'Mountain View Lodge',
      type: 'Lodge · 3 Star',
      description:
        'Cozy lodge surrounded by nature, ideal for a relaxing overnight stay before trekking.',
      icon: '🏔️',
    },
  ],
  transport: [
    {
      id: 'trn-1',
      mode: 'Private Airport Transfer',
      description:
        'Comfortable private vehicle transfer between the airport and hotel on arrival and departure days.',
      icon: '🚗',
    },
    {
      id: 'trn-2',
      mode: 'Luxury Coach',
      description:
        'Air-conditioned coach used for all inter-city travel throughout the itinerary.',
      icon: '🚌',
    },
    {
      id: 'trn-3',
      mode: 'Scenic Ferry Ride',
      description: 'Guided ferry crossing offering panoramic views of the coastline.',
      icon: '⛴️',
    },
  ],
  activities: [
    {
      id: 'act-1',
      name: 'Old Town Walking Tour',
      description:
        'Guided walking tour through historic streets, markets and landmark monuments.',
      icon: '🚶',
    },
    {
      id: 'act-2',
      name: 'Sunset Cruise',
      description: 'Evening boat cruise with light refreshments and panoramic sunset views.',
      icon: '🚤',
    },
    {
      id: 'act-3',
      name: 'Mountain Trekking',
      description:
        'Half-day guided trek through scenic mountain trails, suitable for all fitness levels.',
      icon: '🥾',
    },
    {
      id: 'act-4',
      name: 'Local Cooking Class',
      description:
        'Hands-on cooking class to learn authentic local recipes with a professional chef.',
      icon: '🍳',
    },
  ],
};
