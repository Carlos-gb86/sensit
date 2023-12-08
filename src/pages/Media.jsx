import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import { projectsR, projectsE } from "../constants/projects";

const Media = () => {
    const allProjects = [{ acronym: "All", name: "All Media" }, ...projectsR, ...projectsE];

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);

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

    const [currentAcronym, setCurrentAcronym] = useState("All");
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        let items = [];
        const mediaModules = import.meta.globEager('../assets/projectImages/**/*.+(jpg|jpeg|png|mp4)');

        allProjects.forEach(project => {
            const projectMedia = Object.entries(mediaModules)
                .filter(([path, _]) => path.includes(`/${project.acronym}/`))
                .map(([path, module], index) => ({
                    id: project.acronym + '_' + index,
                    src: module.default,
                    project: project.acronym,
                    type: path.endsWith('.mp4') ? 'video' : 'image'
                }));

            items = [...items, ...projectMedia];
        });

        setGalleryItems(items);
    }, []);

    const filteredGalleryItems = currentAcronym === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.project === currentAcronym);

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

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
                {filteredGalleryItems.map(({ id, src, type }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                        {type === 'image' && (
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' onClick={() => handleMediaClick({ id, src, type })} />
                        )}
                        {type === 'video' && (
                            <video controls className='rounded-md'>
                                <source src={src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </div>

            {isOverlayVisible && (
                <div className="overlay" onClick={closeOverlay}>
                    <div className="overlay-content" onClick={handleOverlayContentClick}>
                        {selectedMedia && selectedMedia.type === 'image' && (
                            <img src={selectedMedia.src} alt="Selected" />
                        )}
                        {selectedMedia && selectedMedia.type === 'video' && (
                            <video controls autoPlay className='rounded-md'>
                                <source src={selectedMedia.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <button onClick={closeOverlay}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
