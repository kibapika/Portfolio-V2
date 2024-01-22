import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";

export default function Exp() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-[65%]">
        <h1 className="w-full text-start text-5xl mb-4">
          Professional Experience
        </h1>
        <section>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className="w-[80%]">
                Student | Fullstack Academy
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                2022 - 2023
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                ▷ Intensive 19-weeks immersive software engineering coding
                bootcamp
                <br></br>
                <br></br>▷ Hands-on learning with daily projects and
                pair-programming
                <br></br>
                <br></br>▷ Focused on front-end and back-end web-development
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
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Users
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
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
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Advanced settings
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Personal data
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
