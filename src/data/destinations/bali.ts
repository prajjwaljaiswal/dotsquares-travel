import { Destination } from '../types';

const bali: Destination = {
  id: 'bali',
  name: 'Bali',
  slug: 'bali',
  country: 'Indonesia',
  tagline: 'Island of the Gods',
  description:
    'Bali enchants travelers with lush rice terraces, sacred temples, pristine beaches and a vibrant culture. From the surf breaks of Kuta to the serene hills of Ubud, Bali offers an unforgettable blend of adventure, relaxation and spirituality.',
  heroImageUrl: 'https://picsum.photos/seed/bali-hero/1600/900',
  images: [
    'https://picsum.photos/seed/bali-1/1200/800',
    'https://picsum.photos/seed/bali-2/1200/800',
    'https://picsum.photos/seed/bali-3/1200/800',
    'https://picsum.photos/seed/bali-4/1200/800'
  ],
  bestTimeToVisit: 'April to October',
  packages: [
    {
      id: 'bali-bliss-getaway',
      destinationId: 'bali',
      name: 'Bali Bliss Getaway',
      slug: 'bali-bliss-getaway',
      durationDays: 4,
      durationNights: 3,
      price: 42999,
      currency: 'INR',
      summary: 'A compact escape covering Kuta, Ubud and the iconic sea temples of Bali.',
      heroImageUrl: 'https://picsum.photos/seed/bali-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/bali-pkg1-1/1000/700',
        'https://picsum.photos/seed/bali-pkg1-2/1000/700'
      ],
      highlights: ['Ubud Monkey Forest & Rice Terraces', 'Tanah Lot sunset temple', 'Kecak fire dance', 'Jimbaran seafood dinner'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Kuta Beach Leisure',
          description: 'Arrive at Ngurah Rai airport, transfer to your hotel and unwind at Kuta beach in the evening.',
          activities: ['Airport pickup', 'Hotel check-in', 'Kuta Beach sunset walk']
        },
        {
          day: 2,
          title: 'Ubud Village & Kintamani Tour',
          description: 'Full day exploring Ubud Monkey Forest, Tegalalang Rice Terrace and the Kintamani volcano viewpoint.',
          activities: ['Ubud Monkey Forest', 'Tegalalang Rice Terrace', 'Kintamani volcano viewpoint & coffee tasting']
        },
        {
          day: 3,
          title: 'Tanah Lot & Uluwatu Temple',
          description: 'Visit the iconic sea temples, watch the traditional Kecak fire dance and enjoy seafood at Jimbaran beach.',
          activities: ['Tanah Lot Temple', 'Uluwatu Temple & Kecak dance', 'Jimbaran beach seafood dinner']
        },
        {
          day: 4,
          title: 'Leisure & Departure',
          description: 'Free morning for shopping before transferring to the airport for your departure flight.',
          activities: ['Souvenir shopping', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        'Airport transfers on private vehicle',
        '3 nights accommodation on double sharing',
        'Daily breakfast',
        'All sightseeing as per itinerary',
        'English/Hindi speaking driver-cum-guide',
        'All entrance fees mentioned in itinerary',
        'Welcome drink on arrival'
      ],
      exclusions: [
        'International/domestic airfare',
        'Visa fees',
        'Travel insurance',
        'Lunch and dinner unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'bali-pkg1-rev1',
          author: 'Ankita Sharma',
          location: 'Mumbai',
          rating: 5,
          comment: 'Ubud and Tanah Lot were breathtaking! The itinerary was well planned and our guide was very knowledgeable.',
          date: '2024-02-18',
          avatarUrl: 'https://i.pravatar.cc/150?img=5'
        },
        {
          id: 'bali-pkg1-rev2',
          author: 'Rohit Verma',
          location: 'Delhi',
          rating: 4,
          comment: 'Great value for money package. Would have liked one more day in Ubud but overall a lovely trip.',
          date: '2024-01-05',
          avatarUrl: 'https://i.pravatar.cc/150?img=12'
        }
      ]
    },
    {
      id: 'bali-honeymoon-special',
      destinationId: 'bali',
      name: 'Bali Honeymoon Special',
      slug: 'bali-honeymoon-special',
      durationDays: 5,
      durationNights: 4,
      price: 54999,
      currency: 'INR',
      summary: 'A romantic escape with private villa stays, candlelight dinners and Nusa Penida island exploration.',
      heroImageUrl: 'https://picsum.photos/seed/bali-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/bali-pkg2-1/1000/700',
        'https://picsum.photos/seed/bali-pkg2-2/1000/700'
      ],
      highlights: ['Private pool villa stay', 'Nusa Penida island tour', 'Couple spa session', 'Candlelight dinner on the beach'],
      itinerary: [
        {
          day: 1,
          title: 'Romantic Arrival',
          description: 'Arrive in Bali and check into your private pool villa with a welcome flower decoration.',
          activities: ['Airport pickup', 'Villa check-in', 'Welcome flower decoration']
        },
        {
          day: 2,
          title: 'Nusa Penida Island Tour',
          description: 'Full day speedboat tour to Nusa Penida covering Kelingking Beach, Angel’s Billabong and Broken Beach.',
          activities: ['Speedboat transfer', 'Kelingking Beach viewpoint', 'Angel’s Billabong & Broken Beach']
        },
        {
          day: 3,
          title: 'Ubud Sightseeing & Couple Spa',
          description: 'Explore Ubud’s art markets and rice terraces followed by a relaxing couple spa session.',
          activities: ['Ubud Art Market', 'Tegalalang Rice Terrace', 'Couple spa & massage']
        },
        {
          day: 4,
          title: 'Tanah Lot Sunset & Candlelight Dinner',
          description: 'Evening visit to Tanah Lot temple followed by a private candlelight dinner on the beach.',
          activities: ['Tanah Lot sunset', 'Private candlelight dinner']
        },
        {
          day: 5,
          title: 'Leisure & Departure',
          description: 'Relax at the villa pool before transferring to the airport for your departure flight.',
          activities: ['Villa leisure time', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        'Private pool villa accommodation',
        'Daily breakfast',
        'Nusa Penida speedboat tour',
        'Couple spa session (60 mins)',
        'Private candlelight dinner',
        'All airport & sightseeing transfers'
      ],
      exclusions: [
        'International/domestic airfare',
        'Visa fees',
        'Travel insurance',
        'Lunches unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'bali-pkg2-rev1',
          author: 'Priya & Karan Malhotra',
          location: 'Bengaluru',
          rating: 5,
          comment: 'Perfect honeymoon package! The villa was stunning and the candlelight dinner on the beach was magical.',
          date: '2024-03-02',
          avatarUrl: 'https://i.pravatar.cc/150?img=32'
        },
        {
          id: 'bali-pkg2-rev2',
          author: 'Neha Kapoor',
          location: 'Pune',
          rating: 5,
          comment: 'Nusa Penida was the highlight of our trip. Everything was organized flawlessly.',
          date: '2024-02-10',
          avatarUrl: 'https://i.pravatar.cc/150?img=45'
        }
      ]
    },
    {
      id: 'bali-adventure-explorer',
      destinationId: 'bali',
      name: 'Bali Adventure Explorer',
      slug: 'bali-adventure-explorer',
      durationDays: 6,
      durationNights: 5,
      price: 64999,
      currency: 'INR',
      summary: 'An action-packed itinerary featuring white water rafting, a sunrise volcano trek and thrilling watersports.',
      heroImageUrl: 'https://picsum.photos/seed/bali-pkg3-hero/1200/800',
      images: [
        'https://picsum.photos/seed/bali-pkg3-1/1000/700',
        'https://picsum.photos/seed/bali-pkg3-2/1000/700'
      ],
      highlights: ['Mount Batur sunrise trek', 'Ayung River white water rafting', 'Waterfall exploration', 'Nusa Dua watersports'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Bali',
          description: 'Arrive and transfer to your hotel in Kuta, evening free to explore local markets.',
          activities: ['Airport pickup', 'Hotel check-in', 'Local market visit']
        },
        {
          day: 2,
          title: 'Mount Batur Sunrise Trek',
          description: 'Early morning trek to the summit of Mount Batur to witness a spectacular sunrise, followed by hot spring relaxation.',
          activities: ['Sunrise trek', 'Breakfast at the summit', 'Toya Devasya hot springs']
        },
        {
          day: 3,
          title: 'Ayung River White Water Rafting',
          description: 'Adrenaline-pumping rafting through the Ayung River gorge followed by lunch and Ubud exploration.',
          activities: ['White water rafting', 'Ubud Palace visit', 'Local lunch']
        },
        {
          day: 4,
          title: 'Waterfall Exploration',
          description: 'Visit Tegenungan and Tibumana waterfalls, swim in natural pools surrounded by jungle.',
          activities: ['Tegenungan Waterfall', 'Tibumana Waterfall', 'Jungle swim']
        },
        {
          day: 5,
          title: 'Nusa Dua Watersports',
          description: 'A thrilling day of watersports including parasailing, jet skiing and banana boat rides at Nusa Dua beach.',
          activities: ['Parasailing', 'Jet skiing', 'Banana boat ride']
        },
        {
          day: 6,
          title: 'Leisure & Departure',
          description: 'Free morning for last-minute shopping before transferring to the airport.',
          activities: ['Souvenir shopping', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '5 nights accommodation',
        'Daily breakfast',
        'Mount Batur sunrise trek with guide',
        'White water rafting with equipment',
        'Watersports package at Nusa Dua',
        'All transfers in private vehicle'
      ],
      exclusions: [
        'International/domestic airfare',
        'Visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'bali-pkg3-rev1',
          author: 'Aditya Rao',
          location: 'Hyderabad',
          rating: 5,
          comment: 'Best adventure trip ever! The Mount Batur trek and rafting were unforgettable experiences.',
          date: '2024-04-01',
          avatarUrl: 'https://i.pravatar.cc/150?img=15'
        },
        {
          id: 'bali-pkg3-rev2',
          author: 'Simran Kaur',
          location: 'Chandigarh',
          rating: 4,
          comment: 'Loved the watersports day at Nusa Dua. Well organized with good safety measures.',
          date: '2024-03-20',
          avatarUrl: 'https://i.pravatar.cc/150?img=23'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'bali-test-1',
      author: 'Ankita Sharma',
      role: 'Traveler from Mumbai',
      quote: 'Bali exceeded every expectation. From the temples to the beaches, every moment felt magical.',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      rating: 5
    },
    {
      id: 'bali-test-2',
      author: 'Priya & Karan Malhotra',
      role: 'Honeymoon couple',
      quote: 'Our honeymoon in Bali was straight out of a dream. Thank you for such flawless planning!',
      avatarUrl: 'https://i.pravatar.cc/150?img=32',
      rating: 5
    },
    {
      id: 'bali-test-3',
      author: 'Aditya Rao',
      role: 'Adventure enthusiast',
      quote: 'The adventure package had the perfect mix of thrill and relaxation. Highly recommended!',
      avatarUrl: 'https://i.pravatar.cc/150?img=15',
      rating: 5
    }
  ]
};

export default bali;
