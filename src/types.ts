/**
 * Demo Data Schema
 * ------------------------------------------------------------------
 * These interfaces define the shape of all demo/mock data used across
 * the application. The structure intentionally mirrors what a future
 * real API response would look like, so that swapping mock data for
 * live API calls requires minimal refactoring.
 *
 * Conventions:
 * - Required fields represent data guaranteed to exist for the demo.
 * - Optional fields (`?`) represent fields that may not be populated
 *   in the current demo dataset but are expected to exist once a real
 *   API is introduced (extensibility placeholders).
 * - All entities that can be listed/paginated include an `id` and
 *   `slug` for routing purposes.
 */

/** Generic image reference used across entities. */
export interface Image {
  /** Absolute or relative URL to the image asset. */
  url: string;
  /** Accessible alt text describing the image. */
  alt: string;
  /** Optional width in pixels, useful for layout/CLS optimization. */
  width?: number;
  /** Optional height in pixels, useful for layout/CLS optimization. */
  height?: number;
  /** Optional caption displayed alongside the image. */
  caption?: string;
  /** Marks the primary/hero image within a gallery. */
  isPrimary?: boolean;
}

/** Represents a monetary amount with currency context. */
export interface Money {
  /** Numeric amount (in the smallest common unit for the currency, e.g. dollars). */
  amount: number;
  /** ISO 4217 currency code, e.g. "USD". Defaults to "USD" if omitted. */
  currency?: string;
  /** Optional original/pre-discount amount for displaying strikethrough pricing. */
  originalAmount?: number;
  /** Optional unit the price applies to, e.g. "per person", "per night". */
  unit?: string;
}

/** Aggregate rating information for an entity. */
export interface Rating {
  /** Average rating value, typically 0-5. */
  average: number;
  /** Total number of ratings/reviews contributing to the average. */
  count: number;
  /** Optional maximum possible rating value (defaults to 5). */
  max?: number;
}

/** A single inclusion or exclusion line item for a package. */
export interface InclusionItem {
  /** Unique identifier for the item within its list. */
  id: string;
  /** Human-readable description of what is included/excluded. */
  label: string;
  /** Optional icon identifier for UI rendering (e.g. icon library key). */
  icon?: string;
}

/** Physical address, used by team members, offices, or destinations. */
export interface Address {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

/** Contact details, reusable across team members and booking contacts. */
export interface ContactInfo {
  email?: string;
  phone?: string;
  website?: string;
}

/** Common metadata fields that may be present once backed by a real API. */
export interface EntityMetadata {
  createdAt?: string;
  updatedAt?: string;
  /** SEO meta title override. */
  seoTitle?: string;
  /** SEO meta description override. */
  seoDescription?: string;
  /** Arbitrary key/value tags for filtering/search. */
  tags?: string[];
}

/**
 * A travel destination (e.g. a city, region, or country) that can be
 * associated with one or more packages.
 */
export interface Destination {
  id: string;
  slug: string;
  name: string;
  /** Short one-line description used in cards/listings. */
  shortDescription: string;
  /** Full descriptive content, may contain markdown/HTML. */
  description: string;
  country: string;
  region?: string;
  images: Image[];
  rating?: Rating;
  /** Best season/months to visit, e.g. "Oct - Mar". */
  bestTimeToVisit?: string;
  /** Approximate starting price for trips to this destination. */
  startingPrice?: Money;
  /** IDs of packages available for this destination. */
  packageIds?: string[];
  /** Highlighted points of interest. */
  highlights?: string[];
  /** Geo-coordinates for map rendering. */
  location?: {
    latitude: number;
    longitude: number;
  };
  isFeatured?: boolean;
  metadata?: EntityMetadata;
}

/** A single day within a package's itinerary. */
export interface ItineraryDay {
  /** Day number, 1-indexed. */
  day: number;
  /** Short title for the day, e.g. "Arrival in Bali". */
  title: string;
  /** Detailed description of activities for the day. */
  description: string;
  /** Optional images specific to this day's activities. */
  images?: Image[];
  /** Meals included this day, e.g. ["Breakfast", "Dinner"]. */
  meals?: string[];
  /** Accommodation name/details for the night of this day. */
  accommodation?: string;
  /** Primary mode of transport used this day, e.g. "Private Van". */
  transport?: string;
  /** Notable activities/stops during the day. */
  activities?: string[];
}

/** A customer review left for a package or destination. */
export interface Review {
  id: string;
  /** Name of the reviewer. */
  authorName: string;
  /** Optional avatar image for the reviewer. */
  authorImage?: Image;
  /** Rating given by the reviewer, typically 0-5. */
  rating: number;
  /** Review headline/title. */
  title?: string;
  /** Full review text/comment. */
  comment: string;
  /** ISO date string of when the review was submitted. */
  date: string;
  /** ID of the package/destination this review pertains to. */
  relatedEntityId?: string;
  /** Whether the review has been verified as a genuine booking. */
  isVerified?: boolean;
  /** Number of users who found this review helpful. */
  helpfulCount?: number;
}

/** A curated testimonial, typically featured on the homepage. */
export interface Testimonial {
  id: string;
  authorName: string;
  authorImage?: Image;
  /** Role/title of the author, e.g. "Travel Blogger". */
  authorRole?: string;
  /** Short quote/testimonial text. */
  quote: string;
  rating?: number;
  /** ID of the package/destination this testimonial relates to. */
  relatedEntityId?: string;
  isFeatured?: boolean;
}

/** A member of the company's team, shown on the About page. */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: Image;
  contact?: ContactInfo;
  /** Social media links keyed by platform name. */
  socialLinks?: Record<string, string>;
  yearsOfExperience?: number;
  isLeadership?: boolean;
}

