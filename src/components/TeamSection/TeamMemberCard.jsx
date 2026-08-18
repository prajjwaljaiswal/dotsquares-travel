import React from 'react';
import PropTypes from 'prop-types';
import './TeamMemberCard.css';

function TeamMemberCard({ name, role, bio, photo }) {
  return (
    <div className="team-member-card">
      <div className="team-member-card__photo-wrapper">
        <img
          className="team-member-card__photo"
          src={photo}
          alt={`Portrait of ${name}`}
          loading="lazy"
        />
      </div>
      <div className="team-member-card__content">
        <h3 className="team-member-card__name">{name}</h3>
        <p className="team-member-card__role">{role}</p>
        <p className="team-member-card__bio">{bio}</p>
      </div>
    </div>
  );
}

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default TeamMemberCard;
