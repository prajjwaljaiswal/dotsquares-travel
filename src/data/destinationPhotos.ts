export interface DestinationPhoto {
  id: string;
  url: string;
  thumbnailUrl: string;
  alt: string;
  caption: string;
}

/**
 * Demo stock images representing a destination's photo gallery.
 * Uses picsum.photos as a stable placeholder image source with
 * deterministic seeds so the same images render on every load.
 */
export const destinationPhotos: DestinationPhoto[] = [
  {
    id: 'photo-1',
    url: 'https://picsum.photos/seed/destination-1/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-1/400/300',
    alt: 'Scenic coastline at sunset',
    caption: 'Sunset over the coastline',
  },
  {
    id: 'photo-2',
    url: 'https://picsum.photos/seed/destination-2/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-2/400/300',
    alt: 'Historic old town streets',
    caption: 'Wandering the old town',
  },
  {
    id: 'photo-3',
    url: 'https://picsum.photos/seed/destination-3/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-3/400/300',
    alt: 'Mountain range at dawn',
    caption: 'Dawn over the mountains',
  },
  {
    id: 'photo-4',
    url: 'https://picsum.photos/seed/destination-4/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-4/400/300',
    alt: 'Local market with fresh produce',
    caption: 'The bustling local market',
  },
  {
    id: 'photo-5',
    url: 'https://picsum.photos/seed/destination-5/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-5/400/300',
    alt: 'Beachfront with turquoise water',
    caption: 'Turquoise waters at the beach',
  },
  {
    id: 'photo-6',
    url: 'https://picsum.photos/seed/destination-6/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-6/400/300',
    alt: 'City skyline at night',
    caption: 'City lights after dark',
  },
  {
    id: 'photo-7',
    url: 'https://picsum.photos/seed/destination-7/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-7/400/300',
    alt: 'Traditional architecture detail',
    caption: 'Details of traditional architecture',
  },
  {
    id: 'photo-8',
    url: 'https://picsum.photos/seed/destination-8/1200/800',
    thumbnailUrl: 'https://picsum.photos/seed/destination-8/400/300',
    alt: 'Forest trail in the hills',
    caption: 'A quiet trail through the hills',
  },
];
