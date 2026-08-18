import React from 'react';
import { Attraction } from '../../types/destination';
import styles from './AttractionCard.module.css';

export interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <div className={styles.card} data-testid="attraction-card">
      {attraction.imageUrl && (
        <img
          src={attraction.imageUrl}
          alt={attraction.name}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        <h3 className={styles.name}>{attraction.name}</h3>
        {attraction.category && (
          <span className={styles.category}>{attraction.category}</span>
        )}
        <p className={styles.description}>{attraction.description}</p>
      </div>
    </div>
  );
};

export default AttractionCard;
