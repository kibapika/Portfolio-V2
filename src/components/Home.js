import React from "react";

const Home = () => {
  return (
    <div className="h-[58%] flex flex-col justify-around items-center text-center ">
      <section className="h-[60%] w-[70%] p-4 flex flex-col justify-evenly text-6xl bg-white bg-opacity-25 rounded-full text-[#4d4a48]">
        <h1 className="font-semibold">Hi. I'm Eva Li.</h1>
        <h2 className="pb-1">A Software Engineeer.</h2>
      </section>
      <p className="w-[50%] mt-8 text-lg text-[#2b2929]">
        I'm a graduate from Fullstack Academy! I've been exploring and expanding
        my skills for{" "}
        <button className="text-[#972b1a] text-xl font-bold underline underline-offset-4 transition ease-in-out delay-150 hover:text-xl hover:-translate-y-1 hover:scale-110 duration-200">
          front-end
        </button>{" "}
        and{" "}
        <button className="text-[#972b1a] text-xl font-bold underline underline-offset-4 transition ease-in-out delay-150 hover:text-xl hover:-translate-y-1 hover:scale-110 duration-200">
          back-end
        </button>{" "}
        software development.
      </p>
    </div>
  );
};

export default Home;
