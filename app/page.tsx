import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
