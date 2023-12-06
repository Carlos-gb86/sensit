import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import ProjectInfo from "../components/ProjectInfo";
import { projects } from "../constants/projects";

const getProjectAcronyms = (projects) => {
  const acronyms = projects.map((project) => project.acronym);
  return acronyms;
};

const Projects = () => {
  const [currentAcronym, setCurrentAcronym] = useState("SensIT");
  const [currentProject, setCurrentProject] = useState(projects);

  useEffect(() => {
    setCurrentProject(
      projects.filter((project) => project.acronym === currentAcronym)
    );
  }, [currentAcronym]);

  const handleProjectChange = (acronym) => setCurrentAcronym(acronym);

  return (
    <div className="relative flex-grow flex sm:flex-row flex-col-reverse bg-primary w-full">
      <div className="absolute z-[0] w-[20%] h-[15%] right-10 bottom-10 pink__gradient" />
      <div className="absolute z-[1] w-[40%] h-[40%] right-10 bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />

      <SideNav
        title="Projects"
        navList={getProjectAcronyms(projects)}
        currentType={currentAcronym}
        onTypeChange={handleProjectChange}
      />
      <ProjectInfo project={currentProject[0]} />
    </div>
  );
};

export default Projects;
