export interface Destination {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  overview: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'bali',
    name: 'Bali',
    tagline: 'Lush rice terraces, sacred temples and world-class surf breaks',
    heroImage:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Bali offers a mix of spiritual serenity and tropical adventure, from the emerald terraces of Ubud to the surf towns of Uluwatu and Canggu, all steeped in vibrant Balinese Hindu culture.',
    highlights: [
      'Explore the emerald rice terraces of Ubud',
      'Visit the sea temple of Tanah Lot',
      'Catch a wave at Uluwatu or Canggu',
      'Take part in a traditional Balinese purification ceremony',
    ],
  },
  {
    id: 'santorini',
    name: 'Santorini',
    tagline: 'Whitewashed cliffs above a sparkling Aegean caldera',
    heroImage:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Santorini is a volcanic island in the Cyclades group, famed for its dramatic caldera views, whitewashed villages perched on cliff edges, and some of the most spectacular sunsets in the world. It is the perfect blend of relaxation, history and romance.',
    highlights: [
      'Watch the sunset from Oia village',
      'Explore the black sand beaches of Kamari and Perissa',
      'Sample local wines at a cliffside winery',
      'Wander the ancient ruins of Akrotiri',
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    tagline: 'Timeless temples, tranquil gardens and cherry blossoms',
    heroImage:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Kyoto, the former imperial capital of Japan, is home to thousands of shrines and temples, traditional wooden machiya houses, and meticulously kept gardens. It offers an immersive glimpse into Japanese culture, from tea ceremonies to seasonal festivals.',
    highlights: [
      'Walk through the Fushimi Inari torii gate paths',
      'Visit the golden pavilion of Kinkaku-ji',
      'Stroll the Arashiyama bamboo grove',
      'Experience a traditional tea ceremony in Gion',
    ],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    tagline: 'A lost city high in the Andean mountains',
    heroImage:
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1600&q=80',
    overview:
      'Machu Picchu is a 15th-century Inca citadel set high in the Andes Mountains of Peru. Surrounded by dramatic peaks and cloud forest, it is one of the most iconic archaeological sites in the world and a bucket-list destination for adventurers and history lovers alike.',
    highlights: [
      'Hike the classic Inca Trail',
      'Watch sunrise over the ruins from the Sun Gate',
      'Explore the agricultural terraces and temples',
      'Visit the nearby town of Aguas Calientes',
    ],
  },
];

export function getDestinationById(id: string | undefined): Destination | undefined {
  if (!id) return undefined;
  return destinations.find((destination) => destination.id === id);
}