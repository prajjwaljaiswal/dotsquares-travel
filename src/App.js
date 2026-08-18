import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DestinationDetailPage from './pages/DestinationDetailPage';
import { destinations } from './data/destinationsData';

function App() {
  const defaultSlug = destinations[0]?.slug ?? '';

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={`/destinations/${defaultSlug}`} replace />}
      />
      <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
      <Route
        path="*"
        element={<Navigate to={`/destinations/${defaultSlug}`} replace />}
      />
    </Routes>
  );
}

export default App;
