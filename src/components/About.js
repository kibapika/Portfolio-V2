import React from "react";
import facePic from "../img/evaLi.jpeg";

const About = () => {
  return (
    <div className="h-[100%] flex flex-col sm:flex-row justify-evenly sm:justify-center items-center">
      <section className="flex justify-center">
        <img alt="facePic" src={facePic} className="w-[55%] rounded-t-full"/>
      </section>
      <section className="w-[85%] sm:w-[40%] sm:mr-16">
        <h1>My Journey.</h1>
        <p>
          I am a graduate from Fullstack Academy and became a Software Engineer
          by honing my skills in Javascript, React, HTML, etc. I currently
          reside within the Greater New York City area.
          <br></br>
          <br></br>
          Prior to this role, I was a Registered Dietitian (RD) and still have
          my credentials. I decided to make this career change because of my
          curiosity of the ever growing and evolving world of technology. I
          wanted to challenge myself to be able to learn the in's and out's of
          it to better use/understand it to eventually use my skills to help/aid
          peoples endevour. Technology was helpful and key part of my practice
          as a dietitian and I hope to become a full-fledged Software Engineer
          to use my new skills to further assit people in achieving their goals.
        </p>
      </section>
    </div>
  );
};

export default About;
