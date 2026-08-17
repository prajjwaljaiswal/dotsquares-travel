import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import Booking from './pages/Booking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages/:id" element={<PackageDetail />} />
      <Route path="/booking/:packageId" element={<Booking />} />
    </Routes>
  );
}

export default App;
