import React from 'react';
import './MapContainer.css';

/**
 * MapContainer
 * ------------------------------------------------------------------
 * PLACEHOLDER COMPONENT
 * ------------------------------------------------------------------
 * This is a STATIC placeholder for the future interactive map
 * feature on the Destination Detail Page.
 *
 * It currently renders a styled div (no real map/tile rendering)
 * but exposes the exact interface (lat, lng, locationLabel) that
 * a future real map integration (e.g. Google Maps, Mapbox, Leaflet)
 * will need. When the real map API is integrated, this component's
 * internals can be swapped out without changing the props contract
 * consumed by parent pages.
 *
 * TODO (future work, not part of this task):
 *  - Replace static placeholder markup with actual map SDK/library
 *  - Use `lat` / `lng` to center the real map and place a marker
 *  - Consider adding `zoom`, `markerLabel`, `onMarkerClick` props
 */
export interface MapContainerProps {
  /** Latitude of the destination location */
  lat: number;
  /** Longitude of the destination location */
  lng: number;
  /** Human readable label shown alongside the map placeholder */
  locationLabel: string;
  /** Optional className to allow layout customization from parent */
  className?: string;
}

const MapContainer: React.FC<MapContainerProps> = ({
  lat,
  lng,
  locationLabel,
  className = '',
}) => {
  return (
    <div
      className={`map-container-placeholder ${className}`.trim()}
      data-testid="map-container-placeholder"
      role="img"
      aria-label={`Map placeholder for ${locationLabel}`}
    >
      {/* Static placeholder visual - to be replaced by a real map render */}
      <div className="map-container-placeholder__overlay">
        <span className="map-container-placeholder__icon" aria-hidden="true">
          📍
        </span>
        <p className="map-container-placeholder__label">{locationLabel}</p>
        <p className="map-container-placeholder__coords">
          Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}
        </p>
        <p className="map-container-placeholder__notice">
          Map preview coming soon
        </p>
      </div>
    </div>
  );
};

export default MapContainer;
