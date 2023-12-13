import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";
import styles from "./style";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Media from "./pages/Media";
import About from "./pages/About";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // if (location.pathname === '/sensit' || location.pathname === '/sensit/') {
    //   navigate('/');
    // }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const App = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 to-fuchsia-700">
      <div className="flex flex-col min-h-screen xxl:mx-[10%] xxxl:mx-[20%]">
        <HashRouter>
          <ScrollToTop />
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/media" element={<Media />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
