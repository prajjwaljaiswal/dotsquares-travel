const philosophyPillars = [
  {
    title: 'Authentic Experiences',
    description:
      'Placeholder copy: we believe travel is most meaningful when it connects people with real cultures, communities, and stories.',
  },
  {
    title: 'Responsible Travel',
    description:
      'Placeholder copy: we design journeys that respect local environments and support the communities that welcome our travelers.',
  },
  {
    title: 'Personalized Care',
    description:
      'Placeholder copy: every itinerary is tailored to the traveler, backed by support before, during, and after the trip.',
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="about-philosophy-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-philosophy-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Our Travel Philosophy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Placeholder copy summarizing the principles that guide how we design every trip we
            offer.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {philosophyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
