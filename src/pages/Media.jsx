import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import { projectsR, projectsE } from "../constants/projects";

const Media = () => {
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
  
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const combinedProjects = [...projectsR, ...projectsE]; // Combine both project arrays

    const loadImages = async () => {
      let items = [];
      const imageModules = import.meta.globEager('../assets/projectImages/**/*.+(jpg|jpeg|png)');

      combinedProjects.forEach(project => {
        const projectImages = Object.entries(imageModules)
          .filter(([path, _]) => path.includes(`/${project.acronym}/`)) // Filter by project acronym
          .map(([path, module], index) => ({
            id: index, // Unique ID, combining acronym and index
            src: module.default,
            project: project.acronym
          }));

        items = [...items, ...projectImages];
      });

      setGalleryItems(items);
    };

    loadImages();
  }, []); // Empty dependency array as the projects are static

  console.log(setGalleryItems)

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
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
        {galleryItems.map(({ id, src }) => (
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
          <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
        </div>
        ))}
      </div>
    </div>
  );
};
export default Media;