export interface PracticalInfo {
  bestTimeToVisit?: string;
  weatherNotes?: string;
  currency?: string;
  language?: string;
  timezone?: string;
  visaRequirements?: string;
  emergencyNumber?: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  practicalInfo?: PracticalInfo;
}
