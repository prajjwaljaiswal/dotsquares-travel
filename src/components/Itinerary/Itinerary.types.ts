export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
  accommodation?: string;
  meals?: string[];
}

export interface ItineraryProps {
  days: ItineraryDay[];
  className?: string;
}