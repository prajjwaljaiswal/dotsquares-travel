import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection(): JSX.Element {
  return (
    <section className={styles.hero} data-testid="about-hero-section">
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.tagline}>
        Crafting unforgettable journeys, one traveler at a time.
      </p>
    </section>
  );
}

export default HeroSection;
