import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Partners from '../components/Partners';

const Home = () => {
  return (
    <div className='bg-primary w-full'>
        <Hero />
        <Partners />
        <Contact />
    </div>
  )
}

export default Home;