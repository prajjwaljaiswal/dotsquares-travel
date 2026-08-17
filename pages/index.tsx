import type { GetStaticProps, NextPage } from 'next';
import Layout from '@/components/Layout';
import DestinationCard from '@/components/DestinationCard';
import { destinations as allDestinations } from '@/data/destinations';
import { Destination } from '@/types/index';

interface HomeProps {
  destinations: Destination[];
}

const Home: NextPage<HomeProps> = ({ destinations }) => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Explore Top Destinations</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Handpicked getaways from around the world, ready for your next adventure.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      destinations: allDestinations,
    },
  };
};

export default Home;
