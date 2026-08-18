import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDestinationBySlug, getPackageBySlug } from '../data/destinations/index';
import './PackageDetailPage.css';

function formatPrice(price, currency) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
}

function PackageDetailPage() {
  const { slug, packageSlug } = useParams();
  const destination = getDestinationBySlug(slug);
  const pkg = getPackageBySlug(slug, packageSlug);

  if (!destination || !pkg) {
    return (
      <div className="package-detail package-detail--not-found">
        <h1>Package not found</h1>
        <p>We could not find this travel package.</p>
        <Link to="/packages">Browse all packages</Link>
      </div>
    );
  }

  return (
    <div className="package-detail">
      <section
        className="package-detail__hero"
        style={{ backgroundImage: `url(${pkg.heroImageUrl})` }}
      >
        <div className="package-detail__hero-overlay">
          <p className="package-detail__breadcrumb">
            <Link to={`/destinations/${destination.slug}`}>{destination.name}</Link>
          </p>
          <h1>{pkg.name}</h1>
          <p className="package-detail__meta">
            {pkg.durationDays} Days / {pkg.durationNights} Nights &middot; {formatPrice(pkg.price, pkg.currency)}
          </p>
        </div>
      </section>

      <section className="package-detail__section">
        <p className="package-detail__summary">{pkg.summary}</p>
      </section>

      {pkg.highlights?.length > 0 && (
        <section className="package-detail__section">
          <h2>Highlights</h2>
          <ul className="package-detail__list">
            {pkg.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      {pkg.itinerary?.length > 0 && (
        <section className="package-detail__section">
          <h2>Itinerary</h2>
          <ol className="package-detail__itinerary">
            {pkg.itinerary.map((day) => (
              <li key={day.day} className="package-detail__itinerary-day">
                <h3>Day {day.day}: {day.title}</h3>
                <p>{day.description}</p>
                {day.activities?.length > 0 && (
                  <ul>
                    {day.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="package-detail__section package-detail__inclusions-grid">
        {pkg.inclusions?.length > 0 && (
          <div>
            <h2>Inclusions</h2>
            <ul className="package-detail__list package-detail__list--positive">
              {pkg.inclusions.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        )}
        {pkg.exclusions?.length > 0 && (
          <div>
            <h2>Exclusions</h2>
            <ul className="package-detail__list package-detail__list--negative">
              {pkg.exclusions.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {pkg.reviews?.length > 0 && (
        <section className="package-detail__section">
          <h2>Traveller Reviews</h2>
          <div className="package-detail__reviews">
            {pkg.reviews.map((review) => (
              <article key={review.id} className="review-card">
                <img src={review.avatarUrl} alt={review.author} className="review-card__avatar" />
                <div>
                  <p className="review-card__author">
                    {review.author}
                    {review.location ? ` · ${review.location}` : ''}
                  </p>
                  <p className="review-card__rating" aria-label={`${review.rating} out of 5 stars`}>
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </p>
                  <p className="review-card__comment">{review.comment}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default PackageDetailPage;
