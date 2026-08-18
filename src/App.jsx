import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
