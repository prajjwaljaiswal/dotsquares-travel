import React from 'react';
import styles from './ValuesSection.module.css';

const VALUES = [
  {
    title: 'Integrity',
    description: 'We build trust through transparency and honest advice.',
  },
  {
    title: 'Excellence',
    description: 'We strive to exceed expectations in every journey we plan.',
  },
  {
    title: 'Sustainability',
    description: 'We champion responsible travel that respects local communities.',
  },
  {
    title: 'Passion',
    description: 'We love travel, and it shows in everything we do.',
  },
];

function ValuesSection(): JSX.Element {
  return (
    <section className={styles.values} data-testid="about-values-section">
      <h2 className={styles.heading}>Our Values</h2>
      <div className={styles.grid}>
        {VALUES.map((value) => (
          <div className={styles.card} key={value.title}>
            <h3 className={styles.cardTitle}>{value.title}</h3>
            <p className={styles.cardText}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuesSection;
