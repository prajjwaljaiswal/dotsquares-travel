import Head from 'next/head';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { Destination } from '@/types/destination';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dotsquares Travel</title>
        <meta name="description" content="Discover your next travel destination" />
      </Head>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Dotsquares Travel</h1>
          <p className="mt-3 text-lg text-gray-600">
            Explore handpicked destinations for your next adventure.
          </p>
        </section>
        <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination: Destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </section>
      </main>
    </>
  );
}
