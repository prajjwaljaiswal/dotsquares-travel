import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './PopularDestinations.css'

function PopularDestinations() {
  return (
    <section className="popular-destinations" aria-labelledby="popular-destinations-heading">
      <h2 id="popular-destinations-heading" className="popular-destinations__title">
        Popular Destinations
      </h2>
      <div className="popular-destinations__grid">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/destinations/${destination.id}`}
            className="destination-card"
            data-testid="destination-card"
          >
            <div className="destination-card__image-wrapper">
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-card__image"
                loading="lazy"
              />
            </div>
            <div className="destination-card__body">
              <h3 className="destination-card__name">{destination.name}</h3>
              <p className="destination-card__teaser">{destination.teaser}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PopularDestinations
