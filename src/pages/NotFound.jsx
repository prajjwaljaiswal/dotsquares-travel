import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="page page--not-found" role="main" aria-labelledby="not-found-heading">
      <section className="not-found">
        <p className="not-found__code">404</p>
        <h1 id="not-found-heading" className="not-found__title">
          Looks like you&rsquo;ve wandered off the map
        </h1>
        <p className="not-found__message">
          The page you&rsquo;re looking for doesn&rsquo;t exist, may have moved, or the link might be
          broken. Let&rsquo;s get you back on track for your next adventure.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary" data-testid="not-found-home-cta">
            Back to Homepage
          </Link>
          <Link to="/explore" className="btn btn--secondary" data-testid="not-found-explore-cta">
            Explore Destinations
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
