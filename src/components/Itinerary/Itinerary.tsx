'use client';

import { useState } from 'react';
import styles from './Itinerary.module.css';
import { itineraryData, ItineraryDay } from '../../data/itinerary';

export interface ItineraryProps {
  days?: ItineraryDay[];
}

export default function Itinerary({ days = itineraryData }: ItineraryProps) {
  const [openDay, setOpenDay] = useState<number | null>(
    days.length > 0 ? days[0].day : null
  );

  const toggleDay = (day: number) => {
    setOpenDay((current) => (current === day ? null : day));
  };

  if (days.length === 0) {
    return null;
  }

  return (
    <section className={styles.itinerary} aria-label="Day-by-day itinerary">
      <h2 className={styles.heading}>Day-by-Day Itinerary</h2>
      <div className={styles.list}>
        {days.map((item) => {
          const isOpen = openDay === item.day;
          const panelId = `itinerary-panel-${item.day}`;
          const headerId = `itinerary-header-${item.day}`;

          return (
            <div key={item.day} className={styles.item}>
              <button
                type="button"
                id={headerId}
                className={styles.header}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleDay(item.day)}
              >
                <span className={styles.dayLabel}>Day {item.day}</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.icon} aria-hidden="true">
                  {isOpen ? '\u2212' : '+'}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className={isOpen ? styles.panelOpen : styles.panelClosed}
              >
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
