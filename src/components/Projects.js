import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { projectDetails } from "./projectDetails";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="h-full flex flex-col sm:justify-center items-center">
      <section className="w-[80%] sm:w-[75%] h-[20%] sm:h-[15%] flex flex-col justify-center sm:justify-evenly items-center">
        <div className="w-full flex justify-center sm:justify-start">
          <h1
            className="h-[3.5rem] px-5 text-3xl sm:text-4xl text-[#4d4a48] font-bold flex justify-start items-center bg-white bg-opacity-65 drop-shadow rounded-full"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="300"
          >
            Projects
          </h1>
        </div>

        <p
          className="w-full text-lg sm:text-base font-bold text-center sm:text-start"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-delay="600"
        >
          Here is a collection of projects that have done on my own or with a
          team.
        </p>
      </section>
      <section
        className="w-[90%] sm:h-[78%] sm:w-[75%]"
        data-aos="fade-in"
        data-aos-easing="linear"
        data-aos-delay="800"
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          focusOnSelect={true}
          infinite
          centerMode={true}
          showDots={false}
          responsive={responsive}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {projectDetails.map((details) => (
            <Card className="w-full h-[37rem] sm:h-[28rem]" key={details.title}>
              <CardMedia
                className="h-[30%] sm:h-[50%]"
                image={details.png}
                title={details.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {details.title}
                </Typography>
                <Typography variant="body2">{details.desc}</Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                  {details.tech}
                </Typography>
              </CardContent>
              <CardActions>
                <Button href={details.git}>
                  <FiGithub className="text-xl" />
                </Button>
                <Button href={details.link}>
                  <FiExternalLink className="text-xl" />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
