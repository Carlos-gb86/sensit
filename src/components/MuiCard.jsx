import { useState } from "react";
import { FaArrowDown, FaHeart, FaShare } from "react-icons/fa";

export default function RecipeReviewCard({ blog }) {
  const [expanded, setExpanded] = useState(false);

  const { title, description, category, author, date, image } = blog;
  const shortDescription = `${description.substring(0, 100)}...`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="z-[5] overflow-hidden rounded mx-auto my-8 w-[80%] xl:w-[900px] min-w-md bg-green pb-2">
      <div className="flex items-center p-2">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
            {category.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="ml-4">
          <div className="text-lg leading-5 font-medium text-gray-900">
            {title}
          </div>
          <div className="text-sm leading-5 text-gray-500">{date}</div>
        </div>
        <div className="ml-auto flex items-center">
          <button className="text-gray-500 focus:outline-none">
            {/* Replace with MoreVertIcon */}
          </button>
        </div>
      </div>

      <img className="w-full" src={image} alt="blog image" />

      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{shortDescription}</p>
      </div>

      <div className="px-6 pt-4 pb-2 flex">
        <button className="text-gray-500 focus:outline-none">
          <FaHeart />
        </button>
        <button className="text-gray-500 focus:outline-none ml-4">
          <FaShare />
        </button>
        <button
          className={`transform flex-end ${
            expanded ? "rotate-180" : "rotate-0"
          } ml-auto transition-transform`}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <FaArrowDown />
        </button>
      </div>

      {expanded && (
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">Method:</p>
          {description}
        </div>
      )}
    </div>
  );
}
