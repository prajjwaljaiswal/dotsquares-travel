import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Explore from './pages/Explore'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './components/Gallery'
import { destinationPhotos } from './data/destinationPhotos'
import './App.css'

function DestinationDetail() {
  return (
    <div className="destination-detail">
      <header className="app__header">
        <h1>Destination Detail</h1>
      </header>
      <main className="app__main">
        <Gallery photos={destinationPhotos} title="Destination Photo Gallery" />
      </main>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<DestinationDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App