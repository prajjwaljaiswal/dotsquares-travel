import { FC } from 'react';
import './Inspiration.css';

interface InspirationItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

const inspirationItems: InspirationItem[] = [
  {
    id: 'mountains',
    title: 'Mountain Escapes',
    image: 'https://images.example.com/inspiration/mountains.jpg',
    description: 'Breathtaking peaks and serene trails for the adventurous soul.',
  },
  {
    id: 'beaches',
    title: 'Tropical Beaches',
    image: 'https://images.example.com/inspiration/beaches.jpg',
    description: 'Sun-soaked shores and crystal-clear waters await.',
  },
  {
    id: 'cities',
    title: 'City Lights',
    image: 'https://images.example.com/inspiration/cities.jpg',
    description: 'Vibrant culture, food, and nightlife in the world’s top cities.',
  },
];

const Inspiration: FC = () => {
  return (
    <section className="inspiration" data-testid="inspiration-section">
      <div className="inspiration__header">
        <h2>Get Inspired</h2>
        <p>Explore ideas for your next adventure</p>
      </div>
      <div className="inspiration__grid">
        {inspirationItems.map((item) => (
          <div
            className="inspiration__card"
            key={item.id}
            data-testid="inspiration-card"
          >
            <img
              src={item.image}
              alt={item.title}
              className="inspiration__image"
            />
            <h3 className="inspiration__title">{item.title}</h3>
            <p className="inspiration__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inspiration;
