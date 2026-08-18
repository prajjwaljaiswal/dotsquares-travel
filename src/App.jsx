import { Navigate, Route, Routes } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/explore" replace />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes>
  );
}

export default App;
