import React from "react";
import TopNav from "./TopNav";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[15%] min-h-[15%] flex flex-row justify-between content-center items-center my-4 mx-12">
      <h1 className="text-[2.2rem] sm:text-[2.35rem]">
        <NavLink to="/#home">EL</NavLink>
      </h1>
      <TopNav />
    </div>
  );
};

export default Header;
