export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Amelia Carter',
    location: 'Sydney, Australia',
    rating: 5,
    quote:
      'Booking with Dotsquares Travel made our honeymoon unforgettable. Every detail was perfectly planned!',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 't2',
    name: 'Rahul Mehta',
    location: 'Mumbai, India',
    rating: 4,
    quote:
      'Great deals and a super smooth booking experience. The support team was fantastic throughout our trip.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 't3',
    name: 'Sophie Turner',
    location: 'London, UK',
    rating: 5,
    quote:
      'The recommended itinerary took us to hidden gems we never would have found on our own. Absolutely loved it!',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    id: 't4',
    name: 'Diego Fernandez',
    location: 'Madrid, Spain',
    rating: 4,
    quote:
      'From flights to hotels, everything was seamless. We will definitely be booking our next adventure here.',
    avatar: 'https://i.pravatar.cc/150?img=15'
  }
]
