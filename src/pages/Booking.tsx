import { useParams, Link } from 'react-router-dom';
import { getPackageById } from '../data/packages';
import './Booking.css';

function Booking() {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packageId ? getPackageById(packageId) : undefined;

  if (!pkg) {
    return (
      <main className="booking-page">
        <p>We could not find the package you want to book.</p>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="booking-page">
      <Link className="booking-page__back" to={`/packages/${pkg.id}`}>
        &larr; Back to package details
      </Link>
      <h1>Book Your Trip</h1>
      <div className="booking-page__summary" data-testid="booking-summary">
        <img className="booking-page__image" src={pkg.image} alt={pkg.title} />
        <div>
          <h2>{pkg.title}</h2>
          <p>{pkg.location}</p>
          <p>{pkg.duration}</p>
          <p>
            {pkg.currency} {pkg.price.toLocaleString()} per person
          </p>
        </div>
      </div>
      <form className="booking-page__form">
        <label htmlFor="travelers">Number of Travelers</label>
        <input id="travelers" name="travelers" type="number" min={1} defaultValue={1} />

        <label htmlFor="travel-date">Preferred Travel Date</label>
        <input id="travel-date" name="travel-date" type="date" />

        <button type="submit" className="booking-page__submit-btn">
          Confirm Booking
        </button>
      </form>
    </main>
  );
}

export default Booking;
