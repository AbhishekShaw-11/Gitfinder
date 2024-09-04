import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar mb-14 shadow-lg bg-neutral-content">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2">
          <FaGithub className="inline  text-black pr-2 mx-2 text-3xl" />
          <h1 to="/" className="text-lg text-black font-bold align-middle ">
            GitHub Finder
          </h1>
        </div>
        <div className="flex-1 px-2 mx-2 ">
          <div className="flex justify-end">
            <button className="color border-spacing-3 border-black btn btn-ghost btn-sm rounded-btn mr-2">
              <h4 to="/" className="text-lg text-black font-bold align-middle ">
                Home
              </h4>
            </button>
            <button className="color border-spacing-3 border-black btn btn-ghost btn-sm rounded-btn">
              <h4 to="/" className="text-lg text-black font-bold align-middle ">
                About
              </h4>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
