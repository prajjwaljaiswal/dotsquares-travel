import React from 'react';
import { Link } from 'react-router-dom';
import { TravelPackage } from '../../data/packages';
import styles from './PackageCard.module.css';

export interface PackageCardProps {
  travelPackage: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ travelPackage }) => {
  const { id, title, destination, category, price, currency, imageUrl, rating } =
    travelPackage;

  return (
    <Link
      to={`/packages/${id}`}
      className={styles.card}
      data-testid="package-card"
      aria-label={`View details for ${title}`}
    >
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.destination}>{destination}</p>
        <div className={styles.footer}>
          <span className={styles.rating}>★ {rating.toFixed(1)}</span>
          <span className={styles.price}>
            {currency} {price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
