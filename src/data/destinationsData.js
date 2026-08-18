export const destinations = [
  {
    id: 'santorini',
    slug: 'santorini',
    name: 'Santorini, Greece',
    tagline: 'Whitewashed cliffs and endless Aegean sunsets.',
    heroImage:
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Perched on the edge of a dramatic volcanic caldera, Santorini pairs iconic blue-domed churches with world-class wineries and some of the most breathtaking sunsets on the planet. Wander cobblestone villages, sail the caldera at dawn, and unwind on unique black-sand beaches.',
    highlights: [
      'Sunset views over the caldera from Oia village',
      'Volcanic black and red sand beaches',
      'Family-run wineries with centuries-old vines',
      'Traditional cave houses turned boutique hotels',
    ],
  },
  {
    id: 'kyoto',
    slug: 'kyoto',
    name: 'Kyoto, Japan',
    tagline: 'Ancient temples wrapped in seasonal color.',
    heroImage:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Once the imperial capital of Japan, Kyoto is home to thousands of temples and shrines, immaculate gardens, and the geisha district of Gion. Every season transforms the city, from cherry blossoms in spring to fiery maple leaves in autumn.',
    highlights: [
      'Fushimi Inari Shrine and its thousands of torii gates',
      'Historic geisha district of Gion',
      'Arashiyama Bamboo Grove',
      'Traditional kaiseki dining experiences',
    ],
  },
  {
    id: 'banff',
    slug: 'banff',
    name: 'Banff, Canada',
    tagline: 'Turquoise lakes framed by towering peaks.',
    heroImage:
      'https://images.unsplash.com/photo-1465156799763-2c087c19bd1c?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Set deep in the Canadian Rockies, Banff National Park offers glacier-fed lakes, alpine meadows, and abundant wildlife. It is a year-round playground for hikers, skiers, and anyone chasing postcard-perfect mountain scenery.',
    highlights: [
      'Iconic turquoise waters of Lake Louise and Moraine Lake',
      'Gondola rides up Sulphur Mountain',
      'Wildlife spotting including elk and grizzly bears',
      'Hot springs with panoramic mountain views',
    ],
  },
];

export function getDestinationBySlug(slug) {
  return destinations.find((destination) => destination.slug === slug);
}
