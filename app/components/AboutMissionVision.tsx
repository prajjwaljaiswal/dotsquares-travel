import Image from 'next/image';

export default function AboutMissionVision() {
  return (
    <section
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
      aria-labelledby="about-mission-vision-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-mission-vision-heading"
            className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl"
          >
            Our Mission &amp; Vision
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Placeholder copy describing the purpose that drives every itinerary we craft and the
            future we&apos;re building toward for travelers everywhere.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 lg:gap-12">
          <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
            <div className="relative aspect-[16/9] w-full bg-gray-100">
              <Image
                src="/images/about/mission-placeholder.jpg"
                alt="Travelers planning a trip together, representing our mission"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                To make extraordinary travel experiences accessible to everyone by combining local
                expertise, thoughtful planning, and genuine care at every step of the journey.
                This is placeholder mission copy that will be refined with brand-approved messaging.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
            <div className="relative aspect-[16/9] w-full bg-gray-100">
              <Image
                src="/images/about/vision-placeholder.jpg"
                alt="Scenic horizon representing our vision for the future of travel"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                To become the most trusted travel companion in the world, connecting people to
                cultures, landscapes, and experiences that broaden perspectives. Placeholder vision
                copy to be finalized alongside our brand guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
