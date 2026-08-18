import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import PackagesPage from './pages/PackagesPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import PackageDetailPage from './pages/PackageDetailPage';
import About from './pages/About';
import Contact from './pages/Contact';

function NotFound() {
  return (
    <section style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    </section>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
        <Route path="/destinations/:slug/packages/:packageSlug" element={<PackageDetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
