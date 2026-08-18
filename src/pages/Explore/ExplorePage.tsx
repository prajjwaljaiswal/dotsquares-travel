import React from 'react';
import styles from './ExplorePage.module.css';

function ExplorePage(): JSX.Element {
  return (
    <main className={styles.explorePage} data-testid="explore-page">
      <h1 className={styles.title}>Explore Destinations &amp; Packages</h1>
      <p className={styles.subtitle}>
        Discover our curated destinations and travel packages tailored for
        you.
      </p>
    </main>
  );
}

export default ExplorePage;
