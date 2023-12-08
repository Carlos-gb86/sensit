import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import ProjectInfo from "../components/ProjectInfo";
import { projectsR, projectsE } from "../constants/projects";
import Slider from 'react-slick';

  const images = [
    "src/assets/galleryImages/cyberbridge.png",
    "src/assets/galleryImages/cyberbridge.png",
    "src/assets/galleryImages/cyberbridge.png",
    "src/assets/galleryImages/cyberbridge.png",
  ];
    const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    // additional settings as needed
  };

const Projects = () => {
  const initialAcronym = "SensIT";
  const initialProject = projectsR.find(p => p.acronym === initialAcronym) 
                     || projectsE.find(p => p.acronym === initialAcronym) 
                     || {};

  const [currentAcronym, setCurrentAcronym] = useState(initialAcronym);
  const [currentProject, setCurrentProject] = useState(initialProject);

  useEffect(() => {
    let foundProject = projectsR.find(project => project.acronym === currentAcronym)
                    || projectsE.find(project => project.acronym === currentAcronym);

    setCurrentProject(foundProject || {});
  }, [currentAcronym]);

  const handleProjectChange = (acronym) => setCurrentAcronym(acronym);

 return (
    <div className="relative flex-grow sm:flex bg-primary w-full">
      {/* Left Side Navigation */}
      <div className="flex flex-col">
        <SideNav
          title="Research"
          navList={projectsR.map((project) => project.acronym)}
          currentType={currentAcronym}
          onTypeChange={handleProjectChange}
        />
        <SideNav
          title="Education"
          navList={projectsE.map((project) => project.acronym)}
          currentType={currentAcronym}
          onTypeChange={handleProjectChange}
        />
      </div>

      {/* Right Side Content */}
      <div className="flex-grow flex flex-col">
        <ProjectInfo project={currentProject} />

        {/* Separator line */}
      <hr className="flex-grow border-gray-300 my-5"></hr>

      <div className="flex-grow my-5">
         <Slider {...carouselSettings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img src={img} alt={`Slide ${idx}`} className="w-full" />
              </div>
            ))}
          </Slider>

      </div>



      </div>
    </div>
  );
};
export default Projects;