import { Destination } from '../types';

const paris: Destination = {
  id: 'paris',
  name: 'Paris',
  slug: 'paris',
  country: 'France',
  tagline: 'The City of Light',
  description:
    'Paris captivates with its timeless romance, world-famous landmarks and rich art and culture. From the Eiffel Tower to the Louvre, every corner tells a story.',
  heroImageUrl: 'https://picsum.photos/seed/paris-hero/1600/900',
  images: [
    'https://picsum.photos/seed/paris-1/1200/800',
    'https://picsum.photos/seed/paris-2/1200/800',
    'https://picsum.photos/seed/paris-3/1200/800',
    'https://picsum.photos/seed/paris-4/1200/800'
  ],
  bestTimeToVisit: 'April to June, September to October',
  packages: [
    {
      id: 'paris-classic-tour',
      destinationId: 'paris',
      name: 'Paris Classic Tour',
      slug: 'paris-classic-tour',
      durationDays: 5,
      durationNights: 4,
      price: 99999,
      currency: 'INR',
      summary: 'A comprehensive tour covering the Eiffel Tower, the Louvre, a Seine cruise and the Palace of Versailles.',
      heroImageUrl: 'https://picsum.photos/seed/paris-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/paris-pkg1-1/1000/700',
        'https://picsum.photos/seed/paris-pkg1-2/1000/700'
      ],
      highlights: ['Eiffel Tower summit access', 'Louvre Museum guided tour', 'Seine river dinner cruise', 'Palace of Versailles day trip'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Eiffel Tower',
          description: 'Arrive in Paris, check into your hotel and visit the Eiffel Tower for panoramic city views.',
          activities: ['Airport pickup', 'Hotel check-in', 'Eiffel Tower summit visit']
        },
        {
          day: 2,
          title: 'Louvre Museum & City Walk',
          description: 'Guided tour of the Louvre Museum followed by a walking tour of Notre-Dame and the Latin Quarter.',
          activities: ['Louvre Museum guided tour', 'Notre-Dame Cathedral exterior', 'Latin Quarter walk']
        },
        {
          day: 3,
          title: 'Palace of Versailles Day Trip',
          description: 'Full day excursion to the opulent Palace of Versailles and its magnificent gardens.',
          activities: ['Palace of Versailles tour', 'Versailles Gardens walk']
        },
        {
          day: 4,
          title: 'Montmartre & Seine River Cruise',
          description: 'Explore the artistic district of Montmartre followed by an evening Seine river dinner cruise.',
          activities: ['Montmartre & Sacré-Cœur', 'Seine river dinner cruise']
        },
        {
          day: 5,
          title: 'Leisure & Departure',
          description: 'Free morning for shopping on the Champs-Élysées before transferring to the airport.',
          activities: ['Champs-Élysées shopping', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '4 nights accommodation',
        'Daily breakfast',
        'Eiffel Tower summit tickets',
        'Louvre Museum guided tour',
        'Palace of Versailles entry',
        'Seine river dinner cruise',
        'All transfers in private/shared vehicle'
      ],
      exclusions: [
        'International airfare',
        'Schengen visa fees',
        'Travel insurance',
        'Lunches unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'paris-pkg1-rev1',
          author: 'Nikhil Chatterjee',
          location: 'Kolkata',
          rating: 5,
          comment: 'The Versailles day trip was breathtaking and the Seine cruise dinner was a wonderful experience.',
          date: '2023-10-12',
          avatarUrl: 'https://i.pravatar.cc/150?img=11'
        },
        {
          id: 'paris-pkg1-rev2',
          author: 'Pooja Iyer',
          location: 'Chennai',
          rating: 5,
          comment: 'Well planned itinerary covering all the must-see landmarks. Our guide was very informative.',
          date: '2023-09-25',
          avatarUrl: 'https://i.pravatar.cc/150?img=21'
        }
      ]
    },
    {
      id: 'paris-romance-package',
      destinationId: 'paris',
      name: 'Paris Romance Package',
      slug: 'paris-romance-package',
      durationDays: 4,
      durationNights: 3,
      price: 79999,
      currency: 'INR',
      summary: 'A romantic short getaway featuring Montmartre, the Moulin Rouge and an intimate river dinner cruise.',
      heroImageUrl: 'https://picsum.photos/seed/paris-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/paris-pkg2-1/1000/700',
        'https://picsum.photos/seed/paris-pkg2-2/1000/700'
      ],
      highlights: ['Moulin Rouge cabaret show', 'Montmartre artist quarter', 'Romantic dinner cruise', 'Eiffel Tower at night'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Eiffel Tower by Night',
          description: 'Arrive in Paris and enjoy an evening viewing of the illuminated Eiffel Tower.',
          activities: ['Airport pickup', 'Hotel check-in', 'Eiffel Tower night viewing']
        },
        {
          day: 2,
          title: 'Montmartre & Sacré-Cœur',
          description: 'Explore the charming streets of Montmartre and visit portrait artists near Sacré-Cœur Basilica.',
          activities: ['Sacré-Cœur Basilica', 'Montmartre artist square', 'Café hopping']
        },
        {
          day: 3,
          title: 'Moulin Rouge & Romantic Dinner Cruise',
          description: 'Enjoy the world-famous Moulin Rouge cabaret show followed by a romantic dinner cruise on the Seine.',
          activities: ['Moulin Rouge show', 'Seine river dinner cruise']
        },
        {
          day: 4,
          title: 'Leisure & Departure',
          description: 'Morning at leisure for a final stroll before transferring to the airport.',
          activities: ['Leisure walk along the Seine', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '3 nights accommodation',
        'Daily breakfast',
        'Moulin Rouge show tickets',
        'Seine river dinner cruise',
        'All private transfers'
      ],
      exclusions: [
        'International airfare',
        'Schengen visa fees',
        'Travel insurance',
        'Lunches unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'paris-pkg2-rev1',
          author: 'Aisha & Zaid Khan',
          location: 'Hyderabad',
          rating: 5,
          comment: 'The Moulin Rouge show was spectacular and the dinner cruise made our anniversary unforgettable.',
          date: '2024-01-30',
          avatarUrl: 'https://i.pravatar.cc/150?img=33'
        },
        {
          id: 'paris-pkg2-rev2',
          author: 'Sonal Deshmukh',
          location: 'Pune',
          rating: 4,
          comment: 'Loved the Montmartre walk. A perfect short romantic getaway to Paris.',
          date: '2023-12-08',
          avatarUrl: 'https://i.pravatar.cc/150?img=44'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'paris-test-1',
      author: 'Nikhil Chatterjee',
      role: 'Traveler from Kolkata',
      quote: 'Paris felt like stepping into a postcard. The Versailles trip and Seine cruise were unforgettable.',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      rating: 5
    },
    {
      id: 'paris-test-2',
      author: 'Aisha & Zaid Khan',
      role: 'Anniversary trip',
      quote: 'We celebrated our anniversary in the most romantic city in the world, and it was perfectly planned.',
      avatarUrl: 'https://i.pravatar.cc/150?img=33',
      rating: 5
    }
  ]
};

export default paris;
