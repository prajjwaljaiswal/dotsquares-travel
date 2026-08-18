import { Destination } from '../types';

const maldives: Destination = {
  id: 'maldives',
  name: 'Maldives',
  slug: 'maldives',
  country: 'Maldives',
  tagline: 'A Paradise of Turquoise Waters',
  description:
    'The Maldives is a tropical paradise of overwater villas, coral reefs and crystal-clear lagoons. Perfect for honeymooners, families and anyone seeking pure relaxation.',
  heroImageUrl: 'https://picsum.photos/seed/maldives-hero/1600/900',
  images: [
    'https://picsum.photos/seed/maldives-1/1200/800',
    'https://picsum.photos/seed/maldives-2/1200/800',
    'https://picsum.photos/seed/maldives-3/1200/800',
    'https://picsum.photos/seed/maldives-4/1200/800'
  ],
  bestTimeToVisit: 'November to April',
  packages: [
    {
      id: 'maldives-romantic-retreat',
      destinationId: 'maldives',
      name: 'Maldives Romantic Retreat',
      slug: 'maldives-romantic-retreat',
      durationDays: 4,
      durationNights: 3,
      price: 89999,
      currency: 'INR',
      summary: 'A dreamy overwater villa stay with sunset cruises and snorkeling in vibrant coral reefs.',
      heroImageUrl: 'https://picsum.photos/seed/maldives-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/maldives-pkg1-1/1000/700',
        'https://picsum.photos/seed/maldives-pkg1-2/1000/700'
      ],
      highlights: ['Overwater villa stay', 'Sunset dolphin cruise', 'Snorkeling at coral reefs', 'Private beach dinner'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Resort Check-in',
          description: 'Arrive at Velana International Airport, speedboat transfer to your resort and check into an overwater villa.',
          activities: ['Speedboat transfer', 'Overwater villa check-in', 'Welcome refreshments']
        },
        {
          day: 2,
          title: 'Snorkeling & Coral Reef Exploration',
          description: 'Guided snorkeling trip to explore vibrant coral reefs and marine life.',
          activities: ['Snorkeling excursion', 'Coral reef exploration', 'Beach leisure']
        },
        {
          day: 3,
          title: 'Sunset Dolphin Cruise',
          description: 'Evening dolphin watching cruise followed by a private candlelight dinner on the beach.',
          activities: ['Dolphin watching cruise', 'Private beach dinner']
        },
        {
          day: 4,
          title: 'Leisure & Departure',
          description: 'Relax at the villa before transferring back to the airport for departure.',
          activities: ['Villa leisure time', 'Resort check-out', 'Speedboat transfer to airport']
        }
      ],
      inclusions: [
        '3 nights overwater villa accommodation',
        'Daily breakfast and dinner',
        'Speedboat airport transfers',
        'Snorkeling equipment & guided trip',
        'Sunset dolphin cruise',
        'One private beach dinner'
      ],
      exclusions: [
        'International airfare',
        'Maldives visa (visa on arrival, free for most nationalities)',
        'Travel insurance',
        'Spa treatments & motorized watersports',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'maldives-pkg1-rev1',
          author: 'Ishaan & Riya Bhatt',
          location: 'Mumbai',
          rating: 5,
          comment: 'The overwater villa was pure luxury and the beach dinner was the most romantic evening of our lives.',
          date: '2024-02-14',
          avatarUrl: 'https://i.pravatar.cc/150?img=8'
        },
        {
          id: 'maldives-pkg1-rev2',
          author: 'Divya Reddy',
          location: 'Chennai',
          rating: 5,
          comment: 'Snorkeling was incredible, saw so many colorful fish. The resort staff were extremely attentive.',
          date: '2024-01-28',
          avatarUrl: 'https://i.pravatar.cc/150?img=19'
        }
      ]
    },
    {
      id: 'maldives-overwater-villa-experience',
      destinationId: 'maldives',
      name: 'Maldives Overwater Villa Experience',
      slug: 'maldives-overwater-villa-experience',
      durationDays: 5,
      durationNights: 4,
      price: 119999,
      currency: 'INR',
      summary: 'An immersive stay combining watersports, spa therapy and a dolphin cruise in one of the world’s most beautiful settings.',
      heroImageUrl: 'https://picsum.photos/seed/maldives-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/maldives-pkg2-1/1000/700',
        'https://picsum.photos/seed/maldives-pkg2-2/1000/700'
      ],
      highlights: ['Overwater villa with private pool', 'Watersports package', 'Couple spa therapy', 'Dolphin watching cruise'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Welcome',
          description: 'Speedboat transfer to resort, check into an overwater pool villa and enjoy a welcome dinner.',
          activities: ['Speedboat transfer', 'Villa check-in', 'Welcome dinner']
        },
        {
          day: 2,
          title: 'Watersports Day',
          description: 'Enjoy jet skiing, kayaking and paddleboarding in the lagoon.',
          activities: ['Jet skiing', 'Kayaking', 'Stand-up paddleboarding']
        },
        {
          day: 3,
          title: 'Couple Spa & Beach Leisure',
          description: 'Relax with an overwater spa treatment followed by a leisurely afternoon on the beach.',
          activities: ['Couple spa therapy', 'Beach leisure']
        },
        {
          day: 4,
          title: 'Dolphin Watching Cruise',
          description: 'Sunset cruise to spot playful dolphins in their natural habitat.',
          activities: ['Dolphin watching cruise', 'Sunset photography']
        },
        {
          day: 5,
          title: 'Leisure & Departure',
          description: 'Final morning at the resort before departing for the airport.',
          activities: ['Villa leisure time', 'Resort check-out', 'Speedboat transfer to airport']
        }
      ],
      inclusions: [
        '4 nights overwater pool villa accommodation',
        'Daily breakfast, lunch and dinner',
        'Speedboat airport transfers',
        'Watersports package (jet ski, kayak, SUP)',
        'One couple spa session',
        'Dolphin watching cruise'
      ],
      exclusions: [
        'International airfare',
        'Travel insurance',
        'Scuba diving excursions',
        'Alcoholic beverages',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'maldives-pkg2-rev1',
          author: 'Karan Oberoi',
          location: 'Delhi',
          rating: 5,
          comment: 'The pool villa was stunning and the spa session was so relaxing. Best vacation we have ever taken.',
          date: '2024-03-10',
          avatarUrl: 'https://i.pravatar.cc/150?img=27'
        },
        {
          id: 'maldives-pkg2-rev2',
          author: 'Tanvi Joshi',
          location: 'Pune',
          rating: 4,
          comment: 'Watersports package was great fun. Would recommend adding a scuba diving add-on.',
          date: '2024-02-22',
          avatarUrl: 'https://i.pravatar.cc/150?img=36'
        }
      ]
    },
    {
      id: 'maldives-family-fun',
      destinationId: 'maldives',
      name: 'Maldives Family Fun',
      slug: 'maldives-family-fun',
      durationDays: 6,
      durationNights: 5,
      price: 149999,
      currency: 'INR',
      summary: 'A family-friendly itinerary with island hopping, kids club activities and a fishing excursion.',
      heroImageUrl: 'https://picsum.photos/seed/maldives-pkg3-hero/1200/800',
      images: [
        'https://picsum.photos/seed/maldives-pkg3-1/1000/700',
        'https://picsum.photos/seed/maldives-pkg3-2/1000/700'
      ],
      highlights: ['Kids club activities', 'Local island hopping tour', 'Traditional fishing trip', 'Family beach BBQ'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Family Welcome',
          description: 'Arrive and check into a family beach villa with a special welcome for children.',
          activities: ['Speedboat transfer', 'Family villa check-in', 'Kids welcome activity']
        },
        {
          day: 2,
          title: 'Kids Club & Beach Games',
          description: 'Children enjoy supervised kids club activities while parents relax on the beach.',
          activities: ['Kids club sessions', 'Beach games', 'Family swim time']
        },
        {
          day: 3,
          title: 'Local Island Hopping',
          description: 'Visit nearby local islands to experience Maldivian culture, markets and cuisine.',
          activities: ['Local island visit', 'Cultural market walk', 'Local cuisine tasting']
        },
        {
          day: 4,
          title: 'Traditional Fishing Trip',
          description: 'Join a traditional Maldivian fishing excursion followed by a beachside cook-out of the catch.',
          activities: ['Traditional fishing trip', 'Beachside cook-out']
        },
        {
          day: 5,
          title: 'Family Beach BBQ',
          description: 'A relaxed day at the resort culminating in a family BBQ dinner on the beach.',
          activities: ['Snorkeling for beginners', 'Family beach BBQ']
        },
        {
          day: 6,
          title: 'Leisure & Departure',
          description: 'Final morning of relaxation before transferring to the airport.',
          activities: ['Villa leisure time', 'Resort check-out', 'Speedboat transfer to airport']
        }
      ],
      inclusions: [
        '5 nights family villa accommodation',
        'Daily breakfast and dinner',
        'Speedboat airport transfers',
        'Kids club access',
        'Local island hopping tour',
        'Traditional fishing trip'
      ],
      exclusions: [
        'International airfare',
        'Travel insurance',
        'Motorized watersports',
        'Alcoholic beverages',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'maldives-pkg3-rev1',
          author: 'The Chopra Family',
          location: 'Gurugram',
          rating: 5,
          comment: 'Perfect for our family vacation. Kids loved the club activities and the fishing trip was so much fun.',
          date: '2024-04-05',
          avatarUrl: 'https://i.pravatar.cc/150?img=48'
        },
        {
          id: 'maldives-pkg3-rev2',
          author: 'Ravi Menon',
          location: 'Bengaluru',
          rating: 4,
          comment: 'Great family package with good balance of activities and relaxation. Highly recommend.',
          date: '2024-03-18',
          avatarUrl: 'https://i.pravatar.cc/150?img=53'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'maldives-test-1',
      author: 'Ishaan & Riya Bhatt',
      role: 'Honeymoon couple',
      quote: 'The most magical honeymoon we could have asked for. The overwater villa views were unreal.',
      avatarUrl: 'https://i.pravatar.cc/150?img=8',
      rating: 5
    },
    {
      id: 'maldives-test-2',
      author: 'The Chopra Family',
      role: 'Family traveler',
      quote: 'A wonderful family holiday with activities for both kids and adults. Will definitely return!',
      avatarUrl: 'https://i.pravatar.cc/150?img=48',
      rating: 5
    }
  ]
};

export default maldives;
