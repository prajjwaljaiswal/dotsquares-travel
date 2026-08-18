import { inspirationOffers } from '../../data/inspiration'
import styles from './Inspiration.module.css'

const Inspiration = () => {
  return (
    <section className={styles.section} aria-labelledby="inspiration-heading">
      <div className={styles.header}>
        <h2 id="inspiration-heading" className={styles.heading}>
          Travel Inspiration
        </h2>
        <p className={styles.subheading}>
          Seasonal offers and curated ideas to spark your next journey.
        </p>
      </div>
      <div className={styles.grid}>
        {inspirationOffers.map((offer) => (
          <article key={offer.id} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${offer.image})` }}
              role="img"
              aria-label={offer.title}
            />
            <div className={styles.content}>
              <h3 className={styles.title}>{offer.title}</h3>
              <p className={styles.description}>{offer.description}</p>
              <a href={offer.ctaLink} className={styles.cta}>
                {offer.ctaLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Inspiration
