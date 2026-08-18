import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Itinerary.css';

function Itinerary({ days }) {
  const [expandedDay, setExpandedDay] = useState(days.length > 0 ? days[0].day : null);

  const toggleDay = (day) => {
    setExpandedDay((current) => (current === day ? null : day));
  };

  const handleKeyDown = (event, day) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDay(day);
    }
  };

  if (!days || days.length === 0) {
    return (
      <section className="itinerary" aria-label="Itinerary">
        <h2 className="itinerary__heading">Itinerary</h2>
        <p className="itinerary__empty">No itinerary available for this package.</p>
      </section>
    );
  }

  return (
    <section className="itinerary" aria-label="Itinerary">
      <h2 className="itinerary__heading">Itinerary</h2>
      <div className="itinerary__list" role="tablist" aria-label="Day by day itinerary">
        {days.map(({ day, title, description }) => {
          const isExpanded = expandedDay === day;
          const panelId = `itinerary-panel-${day}`;
          const headerId = `itinerary-header-${day}`;

          return (
            <div
              key={day}
              className={`itinerary__item${isExpanded ? ' itinerary__item--active' : ''}`}
            >
              <button
                type="button"
                id={headerId}
                className="itinerary__header"
                role="tab"
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => toggleDay(day)}
                onKeyDown={(event) => handleKeyDown(event, day)}
              >
                <span className="itinerary__day-label">Day {day}</span>
                <span className="itinerary__title">{title}</span>
                <span className="itinerary__icon" aria-hidden="true">
                  {isExpanded ? '−' : '+'}
                </span>
              </button>
              <div
                id={panelId}
                role="tabpanel"
                aria-labelledby={headerId}
                className="itinerary__panel"
                hidden={!isExpanded}
              >
                {isExpanded && <p className="itinerary__description">{description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Itinerary.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

Itinerary.defaultProps = {
  days: [],
};

export default Itinerary;
