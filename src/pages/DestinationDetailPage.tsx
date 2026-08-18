import React from 'react';
import MapContainer from '../components/MapContainer';

/**
 * DestinationDetailPage
 * ------------------------------------------------------------------
 * Renders the destination detail view, including a map section.
 *
 * NOTE: The map section currently uses the MapContainer PLACEHOLDER
 * component (see src/components/MapContainer.tsx). It does not render
 * a real interactive map yet — it is a static visual placeholder with
 * an interface (lat/lng/locationLabel) ready for future map API
 * integration.
 */
export interface DestinationDetailPageProps {
  destinationName: string;
  lat: number;
  lng: number;
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destinationName,
  lat,
  lng,
}) => {
  return (
    <div className="destination-detail-page">
      <h1 className="destination-detail-page__title">{destinationName}</h1>

      <section
        className="destination-detail-page__map-section"
        aria-label="Destination map section"
      >
        <h2 className="destination-detail-page__section-heading">
          Location
        </h2>
        {/* Placeholder map section - real map integration pending */}
        <MapContainer lat={lat} lng={lng} locationLabel={destinationName} />
      </section>
    </div>
  );
};

export default DestinationDetailPage;
