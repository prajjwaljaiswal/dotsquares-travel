import type { ItineraryDay } from '../components/Itinerary/Itinerary.types';

export const demoItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival & Welcome',
    description: 'Arrive at your destination and settle into your accommodation. Take some time to explore the local area and get acquainted with your surroundings.',
    activities: [
      'Airport pickup and transfer to hotel',
      'Hotel check-in and orientation',
      'Welcome dinner with local cuisine',
      'Evening walk through the nearby district'
    ],
    accommodation: 'Grand Paradise Resort',
    meals: ['Dinner']
  },
  {
    day: 2,
    title: 'Cultural Immersion',
    description: 'Dive deep into the local culture with guided tours of historical sites and museums. Learn about the rich heritage and traditions of the region.',
    activities: [
      'Guided walking tour of Old Town',
      'Visit to the National Museum',
      'Traditional craft workshop experience',
      'Local market exploration'
    ],
    accommodation: 'Grand Paradise Resort',
    meals: ['Breakfast', 'Lunch']
  },
  {
    day: 3,
    title: 'Adventure & Nature',
    description: 'Experience the natural beauty of the region with outdoor activities and scenic excursions. Perfect for adventure seekers and nature lovers.',
    activities: [
      'Morning hiking tour to scenic viewpoint',
      'Kayaking or boat excursion',
      'Wildlife spotting session',
      'Sunset photography workshop'
    ],
    accommodation: 'Mountain Lodge Retreat',
    meals: ['Breakfast', 'Packed Lunch', 'Dinner']
  },
  {
    day: 4,
    title: 'Relaxation & Wellness',
    description: 'A day dedicated to rest and rejuvenation. Enjoy spa treatments, beach time, or simply relax by the pool with a good book.',
    activities: [
      'Morning yoga session',
      'Spa treatment (massage or facial)',
      'Free time at the private beach',
      'Sunset meditation session'
    ],
    accommodation: 'Mountain Lodge Retreat',
    meals: ['Breakfast', 'Lunch', 'Dinner']
  },
  {
    day: 5,
    title: 'Departure',
    description: 'Say goodbye to your unforgettable journey. Transfer to the airport for your departure flight, taking memories to last a lifetime.',
    activities: [
      'Morning check-out',
      'Last-minute souvenir shopping',
      'Airport transfer',
      'Departure formalities'
    ],
    meals: ['Breakfast']
  }
];

export const shortDemoItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: 'City Tour',
    description: 'Explore the highlights of the city with a knowledgeable guide.',
    activities: ['Historic district walking tour', 'Lunch at a famous local restaurant', 'Museum visit']
  },
  {
    day: 2,
    title: 'Nature Excursion',
    description: 'A day of outdoor adventure and natural beauty.',
    activities: ['Scenic drive through the countryside', 'Guided nature hike', 'Picnic lunch by the lake']
  }
];