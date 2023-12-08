import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import { projectsR, projectsE } from "../constants/projects";

const Media = () => {
    // Combine all projects and add 'All' category
    const allProjects = [{ acronym: "All", name: "All Media" }, ...projectsR, ...projectsE];

    // State for managing overlay for image zoom
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Handler for clicking on an image
    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsOverlayVisible(true);
    };

    // Handler for closing the overlay
    const closeOverlay = () => {
        setIsOverlayVisible(false);
        setSelectedImage(null);
    };

    // Prevent overlay close when clicking inside
    const handleOverlayContentClick = (e) => {
        e.stopPropagation();
    };

    // State for the currently selected project acronym
    const [currentAcronym, setCurrentAcronym] = useState("All");

    // State for storing gallery items
    const [galleryItems, setGalleryItems] = useState([]);

    // Load images
    useEffect(() => {
        let items = [];
        const imageModules = import.meta.globEager('../assets/projectImages/**/*.+(jpg|jpeg|png)');

        allProjects.forEach(project => {
            const projectImages = Object.entries(imageModules)
                .filter(([path, _]) => path.includes(`/${project.acronym}/`))
                .map(([path, module], index) => ({
                    id: project.acronym + '_' + index,
                    src: module.default,
                    project: project.acronym
                }));

            items = [...items, ...projectImages];
        });

        setGalleryItems(items);
    }, []);

    // Filter images based on the selected project acronym
    const filteredGalleryItems = currentAcronym === "All" 
        ? galleryItems 
        : galleryItems.filter(item => item.project === currentAcronym);

    return (
        <div className="relative flex-grow sm:flex bg-primary w-full">
            {/* Left Side Navigation */}
            <div className="flex flex-col">
                <SideNav
                    title="All media"
                    navList={allProjects.map((project) => project.acronym)}
                    currentType={currentAcronym}
                    onTypeChange={setCurrentAcronym}
                />
            </div>

            {/* Right Side Content */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
                {filteredGalleryItems.map(({ id, src }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden' onClick={() => handleImageClick({ id, src })}>
                        <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                    </div>
                ))}
            </div>

            {/* Image Overlay */}
            {isOverlayVisible && (
                <div className="overlay" onClick={closeOverlay}>
                    <div className="overlay-content" onClick={handleOverlayContentClick}>
                        {selectedImage && <img src={selectedImage.src} alt="Selected" />}
                        <button onClick={closeOverlay}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
