const BlogCard = ({ blog }) => {
    const { title, description, category, author, date, image } = blog;

    // Truncate description
    const shortDescription = `${description.substring(0, 100)}...`;

    return (
        <div className="z-[5] overflow-hidden px-10 sm:px-20 md:px-60 my-8">
            <div className="bg-white rounded-2xl w-full overflow-hidden">
                <img alt="blog photo" className="max-h-40 w-full object-cover" src={image} />
                <div className="bg-white w-full p-4">
                    <p className={`font-semibold text-blue-500 mb-2 text-sm capitalize`}>{category}</p>
                    <h2 className="text-gray-800 text-xl font-semibold">{title}</h2>
                    <p className="text-gray-600 mt-2">{shortDescription}</p>

                    <div className="flex items-center mt-4 justify-between">
                        <div className="flex items-center">
                            <img alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" src={author.image} />
                            <h1 className="text-gray-700 font-semibold">{author.name}</h1>
                        </div>
                        <a href="#" className="cursor-pointer text-xs text-indigo-500">Read more</a>
                    </div>

                    <div className="text-sm text-gray-600 mt-4">
                        <small>{date}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
