const SideNav = ({ title, navList, currentType, onTypeChange }) => {
    
    return (
        <div className="bg-primary text-white sm:p-0 pl-5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-500">
            <h1 className="hidden sm:block w-52 pl-6 font-poppins font-semibold text-2xl mb-3">{title}</h1>
            <ul className="flex flex-row justify-start gap-x-10 overflow-y-scroll sm:flex-col">
                {navList.map((elem, index) => (
                    <li 
                        key={index} 
                        className={`sm:border-l-8 py-4 pl-4 cursor-pointer z-[5] ${currentType === elem ? 'underline underline-offset-8 sm:no-underline sm:font-semibold sm:border-secondary sm:bg-slate-800' : 'sm:hover:bg-slate-500'}`}
                        onClick={() => onTypeChange(elem)}
                    >
                        {elem}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideNav;
