const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    quote: 'Our trip was absolutely unforgettable. Every detail was perfectly planned!',
    rating: 5,
  },
  {
    name: 'James Smith',
    location: 'London, UK',
    quote: 'The best travel experience we have ever had. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    location: 'Madrid, Spain',
    quote: 'Professional service from start to finish. We will definitely book again.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section data-testid="section-testimonials" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-container">
        <h2 id="testimonials-heading">What Our Travelers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <p className="testimonial-quote">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="testimonial-author">
                <span className="testimonial-name">{testimonial.name}</span>
                <span className="testimonial-location">{testimonial.location}</span>
              </div>
              <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}