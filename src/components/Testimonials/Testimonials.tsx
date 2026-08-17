import React from 'react';
import styles from './Testimonials.module.css';
import { testimonials } from '../../data/testimonials';
import StarRating from '../common/StarRating/StarRating';

const Testimonials: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        <h2 id="testimonials-heading" className={styles.heading}>
          What Our Travelers Say
        </h2>
        <p className={styles.subheading}>
          Real stories from travelers who explored the world with us
        </p>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <img
                  src={testimonial.avatarUrl}
                  alt={`${testimonial.name} avatar`}
                  className={styles.avatar}
                  loading="lazy"
                />
                <div className={styles.identity}>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  {testimonial.location && (
                    <p className={styles.location}>{testimonial.location}</p>
                  )}
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
