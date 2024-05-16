import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import resume from "../img/resume.pdf";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu, Transition } from "@headlessui/react";
import { BsJustify } from "react-icons/bs";
import {
  BsHouse,
  BsPersonCircle,
  BsBuildings,
  BsCpu,
  BsEasel2,
  BsEnvelope,
  BsFileEarmarkText,
} from "react-icons/bs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TopNav = () => {
  const desktopScreen = useMediaQuery("(min-width: 640px)");

  return (
    <div>
      {desktopScreen ? (
        <div className="text-[1.1rem]">
          <a href={resume} target="_blank" rel="noreferrer">
            <button className="w-[8rem] border-2 rounded-md px-3 py-1.5 flex flex-row justify-evenly items-center cursor-point drop-shadow hover:bg-[#a2a392] hover:border-[#4d4a48] hover:text-[#4d4a48] hover:bg-opacity-65 hover:duration-20 hover:font-bold">
              <BsFileEarmarkText />
              <span>Resume</span>
            </button>
          </a>
        </div>
      ) : (
        <div className="w-[8rem] flex flex-row justify-between">
          <div className="text-[1.1rem]">
            <a href={resume}>
              <button className="border-2 text-[2rem] rounded-md px-3 py-1.5 flex flex-row justify-evenly items-center bg-[#f5f4ef] cursor-point text-[#4d4a48] hover:bg-[#FCA311] hover:border-[#6b705c] hover:text-[#6b705c] hover:bg-opacity-15 hover:duration-200">
                <BsFileEarmarkText />
              </button>
            </a>
          </div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.8 rounded-md bg-[#f5f4ef] px-3 py-3 shadow-sm ring-1 ring-inset ring-gray-300">
                <BsJustify
                  className="h-6 w-6 text-[#4d4a48] font-bold "
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-[11.5rem] origin-top-right rounded-md bg-[#f5f4ef] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/#home"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
                          "block flex flex-row justify-start items-center px-5 py-2.5 text-lg text-center"
                        )}
                      >
                        <BsHouse className="mr-3" />
                        Home
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/#about"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
                          "block flex flex-row justify-start items-center px-5 py-2.5 text-lg text-center"
                        )}
                      >
                        <BsPersonCircle className="mr-3" />
                        About
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/#exp"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
                          "block flex flex-row justify-start items-center px-5 py-2.5 text-lg text-center"
                        )}
                      >
                        <BsBuildings className="mr-3" />
                        Experience
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/#tech"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
                          "block flex flex-row justify-start items-center px-5 py-2.5 text-lg text-center"
                        )}
                      >
                        <BsCpu className="mr-3" />
                        Skills
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/#projects"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
                          "block flex flex-row justify-start items-center px-5 py-2.5 text-lg text-center"
                        )}
                      >
                        <BsEasel2 className="mr-3" />
                        Projects
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink
                        to="/#contact"
                        className={classNames(
                          active ? "bg-gray-100 text-gray-900" : "text-black",
                          "block flex flex-row justify-start items-center px-5 py-2.5 text-lg text-center"
                        )}
                      >
                        <BsEnvelope className="mr-3" />
                        Contact
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default TopNav;
