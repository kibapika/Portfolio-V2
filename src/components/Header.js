import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[15%] min-h-[15%] flex flex-row justify-around content-center items-center">
      <h1 className="text-[2.2rem] sm:text-[2.35rem]">
        <NavLink to="/#home">EL</NavLink>
      </h1>
      <Nav />
    </div>
  );
};

export default Header;
