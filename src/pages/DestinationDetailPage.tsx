import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationHero from '../components/DestinationHero';
import DestinationOverview from '../components/DestinationOverview';
import { getDestinationBySlug } from '../data/destinations';

function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Destination not found</h1>
      </div>
    );
  }

  return (
    <main>
      <DestinationHero destination={destination} />
      <DestinationOverview destination={destination} />
    </main>
  );
}

export default DestinationDetailPage;