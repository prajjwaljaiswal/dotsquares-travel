export default function AboutStory() {
  return (
    <section
      aria-labelledby="about-story-heading"
      className="bg-white py-12 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Our Story
            </p>
            <h2
              id="about-story-heading"
              className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
            >
              How DotSquares Travel Began
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              DotSquares Travel started with a simple placeholder idea: make
              unforgettable journeys accessible to everyone. What began as a
              small team of passionate travelers has grown into a trusted
              name helping thousands of explorers discover new destinations
              around the world.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              This is placeholder copy describing our humble beginnings, the
              challenges we overcame, and the milestones that shaped who we
              are today. Every trip we plan carries a piece of that original
              spirit &mdash; curiosity, care, and a love for the open road.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              Today, our story continues to be written by every traveler who
              trusts us with their journey, and we&apos;re just getting
              started.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md sm:aspect-[16/9] lg:aspect-[4/3]">
              <img
                src="https://placehold.co/800x600?text=Our+Story"
                alt="Placeholder image representing the DotSquares Travel story"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
