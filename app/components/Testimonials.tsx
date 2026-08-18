const testimonials = [
  { id: 1, name: 'Amelia R.', quote: 'The best travel planning experience I have ever had!' },
  { id: 2, name: 'James T.', quote: 'Booking was seamless and the deals were unbeatable.' }
];

export default function Testimonials() {
  return (
    <section data-testid="section-testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <h2 id="testimonials-heading">What Our Travelers Say</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', listStyle: 'none' }}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <blockquote>"{testimonial.quote}"</blockquote>
              <cite>{testimonial.name}</cite>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
