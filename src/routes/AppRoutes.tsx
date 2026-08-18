import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUs/AboutUsPage';
import ExplorePage from '../pages/Explore/ExplorePage';

function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="*" element={<Navigate to="/about" replace />} />
    </Routes>
  );
}

export default AppRoutes;
