import { Destination } from '../types/destination';

export const destinations: Destination[] = [
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    description: 'A tropical paradise known for its beaches, temples and rice terraces.',
    practicalInfo: {
      bestTimeToVisit: 'April to October',
      weatherNotes: 'Warm and humid year-round, with a dry season from April to October.',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian, Balinese',
      timezone: 'GMT+8 (WITA)',
      visaRequirements: 'Visa on arrival for most nationalities, valid for 30 days.',
      emergencyNumber: '112'
    }
  },
  {
    id: 'paris-france',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light, famous for its art, fashion and cuisine.',
    practicalInfo: {
      bestTimeToVisit: 'June to August, December for the holidays',
      currency: 'Euro (EUR)',
      language: 'French',
      emergencyNumber: '112'
    }
  },
  {
    id: 'reykjavik-iceland',
    name: 'Reykjavik',
    country: 'Iceland',
    description: 'Gateway to glaciers, volcanoes and the Northern Lights.',
    practicalInfo: {
      bestTimeToVisit: 'June to August for midnight sun, September to March for Northern Lights',
      weatherNotes: 'Cool summers, cold and windy winters with unpredictable weather.',
      currency: 'Icelandic Krona (ISK)',
      language: 'Icelandic'
    }
  },
  {
    id: 'machu-picchu-peru',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'An ancient Incan citadel set high in the Andes Mountains.',
    practicalInfo: undefined
  }
];
