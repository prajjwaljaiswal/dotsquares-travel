import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
