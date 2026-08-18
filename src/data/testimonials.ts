export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Mitchell',
    location: 'London, UK',
    rating: 5,
    quote:
      'Our trip to Bali was flawlessly organised from start to finish. Every detail was taken care of, and the recommendations were spot on!'
  },
  {
    id: 'testimonial-2',
    name: 'James Carter',
    location: 'New York, USA',
    rating: 5,
    quote:
      'The team helped us plan an unforgettable honeymoon in Santorini. The itinerary was perfect and the support was fantastic.'
  },
  {
    id: 'testimonial-3',
    name: 'Priya Nair',
    location: 'Mumbai, India',
    rating: 4,
    quote:
      'Booking our family safari was so easy. The guides were knowledgeable and the accommodations exceeded our expectations.'
  },
  {
    id: 'testimonial-4',
    name: 'Liam O\u2019Connor',
    location: 'Dublin, Ireland',
    rating: 5,
    quote:
      'From the flights to the local tours, everything was seamless. We will definitely be booking our next adventure with them.'
  },
  {
    id: 'testimonial-5',
    name: 'Hannah Schmidt',
    location: 'Berlin, Germany',
    rating: 4,
    quote:
      'A wonderful experience exploring Japan. The customer service team was responsive and helped us adjust our plans on the fly.'
  }
];
