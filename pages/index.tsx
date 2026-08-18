import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import { sampleDestinations } from '@/data/destinations';
import type { Destination } from '@/types';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Dotsquares Travel</title>
        <meta name="description" content="Dotsquares Travel starter application" />
      </Head>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          Welcome to Dotsquares Travel
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          This is the starter page confirming Next.js, TypeScript, and Tailwind CSS are configured
          correctly.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {sampleDestinations.map((destination: Destination) => (
            <li
              key={destination.id}
              className="rounded-lg border border-gray-200 p-4 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-primary-dark">{destination.name}</h2>
              <p className="mt-1 text-sm text-gray-500">{destination.country}</p>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Home;