/** A frequently asked question, optionally scoped to a category or entity. */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  /** Grouping category, e.g. "Booking", "Payments", "Visa". */
  category?: string;
  /** ID of a related package/destination if scoped. */
  relatedEntityId?: string;
  /** Display order/priority within its category. */
  order?: number;
}

/** Status of a booking within its lifecycle. */
export type BookingStatus =
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed';

/** Payment status associated with a booking. */
export type PaymentStatus = 'unpaid' | 'partial' | 'paid' | 'refunded';

/** A single traveler entry within a booking. */
export interface Traveler {
  id: string;
  fullName: string;
  age?: number;
  passportNumber?: string;
  isPrimaryContact?: boolean;
}

/** A customer booking for a specific package. */
export interface Booking {
  id: string;
  /** ID of the booked package. */
  packageId: string;
  /** Human-readable booking reference code, e.g. "BK-2024-0001". */
  reference: string;
  travelers: Traveler[];
  /** ISO date string for the trip start date. */
  startDate: string;
  /** ISO date string for the trip end date. */
  endDate: string;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  totalPrice: Money;
  /** Amount already paid towards the total price. */
  amountPaid?: Money;
  contact?: ContactInfo;
  /** Free-text special requests from the customer. */
  specialRequests?: string;
  createdAt?: string;
  updatedAt?: string;
}

/** Category/type of a travel package, useful for filtering. */
export type PackageCategory =
  | 'adventure'
  | 'family'
  | 'luxury'
  | 'honeymoon'
  | 'cultural'
  | 'wildlife'
  | 'beach'
  | 'cruise'
  | 'group'
  | 'custom';

/** Difficulty level for adventure/trekking-style packages. */
export type DifficultyLevel = 'easy' | 'moderate' | 'challenging' | 'difficult';

/**
 * A bookable travel package, the core sellable entity of the platform.
 */
export interface Package {
  id: string;
  slug: string;
  title: string;
  /** Short one-line description used in cards/listings. */
  shortDescription: string;
  /** Full descriptive content, may contain markdown/HTML. */
  description: string;
  images: Image[];
  /** ID of the primary destination this package belongs to. */
  destinationId: string;
  /** IDs of additional destinations covered (multi-destination trips). */
  additionalDestinationIds?: string[];
  category?: PackageCategory;
  difficultyLevel?: DifficultyLevel;
  /** Duration in days, e.g. 7. */
  durationDays: number;
  /** Duration in nights, e.g. 6. */
  durationNights: number;
  price: Money;
  rating?: Rating;
  itinerary?: ItineraryDay[];
  inclusions?: InclusionItem[];
  exclusions?: InclusionItem[];
  reviews?: Review[];
  /** Maximum group size supported for this package. */
  maxGroupSize?: number;
  /** Minimum age requirement for travelers. */
  minAge?: number;
  /** Available departure dates, ISO date strings. */
  availableDates?: string[];
  /** Highlighted selling points shown as bullet list. */
  highlights?: string[];
  /** Things travelers need to bring/prepare. */
  thingsToCarry?: string[];
  isFeatured?: boolean;
  /** Whether the package currently has availability for booking. */
  isAvailable?: boolean;
  metadata?: EntityMetadata;
}
