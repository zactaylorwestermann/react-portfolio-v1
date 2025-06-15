import React from "react";
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center px-[50px] w-full shadow-xl fixed mt-0 top-0 bg-white">
      <div className="flex justify-between items-center relative w-full">
        <div className="flex justify-center items-center">Logo</div>
        <div className="flex items-center">
          <ol className="flex justify-between items-center p-0 m-0 list-none">
            {navItems.map((item) => (
              <li className="navbar-link-container">
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="navbar-link-text"
                >
                  {item}
                </Link>
              </li>
            ))}
            {/*<li className="navbar-link-container">
              <Link className="navbar-link-text" to={"/"}>
                Home
              </Link>
            </li>
            <li className="navbar-link-container">
              <Link className="navbar-link-text" to={"/experience"}>
                Experience
              </Link>
            </li>
            <li className="navbar-link-container">
              <Link className="navbar-link-text" to={"/projects"}>
                Projects
              </Link>}
            </li>*/}
          </ol>
          <div className="block">
            <a
              className="bg-transparent border rounded-sm py-3 px-4 text-sm ml-[15px]"
              href=""
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
