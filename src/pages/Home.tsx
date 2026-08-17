import FeaturedTrendingSection from '../components/FeaturedTrendingSection/FeaturedTrendingSection';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <header className="home-page__hero">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore curated travel packages designed around your dream destinations.</p>
      </header>
      <FeaturedTrendingSection minimumCards={6} />
    </main>
  );
}

export default Home;
