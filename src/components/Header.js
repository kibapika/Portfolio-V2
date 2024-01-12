import React from "react";
import TopNav from "./TopNav";
import { NavLink } from "react-router-dom";
import Home from "./Home";

const Header = () => {
  return (
    <div className="h-[100%]">
      <section className="h-[10%] min-h-[10%] sm:h-[15%] sm:min-h-[15%] flex flex-row justify-between content-center items-center sm:mx-12 mx-6">
        <h1 className="text-[2.2rem] sm:text-[2.35rem]">
          <NavLink to="/#home">EL</NavLink>
        </h1>
        <TopNav />
      </section>
      <section className="h-[85%] flex justify-center items-center">
        <Home />
      </section>
    </div>
  );
};

export default Header;
