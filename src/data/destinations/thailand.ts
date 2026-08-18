import { Destination } from '../types';

const thailand: Destination = {
  id: 'thailand',
  name: 'Thailand',
  slug: 'thailand',
  country: 'Thailand',
  tagline: 'Land of Smiles',
  description:
    'Thailand offers a vibrant mix of bustling cities, ancient temples and idyllic islands. From Bangkok’s street life to Phuket’s beaches, there’s something for every traveler.',
  heroImageUrl: 'https://picsum.photos/seed/thailand-hero/1600/900',
  images: [
    'https://picsum.photos/seed/thailand-1/1200/800',
    'https://picsum.photos/seed/thailand-2/1200/800',
    'https://picsum.photos/seed/thailand-3/1200/800',
    'https://picsum.photos/seed/thailand-4/1200/800'
  ],
  bestTimeToVisit: 'November to February',
  packages: [
    {
      id: 'thailand-bangkok-pattaya-tour',
      destinationId: 'thailand',
      name: 'Thailand Bangkok Pattaya Tour',
      slug: 'thailand-bangkok-pattaya-tour',
      durationDays: 5,
      durationNights: 4,
      price: 44999,
      currency: 'INR',
      summary: 'A vibrant tour covering the Grand Palace in Bangkok and Pattaya’s beaches and Coral Island.',
      heroImageUrl: 'https://picsum.photos/seed/thai-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/thai-pkg1-1/1000/700',
        'https://picsum.photos/seed/thai-pkg1-2/1000/700'
      ],
      highlights: ['Grand Palace & Wat Phra Kaew', 'Coral Island watersports', 'Alcazar cabaret show', 'Floating market visit'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Bangkok',
          description: 'Arrive in Bangkok, check into your hotel and enjoy an evening at leisure.',
          activities: ['Airport pickup', 'Hotel check-in', 'Evening leisure at Khao San Road']
        },
        {
          day: 2,
          title: 'Bangkok City Tour',
          description: 'Visit the Grand Palace, Wat Phra Kaew and take a boat ride along the Chao Phraya River.',
          activities: ['Grand Palace tour', 'Wat Phra Kaew', 'Chao Phraya river ride']
        },
        {
          day: 3,
          title: 'Transfer to Pattaya & Alcazar Show',
          description: 'Travel to Pattaya and enjoy the vibrant Alcazar cabaret show in the evening.',
          activities: ['Transfer to Pattaya', 'Alcazar cabaret show']
        },
        {
          day: 4,
          title: 'Coral Island Watersports',
          description: 'Full day trip to Coral Island with parasailing, snorkeling and beach relaxation.',
          activities: ['Coral Island boat trip', 'Parasailing', 'Snorkeling']
        },
        {
          day: 5,
          title: 'Floating Market & Departure',
          description: 'Visit a local floating market before transferring to the airport for departure.',
          activities: ['Floating market visit', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '4 nights accommodation',
        'Daily breakfast',
        'Grand Palace entry ticket',
        'Coral Island tour with watersports',
        'Alcazar show tickets',
        'All transfers in shared/private vehicle'
      ],
      exclusions: [
        'International airfare',
        'Thailand visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'thai-pkg1-rev1',
          author: 'Farhan Sheikh',
          location: 'Lucknow',
          rating: 4,
          comment: 'Coral Island was a lot of fun and the Alcazar show was very entertaining. Great budget-friendly trip.',
          date: '2024-01-15',
          avatarUrl: 'https://i.pravatar.cc/150?img=63'
        },
        {
          id: 'thai-pkg1-rev2',
          author: 'Bhavna Rathi',
          location: 'Indore',
          rating: 5,
          comment: 'Loved Bangkok’s Grand Palace and the floating market. Well organized throughout.',
          date: '2023-12-20',
          avatarUrl: 'https://i.pravatar.cc/150?img=66'
        }
      ]
    },
    {
      id: 'thailand-phuket-krabi-explorer',
      destinationId: 'thailand',
      name: 'Thailand Phuket Krabi Explorer',
      slug: 'thailand-phuket-krabi-explorer',
      durationDays: 6,
      durationNights: 5,
      price: 54999,
      currency: 'INR',
      summary: 'An island-hopping adventure through Phuket and Krabi featuring Phi Phi Island and James Bond Island.',
      heroImageUrl: 'https://picsum.photos/seed/thai-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/thai-pkg2-1/1000/700',
        'https://picsum.photos/seed/thai-pkg2-2/1000/700'
      ],
      highlights: ['Phi Phi Island tour', 'James Bond Island by speedboat', 'Big Buddha Phuket', 'Krabi Railay Beach'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Phuket',
          description: 'Arrive in Phuket, check into your hotel and relax at Patong Beach.',
          activities: ['Airport pickup', 'Hotel check-in', 'Patong Beach evening']
        },
        {
          day: 2,
          title: 'Phi Phi Island Tour',
          description: 'Full day speedboat tour to Phi Phi Island, Maya Bay and Monkey Beach.',
          activities: ['Phi Phi Island tour', 'Maya Bay visit', 'Monkey Beach']
        },
        {
          day: 3,
          title: 'Big Buddha & Phuket City',
          description: 'Visit the Big Buddha statue and explore Phuket Old Town’s colorful architecture.',
          activities: ['Big Buddha visit', 'Phuket Old Town walk']
        },
        {
          day: 4,
          title: 'Transfer to Krabi',
          description: 'Travel to Krabi and relax on the stunning Railay Beach.',
          activities: ['Transfer to Krabi', 'Railay Beach relaxation']
        },
        {
          day: 5,
          title: 'James Bond Island Tour',
          description: 'Speedboat excursion to James Bond Island and Phang Nga Bay with canoeing through limestone caves.',
          activities: ['James Bond Island tour', 'Phang Nga Bay canoeing']
        },
        {
          day: 6,
          title: 'Leisure & Departure',
          description: 'Morning at leisure before transferring to the airport for departure.',
          activities: ['Leisure time', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '5 nights accommodation',
        'Daily breakfast',
        'Phi Phi Island speedboat tour',
        'James Bond Island tour',
        'Big Buddha entry',
        'All transfers in shared/private vehicle'
      ],
      exclusions: [
        'International airfare',
        'Thailand visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'thai-pkg2-rev1',
          author: 'Devansh Kohli',
          location: 'Noida',
          rating: 5,
          comment: 'Phi Phi Island and Maya Bay were absolutely stunning. Krabi was a hidden gem we loved exploring.',
          date: '2024-02-27',
          avatarUrl: 'https://i.pravatar.cc/150?img=69'
        },
        {
          id: 'thai-pkg2-rev2',
          author: 'Anushka Ghosh',
          location: 'Kolkata',
          rating: 5,
          comment: 'James Bond Island tour was incredible. Great value island hopping package overall.',
          date: '2024-01-08',
          avatarUrl: 'https://i.pravatar.cc/150?img=13'
        }
      ]
    },
    {
      id: 'thailand-cultural-discovery',
      destinationId: 'thailand',
      name: 'Thailand Cultural Discovery',
      slug: 'thailand-cultural-discovery',
      durationDays: 4,
      durationNights: 3,
      price: 39999,
      currency: 'INR',
      summary: 'A short cultural tour exploring the ancient temples of Ayutthaya and Bangkok’s floating markets.',
      heroImageUrl: 'https://picsum.photos/seed/thai-pkg3-hero/1200/800',
      images: [
        'https://picsum.photos/seed/thai-pkg3-1/1000/700',
        'https://picsum.photos/seed/thai-pkg3-2/1000/700'
      ],
      highlights: ['Ayutthaya ancient temple ruins', 'Damnoen Saduak floating market', 'Wat Arun temple', 'Traditional Thai cooking class'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Bangkok',
          description: 'Arrive in Bangkok and check into your hotel, evening free for local exploration.',
          activities: ['Airport pickup', 'Hotel check-in', 'Local street food tour']
        },
        {
          day: 2,
          title: 'Ayutthaya Ancient City Tour',
          description: 'Full day excursion to Ayutthaya to explore ancient temple ruins and historical sites.',
          activities: ['Wat Mahathat ruins', 'Wat Phra Si Sanphet', 'Ayutthaya Historical Park']
        },
        {
          day: 3,
          title: 'Floating Market & Cooking Class',
          description: 'Visit the colorful Damnoen Saduak floating market followed by a traditional Thai cooking class.',
          activities: ['Damnoen Saduak floating market', 'Thai cooking class']
        },
        {
          day: 4,
          title: 'Wat Arun & Departure',
          description: 'Visit the stunning Wat Arun temple before transferring to the airport for departure.',
          activities: ['Wat Arun temple visit', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '3 nights accommodation',
        'Daily breakfast',
        'Ayutthaya day tour with guide',
        'Floating market tour',
        'Thai cooking class',
        'All transfers in shared/private vehicle'
      ],
      exclusions: [
        'International airfare',
        'Thailand visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'thai-pkg3-rev1',
          author: 'Ritika Saxena',
          location: 'Jaipur',
          rating: 4,
          comment: 'Ayutthaya ruins were fascinating and the cooking class was a fun hands-on experience.',
          date: '2023-11-11',
          avatarUrl: 'https://i.pravatar.cc/150?img=71'
        },
        {
          id: 'thai-pkg3-rev2',
          author: 'Yash Thakur',
          location: 'Bhopal',
          rating: 5,
          comment: 'A great cultural immersion in a short time. The floating market was colorful and lively.',
          date: '2023-10-30',
          avatarUrl: 'https://i.pravatar.cc/150?img=74'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'thailand-test-1',
      author: 'Devansh Kohli',
      role: 'Island hopper',
      quote: 'Phi Phi Island exceeded all our expectations. Thailand has some of the most beautiful islands we’ve seen.',
      avatarUrl: 'https://i.pravatar.cc/150?img=69',
      rating: 5
    },
    {
      id: 'thailand-test-2',
      author: 'Ritika Saxena',
      role: 'Culture enthusiast',
      quote: 'The cultural discovery tour gave us a deep appreciation for Thai history and traditions.',
      avatarUrl: 'https://i.pravatar.cc/150?img=71',
      rating: 4
    }
  ]
};

export default thailand;
