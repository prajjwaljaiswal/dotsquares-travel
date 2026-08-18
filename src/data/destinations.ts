export interface Destination {
  id: string
  name: string
  image: string
  teaser: string
  description: string
}

export const destinations: Destination[] = [
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80',
    teaser: 'Whitewashed cliffside villages overlooking the deep blue Aegean Sea.',
    description:
      'Santorini is famed for its dramatic caldera views, iconic blue-domed churches, and unforgettable sunsets over the Aegean Sea. Wander cobblestone paths in Oia and Fira, and sample volcanic-soil wines unique to the island.'
  },
  {
    id: 'kyoto',
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    teaser: 'Ancient temples, serene gardens, and cherry blossoms in bloom.',
    description:
      'Kyoto blends centuries-old temples and tranquil bamboo groves with vibrant seasonal festivals, offering a timeless glimpse into Japanese culture. Visit Fushimi Inari, Kinkaku-ji, and the Arashiyama bamboo forest.'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80',
    teaser: 'A lost Incan citadel high in the Andes mountains.',
    description:
      'Perched high above the Sacred Valley, Machu Picchu is one of the most iconic archaeological wonders of the ancient world. Trek the Inca Trail for a breathtaking sunrise arrival at the Sun Gate.'
  },
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    teaser: 'Lush rice terraces, sacred temples, and world-class surf breaks.',
    description:
      'Bali offers a mix of spiritual serenity and tropical adventure, from the emerald terraces of Ubud to the surf towns of Uluwatu and Canggu, all steeped in vibrant Balinese Hindu culture.'
  },
  {
    id: 'paris',
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    teaser: 'Iconic landmarks, world-class art, and charming cafe culture.',
    description:
      'The City of Light dazzles with the Eiffel Tower, the Louvre, and the Seine at sunset. Stroll historic arrondissements, sample fresh pastries, and soak in centuries of art and architecture.'
  },
  {
    id: 'cape-town',
    name: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a50fdb2409?w=800&q=80',
    teaser: 'Dramatic coastlines, Table Mountain views, and vibrant culture.',
    description:
      'Cape Town pairs natural beauty with rich history, from the cable car ride up Table Mountain to the penguins of Boulders Beach and the vineyards of nearby Stellenbosch.'
  },
  {
    id: 'new-york',
    name: 'New York City, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    teaser: 'The city that never sleeps, packed with energy and iconic sights.',
    description:
      'New York City offers unmatched energy, from the bright lights of Times Square to the calm of Central Park, world-renowned museums, and a skyline that defines the modern metropolis.'
  }
]
