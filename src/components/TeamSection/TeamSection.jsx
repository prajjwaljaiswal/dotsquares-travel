import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import teamMembers from '../../data/teamMembers';
import './TeamSection.css';

function TeamSection() {
  return (
    <section className="team-section" aria-labelledby="team-section-heading">
      <div className="team-section__header">
        <h2 id="team-section-heading" className="team-section__title">
          Meet Our Travel Experts
        </h2>
        <p className="team-section__subtitle">
          Our passionate team of travel specialists is here to design your
          perfect trip, backed by years of first-hand experience around the
          globe.
        </p>
      </div>
      <div className="team-section__grid">
        {teamMembers.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
            photo={member.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
