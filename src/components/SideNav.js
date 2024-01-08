import React, { useState, useEffect } from "react";
import {
  BsHouse,
  BsPersonCircle,
  BsBuildings,
  BsCpu,
  BsEasel2,
  BsEnvelope,
  BsArrowUp
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const SideNav = () => {
  const desktopScreen = useMediaQuery("(min-width: 640px)");

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div >
      {desktopScreen ? (
        <div className="sideNav mr-10">
          <NavLink to="/#home">
            <BsHouse />
          </NavLink>
          <NavLink to="/#about">
            <BsPersonCircle />
          </NavLink>
          <NavLink to="/#exp">
            <BsBuildings />
          </NavLink>
          <NavLink to="/#tech">
            <BsCpu />
          </NavLink>
          <NavLink to="/#projects">
            <BsEasel2 />
          </NavLink>
          <NavLink to="/#contact">
            <BsEnvelope />
          </NavLink>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={backToTop}
            className={` ${
              showButton ? `inline-block` : `hidden`
            } fixed bottom-[50px] right-[25px] p-4 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
            <BsArrowUp
              aria-hidden="true"
              className="w-6 h-6"absolute bottom-0 right-0
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default SideNav;
