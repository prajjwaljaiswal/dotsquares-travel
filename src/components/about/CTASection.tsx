import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CTASection.module.css';

function CTASection(): JSX.Element {
  const navigate = useNavigate();

  const handleExploreClick = (): void => {
    navigate('/explore');
  };

  return (
    <section className={styles.cta} data-testid="about-cta-section">
      <h2 className={styles.heading}>Ready for Your Next Adventure?</h2>
      <p className={styles.text}>
        Browse our handpicked destinations and travel packages to find your
        perfect getaway.
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={handleExploreClick}
        data-testid="cta-explore-button"
      >
        Explore Destinations &amp; Packages
      </button>
    </section>
  );
}

export default CTASection;
