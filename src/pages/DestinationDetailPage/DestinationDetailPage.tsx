import React from "react";
import { useParams, Link } from "react-router-dom";
import DestinationHero from "../../components/DestinationHero/DestinationHero";
import DestinationOverview from "../../components/DestinationOverview/DestinationOverview";
import AttractionsSection from "../../components/AttractionsSection/AttractionsSection";
import { getDestinationBySlug } from "../../data/destinations";
import styles from "./DestinationDetailPage.module.css";

const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  if (!destination) {
    return (
      <div className={styles.notFound} data-testid="destination-not-found">
        <h1>Destination not found</h1>
        <p>We couldn't find the destination you were looking for.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <main>
      <DestinationHero
        name={destination.name}
        tagline={destination.tagline}
        desktopImage={destination.heroImage.desktop}
        mobileImage={destination.heroImage.mobile}
        imageAlt={destination.heroImage.alt}
      />
      <DestinationOverview
        overview={destination.overview}
        highlights={destination.highlights}
      />
      {destination.attractions && (
        <AttractionsSection
          destinationName={destination.name}
          attractions={destination.attractions}
        />
      )}
    </main>
  );
};

export default DestinationDetailPage;