import SearchWidget from '../SearchWidget/SearchWidget'
import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <section className="hero-banner" aria-label="DotSquares Travel hero">
      <div className="hero-banner__overlay" />
      <div className="hero-banner__content">
        <p className="hero-banner__eyebrow">DotSquares Travel</p>
        <h1 className="hero-banner__title">
          Discover Your Next Unforgettable Destination
        </h1>
        <p className="hero-banner__subtitle">
          Curated escapes, tailor-made itineraries and unbeatable deals — all
          in one place. Tell us where you want to go and we'll take care of
          the rest.
        </p>
        <SearchWidget />
      </div>
    </section>
  )
}
