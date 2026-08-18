import React from 'react';
import styles from './MissionSection.module.css';

function MissionSection(): JSX.Element {
  return (
    <section className={styles.mission} data-testid="about-mission-section">
      <h2 className={styles.heading}>Our Mission</h2>
      <p className={styles.text}>
        Our mission is to make world-class travel experiences accessible to
        everyone by combining local expertise with seamless planning, so you
        can focus on making memories, not logistics.
      </p>
    </section>
  );
}

export default MissionSection;
