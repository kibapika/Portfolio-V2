import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[9%] min-h-[9%] flex flex-row justify-around sm:justify-between content-center items-center text-[#a2a392] my-4 sm:mx-24">
      <a
        href="https://github.com/kibapika/Portfolio-V2"
        rel="noreferrer"
        target="_blank"
        className="hover:text-[#d08c60] transition duration-200"
      >
        Designed & Built by Eva Li - Github
      </a>
      <section className="sm:w-[11%] flex flex-row justify-between text-[1.4rem]">
      <a
          href="https://github.com/kibapika"
          rel="noreferrer"
          target="_blank"
          className="hover:text-[#d08c60] transition duration-200"
        >
          <BsGithub />
        </a>
        <a
          href="http://www.linkedin.com/in/eva-li-rd"
          rel="noreferrer"
          target="_blank"
          className="pl-5 sm:p-0 hover:text-[#d08c60] transition duration-200"
        >
          <BsLinkedin />
        </a>
      </section>
    </div>
  );
};

export default Footer;
