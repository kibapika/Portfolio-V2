import React from "react";
import {
  BsFillHouseFill,
  BsFillPersonVcardFill,
  BsBuildings,
  BsCpu,
  BsEasel2,
  BsEnvelope,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Social = () => {
  return (
    <div className="btn mr-8">
      <NavLink to="/#home">
        <BsFillHouseFill />
      </NavLink>
      <NavLink to="/#about">
        <BsFillPersonVcardFill />
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
  );
};

export default Social;
