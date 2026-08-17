import React from 'react';
import Gallery from './components/Gallery/Gallery';
import { destinationPhotos } from './data/destinationPhotos';

const App: React.FC = () => {
  return (
    <main className="page">
      <h1 className="page__title">Santorini, Greece</h1>
      <p className="page__subtitle">
        Explore photos from this destination. Tap any image to view it in full size.
      </p>
      <Gallery photos={destinationPhotos} title="Destination photos" />
    </main>
  );
};

export default App;
