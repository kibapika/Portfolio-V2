import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { projectDetails } from "./projectDetails";
import Tech from "./Tech";

export default function Projects() {
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
    <div className="h-full flex flex-col justify-center items-center">
      <section className="w-[78%] h-[18%] sm:h-[15%] flex flex-col justify-evenly items-center">
        <h1 className="w-full text-3xl sm:text-4xl text-[#4d4a48] font-bold text-center sm:text-start">
          Projects
        </h1>
      </section>

      <section className="w-[78%]">
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
            <Card sx={{ maxWidth: 455, height: 455 }} key={details.title}>
              <CardMedia
                sx={{ height: 240 }}
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
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
