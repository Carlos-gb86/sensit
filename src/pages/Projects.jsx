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
      </div>
    </div>
  );
};
export default Projects;