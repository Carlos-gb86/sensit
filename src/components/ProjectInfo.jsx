import React, { useState } from "react";
import { CarouselTail } from "./CarouselTail";

const ProjectInfo = ({ project }) => {
  const imageUrls = [
    "src/assets/galleryImages/postDOFS.jpg",
    "src/assets/galleryImages/postDOFS.jpg",
    "src/assets/galleryImages/postDOFS.jpg",
    // Add more image URLs as needed
  ];

  // Sample long content for the Publications section
  const longContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum vestibulum arcu, sit amet maximus arcu blandit sit amet. Sed ac quam justo. Proin vitae efficitur elit, eu dictum arcu. Aenean a metus quis arcu eleifend suscipit. Sed feugiat sapien eget odio hendrerit, non ultrices eros sollicitudin. Suspendisse potenti. Vivamus scelerisque urna nec tortor bibendum, in volutpat est cursus. Nulla facilisi. Donec in libero eu tellus facilisis mattis.";

  return (
    <div className="p-6 flex-grow">
      <h2 className="font-poppins font-semibold text-2xl text-white ml-10 md:ml-4 mb-6">
        {project.name}
      </h2>

      <div className="flex flex-col md:flex-row">
        <div className="carousel-container">
          <CarouselTail imageUrls={imageUrls} />
        </div>
        <div className="pl-10 md:pl-4 mt-4 md:mt-0 text-white flex-grow">
          {project.acronym && (
            <li className="pb-4">
              <span className="font-bold">Acronym:</span> {project.acronym}
            </li>
          )}
          {/* Add other project details here */}
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-4">
        <div className="flex-grow pr-4">
          <h3 className="font-semibold text-xl mb-2 text-white pl-10 md:pl-4">
            Summary:
          </h3>
          <p className="text-white text-justify pl-10 md:pl-4 w-full">
            {project.summary}
          </p>
        </div>

        <div className="flex-grow mt-4 pr-4 overflow-y-auto max-h-[420px]">
          <h3 className="font-semibold text-xl mb-2 text-white pl-10 md:pl-4">
            Publications:
          </h3>
          <p className="text-white text-justify pl-10 md:pl-4 w-full">
            {longContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
