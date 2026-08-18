import { useSearchParams, Link } from 'react-router-dom';

function Explore() {
  const [searchParams] = useSearchParams();

  const destination = searchParams.get('destination') || '';
  const startDate = searchParams.get('startDate') || '';
  const endDate = searchParams.get('endDate') || '';
  const travellers = searchParams.get('travellers') || '';
  const packageType = searchParams.get('packageType') || '';

  return (
    <main className="explore-page">
      <header className="explore-header">
        <Link to="/" className="explore-back-link">
          &larr; Back to home
        </Link>
        <h1>Explore Results</h1>
      </header>
      <section className="explore-summary" data-testid="explore-summary">
        <p>
          <strong>Destination:</strong> {destination || 'Anywhere'}
        </p>
        <p>
          <strong>Dates:</strong>{' '}
          {startDate && endDate ? `${startDate} - ${endDate}` : 'Flexible'}
        </p>
        <p>
          <strong>Travellers:</strong> {travellers || '1'}
        </p>
        <p>
          <strong>Package Type:</strong> {packageType || 'Any'}
        </p>
      </section>
    </main>
  );
}

export default Explore;