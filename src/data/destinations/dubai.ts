import { Destination } from '../types';

const dubai: Destination = {
  id: 'dubai',
  name: 'Dubai',
  slug: 'dubai',
  country: 'United Arab Emirates',
  tagline: 'City of Gold & Skyscrapers',
  description:
    'Dubai dazzles with futuristic skylines, golden deserts and world-class shopping. Experience the Burj Khalifa, thrilling desert safaris and luxury like nowhere else on earth.',
  heroImageUrl: 'https://picsum.photos/seed/dubai-hero/1600/900',
  images: [
    'https://picsum.photos/seed/dubai-1/1200/800',
    'https://picsum.photos/seed/dubai-2/1200/800',
    'https://picsum.photos/seed/dubai-3/1200/800',
    'https://picsum.photos/seed/dubai-4/1200/800'
  ],
  bestTimeToVisit: 'November to March',
  packages: [
    {
      id: 'dubai-city-highlights',
      destinationId: 'dubai',
      name: 'Dubai City Highlights',
      slug: 'dubai-city-highlights',
      durationDays: 4,
      durationNights: 3,
      price: 49999,
      currency: 'INR',
      summary: 'A quick-paced tour covering Dubai’s iconic landmarks, desert safari and marina cruise.',
      heroImageUrl: 'https://picsum.photos/seed/dubai-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/dubai-pkg1-1/1000/700',
        'https://picsum.photos/seed/dubai-pkg1-2/1000/700'
      ],
      highlights: ['Burj Khalifa observation deck', 'Dubai Mall & Fountain show', 'Desert safari with BBQ dinner', 'Dubai Marina dhow cruise'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Dubai Marina Cruise',
          description: 'Arrive in Dubai, check into your hotel and enjoy an evening dhow cruise along Dubai Marina with dinner.',
          activities: ['Airport pickup', 'Hotel check-in', 'Dubai Marina dhow cruise & dinner']
        },
        {
          day: 2,
          title: 'Burj Khalifa & Dubai Mall',
          description: 'Visit the world’s tallest building, explore the Dubai Mall and watch the Dubai Fountain show at night.',
          activities: ['Burj Khalifa 124th floor', 'Dubai Mall shopping', 'Dubai Fountain show']
        },
        {
          day: 3,
          title: 'Desert Safari Adventure',
          description: 'Thrilling dune bashing followed by camel rides, henna painting and a BBQ dinner with live entertainment.',
          activities: ['Dune bashing', 'Camel riding & henna', 'BBQ dinner with belly dance show']
        },
        {
          day: 4,
          title: 'Leisure & Departure',
          description: 'Free morning for shopping at Gold Souk before transferring to the airport.',
          activities: ['Gold Souk visit', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '3 nights accommodation',
        'Daily breakfast',
        'Burj Khalifa entry ticket',
        'Desert safari with BBQ dinner',
        'Dubai Marina dhow cruise with dinner',
        'All transfers in private/shared vehicle'
      ],
      exclusions: [
        'International airfare',
        'UAE visa fees',
        'Travel insurance',
        'Lunches unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'dubai-pkg1-rev1',
          author: 'Vikram Singh',
          location: 'Jaipur',
          rating: 5,
          comment: 'The desert safari was thrilling and Burj Khalifa views were spectacular. Well organized trip.',
          date: '2024-01-22',
          avatarUrl: 'https://i.pravatar.cc/150?img=18'
        },
        {
          id: 'dubai-pkg1-rev2',
          author: 'Meera Nair',
          location: 'Kochi',
          rating: 4,
          comment: 'Great value package covering all major attractions. Guide was punctual and helpful.',
          date: '2023-12-15',
          avatarUrl: 'https://i.pravatar.cc/150?img=29'
        }
      ]
    },
    {
      id: 'dubai-luxury-escape',
      destinationId: 'dubai',
      name: 'Dubai Luxury Escape',
      slug: 'dubai-luxury-escape',
      durationDays: 5,
      durationNights: 4,
      price: 74999,
      currency: 'INR',
      summary: 'Indulge in Dubai’s finest experiences from Atlantis Aquaventure to the Museum of the Future.',
      heroImageUrl: 'https://picsum.photos/seed/dubai-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/dubai-pkg2-1/1000/700',
        'https://picsum.photos/seed/dubai-pkg2-2/1000/700'
      ],
      highlights: ['Atlantis Aquaventure waterpark', 'Palm Jumeirah drive', 'Museum of the Future', 'Global Village evening'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Palm Jumeirah',
          description: 'Arrive in Dubai, check into a luxury hotel and take a scenic drive around Palm Jumeirah.',
          activities: ['Airport pickup', 'Hotel check-in', 'Palm Jumeirah scenic drive']
        },
        {
          day: 2,
          title: 'Atlantis Aquaventure Waterpark',
          description: 'A full day of thrilling water slides and marine encounters at Atlantis Aquaventure.',
          activities: ['Aquaventure waterpark', 'Lost Chambers Aquarium']
        },
        {
          day: 3,
          title: 'Museum of the Future & Burj Khalifa',
          description: 'Explore futuristic exhibits at the Museum of the Future followed by an evening at Burj Khalifa.',
          activities: ['Museum of the Future', 'Burj Khalifa observation deck']
        },
        {
          day: 4,
          title: 'Global Village Evening',
          description: 'Experience cultural pavilions, rides and international cuisines at Global Village.',
          activities: ['Global Village pavilions', 'Cultural performances', 'Street food tasting']
        },
        {
          day: 5,
          title: 'Leisure & Departure',
          description: 'Relax at the hotel or shop at Mall of the Emirates before departure.',
          activities: ['Mall of the Emirates', 'Hotel check-out', 'Airport transfer']
        }
      ],
      inclusions: [
        '4 nights luxury accommodation',
        'Daily breakfast',
        'Atlantis Aquaventure tickets',
        'Museum of the Future tickets',
        'Global Village entry',
        'All private transfers'
      ],
      exclusions: [
        'International airfare',
        'UAE visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'dubai-pkg2-rev1',
          author: 'Sanya Kapoor',
          location: 'Delhi',
          rating: 5,
          comment: 'Absolutely loved the Museum of the Future and the waterpark. A truly luxurious experience!',
          date: '2024-02-05',
          avatarUrl: 'https://i.pravatar.cc/150?img=41'
        },
        {
          id: 'dubai-pkg2-rev2',
          author: 'Arjun Mehta',
          location: 'Ahmedabad',
          rating: 5,
          comment: 'Great hotel selection and well-paced itinerary. Global Village was a fantastic experience.',
          date: '2024-01-11',
          avatarUrl: 'https://i.pravatar.cc/150?img=52'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'dubai-test-1',
      author: 'Vikram Singh',
      role: 'Traveler from Jaipur',
      quote: 'Dubai was an unforgettable mix of adventure and luxury. The desert safari was the highlight!',
      avatarUrl: 'https://i.pravatar.cc/150?img=18',
      rating: 5
    },
    {
      id: 'dubai-test-2',
      author: 'Sanya Kapoor',
      role: 'Family traveler',
      quote: 'Every detail was taken care of. The luxury escape package was worth every penny.',
      avatarUrl: 'https://i.pravatar.cc/150?img=41',
      rating: 5
    }
  ]
};

export default dubai;
