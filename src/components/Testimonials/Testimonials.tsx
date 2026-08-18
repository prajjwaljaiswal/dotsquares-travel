import { testimonials } from '../../data/testimonials'
import StarRating from '../common/StarRating/StarRating'
import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.header}>
        <h2 id="testimonials-heading" className={styles.heading}>
          What Our Travelers Say
        </h2>
        <p className={styles.subheading}>
          Real stories from real travelers who explored the world with us.
        </p>
      </div>
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.card}>
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className={styles.avatar}
              loading="lazy"
            />
            <StarRating rating={testimonial.rating} />
            <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
            <div className={styles.author}>
              <span className={styles.name}>{testimonial.name}</span>
              <span className={styles.location}>{testimonial.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
