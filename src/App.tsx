import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DestinationDetailPage from './pages/DestinationDetailPage';
import { destinations } from './data/destinations';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/destinations/${destinations[0].id}`} replace />}
        />
        <Route path="/destinations/:id" element={<DestinationDetailPage />} />
        <Route
          path="*"
          element={
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <h1>Page not found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;