import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="h-[9%] min-h-[9%] flex flex-row justify-around sm:justify-between content-center items-center text-[#b1a7a6] sm:mx-24">
      <a
        href="https://github.com/kibapika/Portfolio-V2"
        rel="noreferrer"
        target="_blank"
        className="hover:text-black transition duration-300"
      >
        Designed & Built by Eva Li - Github
      </a>
      <section className="sm:w-[11%] flex flex-row justify-between text-[1.2rem]">
      <a
          href="https://github.com/kibapika"
          rel="noreferrer"
          target="_blank"
          className="hover:text-black transition duration-300"
        >
          <BsGithub />
        </a>
        <a
          href="http://www.linkedin.com/in/eva-li-rd"
          rel="noreferrer"
          target="_blank"
          className="pl-4 pr-3 sm:p-0 hover:text-black transition duration-300"
        >
          <BsLinkedin />
        </a>
      </section>
    </div>
  );
};

export default Footer;
