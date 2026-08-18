import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DestinationDetail from './pages/DestinationDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations/:id" element={<DestinationDetail />} />
    </Routes>
  )
}

export default App
