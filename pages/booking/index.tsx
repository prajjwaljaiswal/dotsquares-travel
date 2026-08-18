import { GetServerSideProps } from 'next';

export default function BookingIndexPage() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/booking/destination',
      permanent: false,
    },
  };
};
