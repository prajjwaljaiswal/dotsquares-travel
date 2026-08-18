import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SearchWidget from '../../components/SearchWidget/SearchWidget'
import Inspiration from '../../components/Inspiration/Inspiration'
import Testimonials from '../../components/Testimonials/Testimonials'
import styles from './Home.module.css'

const Home = () => {
  return (
    <main className={styles.home}>
      <HeroBanner />
      <SearchWidget />
      <Inspiration />
      <Testimonials />
    </main>
  )
}

export default Home
