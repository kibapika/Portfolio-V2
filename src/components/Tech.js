import React from "react";
import { techDetails, techDetail1 } from "./techDetails";
import TechFxn from "./techFxn";

export default function Tech() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <section className="w-[75%] h-[25%] sm:h-[15%] flex flex-col justify-evenly items-center">
        <h1 className="w-full text-3xl sm:text-4xl text-[#4d4a48] font-bold text-center sm:text-end">
          Skills
        </h1>
        <p className="w-full text-lg sm:text-base font-bold text-center sm:text-end">
          Here are some of the technology I have used in my projects.
        </p>
      </section>
      <section className="w-[100%] h-[45%] sm:w-[75%] sm:h-[75%] flex flex-col items-center">
        <div className="carousel-container">
          <div className="carousel-track">
            {Object.keys(techDetails).map((detailKey) => {
              return (
                <TechFxn
                  png={techDetails[detailKey].png}
                  title={techDetails[detailKey].title}
                  key={techDetails[detailKey].key}
                ></TechFxn>
              );
            })}
            {Object.keys(techDetails).map((detailKey) => {
              return (
                <TechFxn
                  png={techDetails[detailKey].png}
                  title={techDetails[detailKey].title}
                  key={techDetails[detailKey].key}
                ></TechFxn>
              );
            })}
          </div>
        </div>
        <div className="carousel-container">
          <div className="carousel-track1">
            {Object.keys(techDetail1).map((detailKey) => {
              return (
                <TechFxn
                  png={techDetail1[detailKey].png}
                  title={techDetail1[detailKey].title}
                  key={techDetail1[detailKey].key}
                ></TechFxn>
              );
            })}
            {Object.keys(techDetail1).map((detailKey) => {
              return (
                <TechFxn
                  png={techDetail1[detailKey].png}
                  title={techDetail1[detailKey].title}
                  key={techDetail1[detailKey].key}
                ></TechFxn>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// export default Tech;
