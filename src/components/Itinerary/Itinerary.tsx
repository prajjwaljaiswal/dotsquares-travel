'use client';

import { useState, useId } from 'react';
import { TabList, Tab, TabPanel } from '../Tabs/Tabs';
import styles from './Itinerary.module.css';
import { itineraryData, ItineraryDay } from '../../data/itinerary';

export interface ItineraryProps {
  days?: ItineraryDay[];
}

export default function Itinerary({ days = itineraryData, className = '' }: ItineraryProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [openDays, setOpenDays] = useState<Set<number>>(new Set([0]));
  const baseId = useId();
  
  const toggleDay = (dayIndex: number) => {
    setOpenDays(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dayIndex)) {
        newSet.delete(dayIndex);
      } else {
        newSet.add(dayIndex);
      }
      return newSet;
    });
  };
  
  const handleTabChange = (index: number) => {
    setActiveDay(index);
  };
  
  const renderDayContent = (day: ItineraryDay) => (
    <div className={styles.dayContent}>
      <h3 className={styles.dayTitle}>{day.title}</h3>
      <p className={styles.dayDescription}>{day.description}</p>
      
      {day.activities && day.activities.length > 0 && (
        <div className={styles.activitiesSection}>
          <h4 className={styles.activitiesHeading}>Activities</h4>
          <ul className={styles.activitiesList}>
            {day.activities.map((activity, index) => (
              <li key={index} className={styles.activityItem}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {day.accommodation && (
        <div className={styles.accommodationSection}>
          <h4 className={styles.accommodationHeading}>Accommodation</h4>
          <p className={styles.accommodationText}>{day.accommodation}</p>
        </div>
      )}
      
      {day.meals && day.meals.length > 0 && (
        <div className={styles.mealsSection}>
          <h4 className={styles.mealsHeading}>Meals</h4>
          <p className={styles.mealsText}>{day.meals.join(', ')}</p>
        </div>
      )}
    </div>
  );
  
  if (days.length === 0) {
    return null;
  }

  return (
    <section className={`${styles.itinerary} ${className}`} aria-label="Day-by-day itinerary">
      <h2 className={styles.heading}>Day-by-Day Itinerary</h2>
      
      {/* Desktop Tabs */}
      <div className={styles.desktopTabs}>
        <TabList activeIndex={activeDay} onChange={handleTabChange}>
          {days.map((day, index) => (
            <Tab key={`tab-${day.day}`} id={`${baseId}-tab-${index}`}>
              Day {day.day}
            </Tab>
          ))}
        </TabList>
        
        {days.map((day, index) => (
          <TabPanel
            key={`panel-${day.day}`}
            id={`${baseId}-panel-${index}`}
            active={activeDay === index}
          >
            {renderDayContent(day)}
          </TabPanel>
        ))}
      </div>
      
      {/* Mobile Accordion */}
      <div className={styles.mobileAccordion}>
        {days.map((day, index) => {
          const isOpen = openDays.has(index);
          return (
            <div key={`accordion-${day.day}`} className={styles.accordionItem}>
              <button
                type="button"
                className={styles.accordionButton}
                onClick={() => toggleDay(index)}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-accordion-${index}`}
              >
                <span className={styles.accordionTitle}>
                  Day {day.day}: {day.title}
                </span>
                <span className={styles.accordionIcon} aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {isOpen && (
                <div
                  id={`${baseId}-accordion-${index}`}
                  className={styles.accordionContent}
                >
                  {renderDayContent(day)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}