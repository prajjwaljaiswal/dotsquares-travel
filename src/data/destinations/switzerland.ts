import { Destination } from '../types';

const switzerland: Destination = {
  id: 'switzerland',
  name: 'Switzerland',
  slug: 'switzerland',
  country: 'Switzerland',
  tagline: 'Land of the Alps',
  description:
    'Switzerland enchants with snow-capped peaks, pristine lakes and charming alpine towns. From the Jungfraujoch to the Glacier Express, it’s a paradise for scenic travel.',
  heroImageUrl: 'https://picsum.photos/seed/switzerland-hero/1600/900',
  images: [
    'https://picsum.photos/seed/switzerland-1/1200/800',
    'https://picsum.photos/seed/switzerland-2/1200/800',
    'https://picsum.photos/seed/switzerland-3/1200/800',
    'https://picsum.photos/seed/switzerland-4/1200/800'
  ],
  bestTimeToVisit: 'June to September, December to February',
  packages: [
    {
      id: 'switzerland-alpine-wonder',
      destinationId: 'switzerland',
      name: 'Switzerland Alpine Wonder',
      slug: 'switzerland-alpine-wonder',
      durationDays: 6,
      durationNights: 5,
      price: 159999,
      currency: 'INR',
      summary: 'A scenic journey through Interlaken, Jungfraujoch, Lucerne and Zurich.',
      heroImageUrl: 'https://picsum.photos/seed/swiss-pkg1-hero/1200/800',
      images: [
        'https://picsum.photos/seed/swiss-pkg1-1/1000/700',
        'https://picsum.photos/seed/swiss-pkg1-2/1000/700'
      ],
      highlights: ['Jungfraujoch Top of Europe', 'Lake Lucerne cruise', 'Interlaken scenic town', 'Zurich Old Town walk'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Zurich',
          description: 'Arrive in Zurich, check into your hotel and take a leisurely walk through Zurich Old Town.',
          activities: ['Airport pickup', 'Hotel check-in', 'Zurich Old Town walk']
        },
        {
          day: 2,
          title: 'Zurich to Lucerne',
          description: 'Travel to Lucerne, visit the Chapel Bridge and enjoy a scenic cruise on Lake Lucerne.',
          activities: ['Chapel Bridge visit', 'Lake Lucerne cruise', 'Lion Monument']
        },
        {
          day: 3,
          title: 'Lucerne to Interlaken',
          description: 'Scenic transfer to Interlaken, nestled between two beautiful lakes and mountains.',
          activities: ['Scenic train transfer', 'Interlaken town exploration', 'Lake Thun viewpoint']
        },
        {
          day: 4,
          title: 'Jungfraujoch - Top of Europe',
          description: 'Full day excursion to Jungfraujoch, Europe’s highest railway station, with panoramic glacier views.',
          activities: ['Jungfraujoch railway journey', 'Ice Palace visit', 'Sphinx observation deck']
        },
        {
          day: 5,
          title: 'Grindelwald & Leisure',
          description: 'Explore the charming village of Grindelwald with free time for shopping and relaxation.',
          activities: ['Grindelwald village walk', 'Cable car ride', 'Leisure time']
        },
        {
          day: 6,
          title: 'Departure',
          description: 'Transfer to Zurich airport for your departure flight.',
          activities: ['Hotel check-out', 'Transfer to Zurich airport']
        }
      ],
      inclusions: [
        '5 nights accommodation',
        'Daily breakfast',
        'Jungfraujoch railway tickets',
        'Lake Lucerne cruise',
        'All train and coach transfers',
        'English speaking tour manager'
      ],
      exclusions: [
        'International airfare',
        'Schengen visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'swiss-pkg1-rev1',
          author: 'Rahul Bansal',
          location: 'Delhi',
          rating: 5,
          comment: 'Jungfraujoch was a once-in-a-lifetime experience. The scenery throughout the trip was stunning.',
          date: '2023-08-14',
          avatarUrl: 'https://i.pravatar.cc/150?img=25'
        },
        {
          id: 'swiss-pkg1-rev2',
          author: 'Shreya Pillai',
          location: 'Bengaluru',
          rating: 5,
          comment: 'Perfectly organized trip covering all the top Swiss destinations. Loved Interlaken the most.',
          date: '2023-07-02',
          avatarUrl: 'https://i.pravatar.cc/150?img=39'
        }
      ]
    },
    {
      id: 'switzerland-scenic-rail-journey',
      destinationId: 'switzerland',
      name: 'Switzerland Scenic Rail Journey',
      slug: 'switzerland-scenic-rail-journey',
      durationDays: 7,
      durationNights: 6,
      price: 189999,
      currency: 'INR',
      summary: 'An unforgettable rail journey aboard the Glacier Express through Zermatt, Geneva and Bern.',
      heroImageUrl: 'https://picsum.photos/seed/swiss-pkg2-hero/1200/800',
      images: [
        'https://picsum.photos/seed/swiss-pkg2-1/1000/700',
        'https://picsum.photos/seed/swiss-pkg2-2/1000/700'
      ],
      highlights: ['Glacier Express panoramic train', 'Matterhorn views from Zermatt', 'Geneva lakeside walk', 'Bern Old Town UNESCO site'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Geneva',
          description: 'Arrive in Geneva, check into your hotel and enjoy a lakeside walk along Lake Geneva.',
          activities: ['Airport pickup', 'Hotel check-in', 'Lake Geneva walk']
        },
        {
          day: 2,
          title: 'Geneva City Tour',
          description: 'Explore Geneva’s Old Town, the Jet d’Eau fountain and the United Nations district.',
          activities: ['Old Town walking tour', 'Jet d’Eau fountain', 'United Nations district']
        },
        {
          day: 3,
          title: 'Geneva to Bern',
          description: 'Travel to Bern and explore the UNESCO-listed Old Town with its medieval architecture.',
          activities: ['Bern Old Town tour', 'Zytglogge clock tower', 'Bear Park visit']
        },
        {
          day: 4,
          title: 'Bern to Zermatt',
          description: 'Scenic train journey to Zermatt, a car-free alpine village beneath the Matterhorn.',
          activities: ['Scenic train transfer', 'Zermatt village walk', 'Matterhorn viewpoint']
        },
        {
          day: 5,
          title: 'Gornergrat Railway Excursion',
          description: 'Ride the Gornergrat railway for panoramic views of the Matterhorn and surrounding glaciers.',
          activities: ['Gornergrat railway', 'Glacier viewpoint']
        },
        {
          day: 6,
          title: 'Glacier Express Journey',
          description: 'Board the iconic Glacier Express for a scenic panoramic train journey through the Alps to St. Moritz.',
          activities: ['Glacier Express panoramic train', 'Alpine scenery photography']
        },
        {
          day: 7,
          title: 'Departure',
          description: 'Transfer to Zurich airport for your departure flight.',
          activities: ['Hotel check-out', 'Transfer to Zurich airport']
        }
      ],
      inclusions: [
        '6 nights accommodation',
        'Daily breakfast',
        'Glacier Express first-class tickets',
        'Gornergrat railway tickets',
        'All train transfers between cities',
        'English speaking tour manager'
      ],
      exclusions: [
        'International airfare',
        'Schengen visa fees',
        'Travel insurance',
        'Lunches and dinners unless specified',
        'Personal expenses & tipping'
      ],
      reviews: [
        {
          id: 'swiss-pkg2-rev1',
          author: 'Manish Agarwal',
          location: 'Mumbai',
          rating: 5,
          comment: 'The Glacier Express was the trip highlight - stunning views the entire journey. Worth every rupee.',
          date: '2023-09-19',
          avatarUrl: 'https://i.pravatar.cc/150?img=57'
        },
        {
          id: 'swiss-pkg2-rev2',
          author: 'Kavita Suri',
          location: 'Chandigarh',
          rating: 4,
          comment: 'Zermatt and the Matterhorn views were breathtaking. A slightly long trip but worth it.',
          date: '2023-08-30',
          avatarUrl: 'https://i.pravatar.cc/150?img=61'
        }
      ]
    }
  ],
  testimonials: [
    {
      id: 'switzerland-test-1',
      author: 'Rahul Bansal',
      role: 'Traveler from Delhi',
      quote: 'Switzerland is postcard-perfect everywhere you look. The Jungfraujoch trip was a dream come true.',
      avatarUrl: 'https://i.pravatar.cc/150?img=25',
      rating: 5
    },
    {
      id: 'switzerland-test-2',
      author: 'Manish Agarwal',
      role: 'Rail enthusiast',
      quote: 'The Glacier Express journey alone was worth the trip. An impeccably organized tour.',
      avatarUrl: 'https://i.pravatar.cc/150?img=57',
      rating: 5
    }
  ]
};

export default switzerland;
