import React from 'react';
import Gallery from './components/Gallery';
import { destinationPhotos } from './data/destinationPhotos';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Destination Detail</h1>
      </header>
      <main className="app__main">
        <Gallery photos={destinationPhotos} title="Destination Photo Gallery" />
      </main>
    </div>
  );
}

export default App;
