import React from 'react';

function AboutHero(): JSX.Element {
  return (
    <section className="bg-blue-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-base text-gray-600 sm:text-lg">
          We are passionate about helping travelers discover the world&apos;s most
          incredible destinations and craft unforgettable journeys.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
