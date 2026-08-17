import React from "react";
import styles from "./DestinationOverview.module.css";

export interface DestinationOverviewProps {
  overview: string;
  highlights: string[];
}

const DestinationOverview: React.FC<DestinationOverviewProps> = ({
  overview,
  highlights,
}) => {
  return (
    <section
      className={styles.overviewSection}
      data-testid="destination-overview"
    >
      <div className={styles.overviewText}>
        <h2 className={styles.heading}>Overview</h2>
        <p className={styles.description}>{overview}</p>
      </div>
      <div className={styles.highlightsBlock}>
        <h3 className={styles.subHeading}>Highlights</h3>
        <ul className={styles.highlightsList}>
          {highlights.map((highlight) => (
            <li key={highlight} className={styles.highlightItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DestinationOverview;
