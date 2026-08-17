import React from 'react';
import styles from './Inspiration.module.css';
import { inspirationOffers } from '../../data/inspiration';

const Inspiration: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="inspiration-heading">
      <div className={styles.container}>
        <h2 id="inspiration-heading" className={styles.heading}>
          Travel Inspiration &amp; Seasonal Offers
        </h2>
        <p className={styles.subheading}>
          Handpicked destinations and limited-time deals to spark your next adventure
        </p>
        <div className={styles.grid}>
          {inspirationOffers.map((offer) => (
            <article key={offer.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className={styles.image}
                  loading="lazy"
                />
                {offer.badge && <span className={styles.badge}>{offer.badge}</span>}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{offer.title}</h3>
                <p className={styles.description}>{offer.description}</p>
                <a href={offer.ctaUrl} className={styles.cta}>
                  {offer.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
