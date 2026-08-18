import React from 'react';
import styles from './TeamSection.module.css';

const TEAM_MEMBERS = [
  { name: 'Ava Thompson', role: 'Founder & CEO' },
  { name: 'Liam Carter', role: 'Head of Operations' },
  { name: 'Sofia Martinez', role: 'Lead Travel Consultant' },
  { name: 'Noah Bennett', role: 'Customer Experience Lead' },
];

function TeamSection(): JSX.Element {
  return (
    <section className={styles.team} data-testid="about-team-section">
      <h2 className={styles.heading}>Meet the Team</h2>
      <div className={styles.grid}>
        {TEAM_MEMBERS.map((member) => (
          <div className={styles.card} key={member.name}>
            <div className={styles.avatar} aria-hidden="true" />
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
