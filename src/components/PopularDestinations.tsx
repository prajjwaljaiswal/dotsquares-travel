import React from 'react';
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import './PopularDestinations.css'

const PopularDestinations: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-labelledby="popular-destinations-heading">
      <div className="max-w-7xl mx-auto">
        <h2 
          id="popular-destinations-heading" 
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          Popular Destinations
        </h2>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.id}`}
              className="flex-shrink-0 w-72 snap-start lg:w-auto group"
              data-testid="destination-card"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {destination.teaser}
                  </p>
                  <span className="inline-flex items-center mt-3 text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                    Explore 
                    <svg 
                      className="ml-1 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;