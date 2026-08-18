import React from 'react';
import { Attraction } from '../../types/destination';
import styles from './AttractionCard.module.css';

export interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <article className={styles.card} data-testid="attraction-card">
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={attraction.imageUrl}
          alt={attraction.name}
          loading="lazy"
        />
        {attraction.category && (
          <span className={styles.badge}>{attraction.category}</span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{attraction.name}</h3>
        <p className={styles.description}>{attraction.description}</p>
      </div>
    </article>
  );
};

export default AttractionCard;
