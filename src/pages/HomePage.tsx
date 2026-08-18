import React from 'react';
import FeaturedTrendingSection from '../components/FeaturedTrendingSection';

const HomePage: React.FC = () => {
  return (
    <main className="page-container" data-testid="home-page">
      <FeaturedTrendingSection />
    </main>
  );
};

export default HomePage;
