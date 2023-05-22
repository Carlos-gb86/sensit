import { useState } from "react";
import { FaGithub, FaLinkedin, FaResearchgate, FaArrowDown, FaArrowUp } from "react-icons/fa";
import '../index.css'

const ProfileCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ backgroundImage: `url(${user.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="z-[5] flex flex-col max-w-sm mx-auto sm:mx-6 rounded-2xl min-h-[500px] m-4">
      <div className="flex-grow w-full border-2 border-gray-300 rounded-2xl flex flex-col items-center bg-no-repeat backdrop-blur-xl bg-black/50">
        <img className="h-48 w-48 object-cover rounded-full border-2 border-gray-200 mt-4" src={user.image} alt={user.name} />
        <div className="p-8 text-center text-white flex flex-col flex-grow justify-between">
          <div className="flex-grow">
            <div className="uppercase tracking-wide text-blue-500 text-sm font-semibold">{user.jobTitle}</div>
            <p className="block mt-1 text-lg leading-tight font-medium">{user.name}</p>
            <p className="mt-2 text-gray-300">{showDetails ? user.description : `${user.description.substring(0, 100)}...`}</p>
            <button className="mt-3" onClick={() => setShowDetails(!showDetails)}>{showDetails ? <FaArrowUp /> : <FaArrowDown />}</button>
          </div>
          <div className="mt-5 flex justify-around">
            <a href={user.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Github link"><FaGithub className="text-3xl text-gray-300 hover:text-white hover:scale-125 transition-transform duration-200 ease-in-out"/></a>
            <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn link"><FaLinkedin className="text-3xl text-gray-300 hover:color-linkedin hover:scale-125 transition-transform duration-200 ease-in-out"/></a>
            <a href={user.researchGateUrl} target="_blank" rel="noopener noreferrer" aria-label="ResearchGate link"><FaResearchgate className="text-3xl text-gray-300 hover:color-researchgate hover:scale-125 transition-transform duration-200 ease-in-out"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
