import React from 'react';
import { Attraction } from '../../types/destination';
import styles from './AttractionCard.module.css';

export interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const { name, description, imageUrl, category } = attraction;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt={name} loading="lazy" />
        {category && <span className={styles.badge}>{category}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AttractionCard;
