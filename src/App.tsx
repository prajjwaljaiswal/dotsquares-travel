import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PackageDetailPage from './pages/PackageDetailPage';
import BookingPage from './pages/BookingPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/packages/:packageId" element={<PackageDetailPage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
};

export default App;
