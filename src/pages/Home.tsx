import PopularDestinations from '../components/PopularDestinations'

function Home() {
  return (
    <main className="page">
      <header className="hero">
        <h1>Welcome to Dotsquares Travel</h1>
        <p>Discover curated journeys, handpicked stays, and unforgettable destinations around the world.</p>
      </header>
      <PopularDestinations />
    </main>
  )
}

export default Home