export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  category?: string;
}

export interface PracticalInfo {
  bestTimeToVisit?: string;
  weatherNotes?: string;
  currency?: string;
  language?: string;
  timezone?: string;
  visaRequirements?: string;
  localCustoms?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  imageUrl?: string;
  attractions: Attraction[];
  practicalInfo?: PracticalInfo;
}
