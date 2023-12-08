import { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import BlogCard from "../components/BlogCard";
import MuiCard from "../components/MuiCard";
import { blogs } from "../constants/blogs";

function getBlogYears(blogs) {
  // Extract years from dates and remove duplicates
  let years = [
    ...new Set(
      blogs.map((blog) => new Date(blog.date.split("-")[2]).getFullYear())
    ),
  ];

  // Sort years in descending order
  years.sort((a, b) => b - a);

  years.unshift("All");

  return years;
}

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const sortedBlogs = [...blogs];
sortedBlogs.sort((a, b) => {
  const [dayA, monthA, yearA] = a.date.split("-");
  const [dayB, monthB, yearB] = b.date.split("-");

  const dateA = new Date(yearA, monthNames.indexOf(monthA), dayA);
  const dateB = new Date(yearB, monthNames.indexOf(monthB), dayB);

  return dateB - dateA; // for descending order
});

const News = () => {
  const [currentYear, setCurrentYear] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(sortedBlogs);

  useEffect(() => {
    if (currentYear !== "All") {
      setFilteredBlogs(
        sortedBlogs.filter((blog) => {
          const [day, month, year] = blog.date.split("-");
          return parseInt(year) === currentYear;
        })
      );
    } else {
      setFilteredBlogs(sortedBlogs);
    }
  }, [currentYear]);

  const handleYearChange = (year) => setCurrentYear(year);

  return (
    <div className="relative flex-grow flex sm:flex-row flex-col-reverse bg-primary w-full">
      <div className="absolute z-[0] w-[20%] h-[15%] right-10 bottom-10 pink__gradient" />
      <div className="absolute z-[1] w-[40%] h-[40%] right-10 bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[30%] h-[30%] right-20 bottom-20 blue__gradient" />

      <SideNav
        title="Year"
        navList={getBlogYears(blogs)}
        currentType={currentYear}
        onTypeChange={handleYearChange}
      />
      <div className="flex flex-col w-full">
        {filteredBlogs.map((blog) => (
          <MuiCard key={blog.key} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default News;
