import React from "react";
import {
  BsHouse,
  BsPersonCircle,
  BsBuildings,
  BsCpu,
  BsEasel2,
  BsEnvelope,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const SideNav = () => {
  const desktopScreen = useMediaQuery("(min-width: 640px)");

  return (
    <div className="sideNav mr-10">
      {desktopScreen ? (
        <div>
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
      ) : null}
    </div>
  );
};

export default SideNav;
