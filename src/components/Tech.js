import React from "react";
import { techDetails, techDetail1 } from "./techDetails";
import TechFxn from "./techFxn";

export default function Tech() {
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <section className="w-[76%] h-[25%] flex items-center text-center sm:text-start">
        <h1 className="text-2xl sm:text-4xl text-[#4d4a48] font-bold">
          Technologies I've used...
        </h1>
      </section>

      <section className="h-[75%] flex flex-col justify-evenly">
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
          <div className="carousel-track">
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
