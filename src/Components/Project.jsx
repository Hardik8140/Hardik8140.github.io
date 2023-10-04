import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/index";
import { qeepProject } from "../assets";
import { Link } from "react-router-dom";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="project-card"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold project-title">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold project-tech-stack"
          style={{ margin: 0 }}
        >
          {experience.techStack}
        </p>
        <div>
          <a
            href={experience.github}
            target="_blank"
            className="underline project-github-link"
          >
            Code
          </a>{" "}
          <abbr></abbr> | <abbr></abbr>
          <a
            href={experience.live}
            target="_blank"
            className="underline project-deployed-link"
          >
            Live
          </a>
        </div>
        <img src={experience.image} alt="" className="my-3" />
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 project-description">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Project = () => {
  return (
    <div id="projects" className="border-white">
      <div className="mt-20 flex flex-col" id="projects">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Project, "work");
