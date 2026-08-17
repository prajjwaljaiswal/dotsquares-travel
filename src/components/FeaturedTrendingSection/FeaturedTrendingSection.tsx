import React from 'react';
import PackageCard from '../PackageCard/PackageCard';
import { getFeaturedOrTrendingPackages } from '../../data/packages';
import './FeaturedTrendingSection.css';

const FeaturedTrendingSection: React.FC = () => {
  const packages = getFeaturedOrTrendingPackages();

  return (
    <section className="featured-trending-section" aria-label="Featured and trending packages">
      <div className="featured-trending-section__header">
        <h2 className="featured-trending-section__title">Featured &amp; Trending Packages</h2>
        <p className="featured-trending-section__subtitle">
          Handpicked getaways loved by travelers around the world.
        </p>
      </div>
      <div className="featured-trending-section__grid" data-testid="featured-trending-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrendingSection;
