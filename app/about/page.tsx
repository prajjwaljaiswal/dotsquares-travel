import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              About Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We&apos;re a team of dedicated travel experts committed to
              making your journeys unforgettable.
            </p>
          </div>
        </section>
        <Team />
      </main>
      <Footer />
    </>
  );
}
