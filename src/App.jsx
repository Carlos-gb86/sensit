import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import styles from "./style";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import News from './pages/News';
import About from './pages/About';

const ScrollToTop = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(()=> {
    if (location.pathname === '/sensit') {
      navigate('/');
    }
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}

const App = () => {


  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
      <ScrollToTop />
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="projects" element={ <Projects /> } />
          <Route path="publications" element={ <Publications /> } />
          <Route path="news" element={ <News /> } />
          <Route path="about" element={ <About /> } />
        </Routes>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App