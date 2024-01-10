import React from "react";
import compPic from "../img/comp.jpg"

const Home = () => {
  return (
    <div className="h-[100%] flex flex-row justify-center items-center">
      <section className="w-[35%] flex flex-col">
        <h1>Hi. I'm Eva Li.</h1>
        <h2>A Software Engineeer.</h2>
        <p className="w-[90%]">
          I'm a graduate from Fullstack Academy! I honed my skills for front-end
          and back-end software development.
        </p>
      </section>
      <img alt="homePic" src={compPic} className="h-[80%] rounded-full" />
    </div>
  );
};

export default Home;
