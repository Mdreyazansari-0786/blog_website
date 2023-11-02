import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  console.log(filteredBlogs);

  return (
    <div className="grid md:grid-cols-3 sm:grid-flow-col-2 grid-flow-col-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src={blog.image} alt="" className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2">
            {" "}
            <FaUsers className="inline-flex items-center mb-2  text-gray-400" />
            {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
