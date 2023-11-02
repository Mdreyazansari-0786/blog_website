import React from "react";
import { useLoaderData } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import {FaClock} from "react-icons/fa6"
import Sidebar from "../Components/Sidebar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-white text-center px-4">
        <h1 className="text-5xl lg:7xl leading-snug font-bold mb-5">
          single blog page
        </h1>
      </div>
      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
            <div>
                <img src={image} alt="" className="w-full mx-auto rounded cursor-pointer" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-500  cursor-pointer mt-8">{title}</h2>
            <p> <FaUser className="inline-flex items-center mr-2"/> {author} | {published_date}</p>
            <p className="mb-3 text-gray-800"><FaClock className="inline-flex items-center mr-2"/> {reading_time}</p>
            <p className="text-base text-gray-600 mb-6">{content}</p>
            <div>
                <p className="text-base text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum odio nulla quod, animi aperiam deleniti fugit at, nam soluta, adipisci recusandae accusamus incidunt excepturi libero corporis magni deserunt impedit.</p>
                <p className="text-base text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum odio nulla quod, animi aperiam deleniti fugit at, nam soluta, adipisci recusandae accusamus incidunt excepturi libero corporis magni deserunt impedit.</p>
                <p className="text-base text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum odio nulla quod, animi aperiam deleniti fugit at, nam soluta, adipisci recusandae accusamus incidunt excepturi libero corporis magni deserunt impedit.</p>
                <p className="text-base text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum odio nulla quod, animi aperiam deleniti fugit at, nam soluta, adipisci recusandae accusamus incidunt excepturi libero corporis magni deserunt impedit.</p>
                <p className="text-base text-gray-600 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum odio nulla quod, animi aperiam deleniti fugit at, nam soluta, adipisci recusandae accusamus incidunt excepturi libero corporis magni deserunt impedit.</p>
            </div>

        </div>
        <div className="lg:w-1/2">
            <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
