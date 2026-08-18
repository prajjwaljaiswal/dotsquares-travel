import { Routes, Route, Navigate } from 'react-router-dom';
import { PackageDetailPage } from './pages/PackageDetailPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/packages/bali-adventure" replace />} />
      <Route path="/packages/:packageId" element={<PackageDetailPage />} />
      <Route path="*" element={<div style={{ padding: '2rem' }}>Page not found</div>} />
    </Routes>
  );
}