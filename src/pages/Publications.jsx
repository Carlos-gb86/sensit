import { useState, useEffect } from 'react';
import SideNav from '../components/SideNav';
import PublicationList from '../components/PublicationList';
import { papers } from '../constants/publications';

const getPublicationTypes = (papers) => {
    const types = papers.map(pub => pub.type);
    return [...new Set(types)];
}

const Publications = () => {
  const [currentType, setCurrentType] = useState('Journal');
  const [filteredPublications, setFilteredPublications] = useState([]);
  
  useEffect(() => {
    setFilteredPublications(
      papers.filter(pub => pub.type === currentType)
    );
  }, [currentType]);
  
  const handleTypeChange = (type) => setCurrentType(type);

  return (
    <div className="flex-grow sm:flex-row flex-col-reverse flex bg-primary w-full">
        <div className="absolute z-[0] w-[20%] h-[15%] right-10 bottom-10 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[40%] right-10 bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />

        <SideNav title="Publications" navList={getPublicationTypes(papers)} currentType={currentType} onTypeChange={handleTypeChange}/>
        <PublicationList filteredPublications={filteredPublications} currentType={currentType}/>
    </div>
  )
}

export default Publications;
