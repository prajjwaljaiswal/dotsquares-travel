import { Attraction } from '../types/destination';

export const attractionsByDestination: Record<string, Attraction[]> = {
  paris: [
    {
      id: 'eiffel-tower',
      name: 'Eiffel Tower',
      description: 'Iconic iron lattice tower offering breathtaking views over the city of Paris.',
      imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',
      category: 'Landmark',
    },
    {
      id: 'louvre-museum',
      name: 'Louvre Museum',
      description: 'World-renowned art museum home to the Mona Lisa and thousands of masterpieces.',
      imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600',
      category: 'Museum',
    },
    {
      id: 'notre-dame',
      name: 'Notre-Dame Cathedral',
      description: 'Historic Gothic cathedral renowned for its architecture and stained glass windows.',
      imageUrl: 'https://images.unsplash.com/photo-1541791096019-58b4c88bafa4?w=600',
      category: 'Historic Site',
    },
    {
      id: 'montmartre',
      name: 'Montmartre',
      description: 'Charming hilltop district known for artists, cafes, and the Sacre-Coeur Basilica.',
      imageUrl: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=600',
      category: 'Neighborhood',
    },
  ],
  rome: [
    {
      id: 'colosseum',
      name: 'Colosseum',
      description: 'Ancient amphitheater and one of the greatest works of Roman architecture.',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600',
      category: 'Landmark',
    },
    {
      id: 'vatican-museums',
      name: 'Vatican Museums',
      description: 'Extensive art collection including the Sistine Chapel ceiling by Michelangelo.',
      imageUrl: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600',
      category: 'Museum',
    },
    {
      id: 'trevi-fountain',
      name: 'Trevi Fountain',
      description: 'Baroque fountain famous for its coin-tossing tradition and stunning sculptures.',
      imageUrl: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=600',
      category: 'Landmark',
    },
  ],
  bali: [
    {
      id: 'ubud-monkey-forest',
      name: 'Ubud Monkey Forest',
      description: 'Sacred sanctuary and natural forest home to hundreds of long-tailed macaques.',
      imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600',
      category: 'Nature',
    },
    {
      id: 'tanah-lot',
      name: 'Tanah Lot Temple',
      description: 'Iconic sea temple perched on a rocky outcrop, famous for stunning sunsets.',
      imageUrl: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600',
      category: 'Temple',
    },
    {
      id: 'rice-terraces',
      name: 'Tegallalang Rice Terraces',
      description: 'Scenic stepped rice paddies showcasing traditional Balinese irrigation.',
      imageUrl: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600',
      category: 'Nature',
    },
  ],
};

export function getAttractionsForDestination(slug: string): Attraction[] {
  return attractionsByDestination[slug] ?? [];
}
