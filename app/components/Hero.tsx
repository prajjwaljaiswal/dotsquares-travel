export default function Hero() {
  return (
    <section data-testid="section-hero" aria-labelledby="hero-heading">
      <div className="container">
        <h1 id="hero-heading">Discover Your Next Adventure</h1>
        <p>
          Explore breathtaking destinations, unbeatable deals, and unforgettable experiences
          curated just for you.
        </p>
        <a href="/destinations" role="button">
          Start Exploring
        </a>
      </div>
    </section>
  );
}
