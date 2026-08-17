import React from 'react';
import { packages } from '../data/packages';
import PackageCard from './PackageCard';
import './FeaturedTrendingSection.css';

const FeaturedTrendingSection: React.FC = () => {
  const featuredTrendingPackages = packages.filter(
    (pkg) => pkg.featured || pkg.trending
  );

  return (
    <section
      className="featured-trending-section"
      aria-labelledby="featured-trending-heading"
      data-testid="featured-trending-section"
    >
      <div className="featured-trending-section__header">
        <h2 id="featured-trending-heading" className="featured-trending-section__title">
          Featured &amp; Trending Packages
        </h2>
        <p className="featured-trending-section__subtitle">
          Handpicked travel experiences loved by our travelers
        </p>
      </div>
      <div className="featured-trending-section__grid" data-testid="featured-trending-grid">
        {featuredTrendingPackages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrendingSection;
