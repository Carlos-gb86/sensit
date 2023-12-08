import { useRef, useEffect, useState } from "react";
import { CarouselTail } from "./CarouselTail";

const ProjectInfo = ({ project }) => {
  const summaryRef = useRef(null);
  const publicationsRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (summaryRef.current) {
      setMaxHeight(summaryRef.current.clientHeight);
    }
  }, []);

  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      // Import all image files from the parent directory and subdirectories
      const imageModules = import.meta.globEager('../assets/projectImages/**/*.+(jpg|jpeg|png)');

      const paths = Object.entries(imageModules)
        .filter(([path, _]) => path.includes(`/${project.acronym}/`)) // Filter by project acronym
        .map(([_, module]) => module.default);

      setImageUrls(paths);
    };

    loadImages();
  }, [project.acronym]);

console.log(imageUrls); 

  // const projectImage = projectImages[project.image];

  // Sample long content for the Publications section
  const longContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Quisque bibendum vestibulum arcu, sit amet maximus arcu blandit sit amet.
     Sed ac quam justo. Proin vitae efficitur elit, eu dictum arcu. Aenean a metus
      quis arcu eleifend suscipit. Sed feugiat sapien eget odio hendrerit,
       non ultrices eros sollicitudin. Suspendisse potenti. Vivamus scelerisque
        urna nec tortor bibendum, in volutpat est cursus. Nulla facilisi. Donec
        Quisque bibendum vestibulum arcu, sit amet maximus arcu blandit sit amet.
     Sed ac quam justo. Proin vitae efficitur elit, eu dictum arcu. Aenean a metus
      quis arcu eleifend suscipit. Sed feugiat sapien eget odio hendrerit,
       non ultrices eros sollicitudin. Suspendisse potenti. Vivamus scelerisque
        urna nec tortor bibendum, in volutpat est cursus. Nulla facilisi. Donec
        Sed ac quam justo. Proin vitae efficitur elit, eu dictum arcu. Aenean a metus
      quis arcu eleifend suscipit. Sed feugiat sapien eget odio hendrerit,
       non ultrices eros sollicitudin. Suspendisse potenti. Vivamus scelerisque
        urna nec tortor bibendum, in volutpat est cursus. Nulla facilisi. Donec
         in libero eu tellus facilisis mattis.`;

  return (
    <div className="p-6 flex-grow">
      <h2 className="font-poppins font-semibold text-2xl text-white ml-10 md:ml-4 mb-6">
        {project.name}
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col px-10 md:w-1/2 md:px-4 max-h-[420px]">
          <CarouselTail className="flex-grow" imageUrls={imageUrls} />
        </div>

        <ul className="pl-10 md:pl-4 mt-6 md:mt-0 text-white">
          {project.acronym && (
            <li className="pb-4">
              <span className="font-bold">Acronym:</span> {project.acronym}
            </li>
          )}
          {project.mainApplicant && (
            <li className="pb-4">
              <span className="font-bold">Main Applicant:</span>{" "}
              {project.mainApplicant}
            </li>
          )}
          {project.coApplicants && project.coApplicants.length > 0 && (
            <li className="pb-4">
              <span className="font-bold">Co-Applicants:</span>{" "}
              {project.coApplicants.join(", ")}
            </li>
          )}
          {project.leadResearcher && (
            <li className="pb-4">
              <span className="font-bold">Lead Researcher:</span>{" "}
              {project.leadResearcher}
            </li>
          )}
          {project.yearStart && (
            <li className="pb-4">
              <span className="font-bold">Start Year:</span> {project.yearStart}
            </li>
          )}
          {project.yearEnd && (
            <li className="pb-4">
              <span className="font-bold">End Year:</span> {project.yearEnd}
            </li>
          )}
          {project.founder && (
            <li className="pb-4">
              <span className="font-bold">Founder:</span> {project.founder}
            </li>
          )}
          {project.mainInstitution && (
            <li className="pb-4">
              <span className="font-bold">Main Institution:</span>{" "}
              {project.mainInstitution}
            </li>
          )}
          {project.partners && project.partners.length > 0 && (
            <li className="pb-4">
              <span className="font-bold">Partners:</span>{" "}
              {project.partners.join(", ")}
            </li>
          )}
          {project.link && (
            <li>
              <span className="font-bold">Project Page:</span>{" "}
              <a
                className="text-blue-500 hover:underline"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.link}
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="relative w-full flex flex-col md:flex-row mt-6">
        <div className="flex-shrink-0 md:w-1/2 pr-4">
          <h3 className="font-semibold text-xl mb-2 text-white pl-10 md:pl-4">
            Summary:
          </h3>
          <p
            ref={summaryRef}
            className="text-white text-justify pl-10 md:pl-4 w-full"
          >
            {project.summary}
          </p>
        </div>

        <div ref={publicationsRef} className="flex-auto">
          <h3 className="font-semibold text-xl mb-2 text-white pl-10 md:pl-4">
            Publications:
          </h3>
          <div style={{ maxHeight: `${maxHeight}px`, overflowY: "auto" }}>
            <p className="text-white text-justify pl-10 md:pl-4 w-full">
              {longContent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
