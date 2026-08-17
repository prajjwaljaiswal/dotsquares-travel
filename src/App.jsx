import { Navigate, Route, Routes } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/explore" replace />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes>
  );
}
