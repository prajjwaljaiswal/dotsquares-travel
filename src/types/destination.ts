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
  heroImageUrl: string;
  summary: string;
  attractions: Attraction[];
}
