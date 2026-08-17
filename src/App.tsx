import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DestinationDetailPage from "./pages/DestinationDetailPage/DestinationDetailPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/destinations/bali" replace />} />
      <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
    </Routes>
  );
};

export default App;
