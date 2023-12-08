import * as projectImages from '../assets/projectImages';


const ProjectInfo = ({project}) => {

    const projectImage = projectImages[project.image];

    return (
        <div className="p-6 flex-grow">
            <h2 className="font-poppins font-semibold text-2xl text-white ml-10 md:ml-4 mb-6">{project.name}</h2>
            
            <div className="flex flex-col md:flex-row">
                <img className="object-cover w-full px-10 md:w-1/2 md:px-4 max-h-[420px]" src={projectImage} alt={project.acronym} />
                
               <ul className="pl-10 md:pl-4 mt-4 md:mt-0 text-white">
                    {project.acronym && 
                        <li className='pb-4'><span className="font-bold">Acronym:</span> {project.acronym}</li>}
                    {project.mainApplicant && 
                        <li className='pb-4'><span className="font-bold">Main Applicant:</span> {project.mainApplicant}</li>}
                    {project.coApplicants && project.coApplicants.length > 0 && 
                        <li className='pb-4'><span className="font-bold">Co-Applicants:</span> {project.coApplicants.join(", ")}</li>}
                    {project.leadResearcher && 
                        <li className='pb-4'><span className="font-bold">Lead Researcher:</span> {project.leadResearcher}</li>}
                    {project.yearStart && 
                        <li className='pb-4'><span className="font-bold">Start Year:</span> {project.yearStart}</li>}
                    {project.yearEnd && 
                        <li className='pb-4'><span className="font-bold">End Year:</span> {project.yearEnd}</li>}
                    {project.founder && 
                        <li className='pb-4'><span className="font-bold">Founder:</span> {project.founder}</li>}
                    {project.mainInstitution && 
                        <li className='pb-4'><span className="font-bold">Main Institution:</span> {project.mainInstitution}</li>}
                    {project.partners && project.partners.length > 0 && 
                        <li className='pb-4'><span className="font-bold">Partners:</span> {project.partners.join(", ")}</li>}
                    {project.link && 
                        <li><span className="font-bold">Project Page:</span> <a className="text-blue-500 hover:underline" href={project.link} target="_blank" rel="noreferrer">{project.link}</a></li>}
                </ul>
            </div>
            <div className="flex flex-col md:flex-row">
            <div className="mt-4 pr-4">
                <h3 className="font-semibold text-xl mb-2 text-white pl-10 md:pl-4">Summary:</h3>
                <p className='text-white text-justify pl-10 md:pl-4 w-full'>{project.summary}</p>
            </div>
            <div className="mt-4 pr-4 overflow-y-scroll">
                <h3 className="font-semibold text-xl mb-2 text-white pl-10 md:pl-4">Publications:</h3>
                <p className='text-white text-justify pl-10 md:pl-4 w-full'>{project.summary }</p>
            </div>
            </div>
        </div>
    );
}

export default ProjectInfo