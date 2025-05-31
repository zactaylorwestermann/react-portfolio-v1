import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/experience"}>Experience</Link>
      <Link to={"/projects"}>Projects</Link>
    </div>
  );
};

export default Navbar;
