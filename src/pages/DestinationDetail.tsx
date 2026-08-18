import { Link, useParams } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './DestinationDetail.css'

function DestinationDetail() {
  const { id } = useParams<{ id: string }>()
  const destination = destinations.find((item) => item.id === id)

  if (!destination) {
    return (
      <main className="destination-detail destination-detail--not-found">
        <h1>Destination not found</h1>
        <Link to="/">Back to home</Link>
      </main>
    )
  }

  return (
    <main className="destination-detail">
      <Link to="/" className="destination-detail__back">
        &larr; Back to destinations
      </Link>
      <img
        src={destination.image}
        alt={destination.name}
        className="destination-detail__image"
      />
      <h1 className="destination-detail__name">{destination.name}</h1>
      <p className="destination-detail__teaser">{destination.teaser}</p>
      <p className="destination-detail__description">{destination.description}</p>
    </main>
  )
}

export default DestinationDetail
