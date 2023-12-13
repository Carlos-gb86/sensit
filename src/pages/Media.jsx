import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import { projectsR, projectsE } from "../constants/projects";
import { FaLevelUpAlt } from "react-icons/fa";

const Media = () => {
  const allProjects = [
    { acronym: "All", name: "All Media" },
    ...projectsR,
    ...projectsE,
  ];

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setIsOverlayVisible(true);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedMedia(null);
  };

  const handleOverlayContentClick = (e) => {
    e.stopPropagation();
  };

  const handleGoToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      // Set the button to be visible if the scroll position is more than 500px
      if (!showButton && window.pageYOffset > 500) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 500) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  const [currentAcronym, setCurrentAcronym] = useState("All");
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    let items = [];
    const mediaModules = import.meta.globEager(
      "../assets/projectImages/**/*.+(jpg|jpeg|png|svg|mp4)"
    );

    allProjects.forEach((project) => {
      const projectMedia = Object.entries(mediaModules)
        .filter(([path, _]) => path.includes(`/${project.acronym}/`))
        .map(([path, module], index) => ({
          id: project.acronym + "_" + index,
          src: module.default,
          project: project.acronym,
          type: path.endsWith(".mp4") ? "video" : "image",
        }));

      items = [...items, ...projectMedia];
    });

    setGalleryItems(items);
  }, []);

  const filteredGalleryItems =
    currentAcronym === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.project === currentAcronym);

  return (
    <div className="relative flex-grow sm:flex bg-primary w-full">
      <div className="flex flex-col">
        <SideNav
          title="All media"
          navList={allProjects.map((project) => project.acronym)}
          currentType={currentAcronym}
          onTypeChange={setCurrentAcronym}
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5">
        {filteredGalleryItems.map(({ id, src, type }) => (
          <div
            key={id}
            className="mx-10 sm:mx-0 shadow-md shadow-gray-400 rounded-lg overflow-hidden h-[400px] hover:cursor-pointer"
          >
            {type === "image" && (
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-md duration-200 hover:scale-105"
                onClick={() => handleMediaClick({ id, src, type })}
              />
            )}
            {type === "video" && (
              <video controls className="rounded-md object-cover w-full h-full">
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      {showButton && (
        <button
          id="goTopButton"
          onClick={handleGoToTop}
          className="fixed bottom-[20px] left-[20px] z-[9] py-2 px-4 rounded-lg text-white hover:text-gray-900 hover:bg-gray-400 cursor-pointer flex outline-1 bg-gray-900"
        >
          Go to top <FaLevelUpAlt />
        </button>
      )}

      {isOverlayVisible && (
        <div
          className="overlay hover:cursor-pointer"
          onClick={() => {
            closeOverlay();
          }}
        >
          <div
            className="overlay-content w-[80%] h-[80%] flex flex-col"
            onClick={() => {
              handleOverlayContentClick();
            }}
          >
            {selectedMedia && selectedMedia.type === "image" && (
              <div className="h-[90%] flex justify-center align-middle">
                <img
                  src={selectedMedia.src}
                  alt="Selected"
                  className="object-contain"
                />
              </div>
            )}
            {selectedMedia && selectedMedia.type === "video" && (
              <video controls autoPlay className="rounded-md">
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <button
              className="w-full h-8 text-white mt-4 text-center"
              onClick={() => closeOverlay()}
            >
              X Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
