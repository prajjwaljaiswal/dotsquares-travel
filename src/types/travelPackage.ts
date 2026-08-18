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
