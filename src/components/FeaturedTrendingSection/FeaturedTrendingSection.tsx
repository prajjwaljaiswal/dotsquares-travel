import PackageCard from '../PackageCard/PackageCard';
import { getFeaturedOrTrendingPackages } from '../../data/packages';
import './FeaturedTrendingSection.css';

interface FeaturedTrendingSectionProps {
  minimumCards?: number;
}

function FeaturedTrendingSection({ minimumCards = 6 }: FeaturedTrendingSectionProps) {
  const featuredPackages = getFeaturedOrTrendingPackages();
  const cardsToDisplay = featuredPackages.slice(0, Math.max(minimumCards, featuredPackages.length));

  return (
    <section className="featured-trending-section" aria-labelledby="featured-trending-heading">
      <div className="featured-trending-section__header">
        <h2 id="featured-trending-heading">Featured &amp; Trending Packages</h2>
        <p>Hand-picked getaways loved by our travelers</p>
      </div>
      <div className="featured-trending-section__grid" data-testid="featured-trending-grid">
        {cardsToDisplay.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedTrendingSection;
