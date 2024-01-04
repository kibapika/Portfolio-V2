import React from "react";
import { NavLink } from "react-router-dom";
import resume from "../img/resume.pdf";

const NavBar = () => {
  return (
    <div className="sm:w-[50%] flex flex-row justify-around content-center items-center text-[1.1rem]">
      <NavLink to="/#about">About</NavLink>
      <NavLink to="/#exp">Experience</NavLink>
      <NavLink to="/#tech">Tech</NavLink>
      <NavLink to="/#projects">Projects</NavLink>
      <NavLink to="/#contact">Contact</NavLink>
      <button>
        <a href={resume}>Resume</a>
      </button>
    </div>
  );
};

export default NavBar;
