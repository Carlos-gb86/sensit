import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import {
  FaAngleDown,
  FaShare,
  FaRegTimesCircle,
  FaIcons,
  FaReact,
  FaWrench,
  FaMountain,
} from "react-icons/fa";
import { useState } from "react";

const icons = {
  Technology: FaReact,
  Fun: FaIcons,
  Testing: FaWrench,
  Field: FaMountain,
};

export default function MuiCard({ id, blog, expanded, handleExpandBlog }) {
  const [isClicked, setIsClicked] = useState(false);
  const { title, description, category, date, image } = blog;
  const shortDescription = `${description.substring(0, 100)}...`;
  const url = "https://www.thesensitproject.com/";
  const CategoryIcon = icons[category]; // Get the correct icon for the category

  return (
    <div
      id={id}
      className={
        expanded
          ? "z-[5] flex flex-col overflow-hidden rounded my-2 mb-20 mx-8 w-[80%] mx-[10%] sm:w-[70%] sm:mx-[15%] lg:w-[60%] lg:mx-[20%] xl:w-[50%] xl:mx-[25%] bg-white"
          : "z-[5] flex flex-col overflow-hidden rounded my-2 mb-20 mx-8 w-[80%] sm:w-[70%] lg:w-[34%] xl:w-1/4 bg-white"
      }
    >
      <div className="flex items-center p-2">
        <div className="flex-shrink-0">
          {CategoryIcon && (
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
              <CategoryIcon />
            </div>
          )}
        </div>
        <div className="ml-4">
          <div className="text-lg leading-5 font-medium text-gray-900">
            {title}
          </div>
          <div className="text-sm leading-5 text-gray-500">{date}</div>
        </div>
      </div>

      <img className="w-full" src={image} alt="blog image" />

      <div className="flex flex-col justify-between h-full">
        <div className="px-6 py-4">
          {expanded ? (
            <p
              className="text-gray-700 text-base"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          ) : (
            <p
              className="text-gray-700 text-base"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            ></p>
          )}
        </div>

        <div className="flex px-6 pt-4 pb-2">
          {isClicked ? (
            <div className="flex space-x-2">
              <button
                className="text-gray-500 focus:outline-none hover:text-red-500"
                onClick={() => setIsClicked(!isClicked)}
              >
                <FaRegTimesCircle />
              </button>
              <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={24} round />
              </FacebookShareButton>

              <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={24} round />
              </TwitterShareButton>

              <LinkedinShareButton url={url}>
                <LinkedinIcon size={24} round />
              </LinkedinShareButton>
            </div>
          ) : (
            <button
              className="text-gray-500 focus:outline-none hover:text-blue-500"
              onClick={() => setIsClicked(!isClicked)}
            >
              <FaShare />
            </button>
          )}
          <button
            className={`transform flex-end ${
              expanded ? "rotate-180" : "rotate-0"
            } ml-auto transition-transform`}
            aria-expanded={expanded}
            aria-label="show more"
            onClick={() => handleExpandBlog(blog.key)}
          >
            <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
}
