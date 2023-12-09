import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import { infographic } from "../assets";

const Home = () => {
  return (
    <div className="bg-primary w-full flex flex-col flex-grow">
      <Hero />
      <div className="flex flex-col pb-5 px-5 sm:px-10 bg-gray-200">
        <h2 className="text-black text-center py-2">
          SensIT - Sensor-Driven Cloud-based Strategies for Asset Management
        </h2>
        <img src={infographic} alt="infographic sensit" className="h-100" />
      </div>
      <Partners />
      <Contact />
    </div>
  );
};

export default Home;
