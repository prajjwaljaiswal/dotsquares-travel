export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export const itineraryData: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival & Welcome Dinner',
    description:
      'Arrive at your destination and settle into your accommodation. In the evening, join a welcome dinner with your tour group to meet fellow travellers and get an overview of the days ahead.',
  },
  {
    day: 2,
    title: 'City Highlights Tour',
    description:
      'Explore the most iconic landmarks in the city with a guided walking tour, including historic sites, local markets, and popular viewpoints. Enjoy a free afternoon to relax or explore on your own.',
  },
  {
    day: 3,
    title: 'Adventure Excursion',
    description:
      'Head out for a full day of adventure, including hiking, kayaking, or a scenic countryside drive. Lunch is included at a local eatery along the way.',
  },
  {
    day: 4,
    title: 'Cultural Immersion',
    description:
      'Visit a local village to learn about regional traditions, crafts, and cuisine. Take part in a hands-on cooking class followed by a traditional dinner.',
  },
  {
    day: 5,
    title: 'Leisure Day & Optional Activities',
    description:
      'Enjoy a free day to relax at your leisure, or choose from a range of optional activities such as spa treatments, shopping, or additional sightseeing.',
  },
  {
    day: 6,
    title: 'Departure',
    description:
      'Check out of your accommodation and transfer to the airport for your departure flight, bringing your unforgettable journey to a close.',
  },
];
