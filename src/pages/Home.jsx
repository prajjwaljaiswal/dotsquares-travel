import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="page page--home">
      <section className="hero">
        <h1>Dotsquares Travel</h1>
        <p>Discover breathtaking destinations and plan your next adventure with us.</p>
        <Link to="/explore" className="btn btn--primary">
          Explore Destinations
        </Link>
      </section>
    </main>
  );
}

export default Home;
