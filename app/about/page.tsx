import Team from '../components/Team';

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We are a team of dedicated travel experts committed to making your travel dreams a
            reality.
          </p>
        </div>
      </section>
      <Team />
    </main>
  );
}
