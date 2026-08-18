const destinations = [
  { id: 1, name: 'Santorini, Greece', description: 'Iconic sunsets and whitewashed villages.' },
  { id: 2, name: 'Kyoto, Japan', description: 'Ancient temples and cherry blossoms.' },
  { id: 3, name: 'Bali, Indonesia', description: 'Pristine beaches and lush rice terraces.' }
];

export default function FeaturedDestinations() {
  return (
    <section data-testid="section-featured-destinations" aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading">Featured Destinations</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', listStyle: 'none' }}>
          {destinations.map((destination) => (
            <li key={destination.id}>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
