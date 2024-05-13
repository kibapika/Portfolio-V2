import React, {useEffect} from "react";
import facePic from "../img/evaLi.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-[100%] flex justify-center items-center">
      <div className="aboutBG h-[95%] w-[90%] sm:h-[88%] sm:w-[75%] flex flex-col sm:flex-row justify-evenly sm:justify-center bg-white bg-opacity-65 rounded-3xl items-center">
        <section className="w-[75%] sm:w-[50%] flex justify-center">
          <div
            className="facePic w-[70%] sm:w-[65%] flex flex-col justify-center rounded-t-full items-center outline outline-offset-2 outline-4 drop-shadow-xl"
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            <img alt="facePic" src={facePic} className="rounded-t-full" />
            <div className="w-full h-[3rem] bg-[#687351] flex justify-center items-center text-[#f5f4ef] font-bold text-center">
              <span>"Nice to meet you!"</span>
            </div>
          </div>
        </section>
        <section className="w-[85%] sm:w-[50%] text-center sm:text-start">
          <h1
            className="text-2xl sm:text-5xl sm:mb-6 text-[#4d4a48] mb-2 sm:mb-0 font-bold drop-shadow-md"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            My Journey.
          </h1>
          <p
            className="sm:w-[85%] text-sm sm:text-base"
            data-aos="fade-in"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            I am a graduate from Fullstack Academy and became a Software
            Engineer by honing my skills in Javascript, React, HTML, etc. I
            currently reside within the Greater New York City area.
            <br></br>
            <br></br>
            Prior to this role, I was a Registered Dietitian (RD) and still have
            my credentials. I decided to make this career change because of my
            curiosity of the ever growing and evolving world of technology. I
            wanted to challenge myself tso be able to learn the in's and out's
            of it to better use/understand it to eventually use my skills to
            help/aid peoples endevour. Technology was helpful and key part of my
            practice as a dietitian and I hope to become a full-fledged Software
            Engineer to use my new skills to further assit people in achieving
            their goals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
