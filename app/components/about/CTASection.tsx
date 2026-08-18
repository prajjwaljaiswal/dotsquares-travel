import React from 'react';
import Link from 'next/link';

function CTASection(): JSX.Element {
  return (
    <section className="bg-blue-600 px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready for Your Next Adventure?
        </h2>
        <p className="mt-4 text-base text-blue-100 sm:text-lg">
          Explore our handpicked destinations and travel packages to start
          planning your dream trip today.
        </p>
        <div className="mt-8">
          <Link
            href="/explore"
            className="inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow transition hover:bg-blue-50 sm:text-lg"
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
