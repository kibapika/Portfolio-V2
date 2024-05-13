import * as React from "react";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Exp() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-full flex justify-center items-center">
      <div
        className="w-[88%] sm:w-[75%]"
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-delay="300"
      >
        <div
        className="flex justify-center items-center mb-3">
          <h1 className="w-full h-[3rem] sm:w-[60%] sm:h-[4rem] flex justify-center items-center font-bold text-2xl sm:text-4xl text-[#4d4a48] bg-white bg-opacity-65 rounded-full drop-shadow">
            Professional Experience
          </h1>
        </div>
        <section>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="sm:h-[3.25rem]"
              sx={{ backgroundColor: "#dfddca" }}
            >
              <Typography
                className="w-[85%] sm:w-[85%] text-[#4d4a48] text-center sm:text-start"
                sx={{ fontSize: { md: "1.125rem" }, lineHeight: "1.75rem" }}
              >
                Student | Fullstack Academy
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: "1.75rem" }}
              >
                2022 - 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-[#4d4a48]"
                sx={{ fontSize: "0.90rem" }}
              >
                ○ Intensive 19-weeks immersive software engineering coding
                bootcamp
                <br></br>
                <br></br>○ Hands-on learning with daily projects and
                pair-programming
                <br></br>
                <br></br>○ Focused on front-end and back-end web-development
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className="sm:h-[3.25rem]"
              sx={{ backgroundColor: "#b7bd9e" }}
            >
              <Typography
                className="w-[85%] sm:w-[85%] text-[#4d4a48] text-center sm:text-start"
                sx={{ fontSize: { md: "1.125rem" }, lineHeight: "1.75rem" }}
              >
                Registered Dietitian | Family Residences and Essential
                Enterprises, Inc.
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: "1.75rem" }}
              >
                2021 - 2022
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-[#4d4a48]"
                sx={{ fontSize: "0.90rem" }}
              >
                ○ Traveled to 50+group homes throughout New York to provide
                outpatient care to approximately 12 individuals with special
                needs per week
                <br></br>
                <br></br>○ Reviewed charts in order to conduct outpatient visits
                based on patient specific nutrition needs
                <br></br>
                <br></br>○ Conducted in-service and nutrition demos (e.g
                diabetic dietary guidelines, food safety) to nurses, behavioral
                specialists, and individuals based on their nutritional needs
                and concerns
                <br></br>
                <br></br>○ Managed schedule to coordinate care alongside nurses
                and supervisor for individuals
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              className="sm:h-[3.25rem]"
              sx={{ backgroundColor: "#798a6e" }}
            >
              <Typography
                className="w-[85%] sm:w-[85%] text-[#4d4a48] text-center sm:text-start"
                sx={{ fontSize: { md: "1.125rem" }, lineHeight: "1.75rem" }}
              >
                Registered Dietitian | The Pavilion at Queens for Rehabilitation
                & Nursing
              </Typography>
              <Typography
                sx={{ color: "text.secondary", lineHeight: "1.75rem" }}
              >
                2020 - 2021
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="text-[#4d4a48]"
                sx={{ fontSize: "0.90rem" }}
              >
                ○ Reviewed and monitored 90+ residents’ nutritional status,
                prescribed therapeutic diets, and developed care plans within
                the long-term nursing and short-term rehabilitation settings
                <br></br>
                <br></br>○ Oversaw the tracheostomy and ventilator floors
                specializing in tube feedings (40+ resident’s) in addition to
                general residents’ floors
                <br></br>
                <br></br>○ Mentored dietetic interns from multiple programs
                <br></br>
                <br></br>○ Attended family care plan meeting bi-weekly to
                discuss residents’ progress
                <br></br>
                <br></br>○ Maintained GeriMenu systems for menu management and
                nutritional data
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
