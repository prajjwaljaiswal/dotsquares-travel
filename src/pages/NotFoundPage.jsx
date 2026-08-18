import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <main className="not-found" role="main" aria-labelledby="not-found-title">
      <div className="not-found__content">
        <p className="not-found__code">404</p>
        <h1 id="not-found-title" className="not-found__title">
          Looks like you've wandered off the map
        </h1>
        <p className="not-found__message">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track for your next adventure.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Back to Homepage
          </Link>
          <Link to="/explore" className="btn btn--secondary">
            Explore Destinations
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFoundPage;
