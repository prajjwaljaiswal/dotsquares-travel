import React from "react";
import styles from "./DestinationHero.module.css";

export interface DestinationHeroProps {
  name: string;
  tagline: string;
  desktopImage: string;
  mobileImage: string;
  imageAlt: string;
}

const DestinationHero: React.FC<DestinationHeroProps> = ({
  name,
  tagline,
  desktopImage,
  mobileImage,
  imageAlt,
}) => {
  return (
    <section className={styles.hero} data-testid="destination-hero">
      <picture className={styles.pictureWrapper}>
        <source media="(max-width: 767px)" srcSet={mobileImage} />
        <img src={desktopImage} alt={imageAlt} className={styles.heroImage} />
      </picture>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.tagline}>{tagline}</p>
      </div>
    </section>
  );
};

export default DestinationHero;
