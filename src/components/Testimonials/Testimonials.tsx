import { FC } from 'react';
import StarRating from '../common/StarRating/StarRating';
import './Testimonials.css';

interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'jane-doe',
    name: 'Jane Doe',
    quote: 'An unforgettable experience from start to finish!',
    rating: 5,
    avatar: 'https://images.example.com/testimonials/jane.jpg',
  },
  {
    id: 'john-smith',
    name: 'John Smith',
    quote: 'Great value and outstanding customer service.',
    rating: 4.5,
    avatar: 'https://images.example.com/testimonials/john.jpg',
  },
  {
    id: 'mary-jones',
    name: 'Mary Jones',
    quote: 'Everything was seamless, from booking to the trip itself.',
    rating: 5,
    avatar: 'https://images.example.com/testimonials/mary.jpg',
  },
];

const Testimonials: FC = () => {
  return (
    <section className="testimonials" data-testid="testimonials-section">
      <div className="testimonials__header">
        <h2>What Our Travelers Say</h2>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <div
            className="testimonials__card"
            key={testimonial.id}
            data-testid="testimonial-card"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="testimonials__avatar"
            />
            <p className="testimonials__quote">&quot;{testimonial.quote}&quot;</p>
            <StarRating rating={testimonial.rating} />
            <p className="testimonials__name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
