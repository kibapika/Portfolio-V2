import React, { useEffect } from "react";
import {
  techDetails,
  techDetail1,
  techDetailsMobile,
  techDetailsMobile1,
  techDetailsMobile2,
} from "./techDetails";
import TechFxn from "./techFxn";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Tech() {
  const desktopScreen = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <section className="w-[75%] h-[16%] sm:h-[15%] flex flex-col justify-evenly items-center">
        <div className="w-full flex justify-center sm:justify-end">
          <h1
          className="h-[3rem] px-6 text-3xl sm:text-4xl text-[#4d4a48] font-bold flex justify-center rounded-full items-center bg-white bg-opacity-65 drop-shadow"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-delay="300"
        >
          Skills
        </h1>
        </div>
        <p
          className="w-full text-lg sm:text-base font-bold text-center sm:text-end"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-delay="600"
        >
          Here are some of the technology I have used in my projects.
        </p>
      </section>
      {desktopScreen ? (
        <section
          className="w-[75%] h-[75%] flex flex-col items-center justify-evenly"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-delay="800"
        >
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
      ) : (
        <section
          className="w-[100%] h-[53%] flex flex-col items-center justify-evenly"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-delay="800"
        >
          <div className="carousel-container">
            <div className="carousel-track">
              {Object.keys(techDetailsMobile).map((detailKey) => {
                return (
                  <TechFxn
                    png={techDetailsMobile[detailKey].png}
                    title={techDetailsMobile[detailKey].title}
                    key={techDetailsMobile[detailKey].key}
                  ></TechFxn>
                );
              })}
              {Object.keys(techDetailsMobile).map((detailKey) => {
                return (
                  <TechFxn
                    png={techDetailsMobile[detailKey].png}
                    title={techDetailsMobile[detailKey].title}
                    key={techDetailsMobile[detailKey].key}
                  ></TechFxn>
                );
              })}
            </div>
          </div>
          <div className="carousel-container">
            <div className="carousel-track1">
              {Object.keys(techDetailsMobile1).map((detailKey) => {
                return (
                  <TechFxn
                    png={techDetailsMobile1[detailKey].png}
                    title={techDetailsMobile1[detailKey].title}
                    key={techDetailsMobile1[detailKey].key}
                  ></TechFxn>
                );
              })}
              {Object.keys(techDetailsMobile1).map((detailKey) => {
                return (
                  <TechFxn
                    png={techDetailsMobile1[detailKey].png}
                    title={techDetailsMobile1[detailKey].title}
                    key={techDetailsMobile1[detailKey].key}
                  ></TechFxn>
                );
              })}
            </div>
          </div>
          <div className="carousel-container">
            <div className="carousel-track">
              {Object.keys(techDetailsMobile2).map((detailKey) => {
                return (
                  <TechFxn
                    png={techDetailsMobile2[detailKey].png}
                    title={techDetailsMobile2[detailKey].title}
                    key={techDetailsMobile2[detailKey].key}
                  ></TechFxn>
                );
              })}
              {Object.keys(techDetailsMobile2).map((detailKey) => {
                return (
                  <TechFxn
                    png={techDetailsMobile2[detailKey].png}
                    title={techDetailsMobile2[detailKey].title}
                    key={techDetailsMobile2[detailKey].key}
                  ></TechFxn>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
