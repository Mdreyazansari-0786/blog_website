import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import Pagination from "../Components/Pagination";
import Category from "../Components/Category";
import Sidebar from "../Components/Sidebar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      // Replace this URL with your API endpoint.
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      // If filtering by category
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* Category section */}
      <div>
        <Category
          onSelectCategory={handleCategoryChange}
          activeCategory={activeCategory}
        />
      </div>

      {/* Blogs card section */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
        {/* here we put the sidebar components.. */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* Pagination section */}
      <div>
        {/* Add pagination buttons and logic here */}
        <div>
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            blogs={blogs}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
