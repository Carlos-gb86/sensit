import { useState, useEffect } from 'react';

const PublicationList = ({ filteredPublications, currentType }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(filteredPublications);

    useEffect(() => {
        setSearchResults(
            filteredPublications.filter(pub =>
                pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pub.year.toString().includes(searchTerm)
            )
        );
    }, [searchTerm, filteredPublications]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="p-6 flex-grow">

            <div className="flex justify-between items-center mb-10">
                <h2 className="font-poppins font-semibold text-2xl text-white ml-2 sm:ml-10 mb-3">{currentType}</h2>
                <form className="w-64">   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input 
                            type="search"  
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 search-input" 
                            placeholder="Search ..." 
                            onChange={handleChange}/>
                    </div>
                </form>

            </div>

            {searchResults.length === 0 ? (
                <div className="text-white pl-6">
                    No matching results were found based on the search input
                </div>
            ) : (
                <ul className='pl-2 sm:pl-6'>
                    {searchResults.map((pub, index) => (
                        <li key={index} className="mb-2 text-white">
                            <div>{`${pub.author} (${pub.year})`}</div>
                            <div className="font-bold">{pub.title}</div>
                            <a href={pub.link} className="text-blue-500 hover:underline">
                                {pub.link && pub.link.length > 50 ? "Link" : pub.link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PublicationList;
