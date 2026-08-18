import Image from 'next/image';

export default function AboutStory() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="about-story-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <h2
              id="about-story-heading"
              className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
            >
              Our Story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              DotSquares Travel began with a simple idea: travel should be effortless, inspiring,
              and accessible to everyone. What started as a small team of passionate explorers has
              grown into a trusted travel partner helping thousands of travelers discover the
              world, one journey at a time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              This is placeholder copy describing our founding story, the challenges we set out to
              solve, and the milestones that shaped who we are today. Over the years, we&apos;ve
              partnered with local experts across the globe to curate experiences that go beyond
              the ordinary tourist trail.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
              From our first booking to serving travelers worldwide, our commitment to quality,
              transparency, and genuine hospitality has never wavered.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 shadow-md sm:aspect-[16/10]">
              <Image
                src="/images/about/our-story-placeholder.jpg"
                alt="DotSquares Travel team exploring a destination together"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
