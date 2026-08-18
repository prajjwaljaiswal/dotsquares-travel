import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations.js';
import './DestinationDetail.css';

function DestinationDetail() {
  const { slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <main className="destination-detail destination-detail--not-found">
        <h1>Destination not found</h1>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  const { name, image, description } = destination;

  return (
    <main className="destination-detail">
      <Link to="/" className="destination-detail__back">
        &larr; Back to Home
      </Link>
      <img className="destination-detail__image" src={image} alt={name} />
      <h1 className="destination-detail__title">{name}</h1>
      <p className="destination-detail__description">{description}</p>
    </main>
  );
}

export default DestinationDetail;
