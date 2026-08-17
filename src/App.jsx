import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import DestinationDetail from './pages/DestinationDetail.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations/:slug" element={<DestinationDetail />} />
    </Routes>
  );
}

export default App;
