type PillarCard = {
  title: string;
  description: string;
  imageAlt: string;
};

const pillars: PillarCard[] = [
  {
    title: "Our Mission",
    description:
      "To make world-class travel experiences accessible, affordable, and unforgettable for every kind of explorer. This is placeholder copy describing how we craft journeys that connect people to places, cultures, and moments that matter.",
    imageAlt: "Placeholder image representing our mission",
  },
  {
    title: "Our Vision",
    description:
      "To become the world's most trusted travel companion, inspiring a global community of travelers to explore responsibly and meaningfully. This is placeholder copy outlining our long-term aspirations for the future of travel.",
    imageAlt: "Placeholder image representing our vision",
  },
  {
    title: "Our Travel Philosophy",
    description:
      "We believe travel should be transformative, sustainable, and joyful. This is placeholder copy explaining our approach to responsible tourism, authentic local experiences, and putting travelers first every step of the way.",
    imageAlt: "Placeholder image representing our travel philosophy",
  },
];

export default function MissionVision() {
  return (
    <section
      aria-labelledby="mission-vision-heading"
      className="bg-gray-50 py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            What Drives Us
          </p>
          <h2
            id="mission-vision-heading"
            className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Mission, Vision &amp; Philosophy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Placeholder copy introducing the values and principles that guide
            every itinerary we build and every traveler we serve.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
            >
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <img
                  src="https://placehold.co/640x360?text=Placeholder"
                  alt={pillar.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
