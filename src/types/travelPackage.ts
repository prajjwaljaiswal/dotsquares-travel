export interface ChecklistItem {
  id: string;
  label: string;
}

export interface AccommodationDetail {
  id: string;
  name: string;
  type: string;
  description: string;
  icon: string;
}

export interface TransportDetail {
  id: string;
  mode: string;
  description: string;
  icon: string;
}

export interface ActivityDetail {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface TravelPackageDetails {
  inclusions: ChecklistItem[];
  exclusions: ChecklistItem[];
  accommodation: AccommodationDetail[];
  transport: TransportDetail[];
  activities: ActivityDetail[];
}

export interface TravelPackage {
  id: string;
  title: string;
  image: string;
  duration: string;
  rating: number;
  price: number;
  currency: string;
  location: string;
  featured: boolean;
  trending: boolean;
  description: string;
}