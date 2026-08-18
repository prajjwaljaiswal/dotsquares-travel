import React from 'react';
import './PopularDestinations.css';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: '/images/destinations/paris.jpg',
    description: 'The city of lights and romance.',
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: '/images/destinations/bali.jpg',
    description: 'Tropical beaches and vibrant culture.',
  },
  {
    id: 3,
    name: 'Santorini, Greece',
    image: '/images/destinations/santorini.jpg',
    description: 'Iconic white buildings and stunning sunsets.',
  },
  {
    id: 4,
    name: 'Kyoto, Japan',
    image: '/images/destinations/kyoto.jpg',
    description: 'Ancient temples and cherry blossoms.',
  },
];

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">
      <h2 className="popular-destinations__title">
        World&apos;s Most Popular Destinations
      </h2>
      <div className="popular-destinations__grid">
        {destinations.map((destination) => (
          <div className="popular-destinations__card" key={destination.id}>
            <img
              className="popular-destinations__image"
              src={destination.image}
              alt={destination.name}
            />
            <h3 className="popular-destinations__name">{destination.name}</h3>
            <p className="popular-destinations__description">{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
