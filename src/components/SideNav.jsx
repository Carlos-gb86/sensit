const SideNav = ({ title, navList, currentType, onTypeChange }) => {
    
    return (
        <div className="w-64!important bg-primary text-white p-5 sm:pl-16 pl-5 border-t-2 sm:border-t-0 sm:border-r-2 border-gray-500">
            <h1 className="hidden sm:block font-poppins font-semibold text-2xl mb-3">{title}</h1>
            <ul className="flex flex-row justify-center gap-x-10 overflow-y-scroll sm:flex-col">
                {navList.map((elem, index) => (
                    <li 
                        key={index} 
                        className={`mb-2 cursor-pointer z-[5] ${currentType === elem ? 'underline underline-offset-8 sm:no-underline' : 'sm:hover:text-secondary'}`}
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
