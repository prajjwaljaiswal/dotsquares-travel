import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dotsquares Travel - Discover Your Next Adventure',
  description:
    'Explore featured destinations, read traveler testimonials, and subscribe to our newsletter for the best travel deals with Dotsquares Travel.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedDestinations />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}