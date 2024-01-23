import React from "react";
import { techDetails } from "./techDetails";
import TechFxn from "./techFxn";

export default function Tech() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="w-[76%] text-center sm:text-start text-2xl sm:text-4xl mb-8 text-[#4d4a48] font-bold">
        Technologies I have used...
      </h1>
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
    </div>
  );
}

// export default Tech;
