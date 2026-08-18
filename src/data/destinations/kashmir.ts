import { Destination } from '../types';

const kashmir: Destination = {
  id: 'kashmir',
  name: 'Kashmir',
  slug: 'kashmir',
  country: 'India',
  tagline: 'Paradise on Earth',
  description:
    'Kashmir mesmerizes with snow-capped mountains, tranquil lakes and Mughal gardens. From Shikara rides on Dal Lake to the meadows of Gulmarg, it’s a nature lover’s dream.',
  heroImageUrl: 'https://picsum.photos/seed/kashmir-hero/1600/900',
  images: [
    'https://picsum.photos/seed/kashmir-1/1200/800',
    'https://picsum.photos/seed/kashmir-2/1200/800',
    'https://picsum.photos/seed/kashmir-3/1200/800',
    'https://picsum.photos/seed/kashmir-4/1200/800'
  ],
  bestTimeToVisit: 'March to October, December to February for snow',
  packages: [
    {
      id: 'kashmir-paradise-tour',
      destinationId: 'kashmir',
      name: 'Kashmir Paradise Tour',
      slug: 'kashmir-paradise-tour',
      durationDays: 5,
      durationNights: 4,
      price: 34999,
      currency: 'INR',
      summary: 'A scenic tour covering Srinagar’s Dal Lake, Mughal Gardens and the Gulmarg gondola ride.',
      heroImageUrl: 'https://picsum.photos/seed/kashmir-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/kashmir-pkg1-1/1000/700',
        'https://picsum.photos/seed/kashmir-pkg1-2/1000/700'
      ],
      highlights: ['Dal Lake Shikara ride', 'Houseboat stay', 'Mughal Gardens visit', 'Gulmarg gondola ride'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Srinagar',
          description: 'Arrive in Srinagar, check into a traditional houseboat on Dal Lake and enjoy an evening Shikara ride.',
          activities: ['Airport pickup', 'Houseboat check-in', 'Evening Shikara ride']
        },
        {
          day: 2,
          title: 'Mughal Gardens Tour',
          description: 'Visit the beautifully landscaped Mughal Gardens - Nishat Bagh, Shalimar Bagh and Chashme Shahi.',
          activities: ['Nishat Bagh', 'Shalimar Bagh', 'Chashme Shahi']
        },
        {
          day: 3,
          title: 'Gulmarg Excursion',
          description: 'Day trip to Gulmarg for a thrilling gondola ride offering panoramic Himalayan views.',
          activities: ['Gulmarg gondola (Phase 1)', 'Snow activities (seasonal)', 'Meadow walk']
        },
        {
          day: 4,
          title: 'Pahalgam Valley Visit',
          description: 'Explore the scenic Pahalgam valley, known as the Valley of Shepherds, with river-side walks.',
          activities: ['Betaab Valley', 'Aru Valley', 'River-side pony ride']
        },
        {
          day: 5,
          title: 'Leisure & Departure',
          description: 'Morning shopping for Kashmiri handicrafts before transferring to the airport.',
          activities: ['Local handicraft shopping', 'Houseboat check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '4 nights accommodation (houseboat & hotel)',
        'Daily breakfast',
        'Shikara ride on Dal Lake',
        'Gulmarg gondola tickets (Phase 1)',
        'All sightseeing transfers',
        'English/Hindi speaking driver-cum-guide'
      ],
      exclusions: [
        'Airfare to/from Srinagar',
        'Gondola Phase 2 tickets',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'kashmir-pkg1-rev1',
          author: 'Nitin Joshi',
          location: 'Delhi',
          rating: 5,
          comment: 'The houseboat stay was such a unique experience and the Gulmarg gondola ride offered stunning views.',
          date: '2023-05-20',
          avatarUrl: 'https://i.pravatar.cc/150?img=76'
        },
        {
          id: 'kashmir-pkg1-rev2',
          author: 'Falak Zaidi',
          location: 'Lucknow',
          rating: 5,
          comment: 'Kashmir truly is paradise on earth. The Mughal Gardens were beautifully maintained and peaceful.',
          date: '2023-04-08',
          avatarUrl: 'https://i.pravatar.cc/150?img=79'
        }
      ]
    },
    {
      id: 'kashmir-gulmarg-sonmarg-special',
      destinationId: 'kashmir',
      name: 'Kashmir Gulmarg Sonmarg Special',
      slug: 'kashmir-gulmarg-sonmarg-special',
      durationDays: 6,
      durationNights: 5,
      price: 41999,
      currency: 'INR',
      summary: 'An extended tour featuring the meadows of Sonmarg, the slopes of Gulmarg and a relaxing Dal Lake houseboat stay.',
      heroImageUrl: 'https://picsum.photos/seed/kashmir-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/kashmir-pkg2-1/1000/700',
        'https://picsum.photos/seed/kashmir-pkg2-2/1000/700'
      ],
      highlights: ['Sonmarg Thajiwas Glacier', 'Gulmarg skiing/gondola', 'Dal Lake houseboat stay', 'Srinagar local sightseeing'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Srinagar',
          description: 'Arrive in Srinagar, check into a deluxe houseboat and relax with an evening Shikara ride.',
          activities: ['Airport pickup', 'Houseboat check-in', 'Evening Shikara ride']
        },
        {
          day: 2,
          title: 'Srinagar Local Sightseeing',
          description: 'Visit the Mughal Gardens and the historic Jama Masjid and Shankaracharya Temple.',
          activities: ['Nishat Bagh & Shalimar Bagh', 'Shankaracharya Temple', 'Jama Masjid']
        },
        {
          day: 3,
          title: 'Sonmarg Excursion',
          description: 'Full day trip to Sonmarg with an optional pony ride to Thajiwas Glacier amid stunning alpine scenery.',
          activities: ['Sonmarg meadow visit', 'Thajiwas Glacier pony ride', 'Sindh river views']
        },
        {
          day: 4,
          title: 'Gulmarg Gondola & Skiing',
          description: 'Travel to Gulmarg for the gondola ride to Apharwat Peak, with optional skiing in winter season.',
          activities: ['Gulmarg gondola (Phase 1 & 2)', 'Skiing/snowboarding (seasonal)', 'Apharwat Peak views']
        },
        {
          day: 5,
          title: 'Pahalgam Valley Visit',
          description: 'Explore the picturesque Pahalgam valley including Betaab Valley and Aru Valley.',
          activities: ['Betaab Valley', 'Aru Valley', 'Lidder river walk']
        },
        {
          day: 6,
          title: 'Leisure & Departure',
          description: 'Morning at leisure for shopping before transferring to the airport for departure.',
          activities: ['Local handicraft shopping', 'Houseboat check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '5 nights accommodation (houseboat & hotel)',
        'Daily breakfast',
        'Sonmarg excursion with transfers',
        'Gulmarg gondola tickets (Phase 1 & 2)',
        'All sightseeing transfers',
        'English/Hindi speaking driver-cum-guide'
      ],
      exclusions: [
        'Airfare to/from Srinagar',
        'Pony rides and skiing equipment rental',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'kashmir-pkg2-rev1',
          author: 'Gaurav Malhotra',
          location: 'Amritsar',
          rating: 5,
          comment: 'Sonmarg was absolutely breathtaking and the Gulmarg gondola Phase 2 offered incredible glacier views.',
          date: '2023-06-15',
          avatarUrl: 'https://i.pravatar.cc/150?img=81'
        },
        {
          id: 'kashmir-pkg2-rev2',
          author: 'Zoya Ansari',
          location: 'Srinagar',
          rating: 4,
          comment: 'A wonderful extended trip covering all the top spots. The houseboat stay was very comfortable.',
          date: '2023-05-02',
          avatarUrl: 'https://i.pravatar.cc/150?img=84'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'kashmir-test-1',
      author: 'Nitin Joshi',
      role: 'Nature lover',
      quote: 'Kashmir lived up to its name as paradise on earth. The houseboat experience was unforgettable.',
      avatarUrl: 'https://i.pravatar.cc/150?img=76',
      rating: 5
    },
    {
      id: 'kashmir-test-2',
      author: 'Gaurav Malhotra',
      role: 'Adventure traveler',
      quote: 'Sonmarg and Gulmarg offered some of the most stunning mountain views I have ever seen in India.',
      avatarUrl: 'https://i.pravatar.cc/150?img=81',
      rating: 5
    }
  ]
};

export default kashmir;
