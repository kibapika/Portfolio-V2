import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
  const desktopScreen = useMediaQuery("(min-width: 640px)");

  return (
    <div className="h-[100%] sm:h-[58%] flex flex-col justify-center sm:justify-around items-center text-center ">
      <section className="h-[45%] sm:h-[60%] w-[90%] sm:w-[70%] sm:p-4 flex flex-col justify-center sm:justify-evenly bg-white bg-opacity-25  rounded-3xl sm:rounded-full text-[#4d4a48]">
        {desktopScreen ? (
          <h1 className="text-6xl font-semibold">Hi. I'm Eva Li.</h1>
        ) : (
          <div>
            <h1 className="text-6xl">Hi.</h1>
            <h1 className="font-bold text-6xl py-5">I'm Eva Li.</h1>
          </div>
        )}
        <h2 className="pb-1 text-5xl sm:text-6xl">A Software Engineeer.</h2>
      </section>
      <p className="w-[70%] sm:w-[50%] mt-6 sm:mt-8 text-xl sm:text-lg text-[#2b2929]">
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
