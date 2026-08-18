import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationHero from '../components/DestinationHero';
import { getDestinationById } from '../data/destinations';

function DestinationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const destination = getDestinationById(id);

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
    </main>
  );
}

export default DestinationDetailPage;
