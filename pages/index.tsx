import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Layout from '@/components/Layout';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { SITE_DESCRIPTION } from '@/lib/constants';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      destinations,
    },
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ destinations }: HomeProps) {
  return (
    <Layout title="Home">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Explore the World</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">{SITE_DESCRIPTION}</p>
      </section>
      <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </section>
    </Layout>
  );
}
