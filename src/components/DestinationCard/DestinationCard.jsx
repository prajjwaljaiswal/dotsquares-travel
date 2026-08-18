import { Link } from 'react-router-dom';
import './DestinationCard.css';

function DestinationCard({ destination }) {
  const { slug, name, image, teaser } = destination;

  return (
    <Link
      to={`/destinations/${slug}`}
      className="destination-card"
      data-testid="destination-card"
    >
      <div className="destination-card__image-wrapper">
        <img
          className="destination-card__image"
          src={image}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="destination-card__body">
        <h3 className="destination-card__name">{name}</h3>
        <p className="destination-card__teaser">{teaser}</p>
      </div>
    </Link>
  );
}

export default DestinationCard;
