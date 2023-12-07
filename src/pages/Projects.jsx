import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import ProjectInfo from "../components/ProjectInfo";
import { projectsR, projectsE } from "../constants/projects";

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
console.log('projectsR acronyms:', projectsR.map(p => p.acronym));
console.log('projectsE acronyms:', projectsE.map(p => p.acronym));


  return (
    <div className="relative flex-grow flex sm:flex-row flex-col-reverse bg-primary w-full">
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

      <ProjectInfo project={currentProject} />
    </div>
  );
};

export default Projects;
