export interface TravelPackage {
  id: string;
  name: string;
  destination: string;
  price: number;
  [key: string]: unknown;
}

export interface BookingStepData {
  [step: string]: Record<string, unknown>;
}
