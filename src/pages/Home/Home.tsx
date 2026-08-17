import React from 'react';
import styles from './Home.module.css';
import Testimonials from '../../components/Testimonials/Testimonials';
import Inspiration from '../../components/Inspiration/Inspiration';

const Home: React.FC = () => {
  return (
    <main className={styles.home}>
      <Inspiration />
      <Testimonials />
    </main>
  );
};

export default Home;
