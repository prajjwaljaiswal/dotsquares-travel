import React from 'react';

function OurStory(): JSX.Element {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Our Story
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Founded with a simple mission, our company started as a small team of
            travel enthusiasts who wanted to make exploring the world easier and
            more affordable for everyone. Today, we work with trusted partners
            across the globe to bring you curated destinations and travel
            packages you can rely on.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 p-8 text-center text-gray-500">
          <p>Est. 2015 &middot; 50+ Countries &middot; 100k+ Happy Travelers</p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
