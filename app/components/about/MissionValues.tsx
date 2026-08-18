import React from 'react';

interface Value {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: 'Authenticity',
    description:
      'We showcase real experiences and honest recommendations for every destination.',
  },
  {
    title: 'Customer First',
    description:
      "Every itinerary and package is designed with our travelers' needs at heart.",
  },
  {
    title: 'Sustainability',
    description:
      'We partner with providers who care about local communities and the environment.',
  },
];

function MissionValues(): JSX.Element {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
          Our Mission &amp; Values
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionValues;
