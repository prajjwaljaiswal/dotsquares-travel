export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  description: string;
  heroImageUrl: string;
  attractions: Attraction[];
}
