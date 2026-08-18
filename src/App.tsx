import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookingProvider } from './state/BookingContext';
import { PackageDetailPage } from './pages/PackageDetailPage';
import { BookingStep1 } from './pages/booking/BookingStep1';

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/packages/bali-adventure" replace />} />
          <Route path="/packages/:packageId" element={<PackageDetailPage />} />
          <Route path="/booking/step-1" element={<BookingStep1 />} />
          <Route path="*" element={<div style={{ padding: '2rem' }}>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;