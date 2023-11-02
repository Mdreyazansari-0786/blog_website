import React from "react";
import BlogPage from "./BlogPage";

const Blogs = () => {
  return (
    <div>
      {/* <div className="py-40 bg-black text-white text-center px-4">
        <h2 className="text-5xl lg:7xl leading-snug font-bold mb-5">
          Blog Page
        </h2>
      </div> */}
      {/* all blogs containers. */}
      <div className="max-w-7xl mx-auto ">
        <BlogPage/>
      </div>
    </div>
  );
};

export default Blogs;
