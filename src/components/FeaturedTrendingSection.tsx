import { FC } from 'react';
import PackageCard from './PackageCard';
import { getFeaturedOrTrendingPackages, TravelPackage } from '../data/packages';
import './FeaturedTrendingSection.css';

const FeaturedTrendingSection: FC = () => {
  const packages: TravelPackage[] = getFeaturedOrTrendingPackages();

  return (
    <section
      className="featured-trending-section"
      data-testid="featured-trending-section"
    >
      <div className="featured-trending-section__header">
        <h2>Featured & Trending Packages</h2>
        <p>Hand-picked getaways loved by travelers around the world</p>
      </div>
      <div
        className="featured-trending-section__grid"
        data-testid="package-grid"
      >
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrendingSection;