import React from 'react';
import styles from './StorySection.module.css';

function StorySection(): JSX.Element {
  return (
    <section className={styles.story} data-testid="about-story-section">
      <h2 className={styles.heading}>Our Story</h2>
      <p className={styles.text}>
        Founded with a passion for exploration, Dotsquares Travel began as a
        small team of travel enthusiasts dedicated to helping people discover
        the world. Over the years, we have grown into a trusted travel
        partner, curating experiences that go beyond the ordinary.
      </p>
    </section>
  );
}

export default StorySection;
